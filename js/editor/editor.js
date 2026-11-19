// Atelier de scènes « façon Les Sims » : barre ronde en bas, catalogue, objets intelligents (fiches BIM),
// sols et terrain, import de modèles 3D, annuler / rétablir et raccourcis clavier.
import * as THREE from '../../vendor/three.module.min.js';
import { Scene3D, altitudeDe, niveauIndex } from '../engine/scene3d.js';
import { SOLS_LISTE } from '../engine/textures.js';
import { ACCEPT_3D, FORMATS_3D, formatDe, chargerModele, infoModele } from '../engine/modeles.js';
import { SCENARIOS } from '../data/scenarios/index.js';
import { scenariosPerso, sauverScenarioPerso, lire as idbLire, ecrire as idbEcrire, compresserImage } from '../stockage.js';
import { SECTIONS, get, set, nouveauScenario, valider } from './schema.js';
import { champHtml, lier, rendreListe, ctxF } from './formulaires.js';
import { migrer, jouabilite } from '../game/prepa.js';
import { ouvrirAnalyse } from '../screens/analyseView.js';
import { exporterRetexHtml } from '../retex/export.js';
import { $, $$, h, esc, toast, modal, confirmer } from '../ui.js';
import { FUSIONS, fourchette, libelle } from '../data/thermique.js';
import { MATERIAUX_BIM, EUROCLASSES, CLASSES_M, ETATS, ENERGIES, infosMateriau, ficheVide } from '../data/bim.js';

// ------------------------------------------------------------------ catalogues
const CATALOGUE = [
  ['sejour', '🛋️', 'Séjour', [['canape', '🛋️', 'Canapé', { L: 2.2 }], ['fauteuil', '💺', 'Fauteuil'], ['tableBasse', '▭', 'Table basse'], ['meubleTV', '🗄️', 'Meuble TV', { L: 1.6 }], ['tv', '📺', 'Téléviseur', { y: 0.5 }], ['tapis', '🟥', 'Tapis', { w: 2, d: 1.4 }], ['etagere', '📚', 'Étagère', { L: 1.8 }], ['lampadaire', '🪔', 'Lampadaire']]],
  ['cuisine', '🍳', 'Cuisine', [['cuisine', '🍳', 'Plan de cuisine', { L: 3 }], ['frigo', '🧊', 'Réfrigérateur'], ['table', '🍽️', 'Table'], ['chaise', '🪑', 'Chaise'], ['machineLaver', '🧺', 'Lave-linge']]],
  ['chambre', '🛏️', 'Chambre & bain', [['lit', '🛏️', 'Lit', { L: 2, l: 1.6 }], ['armoire', '🚪', 'Armoire'], ['bureau', '🖥️', 'Bureau'], ['baignoire', '🛁', 'Baignoire']]],
  ['tech', '⚡', 'Énergie', [['tableauElec', '⚡', 'Tableau électrique', { y: 1.3 }], ['prise', '🔌', 'Prise murale', { y: 0.3 }], ['multiprise', '🔌', 'Multiprise'], ['chaudiere', '🔥', 'Chaudière'], ['poele', '🪵', 'Poêle'], ['radiateur', '♨️', 'Radiateur'], ['daaf', '🔔', 'DAAF']]],
  ['garage', '🚗', 'Garage & dehors', [['voiture', '🚗', 'Voiture'], ['trottinette', '🛴', 'Trottinette'], ['velo', '🚲', 'Vélo électrique'], ['chargeur', '🔋', 'Chargeur'], ['tondeuse', '🌱', 'Tondeuse'], ['jerrican', '⛽', 'Jerrican'], ['bidon', '🧴', 'Bidon'], ['poubelle', '🗑️', 'Poubelle'], ['etabli', '🧰', 'Établi', { L: 2 }], ['cartons', '📦', 'Cartons', { n: 3 }]]],
  ['debris', '🪨', 'Structure & débris', [['escalier', '🪜', 'Escalier', { L: 3, l: 0.9 }], ['debris', '🪨', 'Débris', { w: 1.5, d: 1 }], ['cellules', '🔩', 'Cellules projetées', { r: 1.5, n: 14 }]]],
];
const OUVERTURES = { porte: { type: 'porte', w: 0.9, h: 2.05 }, fenetre: { type: 'fenetre', w: 1.2, h: 1.15, allege: 0.95 }, baie: { type: 'baie', w: 2.4, h: 2.15, allege: 0 }, garage: { type: 'porte', garage: true, w: 2.4, h: 2.0 } };
const PINCEAUX_MUR = [['V', '🔻', 'Tracé en V'], ['cleanburn', '⬜', 'Clean burn'], ['calcination', '🌫️', 'Calcination'], ['protegee', '🛡️', 'Zone protégée (mur)'], ['demarcation', '➖', 'Ligne de démarcation']];
const PINCEAUX_SOL = [['irregulier', '🟤', 'Tracés irréguliers au sol'], ['consomme', '🕳️', 'Consommation / trou'], ['protegeeSol', '🔲', 'Zone protégée (sol)'], ['debris', '🪨', 'Débris (toute la pièce)']];
const SOLS_EXT = [['herbe', '#6f7d4f'], ['gravier', '#a8a194'], ['enrobe', '#4a4a4c'], ['terre', '#7a5f43'], ['sable', '#d6c49a'], ['dalle', '#b9b4aa'], ['terrasseBois', '#8a6440'], ['beton', '#9d9b95'], ['carrelage', '#d3cfc6'], ['parquet', '#9b7650']];
const TERRAINS = [['herbe', 'Herbe', '#5f6e43'], ['terre', 'Terre', '#6e5640'], ['sable', 'Sable', '#cdb98f'], ['gravier', 'Gravier', '#9d968a'], ['enrobe', 'Enrobé', '#4b4b4d'], ['beton', 'Béton', '#9d9b95']];
const nomSol = id => SOLS_LISTE.find(s => s[0] === id)?.[1] || id;

const MODES = [['construire', '🏗️', 'Construire'], ['effets', '🔥', 'Effets du feu'], ['indices', '📍', 'Indices'], ['enquete', '🧾', 'Enquête'], ['retex', '📘', 'RETEX']];
const ED = { scn: null, mode: 'construire', outil: 'select', niv: 0, sel: null, drag: null, section: 'general', cat: 'sejour', solMat: 'gravier', onglet: 'reglages', presse: null };
let S;

// ------------------------------------------------------------------ utilitaires
const snap = (v, p = 0.25) => Math.round(v / p) * p;
const r2 = v => Math.round(v * 100) / 100;
const bat = () => ED.scn.batiment;
const nivCur = () => bat().niveaux[ED.niv];
const alt = () => nivCur().altitude || 0;
function uid(prefix, existants) { let i = 1; while (existants.includes(prefix + i)) i++; return prefix + i; }
const toutesPieces = () => bat().niveaux.flatMap(n => n.pieces);
const tousObjets = () => bat().niveaux.flatMap(n => n.objets);
const pieceA = (x, z, niv = nivCur()) => niv.pieces.find(p => !p.ouverte && x >= p.x && x <= p.x + p.w && z >= p.z && z <= p.z + p.d) || niv.pieces.find(p => x >= p.x && x <= p.x + p.w && z >= p.z && z <= p.z + p.d) || null;
const aFiche = o => !ficheVide(o?.fiche);
function zonePour(x, z) {
  const p = pieceA(x, z);
  const sc = ED.scn;
  if (p && !p.ouverte) {
    let zz = sc.zones.find(q => q.piece === p.id);
    if (!zz) { zz = { id: p.id, nom: p.nom, piece: p.id, rang: Math.round((p.suie || 0) * 4), cible: [r2(p.x + p.w / 2), alt(), r2(p.z + p.d / 2)], zoom: 1.4 }; sc.zones.push(zz); }
    return zz.id;
  }
  let ext = sc.zones.find(q => q.exterieur);
  if (!ext) { ext = { id: 'abords', nom: 'Abords et extérieur', exterieur: true, rang: 0, cible: [0, 0, 0], zoom: 0.8 }; sc.zones.unshift(ext); }
  return ext.id;
}

// ------------------------------------------------------------------ historique (Ctrl+Z / Ctrl+Y)
const HIST = { pile: [], i: -1, t: null, medias: {}, modeles: {} };
function instantane() {
  const { medias, modeles, ...reste } = ED.scn;
  Object.assign(HIST.medias, medias || {}); Object.assign(HIST.modeles, modeles || {});
  return JSON.stringify({ reste, m: Object.keys(medias || {}), mo: Object.keys(modeles || {}) });
}
function pousserHist() {
  clearTimeout(HIST.t); HIST.t = null;
  const e = instantane();
  if (HIST.pile[HIST.i] === e) return;
  HIST.pile = HIST.pile.slice(0, HIST.i + 1); HIST.pile.push(e);
  if (HIST.pile.length > 120) HIST.pile.shift();
  HIST.i = HIST.pile.length - 1; majHist();
}
function majHist() { $('#bUndo').disabled = HIST.i <= 0; $('#bRedo').disabled = HIST.i >= HIST.pile.length - 1; }
function restaurer(e) {
  const { reste, m, mo } = JSON.parse(e);
  ED.scn = { ...reste, medias: Object.fromEntries(m.map(k => [k, HIST.medias[k]])), modeles: Object.fromEntries(mo.map(k => [k, HIST.modeles[k]])) };
  ED.niv = Math.min(ED.niv, bat().niveaux.length - 1); ED.sel = null; ED.drag = null;
  rendreNiveaux(); rendreTout(); reconstruire(); majHist();
  idbEcrire('brouillon', ED.scn);
  $('#edTitre').textContent = ED.scn.titre || ED.scn.id;
}
function annuler() { if (HIST.t) pousserHist(); if (HIST.i <= 0) return toast('Rien à annuler.', 'info', 1200); HIST.i--; restaurer(HIST.pile[HIST.i]); toast('↶ Annulé', 'info', 900); }
function retablir() { if (HIST.i >= HIST.pile.length - 1) return toast('Rien à rétablir.', 'info', 1200); HIST.i++; restaurer(HIST.pile[HIST.i]); toast('↷ Rétabli', 'info', 900); }

// ------------------------------------------------------------------ persistance (brouillon)
let tSave = null;
function changed(rebuild = true) {
  if (rebuild) reconstruire();
  clearTimeout(tSave);
  tSave = setTimeout(() => idbEcrire('brouillon', ED.scn), 700);
  clearTimeout(HIST.t); HIST.t = setTimeout(pousserHist, 350);
  $('#edTitre').textContent = ED.scn.titre || ED.scn.id;
}

// ------------------------------------------------------------------ scène
const helpers = {};
function initHelpers() {
  helpers.grid = new THREE.GridHelper(80, 320, 0x6c757d, 0x3a4048);
  helpers.grid.material.transparent = true; helpers.grid.material.opacity = 0.35;
  S.overlay.add(helpers.grid);
  helpers.sel = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)), new THREE.LineBasicMaterial({ color: 0x5fb0ff, depthTest: false }));
  helpers.sel.renderOrder = 40; helpers.sel.visible = false; S.overlay.add(helpers.sel);
  helpers.prev = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x5fb0ff, transparent: true, opacity: 0.3, depthTest: false }));
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
  sc.observations.forEach((o, i) => S.updateHotspot(o.id, { actif: true, decouvert: true, toujours: true, num: i + 1, analyse: !!(o.lecture || o.analyse?.options?.length || o.thermo?.items?.length), photo: sc.photos.some(p => p.constat === o.id) }));
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

function groupeObjet(id) { let g = null; S.root.traverse(n => { if (!g && n.userData.objet === id && n.userData.def) g = n; }); return g; }
function majSelection() {
  helpers.sel.visible = false;
  const s = ED.sel; if (!s) return;
  const A = alt();
  if (s.t === 'piece') { const p = toutesPieces().find(x => x.id === s.id); if (p) boite(helpers.sel, p.x, p.x + p.w, A, A + 0.05, p.z, p.z + p.d); }
  if (s.t === 'objet') {
    const o = nivCur().objets.find(x => x.id === s.id); if (!o) return;
    const g = groupeObjet(o.id);
    const b = g ? new THREE.Box3().setFromObject(g) : null;
    if (b && !b.isEmpty()) boite(helpers.sel, b.min.x - 0.03, b.max.x + 0.03, b.min.y, b.max.y + 0.03, b.min.z - 0.03, b.max.z + 0.03);
    else boite(helpers.sel, o.x - 0.4, o.x + 0.4, A + (o.y || 0), A + (o.y || 0) + 0.9, o.z - 0.4, o.z + 0.4);
  }
  if (s.t === 'ouverture') { const o = nivCur().ouvertures[s.idx]; if (o) { const hw = o.w / 2; if (o.axe === 'h') boite(helpers.sel, o.x - hw, o.x + hw, A + (o.allege || 0), A + (o.allege || 0) + o.h, o.z - 0.12, o.z + 0.12); else boite(helpers.sel, o.x - 0.12, o.x + 0.12, A + (o.allege || 0), A + (o.allege || 0) + o.h, o.z - hw, o.z + hw); } }
  if (s.t === 'obs' || s.t === 'photo') { const o = (s.t === 'obs' ? ED.scn.observations : ED.scn.photos).find(x => x.id === s.id); if (o) { const a = altitudeDe(bat(), o.niveau); boite(helpers.sel, o.pos[0] - 0.25, o.pos[0] + 0.25, a + o.pos[1] - 0.25, a + o.pos[1] + 0.25, o.pos[2] - 0.25, o.pos[2] + 0.25); } }
  if (s.t === 'tremie') { const t = nivCur().tremies[s.idx]; if (t) boite(helpers.sel, t.x, t.x + t.w, A, A + 0.05, t.z, t.z + t.d); }
}

// ------------------------------------------------------------------ outils par mode
function outilsDuMode() {
  if (ED.mode === 'construire') return [['select', '🖱️', 'Sélectionner (V)'], ['piece', '⬛', 'Pièce (P)'], ['sol', '🟫', 'Sols & terrain (T)'], ['porte', '🚪', 'Porte (O)'], ['fenetre', '🪟', 'Fenêtre (F)'], ['baie', '🖼️', 'Baie vitrée'], ['garage', '🏠', 'Porte de garage'], ['tremie', '⬜', 'Trémie'], ['meubles', '🛋️', 'Objets (catalogue)'], ['gomme', '🧽', 'Supprimer (X)']];
  if (ED.mode === 'effets') return [['piecefx', '🏠', 'Suie & couche chaude'], ...PINCEAUX_MUR.map(([k, ic, l]) => [`mur:${k}`, ic, l]), ...PINCEAUX_SOL.map(([k, ic, l]) => [`sol:${k}`, ic, l]), ['bruler', '🔥', 'Brûler un objet']];
  if (ED.mode === 'indices') return [['select', '🖱️', 'Sélectionner (V)'], ['constat', '🟨', 'Poser un constat'], ['photo', '📷', 'Épingler une photo'], ['fouille', '⛏️', 'Zone de fouille'], ['gomme', '🧽', 'Supprimer (X)']];
  return [];
}
const enCatalogue = () => ED.mode === 'construire' && (ED.outil === 'meubles' || ED.outil.startsWith('objet:') || ED.outil.startsWith('modele:'));

function rendreTout() { rendreBarre(); rendreListes(); rendreInspecteur(); if (ED.mode === 'enquete' || ED.mode === 'retex') rendreFormulaires($('.formes')); }

function choisirOutil(o) {
  ED.outil = o; ED.drag = null; helpers.prev.visible = false; etiquette(null);
  if (o === 'meubles' && !CATALOGUE.some(c => c[0] === ED.cat) && ED.cat !== 'modeles') ED.cat = 'sejour';
  rendreBarre();
}

function rendreBarre() {
  $('#modes').innerHTML = MODES.map(([k, ic, l], i) => `<button class="rond ${k === ED.mode ? 'on' : ''}" data-m="${k}" title="${esc(l)} (${i + 1})">${ic}<span class="lb">${esc(l)}</span></button>`).join('');
  $$('#modes [data-m]').forEach(b => b.onclick = () => changerMode(b.dataset.m));
  const outils = outilsDuMode();
  const actif = o => ED.outil === o || (o === 'meubles' && enCatalogue());
  $('#outils').innerHTML = outils.map(([id, ic, l]) => `<button class="rond ${actif(id) ? 'on' : ''}" data-o="${id}" title="${esc(l)}">${ic}<span class="lb">${esc(l.replace(/ \(.\)$/, ''))}</span></button>`).join('');
  $$('#outils [data-o]').forEach(b => b.onclick = () => choisirOutil(b.dataset.o));
  // catalogue
  const cat = $('#catalogue');
  if (ED.mode === 'construire' && ED.outil === 'sol') {
    cat.innerHTML = `<div class="cat-tabs"><button class="on">🟫 Sols extérieurs : dessinez un rectangle</button></div>
      <div class="tuiles">${SOLS_EXT.map(([id, c]) => `<button class="tuile ${ED.solMat === id ? 'on' : ''}" data-sol="${id}" title="${esc(nomSol(id))}"><i class="pastille" style="background:${c}"></i><small>${esc(nomSol(id))}</small></button>`).join('')}</div>
      <div class="cat-tabs" style="margin-top:8px"><button class="on">🌍 Terrain autour du bâtiment</button></div>
      <div class="tuiles">${TERRAINS.map(([id, l, c]) => `<button class="tuile ${(bat().terrain || 'herbe') === id ? 'on' : ''}" data-ter="${id}"><i class="pastille" style="background:${c}"></i><small>${esc(l)}</small></button>`).join('')}</div>`;
    $$('[data-sol]', cat).forEach(b => b.onclick = () => { ED.solMat = b.dataset.sol; rendreBarre(); });
    $$('[data-ter]', cat).forEach(b => b.onclick = () => { bat().terrain = b.dataset.ter; changed(); rendreBarre(); toast(`Terrain : ${b.querySelector('small').textContent}`, 'ok', 1500); });
  } else if (enCatalogue()) {
    const modeles = Object.entries(ED.scn.modeles || {});
    const tabs = [...CATALOGUE.map(([k, ic, l]) => [k, `${ic} ${l}`]), ['modeles', `📦 Modèles 3D${modeles.length ? ` (${modeles.length})` : ''}`]];
    const items = ED.cat === 'modeles'
      ? `<button class="tuile imp" data-import title="glTF/GLB (Blender), DAE (SketchUp), OBJ, STL, FBX"><span>➕</span><small>Importer un modèle 3D</small></button>${modeles.map(([k, m]) => `<button class="tuile ${ED.outil === 'modele:' + k ? 'on' : ''}" data-o2="modele:${k}" title="${esc(m.nom)} (.${esc(m.format)})"><span>📦</span><small>${esc(m.nom.replace(/\.[^.]+$/, '').slice(0, 18))}</small></button>`).join('')}`
      : (CATALOGUE.find(c => c[0] === ED.cat) || CATALOGUE[0])[3].map(([t, ic, nom]) => `<button class="tuile ${ED.outil === 'objet:' + t ? 'on' : ''}" data-o2="objet:${t}" title="${esc(nom)}"><span>${ic}</span><small>${esc(nom)}</small></button>`).join('');
    cat.innerHTML = `<div class="cat-tabs">${tabs.map(([k, l]) => `<button class="${k === ED.cat ? 'on' : ''}" data-cat="${k}">${esc(l)}</button>`).join('')}</div><div class="tuiles">${items}</div>`;
    $$('[data-cat]', cat).forEach(b => b.onclick = () => { ED.cat = b.dataset.cat; rendreBarre(); });
    $$('[data-o2]', cat).forEach(b => b.onclick = () => { ED.outil = b.dataset.o2; helpers.prev.visible = false; rendreBarre(); });
    $('[data-import]', cat)?.addEventListener('click', importerModele);
  } else cat.innerHTML = '';
  $('#conseil').textContent = ['enquete', 'retex'].includes(ED.mode) ? '' : aide();
}

function aide() {
  const o = ED.outil;
  if (o === 'piece' || o === 'tremie' || o === 'fouille') return 'Cliquez-glissez sur la grille pour dessiner le rectangle (pas de 25 cm). Échap : annuler l\'outil.';
  if (o === 'sol') return `Cliquez-glissez pour poser un sol « ${nomSol(ED.solMat)} » (allée, terrasse, parking…). Le terrain se règle juste en dessous.`;
  if (['porte', 'fenetre', 'baie', 'garage'].includes(o)) return 'Survolez un mur : l\'ouverture s\'y accroche. Cliquez pour la poser.';
  if (o === 'meubles') return 'Choisissez un objet dans le catalogue, puis cliquez au sol pour le poser.';
  if (o.startsWith('objet:') || o.startsWith('modele:')) return 'Cliquez au sol pour poser. R : pivoter de 90° (Maj+R : 15°). Échap : terminer.';
  if (o === 'select') return 'Cliquez pour sélectionner, glissez pour déplacer, flèches pour ajuster. Bord d\'une pièce : redimensionner. Ctrl+Z : annuler.';
  if (o.startsWith('mur:')) return 'Cliquez sur la face d\'un mur, à l\'endroit voulu (le bas du clic = sommet bas du V).';
  if (o.startsWith('sol:')) return 'Cliquez sur le sol d\'une pièce.';
  if (o === 'piecefx') return 'Cliquez dans une pièce pour régler sa suie et la hauteur de la couche chaude.';
  if (o === 'bruler') return 'Cliquez sur un objet pour régler son degré de combustion.';
  if (o === 'constat') return 'Cliquez sur l\'élément constaté (mur, sol, objet).';
  if (o === 'photo') return 'Cliquez à l\'endroit de la prise de vue : la direction suit la caméra. Choisissez ensuite l\'image.';
  if (o === 'gomme') return 'Cliquez sur un élément pour le supprimer (Ctrl+Z pour revenir).';
  return 'Molette : zoom · clic droit glissé : déplacer · Q / E : pivoter.';
}

// Panneau de gauche : listes du niveau
function rendreListes() {
  const el = $('.listes');
  if (ED.mode === 'enquete' || ED.mode === 'retex') { el.innerHTML = ''; return; }
  const n = nivCur();
  let html = '';
  if (ED.mode === 'construire') {
    html = `<div class="sec-t">Pièces et sols (${n.pieces.length})</div>${n.pieces.map(p => `<button class="li-b ${ED.sel?.t === 'piece' && ED.sel.id === p.id ? 'on' : ''}" data-pc="${esc(p.id)}">${p.ouverte ? '🟫' : '⬛'} ${esc(p.nom)}${aFiche(p) ? '<span class="bim" title="Fiche technique renseignée">📋</span>' : ''}</button>`).join('') || '<p class="small muted">Outil ⬛ : dessinez une pièce.</p>'}
      <div class="sec-t" style="margin-top:10px">Objets (${n.objets.length})</div>${n.objets.map(o => `<button class="li-b ${ED.sel?.t === 'objet' && ED.sel.id === o.id ? 'on' : ''}" data-oj="${esc(o.id)}">${icone(o)} ${esc(o.nom || o.id)}${aFiche(o) ? '<span class="bim" title="Fiche technique renseignée">📋</span>' : ''}</button>`).join('') || '<p class="small muted">Outil 🛋️ : choisissez dans le catalogue.</p>'}`;
  }
  if (ED.mode === 'effets') html = `<div class="sec-t">Tracés du niveau (${n.traces.length})</div>${n.traces.map((t, i) => `<button class="li-b ${ED.sel?.t === 'trace' && ED.sel.idx === i ? 'on' : ''}" data-tr="${i}">${esc(t.type)} · ${esc(t.piece)} · ${esc(t.cote)}</button>`).join('') || '<p class="small muted">Choisissez un pinceau puis cliquez sur un mur ou un sol.</p>'}`;
  if (ED.mode === 'indices') html = `<div class="sec-t">Constats (${ED.scn.observations.length})</div>${ED.scn.observations.map((o, i) => `<button class="li-b ${ED.sel?.t === 'obs' && ED.sel.id === o.id ? 'on' : ''}" data-ob="${esc(o.id)}"><b>${i + 1}</b> ${esc(o.titre)}${o.thermo?.items?.length ? ' 🌡️' : ''}</button>`).join('') || '<p class="small muted">Outil 🟨 : posez un constat.</p>'}
    <div class="sec-t" style="margin-top:10px">Photos (${ED.scn.photos.length})</div>${ED.scn.photos.map(p => `<button class="li-b ${ED.sel?.t === 'photo' && ED.sel.id === p.id ? 'on' : ''}" data-ph="${esc(p.id)}">${ED.scn.medias[p.media] ? `<img src="${ED.scn.medias[p.media]}" alt="">` : '📷'} ${esc(p.titre || p.id)}</button>`).join('')}`;
  el.innerHTML = html;
  $$('[data-pc]', el).forEach(b => b.onclick = () => { selectionner({ t: 'piece', id: b.dataset.pc }); const p = n.pieces.find(x => x.id === b.dataset.pc); cadrerSur({ pos: [p.x + p.w / 2, 0, p.z + p.d / 2], niveau: n.id }); });
  $$('[data-oj]', el).forEach(b => b.onclick = () => { selectionner({ t: 'objet', id: b.dataset.oj }); const o = n.objets.find(x => x.id === b.dataset.oj); cadrerSur({ pos: [o.x, 0, o.z], niveau: n.id }); });
  $$('[data-tr]', el).forEach(b => b.onclick = () => selectionner({ t: 'trace', idx: +b.dataset.tr }));
  $$('[data-ob]', el).forEach(b => b.onclick = () => { selectionner({ t: 'obs', id: b.dataset.ob }); cadrerSur(ED.scn.observations.find(o => o.id === b.dataset.ob)); });
  $$('[data-ph]', el).forEach(b => b.onclick = () => { selectionner({ t: 'photo', id: b.dataset.ph }); cadrerSur(ED.scn.photos.find(o => o.id === b.dataset.ph)); });
}
function icone(o) {
  if (o.type === 'modele') return '📦';
  for (const c of CATALOGUE) { const x = c[3].find(y => y[0] === o.type); if (x) return x[1]; }
  return '▫️';
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
  majSelection(); rendreInspecteur(); rendreListes();
  if (sel?.t === 'photo') reconstruire();
}

// ------------------------------------------------------------------ niveaux
function rendreNiveaux() {
  const el = $('#niveaux');
  el.innerHTML = bat().niveaux.map((n, i) => `<button class="niv-b ${i === ED.niv ? 'on' : ''}" data-n="${i}">${esc(n.nom)}</button>`).join('') +
    `<button class="rond-s" data-n="+" title="Ajouter un niveau au-dessus">＋</button><button class="rond-s" data-n="cfg" title="Propriétés du niveau">⚙</button>`;
  $$('[data-n]', el).forEach(b => b.onclick = () => {
    const v = b.dataset.n;
    if (v === '+') return ajouterNiveau();
    if (v === 'cfg') return selectionner({ t: 'niveau' });
    ED.niv = +v; ED.sel = null; rendreNiveaux(); reconstruire(); rendreTout();
  });
}
function ajouterNiveau() {
  const ns = bat().niveaux, top = ns[ns.length - 1];
  const k = ns.length;
  const ids = toutesPieces().map(p => p.id);
  const pieces = top.pieces.filter(p => !p.ouverte).map(p => { const id = uid('p', ids); ids.push(id); return { ...structuredClone(p), id, nom: `${p.nom} (R+${k})`, couche: top.hauteur || 2.5, suie: 0, fiche: undefined }; });
  ns.push({ id: uid('r', ns.map(n => n.id)).replace(/^r/, 'r+'), nom: `R+${k}`, altitude: r2((top.altitude || 0) + (top.hauteur || 2.5) + 0.2), hauteur: 2.5, pieces, ouvertures: [], objets: [], traces: [], tremies: [] });
  ED.niv = ns.length - 1; ED.sel = { t: 'niveau' };
  toast(`Niveau R+${k} créé en reprenant l'emprise du niveau inférieur. Dessinez une trémie pour l'escalier.`, 'ok', 5000);
  rendreNiveaux(); changed(); rendreTout();
}

// ------------------------------------------------------------------ pointeur
function murProche(p) {
  let best = null;
  for (const r of nivCur().pieces.filter(x => !x.ouverte)) {
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
  // -- rectangles (pièce, sol, trémie, fouille)
  if (['piece', 'sol', 'tremie', 'fouille'].includes(o)) {
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
        if (o === 'piece' || o === 'sol') {
          const id = uid(o === 'sol' ? 's' : 'p', toutesPieces().map(p => p.id));
          nivCur().pieces.push(o === 'sol'
            ? { id, nom: nomSol(ED.solMat), x, z, w, d, sol: ED.solMat, ouverte: true, peinture: '#888888', couche: nivCur().hauteur || 2.5, suie: 0 }
            : { id, nom: `Pièce ${nivCur().pieces.filter(p => !p.ouverte).length + 1}`, x, z, w, d, sol: 'parquet', peinture: '#ddd6c6', couche: nivCur().hauteur || 2.5, suie: 0 });
          ED.sel = { t: 'piece', id };
        } else if (o === 'tremie') {
          nivCur().tremies.push({ x, z, w, d }); ED.sel = { t: 'tremie', idx: nivCur().tremies.length - 1 };
        } else {
          ED.scn.fouille = { ...(ED.scn.fouille || {}), niveau: nivCur().id, zone: zonePour(x + w / 2, z + d / 2), aire: { x, z, w, d }, ref: '17.3.2', couches: ED.scn.fouille?.couches?.length ? ED.scn.fouille.couches : [{ n: 1, nom: 'Débris de toiture / plafond', description: '', h: 0.12, couleur: '#8d8a84' }, { n: 2, nom: 'Débris de mobilier', description: '', h: 0.13, couleur: '#2a2522' }, { n: 3, nom: 'Niveau du sol', description: '', h: 0.04, couleur: '#3b3632' }] };
          ED.sel = { t: 'fouille' };
        }
        changed(); rendreInspecteur(); rendreListes();
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
  // -- pose d'objets et de modèles 3D
  if (o.startsWith('objet:') || o.startsWith('modele:')) {
    if (!P) return;
    const sp = { x: snap(P.x, 0.05), z: snap(P.z, 0.05) };
    boite(helpers.prev, sp.x - 0.3, sp.x + 0.3, alt(), alt() + 0.6, sp.z - 0.3, sp.z + 0.3);
    if (type === 'down') {
      const ids = tousObjets().map(x => x.id);
      let obj;
      if (o.startsWith('objet:')) {
        const t = o.slice(6);
        const def = CATALOGUE.flatMap(c => c[3]).find(x => x[0] === t);
        obj = { id: uid(t, ids), type: t, nom: def?.[2], x: sp.x, z: sp.z, rot: 0, brule: 0, ...(def?.[4] || {}) };
      } else {
        const k = o.slice(7), m = ED.scn.modeles[k];
        obj = { id: uid('modele', ids), type: 'modele', modele: k, nom: m.nom.replace(/\.[^.]+$/, ''), x: sp.x, z: sp.z, rot: 0, brule: 0, echelle: m.echelle || 1, zHaut: m.zHaut || undefined };
      }
      nivCur().objets.push(obj);
      ED.sel = { t: 'objet', id: obj.id }; helpers.prev.visible = false; changed(); rendreInspecteur(); rendreListes();
    }
    return;
  }
  if (o === 'meubles') { if (type === 'down') toast('Choisissez d\'abord un objet dans le catalogue.', 'info', 1800); return; }
  if (o === 'select') return pointeurSelection(type, info);
  if (o === 'gomme' && type === 'down') return gommer(info);
  if (ED.mode === 'effets' && type === 'down') return pointeurEffets(info);
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
      ED.drag = { kind: bord ? 'resize' : 'move', bord, p, start: { x: P.x, z: P.z }, orig: { ...p }, contenus: p.ouverte ? [] : nivCur().objets.filter(o => o.x >= p.x && o.x <= p.x + p.w && o.z >= p.z && o.z <= p.z + p.d).map(o => ({ o, x: o.x, z: o.z })), moved: false };
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
      const seg = nivCur().pieces.filter(r => !r.ouverte).flatMap(r => o.axe === 'h' ? [[r.z, r.x, r.x + r.w], [r.z + r.d, r.x, r.x + r.w]] : [[r.x, r.z, r.z + r.d], [r.x + r.w, r.z, r.z + r.d]]).filter(([l]) => Math.abs(l - (o.axe === 'h' ? o.z : o.x)) < 0.02);
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
  ED.sel = null; changed(); rendreInspecteur(); rendreListes();
  toast('Supprimé — Ctrl+Z pour annuler.', 'info', 1600);
}
function gommer(info) { const c = cibleSous(info); if (c) supprimer(c); }

// Copier / coller / dupliquer / déplacer au clavier
function copier() {
  const s = ED.sel; if (!s) return false;
  const n = nivCur();
  if (s.t === 'objet') ED.presse = { t: 'objet', d: structuredClone(n.objets.find(o => o.id === s.id)) };
  else if (s.t === 'piece') { const p = n.pieces.find(x => x.id === s.id); ED.presse = { t: 'piece', d: structuredClone(p), contenus: p.ouverte ? [] : structuredClone(n.objets.filter(o => o.x >= p.x && o.x <= p.x + p.w && o.z >= p.z && o.z <= p.z + p.d)) }; }
  else if (s.t === 'obs') ED.presse = { t: 'obs', d: structuredClone(ED.scn.observations.find(o => o.id === s.id)) };
  else return false;
  return true;
}
function coller() {
  const P = ED.presse; if (!P) return toast('Presse-papiers vide (Ctrl+C sur un objet, une pièce ou un constat).', 'info', 2000);
  const n = nivCur();
  if (P.t === 'objet') {
    const o = { ...structuredClone(P.d), id: uid(P.d.type, tousObjets().map(x => x.id)), x: r2(P.d.x + 0.5), z: r2(P.d.z + 0.5) };
    n.objets.push(o); ED.sel = { t: 'objet', id: o.id }; P.d = structuredClone(o);
  } else if (P.t === 'piece') {
    const dx = P.d.w + 0.5;
    const p = { ...structuredClone(P.d), id: uid(P.d.ouverte ? 's' : 'p', toutesPieces().map(x => x.id)), nom: `${P.d.nom} (copie)`, x: r2(P.d.x + dx) };
    n.pieces.push(p);
    for (const c of P.contenus || []) n.objets.push({ ...structuredClone(c), id: uid(c.type, tousObjets().map(x => x.id)), x: r2(c.x + dx) });
    ED.sel = { t: 'piece', id: p.id }; P.d = structuredClone(p); P.contenus = (P.contenus || []).map(c => ({ ...c, x: r2(c.x + dx) }));
  } else if (P.t === 'obs') {
    const o = { ...structuredClone(P.d), id: uid('F', ED.scn.observations.map(x => x.id)), pos: [r2(P.d.pos[0] + 0.4), P.d.pos[1], r2(P.d.pos[2] + 0.4)], titre: `${P.d.titre} (copie)` };
    ED.scn.observations.push(o); ED.sel = { t: 'obs', id: o.id }; P.d = structuredClone(o);
  }
  changed(); rendreInspecteur(); rendreListes();
}
function deplacer(dx, dz) {
  const s = ED.sel; if (!s) return;
  const n = nivCur();
  if (s.t === 'objet') { const o = n.objets.find(x => x.id === s.id); o.x = r2(o.x + dx); o.z = r2(o.z + dz); }
  else if (s.t === 'piece') { const p = n.pieces.find(x => x.id === s.id); const cont = p.ouverte ? [] : n.objets.filter(o => o.x >= p.x && o.x <= p.x + p.w && o.z >= p.z && o.z <= p.z + p.d); p.x = r2(p.x + dx); p.z = r2(p.z + dz); cont.forEach(o => { o.x = r2(o.x + dx); o.z = r2(o.z + dz); }); }
  else if (s.t === 'obs' || s.t === 'photo') { const o = (s.t === 'obs' ? ED.scn.observations : ED.scn.photos).find(x => x.id === s.id); o.pos = [r2(o.pos[0] + dx), o.pos[1], r2(o.pos[2] + dz)]; }
  else return;
  changed(); rendreInspecteur();
}

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
    if (!p) { toast('Cliquez sur le sol d\'une pièce ou d\'un sol extérieur.', 'warn'); return; }
    const t = o.slice(4);
    n.traces.push(t === 'debris' ? { piece: p.id, cote: 'sol', type: 'debris', densite: 0.5 } : { piece: p.id, cote: 'sol', type: t === 'protegeeSol' ? 'protegee' : t, x: r2(P.x), z: r2(P.z), rx: t === 'irregulier' ? 1 : 0.45, rz: t === 'irregulier' ? 0.6 : 0.45, ...(t === 'irregulier' ? { seed: Math.floor(Math.random() * 99) } : {}) });
  } else return;
  ED.sel = { t: 'trace', idx: n.traces.length - 1 };
  changed(); rendreInspecteur(); rendreListes();
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
    changed(); rendreInspecteur(); rendreListes();
    setTimeout(() => $('.insp input, .insp textarea')?.focus(), 50);
  } else {
    const d = S.controls.target.clone().sub(S.camera.position);
    const yaw = Math.round(Math.atan2(d.x, d.z) * 180 / Math.PI);
    const sol = hit?.face ? hit.face.normal.clone().transformDirection(hit.object.matrixWorld).y > 0.5 : true;
    const id = uid('ph', ED.scn.photos.map(x => x.id));
    ED.scn.photos.push({ id, niveau: nivCur().id, pos: [r2(p.x), r2(sol ? 1.5 : p.y - A), r2(p.z)], yaw, titre: `Photo ${ED.scn.photos.length + 1}`, legende: '', date: '', auteur: ED.scn.retex?.auteur || '', constat: '' });
    ED.sel = { t: 'photo', id };
    changed(); rendreInspecteur(); rendreListes();
    choisirImage(id);
  }
}
function choisirFichier(accept) {
  return new Promise(ok => { const inp = document.createElement('input'); inp.type = 'file'; inp.accept = accept; inp.onchange = () => ok(inp.files[0] || null); inp.click(); });
}
const lireDataUrl = f => new Promise((ok, ko) => { const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = () => ko(r.error); r.readAsDataURL(f); });
const nouvelleCle = p => p + Math.random().toString(36).slice(2, 9);

async function choisirImage(id) {
  const f = await choisirFichier('image/*'); if (!f) return;
  try {
    const data = await compresserImage(f);
    const ph = ED.scn.photos.find(x => x.id === id);
    const mid = nouvelleCle('m_');
    if (ph.media && !ED.scn.photos.some(x => x !== ph && x.media === ph.media)) delete ED.scn.medias[ph.media];
    ED.scn.medias[mid] = data; ph.media = mid;
    if (!ph.titre || /^Photo \d+$/.test(ph.titre)) ph.titre = f.name.replace(/\.[^.]+$/, '');
    if (f.lastModified && !ph.date) ph.date = new Date(f.lastModified).toLocaleDateString('fr-FR');
    changed(false); rendreInspecteur(); rendreListes();
    toast(`Image ajoutée (${Math.round(data.length * 0.75 / 1024)} Ko).`, 'ok');
  } catch (e) { toast(esc(e.message), 'ko'); }
}

// ------------------------------------------------------------------ modèles 3D
async function importerModele() {
  const f = await choisirFichier(ACCEPT_3D); if (!f) return;
  const format = formatDe(f.name);
  if (!FORMATS_3D[format]) return toast(`Format non pris en charge (.${esc(format)}). Utilisez ${Object.keys(FORMATS_3D).map(x => '.' + x).join(', ')}.`, 'ko', 6000);
  const mo = f.size / 1048576;
  if (mo > 40) return toast(`Fichier trop lourd (${mo.toFixed(1)} Mo, maximum 40 Mo). Simplifiez le modèle ou exportez en .glb.`, 'ko', 6000);
  if (mo > 12 && !(await confirmer('Modèle volumineux', `Ce fichier pèse ${mo.toFixed(1)} Mo : il alourdira le dossier et l'export RETEX. Continuer ?`, 'Importer'))) return;
  try {
    toast('Import du modèle…', 'info', 1500);
    const data = await lireDataUrl(f);
    const k = nouvelleCle('mod_');
    const def = { nom: f.name, format, data };
    const { taille } = await chargerModele(k, def);
    const maxDim = Math.max(taille.x, taille.y, taille.z);
    def.echelle = maxDim > 400 ? 0.001 : maxDim > 40 ? 0.01 : 1;
    def.zHaut = format === 'stl' || undefined;
    ED.scn.modeles ||= {};
    ED.scn.modeles[k] = def;
    ED.cat = 'modeles'; ED.outil = 'modele:' + k;
    changed(false); rendreBarre();
    const t = [taille.x, taille.y, taille.z].map(v => (v * def.echelle).toFixed(2)).join(' × ');
    toast(`Modèle « ${esc(f.name)} » importé (${t} m${def.echelle !== 1 ? `, échelle ${def.echelle} appliquée` : ''}). Cliquez au sol pour le poser.`, 'ok', 6000);
  } catch (e) { toast(`Lecture impossible : ${esc(e.message || e)}`, 'ko', 6000); }
}

// ------------------------------------------------------------------ fiche technique (BIM)
function ficheEd(cible) {
  cible.fiche ||= {};
  const f = cible.fiche;
  const C = (k, type, label, opts, aide) => champHtml(cible, [`fiche.${k}`, type, aide, opts, label], 'fb');
  const info = infosMateriau(f);
  const photos = (f.photos || []).filter(id => ED.scn.medias[id]);
  return `<div class="fbim">
    ${C('materiau', 'select', 'Matériau principal', [['', '—'], ...MATERIAUX_BIM.map(m => [m.id, m.famille ? `${m.nom} (${m.famille})` : m.nom])])}
    ${info ? `<div class="info-auto">${esc(info)}</div>` : ''}
    ${C('materiauLibre', 'text', 'Précision (essence, composition, revêtement…)')}
    <div class="sec-t">Comportement au feu</div>
    ${C('euroclasse', 'select', 'Réaction au feu (Euroclasse)', [['', '—'], ...EUROCLASSES.map(e => [e, e])])}
    ${C('classementM', 'select', 'Classement M (ancien)', [['', '—'], ...CLASSES_M.map(e => [e, e])])}
    ${C('resistanceFeu', 'text', 'Résistance au feu', null, 'Ex. EI 30, REI 60, PF ½ h')}
    <div class="sec-t">Procès-verbal</div>
    ${C('pvNumero', 'text', 'N° de PV')}${C('pvLabo', 'text', 'Laboratoire')}${C('pvDate', 'text', 'Date / validité')}
    <div class="sec-t">Identification</div>
    ${C('fabricant', 'text', 'Fabricant')}${C('reference', 'text', 'Référence / modèle / n° de série')}${C('pose', 'text', 'Date d\'installation / d\'achat')}
    ${C('energie', 'select', 'Alimentation', ENERGIES.map(e => [e, e || '—']))}${C('puissance', 'number', 'Puissance (W)')}
    ${C('etat', 'select', 'État', [['', '—'], ...ETATS.map(e => [e, e])])}${C('notes', 'textarea', 'Observations')}
    <div class="sec-t">Photos de l'élément</div>
    <div class="thumbs">${photos.map(id => `<span class="x"><img src="${ED.scn.medias[id]}" alt=""><button data-fphdel="${id}" title="Retirer">✕</button></span>`).join('')}</div>
    <button class="btn btn-sm" data-fph style="margin-top:6px">📷 Ajouter une photo</button>
    <div class="sec-t">Documents (PV, notice, facture…)</div>
    <div class="docs-l">${(f.documents || []).map((d, i) => `<span>📎 ${esc(d.nom)} <button class="btn btn-sm" data-fdocdel="${i}" style="padding:0 6px">✕</button></span>`).join('') || '<span class="small muted">Aucun document.</span>'}</div>
    <button class="btn btn-sm" data-fdoc style="margin-top:6px">📎 Joindre un document</button></div>`;
}
function lierFiche(el, cible) {
  const box = $('.fbim', el); if (!box) return;
  lier(box, cible, () => { changed(false); rendreInspecteur(); rendreListes(); });
  $('[data-fph]', box).onclick = async () => {
    const fi = await choisirFichier('image/*'); if (!fi) return;
    const data = await compresserImage(fi); const k = nouvelleCle('m_');
    ED.scn.medias[k] = data; (cible.fiche.photos ||= []).push(k); changed(false); rendreInspecteur();
  };
  $$('[data-fphdel]', box).forEach(b => b.onclick = () => { cible.fiche.photos = cible.fiche.photos.filter(x => x !== b.dataset.fphdel); delete ED.scn.medias[b.dataset.fphdel]; changed(false); rendreInspecteur(); });
  $('[data-fdoc]', box).onclick = async () => {
    const fi = await choisirFichier('.pdf,image/*'); if (!fi) return;
    if (fi.size > 8 * 1048576) return toast('Document trop lourd (8 Mo maximum).', 'ko');
    const data = fi.type.startsWith('image/') ? await compresserImage(fi) : await lireDataUrl(fi);
    const k = nouvelleCle('d_'); ED.scn.medias[k] = data; (cible.fiche.documents ||= []).push({ nom: fi.name, media: k });
    changed(false); rendreInspecteur(); toast(`Document joint (${Math.round(fi.size / 1024)} Ko).`, 'ok');
  };
  $$('[data-fdocdel]', box).forEach(b => b.onclick = () => { const d = cible.fiche.documents.splice(+b.dataset.fdocdel, 1)[0]; if (d) delete ED.scn.medias[d.media]; changed(false); rendreInspecteur(); });
}

// ------------------------------------------------------------------ inspecteur
function thermoEd(o) {
  const items = o.thermo?.items || [];
  const opt = sel => FUSIONS.map(f => `<option value="${f.id}" ${f.id === sel ? 'selected' : ''}>${esc(f.nom)} (${esc(f.plage)} °C)</option>`).join('');
  return `<div class="sec-t" style="margin-top:10px">🌡️ Témoins de température</div>
    <p class="small muted">Objets fondus ou intacts à cet endroit. Le jeu en déduit la fourchette de température et propose l'exercice au joueur.</p>
    ${items.map((it, i) => `<div class="thermo-ed" data-ti="${i}" style="display:grid;grid-template-columns:1fr auto;gap:4px;margin-bottom:6px;padding:6px;border:1px solid var(--line);border-radius:10px">
      <select class="inp" data-k="mat">${opt(it.mat)}</select><button class="btn btn-sm" data-tdel title="Retirer">✕</button>
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
  if (!s) { el.innerHTML = ''; return; }
  const avecFiche = ['piece', 'objet', 'ouverture'].includes(s.t) && ED.mode === 'construire';
  const form = (titre, obj, champs, extra = '', apres) => {
    const ongl = avecFiche ? `<div class="onglets-i"><button data-ong="reglages" class="${ED.onglet === 'reglages' ? 'on' : ''}">⚙ Réglages</button><button data-ong="fiche" class="${ED.onglet === 'fiche' ? 'on' : ''}">📋 Fiche technique${aFiche(obj) ? ' ✓' : ''}</button></div>` : '';
    const fiche = avecFiche && ED.onglet === 'fiche';
    el.innerHTML = `<h3>${titre}</h3>${ongl}${fiche ? ficheEd(obj) : `<div class="f">${champs.map((c, i) => champHtml(obj, c, 'i' + i)).join('')}</div>${extra}`}
      <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">${s.t !== 'niveau' ? '<button class="btn btn-sm" data-del style="color:#c0392b">🗑 Supprimer</button>' : ''}${['objet', 'piece', 'obs'].includes(s.t) ? '<button class="btn btn-sm" data-dup title="Ctrl+D">⧉ Dupliquer</button>' : ''}</div>`;
    $$('[data-ong]', el).forEach(b => b.onclick = () => { ED.onglet = b.dataset.ong; rendreInspecteur(); });
    if (fiche) lierFiche(el, obj);
    else { lier($('.f', el), obj, () => { changed(); majSelection(); rendreListes(); }); apres && apres(el); }
    $('[data-del]', el)?.addEventListener('click', () => supprimer(s));
    $('[data-dup]', el)?.addEventListener('click', () => { if (copier()) coller(); });
  };
  const n = nivCur();
  if (s.t === 'niveau') return form(`Niveau : ${esc(n.nom)}`, n, [['nom', 'text', '', null, 'Nom'], ['id', 'text', 'Identifiant (utilisé par les constats)', null, 'Id'], ['altitude', 'number', 'Altitude du plancher (m)', null, 'Altitude'], ['hauteur', 'number', 'Hauteur sous plafond (m)', null, 'Hauteur']],
    bat().niveaux.length > 1 ? '<button class="btn btn-sm" data-delniv style="margin-top:8px;color:#c0392b">Supprimer ce niveau</button>' : '', e => $('[data-delniv]', e)?.addEventListener('click', async () => { if (await confirmer('Supprimer ce niveau ?', 'Pièces, objets et tracés de ce niveau seront supprimés.', 'Supprimer')) { bat().niveaux.splice(ED.niv, 1); ED.niv = 0; ED.sel = null; rendreNiveaux(); changed(); rendreTout(); } }));
  if (s.t === 'piece') {
    const p = toutesPieces().find(x => x.id === s.id); if (!p) return;
    const H = n.hauteur || 2.5;
    if (p.ouverte) return form(`Sol extérieur : ${esc(p.nom)}`, p, ED.mode === 'effets'
      ? [['nom', 'text', '', null, 'Nom'], ['suie', 'range', 'Noircissement', [0, 1, 0.05], 'Suie']]
      : [['nom', 'text', '', null, 'Nom'], ['sol', 'select', '', SOLS_LISTE, 'Revêtement'], ['x', 'number', '', null, 'x'], ['z', 'number', '', null, 'z'], ['w', 'number', 'Largeur (m)', null, 'Largeur'], ['d', 'number', 'Profondeur (m)', null, 'Profondeur']]);
    return form(`Pièce : ${esc(p.nom)}`, p, ED.mode === 'effets'
      ? [['nom', 'text', '', null, 'Nom'], ['couche', 'range', 'Hauteur de la ligne de démarcation de la couche chaude (m). En haut = pas de fumée.', [0, H, 0.05], 'Couche chaude'], ['suie', 'range', 'Densité des dépôts de suie / dégâts', [0, 1, 0.05], 'Suie'], ['peinture', 'color', '', null, 'Peinture']]
      : [['nom', 'text', '', null, 'Nom'], ['sol', 'select', '', SOLS_LISTE, 'Sol'], ['peinture', 'color', '', null, 'Couleur des murs'], ['x', 'number', '', null, 'x'], ['z', 'number', '', null, 'z'], ['w', 'number', 'Largeur (m)', null, 'Largeur'], ['d', 'number', 'Profondeur (m)', null, 'Profondeur']]);
  }
  if (s.t === 'objet') {
    const o = n.objets.find(x => x.id === s.id); if (!o) return;
    if (o.type === 'modele') {
      const m = ED.scn.modeles?.[o.modele];
      form(`📦 ${esc(o.nom || 'Modèle 3D')}`, o, [['nom', 'text', '', null, 'Nom'], ['echelle', 'number', 'Facteur d\'échelle (1 = le modèle est en mètres)', null, 'Échelle'], ['zHaut', 'bool', 'Cochez si le modèle est couché (axe Z vers le haut : SketchUp, STL)', null, 'Z vers le haut'], ['rot', 'number', 'Rotation (°) — touche R', null, 'Rotation'], ['x', 'number', '', null, 'x'], ['z', 'number', '', null, 'z'], ['y', 'number', 'Hauteur de pose', null, 'y'], ['brule', 'range', 'Combustion (assombrit le modèle)', [0, 1, 0.05], 'Brûlé']],
        `<div class="sec-t" style="margin-top:8px">Unités du fichier</div><div style="display:flex;gap:4px;flex-wrap:wrap">${[['m', 1], ['cm', 0.01], ['mm', 0.001], ['pouce', 0.0254]].map(([l, v]) => `<button class="btn btn-sm" data-ech="${v}">${l}</button>`).join('')}</div><p class="small muted" id="dimMod" style="margin-top:6px">${m ? `Fichier : ${esc(m.nom)}` : '<span style="color:#c0392b">Fichier du modèle introuvable dans ce dossier.</span>'}</p>`,
        e => { $$('[data-ech]', e).forEach(b => b.onclick = () => { o.echelle = +b.dataset.ech; changed(); rendreInspecteur(); }); });
      infoModele(o.modele)?.then(({ taille }) => { const d = $('#dimMod'); if (d) d.textContent += ` · ${[taille.x, taille.y, taille.z].map(v => (v * (o.echelle || 1)).toFixed(2)).join(' × ')} m`; }).catch(() => {});
      return;
    }
    return form(`${icone(o)} ${esc(o.nom || o.type)}`, o, [['nom', 'text', '', null, 'Nom'], ['brule', 'range', 'Combustion (0 = intact, 1 = consumé)', [0, 1, 0.05], 'Brûlé'], ['rot', 'number', 'Rotation (°) — touche R', null, 'Rotation'], ['x', 'number', '', null, 'x'], ['z', 'number', '', null, 'z'], ['y', 'number', 'Hauteur de pose', null, 'y'], ['L', 'number', 'Longueur', null, 'Longueur'], ['l', 'number', 'Largeur', null, 'Largeur'], ['id', 'text', '', null, 'Id']]);
  }
  if (s.t === 'ouverture') {
    const o = n.ouvertures[s.idx]; if (!o) return;
    return form('Ouverture', o, [['nom', 'text', '', null, 'Nom'], ['type', 'select', '', ['porte', 'fenetre', 'baie'], 'Type'], ['w', 'number', '', null, 'Largeur'], ['h', 'number', '', null, 'Hauteur'], ['allege', 'number', '', null, 'Allège'], ['fermee', 'bool', 'Porte fermée lors du feu', null, 'Fermée'], ['brise', 'bool', 'Vitrage rompu', null, 'Brisé'], ['garage', 'bool', '', null, 'Porte de garage']]);
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
      ['distracteurs', 'lines', 'Lectures erronées plausibles (une par ligne, facultatif)', null, 'Pièges'], ['ref', 'text', 'Chapitre / section, ex. 6.3.7.1 (affiché « NFPA 921 – chap. 6.3.7.1 »)', null, 'Réf. NFPA 921'], ['sources', 'lines', 'Autres sources qui illustrent ce constat, une par ligne. Facultatif : des sources sont proposées automatiquement selon la réf. NFPA 921.', null, 'Autres sources'],
      ['zone', 'select', '', ED.scn.zones.map(z => z.id), 'Zone'], ['outil', 'select', 'Outil nécessaire pour le relever', ['', 'jauge', 'arc', 'pid'], 'Outil'], ['indice', 'text', 'Message si l\'outil manque', null, 'Indice'],
      ['couche', 'number', 'Couche de fouille à retirer (0 = visible)', null, 'Couche'], ['prelevement', 'select', '', ['', ...(ED.scn.prelevements || []).map(p => p.id)], 'Prélèvement'], ['id', 'text', '', null, 'Id du fait']],
      `<div class="sec-t" style="margin-top:10px">Photos liées</div><div class="thumbs">${photos.map(p => ED.scn.medias[p.media] ? `<img src="${ED.scn.medias[p.media]}" title="${esc(p.titre)}">` : '').join('') || '<span class="small muted">Aucune (outil 📷 puis « constat lié »).</span>'}</div>${thermoEd(o)}`, e => lierThermo(e, o));
  }
  if (s.t === 'photo') {
    const p = ED.scn.photos.find(x => x.id === s.id); if (!p) return;
    return form('Photo épinglée', p, [['titre', 'text', '', null, 'Titre'], ['legende', 'textarea', '', null, 'Légende'], ['date', 'text', '', null, 'Date'], ['auteur', 'text', '', null, 'Auteur'],
      ['constat', 'select', 'Visible en jeu quand ce constat est relevé', ['', ...ED.scn.observations.map(o => o.id)], 'Constat lié'], ['yaw', 'range', 'Direction de prise de vue (°)', [-180, 180, 5], 'Orientation']],
      `${ED.scn.medias[p.media] ? `<img src="${ED.scn.medias[p.media]}" style="width:100%;border-radius:10px;margin-top:8px">` : '<p class="small" style="color:#c0392b">Aucune image.</p>'}<div style="display:flex;gap:6px;margin-top:6px"><button class="btn btn-sm" data-img>🖼️ ${p.media ? 'Remplacer' : 'Choisir'} l'image</button><button class="btn btn-sm" data-yaw>🎯 Orienter selon la vue</button></div>`,
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
    bat().niveaux.forEach(n => n.pieces.filter(p => !p.ouverte).forEach(p => { if (!ED.scn.zones.some(z => z.piece === p.id)) ED.scn.zones.push({ id: p.id, nom: bat().niveaux.length > 1 ? `${p.nom} (${n.nom})` : p.nom, piece: p.id, rang: Math.round((p.suie || 0) * 4), cible: [r2(p.x + p.w / 2), n.altitude || 0, r2(p.z + p.d / 2)], zoom: 1.4 }); }));
    changed(false); rendreFormulaires(el); toast('Zones générées. Ajustez le « rang » (niveau de dégâts) pour l\'ordre d\'examen.', 'ok');
  });
}

function apercuAnalyse() {
  const ov = h('<div class="ana-ov"></div>');
  document.body.appendChild(ov);
  const box = h('<div style="height:100%;display:flex"></div>'); ov.appendChild(box);
  ouvrirAnalyse(ED.scn, box, { onClose: () => ov.remove() });
}

function exportRetex() {
  const corps = `<p class="small muted">Le fichier s'ouvre hors ligne dans n'importe quel navigateur. Les photos, documents et modèles 3D y sont intégrés : vérifiez qu'ils peuvent être diffusés.</p>
    ${[['temoins', 'Remplacer les noms des témoins par « Témoin 1, 2… »', true], ['adresse', 'Masquer l\'adresse exacte (affiche le « lieu public »)', true], ['mandant', 'Masquer le mandant et sa référence', false], ['sansTemoins', 'Retirer toutes les déclarations', false], ['sansOsint', 'Retirer les sources ouvertes', false]].map(([k, l, c]) => `<label class="opt"><input type="checkbox" data-k="${k}" ${c ? 'checked' : ''}><span>${l}</span></label>`).join('')}`;
  modal({ titre: '⬇ Exporter le dossier RETEX', corps, actions: [{ label: 'Annuler', classe: 'btn-ghost' }, { label: 'Exporter', classe: 'btn-primary', onClick: el => {
    const o = Object.fromEntries($$('[data-k]', el).map(x => [x.dataset.k, x.checked]));
    exporterRetexHtml(ED.scn, o).then(n => toast(`Dossier exporté (${(n / 1048576).toFixed(1)} Mo).`, 'ok')).catch(e => toast('Export impossible : ' + esc(e.message), 'ko', 6000));
  } }] });
}

// ------------------------------------------------------------------ aide
function ouvrirAide() {
  const k = s => s.split('+').map(x => `<kbd>${x}</kbd>`).join('');
  modal({ titre: '❔ Aide de l\'Atelier', large: true, corps: `<div class="aide-g"><div>
    <h3>Créer une scène en 6 étapes</h3><ol class="etapes-a">
      <li><b>🏗️ Construire</b> : outil ⬛ <i>Pièce</i>, cliquez-glissez sur la grille. Ajoutez portes et fenêtres en survolant un mur.</li>
      <li><b>🟫 Sols & terrain</b> : allée, terrasse, parking… puis le terrain autour (herbe, sable, enrobé).</li>
      <li><b>🛋️ Objets</b> : choisissez dans le catalogue, cliquez pour poser. Importez vos <b>modèles 3D</b> (Blender .glb, SketchUp .dae/.obj/.stl, .fbx). Onglet <b>📋 Fiche technique</b> : matériau, PV de réaction au feu, photos, documents.</li>
      <li><b>🔥 Effets du feu</b> : couche chaude et suie par pièce, pinceaux sur les murs et les sols, objets brûlés.</li>
      <li><b>📍 Indices</b> : posez les constats et épinglez vos photos à l'endroit de la prise de vue.</li>
      <li><b>🧾 Enquête</b> puis <b>📘 RETEX</b> : témoins, hypothèses, solution ; aperçu et export du dossier.</li></ol></div>
    <div><h3>Raccourcis clavier</h3><ul style="list-style:none;padding:0">
      <li>${k('Ctrl+Z')} Annuler · ${k('Ctrl+Y')} ou ${k('Ctrl+Maj+Z')} Rétablir</li>
      <li>${k('Ctrl+C')} Copier · ${k('Ctrl+V')} Coller · ${k('Ctrl+D')} Dupliquer</li>
      <li>${k('Suppr')} Supprimer la sélection · ${k('Échap')} Désélectionner / quitter l'outil</li>
      <li>${k('←')}${k('→')}${k('↑')}${k('↓')} Déplacer de 5 cm (avec ${k('Maj')} : 25 cm)</li>
      <li>${k('R')} Pivoter l'objet de 90° (${k('Maj+R')} : 15°)</li>
      <li>${k('Q')} / ${k('E')} Pivoter la vue · ${k('G')} Grille</li>
      <li>${k('1')} à ${k('5')} Changer de mode</li>
      <li>${k('V')} Sélection · ${k('P')} Pièce · ${k('T')} Sols · ${k('O')} Porte · ${k('F')} Fenêtre · ${k('X')} Gomme</li>
      <li>${k('Ctrl+S')} Enregistrer le brouillon · ${k('H')} ou ${k('?')} Cette aide</li></ul>
      <h3>Souris</h3><p>Clic : sélectionner / poser · glisser : déplacer · bord d'une pièce : redimensionner · molette : zoom · clic droit glissé : déplacer la vue.</p></div></div>`, actions: [{ label: 'C\'est parti !', classe: 'btn-primary' }] });
}

// ------------------------------------------------------------------ modes & fichier
function changerMode(m) {
  ED.mode = m; ED.sel = null; ED.drag = null; helpers.prev.visible = false;
  ED.outil = m === 'effets' ? 'piecefx' : 'select';
  $('#screen').className = `ed3 mode-${m}`;
  $('#murs').value = m === 'effets' ? 'auto' : 'bas';
  rendreTout(); reconstruire();
  setTimeout(() => S.resize(), 30);
}

function charger(scn, msg) {
  ED.scn = migrer(structuredClone(scn));
  ED.scn.modeles ||= {}; ED.scn.medias ||= {};
  ED.niv = 0; ED.sel = null; ctxF.ouverts.clear();
  HIST.pile = []; HIST.i = -1; pousserHist();
  rendreNiveaux(); rendreTout();
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

function clavier(e) {
  if ($('.modal-bg')) return;
  const dansChamp = e.target.closest('input,textarea,select,[contenteditable]');
  const k = e.key.toLowerCase(), ctrl = e.ctrlKey || e.metaKey;
  if (ctrl && k === 's') { e.preventDefault(); idbEcrire('brouillon', ED.scn); toast('💾 Brouillon enregistré dans ce navigateur.', 'ok', 1500); return; }
  if (dansChamp) return;
  if (ctrl && k === 'z' && !e.shiftKey) { e.preventDefault(); return annuler(); }
  if (ctrl && (k === 'y' || (k === 'z' && e.shiftKey))) { e.preventDefault(); return retablir(); }
  if (ctrl && k === 'c') { if (copier()) toast('Copié.', 'info', 900); return; }
  if (ctrl && k === 'v') { e.preventDefault(); return coller(); }
  if (ctrl && k === 'd') { e.preventDefault(); if (copier()) coller(); return; }
  if (ctrl) return;
  if (['enquete', 'retex'].includes(ED.mode) && !/^[1-5]$/.test(k)) return;
  if (/^[1-5]$/.test(k)) return changerMode(MODES[+k - 1][0]);
  if (k === 'q') S.rotateView(-45); if (k === 'e') S.rotateView(45);
  if (k === 'g') { $('#grille').checked = !$('#grille').checked; helpers.grid.visible = $('#grille').checked; }
  if (k === 'h' || k === '?') return ouvrirAide();
  if (k === 'escape') { if (ED.outil !== 'select' && ED.outil !== 'piecefx') choisirOutil(ED.mode === 'effets' ? 'piecefx' : 'select'); else selectionner(null); ED.drag = null; helpers.prev.visible = false; etiquette(null); return; }
  if ((k === 'delete' || k === 'backspace') && ED.sel) { e.preventDefault(); return supprimer(ED.sel); }
  if (k === 'r' && ED.sel?.t === 'objet') { const o = nivCur().objets.find(x => x.id === ED.sel.id); o.rot = ((o.rot || 0) + (e.shiftKey ? 15 : 90)) % 360; changed(); rendreInspecteur(); return; }
  const pas = e.shiftKey ? 0.25 : 0.05;
  const fl = { arrowleft: [-pas, 0], arrowright: [pas, 0], arrowup: [0, -pas], arrowdown: [0, pas] }[k];
  if (fl && ED.sel) { e.preventDefault(); return deplacer(...fl); }
  const raccourcis = ED.mode === 'construire' ? { v: 'select', p: 'piece', t: 'sol', o: 'porte', f: 'fenetre', x: 'gomme' } : ED.mode === 'indices' ? { v: 'select', x: 'gomme' } : {};
  if (raccourcis[k]) choisirOutil(raccourcis[k]);
}

async function init() {
  S = new Scene3D($('#edPrev'), { editeur: true });
  S.editeurCoupe = true;
  initHelpers();
  S.onPointer = onPointer;
  S.onPick = () => {};
  ctxF.pick = cb => { ctxF._attente = cb; $('#pickHint').hidden = false; };
  $('#murs').onchange = () => S.setModeMurs($('#murs').value);
  $('#grille').onchange = () => { helpers.grid.visible = $('#grille').checked; };
  $('#fouilleV').oninput = e => S.setFouille(+e.target.value);
  $$('[data-rot]').forEach(b => b.onclick = () => S.rotateView(+b.dataset.rot));
  $('#bUndo').onclick = annuler; $('#bRedo').onclick = retablir;
  $('#bAide').onclick = ouvrirAide;
  document.addEventListener('keydown', clavier);
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
  try { if (!localStorage.getItem('rcci-atelier-aide')) { localStorage.setItem('rcci-atelier-aide', '1'); ouvrirAide(); } } catch { /* stockage indisponible */ }
}

init();
// accès de test
window.__ed = { ED, HIST, annuler, retablir, proj: (x, y, z) => { const v = new THREE.Vector3(x, y, z).project(S.camera); const r = S.renderer.domElement.getBoundingClientRect(); return [(v.x + 1) / 2 * r.width, (1 - v.y) / 2 * r.height]; } };
