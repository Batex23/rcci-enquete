// Postes de TP supplémentaires du laboratoire 3D, inspirés des travaux pratiques
// « Incendie – risques chimiques » (IUT HSE) : simulation de feu en compartiment (zone chaude,
// à la manière de CFAST), propagation de flamme dans un tube (LIE / LSE, explosimétrie), point éclair.
// Les modèles sont volontairement simplifiés : ordres de grandeur pédagogiques, pas des calculs d'ingénierie.
import * as THREE from '../../vendor/three.module.min.js';
import { canvasFlamme } from '../engine/textures.js';
import { clamp, melange, nb, mat, boite, cyl, texCanvas, paillasse } from './laboOutils.js';
import { $, $$, esc, ref } from '../ui.js';
import { son } from '../game/sons.js';

export const TP_PLUS = [
  { id: 'cellule', ic: '🏠', nom: 'Cellule d\'essai', dom: 'traces', desc: 'Feu de canapé dans une pièce de 2,4 × 3,6 m : porte, trappe, sprinkleur. Regarde la couche de fumées chaudes descendre.' },
  { id: 'tube', ic: '💥', nom: 'Tube de déflagration', dom: 'raisonnement', desc: 'Gaz + air dans un tube : entre quelles limites la flamme se propage-t-elle, et à quelle vitesse ? Explosimètre à l\'appui.' },
  { id: 'eclair', ic: '🧪', nom: 'Point éclair', dom: 'labo', desc: 'Chauffe un liquide et présente une flamme : point éclair, point de feu, auto-inflammation. Identifie un liquide inconnu.' },
];
const SOURCE = 'D\'après les travaux pratiques « Incendie – risques chimiques » de l\'IUT HSE.';

const texFlamme = () => { const t = new THREE.CanvasTexture(canvasFlamme()); t.colorSpace = THREE.SRGBColorSpace; return t; };
const texHalo = (c0, c1) => texCanvas(64, 64, (c) => { const g = c.createRadialGradient(32, 32, 1, 32, 32, 31); g.addColorStop(0, c0); g.addColorStop(0.35, c1); g.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = g; c.fillRect(0, 0, 64, 64); });
const sprite = (tex, add = true, opacity = 1) => new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, opacity, blending: add ? THREE.AdditiveBlending : THREE.NormalBlending }));
const fmtT = (s) => `${Math.floor(s / 60)} min ${String(Math.floor(s % 60)).padStart(2, '0')} s`;

// Petit graphique sur canvas
function graphe(cv, { xmax, series, axes, lignes = [] }) {
  const c = cv.getContext('2d'); const W = cv.width, H = cv.height; const g = 34, d = 34, h = 10, b = 22;
  c.clearRect(0, 0, W, H); c.fillStyle = '#fff'; c.fillRect(0, 0, W, H);
  c.strokeStyle = '#d0dde5'; c.lineWidth = 1; c.strokeRect(g, h, W - g - d, H - h - b);
  c.font = '10px sans-serif'; c.fillStyle = '#5b7385';
  c.textAlign = 'center'; for (let i = 0; i <= 4; i++) { const x = g + (W - g - d) * i / 4; c.fillText(axes.x(xmax * i / 4), x, H - 8); }
  for (const l of lignes) { const x = g + (W - g - d) * l.x / xmax; c.strokeStyle = l.coul; c.setLineDash([4, 3]); c.beginPath(); c.moveTo(x, h); c.lineTo(x, H - b); c.stroke(); c.setLineDash([]); c.fillStyle = l.coul; c.fillText(l.t, x, h + 9); }
  for (const s of series) {
    c.strokeStyle = c.fillStyle = s.coul; c.lineWidth = 2;
    const px = (p) => [g + (W - g - d) * p[0] / xmax, H - b - (H - h - b) * clamp(p[1] / s.max)];
    if (s.points) { for (const p of s.pts) { const [x, y] = px(p); c.beginPath(); c.arc(x, y, 3.5, 0, 7); c.fill(); } }
    else { c.beginPath(); s.pts.forEach((p, i) => { const [x, y] = px(p); i ? c.lineTo(x, y) : c.moveTo(x, y); }); c.stroke(); }
    c.textAlign = s.cote === 'd' ? 'left' : 'right';
    for (let i = 0; i <= 2; i++) c.fillText(s.lab(s.max * i / 2), s.cote === 'd' ? W - d + 3 : g - 3, H - b - (H - h - b) * i / 2 + 3);
  }
}

// ================================================================== TP 4 : cellule d'essai (feu en compartiment)
const CEL = { x: 4.9, z: 2.0, L: 3.6, W: 2.4, H: 2.4 };
const PORTE = { w: 0.8, h: 2.0 };
const T0 = 20;
const AIRE = CEL.L * CEL.W, VOL = AIRE * CEL.H;

export function creerCellule(scene, L) {
  const g = new THREE.Group(); g.position.set(CEL.x, 0, CEL.z); scene.add(g);
  const hx = CEL.L / 2, hz = CEL.W / 2, H = CEL.H;
  const platre = mat('#eeebe4', { roughness: 0.95 });
  const dos = mat('#c9ccc8');
  boite(g, CEL.L + 0.16, 0.05, CEL.W + 0.16, mat('#9b7b55', { roughness: 0.8 }), 0, 0.025, 0);
  // parois du fond et de droite : texture où se dépose la suie
  const toiles = [];
  for (const [w, x, z, r] of [[CEL.L, 0, -hz, 0], [CEL.W, hx, 0, -Math.PI / 2]]) {
    const cv = document.createElement('canvas'); cv.width = Math.round(w * 100); cv.height = 240;
    const c = cv.getContext('2d');
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
    const o = new THREE.Mesh(new THREE.PlaneGeometry(w, H), new THREE.MeshStandardMaterial({ map: t, roughness: 0.95 }));
    o.position.set(x, H / 2, z); o.rotation.y = r; g.add(o);
    toiles.push({ cv, c, t });
  }
  boite(g, CEL.L + 0.16, H, 0.08, dos, 0, H / 2, -hz - 0.045);
  boite(g, 0.08, H, CEL.W + 0.16, dos, hx + 0.045, H / 2, 0);
  // paroi gauche avec la porte (0,8 × 2 m)
  const pz0 = -0.2, pz1 = pz0 + PORTE.w;
  boite(g, 0.08, H, pz0 + hz, platre, -hx - 0.04, H / 2, (-hz + pz0) / 2);
  boite(g, 0.08, H, hz - pz1, platre, -hx - 0.04, H / 2, (pz1 + hz) / 2);
  boite(g, 0.08, H - PORTE.h, PORTE.w, platre, -hx - 0.04, PORTE.h + (H - PORTE.h) / 2, (pz0 + pz1) / 2);
  const pivot = new THREE.Group(); pivot.position.set(-hx - 0.04, 0, pz0); g.add(pivot);
  boite(pivot, 0.05, PORTE.h, PORTE.w, mat('#8a6a4a'), 0, PORTE.h / 2, PORTE.w / 2);
  boite(pivot, 0.06, 0.03, 0.12, mat('#cfd3d6', { metalness: 0.7 }), -0.04, 1.0, PORTE.w - 0.1);
  boite(pivot, 0.01, 0.12, 0.2, mat('#c0392b'), -0.03, 1.55, PORTE.w / 2); // signalétique « porte CF »
  // plafond (visible de l'intérieur seulement) et arêtes hautes
  const plafond = new THREE.Mesh(new THREE.PlaneGeometry(CEL.L, CEL.W), platre.clone()); plafond.rotation.x = Math.PI / 2; plafond.position.y = H; g.add(plafond);
  const arete = mat('#8c969c', { metalness: 0.5 });
  boite(g, CEL.L + 0.16, 0.06, 0.06, arete, 0, H + 0.03, -hz); boite(g, CEL.L + 0.16, 0.06, 0.06, arete, 0, H + 0.03, hz);
  boite(g, 0.06, 0.06, CEL.W + 0.16, arete, -hx, H + 0.03, 0); boite(g, 0.06, 0.06, CEL.W + 0.16, arete, hx, H + 0.03, 0);
  for (const x of [-hx, hx]) boite(g, 0.06, H, 0.06, arete, x, H / 2, hz);
  // vitre d'observation en façade
  const vitre = new THREE.Mesh(new THREE.PlaneGeometry(CEL.L, H), new THREE.MeshStandardMaterial({ color: '#cfe8f3', transparent: true, opacity: 0.1, roughness: 0.05, depthWrite: false }));
  vitre.position.set(0, H / 2, hz); g.add(vitre);
  // trappe de désenfumage en plafond (cheminée visible du dessus)
  const trappe = new THREE.Group(); trappe.position.set(0.9, H, -0.3); g.add(trappe);
  for (const [dx, dz, w, d] of [[0, -0.5, 1, 0.04], [0, 0.5, 1, 0.04], [-0.5, 0, 0.04, 1], [0.5, 0, 0.04, 1]]) boite(trappe, w, 0.25, d, mat('#9aa3a9', { metalness: 0.5 }), dx, 0.125, dz);
  const ouvTrappe = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: '#111' })); ouvTrappe.rotation.x = -Math.PI / 2; ouvTrappe.position.y = 0.01; trappe.add(ouvTrappe);
  // canapé
  const canape = new THREE.Group(); canape.position.set(0.2, 0.05, -0.55); g.add(canape);
  const tissu = mat('#7a4e3a', { roughness: 0.95 });
  boite(canape, 1.7, 0.42, 0.85, tissu, 0, 0.21, 0); boite(canape, 1.7, 0.45, 0.2, tissu, 0, 0.62, -0.33);
  boite(canape, 0.2, 0.6, 0.85, tissu, -0.85, 0.3, 0); boite(canape, 0.2, 0.6, 0.85, tissu, 0.85, 0.3, 0);
  // détecteur et sprinkleur sous plafond
  cyl(g, 0.06, 0.06, 0.04, mat('#f4f4f2'), 1.1, H - 0.02, 0.3);
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.015, 8, 6), new THREE.MeshBasicMaterial({ color: '#330000' })); led.position.set(1.1, H - 0.05, 0.3); g.add(led);
  const spk = new THREE.Group(); spk.position.set(0.2, H, -0.45); g.add(spk);
  cyl(spk, 0.015, 0.015, 0.08, mat('#c8a24a', { metalness: 0.7 }), 0, -0.04, 0); cyl(spk, 0.04, 0.04, 0.008, mat('#c8a24a', { metalness: 0.7 }), 0, -0.09, 0);
  const NP = 140; const pos = new Float32Array(NP * 3); const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pluie = new THREE.Points(pg, new THREE.PointsMaterial({ color: '#bfe3ff', size: 0.03, transparent: true, opacity: 0.8, depthWrite: false })); pluie.visible = false; spk.add(pluie);
  for (let i = 0; i < NP; i++) pos.set([0, -Math.random() * 2.3, 0], i * 3);
  // flammes, couche chaude, lumière
  const tf = texFlamme();
  const flammes = [0, 1, 2].map(() => { const s = sprite(tf); s.center.set(0.5, 0.02); s.scale.set(0.001, 0.001, 1); g.add(s); return s; });
  const flammesFO = Array.from({ length: 9 }, (_, i) => { const s = sprite(tf); s.center.set(0.5, 0.02); s.position.set(-1.5 + (i % 3) * 1.4 + Math.random() * 0.3, 0.06, -0.9 + Math.floor(i / 3) * 0.8); s.scale.set(0.001, 0.001, 1); g.add(s); return s; });
  const fumeeMat = new THREE.MeshStandardMaterial({ color: '#2e2a27', transparent: true, opacity: 0.6, depthWrite: false, roughness: 1, emissive: new THREE.Color(0) });
  const couche = new THREE.Mesh(new THREE.BoxGeometry(CEL.L - 0.04, 1, CEL.W - 0.04), fumeeMat); couche.visible = false; g.add(couche);
  const lum = new THREE.PointLight('#ff8a3a', 0, 6, 1.4); lum.position.set(0.2, 0.9, -0.3); g.add(lum);
  const boule = sprite(texHalo('rgba(255,240,180,1)', 'rgba(255,120,20,.8)')); boule.position.set(-hx - 0.4, 1.4, (pz0 + pz1) / 2); boule.scale.set(0.001, 0.001, 1); g.add(boule);

  const S = { cfg: { porte: 'fermee', trappe: 0, sprinkleur: false, asservie: false }, run: false, vitesse: 15, essais: [], journal: [], hist: [] };
  L.cellule = S;
  function peindreBase() {
    for (const t of toiles) {
      const { c, cv } = t; c.fillStyle = '#efece5'; c.fillRect(0, 0, cv.width, cv.height);
      c.fillStyle = '#34495e'; c.font = 'bold 11px sans-serif';
      for (let y = 0.5; y < H; y += 0.5) { const py = cv.height * (1 - y / H); c.fillRect(0, py - 1, 10, 2); c.fillText(nb(y, 1).replace(',0', '') + ' m', 13, py + 4); }
      t.t.needsUpdate = true;
    }
  }
  function reset() {
    Object.assign(S, { t: 0, Q: 0, E: 0, suie: 0, manuel: false, Etot: 450000, Tu: T0, Tl: T0, zi: H, y: 0.232, X: 20.9, flashover: false, detect57: null, detect70: null, sprAct: null, kSpr: 1, etouffe: false, consomme: false, fini: false, porteOuverte: S.cfg.porte === 'ouverte', Tmax: T0, ziMin: H, Xmin: 20.9, Qmax: 0, journal: [], hist: [], backdraft: 0, evts: [] });
    peindreBase(); led.material.color.set('#330000'); pluie.visible = false; tissu.color.set('#7a4e3a');
  }
  const log = (txt, evt) => { S.journal.unshift({ t: Math.round(S.t), txt }); if (evt) S.evts.push(evt); S.majUI?.(false); };

  function pas(dt) {
    S.t += dt;
    const Ad = S.porteOuverte ? PORTE.w * PORTE.h : 0, Av = S.cfg.trappe;
    const AsH = Ad * Math.sqrt(PORTE.h) + Av * 0.5;
    // puissance « libre » (croissance en t², canapé ≈ 2 MW), limitée par le combustible restant
    let Qlib = Math.min(0.012 * S.t * S.t, 2000);
    if (S.flashover) Qlib = 3500;
    const reste = S.Etot - S.E;
    if (reste <= 0) Qlib = 0; else if (reste < 0.2 * S.Etot) Qlib *= reste / (0.2 * S.Etot);
    // le foyer respire la couche basse : renouvelée par la porte tant que l'interface reste au-dessus du foyer
    const Xf = Ad > 0 ? S.X + (20.9 - S.X) * clamp((S.zi - 0.3) / 0.8) : S.X;
    const fO2 = clamp((Xf - 13) / 4);
    let Q = Qlib * fO2;
    if (AsH > 0) Q = Math.min(Q, 1500 * AsH + 60);
    if (S.sprAct != null) { S.kSpr *= Math.exp(-dt / 45); Q *= S.kSpr; }
    S.Q = Q; S.E += Q * dt;
    // fumées : la suie produite s'accumule, les ouvertures en évacuent une partie
    S.suie = Math.max(0, S.suie + Q * dt / 30000 - S.suie * (Ad + Av * 1.5) * 0.004 * dt);
    // couche chaude
    const dT = Math.max(0, S.Tu - T0); const rhoU = 353 / (S.Tu + 273); const gr = 9.81;
    let mOut = 0;
    if (Ad > 0 && S.zi < PORTE.h) mOut += 0.68 * (2 / 3) * PORTE.w * rhoU * Math.sqrt(2 * gr * dT / (T0 + 273)) * Math.pow(PORTE.h - S.zi, 1.5);
    if (Av > 0) mOut += 0.6 * Av * rhoU * Math.sqrt(2 * gr * (H - S.zi) * dT / (T0 + 273));
    const Qc = 0.75 * Q; const zf = Math.max(0.05, S.zi - 0.45);
    // air entraîné par le panache jusqu'à l'interface (Heskestad) : dans la flamme, puis au-dessus
    const Lfl = Math.max(0.2, 0.235 * Math.pow(Math.max(Q, 1), 0.4) - 1.02);
    const mP = Qc <= 1 ? 0 : zf < Lfl ? 0.0056 * Qc * zf / Lfl : 0.071 * Math.cbrt(Qc) * Math.pow(zf, 5 / 3) + 0.0018 * Qc;
    if (S.flashover) S.zi = Math.max(0.05, S.zi - dt * 0.4);
    else if (Q < 5 && dT < 15) { if (Ad + Av > 0) S.zi = Math.min(H, S.zi + dt * 0.01); }
    else S.zi = clamp(S.zi + (mOut - mP) / (rhoU * AIRE) * dt, 0.05, H);
    const mU = Math.max(0.3, rhoU * AIRE * (H - S.zi));
    // pertes vers les parois : échange en surface (convection + rayonnement) en série avec la conduction dans le plâtre
    const Tk = S.Tu + 273, T0k = T0 + 273;
    const hs = 0.012 + 0.9 * 5.67e-11 * (Tk * Tk + T0k * T0k) * (Tk + T0k);
    const hk = Math.sqrt(0.48 * 1440 * 840 / Math.max(10, S.t)) / 1000;
    const heff = 1 / (1 / hs + 1 / hk) * (S.sprAct != null ? 5 : 1);
    const Au = AIRE + 2 * (CEL.L + CEL.W) * (H - S.zi);
    const dTn = (mU * dT + dt * Qc) / (mU + dt * (mP + heff * Au));
    S.Tu = T0 + Math.min(dTn, 1050);
    S.Tl = T0 + dTn * (0.06 + 0.3 * (1 - S.zi / H));
    // oxygène (bilan simple sur toute la pièce)
    const mIn = mOut + (AsH > 0 ? 0 : 0.003);
    S.y = clamp(S.y + (mIn * (0.232 - S.y) - Q / 13100) * dt / (1.2 * VOL), 0, 0.232);
    S.X = S.y / 1.105 * 100;
    // événements
    S.Tmax = Math.max(S.Tmax, S.Tu); S.ziMin = Math.min(S.ziMin, S.zi); S.Xmin = Math.min(S.Xmin, S.X); S.Qmax = Math.max(S.Qmax, Q);
    if (S.detect57 == null && S.Tu >= 57) {
      S.detect57 = S.t; led.material.color.set('#ff2020'); log('Détecteur thermique : 57 °C atteints sous plafond, alarme.', 'detect');
      if (S.cfg.asservie && S.porteOuverte) { S.porteOuverte = false; log('Porte coupe-feu asservie : elle se ferme automatiquement.', 'cf'); }
    }
    if (S.detect70 == null && S.Tu >= 70) S.detect70 = S.t;
    if (S.cfg.sprinkleur && S.sprAct == null && S.Tu >= 68) { S.sprAct = S.t; pluie.visible = true; log('Sprinkleur déclenché (ampoule à 68 °C) : le feu est contrôlé et la couche refroidie.', 'sprinkleur'); }
    if (!S.flashover && S.Tu >= 600) { S.flashover = true; S.Etot += 600000; log('Embrasement généralisé (flashover) : la couche dépasse 600 °C, tout ce qui est combustible s\'enflamme.', 'flashover'); son('ko'); }
    if (!S.etouffe && S.t > 60 && Qlib > 50 && fO2 < 0.15) {
      S.etouffe = true;
      if (Ad > 0) log('Feu contrôlé par la ventilation : il brûle autant que l\'air entrant par la porte le permet. Les gaz imbrûlés brûlent à l\'extérieur, en sortie de porte.', 'ventilation');
      else log(`Le feu s\'étouffe : plus assez d\'oxygène (${nb(S.X)} %). Il couve, la pièce reste chargée de gaz chauds imbrûlés.`, 'etouffe');
    }
    if (S.etouffe && fO2 > 0.6) S.etouffe = false;
    if (!S.consomme && S.E >= S.Etot * 0.98) { S.consomme = true; log('Le combustible est presque entièrement consommé : le feu décroît.', 'consomme'); }
  }

  S.porte = () => {
    if (!S.run) return;
    S.porteOuverte = !S.porteOuverte; S.manuel = true;
    if (S.porteOuverte && S.X < 16 && S.suie > 0.5 && S.E < S.Etot * 0.9) { S.backdraft = 1; log('⚠ Apport d\'air brutal dans une pièce chargée de gaz chauds imbrûlés : le feu repart violemment (risque d\'explosion de fumées / backdraft).', 'backdraft'); son('ko'); }
    else log(S.porteOuverte ? 'Porte ouverte.' : 'Porte fermée.');
  };
  S.lancer = () => { reset(); S.run = true; son('ok'); S.majUI?.(false); };
  S.arreter = () => { if (!S.run) return; terminer(); };
  function terminer() {
    S.run = false; S.fini = true;
    log('Fin de l\'essai : les pompiers du labo éteignent la cellule et la ventilent.');
    const c = S.cfg;
    const cle = `${c.porte}|${c.trappe}|${c.sprinkleur ? 1 : 0}|${c.asservie ? 1 : 0}|${S.manuel ? 1 : 0}`;
    const lib = [c.porte === 'ouverte' ? 'porte ouverte' : 'porte fermée', c.trappe ? `trappe ${nb(c.trappe)} m²` : '', c.sprinkleur ? 'sprinkleur' : '', c.asservie ? 'porte CF asservie' : '', S.manuel ? 'porte manœuvrée pendant le feu' : ''].filter(Boolean).join(', ');
    S.essais.push({ cle, lib, Tmax: S.Tmax, ziMin: S.ziMin, Xmin: S.Xmin, evts: [...new Set(S.evts)] });
    S.Q = 0; S.flashover = false; S.Tu = T0 + 10; S.Tl = T0 + 5; pluie.visible = false; S.suie = Math.min(S.suie, 1.2);
    son('trouve'); S.majUI?.(false);
  }
  reset();

  S.update = (dt, temps) => {
    if (S.run) {
      const total = dt * S.vitesse; const n = Math.ceil(total / 0.1);
      for (let i = 0; i < n; i++) pas(total / n);
      S._h = (S._h || 0) + total;
      if (S._h >= 5) { S._h = 0; S.hist.push([S.t, S.Tu, S.zi]); }
      // dépôts de suie au-dessus de l'interface
      S._s = (S._s || 0) + total;
      if (S._s >= 2) {
        const k = (0.006 + 0.04 * clamp((S.Tu - T0) / 250)) * clamp(S.suie) * (S._s / 2); S._s = 0;
        for (const t of toiles) { const hh = t.cv.height * (1 - S.zi / H); t.c.fillStyle = `rgba(24,20,18,${k})`; t.c.fillRect(0, 0, t.cv.width, hh); t.t.needsUpdate = true; }
        if (S.flashover) tissu.color.lerp(new THREE.Color('#1a1411'), 0.05);
      }
      if (S.t >= 900 || (S.t > 150 && S.Q < 2 && S.Tu < 45)) terminer();
      S._ui = (S._ui || 0) + dt; if (S._ui > 0.25) { S._ui = 0; S.majUI?.(true); }
    }
    if (!S.run && S.fini && S.suie > 0) S.suie = Math.max(0, S.suie - dt * 0.3); // ventilation après l'essai : on voit les dépôts sur les murs
    // rendu
    pivot.rotation.y += ((S.porteOuverte ? -1.45 : 0) - pivot.rotation.y) * Math.min(1, dt * 4);
    trappe.visible = S.cfg.trappe > 0; const s = Math.sqrt(S.cfg.trappe || 0.3); trappe.scale.set(s, 1, s);
    spk.visible = S.cfg.sprinkleur;
    const Lf = clamp(0.235 * Math.pow(Math.max(S.Q, 0), 0.4) - 1.02 * 1.0, 0, 2.3);
    const fl = 1 + Math.sin(temps * 15) * 0.08;
    flammes.forEach((f, i) => { f.position.set(0.2 + (i - 1) * 0.45, 0.47, -0.5); const k = i === 1 ? 1 : 0.75; f.scale.set(S.Q > 3 ? 0.55 * k + Lf * 0.25 : 0.001, S.Q > 3 ? (0.15 + Lf) * k * (i === 1 ? fl : 1 + Math.sin(temps * 9 + i) * 0.1) : 0.001, 1); });
    flammesFO.forEach((f, i) => { const on = S.flashover && S.Q > 300; f.scale.set(on ? 0.7 : 0.001, on ? (1.2 + Math.sin(temps * 7 + i) * 0.3) * clamp(S.Q / 3000) : 0.001, 1); });
    lum.intensity = clamp(S.Q / 600, 0, 4) * 2.5;
    const ep = CEL.H - S.zi;
    couche.visible = ep > 0.03 && S.suie > 0.02;
    couche.scale.y = Math.max(0.01, ep); couche.position.y = S.zi + ep / 2;
    fumeeMat.opacity = clamp(0.15 + S.suie * 0.75, 0.15, 0.9);
    fumeeMat.emissive.set('#ff5a1a').multiplyScalar(clamp((S.Tu - 450) / 600) * 0.35);
    if (pluie.visible) for (let i = 0; i < NP; i++) { let y = pos[i * 3 + 1] - dt * 3; if (y < -2.3) y = -0.1; pos[i * 3 + 1] = y; const r = -y * 0.35; const a = i * 2.4; pos[i * 3] = Math.cos(a) * r * ((i % 7) / 7); pos[i * 3 + 2] = Math.sin(a) * r * ((i % 5) / 5); }
    if (pluie.visible) pg.attributes.position.needsUpdate = true;
    if (S.backdraft > 0) { S.backdraft -= dt * 0.8; const b = Math.sin(clamp(S.backdraft) * Math.PI); boule.scale.set(b * 2.2 + 0.001, b * 1.8 + 0.001, 1); } else boule.scale.set(0.001, 0.001, 1);
  };
  return { id: 'cellule', groupe: g, ancre: new THREE.Vector3(CEL.x, 3.0, CEL.z), cam: new THREE.Vector3(4.4, 2.7, 6.4), cible: new THREE.Vector3(5.35, 1.05, 1.9) };
}

const Q_CELLULE = [
  { q: 'Porte fermée, le feu s\'est étouffé faute d\'oxygène et la pièce est pleine de fumées chaudes. Pourquoi l\'ouverture de la porte est-elle dangereuse ?', ref: '5.10', texte: 'feu sous-ventilé backdraft',
    opts: [{ t: 'L\'air frais qui entre peut enflammer d\'un coup les gaz chauds imbrûlés (explosion de fumées)', ok: true, fb: 'C\'est ce que tu as vu dans la cellule : un feu « contrôlé par la ventilation » repart violemment dès qu\'on lui redonne de l\'air.' }, { t: 'Aucun danger : un feu étouffé est éteint', ok: false, fb: 'Il couve : il ne manque que l\'oxygène.' }, { t: 'Le danger vient seulement de la chaleur rayonnée par la porte', ok: false, fb: 'Le vrai danger est l\'inflammation brutale des gaz imbrûlés.' }] },
  { q: 'Dans une pièce sinistrée, une ligne horizontale nette de suie court sur tous les murs à 1,2 m du sol. Qu\'indique-t-elle d\'abord ?', ref: '6.3.2.3', texte: 'ligne de démarcation couche chaude',
    opts: [{ t: 'La hauteur à laquelle est descendue l\'interface de la couche de fumées chaudes', ok: true, fb: 'C\'est une ligne de démarcation de couche chaude. Elle renseigne sur le développement du feu et la ventilation, pas directement sur l\'origine.' }, { t: 'La hauteur du foyer d\'origine', ok: false, fb: 'Non : la couche chaude occupe toute la pièce, quel que soit l\'endroit du foyer.' }, { t: 'Une coulure de liquide inflammable', ok: false, fb: 'Une ligne horizontale sur tous les murs n\'a rien d\'une coulure.' }] },
  { q: 'Après l\'embrasement généralisé, le sol est brûlé un peu partout. Que doit-on en penser ?', ref: '6.3.2.4', texte: 'embrasement tracés au sol',
    opts: [{ t: 'Le rayonnement de la couche chaude peut brûler tout le sol : ces tracés ne prouvent pas un accélérant', ok: true, fb: 'Après un flashover, les tracés au sol sont fréquents et peuvent masquer ceux du début du feu.' }, { t: 'Plusieurs foyers ont forcément été allumés', ok: false, fb: 'Non : un seul canapé a suffi dans la cellule.' }, { t: 'Le sol était recouvert de liquide inflammable', ok: false, fb: 'Il n\'y en avait pas dans la cellule.' }] },
  { q: 'Que change une trappe de désenfumage en plafond ?', ref: '5.10', texte: 'désenfumage hauteur libre',
    opts: [{ t: 'Elle évacue une partie des fumées : la couche reste plus haute et l\'air respirable dure plus longtemps', ok: true, fb: 'La hauteur libre de fumées est mieux conservée. Elle apporte aussi un peu d\'air au feu.' }, { t: 'Elle éteint le feu', ok: false, fb: 'Elle n\'éteint rien : elle évacue des fumées.' }, { t: 'Elle fait descendre la couche plus vite', ok: false, fb: 'C\'est l\'inverse.' }] },
];

export function panCellule(pb, O) {
  const S = O.L.cellule;
  let cv = null;
  const draw = () => {
    const c = S.cfg, dis = S.run ? 'disabled' : '';
    const configs = new Set(S.essais.map(e => e.cle));
    pb.innerHTML = `<p class="small">Une pièce de 3,6 × 2,4 × 2,4 m, murs en plâtre, un canapé au centre. Règle la ventilation et les équipements, puis lance <b>15 minutes de feu</b> (accélérées). Observe la couche de fumées chaudes, sa température et l'oxygène. <span class="muted">${esc(SOURCE)}</span></p>
      <div class="l3-lbl">Porte (0,8 × 2 m)</div><div class="l3-chips">${[['fermee', 'Fermée'], ['ouverte', 'Ouverte']].map(([v, l]) => `<button data-porte="${v}" class="${c.porte === v ? 'on' : ''}" ${dis}>${l}</button>`).join('')}</div>
      <div class="l3-lbl">Trappe de désenfumage en plafond</div><div class="l3-chips">${[[0, 'Aucune'], [0.3, '0,3 m²'], [0.7, '0,7 m²']].map(([v, l]) => `<button data-trappe="${v}" class="${c.trappe === v ? 'on' : ''}" ${dis}>${l}</button>`).join('')}</div>
      <div class="l3-lbl">Équipements</div><div class="l3-chips"><button data-opt="sprinkleur" class="${c.sprinkleur ? 'on' : ''}" ${dis}>💧 Sprinkleur<small>ampoule 68 °C</small></button><button data-opt="asservie" class="${c.asservie ? 'on' : ''}" ${dis}>🚪 Porte CF asservie<small>se ferme à la détection (57 °C)</small></button></div>
      <div class="l3-mesure l3-m6"><div><span>Temps</span><b id="c-t">—</b></div><div><span>Puissance</span><b id="c-q">—</b></div><div><span>Couche haute</span><b id="c-tu">—</b></div><div><span>Couche basse</span><b id="c-tl">—</b></div><div><span>Hauteur libre</span><b id="c-z">—</b></div><div><span>Oxygène</span><b id="c-o">—</b></div></div>
      <canvas class="l3-graphe" width="380" height="140"></canvas>
      <div class="small muted"><span style="color:#c0392b">━</span> température de la couche haute · <span style="color:#2f7fb0">━</span> hauteur de l'interface (hauteur libre de fumées)</div>
      <div class="l3-row">${S.run ? `<button class="btn-j" data-p>🚪 ${S.porteOuverte ? 'Fermer' : 'Ouvrir'} la porte</button><button class="btn-j ghost" data-v>⏩ ×${S.vitesse === 15 ? 30 : 15}</button><button class="btn-j ghost" data-stop>⏹ Arrêter</button>` : '<button class="btn-j go" data-go>🔥 Allumer le canapé</button>'}</div>
      <div class="l3-journal">${S.journal.length ? S.journal.map(j => `<div><b>${fmtT(j.t)}</b> · ${esc(j.txt)}</div>`).join('') : '<div class="muted">Les événements (détection, sprinkleur, embrasement…) s\'affichent ici.</div>'}</div>
      ${S.essais.length ? `<table class="l3-tab"><tr><th>Essai</th><th>T max</th><th>Hauteur libre min</th><th>O₂ min</th></tr>${S.essais.map(e => `<tr><td>${esc(e.lib)}${e.evts.includes('flashover') ? ' 🔥' : ''}${e.evts.includes('etouffe') ? ' 💨' : ''}${e.evts.includes('backdraft') ? ' ⚠' : ''}</td><td>${Math.round(e.Tmax)} °C</td><td>${nb(e.ziMin, 2)} m</td><td>${nb(e.Xmin)} %</td></tr>`).join('')}</table><div class="small muted">🔥 embrasement généralisé · 💨 feu étouffé · ⚠ reprise violente à l'ouverture</div>` : ''}
      <details class="l3-note"><summary>À retenir</summary>Les fumées chaudes montent et s'accumulent sous le plafond : c'est la <b>couche chaude</b>. Elle descend tant que le panache l'alimente plus vite que les ouvertures ne l'évacuent. Sur les parois, elle laisse une <b>ligne de démarcation</b>. Sans air, le feu s'étouffe mais reste dangereux. Vers 600 °C sous plafond, la pièce entière peut s'embraser. ${ref('5.10')} ${ref('6.3.2.3')}<br><span class="muted">Modèle de zones simplifié, à la manière de CFAST (NIST) : ordres de grandeur pédagogiques.</span></details>
      ${configs.size >= 3 ? '<div class="l3-row"><button class="btn-j go" data-quiz>📝 Répondre aux questions de Lina</button></div>' : `<div class="small">Fais au moins trois essais avec des réglages différents pour débloquer les questions (${configs.size} / 3). Essaie la porte fermée, puis ouverte, puis un sprinkleur ou une trappe.</div>`}`;
    cv = $('.l3-graphe', pb);
    $$('[data-porte]', pb).forEach(b => b.onclick = () => { c.porte = b.dataset.porte; S.porteOuverte = c.porte === 'ouverte'; draw(); });
    $$('[data-trappe]', pb).forEach(b => b.onclick = () => { c.trappe = +b.dataset.trappe; draw(); });
    $$('[data-opt]', pb).forEach(b => b.onclick = () => { c[b.dataset.opt] = !c[b.dataset.opt]; draw(); });
    $('[data-go]', pb)?.addEventListener('click', () => S.lancer());
    $('[data-stop]', pb)?.addEventListener('click', () => S.arreter());
    $('[data-p]', pb)?.addEventListener('click', () => { S.porte(); draw(); });
    $('[data-v]', pb)?.addEventListener('click', () => { S.vitesse = S.vitesse === 15 ? 30 : 15; draw(); });
    $('[data-quiz]', pb)?.addEventListener('click', () => O.quiz(pb, Q_CELLULE, (bons, n) => {
      const ok = bons >= n - 1;
      pb.innerHTML = `<div class="l3-bilan"><div class="gros">${bons} / ${n}</div>${ok ? O.recompenser('cellule', 'traces', 30) : '<p>Encore un effort : refais un essai et observe la couche chaude.</p>'}<div class="l3-row"><button class="btn-j" data-re>↻ Retour à la cellule</button></div></div>`;
      $('[data-re]', pb).onclick = draw;
    }));
    leger();
  };
  const leger = () => {
    const e = id => $(id, pb); if (!e('#c-t')) return;
    e('#c-t').textContent = S.t ? fmtT(S.t) : '—';
    e('#c-q').textContent = S.t ? (S.Q >= 1000 ? `${nb(S.Q / 1000, 2)} MW` : `${Math.round(S.Q)} kW`) : '—';
    e('#c-tu').textContent = S.t ? `${Math.round(S.Tu)} °C` : '—';
    e('#c-tl').textContent = S.t ? `${Math.round(S.Tl)} °C` : '—';
    e('#c-z').textContent = S.t ? `${nb(S.zi, 2)} m` : '—';
    e('#c-o').textContent = S.t ? `${nb(S.X)} %` : '—';
    if (cv) graphe(cv, { xmax: 900, axes: { x: v => `${Math.round(v / 60)} min` }, series: [
      { pts: S.hist.map(h => [h[0], h[1]]), max: 1000, coul: '#c0392b', lab: v => `${Math.round(v)}°`, cote: 'g' },
      { pts: S.hist.map(h => [h[0], h[2]]), max: 2.4, coul: '#2f7fb0', lab: v => `${nb(v, 1)} m`, cote: 'd' }] });
  };
  S.majUI = (l) => { if (!$('#c-t', pb)) return; if (l) leger(); else draw(); };
  draw();
}

// ================================================================== TP 5 : tube de déflagration + explosimètre
// Limites d'inflammabilité (% vol. dans l'air) : NF EN IEC 60079-20-1 (d'autres tables donnent 5–15 % pour le méthane).
export const GAZ = {
  methane: { nom: 'Méthane (gaz naturel)', f: 'CH₄ + 2 O₂ → CO₂ + 2 H₂O', lie: 4.4, lse: 17, sto: 9.5, vmax: 3.0, comb: 9.5, sens: 1 },
  propane: { nom: 'Propane', f: 'C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O', lie: 1.7, lse: 10.9, sto: 4.0, vmax: 3.6, comb: 23.8, sens: 0.6 },
};
export function vitesseFlamme(gz, c) {
  const G = GAZ[gz]; if (c < G.lie || c > G.lse) return 0;
  const cm = G.sto * 1.07; const d = c < cm ? (cm - c) / (cm - G.lie) : (c - cm) / (G.lse - cm);
  return 0.35 + (G.vmax - 0.35) * (1 - d * d);
}
// %LIE lu sur un explosimètre étalonné méthane : %LIE vrai du gaz × sensibilité relative
export const lieVrai = (gz, c) => c / GAZ[gz].lie * 100;
const lieAffiche = (gz, c) => lieVrai(gz, c) * GAZ[gz].sens;
const pctLie = v => (v >= 100 ? '≥ 100 % LIE ⚠' : `${Math.round(v)} % LIE`);

export function creerTube(scene, L) {
  paillasse(scene, -3.4, 3.6, 3.6, 0.8);
  const g = new THREE.Group(); g.position.set(-3.4, 0.92, 3.55); scene.add(g);
  const Y = 0.16, X0 = -1.5, X1 = 1.5;
  const verre = new THREE.MeshStandardMaterial({ color: '#d8eef6', transparent: true, opacity: 0.28, roughness: 0.05, depthWrite: false, side: THREE.DoubleSide });
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 3, 28, 1, true), verre); tube.rotation.z = Math.PI / 2; tube.position.set(0, Y, 0); g.add(tube);
  for (const x of [-1.3, -0.45, 0.45, 1.3]) { boite(g, 0.03, Y - 0.03, 0.03, mat('#8c969c', { metalness: 0.5 }), x, (Y - 0.03) / 2, 0); const col = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.008, 6, 18), mat('#8c969c', { metalness: 0.5 })); col.rotation.y = Math.PI / 2; col.position.set(x, Y, 0); g.add(col); }
  for (const x of [-1, 1]) { const r = new THREE.Mesh(new THREE.TorusGeometry(0.038, 0.006, 6, 18), mat('#111')); r.rotation.y = Math.PI / 2; r.position.set(x, Y, 0); g.add(r); }
  boite(g, 0.06, 0.09, 0.09, mat('#2a2f33'), X0 - 0.03, Y, 0); // bouchon + bougie d'allumage
  cyl(g, 0.012, 0.012, 0.08, mat('#e8e8e8'), X0 - 0.06, Y + 0.07, 0);
  const vanne = boite(g, 0.05, 0.06, 0.06, mat('#c0392b'), X1 + 0.03, Y, 0);
  // gaz dans le tube et zone brûlée
  const gazM = new THREE.MeshBasicMaterial({ color: '#9fd4ff', transparent: true, opacity: 0.08, depthWrite: false });
  const gazC = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 3, 16), gazM); gazC.rotation.z = Math.PI / 2; gazC.position.set(0, Y, 0); g.add(gazC);
  const brulM = new THREE.MeshBasicMaterial({ color: '#ff8a2a', transparent: true, opacity: 0, depthWrite: false });
  const brul = new THREE.Mesh(new THREE.CylinderGeometry(0.031, 0.031, 1, 16), brulM); brul.rotation.z = Math.PI / 2; g.add(brul);
  const front = sprite(texHalo('rgba(255,255,255,1)', 'rgba(90,140,255,.9)')); front.scale.set(0.001, 0.001, 1); g.add(front);
  const etincelle = sprite(texHalo('rgba(255,255,255,1)', 'rgba(170,200,255,.9)')); etincelle.position.set(X0 + 0.02, Y, 0); etincelle.scale.set(0.001, 0.001, 1); g.add(etincelle);
  const sortie = sprite(texFlamme(), true); sortie.center.set(0.5, 0.02); sortie.position.set(X1 + 0.08, Y, 0); sortie.scale.set(0.001, 0.001, 1); g.add(sortie);
  // rotamètres (air / gaz)
  const rot = new THREE.Group(); rot.position.set(X0 - 0.25, 0, -0.25); g.add(rot);
  boite(rot, 0.3, 0.55, 0.03, mat('#e8eaec'), 0, 0.3, -0.02);
  const flotteurs = [-0.07, 0.07].map(x => { cyl(rot, 0.018, 0.018, 0.4, verre, x, 0.3, 0.01, 12); const f = new THREE.Mesh(new THREE.SphereGeometry(0.014, 10, 8), mat(x < 0 ? '#2f7fb0' : '#e67e22')); f.position.set(x, 0.12, 0.01); rot.add(f); return f; });
  // explosimètre
  const ex = new THREE.Group(); ex.position.set(X1 + 0.25, 0, 0.12); ex.rotation.y = -0.4; g.add(ex);
  boite(ex, 0.09, 0.16, 0.05, mat('#f1c40f', { roughness: 0.5 }), 0, 0.08, 0);
  const cvE = document.createElement('canvas'); cvE.width = 128; cvE.height = 96; const tE = new THREE.CanvasTexture(cvE); tE.colorSpace = THREE.SRGBColorSpace;
  const ecran = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.052), new THREE.MeshBasicMaterial({ map: tE })); ecran.position.set(0, 0.11, 0.026); ex.add(ecran);
  cyl(ex, 0.006, 0.006, 0.12, mat('#333'), 0.03, 0.2, 0, 8);

  const T = { gaz: 'methane', c: 9.5, front: null, ralenti: 4, mesures: [], msg: '', t: 0, t1: null, t2: null };
  L.tube = T;
  function majEcran() {
    const c = cvE.getContext('2d'); const v = lieAffiche(T.gaz, T.c);
    c.fillStyle = v >= 20 ? '#3a0d0d' : '#0d1a12'; c.fillRect(0, 0, 128, 96);
    c.fillStyle = v >= 20 ? '#ff5a3a' : v >= 10 ? '#ffb347' : '#5cff8a'; c.textAlign = 'center';
    c.font = 'bold 34px monospace'; c.fillText(v >= 100 ? '>100' : `${Math.round(v)}`, 64, 48);
    c.font = 'bold 15px sans-serif'; c.fillText('% LIE', 64, 70); c.fillText(v >= 20 ? 'ALARME 2' : v >= 10 ? 'ALARME 1' : 'CH4', 64, 90);
    tE.needsUpdate = true;
  }
  T.setC = (v) => { T.c = v; majEcran(); };
  T.setGaz = (gz) => { T.gaz = gz; T.c = GAZ[gz].sto; majEcran(); };
  T.etincelle = () => {
    if (T.front != null) return;
    T.flash = 1; son('trouve');
    const G = GAZ[T.gaz]; const v = vitesseFlamme(T.gaz, T.c);
    if (!v) {
      T.msg = T.c < G.lie ? `Mélange trop pauvre (${nb(T.c)} % < LIE ${nb(G.lie)} %) : l'étincelle ne fait rien, la flamme ne se propage pas.` : `Mélange trop riche (${nb(T.c)} % > LSE ${nb(G.lse)} %) : pas de déflagration dans le tube. À la sortie, au contact de l'air, une flamme de diffusion peut brûler.`;
      if (T.c > G.lse) T.diffusion = 2.5;
      T.mesures.push({ gaz: T.gaz, c: T.c, v: 0 }); T.majUI?.(false); return;
    }
    T.msg = ''; T.vReel = v * (1 + (Math.random() - 0.5) * 0.06); T.front = X0; T.t = 0; T.t1 = T.t2 = null; T.majUI?.(false);
  };
  T.update = (dt, temps) => {
    if (T.front != null) {
      const ds = dt / T.ralenti; T.t += ds; const x0 = T.front; T.front += T.vReel * ds;
      if (T.t1 == null && x0 < -1 && T.front >= -1) T.t1 = T.t - (T.front + 1) / T.vReel;
      if (T.t2 == null && x0 < 1 && T.front >= 1) { T.t2 = T.t - (T.front - 1) / T.vReel; const dtm = T.t2 - T.t1; T.mesures.push({ gaz: T.gaz, c: T.c, dt: dtm, v: 2 / dtm }); T.majUI?.(false); }
      if (T.front >= X1) { T.front = null; T.brule = 1; }
    }
    if (T.front != null) {
      front.position.set(T.front, Y, 0); front.scale.set(0.16, 0.16, 1);
      const len = T.front - X0; brul.scale.y = Math.max(0.001, len); brul.position.set(X0 + len / 2, Y, 0); brulM.opacity = 0.55;
    } else {
      front.scale.set(0.001, 0.001, 1);
      if (T.brule > 0) { T.brule -= dt * 0.6; brul.scale.y = 3; brul.position.set(0, Y, 0); brulM.opacity = clamp(T.brule) * 0.55; } else brulM.opacity = 0;
    }
    if (T.flash > 0) { T.flash -= dt * 4; const s = clamp(T.flash) * 0.12 + 0.001; etincelle.scale.set(s, s, 1); } else etincelle.scale.set(0.001, 0.001, 1);
    if (T.diffusion > 0) { T.diffusion -= dt; const s = clamp(T.diffusion); sortie.scale.set(0.06 * s + 0.001, (0.18 + Math.sin(temps * 20) * 0.02) * s + 0.001, 1); } else sortie.scale.set(0.001, 0.001, 1);
    gazM.opacity = 0.03 + clamp(T.c / 20) * 0.18;
    flotteurs[0].position.y = 0.12 + 0.3 * 0.75; flotteurs[1].position.y = 0.12 + 0.3 * clamp(T.c / 20);
    vanne.rotation.x = T.front != null ? Math.PI / 2 : 0;
  };
  majEcran();
  return { id: 'tube', groupe: g, ancre: new THREE.Vector3(-3.4, 1.55, 3.55), cam: new THREE.Vector3(-2.75, 2.6, 6.6), cible: new THREE.Vector3(-2.75, 0.95, 3.55) };
}

const Q_TUBE = [
  { q: 'Méthane à 3 % dans l\'air (LIE ≈ 4,4 %). Qu\'affiche un explosimètre étalonné pour le méthane ?', ref: '21', texte: 'explosimètre LIE',
    opts: [{ t: 'Environ 68 % de la LIE', ok: true, fb: '3 ÷ 4,4 × 100 ≈ 68 % LIE : on est déjà aux deux tiers de la limite d\'explosivité.' }, { t: '3 %', ok: false, fb: 'L\'appareil affiche un pourcentage de la LIE, pas une concentration.' }, { t: '100 % : ça explose', ok: false, fb: 'Sous la LIE, le mélange ne peut pas déflagrer.' }] },
  { q: 'D\'après tes mesures, où la flamme va-t-elle le plus vite ?', ref: '21', texte: 'vitesse de flamme stœchiométrie',
    opts: [{ t: 'Près du mélange stœchiométrique (un peu côté riche)', ok: true, fb: 'C\'est là que combustible et oxygène sont en proportions « idéales » : la combustion est la plus énergique.' }, { t: 'Juste au-dessus de la LIE', ok: false, fb: 'Près des limites, la flamme est lente.' }, { t: 'Au-delà de la LSE', ok: false, fb: 'Au-delà de la LSE, elle ne se propage plus.' }] },
  { q: 'Pourquoi le gaz transporté dans un gazoduc ne peut-il pas exploser à l\'intérieur du tuyau ?', ref: '21', texte: 'LSE gazoduc',
    opts: [{ t: 'Il est presque pur, très au-dessus de la LSE : trop riche pour brûler', ok: true, fb: 'Sans air, pas de mélange inflammable. Le danger commence quand le gaz fuit et se dilue dans l\'air.' }, { t: 'Le tuyau est trop froid', ok: false, fb: 'La température n\'est pas la raison.' }, { t: 'La pression empêche toute flamme', ok: false, fb: 'C\'est la composition du mélange qui compte.' }] },
  { q: 'Gaz inconnu (ou mélange) : quel gaz de référence choisir sur l\'explosimètre ?', ref: '21', texte: 'explosimètre gaz inconnu',
    opts: [{ t: 'Celui auquel l\'appareil est le moins sensible, pour ne jamais sous-estimer le danger', ok: true, fb: 'On se place dans le cas le plus défavorable : l\'affichage sera alors une valeur par excès.' }, { t: 'Toujours le méthane, puisque l\'appareil est étalonné ainsi', ok: false, fb: 'Pour d\'autres gaz, l\'appareil peut afficher beaucoup moins que la réalité.' }, { t: 'Peu importe, tous les gaz donnent la même réponse', ok: false, fb: 'Non : la réponse dépend du gaz (tu l\'as vu avec le propane).' }] },
  { q: 'Explosion de gaz dans une maison : murs soufflés mais très peu de traces de feu. Le mélange était plutôt…', ref: '21', texte: 'explosion mélange pauvre riche',
    opts: [{ t: 'Pauvre (proche de la LIE) : tout le gaz a brûlé dans l\'explosion', ok: true, fb: 'Un mélange pauvre ne laisse pas de gaz en excès pour entretenir un feu ensuite. Un mélange riche, lui, est souvent suivi d\'un incendie.' }, { t: 'Riche (proche de la LSE)', ok: false, fb: 'Un mélange riche laisse du gaz imbrûlé qui brûle ensuite : on attend plus de traces de feu.' }, { t: 'Impossible à dire', ok: false, fb: 'La NFPA 921 relie justement l\'importance du feu après l\'explosion à la richesse du mélange.' }] },
];

export function panTube(pb, O) {
  const T = O.L.tube; let cv = null;
  const draw = () => {
    const G = GAZ[T.gaz]; const n = T.c > 0 ? (100 - T.c) / T.c : Infinity;
    const ms = T.mesures.filter(m => m.gaz === T.gaz);
    const dedans = ms.filter(m => m.v > 0).length, dehors = ms.filter(m => m.v === 0).length;
    const pret = dedans >= 3 && dehors >= 1;
    pb.innerHTML = `<p class="small">Remplis le tube d'un mélange gaz + air, provoque une étincelle et chronomètre le front de flamme entre les deux repères (2 m). Cherche les <b>limites</b> du mélange inflammable. <span class="muted">${esc(SOURCE)}</span></p>
      <div class="l3-lbl">Gaz</div><div class="l3-chips">${Object.entries(GAZ).map(([id, x]) => `<button data-g="${id}" class="${T.gaz === id ? 'on' : ''}" ${T.front != null ? 'disabled' : ''}>${esc(x.nom)}</button>`).join('')}</div>
      <label class="l3-slider">Concentration de gaz dans l'air : <b id="t-c">${nb(T.c)} %</b> <span class="small muted" id="t-n">(n = air/gaz ≈ ${isFinite(n) ? nb(n) : '∞'})</span><input type="range" min="0" max="20" step="0.5" value="${T.c}" ${T.front != null ? 'disabled' : ''}></label>
      <div class="l3-mesure"><div><span>Explosimètre (étalonné CH₄)</span><b id="t-ex">${pctLie(lieAffiche(T.gaz, T.c))}</b></div><div><span>Vraie valeur pour ce gaz</span><b id="t-vr">${pctLie(lieVrai(T.gaz, T.c))}</b></div></div>
      ${T.gaz !== 'methane' ? `<div class="small muted">Étalonné sur le méthane, l'appareil sous-estime le propane (coefficient d'exemple : ×${nb(1 / G.sens, 1)}). Se référer à la notice du constructeur.</div>` : ''}
      <div class="l3-row"><button class="btn-j go" data-e ${T.front != null ? 'disabled' : ''}>⚡ Étincelle</button><button class="btn-j ghost" data-r>${T.ralenti > 1 ? '🐢 Ralenti ×' + T.ralenti : '▶ Temps réel'}</button></div>
      ${T.msg ? `<div class="verdict ko">${esc(T.msg)}</div>` : ''}
      ${T.front != null ? '<div class="small">Front de flamme en cours…</div>' : ''}
      <canvas class="l3-graphe" width="380" height="140"></canvas>
      ${ms.length ? `<table class="l3-tab"><tr><th>% gaz</th><th>n</th><th>Temps entre repères</th><th>Vitesse</th></tr>${ms.slice(-8).map(m => `<tr><td>${nb(m.c)}</td><td>${nb((100 - m.c) / m.c)}</td><td>${m.v ? `${nb(m.dt, 2)} s` : '—'}</td><td>${m.v ? `${nb(m.v, 2)} m/s` : 'pas de propagation'}</td></tr>`).join('')}</table>` : ''}
      <details class="l3-note"><summary>À retenir</summary>Un mélange gaz/air ne déflagre qu'entre la <b>LIE</b> et la <b>LSE</b> (${esc(G.nom)} : ${nb(G.lie)} à ${nb(G.lse)} % selon la norme NF EN IEC 60079-20-1). La vitesse est maximale près de la stœchiométrie : ${esc(G.f)}, soit ${nb(G.sto)} % de gaz (pouvoir comburivore ≈ ${nb(G.comb)} m³ d'air par m³ de gaz). Une grille fine (lampe de Davy) arrête une déflagration, pas une détonation. ${ref('21')}</details>
      ${pret ? '<div class="l3-row"><button class="btn-j go" data-quiz>📝 Répondre aux questions de Lina</button></div>' : `<div class="small">Pour débloquer les questions : au moins 3 tirs qui se propagent et 1 tir hors limites (${dedans} / 3 · ${dehors} / 1).</div>`}`;
    cv = $('.l3-graphe', pb);
    graphe(cv, { xmax: 20, axes: { x: v => `${Math.round(v)} %` }, lignes: ms.length >= 4 ? [{ x: G.lie, t: 'LIE', coul: '#e67e22' }, { x: G.lse, t: 'LSE', coul: '#e67e22' }, { x: G.sto, t: 'stœchio', coul: '#2e9e5b' }] : [],
      series: [{ pts: ms.map(m => [m.c, m.v]), max: 4, coul: '#2f7fb0', lab: v => `${nb(v, 0)} m/s`, cote: 'g', points: true }] });
    const sl = $('input[type=range]', pb);
    sl.oninput = () => { T.setC(+sl.value); const nn = T.c > 0 ? (100 - T.c) / T.c : Infinity; $('#t-c', pb).textContent = `${nb(T.c)} %`; $('#t-n', pb).textContent = `(n = air/gaz ≈ ${isFinite(nn) ? nb(nn) : '∞'})`; $('#t-ex', pb).textContent = pctLie(lieAffiche(T.gaz, T.c)); $('#t-vr', pb).textContent = pctLie(lieVrai(T.gaz, T.c)); };
    $$('[data-g]', pb).forEach(b => b.onclick = () => { T.setGaz(b.dataset.g); T.msg = ''; draw(); });
    $('[data-e]', pb).onclick = () => T.etincelle();
    $('[data-r]', pb).onclick = () => { T.ralenti = T.ralenti > 1 ? 1 : 4; draw(); };
    $('[data-quiz]', pb)?.addEventListener('click', () => O.quiz(pb, Q_TUBE, (bons, nq) => {
      const ok = bons >= nq - 1;
      pb.innerHTML = `<div class="l3-bilan"><div class="gros">${bons} / ${nq}</div>${ok ? O.recompenser('tube', 'raisonnement', 30) : '<p>Encore un effort : refais quelques tirs et regarde la courbe.</p>'}<div class="l3-row"><button class="btn-j" data-re>↻ Retour au tube</button></div></div>`;
      $('[data-re]', pb).onclick = draw;
    }));
  };
  T.majUI = () => { if ($('[data-e]', pb)) draw(); };
  draw();
}

// ================================================================== TP 6 : point éclair
// Ordres de grandeur indicatifs : les valeurs varient selon les produits et les méthodes d'essai.
export const LIQUIDES = {
  essence: { nom: 'Essence (SP95)', eclair: -40, feu: -35, ai: 280, eb: 90, coul: '#f3e6a0', tE: '< −40 °C', tAI: '≈ 250–450 °C' },
  ethanol: { nom: 'Éthanol (alcool à brûler)', eclair: 13, feu: 21, ai: 365, eb: 78, coul: '#eef6ff', tE: '≈ 13 °C', tAI: '≈ 360–420 °C' },
  whitespirit: { nom: 'White-spirit', eclair: 38, feu: 45, ai: 240, eb: 170, coul: '#f5f2e6', tE: '≈ 38–43 °C', tAI: '≈ 230–260 °C' },
  gazole: { nom: 'Gazole', eclair: 62, feu: 72, ai: 250, eb: 320, coul: '#e8c65a', tE: '> 55 °C (souvent 60–80)', tAI: '≈ 220–260 °C' },
  huile: { nom: 'Huile de friture', eclair: 315, feu: 345, ai: 420, fume: 230, coul: '#d9a520', tE: '≈ 300–330 °C', tAI: '≈ 400–445 °C' },
};
const TAMB = 18, TMAXC = 450;
const cap = t => t.charAt(0).toUpperCase() + t.slice(1);

export function creerEclair(scene, L) {
  const g = new THREE.Group(); g.position.set(-6.3, 0.9, 3.1); g.rotation.y = Math.PI / 2; scene.add(g);
  boite(g, 0.26, 0.07, 0.26, mat('#d9dde0', { metalness: 0.3 }), 0, 0.035, 0);
  const plaque = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.01, 24), mat('#333', { emissive: new THREE.Color(0) })); plaque.position.y = 0.075; g.add(plaque);
  const bouton = cyl(g, 0.018, 0.018, 0.02, mat('#222'), 0.09, 0.05, 0.13); bouton.rotation.x = Math.PI / 2;
  const coupe = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.045, 24, 1, true), mat('#c8a24a', { metalness: 0.7, roughness: 0.3, side: THREE.DoubleSide })); coupe.position.set(0, 0.1, 0); g.add(coupe);
  cyl(g, 0.045, 0.045, 0.004, mat('#a8843a', { metalness: 0.7 }), 0, 0.08, 0);
  const liqM = mat('#e8c65a', { roughness: 0.2, metalness: 0.1 });
  const liquide = new THREE.Mesh(new THREE.CircleGeometry(0.043, 24), liqM); liquide.rotation.x = -Math.PI / 2; liquide.position.y = 0.11; g.add(liquide);
  const thermo = cyl(g, 0.004, 0.004, 0.22, mat('#eee'), 0.025, 0.2, -0.02, 8); thermo.rotation.z = 0.25;
  // bras de la flamme pilote
  const bras = new THREE.Group(); bras.position.set(0.17, 0.16, 0); bras.rotation.y = 0.9; g.add(bras);
  cyl(g, 0.008, 0.008, 0.16, mat('#8c969c', { metalness: 0.6 }), 0.17, 0.08, 0, 8);
  const tige = cyl(bras, 0.005, 0.005, 0.17, mat('#8c969c', { metalness: 0.6 }), -0.085, 0, 0, 8); tige.rotation.z = Math.PI / 2;
  const pilote = sprite(texFlamme()); pilote.center.set(0.5, 0.05); pilote.position.set(-0.17, 0, 0); pilote.scale.set(0.02, 0.045, 1); bras.add(pilote);
  const flash = sprite(texHalo('rgba(200,230,255,1)', 'rgba(70,120,255,.7)')); flash.position.set(0, 0.14, 0); flash.scale.set(0.001, 0.001, 1); g.add(flash);
  const feu = sprite(texFlamme()); feu.center.set(0.5, 0.02); feu.position.set(0, 0.115, 0); feu.scale.set(0.001, 0.001, 1); g.add(feu);
  const boule = sprite(texHalo('rgba(255,240,180,1)', 'rgba(255,110,20,.85)')); boule.position.set(0, 0.35, 0); boule.scale.set(0.001, 0.001, 1); g.add(boule);
  const fumee = sprite(texHalo('rgba(120,120,120,.6)', 'rgba(120,120,120,.25)'), false, 0); fumee.position.set(0, 0.25, 0); fumee.scale.set(0.2, 0.2, 1); g.add(fumee);
  const couvercle = cyl(g, 0.055, 0.055, 0.008, mat('#8c969c', { metalness: 0.6 }), -0.2, 0.075, 0.06);
  const lum = new THREE.PointLight('#ff9a3a', 0, 2, 1.5); lum.position.set(0, 0.3, 0.1); g.add(lum);

  const E = { liq: 'gazole', T: TAMB, chauffe: false, vitesse: 1, brule: false, couvert: false, vide: false, journal: [], defi: null, bras: 0, fumeVu: false };
  L.eclair = E;
  const log = (txt) => { E.journal.unshift({ T: Math.round(E.T), txt }); E.journal = E.journal.slice(0, 10); E.majUI?.(false); };
  const nomLiq = () => (E.defi && !E.defi.rep ? 'le liquide X' : LIQUIDES[E.liq].nom);
  E.reset = (liq = E.liq) => { Object.assign(E, { liq, T: TAMB, chauffe: false, brule: false, couvert: false, vide: false, journal: [], fumeVu: false, boule: 0 }); liqM.color.set(E.defi && !E.defi.rep ? '#e6e0cc' : LIQUIDES[liq].coul); liquide.visible = true; E.majUI?.(false); };
  E.pilote = () => {
    if (E.bras > 0 || E.vide) return; E.bras = 1.2;
    setTimeout(() => {
      const P = LIQUIDES[E.liq];
      if (E.brule || E.couvert) return;
      if (E.T >= P.feu) { E.brule = true; son('ko'); log(`${cap(nomLiq())} s'enflamme et continue de brûler : point de feu atteint.`); }
      else if (E.T >= P.eclair) { E.flash = 1; son('trouve'); log(`Éclair bleuté au-dessus de la coupelle, qui s'éteint aussitôt : point éclair atteint.`); }
      else log('Rien : pas assez de vapeurs au-dessus du liquide.');
    }, 550);
  };
  E.couvrir = () => { E.couvert = !E.couvert; if (E.couvert && E.brule) { E.brule = false; log('Couvercle posé : la flamme s\'éteint par étouffement.'); } E.majUI?.(false); };
  E.eau = () => {
    if (!E.brule) { log('Un peu d\'eau dans la coupelle… sans effet notable ici.'); return; }
    if (E.liq === 'huile') { E.boule = 1.5; son('ko'); log('⚠ L\'eau se vaporise d\'un coup sous l\'huile brûlante et projette l\'huile enflammée : boule de feu ! On n\'éteint jamais un feu d\'huile à l\'eau.'); }
    else if (E.liq === 'ethanol') { E.brule = false; log('L\'éthanol se mélange à l\'eau : diluée, la flamme finit par s\'éteindre.'); }
    else log('L\'eau coule au fond : le liquide, plus léger, flotte et continue de brûler.');
  };
  E.update = (dt, temps) => {
    const P = LIQUIDES[E.liq];
    if (E.chauffe && !E.vide) E.T = Math.min(TMAXC, E.T + dt * 4 * E.vitesse);
    else if (!E.chauffe && E.T > TAMB && !E.brule) E.T = Math.max(TAMB, E.T - dt * 1.5 * E.vitesse);
    if (E.brule) E.T = Math.min(TMAXC, E.T + dt * 1.2 * E.vitesse);
    if (!E.brule && !E.couvert && !E.vide && E.T >= P.ai && E.chauffe) { E.brule = true; son('ko'); log('Sans aucune flamme, le liquide s\'enflamme de lui-même : température d\'auto-inflammation atteinte.'); }
    if (P.eb && E.T >= P.eb && !E.vide) { E.vide = true; E.brule = false; E.chauffe = false; liquide.visible = false; log(`${cap(nomLiq())} bout et s'évapore entièrement : les vapeurs partent dans la hotte.`); }
    if (P.fume && E.T >= P.fume && !E.fumeVu) { E.fumeVu = true; log('L\'huile commence à fumer : elle se décompose.'); }
    plaque.material.emissive.set('#ff3a10').multiplyScalar(E.chauffe ? clamp(E.T / 500) * 0.8 : 0);
    // bras pilote
    if (E.bras > 0) { E.bras -= dt; const k = E.bras > 0.6 ? (1.2 - E.bras) / 0.6 : E.bras / 0.6; bras.rotation.y = 0.9 * (1 - clamp(k)); } else bras.rotation.y = 0.9;
    if (E.flash > 0) { E.flash -= dt * 2.5; const s = Math.sin(clamp(E.flash) * Math.PI) * 0.22 + 0.001; flash.scale.set(s, s * 0.6, 1); } else flash.scale.set(0.001, 0.001, 1);
    const fl = 1 + Math.sin(temps * 19) * 0.08;
    feu.scale.set(E.brule ? 0.13 : 0.001, E.brule ? 0.28 * fl : 0.001, 1);
    if (E.boule > 0) { E.boule -= dt; const s = Math.sin(clamp(E.boule / 1.5) * Math.PI) * 1.1 + 0.001; boule.scale.set(s, s, 1); } else boule.scale.set(0.001, 0.001, 1);
    fumee.material.opacity = E.fumeVu && E.T > (P.fume || 999) && !E.vide ? 0.5 : (E.brule ? 0.3 : 0);
    fumee.position.y = 0.25 + Math.sin(temps) * 0.02;
    const kc = Math.min(1, dt * 6); couvercle.position.x += ((E.couvert ? 0 : -0.2) - couvercle.position.x) * kc; couvercle.position.z += ((E.couvert ? 0 : 0.06) - couvercle.position.z) * kc; couvercle.position.y += ((E.couvert ? 0.127 : 0.075) - couvercle.position.y) * kc;
    lum.intensity = E.brule ? 1.6 : 0;
    E._ui = (E._ui || 0) + dt; if (E._ui > 0.2) { E._ui = 0; E.majUI?.(true); }
  };
  return { id: 'eclair', groupe: g, ancre: new THREE.Vector3(-6.3, 1.5, 3.1), cam: new THREE.Vector3(-5.35, 1.5, 2.95), cible: new THREE.Vector3(-6.35, 1.0, 2.82) };
}

const Q_ECLAIR = [
  { q: 'Une allumette jetée dans une flaque de gazole à 20 °C s\'éteint le plus souvent. Pourquoi ?', ref: '5.7', texte: 'point éclair gazole',
    opts: [{ t: 'Le gazole est sous son point éclair : il ne dégage pas assez de vapeurs pour s\'enflammer', ok: true, fb: 'Il faut le chauffer (ou une mèche : tissu, papier) pour qu\'il brûle. L\'essence, elle, s\'enflamme même par grand froid.' }, { t: 'Le gazole n\'est pas combustible', ok: false, fb: 'Il brûle très bien une fois au-dessus de son point de feu.' }, { t: 'L\'allumette n\'est pas assez chaude', ok: false, fb: 'La flamme d\'une allumette suffit largement : ce sont les vapeurs qui manquent.' }] },
  { q: 'Quelle est la différence entre point éclair et point de feu ?', ref: '5.7', texte: 'point éclair point de feu',
    opts: [{ t: 'Au point éclair, les vapeurs s\'enflamment un instant puis s\'éteignent ; au point de feu, la combustion se maintient', ok: true, fb: 'Le point de feu est un peu plus élevé que le point éclair.' }, { t: 'C\'est la même chose', ok: false, fb: 'Tu as vu l\'éclair qui s\'éteint, puis la flamme qui tient quelques degrés plus haut.' }, { t: 'Au point de feu, le liquide s\'enflamme sans flamme', ok: false, fb: 'Ça, c\'est l\'auto-inflammation.' }] },
  { q: 'Une casserole d\'huile oubliée sur une plaque s\'enflamme sans flamme ni étincelle. Que s\'est-il passé ?', ref: '5.7', texte: 'auto-inflammation huile cuisine',
    opts: [{ t: 'L\'huile a atteint sa température d\'auto-inflammation', ok: true, fb: 'Au-delà d\'environ 400 °C, l\'huile s\'enflamme seule. Avant, elle fume : c\'est le signal d\'alerte.' }, { t: 'Une étincelle électrique est forcément passée', ok: false, fb: 'Aucune source extérieure n\'est nécessaire.' }, { t: 'L\'huile a atteint son point éclair', ok: false, fb: 'Au point éclair, il faut une flamme pour enflammer les vapeurs.' }] },
];

export function panEclair(pb, O) {
  const E = O.L.eclair;
  const draw = () => {
    const D = E.defi; const P = LIQUIDES[E.liq];
    const cache = D && !D.rep;
    pb.innerHTML = `<div class="l3-tabs"><button data-m="libre" class="${!D ? 'on' : ''}">🧪 Libre</button><button data-m="defi" class="${D ? 'on' : ''}">${O.fait('eclair') ? '✓' : '🎯'} Le liquide X</button></div>
      ${D ? `<p class="small"><b>Défi :</b> un flacon a perdu son étiquette. Mesure son point éclair (chauffe, puis présente la flamme pilote régulièrement) et identifie-le.</p>` : `<p class="small">Choisis un liquide, chauffe la coupelle et présente la flamme pilote de temps en temps. Note la température du premier éclair, puis celle où le liquide continue de brûler. <span class="muted">${esc(SOURCE)}</span></p>
      <div class="l3-chips">${Object.entries(LIQUIDES).map(([id, x]) => `<button data-l="${id}" class="${E.liq === id ? 'on' : ''}">${esc(x.nom)}</button>`).join('')}</div>`}
      <div class="l3-mesure"><div><span>Température du liquide</span><b id="e-t">${Math.round(E.T)} °C</b></div><div><span>État</span><b id="e-s" style="font-size:15px">${E.vide ? 'évaporé' : E.brule ? '🔥 brûle' : E.couvert ? 'couvert' : 'calme'}</b></div></div>
      <div class="l3-actions">
        <button class="btn-j ${E.chauffe ? '' : 'go'}" data-a="chauffe">${E.chauffe ? '⏸ Arrêter la chauffe' : '🔥 Chauffer'}</button>
        <button class="btn-j" data-a="pilote">🕯️ Présenter la flamme</button>
        <button class="btn-j" data-a="couvrir">🫕 ${E.couvert ? 'Retirer le couvercle' : 'Poser le couvercle'}</button>
        <button class="btn-j" data-a="eau">💧 Verser de l'eau</button>
        <button class="btn-j ghost" data-a="vit">⏩ Vitesse ×${E.vitesse === 1 ? 4 : 1}</button>
        <button class="btn-j ghost" data-a="reset">↺ Nouvelle coupelle</button></div>
      <div class="l3-journal" id="e-j">${E.journal.length ? E.journal.map(j => `<div><b>${j.T} °C</b> · ${esc(j.txt)}</div>`).join('') : '<div class="muted">Tes observations s\'affichent ici.</div>'}</div>
      ${D ? `<div id="e-q"></div>` : `<table class="l3-tab"><tr><th>Liquide</th><th>Point éclair</th><th>Auto-inflammation</th></tr>${Object.values(LIQUIDES).map(x => `<tr><td>${esc(x.nom)}</td><td>${esc(x.tE)}</td><td>${esc(x.tAI)}</td></tr>`).join('')}</table><div class="small muted">Ordres de grandeur : les valeurs varient selon les produits et la méthode d'essai.</div>`}
      <details class="l3-note"><summary>À retenir</summary><b>Point éclair</b> : température la plus basse à laquelle le liquide dégage assez de vapeurs pour un éclair au contact d'une flamme pilote, qui ne dure pas. <b>Point de feu</b> : la combustion se maintient seule. <b>Auto-inflammation</b> : le mélange s'enflamme sans flamme ni étincelle. En enquête, un liquide sous son point éclair a besoin d'un effet de mèche ou d'être chauffé pour brûler. ${ref('5.7')}</details>`;
    $$('[data-l]', pb).forEach(b => b.onclick = () => { E.reset(b.dataset.l); draw(); });
    $$('[data-m]', pb).forEach(b => b.onclick = () => {
      if (b.dataset.m === 'defi') { const liq = melange(['ethanol', 'whitespirit', 'gazole', 'huile'])[0]; E.defi = { liq, rep: null }; E.reset(liq); }
      else { E.defi = null; E.reset('gazole'); }
      draw();
    });
    $$('[data-a]', pb).forEach(b => b.onclick = () => {
      const a = b.dataset.a;
      if (a === 'chauffe') E.chauffe = !E.chauffe; else if (a === 'pilote') E.pilote(); else if (a === 'couvrir') E.couvrir(); else if (a === 'eau') E.eau();
      else if (a === 'vit') E.vitesse = E.vitesse === 1 ? 4 : 1; else if (a === 'reset') E.reset(E.liq);
      draw();
    });
    if (D) {
      const q = $('#e-q', pb);
      const opts = ['ethanol', 'whitespirit', 'gazole', 'huile'];
      q.innerHTML = `<div class="l3-q"><p><b>Quel est le liquide X ?</b></p><div class="opts">${opts.map(id => `<button class="choix ${D.rep ? (id === D.liq ? 'ok' : id === D.rep ? 'ko' : '') : ''}" data-x="${id}" ${D.rep ? 'disabled' : ''}>${esc(LIQUIDES[id].nom)} <small>(point éclair ${esc(LIQUIDES[id].tE)})</small></button>`).join('')}</div>
        ${D.rep ? `<div class="verdict ${D.rep === D.liq ? 'ok' : 'ko'}">${D.rep === D.liq ? 'Bien identifié ! Ta mesure du point éclair correspond.' : `Raté : c'était ${esc(LIQUIDES[D.liq].nom)} (point éclair ${esc(LIQUIDES[D.liq].tE)}).`}</div>
        <div class="l3-row">${D.rep === D.liq ? '<button class="btn-j go" data-quiz>📝 Répondre aux questions de Lina</button>' : ''}<button class="btn-j ghost" data-m2>↻ Un autre flacon</button></div>` : '<div class="small muted">Réponds quand tu as observé le premier éclair.</div>'}</div>`;
      $$('[data-x]', q).forEach(b => b.onclick = () => { D.rep = b.dataset.x; son(D.rep === D.liq ? 'ok' : 'ko'); draw(); });
      $('[data-m2]', q)?.addEventListener('click', () => { const liq = melange(['ethanol', 'whitespirit', 'gazole', 'huile'])[0]; E.defi = { liq, rep: null }; E.reset(liq); draw(); });
      $('[data-quiz]', q)?.addEventListener('click', () => O.quiz(pb, Q_ECLAIR, (bons, n) => {
        const ok = bons >= n - 1;
        pb.innerHTML = `<div class="l3-bilan"><div class="gros">${bons} / ${n}</div>${ok ? O.recompenser('eclair', 'labo', 30) : '<p>Encore un effort : relis l\'encadré « À retenir ».</p>'}<div class="l3-row"><button class="btn-j" data-re>↻ Retour à la coupelle</button></div></div>`;
        $('[data-re]', pb).onclick = () => { E.defi = null; draw(); };
      }));
    }
  };
  E.majUI = (leger) => {
    if (!$('#e-t', pb)) return;
    if (leger) { $('#e-t', pb).textContent = `${Math.round(E.T)} °C`; $('#e-s', pb).textContent = E.vide ? 'évaporé' : E.brule ? '🔥 brûle' : E.couvert ? 'couvert' : 'calme'; return; }
    draw();
  };
  draw();
}
