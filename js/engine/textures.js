// Textures procédurales des effets du feu (murs et sols)
export const PX = 48; // pixels par mètre

export function rng(seed = 1) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hexToRgb(h) {
  const n = parseInt(h.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
export function mix(a, b, t) {
  const A = hexToRgb(a), B = hexToRgb(b);
  const c = A.map((v, i) => Math.round(v + (B[i] - v) * Math.max(0, Math.min(1, t))));
  return '#' + c.map(v => v.toString(16).padStart(2, '0')).join('');
}

// Hauteur de la couche chaude à une abscisse x monde
function coucheAt(piece, xw) {
  const c = piece?.couche;
  if (c == null) return 99;
  if (typeof c === 'number') return c;
  const t = (xw - c.x0) / ((c.x1 - c.x0) || 1);
  return c.y0 + (c.y1 - c.y0) * Math.max(0, Math.min(1, t));
}

/**
 * Peint une face de mur.
 * face = { u0, u1 (coord. monde le long du mur), y0, y1, axe:'h'|'v', ligne, flip, piece (objet pièce ou null pour extérieur), cote, H }
 */
export function peindreMur(face, traces) {
  const W = Math.max(4, Math.round((face.u1 - face.u0) * PX));
  const Hc = Math.max(4, Math.round((face.y1 - face.y0) * PX));
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = Hc;
  const ctx = cv.getContext('2d');
  if (face.flip) { ctx.translate(W, 0); ctx.scale(-1, 1); }
  // repère : x canvas = (u - u0) * PX ; y canvas = (y1 - y) * PX
  const X = u => (u - face.u0) * PX;
  const Y = y => (face.y1 - y) * PX;
  const piece = face.piece;
  const ext = !piece;
  const base = ext ? '#e6dfcf' : (piece.peinture || '#ddd6c6');
  ctx.fillStyle = base; ctx.fillRect(0, 0, W, Hc);
  const r = rng(Math.round(face.u0 * 100 + face.ligne * 7 + face.y0 * 13));
  // grain
  for (let i = 0; i < W * Hc / 60; i++) {
    ctx.fillStyle = `rgba(0,0,0,${r() * 0.04})`;
    ctx.fillRect(r() * W, r() * Hc, 2, 2);
  }
  const suie = ext ? 0.05 : (piece.suie ?? 0);
  if (!ext && suie > 0) {
    // couche de suie au-dessus de la démarcation
    const step = 4;
    for (let px = 0; px < W; px += step) {
      const u = face.u0 + px / PX;
      const xw = face.axe === 'h' ? u : face.ligne;
      const yc = coucheAt(piece, xw) + Math.sin(u * 7.3) * 0.03 + (r() - 0.5) * 0.03;
      const yTop = Y(face.y1), yBot = Y(Math.max(face.y0, yc));
      if (yBot > yTop) {
        const g = ctx.createLinearGradient(0, Y(face.y1 > 2.4 ? 2.5 : face.y1), 0, yBot);
        g.addColorStop(0, `rgba(18,14,12,${Math.min(0.97, 0.55 + suie * 0.42)})`);
        g.addColorStop(1, `rgba(28,22,18,${Math.min(0.9, 0.35 + suie * 0.45)})`);
        ctx.fillStyle = g;
        ctx.fillRect(px, yTop, step + 1, yBot - yTop);
      }
      // voile léger sous la couche
      ctx.fillStyle = `rgba(30,25,20,${suie * 0.12})`;
      ctx.fillRect(px, Math.max(0, yBot), step + 1, Hc - Math.max(0, yBot));
    }
  }
  if (ext) {
    // salissure en pied et légère patine
    const g = ctx.createLinearGradient(0, Y(0.6), 0, Y(0));
    g.addColorStop(0, 'rgba(90,80,60,0)'); g.addColorStop(1, 'rgba(90,80,60,0.18)');
    ctx.fillStyle = g; ctx.fillRect(0, Y(0.6), W, Y(0) - Y(0.6));
  }
  // traces spécifiques
  for (const t of traces) {
    if (t.cote === 'sol') continue;
    const okPiece = ext ? t.piece === 'exterieur' : t.piece === piece.id;
    if (!okPiece || t.cote !== face.cote) continue;
    if (t.ligne != null && Math.abs(t.ligne - face.ligne) > 0.05) continue;
    dessinerTraceMur(ctx, t, X, Y, face, ext);
  }
  return cv;
}

function dessinerTraceMur(ctx, t, X, Y, face, ext) {
  const H = face.H || 2.5;
  if (t.type === 'V') {
    const a = (t.angle || 30) * Math.PI / 180;
    const top = H + 0.6;
    const wTop = (top - t.y0) * Math.tan(a);
    const path = () => {
      ctx.beginPath();
      ctx.moveTo(X(t.u - 0.06), Y(t.y0));
      ctx.lineTo(X(t.u - wTop), Y(top));
      ctx.lineTo(X(t.u + wTop), Y(top));
      ctx.lineTo(X(t.u + 0.06), Y(t.y0));
      ctx.closePath();
    };
    if (ext || t.remplissage === 'suie') {
      path();
      const g = ctx.createLinearGradient(0, Y(t.y0), 0, Y(top));
      g.addColorStop(0, `rgba(15,12,10,${0.9 * (t.force ?? 1)})`);
      g.addColorStop(1, `rgba(25,20,16,${0.55 * (t.force ?? 1)})`);
      ctx.fillStyle = g; ctx.fill();
    } else {
      // bordure carbonisée puis intérieur « clean burn »
      ctx.save(); path(); ctx.lineWidth = 0.16 * PX; ctx.strokeStyle = 'rgba(12,9,7,0.95)'; ctx.stroke(); ctx.restore();
      path();
      const g = ctx.createLinearGradient(0, Y(t.y0), 0, Y(top));
      g.addColorStop(0, 'rgba(214,208,196,0.97)');
      g.addColorStop(0.5, 'rgba(188,180,166,0.92)');
      g.addColorStop(1, 'rgba(120,112,100,0.7)');
      ctx.fillStyle = g; ctx.fill();
    }
  } else if (t.type === 'cleanburn' || t.type === 'calcination') {
    ctx.beginPath();
    ctx.ellipse(X(t.u), Y(t.y), (t.rx || 0.5) * PX, (t.ry || 0.5) * PX, 0, 0, Math.PI * 2);
    ctx.fillStyle = t.type === 'cleanburn' ? 'rgba(200,194,182,0.75)' : 'rgba(238,235,226,0.8)';
    ctx.fill();
  } else if (t.type === 'protegee') {
    const x0 = X(Math.min(t.u0, t.u1)), x1 = X(Math.max(t.u0, t.u1));
    ctx.fillStyle = face.piece?.peinture || '#ddd6c6';
    ctx.globalAlpha = 0.85;
    ctx.fillRect(Math.min(x0, x1), Y(t.y1), Math.abs(x1 - x0), Y(t.y0) - Y(t.y1));
    ctx.globalAlpha = 1;
  } else if (t.type === 'demarcation') {
    ctx.strokeStyle = 'rgba(15,12,10,0.9)'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(X(t.u0 ?? face.u0), Y(t.y)); ctx.lineTo(X(t.u1 ?? face.u1), Y(t.y)); ctx.stroke();
  }
}

const SOLS = {
  stratifie: { base: '#a98d66', joint: 'rgba(60,40,20,0.25)', lame: [1.2, 0.19] },
  parquet:   { base: '#9b7650', joint: 'rgba(50,30,15,0.3)', lame: [0.6, 0.09] },
  carrelage: { base: '#d3cfc6', joint: 'rgba(90,90,90,0.35)', lame: [0.45, 0.45] },
  beton:     { base: '#9d9b95', joint: null },
  herbe:     { base: '#6f7d4f', joint: null },
};

export function peindreSol(piece, traces) {
  const W = Math.round(piece.w * PX), Hc = Math.round(piece.d * PX);
  const cv = document.createElement('canvas'); cv.width = W; cv.height = Hc;
  const ctx = cv.getContext('2d');
  const s = SOLS[piece.sol] || SOLS.beton;
  ctx.fillStyle = s.base; ctx.fillRect(0, 0, W, Hc);
  const r = rng(Math.round(piece.x * 31 + piece.z * 17 + 3));
  if (s.joint) {
    ctx.strokeStyle = s.joint; ctx.lineWidth = 1;
    const [lx, lz] = s.lame;
    for (let z = 0; z < piece.d; z += lz) {
      ctx.beginPath(); ctx.moveTo(0, z * PX); ctx.lineTo(W, z * PX); ctx.stroke();
      const off = (Math.round(z / lz) % 3) * lx / 3;
      for (let x = -off; x < piece.w; x += lx) { ctx.beginPath(); ctx.moveTo(x * PX, z * PX); ctx.lineTo(x * PX, (z + lz) * PX); ctx.stroke(); }
    }
  }
  for (let i = 0; i < W * Hc / 40; i++) { ctx.fillStyle = `rgba(0,0,0,${r() * 0.05})`; ctx.fillRect(r() * W, r() * Hc, 2, 2); }
  // assombrissement général par la suie / chaleur
  const suie = piece.suie ?? 0;
  if (suie > 0) { ctx.fillStyle = `rgba(25,18,12,${Math.min(0.78, suie * 0.62)})`; ctx.fillRect(0, 0, W, Hc); }
  const P = (x, z) => [(x - piece.x) * PX, (z - piece.z) * PX];
  for (const t of traces) {
    if (t.cote !== 'sol' || t.piece !== piece.id) continue;
    if (t.type === 'irregulier') {
      const rr = rng(t.seed || 5);
      for (let i = 0; i < 26; i++) {
        const [cx, cz] = P(t.x + (rr() - 0.5) * 2 * t.rx, t.z + (rr() - 0.5) * 2 * t.rz);
        const rad = (0.12 + rr() * 0.35) * PX;
        ctx.beginPath();
        for (let k = 0; k <= 12; k++) {
          const a = k / 12 * Math.PI * 2, rv = rad * (0.6 + rr() * 0.6);
          k ? ctx.lineTo(cx + Math.cos(a) * rv, cz + Math.sin(a) * rv) : ctx.moveTo(cx + Math.cos(a) * rv, cz + Math.sin(a) * rv);
        }
        ctx.closePath();
        ctx.fillStyle = rr() < 0.25 ? 'rgba(96,92,86,0.95)' : 'rgba(10,7,5,0.92)';
        ctx.fill();
      }
    } else if (t.type === 'consomme') {
      const [cx, cz] = P(t.x, t.z);
      const g = ctx.createRadialGradient(cx, cz, 0, cx, cz, Math.max(t.rx, t.rz) * PX * 1.6);
      g.addColorStop(0, 'rgba(110,106,100,1)'); g.addColorStop(0.55, 'rgba(100,96,90,0.95)');
      g.addColorStop(0.62, 'rgba(8,6,4,0.95)'); g.addColorStop(1, 'rgba(8,6,4,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.ellipse(cx, cz, t.rx * PX * 1.6, t.rz * PX * 1.6, 0, 0, Math.PI * 2); ctx.fill();
    } else if (t.type === 'protegee') {
      const [cx, cz] = P(t.x, t.z);
      ctx.fillStyle = mix(s.base, '#2a2018', 0.35);
      ctx.beginPath(); ctx.ellipse(cx, cz, t.rx * PX, t.rz * PX, 0, 0, Math.PI * 2); ctx.fill();
    } else if (t.type === 'debris') {
      const rr = rng(Math.round(piece.x * 13 + 1));
      const n = Math.round(piece.w * piece.d * 40 * (t.densite ?? 0.5));
      for (let i = 0; i < n; i++) {
        ctx.fillStyle = rr() < 0.5 ? 'rgba(160,156,148,0.8)' : 'rgba(15,12,10,0.85)';
        const sz = (0.02 + rr() * 0.07) * PX;
        ctx.fillRect(rr() * W, rr() * Hc, sz, sz * (0.5 + rr()));
      }
    }
  }
  return cv;
}

// Cavalier jaune numéroté (marqueur d'indice)
export function canvasCavalier(num, photo = false, analyse = false) {
  const cv = document.createElement('canvas'); cv.width = 128; cv.height = 128;
  const c = cv.getContext('2d');
  c.fillStyle = 'rgba(0,0,0,0.35)';
  c.beginPath(); c.ellipse(64, 118, 42, 8, 0, 0, Math.PI * 2); c.fill();
  c.fillStyle = analyse ? '#ffd23f' : '#f5c400';
  c.strokeStyle = '#3a2f00'; c.lineWidth = 5;
  c.beginPath(); c.moveTo(20, 112); c.lineTo(64, 14); c.lineTo(108, 112); c.closePath(); c.fill(); c.stroke();
  c.fillStyle = '#111'; c.font = 'bold 44px system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText(String(num), 64, 80);
  if (photo) { c.fillStyle = '#1b6ef3'; c.beginPath(); c.arc(104, 26, 20, 0, Math.PI * 2); c.fill(); c.fillStyle = '#fff'; c.font = 'bold 22px system-ui'; c.fillText('P', 104, 27); }
  if (analyse) { c.fillStyle = '#17a34a'; c.beginPath(); c.arc(24, 26, 18, 0, Math.PI * 2); c.fill(); c.fillStyle = '#fff'; c.font = 'bold 22px system-ui'; c.fillText('✓', 24, 27); }
  return cv;
}

export function canvasLueur() {
  const cv = document.createElement('canvas'); cv.width = 64; cv.height = 64;
  const c = cv.getContext('2d');
  const g = c.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, 'rgba(255,255,220,0.95)'); g.addColorStop(0.3, 'rgba(255,230,120,0.45)'); g.addColorStop(1, 'rgba(255,200,80,0)');
  c.fillStyle = g; c.fillRect(0, 0, 64, 64);
  return cv;
}

export function canvasFlamme() {
  const cv = document.createElement('canvas'); cv.width = 64; cv.height = 128;
  const c = cv.getContext('2d');
  const g = c.createRadialGradient(32, 96, 4, 32, 80, 60);
  g.addColorStop(0, 'rgba(255,250,200,1)'); g.addColorStop(0.25, 'rgba(255,190,60,0.95)');
  g.addColorStop(0.6, 'rgba(240,90,20,0.6)'); g.addColorStop(1, 'rgba(120,20,0,0)');
  c.fillStyle = g;
  c.beginPath(); c.moveTo(32, 2); c.bezierCurveTo(60, 50, 64, 100, 32, 126); c.bezierCurveTo(0, 100, 4, 50, 32, 2); c.fill();
  return cv;
}
