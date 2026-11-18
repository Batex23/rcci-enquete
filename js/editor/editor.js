// Éditeur formateur « façon Les Sims » : construire, effets du feu, indices & photos, enquête, RETEX
import * as THREE from '../../vendor/three.module.min.js';
import { Scene3D, altitudeDe, niveauIndex } from '../engine/scene3d.js';
import { SCENARIOS } from '../data/scenarios/index.js';
import { scenariosPerso, sauverScenarioPerso, lire as idbLire, ecrire as idbEcrire, compresserImage } from '../stockage.js';
import { SECTIONS, get, set, nouveauScenario, valider } from './schema.js';
import { champHtml, lier, rendreListe, ctxF } from './formulaires.js';
import { migrer, jouabilite } from '../game/prepa.js';
import { ouvrirAnalyse } from '../screens/analyseView.js';
import { exporterRetexHtml } from '../retex/export.js';
import { $, $$, h, esc, toast, modal, confirmer } from '../ui.js';
import { FUSIONS, fourchette, libelle } from '../data/thermique.js';

// ------------------------------------------------------------------ catalogues
const CATALOGUE = [
  ['Séjour', [['canape', '🛋️', 'Canapé', { L: 2.2 }], ['fauteuil', '💺', 'Fauteuil'], ['tableBasse', '▭', 'Table basse'], ['meubleTV', '🗄️', 'Meuble TV', { L: 1.6 }], ['tv', '📺', 'Téléviseur', { y: 0.5 }], ['tapis', '🟥', 'Tapis', { w: 2, d: 1.4 }], ['etagere', '📚', 'Étagère', { L: 1.8 }], ['lampadaire', '🪔', 'Lampadaire']]],
  ['Cuisine', [['cuisine', '🍳', 'Plan de cuisine', { L: 3 }], ['frigo', '🧊', 'Réfrigérateur'], ['table', '🍽️', 'Table'], ['chaise', '🪑', 'Chaise'], ['machineLaver', '🧺', 'Lave-linge']]],
  ['Chambre & bain', [['lit', '🛏️', 'Lit', { L: 2, l: 1.6 }], ['armoire', '🚪', 'Armoire'], ['bureau', '🖥️', 'Bureau'], ['baignoire', '🛁', 'Baignoire']]],
  ['Technique & énergie', [['tableauElec', '⚡', 'Tableau électrique', { y: 1.3 }], ['prise', '🔌', 'Prise murale', { y: 0.3 }], ['multiprise', '🔌', 'Multiprise'], ['chaudiere', '🔥', 'Chaudière'], ['poele', '🪵', 'Poêle'], ['radiateur', '♨️', 'Radiateur'], ['daaf', '🔔', 'DAAF']]],
  ['Garage & extérieur', [['voiture', '🚗', 'Voiture'], ['trottinette', '🛴', 'Trottinette'], ['tondeuse', '🌱', 'Tondeuse'], ['jerrican', '⛽', 'Jerrican'], ['etabli', '🧰', 'Établi', { L: 2 }], ['velo', '🚲', 'Vélo électrique'], ['chargeur', '🔋', 'Chargeur'], ['cellules', '🔩', 'Cellules projetées', { r: 1.5, n: 14 }], ['cartons', '📦', 'Cartons', { n: 3 }]]],
  ['Structure & débris', [['escalier', '🪜', 'Escalier', { L: 3, l: 0.9 }], ['debris', '🪨', 'Débris', { w: 1.5, d: 1 }]]],
];
const OUVERTURES = { porte: { type: 'porte', w: 0.9, h: 2.05 }, fenetre: { type: 'fenetre', w: 1.2, h: 1.15, allege: 0.95 }, baie: { type: 'baie', w: 2.4, h: 2.15, allege: 0 }, garage: { type: 'porte', garage: true, w: 2.4, h: 2.0 } };
const PINCEAUX_MUR = [['V', 'Tracé en V'], ['cleanburn', 'Clean burn'], ['calcination', 'Calcination'], ['protegee', 'Zone protégée'], ['demarcation', 'Ligne de démarcation']];
const PINCEAUX_SOL = [['irregulier', 'Tracés irréguliers'], ['consomme', 'Consommation / trou'], ['protegeeSol', 'Zone protégée'], ['debris', 'Débris (pièce)']];
const SOLS = ['parquet', 'stratifie', 'carrelage', 'beton'];

const MODES = [['construire', '🏗️ Construire'], ['effets', '🔥 Effets du feu'], ['indices', '📍 Indices & photos'], ['enquete', '🧾 Enquête'], ['retex', '📘 RETEX']];
const ED = { scn: null, mode: 'construire', outil: 'select', niv: 0, sel: null, drag: null, section: 'general', ghost: null };
let S;

// ------------------------------------------------------------------ utilitaires
const snap = (v, p = 0.25) => Math.round(v / p) * p;
const r2 = v => Math.round(v * 100) / 100;
const bat = () => ED.scn.batiment;
const nivCur = () => bat().niveaux[ED.niv];
const alt = () => nivCur().altitude || 0;
function uid(prefix, existants) { let i = 1; while (existants.includes(prefix + i)) i++; return prefix + i; }
const toutesPieces = () => bat().niveaux.flatMap(n => n.pieces);
const pieceA = (x, z, niv = nivCur()) => niv.pieces.find(p => x >= p.x && x <= p.x + p.w && z >= p.z && z <= p.z + p.d) || null;
function zonePour(x, z) {
  const p = pieceA(x, z);
  const sc = ED.scn;
  if (p) {
    let zz = sc.zones.find(q => q.piece === p.id);
    if (!zz) { zz = { id: p.id, nom: p.nom, piece: p.id, rang: Math.round((p.suie || 0) * 4), cible: [r2(p.x + p.w / 2), alt(), r2(p.z + p.d / 2)], zoom: 1.4 }; sc.zones.push(zz); }
    return zz.id;
  }
  let ext = sc.zones.find(q => q.exterieur);
  if (!ext) { ext = { id: 'abords', nom: 'Abords et extérieur', exterieur: true, rang: 0, cible: [0, 0, 0], zoom: 0.8 }; sc.zones.unshift(ext); }
  return ext.id;
}

// ------------------------------------------------------------------ persistance (brouillon)
let tSave = null;
function changed(rebuild = true) {
  if (rebuild) reconstruire();
  clearTimeout(tSave);
  tSave = setTimeout(() => idbEcrire('brouillon', ED.scn), 700);
  $('#edTitre').textContent = ED.scn.titre || ED.scn.id;
}

// ------------------------------------------------------------------ scène
const helpers = {};
function initHelpers() {
  helpers.grid = new THREE.GridHelper(80, 320, 0x6c757d, 0x3a4048);
  helpers.grid.material.transparent = true; helpers.grid.material.opacity = 0.35;
  S.overlay.add(helpers.grid);
  helpers.sel = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)), new THREE.LineBasicMaterial({ color: 0xffd23f, depthTest: false }));
  helpers.sel.renderOrder = 40; helpers.sel.visible = false; S.overlay.add(helpers.sel);
  helpers.prev = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.28, depthTest: false }));
  helpers.prev.renderOrder = 39; helpers.prev.visible = false; S.overlay.add(helpers.prev);
}
function boite(m, x0, x1, y0, y1, z0, z1) {
  m.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  m.scale.set(Math.max(0.02, Math.abs(x1 - x0)), Math.max(0.02, Math.abs(y1 - y0)), Math.max(0.02, Math.abs(z1 - z0)));
  m.visible = true;
}
function etiquette(txt, wp) {
  const el = $('#dims');
  if (!txt) { el.hidden = true; return; }
  const v = new THREE.Vector3(...wp).project(S.camera);
  const r = S.renderer.domElement.getBoundingClientRect();
  el.hidden = false; el.textContent = txt;
  el.style.left = `${(v.x + 1) / 2 * r.width}px`; el.style.top = `${(1 - v.y) / 2 * r.height}px`;
}

function reconstruire() {
  const sc = ED.scn;
  S.load(sc, { garderCamera: true });
  S.setHotspots(sc.observations.map(o => ({ id: o.id, pos: o.pos, alt: altitudeDe(bat(), o.niveau), niv: niveauIndex(bat(), o.niveau) })));
  sc.observations.forEach((o, i) => S.updateHotspot(o.id, { actif: true, decouvert: true, toujours: true, num: i + 1, analyse: !!(o.lecture || o.analyse?.options?.length), photo: sc.photos.some(p => p.constat === o.id) }));
  S.setPhotos(sc.photos.map(p => ({ id: p.id, pos: p.pos, yaw: p.yaw, alt: altitudeDe(bat(), p.niveau), niv: niveauIndex(bat(), p.niveau), couleur: ED.sel?.t === 'photo' && ED.sel.id === p.id ? '#ff8a00' : undefined })));
  S.setNiveauVisible(bat().niveaux.length > 1 ? ED.niv : null);
  S.planY = alt();
  helpers.grid.position.set(0, alt() + 0.012, 0);
  helpers.grid.visible = ['construire', 'effets', 'indices'].includes(ED.mode) && $('#grille').checked;
  S.setModeMurs($('#murs').value);
  S.setPieceCoupe(ED.mode === 'effets' && ED.sel?.t === 'piece' ? ED.sel.id : null);
  if (sc.fouille) S.setFouille(+$('#fouilleV').value || 0);
  S.montrerRubanFouille?.(true);
  majSelection();
}

function majSelection() {
  helpers.sel.visible = false;
  const s = ED.sel; if (!s) return;
  const A = alt();
  if (s.t === 'piece') { const p = toutesPieces().find(x => x.id === s.id); if (p) boite(helpers.sel, p.x, p.x + p.w, A, A + 0.05, p.z, p.z + p.d); }
  if (s.t === 'objet') { const o = nivCur().objets.find(x => x.id === s.id); if (o) boite(helpers.sel, o.x - 0.4, o.x + 0.4, A + (o.y || 0), A + (o.y || 0) + 0.9, o.z - 0.4, o.z + 0.4); }
  if (s.t === 'ouverture') { const o = nivCur().ouvertures[s.idx]; if (o) { const hw = o.w / 2; if (o.axe === 'h') boite(helpers.sel, o.x - hw, o.x + hw, A + (o.allege || 0), A + (o.allege || 0) + o.h, o.z - 0.12, o.z + 0.12); else boite(helpers.sel, o.x - 0.12, o.x + 0.12, A + (o.allege || 0), A + (o.allege || 0) + o.h, o.z - hw, o.z + hw); } }
  if (s.t === 'obs' || s.t === 'photo') { const o = (s.t === 'obs' ? ED.scn.observations : ED.scn.photos).find(x => x.id === s.id); if (o) { const a = altitudeDe(bat(), o.niveau); boite(helpers.sel, o.pos[0] - 0.25, o.pos[0] + 0.25, a + o.pos[1] - 0.25, a + o.pos[1] + 0.25, o.pos[2] - 0.25, o.pos[2] + 0.25); } }
  if (s.t === 'tremie') { const t = nivCur().tremies[s.idx]; if (t) boite(helpers.sel, t.x, t.x + t.w, A, A + 0.05, t.z, t.z + t.d); }
}

// ------------------------------------------------------------------ outils par mode
function outilsDuMode() {
  if (ED.mode === 'construire') return [['select', '🖱️', 'Sélection / déplacer'], ['piece', '⬛', 'Dessiner une pièce'], ['porte', '🚪', 'Porte'], ['fenetre', '🪟', 'Fenêtre'], ['baie', '🖼️', 'Baie vitrée'], ['garage', '🏠', 'Porte de garage'], ['tremie', '⬜', 'Trémie (trou de plancher)'], ['gomme', '🧽', 'Supprimer']];
  if (ED.mode === 'effets') return [['piecefx', '🏠', 'Pièce : suie & couche chaude'], ...PINCEAUX_MUR.map(([k, l]) => [`mur:${k}`, '🖌️', l]), ...PINCEAUX_SOL.map(([k, l]) => [`sol:${k}`, '🟫', l]), ['bruler', '🔥', 'Brûler un objet']];
  if (ED.mode === 'indices') return [['select', '🖱️', 'Sélection / déplacer'], ['constat', '🟨', 'Poser un constat'], ['photo', '📷', 'Épingler une photo'], ['fouille', '⛏️', 'Zone de fouille'], ['gomme', '🧽', 'Supprimer']];
  return [];
}

function rendrePalette() {
  const el = $('.pal');
  if (ED.mode === 'enquete' || ED.mode === 'retex') { rendreFormulaires(el); return; }
  const outils = outilsDuMode();
  el.innerHTML = `<div class="sec-t">Outils</div><div class="tools">${outils.map(([id, ic, l]) => `<button class="tool-b ${ED.outil === id ? 'on' : ''}" data-o="${id}" title="${esc(l)}"><span>${ic}</span>${esc(l)}</button>`).join('')}</div>
    ${ED.mode === 'construire' ? `<div class="sec-t" style="margin-top:12px">Mobilier & objets</div>${CATALOGUE.map(([cat, l]) => `<details ${cat === 'Séjour' ? 'open' : ''}><summary>${esc(cat)}</summary><div class="cat">${l.map(([t, ic, nom]) => `<button class="cat-b ${ED.outil === 'objet:' + t ? 'on' : ''}" data-o="objet:${t}" title="${esc(nom)}"><span>${ic}</span><small>${esc(nom)}</small></button>`).join('')}</div></details>`).join('')}` : ''}
    ${ED.mode === 'effets' ? `<div class="sec-t" style="margin-top:12px">Tracés du niveau (${nivCur().traces.length})</div><div class="liste">${nivCur().traces.map((t, i) => `<button class="li-b ${ED.sel?.t === 'trace' && ED.sel.idx === i ? 'on' : ''}" data-tr="${i}">${esc(t.type)} · ${esc(t.piece)} · ${esc(t.cote)}</button>`).join('') || '<p class="small muted">Aucun. Choisissez un pinceau puis cliquez sur un mur ou un sol.</p>'}</div>` : ''}
    ${ED.mode === 'indices' ? `<div class="sec-t" style="margin-top:12px">Constats (${ED.scn.observations.length})</div><div class="liste">${ED.scn.observations.map((o, i) => `<button class="li-b ${ED.sel?.t === 'obs' && ED.sel.id === o.id ? 'on' : ''}" data-ob="${esc(o.id)}"><b>${i + 1}</b> ${esc(o.titre)}</button>`).join('')}</div>
      <div class="sec-t" style="margin-top:12px">Photos (${ED.scn.photos.length})</div><div class="liste">${ED.scn.photos.map(p => `<button class="li-b ${ED.sel?.t === 'photo' && ED.sel.id === p.id ? 'on' : ''}" data-ph="${esc(p.id)}">${ED.scn.medias[p.media] ? `<img src="${ED.scn.medias[p.media]}" alt="">` : '📷'} ${esc(p.titre || p.id)}</button>`).join('')}</div>` : ''}
    <p class="small muted" style="margin-top:12px">${aide()}</p>`;
  $$('[data-o]', el).forEach(b => b.onclick = () => { ED.outil = b.dataset.o; ED.drag = null; helpers.prev.visible = false; rendrePalette(); });
  $$('[data-tr]', el).forEach(b => b.onclick = () => selectionner({ t: 'trace', idx: +b.dataset.tr }));
  $$('[data-ob]', el).forEach(b => b.onclick = () => { selectionner({ t: 'obs', id: b.dataset.ob }); cadrerSur(ED.scn.observations.find(o => o.id === b.dataset.ob)); });
  $$('[data-ph]', el).forEach(b => b.onclick = () => { selectionner({ t: 'photo', id: b.dataset.ph }); cadrerSur(ED.scn.photos.find(o => o.id === b.dataset.ph)); });
}
function aide() {
  const o = ED.outil;
  if (o === 'piece' || o === 'tremie' || o === 'fouille') return 'Cliquez-glissez sur la grille pour dessiner le rectangle (pas de 25 cm).';
  if (['porte', 'fenetre', 'baie', 'garage'].includes(o)) return 'Survolez un mur puis cliquez pour poser l\'ouverture.';
  if (o.startsWith('objet:')) return 'Cliquez au sol pour poser l\'objet. Touche R : pivoter de 90° (Maj+R : 15°).';
  if (o === 'select') return 'Cliquez un élément pour le sélectionner, glissez pour le déplacer. Bord d\'une pièce : redimensionner. Suppr : supprimer.';
  if (o.startsWith('mur:')) return 'Cliquez sur la face d\'un mur, à l\'endroit voulu (le bas du clic = sommet bas du V).';
  if (o.startsWith('sol:')) return 'Cliquez sur le sol d\'une pièce.';
  if (o === 'constat') return 'Cliquez sur l\'élément constaté (mur, sol, objet).';
  if (o === 'photo') return 'Cliquez à l\'endroit de la prise de vue : la direction suit la caméra. Choisissez ensuite l\'image.';
  return 'Molette : zoom · clic droit glissé : déplacer · clic molette glissé ou Q/E : pivoter.';
}

function cadrerSur(o) {
  if (!o) return;
  const i = niveauIndex(bat(), o.niveau);
  if (i !== ED.niv) { ED.niv = i; rendreNiveaux(); reconstruire(); }
  S.setFocus({ cible: [o.pos[0], altitudeDe(bat(), o.niveau), o.pos[2]], zoom: Math.max(1.6, S.camera.zoom) }, ED.mode === 'effets' ? S.focus?.piece : null);
}

function selectionner(sel) {
  ED.sel = sel;
  if (ED.mode === 'effets') S.setPieceCoupe(sel?.t === 'piece' ? sel.id : null);
  majSelection(); rendreInspecteur(); rendrePalette();
  if (sel?.t === 'photo') reconstruire();
}

// ------------------------------------------------------------------ niveaux
function rendreNiveaux() {
  const el = $('#niveaux');
  el.innerHTML = bat().niveaux.map((n, i) => `<button class="btn btn-sm ${i === ED.niv ? 'btn-primary' : ''}" data-n="${i}">${esc(n.nom)}</button>`).join('') +
    `<button class="btn btn-sm" data-n="+" title="Ajouter un niveau au-dessus">＋ Niveau</button><button class="btn btn-sm" data-n="cfg" title="Propriétés du niveau">⚙</button>`;
  $$('[data-n]', el).forEach(b => b.onclick = () => {
    const v = b.dataset.n;
    if (v === '+') return ajouterNiveau();
    if (v === 'cfg') return selectionner({ t: 'niveau' });
    ED.niv = +v; ED.sel = null; rendreNiveaux(); reconstruire(); rendreInspecteur(); rendrePalette();
  });
}
function ajouterNiveau() {
  const ns = bat().niveaux, top = ns[ns.length - 1];
  const k = ns.length;
  const ids = toutesPieces().map(p => p.id);
  const pieces = top.pieces.map(p => { const id = uid('p', ids); ids.push(id); return { ...structuredClone(p), id, nom: `${p.nom} (R+${k})`, couche: top.hauteur || 2.5, suie: 0 }; });
  ns.push({ id: uid('r', ns.map(n => n.id)).replace(/^r/, 'r+'), nom: `R+${k}`, altitude: r2((top.altitude || 0) + (top.hauteur || 2.5) + 0.2), hauteur: 2.5, pieces, ouvertures: [], objets: [], traces: [], tremies: [] });
  ED.niv = ns.length - 1; ED.sel = { t: 'niveau' };
  toast(`Niveau R+${k} créé en reprenant l'emprise du niveau inférieur. Dessinez une trémie pour l'escalier.`, 'ok', 5000);
  rendreNiveaux(); changed(); rendreInspecteur();
}

// ------------------------------------------------------------------ pointeur
function murProche(p) {
  let best = null;
  for (const r of nivCur().pieces) {
    for (const [axe, ligne, a, b] of [['h', r.z, r.x, r.x + r.w], ['h', r.z + r.d, r.x, r.x + r.w], ['v', r.x, r.z, r.z + r.d], ['v', r.x + r.w, r.z, r.z + r.d]]) {
      const u = axe === 'h' ? p.x : p.z, n = axe === 'h' ? p.z : p.x;
      const uu = Math.max(a, Math.min(b, u)); const dist = Math.hypot(uu - u, n - ligne);
      if (!best || dist < best.dist) best = { axe, ligne, a, b, u: uu, dist };
    }
  }
  return best && best.dist < 0.6 ? best : null;
}
function premierHit(info, filtre) {
  S.raycaster.setFromCamera(S._ndc(info.e), S.camera);
  const hits = S.raycaster.intersectObjects(S.root.children, true).filter(i => S._visibleDeep(i.object) && i.object.type === 'Mesh' && !i.object.userData.hotspot && S._visibleClip(i.point, i.object));
  return filtre ? hits.find(filtre) : hits[0];
}

function onPointer(type, info) {
  if (ctxF._attente && type === 'down') {
    const hit = premierHit(info); const p = hit?.point || info.plan; if (!p) return;
    ctxF._attente({ x: p.x, y: p.y - alt(), z: p.z }); ctxF._attente = null; $('#pickHint').hidden = true; return;
  }
  const o = ED.outil, P = info.plan;
  // -- rectangles (pièce, trémie, fouille)
  if (['piece', 'tremie', 'fouille'].includes(o)) {
    if (!P) return;
    const sp = { x: snap(P.x), z: snap(P.z) };
    if (type === 'down') ED.drag = { kind: 'rect', a: sp };
    if (ED.drag?.kind === 'rect') {
      const a = ED.drag.a, b = sp;
      boite(helpers.prev, a.x, b.x, alt(), alt() + (o === 'piece' ? 0.15 : 0.05), a.z, b.z);
      etiquette(`${Math.abs(b.x - a.x).toFixed(2)} × ${Math.abs(b.z - a.z).toFixed(2)} m`, [(a.x + b.x) / 2, alt() + 0.3, (a.z + b.z) / 2]);
      if (type === 'up') {
        helpers.prev.visible = false; etiquette(null); ED.drag = null;
        const x = Math.min(a.x, b.x), z = Math.min(a.z, b.z), w = Math.abs(b.x - a.x), d = Math.abs(b.z - a.z);
        if (w < 0.5 || d < 0.5) { toast('Rectangle trop petit (minimum 0,5 m).', 'warn'); return; }
        if (o === 'piece') {
          const id = uid('p', toutesPieces().map(p => p.id));
          nivCur().pieces.push({ id, nom: `Pièce ${nivCur().pieces.length + 1}`, x, z, w, d, sol: 'parquet', peinture: '#ddd6c6', couche: nivCur().hauteur || 2.5, suie: 0 });
          ED.sel = { t: 'piece', id };
        } else if (o === 'tremie') {
          nivCur().tremies.push({ x, z, w, d }); ED.sel = { t: 'tremie', idx: nivCur().tremies.length - 1 };
        } else {
          ED.scn.fouille = { ...(ED.scn.fouille || {}), niveau: nivCur().id, zone: zonePour(x + w / 2, z + d / 2), aire: { x, z, w, d }, ref: '17.3.2', couches: ED.scn.fouille?.couches?.length ? ED.scn.fouille.couches : [{ n: 1, nom: 'Débris de toiture / plafond', description: '', h: 0.12, couleur: '#8d8a84' }, { n: 2, nom: 'Débris de mobilier', description: '', h: 0.13, couleur: '#2a2522' }, { n: 3, nom: 'Niveau du sol', description: '', h: 0.04, couleur: '#3b3632' }] };
          ED.sel = { t: 'fouille' };
        }
        changed(); rendreInspecteur(); rendrePalette();
      }
    }
    return;
  }
  // -- ouvertures
  if (OUVERTURES[o]) {
    if (!P) return;
    const m = murProche(P);
    const def = OUVERTURES[o];
    if (!m) { helpers.prev.visible = false; return; }
    const hw = def.w / 2;
    const u = Math.max(m.a + hw, Math.min(m.b - hw, snap(m.u, 0.05)));
    const y0 = alt() + (def.allege || 0), y1 = y0 + def.h;
    if (m.axe === 'h') boite(helpers.prev, u - hw, u + hw, y0, y1, m.ligne - 0.12, m.ligne + 0.12); else boite(helpers.prev, m.ligne - 0.12, m.ligne + 0.12, y0, y1, u - hw, u + hw);
    if (type === 'down') {
      nivCur().ouvertures.push({ ...structuredClone(def), x: r2(m.axe === 'h' ? u : m.ligne), z: r2(m.axe === 'h' ? m.ligne : u), axe: m.axe });
      ED.sel = { t: 'ouverture', idx: nivCur().ouvertures.length - 1 };
      helpers.prev.visible = false; changed(); rendreInspecteur();
    }
    return;
  }
  // -- pose d'objets
  if (o.startsWith('objet:')) {
    if (!P) return;
    const t = o.slice(6);
    const sp = { x: snap(P.x, 0.05), z: snap(P.z, 0.05) };
    boite(helpers.prev, sp.x - 0.3, sp.x + 0.3, alt(), alt() + 0.6, sp.z - 0.3, sp.z + 0.3);
    if (type === 'down') {
      const def = CATALOGUE.flatMap(c => c[1]).find(x => x[0] === t);
      const id = uid(t, bat().niveaux.flatMap(n => n.objets.map(x => x.id)));
      nivCur().objets.push({ id, type: t, x: sp.x, z: sp.z, rot: 0, brule: 0, ...(def?.[3] || {}) });
      ED.sel = { t: 'objet', id }; helpers.prev.visible = false; changed(); rendreInspecteur();
    }
    return;
  }
  // -- sélection / déplacement
  if (o === 'select') return pointeurSelection(type, info);
  if (o === 'gomme' && type === 'down') return gommer(info);
  // -- effets du feu
  if (ED.mode === 'effets' && type === 'down') return pointeurEffets(info);
  // -- indices
  if ((o === 'constat' || o === 'photo') && type === 'down') return poserIndice(o, info);
}

function cibleSous(info) {
  const ob = info.objet?.userData || {};
  if (ob.hotspot) return { t: 'obs', id: ob.hotspot };
  if (ob.photo) return { t: 'photo', id: ob.photo };
  if (ob.objet && ED.mode === 'construire') return { t: 'objet', id: ob.objet };
  if (ob.ouverture && ED.mode === 'construire') {
    const d = ob.ouverture;
    const idx = nivCur().ouvertures.findIndex(x => x.type === d.type && Math.abs(x.x - d.x) < 1e-6 && Math.abs(x.z - d.z) < 1e-6 && x.axe === d.axe);
    if (idx >= 0) return { t: 'ouverture', idx };
  }
  if (info.plan && ED.mode === 'construire') {
    const tr = nivCur().tremies.findIndex(t => info.plan.x >= t.x && info.plan.x <= t.x + t.w && info.plan.z >= t.z && info.plan.z <= t.z + t.d);
    if (tr >= 0) return { t: 'tremie', idx: tr };
    const p = pieceA(info.plan.x, info.plan.z);
    if (p) return { t: 'piece', id: p.id };
  }
  return null;
}

function pointeurSelection(type, info) {
  const P = info.plan;
  if (type === 'down') {
    const c = cibleSous(info);
    selectionner(c);
    if (!c || !P) return;
    if (c.t === 'piece') {
      const p = nivCur().pieces.find(x => x.id === c.id);
      const tol = 0.22;
      let bord = null;
      if (Math.abs(P.x - p.x) < tol) bord = 'x0'; else if (Math.abs(P.x - (p.x + p.w)) < tol) bord = 'x1'; else if (Math.abs(P.z - p.z) < tol) bord = 'z0'; else if (Math.abs(P.z - (p.z + p.d)) < tol) bord = 'z1';
      ED.drag = { kind: bord ? 'resize' : 'move', bord, p, start: { x: P.x, z: P.z }, orig: { ...p }, contenus: nivCur().objets.filter(o => o.x >= p.x && o.x <= p.x + p.w && o.z >= p.z && o.z <= p.z + p.d).map(o => ({ o, x: o.x, z: o.z })), moved: false };
    } else if (c.t === 'objet') {
      const o = nivCur().objets.find(x => x.id === c.id);
      ED.drag = { kind: 'objet', o, dx: o.x - P.x, dz: o.z - P.z, moved: false };
    } else if (c.t === 'ouverture') {
      ED.drag = { kind: 'ouverture', o: nivCur().ouvertures[c.idx], moved: false };
    } else if (c.t === 'obs' || c.t === 'photo') {
      ED.drag = { kind: 'indice', o: (c.t === 'obs' ? ED.scn.observations : ED.scn.photos).find(x => x.id === c.id), moved: false };
    }
    return;
  }
  const D = ED.drag; if (!D) return;
  if (type === 'move' && P) {
    D.moved = true;
    if (D.kind === 'move') {
      const dx = snap(P.x - D.start.x), dz = snap(P.z - D.start.z);
      D.p.x = D.orig.x + dx; D.p.z = D.orig.z + dz;
      for (const c of D.contenus) { c.o.x = r2(c.x + dx); c.o.z = r2(c.z + dz); }
      boite(helpers.sel, D.p.x, D.p.x + D.p.w, alt(), alt() + 0.05, D.p.z, D.p.z + D.p.d);
      etiquette(`x ${D.p.x} · z ${D.p.z}`, [D.p.x + D.p.w / 2, alt() + 0.3, D.p.z + D.p.d / 2]);
    } else if (D.kind === 'resize') {
      const o = D.orig, p = D.p, sx = snap(P.x), sz = snap(P.z);
      if (D.bord === 'x0') { p.x = Math.min(sx, o.x + o.w - 0.5); p.w = o.x + o.w - p.x; }
      if (D.bord === 'x1') p.w = Math.max(0.5, sx - o.x);
      if (D.bord === 'z0') { p.z = Math.min(sz, o.z + o.d - 0.5); p.d = o.z + o.d - p.z; }
      if (D.bord === 'z1') p.d = Math.max(0.5, sz - o.z);
      boite(helpers.sel, p.x, p.x + p.w, alt(), alt() + 0.05, p.z, p.z + p.d);
      etiquette(`${p.w.toFixed(2)} × ${p.d.toFixed(2)} m`, [p.x + p.w / 2, alt() + 0.3, p.z + p.d / 2]);
    } else if (D.kind === 'objet') {
      D.o.x = snap(P.x + D.dx, 0.05); D.o.z = snap(P.z + D.dz, 0.05);
      S.root.traverse(n => { if (n.userData.objet === D.o.id && n.userData.def) n.position.set(D.o.x, n.position.y, D.o.z); });
      majSelection();
    } else if (D.kind === 'ouverture') {
      const o = D.o, hw = o.w / 2;
      const seg = nivCur().pieces.flatMap(r => o.axe === 'h' ? [[r.z, r.x, r.x + r.w], [r.z + r.d, r.x, r.x + r.w]] : [[r.x, r.z, r.z + r.d], [r.x + r.w, r.z, r.z + r.d]]).filter(([l]) => Math.abs(l - (o.axe === 'h' ? o.z : o.x)) < 0.02);
      const a = Math.min(...seg.map(s => s[1])), b = Math.max(...seg.map(s => s[2]));
      const u = Math.max(a + hw, Math.min(b - hw, snap(o.axe === 'h' ? P.x : P.z, 0.05)));
      if (o.axe === 'h') o.x = r2(u); else o.z = r2(u);
      majSelection();
    } else if (D.kind === 'indice') {
      const hit = premierHit(info);
      if (hit) { const a = altitudeDe(bat(), D.o.niveau); D.o.pos = [r2(hit.point.x), r2(hit.point.y - a), r2(hit.point.z)]; majSelection(); }
    }
  }
  if (type === 'up') {
    etiquette(null);
    if (D.moved) { if (D.kind === 'indice' && D.o.zone !== undefined) D.o.zone = zonePour(D.o.pos[0], D.o.pos[2]); changed(); rendreInspecteur(); }
    ED.drag = null;
  }
}

function supprimer(sel) {
  if (!sel) return;
  const n = nivCur();
  if (sel.t === 'piece') { n.pieces = n.pieces.filter(p => p.id !== sel.id); ED.scn.zones = ED.scn.zones.filter(z => z.piece !== sel.id); }
  if (sel.t === 'objet') n.objets = n.objets.filter(o => o.id !== sel.id);
  if (sel.t === 'ouverture') n.ouvertures.splice(sel.idx, 1);
  if (sel.t === 'tremie') n.tremies.splice(sel.idx, 1);
  if (sel.t === 'trace') n.traces.splice(sel.idx, 1);
  if (sel.t === 'obs') ED.scn.observations = ED.scn.observations.filter(o => o.id !== sel.id);
  if (sel.t === 'photo') { const p = ED.scn.photos.find(x => x.id === sel.id); ED.scn.photos = ED.scn.photos.filter(x => x.id !== sel.id); if (p && !ED.scn.photos.some(x => x.media === p.media)) delete ED.scn.medias[p.media]; }
  if (sel.t === 'fouille') ED.scn.fouille = null;
  ED.sel = null; changed(); rendreInspecteur(); rendrePalette();
}
function gommer(info) { const c = cibleSous(info) || (ED.mode !== 'construire' ? null : null); if (c) supprimer(c); }

// effets du feu
function pointeurEffets(info) {
  const o = ED.outil;
  if (o === 'piecefx') { const p = info.plan && pieceA(info.plan.x, info.plan.z); selectionner(p ? { t: 'piece', id: p.id } : null); return; }
  if (o === 'bruler') { const id = info.objet?.userData?.objet; selectionner(id ? { t: 'objet', id } : null); if (!id) toast('Cliquez sur un objet.', 'info'); return; }
  const n = nivCur();
  if (o.startsWith('mur:')) {
    const hit = premierHit(info, i => i.object.userData.mur);
    if (!hit) { toast('Cliquez sur la face d\'un mur.', 'warn'); return; }
    const w = hit.object.userData;
    const nrm = hit.face.normal.clone().transformDirection(hit.object.matrixWorld);
    let room, cote;
    if (w.axe === 'h') { if (nrm.z > 0) { room = w.pos; cote = room ? 'N' : 'S'; } else { room = w.neg; cote = room ? 'S' : 'N'; } }
    else { if (nrm.x > 0) { room = w.pos; cote = room ? 'W' : 'E'; } else { room = w.neg; cote = room ? 'E' : 'W'; } }
    if (Math.abs(w.axe === 'h' ? nrm.z : nrm.x) < 0.5) { toast('Visez la face du mur, pas sa tranche.', 'warn'); return; }
    const u = r2(w.axe === 'h' ? hit.point.x : hit.point.z), y = r2(Math.max(0, hit.point.y - alt()));
    const base = { piece: room || 'exterieur', cote, ...(room ? {} : { ligne: w.ligne }) };
    const t = o.slice(4);
    const tr = t === 'V' ? { ...base, type: 'V', u, y0: y, angle: 30, force: 1 }
      : t === 'protegee' ? { ...base, type: 'protegee', u0: r2(u - 0.4), u1: r2(u + 0.4), y0: r2(Math.max(0, y - 0.3)), y1: r2(y + 0.3) }
      : t === 'demarcation' ? { ...base, type: 'demarcation', y, u0: w.u0, u1: w.u1 }
      : { ...base, type: t, u, y, rx: 0.5, ry: 0.6 };
    n.traces.push(tr);
  } else if (o.startsWith('sol:')) {
    const P = info.plan; const p = P && pieceA(P.x, P.z);
    if (!p) { toast('Cliquez sur le sol d\'une pièce.', 'warn'); return; }
    const t = o.slice(4);
    n.traces.push(t === 'debris' ? { piece: p.id, cote: 'sol', type: 'debris', densite: 0.5 } : { piece: p.id, cote: 'sol', type: t === 'protegeeSol' ? 'protegee' : t, x: r2(P.x), z: r2(P.z), rx: t === 'irregulier' ? 1 : 0.45, rz: t === 'irregulier' ? 0.6 : 0.45, ...(t === 'irregulier' ? { seed: Math.floor(Math.random() * 99) } : {}) });
  } else return;
  ED.sel = { t: 'trace', idx: n.traces.length - 1 };
  changed(); rendreInspecteur(); rendrePalette();
}

// indices & photos
function poserIndice(o, info) {
  const hit = premierHit(info, i => !i.object.userData.photo);
  const p = hit?.point || info.plan; if (!p) return;
  const A = alt();
  if (o === 'constat') {
    const id = uid('F', ED.scn.observations.map(x => x.id).map(x => x.replace(/^F0+/, 'F')));
    ED.scn.observations.push({ id, niveau: nivCur().id, zone: zonePour(p.x, p.z), pos: [r2(p.x), r2(p.y - A), r2(p.z)], titre: 'Nouveau constat', description: '', lecture: '', ref: '' });
    ED.sel = { t: 'obs', id };
    changed(); rendreInspecteur(); rendrePalette();
    setTimeout(() => $('.insp input, .insp textarea')?.focus(), 50);
  } else {
    const d = S.controls.target.clone().sub(S.camera.position);
    const yaw = Math.round(Math.atan2(d.x, d.z) * 180 / Math.PI);
    const sol = hit?.face ? hit.face.normal.clone().transformDirection(hit.object.matrixWorld).y > 0.5 : true;
    const id = uid('ph', ED.scn.photos.map(x => x.id));
    ED.scn.photos.push({ id, niveau: nivCur().id, pos: [r2(p.x), r2(sol ? 1.5 : p.y - A), r2(p.z)], yaw, titre: `Photo ${ED.scn.photos.length + 1}`, legende: '', date: '', auteur: ED.scn.retex?.auteur || '', constat: '' });
    ED.sel = { t: 'photo', id };
    changed(); rendreInspecteur(); rendrePalette();
    choisirImage(id);
  }
}
function choisirImage(id) {
  const inp = document.createElement('input'); inp.type = 'file'; inp.accept = 'image/*';
  inp.onchange = async () => {
    const f = inp.files[0]; if (!f) return;
    try {
      const data = await compresserImage(f);
      const ph = ED.scn.photos.find(x => x.id === id);
      const mid = 'm_' + Math.random().toString(36).slice(2, 9);
      if (ph.media && !ED.scn.photos.some(x => x !== ph && x.media === ph.media)) delete ED.scn.medias[ph.media];
      ED.scn.medias[mid] = data; ph.media = mid;
      if (!ph.titre || /^Photo \d+$/.test(ph.titre)) ph.titre = f.name.replace(/\.[^.]+$/, '');
      if (f.lastModified && !ph.date) ph.date = new Date(f.lastModified).toLocaleDateString('fr-FR');
      changed(false); rendreInspecteur(); rendrePalette();
      toast(`Image ajoutée (${Math.round(data.length * 0.75 / 1024)} Ko).`, 'ok');
    } catch (e) { toast(esc(e.message), 'ko'); }
  };
  inp.click();
}

// ------------------------------------------------------------------ inspecteur
function thermoEd(o) {
  const items = o.thermo?.items || [];
  const opt = (v, sel) => FUSIONS.map(f => `<option value="${f.id}" ${f.id === sel ? 'selected' : ''}>${esc(f.nom)} (${esc(f.plage)} °C)</option>`).join('');
  return `<div class="sec-t" style="margin-top:10px">🌡️ Témoins de température</div>
    <p class="small muted">Objets fondus ou intacts à cet endroit. Le jeu en déduit la fourchette de température et propose l'exercice au joueur.</p>
    ${items.map((it, i) => `<div class="thermo-ed" data-ti="${i}" style="display:grid;grid-template-columns:1fr auto;gap:4px;margin-bottom:6px;padding:6px;border:1px solid var(--line);border-radius:8px">
      <select class="inp" data-k="mat">${opt(0, it.mat)}</select><button class="btn btn-sm" data-tdel title="Retirer">✕</button>
      <select class="inp" data-k="etat"><option value="fondu" ${it.etat === 'fondu' ? 'selected' : ''}>fondu / seuil atteint</option><option value="intact" ${it.etat !== 'fondu' ? 'selected' : ''}>intact / non atteint</option></select>
      <label class="small" title="Fusion apparente due à un alliage avec un métal à bas point de fusion"><input type="checkbox" data-k="alliage" ${it.alliage ? 'checked' : ''}> alliage</label>
      <input class="inp" data-k="objet" placeholder="Objet (ex. poignée de porte)" value="${esc(it.objet || '')}" style="grid-column:1/3"></div>`).join('')}
    <button class="btn btn-sm" data-tadd>＋ Ajouter un témoin</button>
    ${items.length ? `<p class="small" style="margin-top:6px">Estimation attendue : <b>${esc(libelle(fourchette(items)))}</b></p>` : ''}`;
}
function lierThermo(el, o) {
  const maj = () => { if (o.thermo) { delete o.thermo.options; if (!o.thermo.items.length) delete o.thermo; } changed(); rendreInspecteur(); };
  $('[data-tadd]', el)?.addEventListener('click', () => { o.thermo ||= { items: [] }; o.thermo.items.push({ mat: 'alu', etat: 'fondu', objet: '' }); maj(); });
  $$('.thermo-ed', el).forEach(row => {
    const it = o.thermo.items[+row.dataset.ti];
    $('[data-tdel]', row).onclick = () => { o.thermo.items.splice(+row.dataset.ti, 1); maj(); };
    $$('[data-k]', row).forEach(inp => inp.onchange = () => { const k = inp.dataset.k; it[k] = inp.type === 'checkbox' ? inp.checked : inp.value; if (!it.alliage) delete it.alliage; maj(); });
  });
}

function rendreInspecteur() {
  const el = $('.insp');
  if (ED.mode === 'enquete' || ED.mode === 'retex') { el.innerHTML = ''; return; }
  const s = ED.sel;
  const form = (titre, obj, champs, extra = '', apres) => {
    el.innerHTML = `<h3>${titre}</h3><div class="f">${champs.map((c, i) => champHtml(obj, c, 'i' + i)).join('')}</div>${extra}
      <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">${s && s.t !== 'niveau' ? '<button class="btn btn-sm" data-del style="color:var(--ko)">🗑 Supprimer</button>' : ''}</div>`;
    lier($('.f', el), obj, () => { changed(); majSelection(); rendrePalette(); });
    $('[data-del]', el)?.addEventListener('click', () => supprimer(s));
    apres && apres(el);
  };
  if (!s) {
    el.innerHTML = `<h3>${ED.mode === 'construire' ? 'Construction' : ED.mode === 'effets' ? 'Effets du feu' : 'Indices & photos'}</h3><p class="small muted">${aide()}</p>
      <div class="panel small"><b>${esc(nivCur().nom)}</b> · ${nivCur().pieces.length} pièce(s) · ${nivCur().objets.length} objet(s) · ${nivCur().ouvertures.length} ouverture(s)</div>
      ${ED.mode === 'indices' ? `<p class="small muted">Les constats sont les indices que le joueur devra trouver ; la <b>lecture</b> est votre interprétation réelle (vue Analyse) et la bonne réponse en jeu.</p>` : ''}`;
    return;
  }
  const n = nivCur();
  if (s.t === 'niveau') return form(`Niveau : ${esc(n.nom)}`, n, [['nom', 'text', '', null, 'Nom'], ['id', 'text', 'Identifiant (utilisé par les constats)', null, 'Id'], ['altitude', 'number', 'Altitude du plancher (m)', null, 'Altitude'], ['hauteur', 'number', 'Hauteur sous plafond (m)', null, 'Hauteur']],
    bat().niveaux.length > 1 ? '<button class="btn btn-sm" data-delniv style="margin-top:8px;color:var(--ko)">Supprimer ce niveau</button>' : '', e => $('[data-delniv]', e)?.addEventListener('click', async () => { if (await confirmer('Supprimer ce niveau ?', 'Pièces, objets et tracés de ce niveau seront supprimés.', 'Supprimer')) { bat().niveaux.splice(ED.niv, 1); ED.niv = 0; ED.sel = null; rendreNiveaux(); changed(); rendreInspecteur(); } }));
  if (s.t === 'piece') {
    const p = toutesPieces().find(x => x.id === s.id); if (!p) return;
    const H = n.hauteur || 2.5;
    return form(`Pièce : ${esc(p.nom)}`, p, ED.mode === 'effets'
      ? [['nom', 'text', '', null, 'Nom'], ['couche', 'range', 'Hauteur de la ligne de démarcation de la couche chaude (m). En haut = pas de fumée.', [0, H, 0.05], 'Couche chaude'], ['suie', 'range', 'Densité des dépôts de suie / dégâts', [0, 1, 0.05], 'Suie'], ['peinture', 'color', '', null, 'Peinture']]
      : [['nom', 'text', '', null, 'Nom'], ['sol', 'select', '', SOLS, 'Sol'], ['peinture', 'color', '', null, 'Peinture'], ['x', 'number', '', null, 'x'], ['z', 'number', '', null, 'z'], ['w', 'number', 'Largeur (m)', null, 'Largeur'], ['d', 'number', 'Profondeur (m)', null, 'Profondeur']]);
  }
  if (s.t === 'objet') {
    const o = n.objets.find(x => x.id === s.id); if (!o) return;
    return form(`Objet : ${esc(o.type)}`, o, [['brule', 'range', 'Combustion (0 = intact, 1 = consumé)', [0, 1, 0.05], 'Brûlé'], ['rot', 'number', 'Rotation (°) — touche R', null, 'Rotation'], ['x', 'number', '', null, 'x'], ['z', 'number', '', null, 'z'], ['y', 'number', 'Hauteur de pose', null, 'y'], ['L', 'number', 'Longueur', null, 'Longueur'], ['l', 'number', 'Largeur', null, 'Largeur'], ['id', 'text', '', null, 'Id']]);
  }
  if (s.t === 'ouverture') {
    const o = n.ouvertures[s.idx]; if (!o) return;
    return form('Ouverture', o, [['type', 'select', '', ['porte', 'fenetre', 'baie'], 'Type'], ['w', 'number', '', null, 'Largeur'], ['h', 'number', '', null, 'Hauteur'], ['allege', 'number', '', null, 'Allège'], ['fermee', 'bool', 'Porte fermée lors du feu', null, 'Fermée'], ['brise', 'bool', 'Vitrage rompu', null, 'Brisé'], ['garage', 'bool', '', null, 'Porte de garage']]);
  }
  if (s.t === 'tremie') { const t = n.tremies[s.idx]; return form('Trémie (escalier)', t, [['x', 'number'], ['z', 'number'], ['w', 'number'], ['d', 'number']], '<p class="small muted">Trou dans le plancher de ce niveau. Posez un escalier au niveau inférieur.</p>'); }
  if (s.t === 'trace') {
    const t = n.traces[s.idx]; if (!t) return;
    const ch = { V: [['u', 'number', 'Position le long du mur'], ['y0', 'number', 'Hauteur du sommet bas'], ['angle', 'range', 'Demi-angle (°)', [8, 60, 1]], ['force', 'range', '', [0.2, 1, 0.05]], ['remplissage', 'select', 'Intérieur du V', ['', 'clean', 'suie']]],
      cleanburn: [['u', 'number'], ['y', 'number'], ['rx', 'number'], ['ry', 'number']], calcination: [['u', 'number'], ['y', 'number'], ['rx', 'number'], ['ry', 'number']],
      demarcation: [['y', 'number'], ['u0', 'number'], ['u1', 'number']], irregulier: [['x', 'number'], ['z', 'number'], ['rx', 'number'], ['rz', 'number'], ['seed', 'number', 'Forme aléatoire']],
      consomme: [['x', 'number'], ['z', 'number'], ['rx', 'number'], ['rz', 'number']], debris: [['densite', 'range', '', [0.05, 1, 0.05]]] };
    const champs = t.type === 'protegee' ? (t.cote === 'sol' ? [['x', 'number'], ['z', 'number'], ['rx', 'number'], ['rz', 'number']] : [['u0', 'number'], ['u1', 'number'], ['y0', 'number'], ['y1', 'number']]) : ch[t.type] || [];
    return form(`Tracé : ${esc(t.type)} (${esc(t.piece)} · ${esc(t.cote)})`, t, champs);
  }
  if (s.t === 'obs') {
    const o = ED.scn.observations.find(x => x.id === s.id); if (!o) return;
    const photos = ED.scn.photos.filter(p => p.constat === o.id);
    return form(`Constat ${ED.scn.observations.indexOf(o) + 1}`, o, [
      ['titre', 'text', '', null, 'Titre'], ['description', 'textarea', 'Constat objectif, sans interprétation', null, 'Description'],
      ['lecture', 'textarea', 'Votre interprétation réelle (= bonne réponse en jeu)', null, 'Lecture'], ['lectureFb', 'textarea', 'Explication pédagogique', null, 'Explication'],
      ['distracteurs', 'lines', 'Lectures erronées plausibles (une par ligne, facultatif)', null, 'Pièges'], ['ref', 'text', 'Chapitre / section, ex. 6.3.7.1 (affiché « NFPA 921 – chap. 6.3.7.1 »)', null, 'Réf. NFPA 921'], ['sources', 'lines', 'Autres sources qui illustrent ce constat, une par ligne (ex. « Lentini 2013, chap. 8, § 8.3 — mythe du verre faïencé »). Facultatif : des sources sont proposées automatiquement selon la réf. NFPA 921.', null, 'Autres sources'],
      ['zone', 'select', '', ED.scn.zones.map(z => z.id), 'Zone'], ['outil', 'select', 'Outil nécessaire pour le relever', ['', 'jauge', 'arc', 'pid'], 'Outil'], ['indice', 'text', 'Message si l\'outil manque', null, 'Indice'],
      ['couche', 'number', 'Couche de fouille à retirer (0 = visible)', null, 'Couche'], ['prelevement', 'select', '', ['', ...(ED.scn.prelevements || []).map(p => p.id)], 'Prélèvement'], ['id', 'text', '', null, 'Id du fait']],
      `<div class="sec-t" style="margin-top:10px">Photos liées</div><div class="thumbs">${photos.map(p => ED.scn.medias[p.media] ? `<img src="${ED.scn.medias[p.media]}" title="${esc(p.titre)}">` : '').join('') || '<span class="small muted">Aucune (outil 📷 puis « constat lié »).</span>'}</div>${thermoEd(o)}`, e => lierThermo(e, o));
  }
  if (s.t === 'photo') {
    const p = ED.scn.photos.find(x => x.id === s.id); if (!p) return;
    return form('Photo épinglée', p, [['titre', 'text', '', null, 'Titre'], ['legende', 'textarea', '', null, 'Légende'], ['date', 'text', '', null, 'Date'], ['auteur', 'text', '', null, 'Auteur'],
      ['constat', 'select', 'Visible en jeu quand ce constat est relevé', ['', ...ED.scn.observations.map(o => o.id)], 'Constat lié'], ['yaw', 'range', 'Direction de prise de vue (°)', [-180, 180, 5], 'Orientation']],
      `${ED.scn.medias[p.media] ? `<img src="${ED.scn.medias[p.media]}" style="width:100%;border-radius:6px;margin-top:8px">` : '<p class="small" style="color:var(--warn)">Aucune image.</p>'}<div style="display:flex;gap:6px;margin-top:6px"><button class="btn btn-sm" data-img>🖼️ ${p.media ? 'Remplacer' : 'Choisir'} l'image</button><button class="btn btn-sm" data-yaw>🎯 Orienter selon la vue</button></div>`,
      e => { $('[data-img]', e).onclick = () => choisirImage(p.id); $('[data-yaw]', e).onclick = () => { const d = S.controls.target.clone().sub(S.camera.position); p.yaw = Math.round(Math.atan2(d.x, d.z) * 180 / Math.PI); changed(); rendreInspecteur(); }; });
  }
  if (s.t === 'fouille') {
    const f = ED.scn.fouille; if (!f) return;
    form('Zone de fouille', f.aire, [['x', 'number'], ['z', 'number'], ['w', 'number'], ['d', 'number']], '<div class="sec-t" style="margin-top:10px">Couches (1 = dessus)</div><div id="couches"></div>');
    rendreListe($('#couches', el), f.couches, SECTIONS.find(x => x.id === 'fouille').liste, () => changed(), 'couches');
  }
}

// ------------------------------------------------------------------ formulaires enquête / RETEX
const SECTIONS_ENQUETE = SECTIONS.filter(s => !['pieces', 'ouvertures', 'objets', 'traces', 'observations', 'fouille'].includes(s.id));
const RETEX_CHAMPS = [['mode', 'select', '« retex » : dossier d\'analyse réel, jouable en option', ['retex', 'jeu'], 'Type de dossier'], ['titre', 'text', '', null, 'Titre'],
  ['retex.auteur', 'text', '', null, 'Auteur'], ['retex.service', 'text', '', null, 'Service'], ['retex.date', 'text', '', null, 'Date du dossier'],
  ['retex.lieuPublic', 'text', 'Lieu affiché quand l\'adresse est masquée (ex. « Commune de Gironde »)', null, 'Lieu public'], ['retex.confidentialite', 'text', '', null, 'Mention'],
  ['retex.resume', 'textarea', 'Synthèse en quelques lignes', null, 'Résumé'], ['retex.contexte', 'textarea', '', null, 'Contexte'],
  ['retex.enseignements', 'lines', 'Un enseignement par ligne', null, 'Enseignements'], ['retex.positifs', 'lines', '', null, 'Points positifs'], ['retex.ameliorations', 'lines', '', null, 'Axes d\'amélioration'], ['retex.recommandations', 'lines', 'Prévention, sensibilisation…', null, 'Recommandations']];

function rendreFormulaires(el) {
  if (ED.mode === 'retex') {
    ED.scn.retex ||= {};
    const j = jouabilite(ED.scn);
    el.innerHTML = `<h2>Dossier RETEX</h2>
      <div class="panel small">${j.ok ? '<span class="chip ok">✔ jouable en enquête</span>' : `<span class="chip warn">non jouable</span> Il manque : ${esc(j.manques.join(', '))}.`} · ${ED.scn.photos.length} photo(s) · ${ED.scn.observations.length} constat(s)</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px"><button class="btn btn-primary" data-apercu>👁 Aperçu vue Analyse</button><button class="btn btn-fire" data-export>⬇ Exporter le dossier (HTML autonome)</button></div>
      <div id="rf">${RETEX_CHAMPS.map((c, i) => champHtml(ED.scn, c, 'rx' + i)).join('')}</div>`;
    lier($('#rf', el), ED.scn, () => changed(false));
    $('[data-apercu]', el).onclick = apercuAnalyse;
    $('[data-export]', el).onclick = exportRetex;
    return;
  }
  const sec = SECTIONS_ENQUETE.find(s => s.id === ED.section) || SECTIONS_ENQUETE[0];
  el.innerHTML = `<div class="enq-nav">${SECTIONS_ENQUETE.map(s => `<button class="${s.id === sec.id ? 'on' : ''}" data-s="${s.id}">${esc(s.titre)}</button>`).join('')}</div>
    <h2>${esc(sec.titre)}</h2>${sec.id === 'zones' ? '<button class="btn btn-sm" data-genz style="margin-bottom:8px">⚙ Générer les zones (abords + une par pièce)</button>' : ''}
    <div id="fChamps">${(sec.champs || []).map(c => champHtml(ED.scn, c, 'root')).join('')}</div><div id="fListe"></div>`;
  $$('[data-s]', el).forEach(b => b.onclick = () => { ED.section = b.dataset.s; rendreFormulaires(el); });
  lier($('#fChamps', el), ED.scn, () => changed(['zones', 'hyp-o'].includes(sec.id)));
  if (sec.liste) {
    if (!Array.isArray(get(ED.scn, sec.liste.chemin))) set(ED.scn, sec.liste.chemin, []);
    rendreListe($('#fListe', el), get(ED.scn, sec.liste.chemin), sec.liste, () => changed(['zones', 'hyp-o'].includes(sec.id)), sec.id);
  }
  $('[data-genz]', el)?.addEventListener('click', () => {
    if (!ED.scn.zones.some(z => z.exterieur)) ED.scn.zones.unshift({ id: 'abords', nom: 'Abords et extérieur', exterieur: true, rang: 0, cible: [0, 0, 0], zoom: 0.7 });
    bat().niveaux.forEach(n => n.pieces.forEach(p => { if (!ED.scn.zones.some(z => z.piece === p.id)) ED.scn.zones.push({ id: p.id, nom: bat().niveaux.length > 1 ? `${p.nom} (${n.nom})` : p.nom, piece: p.id, rang: Math.round((p.suie || 0) * 4), cible: [r2(p.x + p.w / 2), n.altitude || 0, r2(p.z + p.d / 2)], zoom: 1.4 }); }));
    changed(false); rendreFormulaires(el); toast('Zones générées. Ajustez le « rang » (niveau de dégâts) pour l\'ordre d\'examen.', 'ok');
  });
}

function apercuAnalyse() {
  const ov = h('<div class="ana-ov"></div>');
  document.body.appendChild(ov);
  const box = h('<div style="height:100%;display:flex"></div>'); ov.appendChild(box);
  const v = ouvrirAnalyse(ED.scn, box, { onClose: () => ov.remove() });
}

function exportRetex() {
  const corps = `<p class="small muted">Le fichier s'ouvre hors ligne dans n'importe quel navigateur. Les photos y sont intégrées : vérifiez qu'elles peuvent être diffusées.</p>
    ${[['temoins', 'Remplacer les noms des témoins par « Témoin 1, 2… »', true], ['adresse', 'Masquer l\'adresse exacte (affiche le « lieu public »)', true], ['mandant', 'Masquer le mandant et sa référence', false], ['sansTemoins', 'Retirer toutes les déclarations', false], ['sansOsint', 'Retirer les sources ouvertes', false]].map(([k, l, c]) => `<label class="opt"><input type="checkbox" data-k="${k}" ${c ? 'checked' : ''}><span>${l}</span></label>`).join('')}`;
  const m = modal({ titre: '⬇ Exporter le dossier RETEX', corps, actions: [{ label: 'Annuler', classe: 'btn-ghost' }, { label: 'Exporter', classe: 'btn-primary', onClick: el => {
    const o = Object.fromEntries($$('[data-k]', el).map(x => [x.dataset.k, x.checked]));
    exporterRetexHtml(ED.scn, o).then(n => toast(`Dossier exporté (${(n / 1048576).toFixed(1)} Mo).`, 'ok')).catch(e => toast('Export impossible : ' + esc(e.message), 'ko', 6000));
  } }] });
}

// ------------------------------------------------------------------ modes & fichier
function changerMode(m) {
  ED.mode = m; ED.sel = null; ED.drag = null; helpers.prev.visible = false;
  ED.outil = m === 'effets' ? 'piecefx' : 'select';
  document.querySelector('.ed2').className = `ed2 mode-${m}`;
  $$('#modes [data-m]').forEach(b => b.classList.toggle('on', b.dataset.m === m));
  $('#murs').value = m === 'effets' ? 'auto' : 'bas';
  rendrePalette(); rendreInspecteur(); reconstruire();
  setTimeout(() => S.resize(), 30);
}

function charger(scn, msg) {
  ED.scn = migrer(structuredClone(scn));
  ED.niv = 0; ED.sel = null; ctxF.ouverts.clear();
  rendreNiveaux(); rendrePalette(); rendreInspecteur();
  S.load(ED.scn); reconstruire();
  $('#edTitre').textContent = ED.scn.titre || ED.scn.id;
  if (msg) toast(msg, 'ok');
}

function controle(montrerOk = true) {
  const r = valider(ED.scn), j = jouabilite(ED.scn);
  modal({ titre: '🔎 Contrôle du dossier', corps: `<p>${r.nFaits} faits référencés · ${j.ok ? '<span class="chip ok">jouable</span>' : `<span class="chip warn">non jouable</span> manque : ${esc(j.manques.join(', '))}`}</p>
    ${r.err.length ? `<div class="fb ko"><b>${r.err.length} erreur(s)</b><ul>${r.err.map(e => `<li>${esc(e)}</li>`).join('')}</ul></div>` : (montrerOk ? '<div class="fb ok">Aucune erreur bloquante.</div>' : '')}
    ${r.warn.length ? `<div class="fb" style="border:1px solid #6a4a16;background:#2a2113;margin-top:8px"><b>${r.warn.length} avertissement(s)</b><ul>${r.warn.map(e => `<li>${esc(e)}</li>`).join('')}</ul></div>` : ''}`, actions: [{ label: 'Fermer' }] });
  return r;
}

async function init() {
  S = new Scene3D($('#edPrev'), { editeur: true });
  S.editeurCoupe = true;
  initHelpers();
  S.onPointer = onPointer;
  S.onPick = () => {};
  ctxF.pick = cb => { ctxF._attente = cb; $('#pickHint').hidden = false; };
  $('#modes').innerHTML = MODES.map(([k, l]) => `<button class="tab ${k === ED.mode ? 'on' : ''}" data-m="${k}">${l}</button>`).join('');
  $$('#modes [data-m]').forEach(b => b.onclick = () => changerMode(b.dataset.m));
  $('#murs').onchange = () => S.setModeMurs($('#murs').value);
  $('#grille').onchange = () => { helpers.grid.visible = $('#grille').checked; };
  $('#fouilleV').oninput = e => S.setFouille(+e.target.value);
  $$('[data-rot]').forEach(b => b.onclick = () => S.rotateView(+b.dataset.rot));
  document.addEventListener('keydown', e => {
    if (e.target.closest('input,textarea,select') || $('.modal-bg')) return;
    const k = e.key.toLowerCase();
    if (k === 'q') S.rotateView(-45); if (k === 'e') S.rotateView(45);
    if (k === 'escape') { ED.outil = 'select'; ED.drag = null; helpers.prev.visible = false; etiquette(null); rendrePalette(); }
    if ((k === 'delete' || k === 'backspace') && ED.sel) { e.preventDefault(); supprimer(ED.sel); }
    if (k === 'r' && ED.sel?.t === 'objet') { const o = nivCur().objets.find(x => x.id === ED.sel.id); o.rot = ((o.rot || 0) + (e.shiftKey ? 15 : 90)) % 360; changed(); rendreInspecteur(); }
  });
  // fichier
  document.addEventListener('click', e => { const m = $('.menu'); if (m?.open && !e.target.closest('.menu summary')) m.open = false; });
  $('#bNouveau').onclick = async () => { if (await confirmer('Nouveau dossier ?', 'Les modifications non publiées ou non exportées seront perdues.', 'Créer')) charger(nouveauScenario(), 'Nouveau dossier : dessinez vos pièces sur la grille.'); };
  $('#bCharger').onclick = async () => {
    const perso = await scenariosPerso();
    const all = [...SCENARIOS.map(s => ({ s, t: 'intégré' })), ...perso.map(s => ({ s, t: s.mode === 'retex' ? 'RETEX' : 'formateur' }))];
    const m = modal({ titre: 'Ouvrir un dossier', corps: `<div style="display:flex;flex-direction:column;gap:6px">${all.map(({ s, t }, i) => `<button class="btn qbtn" data-i="${i}"><span class="typ">${t}</span>${esc(s.titre)}</button>`).join('')}</div>`, actions: [{ label: 'Annuler' }] });
    $$('[data-i]', m.el).forEach(b => b.onclick = () => { charger(all[+b.dataset.i].s, 'Dossier ouvert.'); m.close(); });
  };
  $('#bVariante').onclick = () => {
    const s = structuredClone(ED.scn);
    s.id = `${s.id.replace(/-v\d+$/, '')}-v${Math.floor(Math.random() * 900 + 100)}`; s.titre = `${s.titre} (variante)`;
    charger(s, 'Variante créée : changez l\'origine, l\'heure, la puissance, les tracés et la solution.');
  };
  $('#bImport').onchange = async e => { try { charger(JSON.parse(await e.target.files[0].text()), 'Dossier importé.'); } catch (err) { toast('JSON invalide : ' + esc(err.message), 'ko'); } e.target.value = ''; };
  $('#bExport').onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(ED.scn)], { type: 'application/json' })); a.download = `${ED.scn.id}.json`; a.click(); };
  $('#bValider').onclick = () => controle();
  $('#bPublier').onclick = async () => {
    const r = valider(ED.scn);
    if (r.err.length) { controle(false); return; }
    if (SCENARIOS.some(s => s.id === ED.scn.id)) { toast('Identifiant d\'un scénario intégré : créez une variante avant de publier.', 'warn', 5500); return; }
    await sauverScenarioPerso(ED.scn);
    toast('Publié dans le tableau des missions de ce navigateur.', 'ok', 4500);
  };
  const br = await idbLire('brouillon');
  if (br?.batiment) charger(br, 'Brouillon restauré.'); else charger(nouveauScenario());
  changerMode('construire');
}

init();
// accès de test
window.__ed = { ED, proj: (x, y, z) => { const v = new THREE.Vector3(x, y, z).project(S.camera); const r = S.renderer.domElement.getBoundingClientRect(); return [(v.x + 1) / 2 * r.width, (1 - v.y) / 2 * r.height]; } };
