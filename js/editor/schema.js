// Schéma des formulaires de l'éditeur formateur
import { toutesPieces } from '../engine/niveaux.js';
const SOLS = ['stratifie', 'parquet', 'carrelage', 'beton'];
const OBJETS = ['canape', 'lampadaire', 'multiprise', 'prise', 'cable', 'meubleTV', 'tv', 'tableBasse', 'tapis', 'etagere', 'debris', 'cuisine', 'frigo', 'table', 'lit', 'armoire', 'bureau', 'baignoire', 'tableauElec', 'tondeuse', 'jerrican', 'etabli', 'daaf', 'voiture'];
const TRACES = ['V', 'cleanburn', 'calcination', 'protegee', 'demarcation', 'irregulier', 'consomme', 'debris'];
const COTES = ['N', 'S', 'E', 'W', 'sol'];
const OUTILS_REQ = ['', 'jauge', 'arc', 'pid'];
const SOURCES = ['reseaux', 'meteo', 'rappel', 'presse', 'cadastre', 'societes'];
const CLASS = ['accidentelle', 'naturelle', 'volontaire', 'indeterminee'];

export const SECTIONS = [
  { id: 'general', titre: 'Général & mission', champs: [
    ['id', 'text', 'Identifiant unique (sans espace)'], ['titre', 'text'], ['type', 'select', '', ['habitation', 'vehicule', 'industriel', 'erp', 'vegetation']],
    ['difficulte', 'number'], ['gradeMin', 'number', 'Grade minimal (0 = stagiaire)'], ['resume', 'textarea'],
    ['recompense.credits', 'number'], ['recompense.bonusMax', 'number'], ['recompense.xp', 'number'],
    ['mission.mandant', 'text'], ['mission.reference', 'text'], ['mission.dateSinistre', 'text'], ['mission.heureAlerte', 'text'],
    ['mission.adresse', 'text'], ['mission.ordre', 'textarea'], ['mission.preservation', 'textarea'],
    ['rapportSdis', 'lines', 'Une ligne par événement'], ['meteo', 'textarea'],
  ] },
  { id: 'securite', titre: 'Sécurité de la scène', champs: [['securite.ref', 'text']], liste: { chemin: 'securite.options', resume: o => o.t, modele: { id: 'nouv', t: 'Mesure de sécurité', ok: true }, champs: [['id', 'text'], ['t', 'textarea', 'Mesure proposée'], ['ok', 'bool', 'Mesure correcte'], ['fb', 'textarea', 'Correction si choisie à tort']] } },
  { id: 'pieces', titre: 'Bâtiment — pièces', apercu: true, champs: [['batiment.hauteur', 'number'], ['batiment.epaisseur', 'number'], ['batiment.terrasse', 'json'], ['batiment.allee', 'json']],
    liste: { chemin: 'batiment.pieces', resume: o => `${o.id} — ${o.nom}`, modele: { id: 'piece', nom: 'Pièce', x: 0, z: 0, w: 4, d: 3, sol: 'parquet', peinture: '#ddd6c6', couche: 1.5, suie: 0.3 },
      champs: [['id', 'text'], ['nom', 'text'], ['x', 'number'], ['z', 'number'], ['w', 'number', 'Largeur (x)'], ['d', 'number', 'Profondeur (z)'], ['sol', 'select', '', SOLS], ['peinture', 'color'], ['couche', 'json', 'Hauteur de la couche chaude (m) ou {x0,y0,x1,y1}'], ['suie', 'number', 'Densité de suie 0–1']] } },
  { id: 'ouvertures', titre: 'Bâtiment — ouvertures', apercu: true, liste: { chemin: 'batiment.ouvertures', resume: o => `${o.type} (${o.x}, ${o.z})`, modele: { type: 'porte', x: 1, z: 0, axe: 'h', w: 0.9, h: 2 },
    champs: [['type', 'select', '', ['porte', 'fenetre', 'baie']], ['x', 'number'], ['z', 'number'], ['axe', 'select', 'h = mur le long de x, v = le long de z', ['h', 'v']], ['w', 'number'], ['h', 'number'], ['allege', 'number'], ['fermee', 'bool'], ['brise', 'bool', 'Vitrage rompu'], ['garage', 'bool', 'Porte de garage']] } },
  { id: 'objets', titre: 'Bâtiment — mobilier & objets', apercu: true, liste: { chemin: 'batiment.objets', resume: o => `${o.id} (${o.type})`, modele: { id: 'objet', type: 'table', x: 1, z: 1, rot: 0, brule: 0 },
    champs: [['id', 'text'], ['type', 'select', '', OBJETS], ['x', 'number'], ['z', 'number'], ['y', 'number'], ['rot', 'number', 'Rotation (°)'], ['L', 'number', 'Longueur'], ['w', 'number'], ['d', 'number'], ['brule', 'number', 'Combustion 0–1'], ['points', 'json', 'Câble : [[x,y,z], …]']] } },
  { id: 'traces', titre: 'Tracés & effets du feu', apercu: true, liste: { chemin: 'batiment.traces', resume: o => `${o.piece} · ${o.cote} · ${o.type}`, modele: { piece: 'sejour', cote: 'W', type: 'V', u: 1, y0: 0.2, angle: 30, force: 1 },
    champs: [['piece', 'text', 'Id de pièce ou « exterieur »'], ['cote', 'select', 'Mur (N/S/E/W) ou sol', COTES], ['type', 'select', '', TRACES], ['ligne', 'number', 'Façade : coordonnée du mur'],
      ['u', 'number', 'Position le long du mur'], ['y0', 'number', 'Sommet bas du V'], ['angle', 'number', 'Demi-angle du V (°)'], ['force', 'number'], ['y', 'number'], ['rx', 'number'], ['ry', 'number'],
      ['u0', 'number'], ['u1', 'number'], ['y1', 'number'], ['x', 'number', 'Sol : x'], ['z', 'number', 'Sol : z'], ['rz', 'number'], ['seed', 'number'], ['densite', 'number'], ['remplissage', 'select', '', ['', 'suie', 'clean']]] } },
  { id: 'zones', titre: 'Zones d\'examen', apercu: true, liste: { chemin: 'zones', resume: o => `${o.id} — ${o.nom}`, modele: { id: 'zone', nom: 'Zone', piece: '', rang: 1, cible: [0, 0, 0], zoom: 1.3 },
    champs: [['id', 'text'], ['nom', 'text'], ['exterieur', 'bool'], ['piece', 'text', 'Pièce associée (vide si extérieur)'], ['rang', 'number', 'Niveau de dégâts apparent 0–4 (ordre d\'examen)'], ['cible', 'vec3', 'Point visé par la caméra'], ['zoom', 'number'], ['desc', 'text']] } },
  { id: 'observations', titre: 'Constatations (indices)', apercu: true, liste: { chemin: 'observations', resume: o => `${o.id} — ${o.titre}`, modele: { id: 'F99', zone: '', pos: [0, 0.5, 0], titre: 'Constat', description: '', analyse: { question: 'Que traduit cette constatation ?', ref: '', options: [{ t: 'Bonne lecture', ok: true, fb: '' }, { t: 'Lecture erronée', ok: false, fb: '' }] } },
    champs: [['id', 'text', 'Identifiant du fait (ex. F30)'], ['zone', 'text'], ['pos', 'vec3', 'Position dans la scène'], ['titre', 'text'], ['description', 'textarea', 'Constat objectif, sans interprétation'],
      ['couche', 'number', 'Couche de fouille à retirer avant découverte (0 = visible)'], ['outil', 'select', 'Outil nécessaire', OUTILS_REQ], ['indice', 'textarea', 'Message si l\'outil manque'], ['cachee', 'bool', 'Découverte uniquement par un outil (ex. PID)'], ['prelevement', 'text', 'Id du prélèvement possible'],
      ['analyse.question', 'text'], ['analyse.ref', 'text', 'Référence NFPA 921'],
      ['analyse.options', 'liste', 'Interprétations proposées', { resume: o => `${o.ok ? '✔' : '✗'} ${o.t}`, modele: { t: 'Interprétation', ok: false, fb: '' }, champs: [['t', 'textarea'], ['ok', 'bool', 'Correcte'], ['fb', 'textarea', 'Retour pédagogique']] }]] } },
  { id: 'fouille', titre: 'Fouille', apercu: true, champs: [['fouille.zone', 'text'], ['fouille.aire', 'json', '{x, z, w, d}'], ['fouille.ref', 'text']],
    liste: { chemin: 'fouille.couches', resume: o => `${o.n}. ${o.nom}`, modele: { n: 1, nom: 'Couche', description: '', h: 0.1, couleur: '#555555' }, champs: [['n', 'number', '1 = couche supérieure'], ['nom', 'text'], ['description', 'textarea'], ['h', 'number'], ['couleur', 'color']] } },
  { id: 'pid', titre: 'Lectures PID', liste: { chemin: 'pid', resume: o => `${o.valeur} (${o.x}, ${o.z})`, modele: { x: 0, z: 0, r: 0.8, valeur: '0,3 ppm' }, champs: [['x', 'number'], ['z', 'number'], ['r', 'number', 'Rayon'], ['valeur', 'text'], ['fait', 'text', 'Constat (caché) révélé']] } },
  { id: 'prelevements', titre: 'Prélèvements & laboratoire', liste: { chemin: 'prelevements', resume: o => `${o.id} — ${o.nom}`, modele: { id: 'P9', nom: 'Prélèvement', type: 'objet', contenantsOK: ['carton'], analyses: [{ id: 'objet', nom: 'Examen', cout: 300, resultats: { ok: { fait: 'F98', texte: 'Résultat' } } }] },
    champs: [['id', 'text'], ['nom', 'text'], ['type', 'select', '', ['liquide', 'electrique', 'objet']], ['contenantsOK', 'csv', 'sachetPE, sachetPapier, carton, potMetal, bocal, sachetNylon'], ['temoinRequis', 'bool', 'Échantillon de comparaison requis'], ['temoin', 'text'],
      ['analyses', 'json', 'Analyses : [{id, nom, cout, resultats:{ok, sansTemoin, mauvaisContenant}}]']] } },
  { id: 'temoins', titre: 'Témoins & entretiens', liste: { chemin: 'temoins', resume: o => `${o.avatar || ''} ${o.nom}`, modele: { id: 'T9', nom: 'Témoin', role: '', avatar: '👤', questions: [] },
    champs: [['id', 'text'], ['nom', 'text'], ['role', 'text'], ['avatar', 'text', 'Emoji'],
      ['questions', 'liste', 'Questions', { resume: o => `[${o.type}] ${o.q}`, modele: { id: 'q', type: 'ouverte', q: 'Question', r: 'Réponse' }, champs: [['id', 'text'], ['type', 'select', '', ['ouverte', 'fermee', 'orientee']], ['q', 'textarea'], ['r', 'textarea'], ['fait', 'json', '{id, texte, contamine}'], ['piege', 'textarea', 'Correction si question orientée'], ['info', 'text', 'Piste donnée au joueur']] }]] } },
  { id: 'osint', titre: 'Sources ouvertes (OSINT)', liste: { chemin: 'osint', resume: o => o.titre, modele: { id: 'O9', source: 'reseaux', motsCles: [['mot']], titre: 'Résultat', extrait: '', fiabilite: '', fait: { id: 'F97', texte: '' } },
    champs: [['id', 'text'], ['source', 'select', '', SOURCES], ['pro', 'bool', 'Réservé à l\'abonnement OSINT pro'], ['motsCles', 'groupes', 'Groupes de mots-clés : « a, b ; c » = (a ET b) OU c'], ['titre', 'text'], ['extrait', 'textarea'], ['fiabilite', 'text'], ['piege', 'bool'], ['fait', 'json', '{id, texte}']] } },
  { id: 'hyp-o', titre: 'Hypothèses d\'origine', apercu: true, liste: { chemin: 'hypotheses.origines', resume: o => `${o.ok ? '✔ ' : ''}${o.id} — ${o.nom}`, modele: { id: 'OX', nom: 'Origine', pos: [0, 0.1, 0], soutien: [], refute: [] },
    champs: [['id', 'text'], ['nom', 'text'], ['niveau', 'text', 'Id du niveau (ex. rdc)'], ['pos', 'vec3'], ['ok', 'bool', 'Origine réelle'], ['soutien', 'csv', 'Faits qui la soutiennent'], ['refute', 'csv', 'Faits qui la réfutent']] } },
  { id: 'hyp-c', titre: 'Hypothèses de cause', liste: { chemin: 'hypotheses.causes', resume: o => `${o.ok ? '✔ ' : ''}${o.id} — ${o.nom}`, modele: { id: 'CX', nom: 'Cause', premierCombustible: '', source: '', classification: 'accidentelle', soutien: [], refute: [] },
    champs: [['id', 'text'], ['nom', 'textarea'], ['premierCombustible', 'text'], ['source', 'text'], ['classification', 'select', '', CLASS], ['ok', 'bool', 'Cause réelle'], ['origine', 'text'], ['soutien', 'csv'], ['refute', 'csv'], ['competence', 'json', '{source, tSource, combustible, tCombustible}']] } },
  { id: 'solution', titre: 'Solution & pièges', champs: [['solution.origine', 'text'], ['solution.cause', 'text'], ['solution.classification', 'select', '', CLASS], ['solution.certitude', 'select', '', ['probable', 'possible']],
    ['solution.probableSi', 'json', '{tous:[…], unParmi:[[…],[…]]} — faits nécessaires pour justifier « probable »'], ['solution.faitsCles', 'csv']],
    liste: { chemin: 'solution.pieges', resume: o => o.titre, modele: { id: 'piege', titre: 'Piège', ref: '', texte: '' }, champs: [['id', 'text'], ['titre', 'text'], ['ref', 'text'], ['texte', 'textarea']] } },
  { id: 'reconstitution', titre: 'Reconstitution (chronologie)', champs: [['dynamique', 'json', 'Données du calculateur : {L, l, H, ouvertures:[{nom,w,h}], combustible}']],
    liste: { chemin: 'reconstitution', resume: o => `${o.t} — ${o.titre}`, modele: { t: '00:00', titre: 'Étape', feu: 0.2, fumee: {} }, champs: [['t', 'text'], ['titre', 'textarea'], ['feu', 'number', 'Intensité 0–1'], ['flash', 'csv', 'Pièces en embrasement'], ['fumee', 'json', '{piece: niveau 0–1}']] } },
];

export function get(o, path) { return path.split('.').reduce((a, k) => (a == null ? undefined : a[k]), o); }
export function set(o, path, v) {
  const ks = path.split('.'); let a = o;
  for (let i = 0; i < ks.length - 1; i++) { if (a[ks[i]] == null) a[ks[i]] = {}; a = a[ks[i]]; }
  if (v === undefined || v === '' && !['titre', 'nom', 't', 'q', 'r', 'description'].includes(ks[ks.length - 1])) delete a[ks[ks.length - 1]]; else a[ks[ks.length - 1]] = v;
}

export function nouveauScenario() {
  return {
    id: 'scenario-' + Math.random().toString(36).slice(2, 7), version: 1, titre: 'Nouveau scénario', type: 'habitation', difficulte: 1, gradeMin: 0,
    recompense: { credits: 2000, bonusMax: 1000, xp: 300 }, resume: '',
    mission: { mandant: '', reference: '', dateSinistre: '', heureAlerte: '', adresse: '', ordre: '', preservation: '' },
    rapportSdis: [], meteo: '',
    securite: { ref: '12', options: [{ id: 'epi', t: 'Porter les EPI adaptés', ok: true }] },
    batiment: { hauteur: 2.5, epaisseur: 0.16, niveaux: [{ id: 'rdc', nom: 'Rez-de-chaussée', altitude: 0, hauteur: 2.5, pieces: [{ id: 'p1', nom: 'Séjour', x: 0, z: 0, w: 5, d: 4, sol: 'parquet', peinture: '#ddd6c6', couche: 2.5, suie: 0 }], ouvertures: [{ type: 'porte', x: 2.5, z: 4, axe: 'h', w: 0.9, h: 2.05 }], objets: [], traces: [], tremies: [] }] },
    zones: [{ id: 'abords', nom: 'Abords et extérieur', exterieur: true, rang: 0, cible: [2.5, 0, 2], zoom: 0.8 }, { id: 'p1', nom: 'Séjour', piece: 'p1', rang: 2, cible: [2.5, 0, 2], zoom: 1.4 }],
    photos: [], medias: {}, mode: 'retex',
    retex: { auteur: '', service: '', date: '', lieuPublic: '', confidentialite: 'Diffusion restreinte', resume: '', contexte: '', enseignements: [], positifs: [], ameliorations: [], recommandations: [] },
    observations: [], pid: [], fouille: null, prelevements: [], temoins: [], osint: [],
    hypotheses: { origines: [], causes: [] },
    solution: { origine: '', cause: '', classification: 'accidentelle', certitude: 'probable', probableSi: { tous: [], unParmi: [] }, faitsCles: [], pieges: [] },
    reconstitution: [{ t: '00:00', titre: 'Départ de feu', feu: 0.3, fumee: {} }, { t: '00:10', titre: 'Extinction', feu: 0, fumee: {} }],
  };
}

// Contrôle d'intégrité du scénario
export function valider(s) {
  const err = [], warn = [];
  const ids = (arr, key = 'id') => (arr || []).map(x => x[key]);
  const dup = (arr, lbl) => { const seen = new Set(); for (const i of arr) { if (seen.has(i)) err.push(`${lbl} : identifiant en double « ${i} »`); seen.add(i); } };
  if (!s.id || /\s/.test(s.id)) err.push('Identifiant du scénario manquant ou avec des espaces.');
  const pieces = toutesPieces(s.batiment || {}).map(p => p.id); dup(pieces, 'Pièces');
  const zones = ids(s.zones); dup(zones, 'Zones');
  for (const z of s.zones || []) if (z.piece && !pieces.includes(z.piece)) err.push(`Zone « ${z.id} » : pièce « ${z.piece} » inconnue.`);
  if (!(s.zones || []).some(z => z.exterieur)) warn.push('Aucune zone extérieure : l\'ordre extérieur → intérieur ne pourra pas être évalué.');
  const faits = new Set();
  dup(ids(s.observations), 'Constatations');
  for (const o of s.observations || []) {
    faits.add(o.id);
    if (o.thermo?.items?.length) faits.add(o.thermo.fait || `TH-${o.id}`);
    if (!zones.includes(o.zone)) err.push(`Constat ${o.id} : zone « ${o.zone} » inconnue.`);
    if (!Array.isArray(o.pos) || o.pos.length !== 3) err.push(`Constat ${o.id} : position invalide.`);
    const nOk = (o.analyse?.options || []).filter(x => x.ok).length;
    if (!o.lecture && (o.analyse?.options || []).length && nOk !== 1) err.push(`Constat ${o.id} : il faut exactement une interprétation correcte (${nOk}).`);
    if (!o.lecture && !(o.analyse?.options || []).length && !o.thermo?.items?.length) warn.push(`Constat ${o.id} : pas de lecture (interprétation) — non analysable en jeu.`);
    if (o.prelevement && !(s.prelevements || []).some(p => p.id === o.prelevement)) err.push(`Constat ${o.id} : prélèvement « ${o.prelevement} » inconnu.`);
    if (o.couche && !s.fouille) err.push(`Constat ${o.id} : couche de fouille sans fouille définie.`);
  }
  for (const t of s.temoins || []) for (const q of t.questions || []) if (q.fait?.id) faits.add(q.fait.id);
  for (const o of s.osint || []) if (o.fait?.id) faits.add(o.fait.id);
  for (const p of s.prelevements || []) for (const a of p.analyses || []) for (const r of Object.values(a.resultats || {})) if (r?.fait) faits.add(r.fait);
  for (const k of ['origines', 'causes']) for (const hy of s.hypotheses?.[k] || []) for (const f of [...(hy.soutien || []), ...(hy.refute || [])]) if (!faits.has(f)) warn.push(`Hypothèse ${hy.id} : fait « ${f} » introuvable.`);
  const sol = s.solution || {};
  if (!(s.hypotheses?.origines || []).some(o => o.id === sol.origine)) err.push('Solution : origine inconnue.');
  if (!(s.hypotheses?.causes || []).some(o => o.id === sol.cause)) err.push('Solution : cause inconnue.');
  if (s.fouille && !zones.includes(s.fouille.zone)) err.push('Fouille : zone inconnue.');
  if (!(s.reconstitution || []).length || s.reconstitution.length < 2) err.push('Reconstitution : au moins deux étapes.');
  return { err, warn, nFaits: faits.size };
}
