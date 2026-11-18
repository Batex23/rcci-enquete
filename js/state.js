// Sauvegarde de la carrière (localStorage, avec repli en mémoire)
import { GRADES, OUTILS } from './data/outils.js';

const KEY = 'rcci-enquete.carriere.v1';
const KEY_SCN = 'rcci-enquete.scenarios.v1';
let memoire = null;
let memoireScn = null;

export function carriereVide() {
  return {
    nom: 'Enquêteur',
    xp: 0,
    credits: 2500,
    outils: OUTILS.filter(o => o.base).map(o => o.id),
    missions: {}, // id -> { meilleur, tentatives, dernier }
    reglages: { feedback: 'immediat', lueurs: true },
    journal: [],
  };
}

export function charger() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...carriereVide(), ...JSON.parse(raw) };
  } catch (e) { /* stockage indisponible */ }
  return memoire ? structuredClone(memoire) : carriereVide();
}

export function sauver(c) {
  memoire = structuredClone(c);
  try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) { /* ignoré */ }
}

export function reinitialiser() {
  memoire = null;
  try { localStorage.removeItem(KEY); } catch (e) { /* ignoré */ }
  return carriereVide();
}

export function grade(xp) {
  let g = GRADES[0];
  for (const x of GRADES) if (xp >= x.xp) g = x;
  const next = GRADES.find(x => x.xp > xp) || null;
  return { ...g, suivant: next };
}

export function possede(c, outil) {
  const o = OUTILS.find(x => x.id === outil);
  return !!(o?.base || c.outils.includes(outil));
}

// Scénarios créés avec l'éditeur formateur
export function scenariosPerso() {
  try {
    const raw = localStorage.getItem(KEY_SCN);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignoré */ }
  return memoireScn ? structuredClone(memoireScn) : [];
}
export function sauverScenarioPerso(scn) {
  const all = scenariosPerso().filter(s => s.id !== scn.id);
  all.push(scn);
  memoireScn = structuredClone(all);
  try { localStorage.setItem(KEY_SCN, JSON.stringify(all)); } catch (e) { return false; }
  return true;
}
export function supprimerScenarioPerso(id) {
  const all = scenariosPerso().filter(s => s.id !== id);
  memoireScn = all;
  try { localStorage.setItem(KEY_SCN, JSON.stringify(all)); } catch (e) { /* ignoré */ }
}
