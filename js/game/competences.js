// Compétences de l'enquêteur : de l'expérience par domaine, gagnée en analysant (enquêtes et laboratoire).
// Chaque niveau augmente les honoraires ; le niveau 3 débloque un avantage concret en enquête.

export const DOMAINES = [
  { id: 'methode', ic: '📐', nom: 'Méthode', desc: 'Sécurité, ordre d\'examen, photos, fouille.',
    avantage: { nom: 'Réflexe photo', desc: 'Avant de retirer une couche de fouille, la vue d\'ensemble est prise automatiquement.' } },
  { id: 'traces', ic: '🔥', nom: 'Lecture des tracés', desc: 'Interpréter les effets du feu : V, couche chaude, sols, verre, carbonisation.',
    avantage: { nom: 'Œil exercé', desc: 'Sur chaque indice, une lecture erronée est barrée d\'office.' } },
  { id: 'thermo', ic: '🌡️', nom: 'Températures', desc: 'Lire les matériaux fondus ou intacts pour estimer les températures atteintes.',
    avantage: { nom: 'Thermomètre mental', desc: 'Les témoins de température brillent en orange dans la scène et leurs matériaux sont surlignés dans tes repères.' } },
  { id: 'elec', ic: '⚡', nom: 'Électricité', desc: 'Arcs, perles, circuits, appareils.',
    avantage: { nom: 'Œil d\'électricien', desc: 'Analyses de laboratoire sur les objets et conducteurs : −30 %.' } },
  { id: 'enquete', ic: '🗣️', nom: 'Entretiens & sources', desc: 'Questions ouvertes, sources ouvertes, recoupements.',
    avantage: { nom: 'Écoute active', desc: 'Les questions orientées sont signalées ⚠ avant que tu les poses.' } },
  { id: 'raisonnement', ic: '🧠', nom: 'Raisonnement', desc: 'Hypothèses, réfutations, certitude, classification.',
    avantage: { nom: 'Rigueur', desc: 'À la conclusion, le tuteur t\'indique si tes données suffisent pour « probable ».' } },
  { id: 'labo', ic: '🧪', nom: 'Prélèvements & labo', desc: 'Contenants, échantillons de comparaison, analyses.',
    avantage: { nom: 'Client fidèle', desc: 'Toutes les analyses de laboratoire : −20 %.' } },
];

export const PALIERS = [0, 120, 300, 600, 1000];
export const NOMS_NIVEAU = ['Novice', 'Apprenti', 'Confirmé', 'Expert', 'Maître'];

export function xpDe(c, d) { return c.competences?.[d] || 0; }
export function niveau(xp) { let n = 1; PALIERS.forEach((p, i) => { if (xp >= p) n = i + 1; }); return n; }
export function niveauDe(c, d) { return niveau(xpDe(c, d)); }
export function progression(xp) {
  const n = niveau(xp);
  if (n >= PALIERS.length) return { n, pct: 100, reste: 0 };
  const a = PALIERS[n - 1], b = PALIERS[n];
  return { n, pct: Math.round(100 * (xp - a) / (b - a)), reste: b - xp };
}
export const aAvantage = (c, d) => niveauDe(c, d) >= 3;

// +1 % d'honoraires par niveau gagné, tous domaines confondus
export function bonusHonoraires(c) {
  return DOMAINES.reduce((s, d) => s + (niveauDe(c, d.id) - 1), 0) / 100;
}

// Ajoute des points ; renvoie les montées de niveau
export function crediter(c, gains) {
  c.competences ||= {};
  const montees = [];
  for (const [d, v] of Object.entries(gains)) {
    if (!v) continue;
    const avant = niveauDe(c, d);
    c.competences[d] = Math.max(0, (c.competences[d] || 0) + Math.round(v));
    const apres = niveauDe(c, d);
    if (apres > avant) montees.push({ d, n: apres, dom: DOMAINES.find(x => x.id === d) });
  }
  return montees;
}

const estElec = o => /(^|[^\d.])(8(\.\d+)*|17\.4\.5)(\b|$)/.test(String(o?.analyse?.ref || o?.ref || '')) || /arc|perle|conducteur|disjonct|câble|cable/i.test(o?.titre || '');

// Expérience gagnée sur une enquête terminée
export function gainsEnquete(E, ev) {
  const g = { methode: 0, traces: 0, thermo: 0, elec: 0, enquete: 0, raisonnement: 0, labo: 0 };
  g.methode = ev.methode * 2;
  for (const [id, a] of E.analyses) if (a.ok) { if (estElec(E.obs(id))) g.elec += 18; else g.traces += 12; }
  for (const [, r] of E.releves) if (r.ok) g.thermo += 22;
  let q = 0, orient = 0;
  for (const [tid, set] of E.temoins) { const t = E.scn.temoins.find(x => x.id === tid); for (const qid of set) { const qq = t?.questions.find(x => x.id === qid); if (qq?.type === 'orientee') orient++; else q++; } }
  g.enquete = Math.max(0, q * 6 + E.osint.ajoutes.size * 10 - orient * 15);
  const ana = ev.det.analyse, concl = ev.det.conclusion;
  const pts = (arr, deb) => arr.find(d => d.titre.startsWith(deb))?.pts || 0;
  g.raisonnement = pts(ana, 'Hypothèses alternatives') * 6 + pts(ana, 'Réfutations') * 8 + pts(concl, 'Niveau de certitude') * 4 + pts(concl, 'Classification') * 3 + pts(concl, 'Zone d\'origine') * 2 + pts(concl, 'Cause') * 2;
  g.labo = E.scelles.filter(s => s.okCont).length * 15 + E.scelles.filter(s => s.temoin).length * 10 + E.scelles.reduce((s, x) => s + Object.keys(x.resultats).length, 0) * 8;
  const f = ev.deja ? 0.5 : 1;
  for (const k of Object.keys(g)) g[k] = Math.round(g[k] * f);
  return g;
}
