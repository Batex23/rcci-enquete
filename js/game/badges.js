// Étoiles et badges
export const etoiles = score => score >= 90 ? 3 : score >= 70 ? 2 : score >= 40 ? 1 : 0;

export const BADGES = [
  { id: 'premiere', ic: '🔥', nom: 'Baptême du feu', desc: 'Terminer sa première enquête' },
  { id: 'methodique', ic: '📐', nom: 'Méthodique', desc: 'Aucun écart de méthode' },
  { id: 'oeil', ic: '🦅', nom: 'Œil de lynx', desc: 'Trouver tous les indices d\'une scène' },
  { id: 'photographe', ic: '📸', nom: 'Photographe', desc: 'Photographier tous les indices trouvés' },
  { id: 'lucide', ic: '🧠', nom: 'Lucide', desc: 'Ne tomber dans aucun piège' },
  { id: 'impartial', ic: '⚖️', nom: 'Impartial', desc: 'Aucune question orientée, aucune donnée contaminée' },
  { id: 'trois', ic: '⭐', nom: 'Expertise', desc: 'Obtenir 3 étoiles' },
  { id: 'tous', ic: '🏆', nom: 'Carrière lancée', desc: 'Réussir les trois premières enquêtes' },
  { id: 'thermo', ic: '🌡️', nom: 'Thermomètre', desc: 'Estimer juste toutes les températures d\'une scène (au moins 2)' },
  { id: 'specialiste', ic: '🎓', nom: 'Spécialiste', desc: 'Atteindre le niveau 3 dans une compétence' },
  { id: 'assidu', ic: '🥼', nom: 'Blouse blanche', desc: 'Réussir une expérience du laboratoire sans faute' },
  { id: 'polyvalent', ic: '🧭', nom: 'Polyvalent', desc: 'Atteindre le niveau 2 dans toutes les compétences' },
];

export function badgesGagnes(E, ev) {
  const scn = E.scn, ids = [];
  ids.push('premiere');
  if (!E.violations.length) ids.push('methodique');
  const visibles = scn.observations.filter(o => !o.cachee);
  if (visibles.every(o => E.decouverts.has(o.id))) ids.push('oeil');
  if (E.decouverts.size && [...E.decouverts.keys()].every(id => E.photoObs.has(id))) ids.push('photographe');
  if (!ev.pieges.some(p => p.etat === 'tombe')) ids.push('lucide');
  if (!E.violations.some(v => v.type === 'question-orientee') && ev.det.analyse.find(d => d.titre.startsWith('Pas de donnée'))?.ok) ids.push('impartial');
  if (etoiles(ev.total) === 3) ids.push('trois');
  if (E.releves.size >= 2 && [...E.releves.values()].every(r => r.ok) && E.releves.size >= scn.observations.filter(o => o.thermo?.options?.length && !o.cachee).length) ids.push('thermo');
  return ids;
}
