// Objets « intelligents » (à la manière du BIM) : chaque objet, pièce ou ouverture peut porter une fiche
// technique — matériau, réaction et résistance au feu, procès-verbal, fabricant, état, photos, documents.
import { fusion } from './thermique.js';

// Matériaux courants. « euro » : classement indicatif habituel du matériau nu, à remplacer par celui du PV.
export const MATERIAUX_BIM = [
  { id: 'bois', nom: 'Bois massif', famille: 'Bois', euro: 'D-s2,d0' },
  { id: 'panneau', nom: 'Panneau de particules / MDF', famille: 'Bois', euro: 'D-s2,d0' },
  { id: 'contreplaque', nom: 'Contreplaqué', famille: 'Bois', euro: 'D-s2,d0' },
  { id: 'parquet', nom: 'Parquet bois', famille: 'Bois', euro: 'Dfl-s1' },
  { id: 'platre', nom: 'Plaque de plâtre', famille: 'Minéral', euro: 'A2-s1,d0' },
  { id: 'beton', nom: 'Béton, maçonnerie', famille: 'Minéral', euro: 'A1' },
  { id: 'tuile', nom: 'Terre cuite (tuile, brique)', famille: 'Minéral', euro: 'A1' },
  { id: 'carrelage', nom: 'Carrelage, céramique', famille: 'Minéral', euro: 'A1fl' },
  { id: 'verre', nom: 'Verre', famille: 'Minéral', euro: 'A1', fusion: 'verre' },
  { id: 'lainer', nom: 'Laine de roche', famille: 'Isolant', euro: 'A1' },
  { id: 'lainev', nom: 'Laine de verre', famille: 'Isolant', euro: 'A1' },
  { id: 'pse', nom: 'Polystyrène expansé (PSE)', famille: 'Isolant', euro: 'E', fusion: 'ps' },
  { id: 'pur', nom: 'Mousse polyuréthane (PU)', famille: 'Isolant / mobilier', euro: 'E' },
  { id: 'pvc', nom: 'PVC', famille: 'Plastique', euro: 'B-s3,d0', fusion: 'pvc' },
  { id: 'pe', nom: 'Polyéthylène', famille: 'Plastique', euro: 'E', fusion: 'pe' },
  { id: 'pp', nom: 'Polypropylène', famille: 'Plastique', euro: 'E', fusion: 'pp' },
  { id: 'abs', nom: 'ABS', famille: 'Plastique', euro: 'E', fusion: 'abs' },
  { id: 'pmma', nom: 'Acrylique (PMMA)', famille: 'Plastique', euro: 'E', fusion: 'acrylique' },
  { id: 'textile', nom: 'Textile (coton, polyester)', famille: 'Textile', euro: 'F' },
  { id: 'moquette', nom: 'Moquette', famille: 'Textile', euro: 'Cfl-s1' },
  { id: 'cuir', nom: 'Cuir, simili', famille: 'Textile', euro: 'F' },
  { id: 'papier', nom: 'Papier, carton', famille: 'Cellulose', euro: 'F' },
  { id: 'acier', nom: 'Acier', famille: 'Métal', euro: 'A1', fusion: 'acier' },
  { id: 'alu', nom: 'Aluminium', famille: 'Métal', euro: 'A1', fusion: 'alu' },
  { id: 'cuivre', nom: 'Cuivre', famille: 'Métal', euro: 'A1', fusion: 'cuivre' },
  { id: 'zinc', nom: 'Zinc', famille: 'Métal', euro: 'A1', fusion: 'zinc' },
  { id: 'liion', nom: 'Batterie lithium-ion', famille: 'Énergie', euro: '' },
  { id: 'autre', nom: 'Autre (préciser)', famille: '', euro: '' },
];
export const materiauBim = id => MATERIAUX_BIM.find(m => m.id === id);

export const EUROCLASSES = ['A1', 'A2-s1,d0', 'A2-s2,d0', 'B-s1,d0', 'B-s2,d0', 'B-s3,d0', 'C-s1,d0', 'C-s2,d0', 'C-s3,d1', 'D-s1,d0', 'D-s2,d0', 'D-s3,d2', 'E', 'E-d2', 'F',
  'A1fl', 'A2fl-s1', 'Bfl-s1', 'Cfl-s1', 'Dfl-s1', 'Efl', 'Ffl', 'NPD (non déterminé)'];
export const CLASSES_M = ['M0', 'M1', 'M2', 'M3', 'M4', 'NC (non classé)'];
export const ETATS = ['neuf', 'bon état', 'usé', 'dégradé', 'non conforme', 'détruit par le feu'];
export const ENERGIES = ['', 'secteur 230 V', 'batterie lithium-ion', 'pile / accumulateur', 'gaz', 'fioul', 'bois / granulés', 'essence / gazole', 'aucune'];

export const CHAMPS_FICHE = [
  ['materiau', 'Matériau principal'], ['materiauLibre', 'Précision matériau'], ['euroclasse', 'Réaction au feu (Euroclasse)'], ['classementM', 'Classement M (ancien)'],
  ['resistanceFeu', 'Résistance au feu'], ['pvNumero', 'N° de PV'], ['pvLabo', 'Laboratoire'], ['pvDate', 'Date du PV'],
  ['fabricant', 'Fabricant'], ['reference', 'Référence / modèle'], ['pose', 'Date d\'installation'], ['energie', 'Alimentation'], ['puissance', 'Puissance (W)'],
  ['etat', 'État'], ['notes', 'Observations'],
];

export const ficheVide = f => !f || (!CHAMPS_FICHE.some(([k]) => f[k]) && !(f.photos || []).length && !(f.documents || []).length);

const esc = s => String(s ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;' }[ch]));

// Informations déduites du matériau (température de fusion, classement indicatif)
export function infosMateriau(f, { euro = true } = {}) {
  const m = materiauBim(f?.materiau); if (!m) return '';
  const fu = m.fusion && fusion(m.fusion);
  return [fu ? `🌡️ ${fu.seuil || 'fusion'} ≈ ${fu.plage} °C` : '', euro && m.euro && !f.euroclasse ? `classement indicatif du matériau nu : ${m.euro} (à confirmer par PV)` : ''].filter(Boolean).join(' · ');
}

// Fiche en lecture (vue Analyse, jeu, aperçu)
export function ficheHtml(f, medias = {}, titre = '') {
  if (ficheVide(f)) return '';
  const m = materiauBim(f.materiau);
  const lignes = [
    ['Matériau', [m && m.id !== 'autre' ? m.nom : '', f.materiauLibre].filter(Boolean).join(' — ')],
    ['Réaction au feu', [f.euroclasse, f.classementM].filter(Boolean).join(' · ')],
    ['Résistance au feu', f.resistanceFeu],
    ['Procès-verbal', [f.pvNumero && `n° ${f.pvNumero}`, f.pvLabo, f.pvDate].filter(Boolean).join(' · ')],
    ['Fabricant / modèle', [f.fabricant, f.reference].filter(Boolean).join(' · ')],
    ['Installation', f.pose], ['Alimentation', [f.energie, f.puissance && `${f.puissance} W`].filter(Boolean).join(' · ')],
    ['État', f.etat], ['Observations', f.notes],
  ].filter(([, v]) => v);
  const info = infosMateriau(f, { euro: false });
  const photos = (f.photos || []).filter(id => medias[id]);
  const docs = (f.documents || []).filter(d => medias[d.media]);
  return `<div class="fiche-bim">${titre ? `<div class="fb-t">📋 ${esc(titre)}</div>` : ''}
    <table>${lignes.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</table>
    ${info ? `<div class="fb-i">${esc(info)}</div>` : ''}
    ${photos.length ? `<div class="fb-ph">${photos.map(id => `<img src="${medias[id]}" alt="" data-zoom="${id}">`).join('')}</div>` : ''}
    ${docs.length ? `<div class="fb-docs">${docs.map(d => `<a href="${medias[d.media]}" download="${esc(d.nom)}" target="_blank" rel="noopener">📎 ${esc(d.nom)}</a>`).join('')}</div>` : ''}</div>`;
}

// Inventaire des éléments renseignés d'un dossier
export function inventaire(scn) {
  const out = [];
  for (const n of scn.batiment?.niveaux || [scn.batiment]) {
    if (!n) continue;
    for (const p of n.pieces || []) if (!ficheVide(p.fiche)) out.push({ type: 'Pièce', nom: p.nom, niveau: n.nom, fiche: p.fiche, ref: { t: 'piece', id: p.id } });
    (n.ouvertures || []).forEach((o, i) => { if (!ficheVide(o.fiche)) out.push({ type: 'Ouverture', nom: o.nom || o.type, niveau: n.nom, fiche: o.fiche, ref: { t: 'ouverture', idx: i } }); });
    for (const o of n.objets || []) if (!ficheVide(o.fiche)) out.push({ type: 'Objet', nom: o.nom || o.type, niveau: n.nom, fiche: o.fiche, ref: { t: 'objet', id: o.id } });
  }
  return out;
}
