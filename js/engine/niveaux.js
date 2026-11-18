// Niveaux : compatibilité avec l'ancien format (pièces à la racine du bâtiment)
export function niveauxDe(bat) {
  if (bat.niveaux?.length) return bat.niveaux;
  return [{ id: 'rdc', nom: 'Rez-de-chaussée', altitude: 0, hauteur: bat.hauteur || 2.5, pieces: bat.pieces || [], ouvertures: bat.ouvertures || [], objets: bat.objets || [], traces: bat.traces || [], tremies: [] }];
}
export function niveauIndex(bat, id) { const n = niveauxDe(bat); const i = n.findIndex(x => x.id === id); return i < 0 ? 0 : i; }
export function altitudeDe(bat, id) { const n = niveauxDe(bat); return (n.find(x => x.id === id) || n[0]).altitude || 0; }
export function toutesPieces(bat) { return niveauxDe(bat).flatMap((n, i) => n.pieces.map(p => ({ ...p, _niv: i, _alt: n.altitude || 0 }))); }

