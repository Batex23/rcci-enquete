// Le laboratoire en 3D : une vraie salle avec des postes de travaux pratiques sur la science du feu.
//  - TP 1 Four de fusion : chauffer des témoins et lire les températures (fondu = minimum, intact = maximum)
//  - TP 2 Tétraèdre du feu : éteindre une flamme de quatre façons différentes
//  - TP 3 Mur d'essai : hauteur de flamme selon la position du brûleur, naissance du tracé en V
//  - Postes de révision (microscope, tableau des tracés, banc des idées reçues) : séries rapides existantes
import * as THREE from '../../vendor/three.module.min.js';
import { OrbitControls } from '../../vendor/OrbitControls.js';
import { canvasFlamme } from '../engine/textures.js';
import { fusion, fmt, optionsThermo } from '../data/thermique.js';
import { DOMAINES, crediter, NOMS_NIVEAU } from '../game/competences.js';
import { voirAussiHtml } from '../data/sources.js';
import { $, $$, h, esc, ref, toast } from '../ui.js';
import { son } from '../game/sons.js';
import { EXERCICES, LABO, lancerExercice } from './entrainement.js';

const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const melange = a => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const nb = (v, d = 1) => v.toLocaleString('fr-FR', { maximumFractionDigits: d, minimumFractionDigits: d });
const jourCourant = () => new Date().toISOString().slice(0, 10);

// ------------------------------------------------------------------ données des TP
export const TP = [
  { id: 'four', ic: '🔥', nom: 'Four de fusion', dom: 'thermo', desc: 'Chauffe des témoins jusqu\'à 1 200 °C et observe ce qui fond, ramollit ou résiste.' },
  { id: 'triangle', ic: '🔺', nom: 'Tétraèdre du feu', dom: 'raisonnement', desc: 'Éteins une flamme de quatre façons différentes pour comprendre ce dont un feu a besoin.' },
  { id: 'mur', ic: '🧱', nom: 'Mur d\'essai', dom: 'traces', desc: 'Place un brûleur au centre, contre un mur ou dans un angle : flammes et tracés en V changent.' },
];
export const DEFIS_FOUR = [
  { id: 'ordre', nom: 'Qui fond en premier ?', desc: 'Range cinq témoins dans l\'ordre où ils vont fondre, puis lance la chauffe pour vérifier.' },
  { id: 'mystere', nom: 'Le four mystère', desc: 'Lina a chauffé le four sans dire à combien. Lis les témoins et donne la fourchette de température.' },
  { id: 'alliage', nom: 'Le piège de l\'alliage', desc: 'Un fil de cuivre posé sur une plaque d\'aluminium… Le cuivre a-t-il vraiment fondu ?' },
];

// Témoins proposés dans le four (dans l'ordre des températures)
const CANDIDATS = ['paraffine', 'pvc', 'pe', 'pp', 'etain', 'plomb', 'zamac', 'zinc', 'alu', 'verre', 'laiton', 'cuivre', 'acier'];
const COUL = { paraffine: '#efe3bd', pvc: '#d6d5cb', pe: '#eef3f1', pp: '#e6d9b5', etain: '#c6cbcf', plomb: '#6b727a', zamac: '#b1b7bb', zinc: '#9fabb2', alu: '#d3d8dd', verre: '#8fceaa', laiton: '#c9a446', cuivre: '#b8693a', acier: '#7a828a' };
const COURT = { paraffine: 'Paraffine', pvc: 'PVC', pe: 'Polyéthylène', pp: 'Polypropylène', etain: 'Étain', plomb: 'Plomb', zamac: 'Zamac', zinc: 'Zinc', alu: 'Aluminium', verre: 'Verre', laiton: 'Laiton', cuivre: 'Cuivre', acier: 'Acier' };
const TMAX = 1200;

function bornes(m) {
  const n = (m.plage.match(/\d+/g) || []).map(Number);
  return n.length >= 2 ? [n[0], n[1]] : [m.t - 8, m.t + 2];
}

// Couleur d'incandescence d'un objet chauffé (repère indicatif)
const INC = [[450, '#000000'], [550, '#4a0800'], [650, '#8c1400'], [750, '#c42600'], [850, '#e84300'], [950, '#ff6a10'], [1050, '#ff8c2a'], [1150, '#ffad48'], [1250, '#ffc96e']];
function incand(T) {
  if (T <= INC[0][0]) return new THREE.Color(0);
  for (let i = 1; i < INC.length; i++) if (T <= INC[i][0]) return new THREE.Color(INC[i - 1][1]).lerp(new THREE.Color(INC[i][1]), (T - INC[i - 1][0]) / (INC[i][0] - INC[i - 1][0]));
  return new THREE.Color(INC[INC.length - 1][1]);
}
function nomLueur(T) {
  if (T < 500) return 'aucune lueur visible';
  if (T < 600) return 'rouge naissant, à peine visible';
  if (T < 800) return 'rouge sombre';
  if (T < 1000) return 'rouge vif (cerise)';
  if (T < 1200) return 'orangé';
  return 'jaune vif';
}

// ------------------------------------------------------------------ petits outils 3D
const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.75, metalness: 0, ...o });
function boite(p, w, hh, d, m, x, y, z) { const o = new THREE.Mesh(new THREE.BoxGeometry(w, hh, d), m); o.position.set(x, y, z); p.add(o); return o; }
function cyl(p, rt, rb, hh, m, x, y, z, seg = 20) { const o = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, hh, seg), m); o.position.set(x, y, z); p.add(o); return o; }
function texCanvas(w, hh, draw) { const cv = document.createElement('canvas'); cv.width = w; cv.height = hh; draw(cv.getContext('2d'), w, hh); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }

function paillasse(scene, x, z, w, d, rot = 0) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rot; scene.add(g);
  boite(g, w, 0.82, d - 0.06, mat('#e4e9ec'), 0, 0.45, -0.03);
  boite(g, w, 0.08, d - 0.1, mat('#5a646b'), 0, 0.04, -0.05);
  boite(g, w + 0.04, 0.06, d + 0.02, mat('#2d3a40', { roughness: 0.45 }), 0, 0.89, 0);
  const n = Math.max(1, Math.round(w / 0.6));
  for (let i = 0; i < n; i++) {
    const cx = -w / 2 + (i + 0.5) * w / n;
    boite(g, w / n - 0.04, 0.74, 0.01, mat('#d5dde1'), cx, 0.47, d / 2 - 0.055);
    boite(g, 0.14, 0.02, 0.02, mat('#8c969c', { metalness: 0.6 }), cx, 0.78, d / 2 - 0.04);
  }
  return g;
}

function verrerie(p, x, y, z, couleur, type = 0) {
  const verre = new THREE.MeshStandardMaterial({ color: '#d8eef6', transparent: true, opacity: 0.35, roughness: 0.1, depthWrite: false });
  const liq = mat(couleur, { roughness: 0.3 });
  if (type === 0) { // erlenmeyer
    cyl(p, 0.025, 0.08, 0.14, verre, x, y + 0.07, z); cyl(p, 0.022, 0.022, 0.06, verre, x, y + 0.17, z);
    cyl(p, 0.05, 0.075, 0.05, liq, x, y + 0.026, z);
  } else if (type === 1) { // bécher
    cyl(p, 0.05, 0.05, 0.13, verre, x, y + 0.065, z); cyl(p, 0.046, 0.046, 0.06, liq, x, y + 0.031, z);
  } else { // ballon
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 12), verre); b.position.set(x, y + 0.07, z); p.add(b);
    const l = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), liq); l.position.set(x, y + 0.07, z); p.add(l);
    cyl(p, 0.018, 0.018, 0.1, verre, x, y + 0.17, z);
  }
}

function affiche(scene, x, y, z, w, hh, rotY, draw) {
  const t = texCanvas(512, Math.round(512 * hh / w), draw);
  const o = new THREE.Mesh(new THREE.PlaneGeometry(w, hh), new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }));
  o.position.set(x, y, z); o.rotation.y = rotY; scene.add(o); return o;
}

function lignes(c, txt, x, y, lh) { txt.forEach((l, i) => c.fillText(l, x, y + i * lh)); }

// ------------------------------------------------------------------ la salle
function construireSalle(scene) {
  scene.background = new THREE.Color('#202a31');
  scene.add(new THREE.HemisphereLight('#f4f8ff', '#55606a', 1.6));
  const sol = new THREE.DirectionalLight('#ffffff', 1.4); sol.position.set(3, 9, 6); scene.add(sol);
  const d2 = new THREE.DirectionalLight('#dfe9ff', 0.5); d2.position.set(-6, 5, -2); scene.add(d2);
  // sol en dalles vinyle
  const tSol = texCanvas(256, 256, (c, w) => {
    c.fillStyle = '#b9c3c8'; c.fillRect(0, 0, w, w);
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { c.fillStyle = (i + j) % 2 ? '#c3ccd1' : '#b4bec4'; c.fillRect(i * 64 + 1, j * 64 + 1, 62, 62); }
    for (let k = 0; k < 900; k++) { c.fillStyle = `rgba(${Math.random() < 0.5 ? '255,255,255' : '60,70,80'},${0.05 + Math.random() * 0.07})`; c.fillRect(Math.random() * w, Math.random() * w, 2, 2); }
  });
  tSol.wrapS = tSol.wrapT = THREE.RepeatWrapping; tSol.repeat.set(7, 5);
  const plancher = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), mat('#ffffff', { map: tSol, roughness: 0.55 }));
  plancher.rotation.x = -Math.PI / 2; scene.add(plancher);
  // murs : faïence en partie basse, peinture au-dessus
  const tMur = texCanvas(256, 410, (c, w, hh) => {
    const m = hh / 3.2; const bas = hh - 1.3 * m;
    c.fillStyle = '#e8eef1'; c.fillRect(0, 0, w, hh);
    c.fillStyle = '#f7f9fa'; c.fillRect(0, bas, w, hh - bas);
    c.strokeStyle = '#cdd6db'; c.lineWidth = 1.5;
    const pas = 0.15 * m;
    for (let y = bas; y < hh; y += pas) { c.beginPath(); c.moveTo(0, y); c.lineTo(w, y); c.stroke(); }
    for (let x = 0; x < w; x += pas) { c.beginPath(); c.moveTo(x, bas); c.lineTo(x, hh); c.stroke(); }
    c.fillStyle = '#3d8fbf'; c.fillRect(0, bas - 6, w, 6);
  });
  tMur.wrapS = THREE.RepeatWrapping;
  const mur = (w, x, z, rot) => { const t = tMur.clone(); t.needsUpdate = true; t.repeat.set(w / 2, 1); const o = new THREE.Mesh(new THREE.PlaneGeometry(w, 3.2), mat('#ffffff', { map: t })); o.position.set(x, 1.6, z); o.rotation.y = rot; scene.add(o); };
  mur(14, 0, -5, 0); mur(10, -7, 0, Math.PI / 2); mur(10, 7, 0, -Math.PI / 2);
  // plinthes
  boite(scene, 14, 0.1, 0.02, mat('#5a646b'), 0, 0.05, -4.99);
  boite(scene, 0.02, 0.1, 10, mat('#5a646b'), -6.99, 0.05, 0);
  boite(scene, 0.02, 0.1, 10, mat('#5a646b'), 6.99, 0.05, 0);

  // étagères de verrerie (mur gauche)
  const coul = ['#e05a3a', '#3a8fe0', '#5cc46a', '#e8c23a', '#a35ad0', '#46c2c2'];
  for (const y of [1.45, 1.95]) {
    boite(scene, 0.32, 0.03, 2.2, mat('#d9dfe2'), -6.83, y, -2.4);
    for (let i = 0; i < 7; i++) verrerie(scene, -6.82, y + 0.015, -3.35 + i * 0.32, coul[(i + (y > 1.5 ? 3 : 0)) % coul.length], i % 3);
  }
  // sorbonne (hotte de laboratoire)
  const sb = new THREE.Group(); sb.position.set(-6.45, 0, 3.1); sb.rotation.y = Math.PI / 2; scene.add(sb);
  boite(sb, 1.6, 0.9, 0.8, mat('#e4e9ec'), 0, 0.45, 0);
  boite(sb, 1.6, 1.3, 0.1, mat('#d9e0e4'), 0, 1.6, -0.35);
  boite(sb, 0.08, 1.3, 0.8, mat('#d9e0e4'), -0.76, 1.6, 0); boite(sb, 0.08, 1.3, 0.8, mat('#d9e0e4'), 0.76, 1.6, 0);
  boite(sb, 1.6, 0.35, 0.8, mat('#cfd7dc'), 0, 2.42, 0);
  boite(sb, 1.44, 0.7, 0.02, new THREE.MeshStandardMaterial({ color: '#cfe8f3', transparent: true, opacity: 0.3, depthWrite: false }), 0, 1.9, 0.38);
  for (let i = 0; i < 3; i++) verrerie(sb, -0.4 + i * 0.4, 0.9, -0.05, coul[i + 2], (i + 1) % 3);
  // extincteurs muraux
  for (const [x, z, r] of [[6.9, 1.6, -Math.PI / 2], [-1.6, -4.88, 0]]) {
    const e = new THREE.Group(); e.position.set(x, 0, z); e.rotation.y = r; scene.add(e);
    cyl(e, 0.08, 0.08, 0.5, mat('#c8231b', { roughness: 0.4 }), 0, 0.85, 0);
    cyl(e, 0.03, 0.03, 0.08, mat('#222'), 0, 1.13, 0);
    boite(e, 0.3, 0.3, 0.01, mat('#c8231b'), 0, 1.5, -0.06);
  }
  // affiches pédagogiques
  affiche(scene, -4.2, 2.45, -4.98, 1.3, 0.8, 0, (c, w, hh) => {
    c.fillStyle = '#fffdf6'; c.fillRect(0, 0, w, hh); c.fillStyle = '#c0392b'; c.fillRect(0, 0, w, 60);
    c.fillStyle = '#fff'; c.font = 'bold 30px sans-serif'; c.fillText('Températures de fusion', 18, 41);
    c.fillStyle = '#26323a'; c.font = '20px sans-serif';
    const L = [['PVC', '≈ 75–105 °C'], ['Plomb', '327 °C'], ['Zinc', '≈ 420 °C'], ['Aluminium', '660 °C'], ['Verre (ramollit)', '≈ 700–800 °C'], ['Laiton', '≈ 900–1000 °C'], ['Cuivre', '1 082 °C'], ['Acier', '≈ 1 430–1 520 °C']];
    L.forEach(([a, b], i) => { c.fillText(a, 24, 88 + i * 26); c.fillText(b, 300, 88 + i * 26); });
    c.font = 'italic 15px sans-serif'; c.fillStyle = '#6b7780'; c.fillText('Ordres de grandeur — NFPA 921, chap. 6.2.8', 24, hh - 10);
  });
  affiche(scene, 0.4, 2.35, -4.98, 1.1, 0.8, 0, (c, w, hh) => {
    c.fillStyle = '#fffdf6'; c.fillRect(0, 0, w, hh); c.fillStyle = '#2f7fb0'; c.fillRect(0, 0, w, 60);
    c.fillStyle = '#fff'; c.font = 'bold 30px sans-serif'; c.fillText('Le tétraèdre du feu', 18, 41);
    const cx = w / 2, cy = 230;
    c.lineWidth = 6; c.strokeStyle = '#e67e22'; c.beginPath(); c.moveTo(cx, cy - 140); c.lineTo(cx + 160, cy + 120); c.lineTo(cx - 160, cy + 120); c.closePath(); c.stroke();
    c.fillStyle = '#e67e22'; c.beginPath(); c.arc(cx, cy + 30, 42, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#26323a'; c.font = 'bold 22px sans-serif'; c.textAlign = 'center';
    c.fillText('Combustible', cx, cy + 156); c.save(); c.translate(cx - 118, cy - 10); c.rotate(-1.02); c.fillText('Comburant (O₂)', 0, 0); c.restore();
    c.save(); c.translate(cx + 118, cy - 10); c.rotate(1.02); c.fillText('Énergie', 0, 0); c.restore();
    c.fillStyle = '#fff'; c.font = 'bold 15px sans-serif'; c.fillText('réaction', cx, cy + 26); c.fillText('en chaîne', cx, cy + 44);
    c.textAlign = 'left';
  });
}

// Personnage : Dr Lina Morel
function creerLina(scene) {
  const g = new THREE.Group(); g.position.set(-2.1, 0, -1.7); g.rotation.y = 0.35; scene.add(g);
  const blouse = mat('#f6f8fa', { roughness: 0.85 });
  for (const x of [-0.09, 0.09]) { cyl(g, 0.06, 0.055, 0.8, mat('#33414d'), x, 0.4, 0); boite(g, 0.11, 0.06, 0.2, mat('#222'), x, 0.03, 0.04); }
  cyl(g, 0.19, 0.25, 0.8, blouse, 0, 1.05, 0);
  cyl(g, 0.17, 0.19, 0.25, blouse, 0, 1.55, 0);
  for (const s of [-1, 1]) { const b = cyl(g, 0.05, 0.045, 0.62, blouse, s * 0.23, 1.25, 0.02); b.rotation.z = s * 0.12; const m = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), mat('#f1c7a5')); m.position.set(s * 0.27, 0.93, 0.04); g.add(m); }
  cyl(g, 0.05, 0.06, 0.1, mat('#f1c7a5'), 0, 1.72, 0);
  const tete = new THREE.Mesh(new THREE.SphereGeometry(0.13, 18, 14), mat('#f1c7a5')); tete.position.set(0, 1.86, 0); g.add(tete);
  const ch = new THREE.Mesh(new THREE.SphereGeometry(0.14, 18, 14, 0, Math.PI * 2, 0, Math.PI * 0.55), mat('#3b2418')); ch.position.set(0, 1.88, -0.01); g.add(ch);
  const chignon = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 10), mat('#3b2418')); chignon.position.set(0, 1.95, -0.13); g.add(chignon);
  for (const s of [-1, 1]) { const l = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.006, 6, 16), mat('#1d2a33')); l.position.set(s * 0.045, 1.87, 0.125); g.add(l); }
  boite(g, 0.08, 0.1, 0.01, mat('#3d8fbf'), 0.1, 1.45, 0.2); // badge
  return g;
}

// ------------------------------------------------------------------ TP 1 : four de fusion
function creerFour(scene, L) {
  const g = new THREE.Group(); g.position.set(-4.2, 0.92, -4.5); scene.add(g);
  const tole = mat('#8d979e', { metalness: 0.45, roughness: 0.5 });
  boite(g, 1.3, 0.2, 0.75, tole, 0, 0.1, 0);
  boite(g, 1.3, 0.2, 0.75, tole, 0, 0.85, 0);
  boite(g, 0.15, 0.55, 0.75, tole, -0.575, 0.475, 0);
  boite(g, 0.35, 0.55, 0.75, mat('#6f7a82', { metalness: 0.4, roughness: 0.5 }), 0.475, 0.475, 0);
  boite(g, 0.8, 0.55, 0.08, tole, -0.1, 0.475, -0.34);
  const garnissage = new THREE.MeshStandardMaterial({ color: '#e7dcc7', roughness: 0.95, side: THREE.BackSide, emissive: new THREE.Color(0) });
  const cav = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.55, 0.62), garnissage); cav.position.set(-0.1, 0.475, 0.07); g.add(cav);
  // porte ouverte
  const porte = new THREE.Group(); porte.position.set(-0.65, 0.475, 0.375); porte.rotation.y = -1.9; g.add(porte);
  boite(porte, 0.82, 0.62, 0.07, tole, 0.41, 0, 0.035);
  boite(porte, 0.6, 0.42, 0.02, mat('#e7dcc7'), 0.41, 0, -0.005);
  boite(porte, 0.05, 0.2, 0.05, mat('#222'), 0.75, 0, 0.1);
  // plateau céramique
  boite(g, 0.74, 0.02, 0.34, mat('#f1ebe0'), -0.1, 0.21, 0.07);
  // afficheur de température
  const cvT = document.createElement('canvas'); cvT.width = 192; cvT.height = 64;
  const tT = new THREE.CanvasTexture(cvT); tT.colorSpace = THREE.SRGBColorSpace;
  const ecran = new THREE.Mesh(new THREE.PlaneGeometry(0.27, 0.09), new THREE.MeshBasicMaterial({ map: tT })); ecran.position.set(0.475, 0.64, 0.377); g.add(ecran);
  const voyant = new THREE.Mesh(new THREE.CircleGeometry(0.018, 16), new THREE.MeshBasicMaterial({ color: '#331111' })); voyant.position.set(0.4, 0.5, 0.377); g.add(voyant);
  for (let i = 0; i < 2; i++) { const b = cyl(g, 0.03, 0.03, 0.03, mat('#222'), 0.5 + i * 0.08, 0.5, 0.39, 16); b.rotation.x = Math.PI / 2; }
  boite(g, 0.24, 0.1, 0.01, mat('#c0392b'), 0.475, 0.3, 0.377);
  const lumiere = new THREE.PointLight('#ff6a10', 0, 3.5, 1.6); lumiere.position.set(-0.1, 0.5, 0.25); g.add(lumiere);

  const F = { T: 20, consigne: 600, chauffe: false, vitesse: 70, mode: 'libre', choix: ['pvc', 'plomb', 'zinc', 'alu', 'verre', 'cuivre'], ech: [], journal: [], cache: false, ordreJoueur: [], ordreReel: [], phase: 'prep', defi: null };
  L.four = F;

  function majEcran() {
    const c = cvT.getContext('2d');
    c.fillStyle = '#120808'; c.fillRect(0, 0, 192, 64);
    c.fillStyle = '#ff3b2a'; c.font = 'bold 40px monospace'; c.textAlign = 'right';
    c.fillText(F.cache ? '- - -' : `${Math.round(F.T)}`, 150, 47);
    c.font = 'bold 18px monospace'; c.fillText('°C', 186, 47);
    tT.needsUpdate = true;
    voyant.material.color.set(F.chauffe ? '#ff3020' : '#331111');
  }

  function creerEchantillon(id, i, n) {
    const m = fusion(id); const fam = id === 'verre' ? 'verre' : id === 'paraffine' ? 'cire' : m.famille === 'plastique' ? 'plastique' : 'metal';
    const x = -0.1 - 0.33 + (i + 0.5) * 0.66 / n;
    const gg = new THREE.Group(); gg.position.set(x, 0.22, 0.08); g.add(gg);
    const base = new THREE.Color(COUL[id] || '#cccccc');
    const mS = new THREE.MeshStandardMaterial({ color: base.clone(), roughness: fam === 'metal' ? 0.4 : 0.6, metalness: fam === 'metal' ? 0.75 : 0, transparent: fam === 'verre', opacity: fam === 'verre' ? 0.65 : 1, emissive: new THREE.Color(0) });
    let geo;
    if (fam === 'metal') geo = new THREE.BoxGeometry(0.075, 0.045, 0.06);
    else if (fam === 'verre') geo = new THREE.CylinderGeometry(0.026, 0.03, 0.1, 16);
    else if (fam === 'cire') geo = new THREE.CylinderGeometry(0.024, 0.024, 0.1, 14);
    else geo = new THREE.BoxGeometry(0.06, 0.06, 0.06);
    geo.translate(0, geo.parameters.height / 2, 0);
    const solide = new THREE.Mesh(geo, mS); gg.add(solide);
    const mF = mS.clone(); if (fam === 'metal') { mF.metalness = 0.95; mF.roughness = 0.18; }
    const flaque = new THREE.Mesh(new THREE.SphereGeometry(0.05, 18, 8, 0, Math.PI * 2, 0, Math.PI / 2), mF); flaque.scale.setScalar(0.001); gg.add(flaque);
    const [lo, hi] = bornes(m);
    return { id, m, fam, g: gg, solide, flaque, base, f: 0, carbo: 0, lo, hi, vu: {} };
  }

  function viderPlateau() {
    for (const s of F.ech) { g.remove(s.g); s.g.traverse(o => { o.geometry?.dispose(); o.material?.dispose?.(); }); }
    F.ech = []; alliage.visible = false;
  }
  function remplir(ids) {
    viderPlateau(); F.T = 20; F.chauffe = false; F.journal = []; F.ordreReel = [];
    F.ech = ids.map((id, i) => creerEchantillon(id, i, ids.length));
    resetAlliage(); majEcran();
  }

  // montage « alliage » : fil de cuivre posé sur une plaque d'aluminium, témoin de laiton à côté
  const alliage = new THREE.Group(); alliage.position.set(-0.1, 0.22, 0.08); alliage.visible = false; g.add(alliage);
  const plaque = boite(alliage, 0.36, 0.012, 0.16, mat('#d3d8dd', { metalness: 0.8, roughness: 0.35, emissive: new THREE.Color(0) }), -0.05, 0.006, 0);
  const flaqueAlu = new THREE.Mesh(new THREE.SphereGeometry(0.12, 24, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat('#dfe4e8', { metalness: 0.95, roughness: 0.15, emissive: new THREE.Color(0) })); flaqueAlu.position.set(-0.05, 0, 0); flaqueAlu.scale.set(1.2, 0.001, 0.75); alliage.add(flaqueAlu);
  const fil = []; for (const [x, l] of [[-0.19, 0.14], [-0.05, 0.12], [0.09, 0.14]]) { const c = cyl(alliage, 0.006, 0.006, l, mat('#b8693a', { metalness: 0.8, roughness: 0.35, emissive: new THREE.Color(0) }), x, 0.018, 0, 10); c.rotation.z = Math.PI / 2; fil.push(c); }
  const perles = []; for (const x of [-0.115, -0.075, 0.015, 0.028]) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.011, 10, 8), mat('#8a8f88', { metalness: 0.6, roughness: 0.5 })); p.position.set(x, 0.016, (Math.random() - 0.5) * 0.01); p.visible = false; alliage.add(p); perles.push(p); }
  const laitonA = boite(alliage, 0.07, 0.045, 0.06, mat('#c9a446', { metalness: 0.75, roughness: 0.4, emissive: new THREE.Color(0) }), 0.2, 0.0225, 0);
  function resetAlliage() { plaque.visible = true; plaque.scale.set(1, 1, 1); flaqueAlu.scale.set(1.2, 0.001, 0.75); fil.forEach(f => { f.visible = true; f.material.color.set('#b8693a'); }); perles.forEach(p => { p.visible = false; }); }

  function log(txt) { F.journal.unshift({ T: Math.round(F.T), txt }); F.journal = F.journal.slice(0, 9); F.majUI?.(); }

  F.remplir = remplir;
  F.reset = () => { if (F.mode === 'alliage') { viderPlateau(); alliage.visible = true; resetAlliage(); F.T = 20; F.chauffe = false; F.journal = []; majEcran(); } else remplir(F.choix); };

  F.update = (dt) => {
    if (F.chauffe) {
      const d = F.consigne - F.T; const pas = F.vitesse * dt;
      F.T = Math.abs(d) <= pas ? F.consigne : F.T + Math.sign(d) * pas;
      if (F.T === F.consigne) { F.chauffe = false; F._atteint = true; }
    }
    const inc = incand(F.T);
    garnissage.emissive.copy(inc).multiplyScalar(0.85);
    lumiere.intensity = F.T > 450 ? clamp((F.T - 450) / 500, 0, 1.6) * 3 : 0; lumiere.color.copy(F.T > 450 ? inc : new THREE.Color('#000'));
    for (const s of F.ech) {
      const ft = clamp((F.T - s.lo) / Math.max(1, s.hi - s.lo));
      if (ft > s.f) s.f = ft;
      const f = s.f;
      if (s.fam === 'verre') { s.solide.scale.set(1 + 0.45 * f, 1 - 0.6 * f, 1 + 0.45 * f); }
      else { s.solide.scale.set(1 + 0.25 * f, Math.max(0.02, 1 - 0.95 * f), 1 + 0.25 * f); s.solide.visible = f < 0.97; s.flaque.scale.set(0.001 + f * 1.15, 0.001 + f * 0.32, 0.001 + f * 1.15); }
      if ((s.fam === 'plastique' || s.fam === 'cire') && F.T > s.hi + 150) s.carbo = Math.max(s.carbo, clamp((F.T - s.hi - 150) / 150));
      const col = s.base.clone().lerp(new THREE.Color('#1a1411'), s.carbo);
      for (const o of [s.solide, s.flaque]) { o.material.color.copy(col); o.material.emissive.copy(inc).multiplyScalar(s.fam === 'metal' ? 0.55 : 0.35); }
      if (f >= 0.5 && !s.vu.fondu) {
        s.vu.fondu = true; F.ordreReel.push(s.id);
        if (!F.cache) log(s.fam === 'verre' ? `${COURT[s.id]} ramollit et s'affaisse (${s.m.plage} °C)` : s.fam === 'metal' ? `${COURT[s.id]} fond (${s.m.plage} °C)` : `${COURT[s.id]} ramollit puis coule (${s.m.plage} °C)`);
      }
      if (s.carbo > 0.5 && !s.vu.carbo) { s.vu.carbo = true; if (!F.cache) log(`${COURT[s.id]} se décompose et noircit (pyrolyse)`); }
    }
    if (alliage.visible) {
      for (const o of [plaque, flaqueAlu, laitonA, ...fil]) o.material.emissive?.copy(inc).multiplyScalar(0.5);
      if (F.T >= 600) { const f = clamp((F.T - 600) / 60); plaque.scale.set(1, Math.max(0.05, 1 - f), 1); flaqueAlu.scale.set(1.2, 0.001 + f * 0.12, 0.75); if (f > 0.9) plaque.visible = false; }
      if (F.T >= 640) { fil[1].visible = false; perles.forEach(p => { p.visible = true; }); fil.forEach(fl => fl.material.color.set('#8b7a6a')); }
    }
    if (F._atteint) { F._atteint = false; F.onAtteint?.(); }
    F._acc = (F._acc || 0) + dt;
    if (F._acc > 0.12) { F._acc = 0; majEcran(); F.majUI?.(); }
  };
  remplir(F.choix);
  return { id: 'four', groupe: g, ancre: new THREE.Vector3(-4.2, 2.05, -4.1), cam: new THREE.Vector3(-3.45, 1.95, -1.85), cible: new THREE.Vector3(-3.75, 1.2, -4.3) };
}

// ------------------------------------------------------------------ TP 2 : tétraèdre du feu
function creerTriangle(scene, L) {
  const g = new THREE.Group(); g.position.set(0.4, 0.92, -4.35); scene.add(g);
  // bec de gaz
  cyl(g, 0.07, 0.08, 0.025, mat('#2a2f33'), 0, 0.0125, 0);
  cyl(g, 0.018, 0.02, 0.17, mat('#a7b0b6', { metalness: 0.7, roughness: 0.35 }), 0, 0.11, 0);
  const vanne = boite(g, 0.06, 0.02, 0.02, mat('#d63a2a'), 0.05, 0.05, 0.03);
  const tuyau = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.012, 8, 24, Math.PI * 0.9), mat('#e2862a')); tuyau.position.set(0.25, 0.02, -0.05); tuyau.rotation.x = -Math.PI / 2; g.add(tuyau);
  boite(g, 0.08, 0.12, 0.06, mat('#c0c7cc', { metalness: 0.5 }), 0.47, 0.06, -0.1);
  // flamme
  const tex = new THREE.CanvasTexture(canvasFlamme()); tex.colorSpace = THREE.SRGBColorSpace;
  const flamme = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  flamme.center.set(0.5, 0.02); flamme.position.set(0, 0.195, 0); flamme.scale.set(0.001, 0.001, 1); g.add(flamme);
  const lum = new THREE.PointLight('#ffa040', 0, 2.5, 1.5); lum.position.set(0, 0.35, 0.05); g.add(lum);
  // cloche en verre
  const cloche = new THREE.Group(); g.add(cloche);
  const verreM = new THREE.MeshStandardMaterial({ color: '#cfe8f3', transparent: true, opacity: 0.28, roughness: 0.05, depthWrite: false, side: THREE.DoubleSide });
  const corps = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.36, 32, 1, true), verreM); corps.position.y = 0.18; cloche.add(corps);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.17, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2), verreM); dome.position.y = 0.36; cloche.add(dome);
  const bouton = new THREE.Mesh(new THREE.SphereGeometry(0.03, 12, 8), mat('#2a2f33')); bouton.position.y = 0.55; cloche.add(bouton);
  // potence
  cyl(g, 0.012, 0.012, 1.1, mat('#9aa3a9', { metalness: 0.6 }), -0.42, 0.55, -0.12);
  boite(g, 0.2, 0.02, 0.2, mat('#2a2f33'), -0.42, 0.01, -0.12);
  const bras = boite(g, 0.44, 0.02, 0.02, mat('#9aa3a9', { metalness: 0.6 }), -0.21, 1.0, -0.12);
  // oxymètre
  const cvO = document.createElement('canvas'); cvO.width = 160; cvO.height = 64;
  const tO = new THREE.CanvasTexture(cvO); tO.colorSpace = THREE.SRGBColorSpace;
  boite(g, 0.22, 0.13, 0.08, mat('#e8eaec'), -0.45, 0.065, 0.2);
  const ecranO = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 0.072), new THREE.MeshBasicMaterial({ map: tO })); ecranO.position.set(-0.45, 0.075, 0.241); g.add(ecranO);
  // brumisateur et extincteur à poudre
  cyl(g, 0.04, 0.04, 0.2, mat('#3a8fe0', { roughness: 0.3 }), 0.62, 0.1, 0.15);
  cyl(g, 0.012, 0.012, 0.06, mat('#eee'), 0.62, 0.23, 0.15);
  cyl(g, 0.06, 0.06, 0.32, mat('#c8231b', { roughness: 0.4 }), 0.8, 0.16, 0.05);
  boite(g, 0.08, 0.05, 0.03, mat('#222'), 0.8, 0.34, 0.05);
  // particules (eau / poudre)
  const N = 90; const pos = new Float32Array(N * 3); const vit = new Float32Array(N * 3);
  const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pm = new THREE.PointsMaterial({ size: 0.025, color: '#bfe3ff', transparent: true, opacity: 0, depthWrite: false });
  const nuage = new THREE.Points(pg, pm); g.add(nuage);

  const T = { gaz: true, flamme: false, s: 0, O2: 20.9, cloche: false, yCloche: 0.65, decouverts: [], cause: null, effet: 0, effetType: null, msg: '' };
  L.triangle = T;
  cloche.position.y = T.yCloche;

  function majO2() {
    const c = cvO.getContext('2d'); c.fillStyle = '#0d1a12'; c.fillRect(0, 0, 160, 64);
    c.fillStyle = T.O2 < 16 ? '#ff5a3a' : '#5cff8a'; c.font = 'bold 30px monospace'; c.textAlign = 'center';
    c.fillText(`${nb(T.O2)} %`, 80, 42); c.font = 'bold 13px sans-serif'; c.fillText('O₂', 80, 60); tO.needsUpdate = true;
  }
  function lancerEffet(type) {
    T.effet = 1; T.effetType = type;
    pm.color.set(type === 'eau' ? '#bfe3ff' : '#f4f1ea'); pm.size = type === 'eau' ? 0.02 : 0.035;
    for (let i = 0; i < N; i++) {
      const sx = type === 'eau' ? 0.62 : 0.8;
      pos.set([sx, 0.25, 0.12], i * 3);
      vit.set([-(0.5 + Math.random() * 0.4) * sx, (Math.random() - 0.2) * 0.25, (Math.random() - 0.6) * 0.3], i * 3);
    }
    pg.attributes.position.needsUpdate = true;
  }
  function eteindre(cause) {
    T.flamme = false; T.cause = cause;
    if (!T.decouverts.includes(cause)) T.decouverts.push(cause);
    son('trouve'); T.onEteint?.(cause);
  }
  T.action = (a) => {
    T.msg = '';
    if (a === 'allumer') {
      if (T.flamme) return;
      if (!T.gaz) { T.msg = 'Rien ne s\'allume : sans gaz, il n\'y a pas de combustible. Ouvre d\'abord le robinet.'; son('ko'); return; }
      if (T.cloche && T.O2 < 16.5) { T.msg = 'L\'allumette s\'éteint aussitôt : il ne reste plus assez d\'oxygène sous la cloche. Relève-la d\'abord.'; son('ko'); return; }
      T.flamme = true; T.cause = null; son('ok');
    } else if (a === 'cloche') { T.cloche = !T.cloche; }
    else if (a === 'gaz') { T.gaz = !T.gaz; vanne.rotation.y = T.gaz ? 0 : Math.PI / 2; if (!T.gaz && T.flamme) T.attente = { cause: 'combustible', t: 0.5 }; }
    else if (a === 'eau') { lancerEffet('eau'); if (T.flamme) T.attente = { cause: 'energie', t: 0.7 }; }
    else if (a === 'poudre') { lancerEffet('poudre'); if (T.flamme) T.attente = { cause: 'reaction', t: 0.6 }; }
    T.majUI?.();
  };
  T.update = (dt, t) => {
    const cible = T.cloche ? 0 : 0.65;
    T.yCloche += clamp(cible - T.yCloche, -dt * 0.8, dt * 0.8); cloche.position.y = T.yCloche;
    if (T.cloche && T.yCloche < 0.02) { if (T.flamme) T.O2 = Math.max(14, T.O2 - dt * 0.95 * Math.max(0.3, T.s)); }
    else T.O2 = Math.min(20.9, T.O2 + dt * 1.8);
    if (T.attente) { T.attente.t -= dt; if (T.attente.t <= 0) { const c = T.attente.cause; T.attente = null; if (T.flamme) eteindre(c); } }
    if (T.flamme && T.O2 < 15.5) eteindre('comburant');
    let cibleS = T.flamme ? clamp((T.O2 - 15.2) / 5.2, 0.2, 1) : 0;
    if (T.attente) cibleS *= 0.6;
    T.s += (cibleS - T.s) * Math.min(1, dt * 5);
    const fl = 1 + Math.sin(t * 23) * 0.06 + Math.sin(t * 37) * 0.04;
    flamme.scale.set(0.1 * T.s + 0.001, 0.3 * T.s * fl + 0.001, 1);
    lum.intensity = T.s * 2.2;
    bras.visible = true;
    if (T.effet > 0) {
      T.effet -= dt * 0.7; pm.opacity = clamp(T.effet * 1.2, 0, 0.85);
      for (let i = 0; i < N; i++) { pos[i * 3] += vit[i * 3] * dt; pos[i * 3 + 1] += vit[i * 3 + 1] * dt; pos[i * 3 + 2] += vit[i * 3 + 2] * dt; vit[i * 3 + 1] -= dt * (T.effetType === 'eau' ? 0.4 : 0.05); }
      pg.attributes.position.needsUpdate = true;
    } else pm.opacity = 0;
    T._acc = (T._acc || 0) + dt; if (T._acc > 0.15) { T._acc = 0; majO2(); T.majUI?.(true); }
  };
  majO2();
  return { id: 'triangle', groupe: g, ancre: new THREE.Vector3(0.4, 2.05, -4.2), cam: new THREE.Vector3(1.0, 2.0, -1.75), cible: new THREE.Vector3(0.8, 1.35, -4.3) };
}

// ------------------------------------------------------------------ TP 3 : mur d'essai (panache, tracé en V)
const POSITIONS = {
  centre: { nom: 'Au centre', k: 1, x: 4.6, z: -3.3, txt: 'loin des parois : l\'air arrive de tous les côtés' },
  mur: { nom: 'Contre le mur', k: 2, x: 4.6, z: -4.43, txt: 'le mur bloque la moitié de l\'air aspiré' },
  angle: { nom: 'Dans l\'angle', k: 4, x: 5.83, z: -4.43, txt: 'l\'angle bloque les trois quarts de l\'air aspiré' },
};
const PUISSANCES = [50, 100, 200];
const D_BRULEUR = 0.3, H_BRULEUR = 0.25, H_MUR = 2.4;
export const hauteurFlamme = (Q, k = 1) => Math.max(0.15, 0.235 * Math.pow(Q * k, 0.4) - 1.02 * D_BRULEUR);

function creerMur(scene, L) {
  const g = new THREE.Group(); scene.add(g);
  boite(g, 2.7, 0.02, 2.7, mat('#a9aaa6', { roughness: 0.95 }), 4.75, 0.01, -3.3);
  const RES = 256;
  const murs = [];
  function peindreBase(c) {
    c.fillStyle = '#f1efe9'; c.fillRect(0, 0, RES, RES);
    for (let k = 0; k < 1400; k++) { c.fillStyle = `rgba(120,110,95,${Math.random() * 0.05})`; c.fillRect(Math.random() * RES, Math.random() * RES, 2, 1); }
    c.strokeStyle = 'rgba(150,140,120,.35)'; c.lineWidth = 1; c.beginPath(); c.moveTo(RES / 2, 0); c.lineTo(RES / 2, RES); c.stroke();
  }
  function ajouterRegle(c, cote) {
    c.fillStyle = '#34495e'; c.font = 'bold 10px sans-serif';
    const x = cote === 'g' ? 2 : RES - 18;
    for (let y = 0; y <= 2.4; y += 0.5) { const py = RES - (y / H_MUR) * RES; c.fillRect(cote === 'g' ? 0 : RES - 8, py - 1, 8, 2); if (y > 0) c.fillText(`${nb(y, 1)}`, x + (cote === 'g' ? 8 : -6), py + 10); }
  }
  for (const def of [{ id: 'A', x: 4.8, z: -4.6, rot: 0, regle: 'g' }, { id: 'B', x: 6.0, z: -3.4, rot: -Math.PI / 2, regle: 'd' }]) {
    const cv = document.createElement('canvas'); cv.width = cv.height = RES;
    const c = cv.getContext('2d'); peindreBase(c);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
    const o = new THREE.Mesh(new THREE.PlaneGeometry(2.4, H_MUR), new THREE.MeshStandardMaterial({ map: t, roughness: 0.95 }));
    o.position.set(def.x, H_MUR / 2, def.z); o.rotation.y = def.rot; g.add(o);
    // dos du panneau et ossature
    const dos = new THREE.Mesh(new THREE.PlaneGeometry(2.4, H_MUR), mat('#c9ccc8')); dos.position.copy(o.position); dos.rotation.y = def.rot + Math.PI; g.add(dos);
    murs.push({ ...def, cv, c, t, o });
    ajouterRegle(c, def.regle); t.needsUpdate = true;
  }
  for (const [x, z] of [[3.6, -4.6], [6.0, -4.6], [6.0, -2.2]]) boite(g, 0.06, H_MUR + 0.05, 0.06, mat('#8c969c', { metalness: 0.6 }), x, (H_MUR + 0.05) / 2, z);
  boite(g, 2.46, 0.05, 0.06, mat('#8c969c', { metalness: 0.6 }), 4.8, H_MUR + 0.03, -4.6);
  boite(g, 0.06, 0.05, 2.46, mat('#8c969c', { metalness: 0.6 }), 6.0, H_MUR + 0.03, -3.4);
  // hotte d'extraction au-dessus
  boite(g, 2.6, 0.12, 2.6, mat('#9aa3a9', { metalness: 0.5 }), 4.8, 2.95, -3.4);
  // brûleur à sable
  const br = new THREE.Group(); g.add(br);
  boite(br, D_BRULEUR, H_BRULEUR - 0.02, D_BRULEUR, mat('#5d666c', { metalness: 0.5, roughness: 0.5 }), 0, (H_BRULEUR - 0.02) / 2, 0);
  boite(br, D_BRULEUR - 0.03, 0.02, D_BRULEUR - 0.03, mat('#d8c9a3', { roughness: 1 }), 0, H_BRULEUR - 0.01, 0);
  const tex = new THREE.CanvasTexture(canvasFlamme()); tex.colorSpace = THREE.SRGBColorSpace;
  const flammes = [0, 1, 2].map((i) => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, opacity: i ? 0.75 : 0.95 })); s.center.set(0.5, 0.02); s.scale.set(0.001, 0.001, 1); g.add(s); return s; });
  const lum = new THREE.PointLight('#ff9a3a', 0, 5, 1.4); g.add(lum);
  // fumée simple : sprites gris montants
  const fumees = [];
  const texF = texCanvas(64, 64, (c) => { const gr = c.createRadialGradient(32, 32, 2, 32, 32, 30); gr.addColorStop(0, 'rgba(60,58,55,.55)'); gr.addColorStop(1, 'rgba(60,58,55,0)'); c.fillStyle = gr; c.fillRect(0, 0, 64, 64); });
  for (let i = 0; i < 14; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: texF, transparent: true, depthWrite: false, opacity: 0 })); s.userData.v = Math.random(); g.add(s); fumees.push(s); }

  const M = { pos: 'mur', Q: 100, allume: false, t: 0, duree: 60, acc: 0, essais: [], vitesse: 6 };
  L.mur = M;
  function placer() { const p = POSITIONS[M.pos]; br.position.set(p.x, 0, p.z); }
  placer();

  // Peinture des dépôts sur les panneaux (u : 0..1 le long du panneau, y en mètres)
  function peindreV(w, u0, intens, L, theta) {
    const c = w.c; const px = m => (m / 2.4) * RES; const py = y => RES - (y / H_MUR) * RES;
    const x0 = u0 * RES; const tg = Math.tan(theta);
    const r0 = D_BRULEUR / 2;
    // dépôt de suie : V qui s'ouvre vers le haut
    c.fillStyle = `rgba(28,22,18,${0.03 * intens})`;
    c.beginPath(); c.moveTo(x0 - px(r0), py(H_BRULEUR)); c.lineTo(x0 + px(r0), py(H_BRULEUR));
    c.lineTo(x0 + px(r0 + (H_MUR - H_BRULEUR) * tg), py(H_MUR)); c.lineTo(x0 - px(r0 + (H_MUR - H_BRULEUR) * tg), py(H_MUR)); c.closePath(); c.fill();
    // brunissement du papier sur les bords
    c.strokeStyle = `rgba(120,70,30,${0.02 * intens})`; c.lineWidth = 6; c.stroke();
    // combustion « propre » là où la flamme lèche la paroi depuis longtemps
    if (M.t > 25) {
      const hf = Math.min(L, H_MUR - H_BRULEUR) * 0.8;
      c.fillStyle = `rgba(246,240,228,${0.045 * intens})`;
      c.beginPath(); c.moveTo(x0 - px(r0 * 0.7), py(H_BRULEUR + 0.02)); c.lineTo(x0 + px(r0 * 0.7), py(H_BRULEUR + 0.02));
      c.lineTo(x0 + px(r0 * 0.5 + hf * tg * 0.55), py(H_BRULEUR + hf)); c.lineTo(x0 - px(r0 * 0.5 + hf * tg * 0.55), py(H_BRULEUR + hf)); c.closePath(); c.fill();
    }
    w.sale = true;
  }
  function peindreHaut(w, intens) { // panache libre : léger dépôt diffus en haut du panneau
    const c = w.c; const gr = c.createLinearGradient(0, 0, 0, RES * 0.35);
    gr.addColorStop(0, `rgba(40,34,30,${0.012 * intens})`); gr.addColorStop(1, 'rgba(40,34,30,0)');
    c.fillStyle = gr; c.fillRect(0, 0, RES, RES * 0.35); w.sale = true;
  }
  M.nettoyer = () => { for (const w of murs) { peindreBase(w.c); ajouterRegle(w.c, w.regle); w.t.needsUpdate = true; } M.essais = []; M.majUI?.(); };
  M.setPos = p => { if (M.allume) return; M.pos = p; placer(); M.majUI?.(); };
  M.setQ = q => { if (M.allume) return; M.Q = q; M.majUI?.(); };
  M.hauteur = () => hauteurFlamme(M.Q, POSITIONS[M.pos].k);
  M.allumer = () => { if (M.allume) return; M.allume = true; M.t = 0; son('ok'); M.majUI?.(); };
  M.update = (dt, t) => {
    const p = POSITIONS[M.pos];
    const Lf = M.hauteur(); const theta = (11 + M.Q / 18) * Math.PI / 180;
    let s = 0;
    if (M.allume) {
      M.t += dt * M.vitesse; s = clamp(M.t / 3) * (M.t > M.duree - 2 ? clamp((M.duree - M.t) / 2) : 1);
      M.acc += dt;
      if (M.acc > 0.1) {
        M.acc = 0; const intens = s;
        if (M.pos === 'mur') peindreV(murs[0], (p.x - 3.6) / 2.4, intens, Lf, theta);
        else if (M.pos === 'angle') { peindreV(murs[0], (6.0 - 3.6) / 2.4, intens * 1.2, Lf, theta * 0.85); peindreV(murs[1], 0, intens * 1.2, Lf, theta * 0.85); }
        else { peindreHaut(murs[0], intens * 0.6); peindreHaut(murs[1], intens * 0.5); }
        for (const w of murs) if (w.sale) { w.t.needsUpdate = true; w.sale = false; }
      }
      if (M.t >= M.duree) {
        M.allume = false;
        M.essais.push({ pos: M.pos, Q: M.Q, L: Lf, v: M.pos !== 'centre' });
        son('trouve'); M.onFin?.();
      }
    }
    // flammes : collées à la paroi selon la position
    const fl = 1 + Math.sin(t * 17) * 0.07 + Math.sin(t * 29) * 0.05;
    const hVis = Math.min(Lf, 2.6);
    const dec = M.pos === 'centre' ? [0, 0] : M.pos === 'mur' ? [0, -0.06] : [0.06, -0.06];
    flammes.forEach((f, i) => {
      const k = i === 0 ? 1 : 0.75; const ox = i === 1 ? -0.07 : i === 2 ? 0.07 : 0;
      f.position.set(p.x + dec[0] + ox, H_BRULEUR, p.z + dec[1]);
      f.scale.set(s * D_BRULEUR * 1.5 * k + 0.001, s * hVis * k * (i ? 1 + Math.sin(t * 11 + i) * 0.1 : fl) + 0.001, 1);
    });
    lum.position.set(p.x, H_BRULEUR + hVis * 0.4, p.z + 0.25); lum.intensity = s * 4;
    fumees.forEach((f, i) => {
      if (!M.allume) { f.material.opacity = Math.max(0, f.material.opacity - dt); return; }
      f.userData.v = (f.userData.v + dt * 0.35) % 1; const v = f.userData.v;
      const y = H_BRULEUR + hVis * 0.8 + v * (2.9 - H_BRULEUR - hVis * 0.8);
      f.position.set(p.x + dec[0] + Math.sin(i * 2.1) * 0.12 * (1 + v), y, p.z + dec[1] + Math.cos(i * 1.7) * 0.1);
      const sc = 0.3 + v * 0.9; f.scale.set(sc, sc, 1); f.material.opacity = s * 0.7 * Math.sin(v * Math.PI);
    });
    M._ui = (M._ui || 0) + dt; if (M._ui > 0.2 && M.allume) { M._ui = 0; M.majUI?.(true); }
  };
  return { id: 'mur', groupe: g, ancre: new THREE.Vector3(5.0, 3.15, -3.6), cam: new THREE.Vector3(3.3, 2.0, 0.2), cible: new THREE.Vector3(5.3, 1.2, -3.6) };
}

// ------------------------------------------------------------------ postes de révision
function creerRevisions(scene) {
  // microscope
  paillasse(scene, -6.5, 0.7, 2.0, 0.8, Math.PI / 2);
  const mi = new THREE.Group(); mi.position.set(-6.45, 0.92, 0.7); mi.rotation.y = Math.PI / 2; scene.add(mi);
  const noir = mat('#2a2f33', { roughness: 0.4 }), blanc = mat('#eef1f3', { roughness: 0.4 });
  boite(mi, 0.22, 0.04, 0.3, blanc, 0, 0.02, 0);
  const brasM = boite(mi, 0.06, 0.32, 0.07, blanc, 0, 0.2, -0.1); brasM.rotation.x = 0.15;
  boite(mi, 0.16, 0.02, 0.14, noir, 0, 0.13, 0.03);
  const tube = cyl(mi, 0.03, 0.035, 0.22, noir, 0, 0.32, 0.02); tube.rotation.x = -0.35;
  cyl(mi, 0.02, 0.02, 0.08, noir, 0, 0.2, 0.04);
  cyl(mi, 0.025, 0.025, 0.04, noir, 0, 0.45, -0.03);
  boite(scene, 0.25, 0.01, 0.15, mat('#dfe8ee'), -6.4, 0.925, 1.3);
  // tableau des tracés
  affiche(scene, 2.75, 1.75, -4.97, 1.3, 0.9, 0, (c, w, hh) => {
    c.fillStyle = '#f7f8f6'; c.fillRect(0, 0, w, hh); c.strokeStyle = '#7c868c'; c.lineWidth = 14; c.strokeRect(0, 0, w, hh);
    c.fillStyle = '#2f7fb0'; c.font = 'bold 30px sans-serif'; c.fillText('Lecture des tracés', 30, 50);
    c.strokeStyle = '#2b2b2b'; c.lineWidth = 4;
    const v = (x, y, a, hh2) => { c.beginPath(); c.moveTo(x - a, y - hh2); c.lineTo(x, y); c.lineTo(x + a, y - hh2); c.stroke(); };
    v(110, 290, 60, 170); v(260, 290, 25, 170);
    c.beginPath(); c.moveTo(340, 290); c.lineTo(370, 120); c.lineTo(400, 120); c.lineTo(430, 290); c.stroke();
    c.fillStyle = '#c0392b'; c.font = '20px sans-serif'; c.fillText('V large', 70, 320); c.fillText('V étroit', 222, 320); c.fillText('cône inversé', 330, 320);
    c.fillStyle = '#6b7780'; c.font = 'italic 17px sans-serif'; c.fillText('NFPA 921, chap. 6.3.7', 30, hh - 22);
  });
  // banc des idées reçues (îlot central)
  paillasse(scene, 0, 1.0, 2.6, 1.0, 0);
  const bn = new THREE.Group(); bn.position.set(0, 0.92, 1.0); scene.add(bn);
  cyl(bn, 0.03, 0.03, 0.12, mat('#f3ecd8'), -0.8, 0.06, 0.05); // bougie
  boite(bn, 0.24, 0.3, 0.12, mat('#c8231b', { roughness: 0.5 }), -0.35, 0.15, -0.1); // jerrican
  boite(bn, 0.05, 0.05, 0.08, mat('#c8231b'), -0.3, 0.33, -0.1);
  boite(bn, 0.08, 0.02, 0.05, mat('#e9c46a'), 0.2, 0.01, 0.15); // boîte d'allumettes
  const loupe = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.008, 8, 24), mat('#2a2f33')); loupe.position.set(0.55, 0.01, 0.1); loupe.rotation.x = -Math.PI / 2; bn.add(loupe);
  boite(bn, 0.14, 0.015, 0.02, mat('#2a2f33'), 0.66, 0.01, 0.16);
  boite(bn, 0.3, 0.02, 0.4, mat('#f5f2ea'), 0.9, 0.01, -0.05);
  for (let i = 0; i < 3; i++) boite(bn, 0.2, 0.002, 0.012, mat('#9aa3a9'), 0.9, 0.022, -0.15 + i * 0.06);
  return [
    { id: 'microscope', ex: 'arcs', ancre: new THREE.Vector3(-6.45, 1.65, 0.7), cam: new THREE.Vector3(-4.6, 1.9, 1.9), cible: new THREE.Vector3(-6.0, 1.1, 0.5), groupe: mi },
    { id: 'tableau', ex: 'traces', ancre: new THREE.Vector3(2.75, 2.3, -4.85), cam: new THREE.Vector3(2.9, 1.8, -2.0), cible: new THREE.Vector3(3.15, 1.65, -4.9) },
    { id: 'banc', ex: 'mythes', ancre: new THREE.Vector3(0, 1.6, 1.0), cam: new THREE.Vector3(0.6, 2.2, 3.6), cible: new THREE.Vector3(0.5, 1.0, 1.0), groupe: bn },
  ];
}

// ------------------------------------------------------------------ écran
const AIDE = {
  intro: 'Bienvenue dans mon laboratoire ! Ici, on fait de vraies expériences. Clique sur un poste (ou sur son étiquette) pour t\'en approcher. Je te conseille de commencer par le four de fusion.',
  four: 'Le four monte jusqu\'à 1 200 °C. Choisis tes témoins, règle la consigne et observe. Retiens : un témoin fondu donne une température MINIMALE, un témoin intact une température MAXIMALE.',
  triangle: 'Un feu a besoin de quatre choses. Essaie de l\'éteindre de quatre façons différentes : chaque extinction te fait découvrir un côté du tétraèdre du feu.',
  mur: 'Ce coin de cloisons en plâtre, c\'est notre mur d\'essai. Teste le brûleur au centre, contre le mur puis dans l\'angle : compare la hauteur des flammes et les traces laissées sur le plâtre.',
  microscope: 'Au microscope, on examine des conducteurs fondus : arc électrique, feu ou alliage ? Une petite série pour t\'entraîner l\'œil.',
  tableau: 'Le tableau des tracés : on révise la lecture des marques laissées par le feu sur les parois.',
  banc: 'Le banc des idées reçues : bidon, bougie, allumettes… On confronte les croyances aux essais et à la NFPA 921.',
  lina: 'Je suis là pour t\'aider. Clique sur un poste pour commencer une expérience. Si tu es perdu, le bouton « Vue d\'ensemble » te ramène au milieu de la salle.',
};

export function ouvrirLabo3d(ctx, posteInitial = null) {
  const c = ctx.app.c;
  c.laboTP ||= {};
  const screen = $('#screen');
  screen.innerHTML = '';
  const root = h(`<div class="jeu l3">
    <div class="s3d"></div>
    <div class="l3-etiquettes"></div>
    <div class="hud l3-haut"><button class="btn-j ghost l3-qg">⟵ QG</button><div class="hud-box l3-titre"><b>🔬 Laboratoire</b><span class="l3-prog"></span></div></div>
    <div class="hud l3-lina"><div class="portrait" title="Demander conseil">${LABO.avatar}</div><div class="bulle"></div></div>
    <div class="hud l3-aide">Clique sur un poste pour t'en approcher · glisse pour tourner · molette pour zoomer</div>
    <div class="hud l3-panel" hidden></div>
  </div>`);
  screen.appendChild(root);
  const cont = $('.s3d', root);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.className = 'scene-canvas';
  cont.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.05, 80);
  const VUE = { cam: new THREE.Vector3(-0.3, 6.1, 8.3), cible: new THREE.Vector3(-0.3, 0.6, -1.2) };
  camera.position.copy(VUE.cam);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(VUE.cible); controls.enableDamping = true; controls.dampingFactor = 0.12;
  controls.maxPolarAngle = 1.48; controls.minDistance = 0.6; controls.maxDistance = 30;
  controls.update();

  const L = {};
  construireSalle(scene);
  paillasse(scene, -4.2, -4.5, 3.0, 0.8);
  paillasse(scene, 0.4, -4.5, 3.0, 0.8);
  const lina = creerLina(scene);
  const postes = [creerFour(scene, L), creerTriangle(scene, L), creerMur(scene, L), ...creerRevisions(scene),
    { id: 'lina', ancre: new THREE.Vector3(-2.1, 2.25, -1.7), cam: new THREE.Vector3(-1.3, 1.8, 0.9), cible: new THREE.Vector3(-1.6, 1.45, -1.7), groupe: lina }];
  const INFO = {
    four: { ic: '🔥', nom: 'TP 1 · Four de fusion' }, triangle: { ic: '🔺', nom: 'TP 2 · Tétraèdre du feu' }, mur: { ic: '🧱', nom: 'TP 3 · Mur d\'essai' },
    microscope: { ic: '🔬', nom: 'Microscope' }, tableau: { ic: '🧾', nom: 'Tableau des tracés' }, banc: { ic: '⚗️', nom: 'Banc des idées reçues' }, lina: { ic: LABO.avatar, nom: LABO.nom },
  };
  for (const p of postes) if (p.groupe) p.groupe.traverse(o => { o.userData.poste = p.id; });

  // étiquettes flottantes
  const etq = $('.l3-etiquettes', root);
  for (const p of postes) {
    const fait = estFait(p.id);
    p.el = h(`<button class="l3-et ${p.id === 'lina' ? 'pers' : ''}" data-p="${p.id}"><span>${INFO[p.id].ic}</span>${esc(INFO[p.id].nom)}${fait ? ' <i>✓</i>' : ''}</button>`);
    p.el.onclick = () => focus(p.id);
    etq.appendChild(p.el);
  }
  function estFait(id) {
    if (id === 'four') return DEFIS_FOUR.every(d => c.laboTP['four-' + d.id]?.reussi);
    if (id === 'triangle' || id === 'mur') return !!c.laboTP[id]?.reussi;
    const ex = postes?.find?.(p => p.id === id)?.ex; return ex ? (c.entrainement?.[ex]?.meilleur ?? 0) > 0 : false;
  }
  function majProg() {
    const n = TP.filter(t => estFait(t.id)).length;
    $('.l3-prog', root).textContent = ` · TP réussis : ${n} / ${TP.length}`;
    for (const p of postes) if (p.el) p.el.innerHTML = `<span>${INFO[p.id].ic}</span>${esc(INFO[p.id].nom)}${estFait(p.id) ? ' <i>✓</i>' : ''}`;
  }

  // Lina
  const bulle = $('.l3-lina .bulle', root);
  const dire = (txt) => { bulle.innerHTML = `<b>${esc(LABO.nom)}</b>${esc(txt)}`; $('.l3-lina', root).classList.remove('cache'); };
  $('.l3-lina .portrait', root).onclick = () => { const b = $('.l3-lina', root); b.classList.toggle('cache'); };
  dire(AIDE.intro);

  // récompense d'une expérience réussie
  function recompenser(cle, dom, xp, credits = 10) {
    const st = c.laboTP[cle] ||= {};
    const jour = jourCourant();
    const premier = !st.reussi;
    st.reussi = (st.reussi || 0) + 1;
    const cr = st.jour === jour ? 0 : credits;
    if (cr) { c.credits += cr; st.jour = jour; }
    const montees = crediter(c, { [dom]: xp });
    ctx.save(); majProg();
    const d = DOMAINES.find(x => x.id === dom);
    if (montees.length) toast(`${montees[0].dom.ic} ${montees[0].dom.nom} : niveau ${montees[0].n} (${NOMS_NIVEAU[montees[0].n - 1]}) !`, 'ok');
    son('victoire');
    return `<div class="l3-gain">${premier ? '<b>Expérience validée !</b>' : '<b>Expérience réussie à nouveau.</b>'} <span class="chip">${d.ic} ${esc(d.nom)} <b>+${xp}</b></span> ${cr ? `<span class="chip ok">+${cr} cr</span>` : '<span class="chip">prime du jour déjà perçue</span>'}</div>`;
  }

  // panneau latéral
  const panel = $('.l3-panel', root);
  let courant = null;
  function ouvrirPanel(id) {
    panel.hidden = false; panel.className = `hud l3-panel p-${id}`;
    panel.innerHTML = `<div class="l3-ph"><span class="ic">${INFO[id].ic}</span><h3>${esc(INFO[id].nom)}</h3><button class="btn-j ghost l3-retour">↩ Vue d'ensemble</button></div><div class="l3-pb"></div>`;
    $('.l3-retour', panel).onclick = () => focus(null);
    const pb = $('.l3-pb', panel);
    const f = { four: panFour, triangle: panTriangle, mur: panMur, lina: panLina }[id];
    if (f) f(pb); else panRevision(pb, postes.find(p => p.id === id));
  }
  function fermerPanel() { panel.hidden = true; panel.innerHTML = ''; L.four.majUI = null; L.triangle.majUI = null; L.mur.majUI = null; }

  // déplacement de caméra
  let anim = null;
  function focus(id) {
    const p = postes.find(x => x.id === id);
    courant = p ? id : null;
    const dest = p || VUE;
    anim = { t: 0, c0: camera.position.clone(), t0: controls.target.clone(), c1: dest.cam.clone(), t1: dest.cible.clone() };
    fermerPanel();
    if (p) { ouvrirPanel(id); dire(AIDE[id] || AIDE.lina); son('page'); } else dire(AIDE.intro);
    root.classList.toggle('focus', !!p);
    controls.minDistance = p ? 0.5 : 0.6;
  }

  // sélection par clic dans la scène
  const ray = new THREE.Raycaster(); const ptr = new THREE.Vector2();
  let down = null;
  const cibles = postes.filter(p => p.groupe).map(p => p.groupe);
  function posteSous(e) {
    const r = renderer.domElement.getBoundingClientRect();
    ptr.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ptr, camera);
    const hit = ray.intersectObjects(cibles, true)[0];
    return hit?.object.userData.poste || null;
  }
  const onDown = e => { down = { x: e.clientX, y: e.clientY }; };
  const onUp = e => { if (!down) return; const m = Math.hypot(e.clientX - down.x, e.clientY - down.y); down = null; if (m > 6) return; const id = posteSous(e); if (id && id !== courant) focus(id); };
  let survol = 0;
  const onMove = e => { if (performance.now() - survol < 80) return; survol = performance.now(); const id = posteSous(e); renderer.domElement.style.cursor = id && id !== courant ? 'pointer' : ''; postes.forEach(p => p.el?.classList.toggle('survol', p.id === id)); };
  renderer.domElement.addEventListener('pointerdown', onDown);
  renderer.domElement.addEventListener('pointerup', onUp);
  renderer.domElement.addEventListener('pointermove', onMove);

  const resize = () => {
    const w = cont.clientWidth || 800, hh = cont.clientHeight || 600; renderer.setSize(w, hh, false); camera.aspect = w / hh; camera.updateProjectionMatrix();
    const k = Math.max(1, Math.pow(1.5 / camera.aspect, 0.7));
    VUE.cam.set(-0.3, 0.6 + 5.5 * k, -1.2 + 9.5 * k);
    if (!courant && !anim) { camera.position.copy(VUE.cam); controls.target.copy(VUE.cible); }
  };
  const ro = new ResizeObserver(resize); ro.observe(cont); resize();
  controls.update();

  // boucle
  let raf = 0, last = performance.now(), temps = 0;
  const v = new THREE.Vector3();
  function boucle(now) {
    raf = requestAnimationFrame(boucle);
    const reel = (now - last) / 1000; const dt = Math.min(0.1, reel); last = now; temps += dt;
    if (anim) {
      anim.t = Math.min(1, anim.t + Math.min(0.25, reel) / 0.9); const k = anim.t < 0.5 ? 2 * anim.t * anim.t : 1 - Math.pow(-2 * anim.t + 2, 2) / 2;
      camera.position.lerpVectors(anim.c0, anim.c1, k); controls.target.lerpVectors(anim.t0, anim.t1, k);
      if (anim.t >= 1) anim = null;
    }
    controls.target.x = clamp(controls.target.x, -6.5, 6.5); controls.target.z = clamp(controls.target.z, -4.8, 4.5); controls.target.y = clamp(controls.target.y, 0.3, 2.6);
    controls.update();
    L.four.update(dt); L.triangle.update(dt, temps); L.mur.update(dt, temps);
    lina.rotation.y = 0.35 + Math.sin(temps * 0.6) * 0.08;
    renderer.render(scene, camera);
    const w = cont.clientWidth, hh = cont.clientHeight;
    for (const p of postes) {
      v.copy(p.ancre).project(camera);
      const vis = v.z < 1 && Math.abs(v.x) < 1.1 && Math.abs(v.y) < 1.1 && (!courant || p.id === courant);
      p.el.style.display = vis ? '' : 'none';
      if (vis) p.el.style.transform = `translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * hh}px) translate(-50%, -100%)`;
    }
  }
  raf = requestAnimationFrame(boucle);

  function dispose() {
    cancelAnimationFrame(raf); ro.disconnect(); controls.dispose();
    renderer.domElement.removeEventListener('pointerdown', onDown);
    renderer.domElement.removeEventListener('pointerup', onUp);
    renderer.domElement.removeEventListener('pointermove', onMove);
    scene.traverse(o => {
      o.geometry?.dispose();
      for (const m of [].concat(o.material || [])) { m.map?.dispose(); m.dispose(); }
    });
    renderer.dispose();
    delete window.__labo;
  }
  ctx.onLeave = dispose;
  $('.l3-qg', root).onclick = () => { son('page'); ctx.allerQG('entrainement'); };
  window.__labo = { L, focus, camera, postes, c };

  // ============================================================ panneaux des TP
  function quiz(el, qs, fin) {
    let i = 0, bons = 0, rep = null;
    qs = qs.map(q => ({ ...q, opts: melange(q.opts) }));
    const draw = () => {
      if (i >= qs.length) return fin(bons, qs.length);
      const q = qs[i];
      el.innerHTML = `<div class="l3-q"><div class="small muted">Question de Lina ${i + 1} / ${qs.length}</div><p><b>${esc(q.q)}</b></p>
        <div class="opts">${q.opts.map((o, k) => `<button class="choix ${rep != null ? (o.ok ? 'ok' : k === rep ? 'ko' : '') : ''}" data-k="${k}" ${rep != null ? 'disabled' : ''}>${esc(o.t)}</button>`).join('')}</div>
        ${rep != null ? `<div class="verdict ${q.opts[rep].ok ? 'ok' : 'ko'}"><b>${q.opts[rep].ok ? 'Exact !' : 'Pas tout à fait…'}</b> ${esc(q.opts[rep].fb || q.fb || '')}<div style="margin-top:4px">${ref(q.ref)}</div>${voirAussiHtml({ ref: q.ref, texte: q.texte || '' }, { max: 2 })}</div>
        <div class="l3-row end"><button class="btn-j go" data-n>${i < qs.length - 1 ? 'Suivant →' : 'Terminer'}</button></div>` : ''}</div>`;
      $$('[data-k]', el).forEach(b => b.onclick = () => { rep = +b.dataset.k; const ok = q.opts[rep].ok; if (ok) bons++; son(ok ? 'ok' : 'ko'); draw(); });
      $('[data-n]', el)?.addEventListener('click', () => { i++; rep = null; draw(); });
    };
    draw();
  }

  // ---------------- TP 1 : four
  function panFour(pb) {
    const F = L.four;
    const onglets = [['libre', '🧪 Libre'], ...DEFIS_FOUR.map((d, i) => [d.id, `${c.laboTP['four-' + d.id]?.reussi ? '✓' : '🎯'} Défi ${i + 1}`]), ['serie', '⚡ Série']];
    pb.innerHTML = `<div class="l3-tabs">${onglets.map(([id, l]) => `<button data-m="${id}" class="${F.mode === id ? 'on' : ''}">${l}</button>`).join('')}</div><div class="l3-zone"></div>`;
    const z = $('.l3-zone', pb);
    $$('[data-m]', pb).forEach(b => b.onclick = () => { if (b.dataset.m === 'serie') return serieRapide('thermo'); F.mode = b.dataset.m; preparer(); panFour(pb); });
    const thermo = () => `<div class="l3-thermo"><div class="tube"><i id="f-bar"></i>${F.ech.filter(s => s.m.t <= TMAX).map(s => `<span class="rep" style="bottom:${(s.m.t / TMAX) * 100}%" title="${esc(s.m.nom)}">${esc(COURT[s.id])}</span>`).join('')}</div>
      <div><div class="l3-temp" id="f-T"></div><div class="small" id="f-coul"></div></div></div>`;
    const journal = () => `<div class="l3-journal" id="f-j"></div>`;
    F.majUI = () => {
      const bar = $('#f-bar', z); if (!bar) return;
      bar.style.height = `${F.cache ? 0 : (F.T / TMAX) * 100}%`;
      $('#f-T', z).textContent = F.cache ? '— °C (caché)' : `${Math.round(F.T)} °C`;
      $('#f-coul', z).innerHTML = F.cache ? 'Lina garde la température secrète.' : `Lueur dans le four : <b>${esc(nomLueur(F.T))}</b>`;
      $('#f-j', z).innerHTML = F.journal.length ? F.journal.map(j => `<div><b>${j.T} °C</b> · ${esc(j.txt)}</div>`).join('') : '<div class="muted">Le journal d\'observation se remplit pendant la chauffe.</div>';
      const bt = $('[data-chauffe]', z); if (bt) bt.textContent = F.chauffe ? '⏸ Arrêter' : '🔥 Chauffer';
    };
    if (F.mode === 'libre') {
      z.innerHTML = `<p class="small">Choisis jusqu'à <b>6 témoins</b>, règle la consigne puis lance la chauffe. Observe à quelle température chacun réagit.</p>
        <div class="l3-chips">${CANDIDATS.map(id => `<button data-e="${id}" class="${F.choix.includes(id) ? 'on' : ''}">${esc(COURT[id])}<small>${esc(fusion(id).plage.replace(/\s*\(.*\)/, ''))} °C</small></button>`).join('')}</div>
        ${thermo()}
        <label class="l3-slider">Consigne : <b id="f-c">${F.consigne} °C</b><input type="range" min="50" max="${TMAX}" step="10" value="${F.consigne}"></label>
        <div class="l3-row"><button class="btn-j go" data-chauffe>🔥 Chauffer</button><button class="btn-j ghost" data-reset>❄️ Nouveau plateau</button></div>
        ${journal()}
        <details class="l3-note"><summary>À retenir</summary>Un témoin <b>fondu</b> prouve que sa température de fusion a été atteinte à cet endroit (minimum). Un témoin <b>intact</b> prouve qu'elle ne l'a pas été (maximum). Un plastique fondu reste déformé après refroidissement : c'est pour cela qu'on peut le lire après l'incendie. ${ref('6.2.8')}</details>`;
      $$('[data-e]', z).forEach(b => b.onclick = () => {
        const id = b.dataset.e;
        if (F.choix.includes(id)) F.choix = F.choix.filter(x => x !== id);
        else if (F.choix.length < 6) F.choix = [...F.choix, id].sort((a, b2) => CANDIDATS.indexOf(a) - CANDIDATS.indexOf(b2));
        else return toast('Six témoins au maximum sur le plateau.', 'info');
        F.remplir(F.choix); panFour(pb);
      });
      const sl = $('input[type=range]', z); sl.oninput = () => { F.consigne = +sl.value; $('#f-c', z).textContent = `${F.consigne} °C`; };
      $('[data-chauffe]', z).onclick = () => { if (!F.chauffe && F.T >= F.consigne - 1 && F.consigne > F.T - 1) { toast('Le four est déjà à la consigne : monte la consigne.', 'info'); return; } F.chauffe = !F.chauffe; F.vitesse = 70; F.onAtteint = () => son('page'); son('page'); F.majUI(); };
      $('[data-reset]', z).onclick = () => { F.remplir(F.choix); F.majUI(); };
    } else if (F.mode === 'ordre') {
      const D = F.defi;
      z.innerHTML = `<p><b>${esc(DEFIS_FOUR[0].nom)}</b> — ${esc(DEFIS_FOUR[0].desc)}</p>
        <p class="small">Clique les témoins <b>dans l'ordre où ils vont fondre</b> (le premier qui fond d'abord).</p>
        <div class="l3-chips">${D.ids.map(id => { const r = D.joueur.indexOf(id); return `<button data-e="${id}" class="${r >= 0 ? 'on' : ''}" ${D.phase !== 'prep' ? 'disabled' : ''}>${r >= 0 ? `<em>${r + 1}</em>` : ''}${esc(fusion(id).nom.split(' (')[0].split(',')[0])}<small>${esc(fusion(id).ex.split(',')[0])}</small></button>`; }).join('')}</div>
        ${thermo()}
        <div class="l3-row">${D.phase === 'prep' ? `<button class="btn-j go" data-go ${D.joueur.length < D.ids.length ? 'disabled' : ''}>🔥 Lancer la chauffe</button><button class="btn-j ghost" data-raz>↺ Effacer mon ordre</button>` : D.phase === 'chauffe' ? '<span class="small">Chauffe en cours…</span>' : '<button class="btn-j ghost" data-new>↻ Nouveaux témoins</button>'}</div>
        <div id="f-res"></div>${journal()}`;
      $$('[data-e]', z).forEach(b => b.onclick = () => { const id = b.dataset.e; if (!D.joueur.includes(id)) D.joueur.push(id); else D.joueur = D.joueur.filter(x => x !== id); panFour(pb); });
      $('[data-raz]', z)?.addEventListener('click', () => { D.joueur = []; panFour(pb); });
      $('[data-new]', z)?.addEventListener('click', () => { preparer(true); panFour(pb); });
      $('[data-go]', z)?.addEventListener('click', () => {
        D.phase = 'chauffe'; F.consigne = TMAX; F.vitesse = 90; F.chauffe = true;
        F.onAtteint = () => { D.phase = 'fini'; panFour(pb); };
        panFour(pb);
      });
      if (D.phase === 'fini') {
        const milieu = id => { const [lo, hi] = bornes(fusion(id)); return (lo + hi) / 2; };
        const reel = [...D.ids].sort((x, y) => milieu(x) - milieu(y));
        let paires = 0, total = 0;
        for (let a = 0; a < D.ids.length; a++) for (let b = a + 1; b < D.ids.length; b++) { total++; const x = D.ids[a], y = D.ids[b]; if (Math.sign(D.joueur.indexOf(x) - D.joueur.indexOf(y)) === Math.sign(reel.indexOf(x) - reel.indexOf(y))) paires++; }
        const ok = paires >= total - 1;
        if (ok && !D.paye) D.gain = recompenser('four-ordre', 'thermo', 25), D.paye = true;
        $('#f-res', z).innerHTML = `<div class="verdict ${ok ? 'ok' : 'ko'}"><b>${ok ? 'Bien vu !' : 'Pas encore…'}</b> ${paires} paires sur ${total} dans le bon ordre.
          <ol class="l3-ordre">${reel.map((id, i) => `<li>${esc(COURT[id])} — ${esc(fusion(id).plage)} °C ${D.joueur[i] === id ? '✓' : `<span class="muted">(tu avais mis : ${esc(COURT[D.joueur[i]])})</span>`}</li>`).join('')}</ol>
          ${ok ? '' : 'Astuce : les plastiques fondent bien avant les métaux « légers » (plomb, zinc, aluminium), eux-mêmes bien avant le laiton et le cuivre.'}</div>${ok ? D.gain || '' : ''}`;
      }
    } else if (F.mode === 'mystere' || F.mode === 'alliage') {
      const D = F.defi; const di = F.mode === 'mystere' ? 1 : 2;
      z.innerHTML = `<p><b>${esc(DEFIS_FOUR[di].nom)}</b> — ${esc(DEFIS_FOUR[di].desc)}</p>
        ${thermo()}
        <div class="l3-row">${D.phase === 'prep' ? '<button class="btn-j go" data-go>🔥 Laisser Lina chauffer le four</button>' : D.phase === 'chauffe' ? '<span class="small">Lina chauffe le four… observe les témoins !</span>' : ''}</div>
        <div id="f-q"></div>${journal()}`;
      $('[data-go]', z)?.addEventListener('click', () => {
        D.phase = 'chauffe'; F.cache = true; F.consigne = D.T; F.vitesse = 160; F.chauffe = true;
        F.onAtteint = () => { D.phase = 'question'; panFour(pb); };
        panFour(pb);
      });
      if (D.phase === 'question' || D.phase === 'fini') {
        const q = $('#f-q', z);
        const items = F.mode === 'alliage'
          ? [{ mat: 'alu', etat: 'fondu' }, { mat: 'cuivre', etat: 'fondu', alliage: true }, { mat: 'laiton', etat: 'intact' }]
          : F.ech.map(s => ({ mat: s.id, etat: s.f >= 0.5 ? 'fondu' : 'intact' }));
        D.opts ||= melange(optionsThermo({ items }));
        const constat = F.mode === 'alliage'
          ? '<ul class="small"><li>La plaque d\'<b>aluminium</b> a fondu en flaque.</li><li>Le fil de <b>cuivre</b> est percé, grisâtre, avec des perles là où il touchait l\'aluminium.</li><li>Le lingot de <b>laiton</b> est intact.</li></ul>'
          : `<ul class="small">${F.ech.map(s => `<li><b>${esc(COURT[s.id])}</b> : ${s.f >= 0.5 ? (s.fam === 'verre' ? 'ramolli, affaissé' : 'fondu') : 'intact'}</li>`).join('')}</ul>`;
        q.innerHTML = `<div class="l3-q"><b>Ce que tu observes :</b>${constat}<p><b>Quelle température a régné dans le four ?</b></p>
          <div class="opts">${D.opts.map((o, k) => `<button class="choix ${D.rep != null ? (o.ok ? 'ok' : k === D.rep ? 'ko' : '') : ''}" data-k="${k}" ${D.rep != null ? 'disabled' : ''}>${esc(o.t)}</button>`).join('')}</div>
          ${D.rep != null ? `<div class="verdict ${D.opts[D.rep].ok ? 'ok' : 'ko'}"><b>${D.opts[D.rep].ok ? 'Exact !' : 'Raté…'}</b> ${esc(D.opts[D.rep].ok ? D.opts[D.rep].fb : D.opts[D.rep].fb + ' ' + D.opts.find(o => o.ok).fb)}<div style="margin-top:4px">Température réelle du four : <span style="font-weight:800">${fmt(D.T)}</span>. ${ref(F.mode === 'alliage' ? '6.2.8.6' : '6.2.8')}</div></div>${D.gain || ''}
          <div class="l3-row end"><button class="btn-j go" data-new>↻ Recommencer</button></div>` : ''}</div>`;
        $$('[data-k]', q).forEach(b => b.onclick = () => {
          D.rep = +b.dataset.k; D.phase = 'fini'; F.cache = false; F.majUI();
          const ok = D.opts[D.rep].ok; son(ok ? 'ok' : 'ko');
          if (ok) D.gain = recompenser('four-' + F.mode, 'thermo', 25);
          panFour(pb);
        });
        $('[data-new]', q)?.addEventListener('click', () => { preparer(true); panFour(pb); });
      }
    }
    F.majUI();
  }
  function preparer(force = false) {
    const F = L.four;
    F.cache = false; F.chauffe = false;
    if (F.mode === 'libre') { F.defi = null; F.remplir(F.choix); return; }
    if (!force && F.defi?.mode === F.mode) return;
    if (F.mode === 'ordre') {
      const pool = melange(CANDIDATS.filter(id => fusion(id).t < TMAX - 50)); const ids = [];
      for (const id of pool) { if (ids.length < 5 && ids.every(x => Math.abs(fusion(x).t - fusion(id).t) >= 35)) ids.push(id); }
      F.defi = { mode: 'ordre', ids: melange(ids), joueur: [], phase: 'prep' };
      F.remplir(F.defi.ids);
    } else if (F.mode === 'mystere') {
      let ids, T;
      for (let essai = 0; essai < 50; essai++) {
        ids = melange(CANDIDATS).slice(0, 6).sort((a, b) => fusion(a).t - fusion(b).t);
        const k = 1 + Math.floor(Math.random() * 5);
        const hiPrev = bornes(fusion(ids[k - 1]))[1], loNext = bornes(fusion(ids[k]))[0];
        if (loNext - hiPrev >= 30 && hiPrev < TMAX - 40) { T = Math.round((hiPrev + Math.min(loNext, TMAX)) / 2 / 5) * 5; break; }
      }
      F.defi = { mode: 'mystere', T, phase: 'prep' };
      F.remplir(ids);
    } else if (F.mode === 'alliage') {
      F.defi = { mode: 'alliage', T: 760 + Math.round(Math.random() * 8) * 10, phase: 'prep' };
      F.reset();
    }
  }

  function serieRapide(exId) {
    const ex = EXERCICES.find(e => e.id === exId);
    lancerExercice(ex, ctx, () => majProg());
  }

  // ---------------- TP 2 : tétraèdre
  const COTES = {
    combustible: { nom: 'Combustible', ic: '⛽', titre: 'Tu as retiré le combustible', texte: 'Sans gaz, plus rien à brûler : la flamme meurt aussitôt. Sur un feu réel, c\'est fermer une vanne de gaz, déplacer les combustibles ou faire une tranchée en feu de forêt.' },
    comburant: { nom: 'Comburant (oxygène)', ic: '💨', titre: 'Tu as étouffé la flamme', texte: 'Sous la cloche, la flamme consomme l\'oxygène : vers 15 à 16 % d\'oxygène, elle ne peut plus vivre. Dans une pièce fermée, un feu peut ainsi faiblir faute d\'air… et repartir violemment à l\'ouverture d\'une porte.' },
    energie: { nom: 'Énergie (chaleur)', ic: '🌡️', titre: 'Tu as refroidi la flamme', texte: 'Les gouttelettes d\'eau absorbent beaucoup de chaleur en se vaporisant : le combustible ne reçoit plus assez d\'énergie pour continuer à produire des gaz inflammables.' },
    reaction: { nom: 'Réaction en chaîne', ic: '⚛️', titre: 'Tu as cassé la réaction en chaîne', texte: 'La poudre capte les espèces chimiques très réactives (radicaux libres) qui entretiennent la combustion dans la flamme : la réaction s\'interrompt même s\'il reste combustible, oxygène et chaleur.' },
  };
  const svgTetra = (T) => {
    const on = k => T.decouverts.includes(k); const col = k => (T.cause === k ? '#e74c3c' : on(k) ? '#2e9e5b' : '#c4ccd1');
    return `<svg viewBox="0 0 220 170" class="l3-tetra"><line x1="110" y1="12" x2="205" y2="150" stroke="${col('energie')}" stroke-width="9" stroke-linecap="round"/><line x1="110" y1="12" x2="15" y2="150" stroke="${col('comburant')}" stroke-width="9" stroke-linecap="round"/><line x1="15" y1="150" x2="205" y2="150" stroke="${col('combustible')}" stroke-width="9" stroke-linecap="round"/><circle cx="110" cy="103" r="26" fill="${col('reaction')}"/>
      <text x="110" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="#2b3a44">Combustible</text><text x="40" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#2b3a44" transform="rotate(-56 40 72)">Comburant</text><text x="180" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#2b3a44" transform="rotate(56 180 72)">Énergie</text><text x="110" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">réaction</text><text x="110" y="111" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">en chaîne</text></svg>`;
  };
  const Q_TRIANGLE = [
    { q: 'Dans une pièce fermée, le feu faiblit puis couve, alors qu\'il reste beaucoup de meubles à brûler. Quel élément lui manque ?', ref: '5.1 / 5.10', texte: 'ventilation oxygène compartiment',
      opts: [{ t: 'Le comburant : l\'oxygène de la pièce est épuisé', ok: true, fb: 'Le feu est « contrôlé par la ventilation ». Une arrivée d\'air brutale (porte, vitre qui casse) peut le relancer violemment.' }, { t: 'Le combustible', ok: false, fb: 'Il reste des meubles : le combustible est là.' }, { t: 'L\'énergie', ok: false, fb: 'La pièce est encore très chaude : l\'énergie ne manque pas.' }, { t: 'Rien : un feu s\'éteint toujours seul au bout d\'un moment', ok: false, fb: 'Un feu ne s\'arrête pas « tout seul » : il lui manque toujours quelque chose.' }] },
    { q: 'Pour qu\'un meuble en bois s\'enflamme, que doit faire la source de chaleur ?', ref: '5.7', texte: 'inflammation pyrolyse énergie',
      opts: [{ t: 'Lui apporter assez d\'énergie, assez longtemps, pour qu\'il dégage des gaz inflammables', ok: true, fb: 'Les solides ne brûlent pas directement : la chaleur les décompose (pyrolyse) en gaz, et ce sont ces gaz qui s\'enflamment. Puissance ET durée d\'exposition comptent.' }, { t: 'Atteindre la température de fusion du bois', ok: false, fb: 'Le bois ne fond pas : il se décompose et carbonise.' }, { t: 'Toucher le bois avec une flamme, même une seconde', ok: false, fb: 'Une flamme brève sur une pièce massive ne suffit généralement pas : il faut une exposition suffisante.' }] },
    { q: 'Un extincteur à poudre éteint surtout la flamme en…', ref: '5.1', texte: 'tétraèdre réaction en chaîne',
      opts: [{ t: 'Interrompant la réaction en chaîne dans la flamme', ok: true, fb: 'C\'est le quatrième côté du tétraèdre : la poudre bloque les radicaux libres.' }, { t: 'Refroidissant fortement le combustible', ok: false, fb: 'C\'est surtout le rôle de l\'eau.' }, { t: 'Retirant le combustible', ok: false, fb: 'Le combustible reste en place.' }] },
  ];
  function panTriangle(pb) {
    const T = L.triangle;
    const draw = () => {
      const info = T.cause ? COTES[T.cause] : null;
      const tous = Object.keys(COTES).every(k => T.decouverts.includes(k));
      pb.innerHTML = `<p class="small">Allume la flamme, puis éteins-la de <b>quatre façons différentes</b>. Rallume entre deux essais.</p>
        <div class="l3-tri">${svgTetra(T)}<div><div class="l3-etat ${T.flamme ? 'on' : ''}">${T.flamme ? '🔥 Flamme allumée' : '⚫ Flamme éteinte'}</div>
          <div class="small">Oxygène sous la cloche</div><div class="l3-jauge"><i id="t-o2" style="width:${(T.O2 / 21) * 100}%"></i></div><div class="small" id="t-o2t">${nb(T.O2)} % ${T.O2 < 16 ? '— trop peu pour une flamme' : ''}</div>
          <div class="small" style="margin-top:6px">Côtés découverts : <b>${T.decouverts.length} / 4</b></div></div></div>
        <div class="l3-actions">
          <button class="btn-j go" data-a="allumer" ${T.flamme ? 'disabled' : ''}>🔥 Allumer</button>
          <button class="btn-j" data-a="cloche">🫙 ${T.cloche ? 'Relever la cloche' : 'Poser la cloche'}</button>
          <button class="btn-j" data-a="gaz">🔧 ${T.gaz ? 'Fermer le gaz' : 'Ouvrir le gaz'}</button>
          <button class="btn-j" data-a="eau">💧 Brumiser de l'eau</button>
          <button class="btn-j" data-a="poudre">🧯 Projeter de la poudre</button></div>
        ${T.msg ? `<div class="verdict ko">${esc(T.msg)}</div>` : ''}
        ${info ? `<div class="verdict ok"><b>${info.ic} ${esc(info.titre)}</b> ${esc(info.texte)}<div style="margin-top:4px">${ref('5.1')}</div></div>` : ''}
        ${tous ? `<div class="l3-row"><button class="btn-j go" data-quiz>📝 Répondre aux questions de Lina</button></div>` : ''}`;
      $$('[data-a]', pb).forEach(b => b.onclick = () => T.action(b.dataset.a));
      $('[data-quiz]', pb)?.addEventListener('click', () => quiz(pb, Q_TRIANGLE, (bons, n) => {
        const ok = bons >= n - 1;
        pb.innerHTML = `<div class="l3-bilan"><div class="gros">${bons} / ${n}</div>${ok ? recompenser('triangle', 'raisonnement', 30) : '<p>Encore un effort : relis les explications et recommence.</p>'}<div class="l3-row"><button class="btn-j" data-re>↻ Refaire l'expérience</button></div></div>`;
        $('[data-re]', pb).onclick = () => { T.decouverts = []; T.cause = null; draw(); };
      }));
    };
    T.majUI = (leger) => {
      if (leger) { const o = $('#t-o2', pb); if (o) { o.style.width = `${(T.O2 / 21) * 100}%`; $('#t-o2t', pb).textContent = `${nb(T.O2)} % ${T.O2 < 16 ? '— trop peu pour une flamme' : ''}`; } return; }
      if ($('[data-a]', pb)) draw();
    };
    T.onEteint = () => { if ($('[data-a]', pb)) draw(); };
    draw();
  }

  // ---------------- TP 3 : mur d'essai
  const Q_MUR = [
    { q: 'Même brûleur, même puissance : pourquoi la flamme est-elle plus haute dans l\'angle qu\'au centre ?', ref: '5.6', texte: 'hauteur de flamme panache paroi angle',
      opts: [{ t: 'Les parois gênent l\'arrivée d\'air : la flamme monte plus haut pour trouver son oxygène', ok: true, fb: 'Moins d\'air aspiré sur les côtés : la combustion s\'étire en hauteur. En plus, les parois chaudes renvoient de la chaleur.' }, { t: 'Le plâtre des murs brûle et ajoute du combustible', ok: false, fb: 'Le plâtre ne participe quasiment pas : la puissance du brûleur est la même.' }, { t: 'Il fait plus froid dans l\'angle', ok: false, fb: 'C\'est l\'inverse : l\'angle concentre la chaleur.' }] },
    { q: 'Un tracé en V très ouvert sur un mur prouve-t-il un feu rapide, donc un accélérant ?', ref: '6.3.7.1', texte: 'angle du V mythe vitesse',
      opts: [{ t: 'Non : l\'angle dépend surtout de la puissance, de la ventilation, de la paroi et de la géométrie', ok: true, fb: 'Dans tes essais, la même flamme donne des V différents selon la puissance et la position. L\'angle ne mesure pas la vitesse du feu.' }, { t: 'Oui : un V large signe toujours un liquide inflammable', ok: false, fb: 'C\'est une idée reçue. Ni la forme ni l\'angle d\'un V ne prouvent un accélérant.' }, { t: 'Oui, si le V est plus large que 45°', ok: false, fb: 'Aucun angle « seuil » ne permet de conclure.' }] },
    { q: 'Brûleur au centre : les panneaux sont presque propres. Qu\'en conclure ?', ref: '6.3.7.1', texte: 'absence de tracé panache',
      opts: [{ t: 'L\'absence de V ne prouve pas l\'absence de feu : le panache ne touchait pas la paroi', ok: true, fb: 'Un tracé en V naît du contact du panache avec la paroi. Un foyer éloigné des murs peut n\'en laisser aucun.' }, { t: 'Que le feu n\'a jamais existé à cet endroit', ok: false, fb: 'Le brûleur a bien brûlé 60 secondes !' }, { t: 'Que le feu était de faible puissance', ok: false, fb: 'Même à 200 kW, un foyer éloigné des parois laisse peu de traces sur elles.' }] },
  ];
  function panMur(pb) {
    const M = L.mur;
    const draw = () => {
      const L1 = M.hauteur(); const p = POSITIONS[M.pos];
      const testees = new Set(M.essais.map(e => e.pos));
      pb.innerHTML = `<p class="small">Choisis une position et une puissance, puis allume le brûleur pendant <b>60 secondes</b> (accélérées). Compare les flammes et les traces sur le plâtre.</p>
        <div class="l3-lbl">Position du brûleur</div><div class="l3-chips">${Object.entries(POSITIONS).map(([id, x]) => `<button data-p="${id}" class="${M.pos === id ? 'on' : ''}" ${M.allume ? 'disabled' : ''}>${testees.has(id) ? '✓ ' : ''}${esc(x.nom)}</button>`).join('')}</div>
        <div class="l3-lbl">Puissance du feu</div><div class="l3-chips">${PUISSANCES.map(q => `<button data-q="${q}" class="${M.Q === q ? 'on' : ''}" ${M.allume ? 'disabled' : ''}>${q} kW<small>${q === 50 ? 'corbeille' : q === 100 ? 'petit carton' : 'sac poubelle'}</small></button>`).join('')}</div>
        <div class="l3-mesure"><div><span>Hauteur de flamme</span><b>≈ ${nb(L1, 2)} m</b></div><div><span>Air aspiré</span><b>${p.k === 1 ? 'tout autour' : p.k === 2 ? 'moitié' : 'un quart'}</b></div></div>
        <div class="small muted">${esc(p.nom)} : ${esc(p.txt)}. ${L1 + H_BRULEUR > H_MUR ? '<b>La flamme dépasse le haut du panneau.</b>' : ''}</div>
        <div class="l3-row">${M.allume ? `<span class="small" id="m-t">Essai en cours… ${Math.round(M.t)} s / 60 s</span>` : '<button class="btn-j go" data-go>🔥 Allumer 60 s</button><button class="btn-j ghost" data-net>🧽 Changer les panneaux</button>'}</div>
        ${M.essais.length ? `<table class="l3-tab"><tr><th>Position</th><th>kW</th><th>Flamme</th><th>V sur le plâtre</th></tr>${M.essais.map(e => `<tr><td>${esc(POSITIONS[e.pos].nom)}</td><td>${e.Q}</td><td>${nb(e.L, 2)} m</td><td>${e.pos === 'centre' ? 'non' : e.pos === 'angle' ? 'oui, sur les 2 murs' : 'oui'}</td></tr>`).join('')}</table>` : ''}
        <details class="l3-note"><summary>Comment on calcule la hauteur de flamme ?</summary>Avec la corrélation de Heskestad : L ≈ 0,235 × Q<sup>0,4</sup> − 1,02 × D (Q en kW, D diamètre du foyer en m). Contre un mur on compte la puissance ×2, dans un angle ×4 (méthode « miroir ») : c'est une approximation d'école. ${ref('5.6')}</details>
        ${testees.size >= 3 ? '<div class="l3-row"><button class="btn-j go" data-quiz>📝 Répondre aux questions de Lina</button></div>' : `<div class="small">Teste les trois positions pour débloquer les questions (${testees.size} / 3).</div>`}`;
      $$('[data-p]', pb).forEach(b => b.onclick = () => { M.setPos(b.dataset.p); draw(); });
      $$('[data-q]', pb).forEach(b => b.onclick = () => { M.setQ(+b.dataset.q); draw(); });
      $('[data-go]', pb)?.addEventListener('click', () => { M.allumer(); draw(); });
      $('[data-net]', pb)?.addEventListener('click', () => { M.nettoyer(); draw(); });
      $('[data-quiz]', pb)?.addEventListener('click', () => quiz(pb, Q_MUR, (bons, n) => {
        const ok = bons >= n - 1;
        pb.innerHTML = `<div class="l3-bilan"><div class="gros">${bons} / ${n}</div>${ok ? recompenser('mur', 'traces', 30) : '<p>Encore un effort : refais un essai et observe bien les panneaux.</p>'}<div class="l3-row"><button class="btn-j" data-re>↻ Retour au mur d'essai</button></div></div>`;
        $('[data-re]', pb).onclick = draw;
      }));
    };
    M.majUI = (leger) => { if (leger) { const t = $('#m-t', pb); if (t) t.textContent = `Essai en cours… ${Math.round(M.t)} s / 60 s`; return; } if ($('[data-p]', pb)) draw(); };
    M.onFin = () => { if ($('[data-p]', pb)) draw(); };
    draw();
  }

  // ---------------- postes de révision et Lina
  function panRevision(pb, p) {
    const ex = EXERCICES.find(e => e.id === p.ex); const st = c.entrainement?.[ex.id] || {};
    const d = DOMAINES.find(x => x.id === ex.dom);
    pb.innerHTML = `<h4 style="margin:0 0 4px">${esc(ex.nom)}</h4><p>${esc(ex.desc)}</p>
      <div class="small">${d.ic} ${esc(d.nom)} · record : ${st.meilleur ?? '—'} / ${ex.n} · ${st.jour === jourCourant() ? 'prime du jour perçue' : `jusqu'à +${ex.n * 5} cr aujourd'hui`}</div>
      <div class="l3-row"><button class="btn-j go" data-go>▶ Lancer la série</button></div>`;
    $('[data-go]', pb).onclick = () => serieRapide(ex.id);
  }
  function panLina(pb) {
    pb.innerHTML = `<p>${esc(AIDE.lina)}</p><div class="l3-liste">${TP.map(t => `<button class="btn-j" data-t="${t.id}">${t.ic} ${esc(t.nom)} ${estFait(t.id) ? '✓' : ''}<small>${esc(t.desc)}</small></button>`).join('')}</div>`;
    $$('[data-t]', pb).forEach(b => b.onclick = () => focus(b.dataset.t));
  }

  majProg();
  if (posteInitial) setTimeout(() => focus(posteInitial), 250);
  return { dispose };
}
