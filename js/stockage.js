// Stockage IndexedDB (scénarios formateur, brouillons, photos) avec repli en mémoire
const DB = 'rcci-enquete', ST = 'kv';
const memoire = new Map();
let dbP = null;

function db() {
  if (dbP) return dbP;
  dbP = new Promise((res, rej) => {
    try {
      const r = indexedDB.open(DB, 1);
      r.onupgradeneeded = () => r.result.createObjectStore(ST);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    } catch (e) { rej(e); }
  }).catch(() => null);
  return dbP;
}

function tx(mode, fn) {
  return db().then(d => {
    if (!d) return fn(null);
    return new Promise((res, rej) => {
      const t = d.transaction(ST, mode);
      const st = t.objectStore(ST);
      const r = fn(st);
      t.oncomplete = () => res(r?.result);
      t.onerror = () => rej(t.error);
    });
  });
}

export async function lire(cle) {
  try { const v = await tx('readonly', st => st ? st.get(cle) : null); return v ?? structuredClone(memoire.get(cle)); }
  catch { return structuredClone(memoire.get(cle)); }
}
export async function ecrire(cle, val) {
  memoire.set(cle, structuredClone(val));
  try { await tx('readwrite', st => st && st.put(val, cle)); return true; } catch { return false; }
}
export async function effacer(cle) {
  memoire.delete(cle);
  try { await tx('readwrite', st => st && st.delete(cle)); } catch { /* ignoré */ }
}
export async function cles(prefixe = '') {
  try {
    const ks = await tx('readonly', st => st ? st.getAllKeys() : null);
    if (ks) return ks.filter(k => String(k).startsWith(prefixe));
  } catch { /* repli */ }
  return [...memoire.keys()].filter(k => k.startsWith(prefixe));
}

// ---- Scénarios formateur
export async function scenariosPerso() {
  // migration depuis l'ancien stockage localStorage
  try {
    const raw = localStorage.getItem('rcci-enquete.scenarios.v1');
    if (raw) { for (const s of JSON.parse(raw)) await ecrire('scn:' + s.id, s); localStorage.removeItem('rcci-enquete.scenarios.v1'); }
  } catch { /* ignoré */ }
  const ks = await cles('scn:');
  const out = [];
  for (const k of ks) { const s = await lire(k); if (s) out.push(s); }
  return out.sort((a, b) => (a.titre || '').localeCompare(b.titre || ''));
}
export const sauverScenarioPerso = s => ecrire('scn:' + s.id, s);
export const supprimerScenarioPerso = id => effacer('scn:' + id);

// ---- Images : redimensionnement et compression
export function compresserImage(fichier, max = 1600, q = 0.82) {
  return new Promise((res, rej) => {
    const url = URL.createObjectURL(fichier);
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      res(c.toDataURL('image/jpeg', q));
    };
    img.onerror = () => { URL.revokeObjectURL(url); rej(new Error('Image illisible')); };
    img.src = url;
  });
}
