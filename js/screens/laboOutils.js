// Petits outils partagés par les postes du laboratoire 3D
import * as THREE from '../../vendor/three.module.min.js';

export const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
export const melange = a => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
export const nb = (v, d = 1) => v.toLocaleString('fr-FR', { maximumFractionDigits: d, minimumFractionDigits: d });
export const jourCourant = () => new Date().toISOString().slice(0, 10);
// ------------------------------------------------------------------ petits outils 3D
export const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.75, metalness: 0, ...o });
export function boite(p, w, hh, d, m, x, y, z) { const o = new THREE.Mesh(new THREE.BoxGeometry(w, hh, d), m); o.position.set(x, y, z); p.add(o); return o; }
export function cyl(p, rt, rb, hh, m, x, y, z, seg = 20) { const o = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, hh, seg), m); o.position.set(x, y, z); p.add(o); return o; }
export function texCanvas(w, hh, draw) { const cv = document.createElement('canvas'); cv.width = w; cv.height = hh; draw(cv.getContext('2d'), w, hh); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }

export function paillasse(scene, x, z, w, d, rot = 0) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rot; scene.add(g);
  boite(g, w, 0.82, d - 0.06, mat('#e4e9ec'), 0, 0.45, -0.03);
  boite(g, w, 0.08, d - 0.1, mat('#5a646b'), 0, 0.04, -0.05);
  boite(g, w + 0.04, 0.06, d + 0.02, mat('#2d3a40', { roughness: 0.45 }), 0, 0.89, 0);
  const n = Math.max(1, Math.round(w / 0.6));
  for (let i = 0; i < n; i++) {
    const cx = -w / 2 + (i + 0.5) * w / n;
    boite(g, w / n - 0.04, 0.74, 0.01, mat('#d5dde1'), cx, 0.47, d / 2 - 0.055);
    boite(g, 0.14, 0.02, 0.02, mat('#8c969c', { metalness: 0.6 }), cx, 0.78, d / 2 - 0.04);
  }
  return g;
}

export function verrerie(p, x, y, z, couleur, type = 0) {
  const verre = new THREE.MeshStandardMaterial({ color: '#d8eef6', transparent: true, opacity: 0.35, roughness: 0.1, depthWrite: false });
  const liq = mat(couleur, { roughness: 0.3 });
  if (type === 0) { // erlenmeyer
    cyl(p, 0.025, 0.08, 0.14, verre, x, y + 0.07, z); cyl(p, 0.022, 0.022, 0.06, verre, x, y + 0.17, z);
    cyl(p, 0.05, 0.075, 0.05, liq, x, y + 0.026, z);
  } else if (type === 1) { // bécher
    cyl(p, 0.05, 0.05, 0.13, verre, x, y + 0.065, z); cyl(p, 0.046, 0.046, 0.06, liq, x, y + 0.031, z);
  } else { // ballon
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 12), verre); b.position.set(x, y + 0.07, z); p.add(b);
    const l = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), liq); l.position.set(x, y + 0.07, z); p.add(l);
    cyl(p, 0.018, 0.018, 0.1, verre, x, y + 0.17, z);
  }
}

export function affiche(scene, x, y, z, w, hh, rotY, draw) {
  const t = texCanvas(512, Math.round(512 * hh / w), draw);
  const o = new THREE.Mesh(new THREE.PlaneGeometry(w, hh), new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }));
  o.position.set(x, y, z); o.rotation.y = rotY; scene.add(o); return o;
}

export function lignes(c, txt, x, y, lh) { txt.forEach((l, i) => c.fillText(l, x, y + i * lh)); }
