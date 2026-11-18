// Témoins de température : fusion, ramollissement et déformation des matériaux.
// Valeurs approchées d'après la NFPA 921 (2011), tableau 6.2.8.2, recoupées avec le CNPP (EP 02-11, § 2.2.2)
// et le tableau mnémotechnique de l'auteur. Ce sont des ordres de grandeur pédagogiques : la composition
// réelle d'un objet varie, seule une analyse en laboratoire donne une valeur fiable (NFPA 921, chap. 6.2.2.1).

export const FUSIONS = [
  { id: 'paraffine', nom: 'Paraffine, cire de bougie', ex: 'bougies, cires', t: 55, plage: '49–75', famille: 'divers' },
  { id: 'pvc', nom: 'PVC', ex: 'gaines électriques, goulottes, menuiseries, tuyaux', t: 90, plage: '75–105', famille: 'plastique' },
  { id: 'acrylique', nom: 'Acrylique (PMMA)', ex: 'plexiglas, diffuseurs de luminaires', t: 100, plage: '90–105', famille: 'plastique' },
  { id: 'abs', nom: 'ABS', ex: 'coques d\'appareils, prises, jouets', t: 105, plage: '88–125', famille: 'plastique' },
  { id: 'pe', nom: 'Polyéthylène', ex: 'bidons, sacs, films', t: 130, plage: '122–135', famille: 'plastique' },
  { id: 'ps', nom: 'Polystyrène', ex: 'isolants, emballages, gobelets', t: 140, plage: '120–160', famille: 'plastique' },
  { id: 'pp', nom: 'Polypropylène', ex: 'bacs, boîtiers, pare-chocs', t: 165, plage: '160–170', famille: 'plastique' },
  { id: 'soudure', nom: 'Soudure à l\'étain', ex: 'cartes électroniques, raccords de plomberie', t: 180, plage: '135–185', famille: 'métal' },
  { id: 'nylon', nom: 'Polyamide (nylon)', ex: 'colliers, engrenages, textiles', t: 220, plage: '176–265', famille: 'plastique' },
  { id: 'etain', nom: 'Étain', ex: 'objets décoratifs, soudures', t: 232, plage: '232', famille: 'métal' },
  { id: 'plomb', nom: 'Plomb', ex: 'solins de toiture, plombs de pêche, batteries', t: 327, plage: '327', famille: 'métal' },
  { id: 'zamac', nom: 'Zamac (« métal blanc »)', ex: 'poignées de porte, robinetterie, boîtiers moulés', t: 380, plage: '300–400', famille: 'métal' },
  { id: 'zinc', nom: 'Zinc', ex: 'gouttières, chéneaux, galvanisation', t: 420, plage: '375–420', famille: 'métal' },
  { id: 'aciersouple', nom: 'Acier de structure (perte de résistance)', ex: 'poutrelles, montants, étagères métalliques', t: 540, plage: '≈ 540', famille: 'métal', seuil: 'déformation', atteint: 'déformé, affaissé', nonAtteint: 'droit, non déformé' },
  { id: 'alualliage', nom: 'Alliage d\'aluminium', ex: 'cadres de vélo, jantes, profilés, carters', t: 600, plage: '566–650', famille: 'métal' },
  { id: 'magnesium', nom: 'Alliage de magnésium', ex: 'pièces de moteur, jantes, carters', t: 640, plage: '627–650', famille: 'métal' },
  { id: 'alu', nom: 'Aluminium', ex: 'conducteurs, feuilles, ustensiles', t: 660, plage: '660', famille: 'métal' },
  { id: 'verre', nom: 'Verre ordinaire (sodocalcique)', ex: 'vitrages, bouteilles, ampoules', t: 750, plage: '≈ 700–800 (ramollissement)', famille: 'divers', seuil: 'ramollissement', atteint: 'ramolli, coulé', nonAtteint: 'cassé ou intact, non coulé' },
  { id: 'laiton', nom: 'Laiton', ex: 'robinetterie, raccords, douilles, serrures', t: 930, plage: '900–1000', famille: 'métal' },
  { id: 'argent', nom: 'Argent', ex: 'bijoux, couverts', t: 960, plage: '960', famille: 'métal' },
  { id: 'bronze', nom: 'Bronze', ex: 'statuettes, robinetterie ancienne', t: 980, plage: '900–1050', famille: 'métal' },
  { id: 'or', nom: 'Or', ex: 'bijoux', t: 1063, plage: '1063', famille: 'métal' },
  { id: 'cuivre', nom: 'Cuivre', ex: 'conducteurs électriques, tuyauteries', t: 1082, plage: '1082', famille: 'métal' },
  { id: 'fonte', nom: 'Fonte', ex: 'radiateurs, poêles, tampons', t: 1350, plage: '1050–1400', famille: 'métal' },
  { id: 'acier', nom: 'Acier', ex: 'carrosseries, outils, structure', t: 1450, plage: '1427–1516', famille: 'métal' },
  { id: 'porcelaine', nom: 'Porcelaine', ex: 'sanitaires, isolateurs', t: 1550, plage: '1550', famille: 'divers' },
];

export const fusion = id => FUSIONS.find(f => f.id === id);
export const etatAtteint = m => m?.atteint || 'fondu';
export const etatNon = m => m?.nonAtteint || 'non fondu';
export const fmt = t => `≈ ${Math.round(t).toLocaleString('fr-FR')} °C`;

// Fourchette déduite d'une liste de témoins [{ mat, etat: 'fondu'|'intact', objet, alliage }]
// - un témoin fondu (seuil atteint) donne une température MINIMALE ;
// - un témoin intact (seuil non atteint) donne une température MAXIMALE ;
// - une fusion « par alliage » (métal à bas point de fusion au contact) ne prouve pas le seuil du métal hôte.
export function fourchette(items) {
  let bas = null, haut = null, alliage = null;
  for (const it of items || []) {
    const m = fusion(it.mat); if (!m) continue;
    if (it.etat === 'fondu') {
      if (it.alliage) { alliage = m; continue; }
      bas = Math.max(bas ?? -Infinity, m.t);
    } else haut = Math.min(haut ?? Infinity, m.t);
  }
  return { bas, haut, alliage };
}

export function libelle({ bas, haut }) {
  if (bas != null && haut != null) return `Entre ${fmt(bas)} et ${fmt(haut)}`;
  if (bas != null) return `Au moins ${fmt(bas)}`;
  if (haut != null) return `Moins de ${fmt(haut)}`;
  return 'Aucune estimation possible';
}

// Interprétations proposées au joueur (une juste, des erreurs de raisonnement typiques)
export function optionsThermo(th) {
  const f = fourchette(th.items);
  const ok = { t: libelle(f), ok: true, fb: th.fb || `Un témoin fondu donne une température minimale atteinte à cet endroit, un témoin intact une température maximale.${f.alliage ? ` La fusion apparente du ${f.alliage.nom.toLowerCase()} s'explique par un alliage avec un métal à bas point de fusion : elle ne prouve pas ${fmt(f.alliage.t)}.` : ''}` };
  const opts = [ok];
  const push = (t, fb) => { if (t && !opts.some(o => o.t === t)) opts.push({ t, ok: false, fb }); };
  if (f.haut != null) push(`Au moins ${fmt(f.haut)}`, 'Raisonnement inversé : un témoin resté intact montre que sa température de fusion n\'a PAS été atteinte. Il fixe un maximum, pas un minimum.');
  if (f.bas != null) push(`Moins de ${fmt(f.bas)}`, 'Raisonnement inversé : un témoin fondu montre que sa température de fusion a été atteinte. Il fixe un minimum.');
  if (f.alliage) push(`Au moins ${fmt(f.alliage.t)}`, `Piège de l'alliage : un ${f.alliage.nom.toLowerCase()} « fondu » au contact de gouttes d'un métal à bas point de fusion (aluminium, zinc, plomb) a formé un alliage qui fond plus bas (NFPA 921, chap. 6.2.8.6 ; CNPP § 2.2.3).`);
  if ((f.bas ?? 0) >= 600) push('Une température anormalement élevée : signe d\'un accélérant', 'Mythe : le bois et l\'essence brûlent à des températures de flamme comparables. Une température élevée traduit surtout la durée et la ventilation, pas un accélérant (NFPA 921, chap. 6.2.2.2).');
  push('Rien à en tirer : la fusion dépend de trop de facteurs', 'Faux : avec prudence, un matériau fondu ou intact renseigne sur la température minimale ou maximale atteinte à cet endroit (NFPA 921, chap. 6.2.2.4).');
  for (const o of th.distracteurs || []) push(o.t, o.fb);
  return opts.slice(0, 4);
}
