// Sauvegarde de la carrière (localStorage, avec repli en mémoire)
import { GRADES, OUTILS } from './data/outils.js';

const KEY_JOUEUR = 'rcci-enquete.carriere.v1';
const KEY_ADMIN = 'rcci-enquete.carriere.admin';
const DRAPEAU_ADMIN = 'rcci-enquete.admin';
// Empreinte SHA-256 du code d'accès formateur (le code lui-même n'est pas écrit dans le site)
const EMPREINTE_ADMIN = '1f21f742b2707dd132faa4e7b21db0106fe4b9c8df47108390ed5377ed32125d';
let memoire = null;
let admin = false;
try { admin = localStorage.getItem(DRAPEAU_ADMIN) === '1'; } catch (e) { /* ignoré */ }
const KEY = () => admin ? KEY_ADMIN : KEY_JOUEUR;

// ---- Mode administrateur : carrière séparée, tout débloqué, la carrière du joueur reste intacte
export const estAdmin = () => admin;
export const CREDITS_ADMIN = 999999;
export function carriereAdmin() {
  return { ...carriereVide(), nom: 'Administrateur', xp: GRADES[GRADES.length - 1].xp, credits: CREDITS_ADMIN, outils: OUTILS.map(o => o.id) };
}
export async function verifierCodeAdmin(code) {
  const txt = String(code || '').trim().toUpperCase();
  if (!txt) return false;
  try {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(txt));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('') === EMPREINTE_ADMIN;
  } catch (e) { return false; }
}
export function basculerAdmin(on) {
  admin = !!on; memoire = null;
  try { if (admin) localStorage.setItem(DRAPEAU_ADMIN, '1'); else localStorage.removeItem(DRAPEAU_ADMIN); } catch (e) { /* ignoré */ }
  return charger();
}

export function carriereVide() {
  return {
    nom: 'Enquêteur',
    xp: 0,
    credits: 600,
    outils: OUTILS.filter(o => o.base).map(o => o.id),
    missions: {}, // id -> { meilleur, tentatives, dernier }
    reglages: { feedback: 'immediat', lueurs: true },
    journal: [],
  };
}

export function charger() {
  try {
    const raw = localStorage.getItem(KEY());
    if (raw) {
      const c = { ...carriereVide(), ...JSON.parse(raw) };
      if (admin) c.outils = OUTILS.map(o => o.id);
      return c;
    }
  } catch (e) { /* stockage indisponible */ }
  return memoire ? structuredClone(memoire) : admin ? carriereAdmin() : carriereVide();
}

export function sauver(c) {
  memoire = structuredClone(c);
  try { localStorage.setItem(KEY(), JSON.stringify(c)); } catch (e) { /* ignoré */ }
}

export function reinitialiser() {
  memoire = null;
  try { localStorage.removeItem(KEY()); } catch (e) { /* ignoré */ }
  return admin ? carriereAdmin() : carriereVide();
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

// Scénarios formateur : voir stockage.js (IndexedDB)
export { scenariosPerso, sauverScenarioPerso, supprimerScenarioPerso } from './stockage.js';
