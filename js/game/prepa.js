// Préparation d'un scénario : migration de format, analyses générées, contrôle de jouabilité
import { niveauxDe } from '../engine/niveaux.js';
import { rng } from '../engine/textures.js';
import { optionsThermo } from '../data/thermique.js';

// Convertit l'ancien format (pièces à la racine) vers le format à niveaux. Modifie l'objet.
export function migrer(scn) {
  const bat = scn.batiment || (scn.batiment = {});
  if (!bat.niveaux?.length) {
    bat.niveaux = niveauxDe(bat).map(n => ({ ...n }));
    delete bat.pieces; delete bat.ouvertures; delete bat.objets; delete bat.traces;
  }
  for (const n of bat.niveaux) { n.pieces ||= []; n.ouvertures ||= []; n.objets ||= []; n.traces ||= []; n.tremies ||= []; n.hauteur ||= bat.hauteur || 2.5; n.altitude ||= 0; }
  const n0 = bat.niveaux[0].id;
  for (const o of scn.observations || []) o.niveau ||= n0;
  for (const p of scn.photos || []) p.niveau ||= n0;
  for (const h of scn.hypotheses?.origines || []) h.niveau ||= n0;
  if (scn.fouille) scn.fouille.niveau ||= n0;
  scn.photos ||= []; scn.medias ||= {};
  return scn;
}

const GENERIQUES = [
  'Sans valeur pour la détermination de l\'origine et de la cause : à écarter.',
  'Désigne à lui seul le point d\'origine du feu.',
  'Prouve à lui seul l\'emploi d\'un liquide inflammable.',
];

// Génère les interprétations proposées pour les constats saisis en mode RETEX (lecture réelle + distracteurs)
export function completerAnalyses(scn) {
  const obs = scn.observations || [];
  for (const o of obs) {
    if (o.analyse?.options?.length >= 2) continue;
    if (!o.lecture) { if (o.analyse && !o.analyse.options?.length) o.analyse = null; continue; }
    const r = rng([...o.id].reduce((s, c) => s + c.charCodeAt(0), 7));
    const autres = obs.filter(x => x !== o && x.lecture).map(x => x.lecture);
    const pool = [...(o.distracteurs || []), ...autres.sort(() => r() - 0.5).slice(0, 2), ...GENERIQUES].filter(t => t && t !== o.lecture);
    const fausses = [...new Set(pool)].slice(0, Math.max(2, (o.distracteurs || []).length)).map(t => ({ t, ok: false, fb: o.lectureFb || `Lecture attendue : ${o.lecture}` }));
    const opts = [{ t: o.lecture, ok: true, fb: o.lectureFb || '' }, ...fausses].sort(() => r() - 0.5);
    o.analyse = { question: o.question || 'Comment interprétez-vous cette constatation ?', ref: o.ref || o.analyse?.ref || '', options: opts };
  }
  return scn;
}

// Témoins de température : interprétations générées à partir des matériaux fondus / intacts
export function completerThermo(scn) {
  for (const o of scn.observations || []) {
    const th = o.thermo;
    if (!th?.items?.length) { if (th && !th.items?.length) delete o.thermo; continue; }
    if (th.options?.length >= 2) continue;
    const r = rng([...o.id].reduce((s, c) => s + c.charCodeAt(0), 11));
    th.options = optionsThermo(th).sort(() => r() - 0.5);
    th.question ||= 'Quelle température a régné à cet endroit ?';
    th.ref ||= '6.2.2 / 6.2.8';
  }
  return scn;
}

export function preparerJeu(src) {
  const scn = migrer(structuredClone(src));
  completerAnalyses(scn);
  completerThermo(scn);
  if (!scn.reconstitution?.length || scn.reconstitution.length < 2) {
    scn.reconstitution = [{ t: 'T0', titre: 'Départ de feu', feu: 0.2, fumee: {} }, { t: 'T+', titre: 'Développement', feu: 0.8, fumee: {} }, { t: 'Fin', titre: 'Extinction', feu: 0, fumee: {} }];
  }
  scn.securite ||= { ref: '12', options: [{ id: 'epi', t: 'Porter les EPI adaptés (protection respiratoire, gants, casque)', ok: true }, { id: 'struct', t: 'Évaluer la stabilité de la structure avant d\'entrer', ok: true }, { id: 'sans', t: 'Entrer sans protection : le feu est éteint', ok: false, fb: 'Les débris restent toxiques (NFPA 921, chap. 12.5 et 12.6).' }] };
  for (const k of ['rapportSdis', 'temoins', 'osint', 'prelevements', 'pid', 'observations', 'zones']) scn[k] ||= [];
  scn.mission ||= {};
  scn.recompense ||= { credits: 2000, bonusMax: 1000, xp: 300 };
  scn.solution ||= {};
  scn.solution.pieges ||= []; scn.solution.faitsCles ||= [];
  scn.hypotheses ||= { origines: [], causes: [] };
  return scn;
}

// Le scénario peut-il être joué (et noté) ?
export function jouabilite(src) {
  const scn = preparerJeu(src);
  const m = [];
  if ((scn.zones || []).length < 2) m.push('au moins 2 zones d\'examen');
  if (!(scn.zones || []).some(z => z.exterieur)) m.push('une zone extérieure');
  if ((scn.observations || []).length < 3) m.push('au moins 3 constats');
  if ((scn.observations || []).some(o => !o.analyse?.options?.length && !o.thermo?.options?.length)) m.push('une lecture (interprétation) ou des témoins de température pour chaque constat');
  if ((scn.hypotheses.origines || []).length < 2) m.push('au moins 2 hypothèses d\'origine');
  if ((scn.hypotheses.causes || []).length < 2) m.push('au moins 2 hypothèses de cause');
  if (!scn.hypotheses.origines.some(o => o.id === scn.solution.origine)) m.push('l\'origine retenue (solution)');
  if (scn.solution.cause && !scn.hypotheses.causes.some(o => o.id === scn.solution.cause)) m.push('la cause retenue (solution)');
  return { ok: !m.length, manques: m };
}
