// Moteur 3D « low-poly isométrique » — construit une scène d'incendie depuis un scénario JSON
import * as THREE from '../../vendor/three.module.min.js';
import { OrbitControls } from '../../vendor/OrbitControls.js';
import { peindreMur, peindreSol, canvasCavalier, canvasLueur, canvasFlamme, rng, mix } from './textures.js';

const CHAR = '#1b1714';
const CUT = 0.42; // hauteur des murs coupés
const DEG = Math.PI / 180;

function col(base, brule = 0) { return new THREE.Color(mix(base, CHAR, brule)); }
function mat(color, opts = {}) { return new THREE.MeshLambertMaterial({ color, ...opts }); }

export class Scene3D {
  constructor(container, opts = {}) {
    this.container = container;
    this.opts = opts;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    this.renderer.localClippingEnabled = true;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);
    this.renderer.domElement.classList.add('scene-canvas');

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#1a1e23');
    this.viewSize = 15;
    this.camera = new THREE.OrthographicCamera(-10, 10, 10, -10, -200, 400);
    this.camera.position.set(20, 22, 26);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.12;
    this.controls.minPolarAngle = 0.35;
    this.controls.maxPolarAngle = 1.25;
    this.controls.minZoom = 0.35;
    this.controls.maxZoom = 6;
    this.controls.screenSpacePanning = true;
    this.controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
    this.controls.addEventListener('change', () => { this._cutDirty = true; });

    this.hemi = new THREE.HemisphereLight(0xe4ecff, 0x40362a, 1.15);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xfff4e6, 1.35);
    this.sun.position.set(10, 18, 14);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    Object.assign(this.sun.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 60 });
    this.sun.shadow.bias = -0.0006;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);

    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.hotspots = new Map();
    this.walls = [];
    this.focus = null;
    this.onPick = null;
    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster();
    this._tween = null;

    const el = this.renderer.domElement;
    let down = null;
    el.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY }; });
    el.addEventListener('pointerup', e => {
      if (!down) return;
      const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
      down = null;
      if (moved < 6 && e.button === 0) this._click(e);
    });
    el.addEventListener('pointermove', e => this._hover(e));
    el.addEventListener('contextmenu', e => e.preventDefault());

    this._ro = new ResizeObserver(() => this.resize());
    this._ro.observe(container);
    this.resize();
    this._loop = this._loop.bind(this);
    this._raf = requestAnimationFrame(this._loop);
  }

  dispose() {
    cancelAnimationFrame(this._raf);
    this._ro.disconnect();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }

  resize() {
    const w = this.container.clientWidth || 800, h = this.container.clientHeight || 600;
    this.renderer.setSize(w, h, false);
    const a = w / h;
    this.camera.left = -this.viewSize * a / 2; this.camera.right = this.viewSize * a / 2;
    this.camera.top = this.viewSize / 2; this.camera.bottom = -this.viewSize / 2;
    this.camera.updateProjectionMatrix();
  }

  // ---------------------------------------------------------------- Construction
  load(scn) {
    this.scn = scn;
    this.root.clear();
    this.hotspots.clear();
    this.walls = [];
    this.fouilleMeshes = [];
    this.fouillables = [];
    this.smoke = {};
    this.flash = {};
    const bat = scn.batiment;
    this.H = bat.hauteur || 2.5;
    this._buildGround(bat);
    for (const p of bat.pieces) this._buildFloor(p, bat.traces || []);
    this._buildWalls(bat);
    for (const o of bat.objets || []) {
      const g = this._buildObjet(o);
      if (g) this.root.add(g);
    }
    this._buildFouille(scn.fouille);
    this._buildFireRig(bat);
    // centre de la scène
    const xs = bat.pieces.flatMap(p => [p.x, p.x + p.w]), zs = bat.pieces.flatMap(p => [p.z, p.z + p.d]);
    this.centre = new THREE.Vector3((Math.min(...xs) + Math.max(...xs)) / 2, 0, (Math.min(...zs) + Math.max(...zs)) / 2);
    this.sun.target.position.copy(this.centre);
    this.sun.position.set(this.centre.x + 8, 18, this.centre.z + 12);
    this.controls.target.copy(this.centre);
    this.camera.position.copy(this.centre).add(new THREE.Vector3(16, 17, 18));
    this.camera.zoom = 0.6;
    this.camera.updateProjectionMatrix();
    this._cutDirty = true;
  }

  roomAt(x, z) {
    return this.scn.batiment.pieces.find(p => x > p.x + 1e-3 && x < p.x + p.w - 1e-3 && z > p.z + 1e-3 && z < p.z + p.d - 1e-3) || null;
  }

  _buildGround(bat) {
    const cv = document.createElement('canvas'); cv.width = cv.height = 512;
    const c = cv.getContext('2d'); const r = rng(42);
    c.fillStyle = '#5f6e43'; c.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 9000; i++) { c.fillStyle = r() < 0.5 ? 'rgba(40,55,25,0.25)' : 'rgba(150,160,90,0.18)'; c.fillRect(r() * 512, r() * 512, 2, 3); }
    for (let i = 0; i < 40; i++) { c.fillStyle = 'rgba(190,170,120,0.18)'; c.beginPath(); c.arc(r() * 512, r() * 512, 6 + r() * 20, 0, 7); c.fill(); }
    const tex = new THREE.CanvasTexture(cv); tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(8, 8);
    tex.colorSpace = THREE.SRGBColorSpace;
    const g = new THREE.Mesh(new THREE.PlaneGeometry(70, 70), mat(0xffffff, { map: tex }));
    g.rotation.x = -Math.PI / 2; g.receiveShadow = true;
    g.userData.sol = 'exterieur';
    this.root.add(g);
    // terrasse et allée
    for (const [k, c] of [['terrasse', '#b9ad98'], ['allee', '#a7a29a']]) {
      const t = bat[k]; if (!t) continue;
      const m = new THREE.Mesh(new THREE.BoxGeometry(t.w, 0.05, t.d), mat(c));
      m.position.set(t.x + t.w / 2, 0, t.z + t.d / 2); m.receiveShadow = true; m.userData.sol = 'exterieur';
      this.root.add(m);
    }
    // végétation d'ambiance
    const rr = rng(9);
    const xs = bat.pieces.flatMap(p => [p.x, p.x + p.w]), zs = bat.pieces.flatMap(p => [p.z, p.z + p.d]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cz = (Math.min(...zs) + Math.max(...zs)) / 2;
    for (let i = 0; i < 14; i++) {
      const a = rr() * Math.PI * 2, d = 12 + rr() * 9;
      const x = cx + Math.cos(a) * d, z = cz + Math.sin(a) * d;
      const t = new THREE.Group();
      const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 1.4, 6), mat('#5a4330')); tr.position.y = 0.7;
      const cn = new THREE.Mesh(new THREE.ConeGeometry(0.9 + rr() * 0.6, 3 + rr() * 2, 7), mat(rr() < 0.5 ? '#2f4a2c' : '#3b5a33'));
      cn.position.y = 2.6; cn.castShadow = true;
      t.add(tr, cn); t.position.set(x, 0, z); this.root.add(t);
    }
  }

  _buildFloor(p, traces) {
    const tex = new THREE.CanvasTexture(peindreSol(p, traces));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(p.w, p.d), mat(0xffffff, { map: tex }));
    m.rotation.x = -Math.PI / 2;
    m.position.set(p.x + p.w / 2, 0.005, p.z + p.d / 2);
    m.receiveShadow = true;
    m.userData.sol = p.id;
    this.root.add(m);
  }

  _buildWalls(bat) {
    const H = this.H, T = bat.epaisseur || 0.16;
    const lines = { h: new Map(), v: new Map() };
    const add = (axe, key, a, b) => { const k = Math.round(key * 100) / 100; if (!lines[axe].has(k)) lines[axe].set(k, []); lines[axe].get(k).push([a, b]); };
    for (const p of bat.pieces) {
      add('h', p.z, p.x, p.x + p.w); add('h', p.z + p.d, p.x, p.x + p.w);
      add('v', p.x, p.z, p.z + p.d); add('v', p.x + p.w, p.z, p.z + p.d);
    }
    const traces = bat.traces || [];
    for (const axe of ['h', 'v']) {
      for (const [ligne, ivs] of lines[axe]) {
        ivs.sort((a, b) => a[0] - b[0]);
        const merged = [];
        for (const iv of ivs) {
          const last = merged[merged.length - 1];
          if (last && iv[0] <= last[1] + 1e-3) last[1] = Math.max(last[1], iv[1]); else merged.push([...iv]);
        }
        for (const [a, b] of merged) {
          // points de rupture aux limites de pièces
          const bp = new Set([a, b]);
          for (const p of bat.pieces) {
            const vals = axe === 'h' ? [p.x, p.x + p.w] : [p.z, p.z + p.d];
            for (const v of vals) if (v > a + 1e-3 && v < b - 1e-3) bp.add(v);
          }
          const pts = [...bp].sort((x, y) => x - y);
          for (let i = 0; i < pts.length - 1; i++) {
            this._buildWallPiece(axe, ligne, pts[i], pts[i + 1], i === 0, i === pts.length - 2, bat, traces, H, T);
          }
        }
      }
    }
  }

  _buildWallPiece(axe, ligne, a, b, isStart, isEnd, bat, traces, H, T) {
    const mid = (a + b) / 2;
    const at = (off) => axe === 'h' ? this.roomAt(mid, ligne + off) : this.roomAt(ligne + off, mid);
    const roomPos = at(0.3), roomNeg = at(-0.3); // côté +z/+x et côté -z/-x
    const plane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 99);
    const wall = { axe, ligne, a, b, plane, rooms: {} };
    // normale pointant DANS la pièce
    if (roomPos) wall.rooms[roomPos.id] = axe === 'h' ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(1, 0, 0);
    if (roomNeg) wall.rooms[roomNeg.id] = axe === 'h' ? new THREE.Vector3(0, 0, -1) : new THREE.Vector3(-1, 0, 0);
    wall.exterieur = !roomPos || !roomNeg;
    this.walls.push(wall);

    const ops = (bat.ouvertures || []).filter(o => o.axe === axe && Math.abs((axe === 'h' ? o.z : o.x) - ligne) < 0.03)
      .map(o => ({ ...o, c: axe === 'h' ? o.x : o.z }))
      .filter(o => o.c > a && o.c < b)
      .sort((x, y) => x.c - y.c);
    const segs = [];
    let cur = a - (isStart ? T / 2 : 0);
    const end = b + (isEnd ? T / 2 : 0);
    for (const o of ops) {
      const s = o.c - o.w / 2, e = o.c + o.w / 2;
      if (s > cur) segs.push([cur, s, 0, H]);
      const al = o.allege || 0;
      if (al > 0) segs.push([s, e, 0, al]);
      if (al + o.h < H) segs.push([s, e, al + o.h, H]);
      cur = e;
      this._buildOuverture(o, axe, ligne, T, plane, roomPos, roomNeg);
    }
    if (end > cur) segs.push([cur, end, 0, H]);

    const core = mat('#b8b1a3', { clippingPlanes: [plane], side: THREE.DoubleSide });
    for (const [u0, u1, y0, y1] of segs) {
      const L = u1 - u0, h = y1 - y0;
      if (L < 0.01 || h < 0.01) continue;
      const geo = axe === 'h' ? new THREE.BoxGeometry(L, h, T) : new THREE.BoxGeometry(T, h, L);
      const faceMat = (room, normalSign) => {
        // côté de la pièce (N/S/E/W) ou de la façade extérieure
        let cote, flip;
        if (axe === 'h') {
          if (normalSign > 0) { cote = room ? 'N' : 'S'; flip = false; } else { cote = room ? 'S' : 'N'; flip = true; }
        } else {
          if (normalSign > 0) { cote = room ? 'W' : 'E'; flip = true; } else { cote = room ? 'E' : 'W'; flip = false; }
        }
        const cv = peindreMur({ u0, u1, y0, y1, axe, ligne, flip, piece: room, cote, H }, traces);
        const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
        return mat(0xffffff, { map: tex, clippingPlanes: [plane], side: THREE.DoubleSide });
      };
      const mPos = faceMat(roomPos, 1), mNeg = faceMat(roomNeg, -1);
      // ordre BoxGeometry : +x, -x, +y, -y, +z, -z
      const mats = axe === 'h' ? [core, core, core, core, mPos, mNeg] : [mPos, mNeg, core, core, core, core];
      const m = new THREE.Mesh(geo, mats);
      const c = (u0 + u1) / 2;
      if (axe === 'h') m.position.set(c, y0 + h / 2, ligne); else m.position.set(ligne, y0 + h / 2, c);
      m.castShadow = true; m.receiveShadow = true;
      m.userData.mur = true;
      this.root.add(m);
    }
  }

  _buildOuverture(o, axe, ligne, T, plane, roomPos, roomNeg) {
    const g = new THREE.Group();
    const clip = { clippingPlanes: [plane], side: THREE.DoubleSide };
    const suie = Math.max(roomPos?.suie || 0, roomNeg?.suie || 0);
    const al = o.allege || 0;
    if (o.type === 'porte') {
      if (o.garage) {
        const p = new THREE.Mesh(new THREE.BoxGeometry(o.w, o.h, 0.05), mat('#d2d2cf', clip));
        p.position.set(0, o.h / 2, 0); g.add(p);
        for (let i = 1; i < 5; i++) { const l = new THREE.Mesh(new THREE.BoxGeometry(o.w, 0.02, 0.06), mat('#a9a9a6', clip)); l.position.set(0, i * o.h / 5, 0); g.add(l); }
      } else {
        const leaf = new THREE.Mesh(new THREE.BoxGeometry(o.w - 0.04, o.h - 0.02, 0.04), mat(col('#b79d78', suie * 0.55), clip));
        const pivot = new THREE.Group();
        leaf.position.set((o.w - 0.04) / 2, (o.h - 0.02) / 2, 0);
        pivot.add(leaf);
        pivot.position.set(-o.w / 2 + 0.02, 0, 0);
        pivot.rotation.y = o.fermee ? 0 : -80 * DEG;
        g.add(pivot);
      }
    } else {
      const frameC = o.brise ? col('#efefef', 0.85) : '#f2f2f0';
      const fr = (w, h, x, y) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.07), mat(frameC, clip)); m.position.set(x, y, 0); g.add(m); };
      fr(o.w, 0.06, 0, al + 0.03);
      if (!o.brise) { fr(o.w, 0.06, 0, al + o.h - 0.03); fr(0.06, o.h, -o.w / 2 + 0.03, al + o.h / 2); fr(0.06, o.h, o.w / 2 - 0.03, al + o.h / 2); }
      else { fr(0.06, o.h * 0.45, -o.w / 2 + 0.03, al + o.h * 0.22); fr(0.06, o.h * 0.3, o.w / 2 - 0.03, al + o.h * 0.15); }
      if (!o.brise) {
        const gl = new THREE.Mesh(new THREE.PlaneGeometry(o.w - 0.1, o.h - 0.1), new THREE.MeshLambertMaterial({ color: '#9fc0cf', transparent: true, opacity: 0.32, ...clip }));
        gl.position.set(0, al + o.h / 2, 0); g.add(gl);
      } else {
        const r = rng(11);
        for (let i = 0; i < 46; i++) {
          const s = new THREE.Mesh(new THREE.PlaneGeometry(0.05 + r() * 0.12, 0.04 + r() * 0.1), new THREE.MeshLambertMaterial({ color: '#b9d4de', transparent: true, opacity: 0.7, side: THREE.DoubleSide }));
          s.rotation.x = -Math.PI / 2; s.rotation.z = r() * 3;
          s.position.set((r() - 0.5) * o.w * 1.1, 0.012 + r() * 0.004, (r() - 0.35) * 1.6);
          g.add(s);
        }
      }
    }
    if (axe === 'h') g.position.set(o.x, 0, ligne); else { g.position.set(ligne, 0, o.z); g.rotation.y = Math.PI / 2; }
    this.root.add(g);
  }

  // ---------------------------------------------------------------- Objets
  _buildObjet(o) {
    const b = o.brule || 0;
    const g = new THREE.Group();
    const box = (w, h, d, color, x = 0, y = 0, z = 0, extra = {}) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color, extra));
      m.position.set(x, y + h / 2, z); m.castShadow = true; m.receiveShadow = true; g.add(m); return m;
    };
    const cyl = (r1, r2, h, color, x = 0, y = 0, z = 0, seg = 10) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, seg), mat(color));
      m.position.set(x, y + h / 2, z); m.castShadow = true; g.add(m); return m;
    };
    switch (o.type) {
      case 'canape': {
        const L = o.L || 2.2, D = 0.9;
        if (b < 0.5) {
          const c = col('#6d7480', b);
          box(L, 0.42, D, c, 0, 0.0, 0);
          box(L, 0.45, 0.22, c, 0, 0.42, -D / 2 + 0.11);
          box(0.2, 0.25, D, c, -L / 2 + 0.1, 0.42, 0); box(0.2, 0.25, D, c, L / 2 - 0.1, 0.42, 0);
        } else {
          // restes : ossature et ressorts, consommation croissante vers l'extrémité -x (sud une fois tourné)
          const n = 6;
          for (let i = 0; i < n; i++) {
            const t = i / (n - 1); // 0 = extrémité -x
            const keep = 0.15 + 0.85 * t;
            const x = -L / 2 + (i + 0.5) * L / n;
            const fh = 0.06 + 0.22 * keep * (1 - b * 0.5);
            const fr = box(L / n - 0.02, fh, 0.07, CHAR, x, 0.02, D / 2 - 0.04); fr.userData.fouillable = true;
            const fr2 = box(L / n - 0.02, fh * 0.9, 0.07, CHAR, x, 0.02, -D / 2 + 0.04); fr2.userData.fouillable = true;
            const back = box(L / n - 0.02, 0.1 + 0.55 * keep * (1 - b * 0.4), 0.06, '#221c18', x, 0.02, -D / 2 + 0.03); back.userData.fouillable = true;
            for (let k = 0; k < 3; k++) {
              const sag = 0.06 + 0.22 * keep;
              const s = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.008, 4, 8), mat('#4a423b'));
              s.rotation.x = Math.PI / 2; s.position.set(x + (k - 1) * 0.11, sag, -0.25 + k * 0.25);
              s.userData.fouillable = true; g.add(s);
            }
          }
          for (const [x, z] of [[-L / 2 + 0.05, -D / 2 + 0.05], [L / 2 - 0.05, -D / 2 + 0.05], [-L / 2 + 0.05, D / 2 - 0.05], [L / 2 - 0.05, D / 2 - 0.05]]) box(0.04, 0.05, 0.04, '#5a5550', x, 0, z);
        }
        break;
      }
      case 'lampadaire': {
        cyl(0.16, 0.18, 0.03, '#2b2b2b'); cyl(0.015, 0.015, 1.6, col('#9a9a9a', b * 0.6), 0, 0.03);
        const sh = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.25, 12, 1, true), mat(col('#efe6cf', b), { side: THREE.DoubleSide }));
        sh.position.set(0, 1.7, 0); sh.rotation.x = Math.PI; g.add(sh);
        break;
      }
      case 'multiprise': box(0.32, 0.04, 0.06, col('#f4f4f4', b)); break;
      case 'prise': box(0.08, 0.08, 0.03, col('#f4f4f4', 0.6)); break;
      case 'cable': {
        const pts = o.points.map(p => new THREE.Vector3(p[0], p[1], p[2]));
        const curve = new THREE.CatmullRomCurve3(pts);
        const m = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, b > 0.5 ? 0.006 : 0.012, 5), mat(b > 0.5 ? '#b56a35' : '#f2f2f2'));
        this.root.add(m);
        return null;
      }
      case 'meubleTV': box(o.L || 1.6, 0.48, 0.42, col('#7a5b3c', b)); break;
      case 'tv': {
        const t = box(1.12, 0.66 * (1 - b * 0.35), 0.06, col('#222', b * 0.3), 0, 0.06, 0);
        t.rotation.x = b * 0.35; box(0.3, 0.06, 0.2, '#333', 0, 0, 0);
        break;
      }
      case 'tableBasse': {
        for (const [x, z] of [[-0.5, -0.25], [0.5, -0.25], [-0.5, 0.25], [0.5, 0.25]]) box(0.03, 0.4, 0.03, '#333', x, 0, z);
        const p = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.012, 0.6), new THREE.MeshLambertMaterial({ color: b > 0.3 ? '#4d5a5c' : '#bcd2d6', transparent: true, opacity: 0.8 }));
        p.position.set(0, b > 0.3 ? 0.06 : 0.41, 0); p.rotation.z = b > 0.3 ? 0.08 : 0; g.add(p);
        break;
      }
      case 'tapis': {
        const m = new THREE.Mesh(new THREE.PlaneGeometry(o.w || 2, o.d || 1.4), mat(col('#8c3b3b', b)));
        m.rotation.x = -Math.PI / 2; m.position.y = 0.01; m.receiveShadow = true; g.add(m);
        break;
      }
      case 'etagere': {
        box(o.L || 1.8, 0.03, 0.25, col('#8b6a46', b * 0.8), 0, 1.25, 0.0);
        for (let i = -1; i <= 1; i++) { cyl(0.04, 0.04, 0.09, '#b9c9cc', i * 0.25, 1.28, 0); cyl(0.034, 0.034, 0.03, '#e9e1cf', i * 0.25, 1.28, 0); }
        break;
      }
      case 'debris': {
        const r = rng(Math.round((o.x + 3) * 97 + o.z * 31));
        const n = Math.round((o.w || 1) * (o.d || 1) * 18);
        for (let i = 0; i < n; i++) {
          const c = r() < 0.6 ? '#2a2420' : '#9a958c';
          const m = box(0.08 + r() * 0.3, 0.015 + r() * 0.05, 0.06 + r() * 0.25, c, (r() - 0.5) * (o.w || 1), 0, (r() - 0.5) * (o.d || 1));
          m.rotation.y = r() * 3;
        }
        break;
      }
      case 'cuisine': {
        const L = o.L || 3;
        box(L, 0.88, 0.6, col('#e8e4dc', b * 0.5));
        box(L, 0.04, 0.62, col('#5a5450', b * 0.4), 0, 0.88, 0);
        box(L, 0.7, 0.34, col('#e8e4dc', Math.min(1, b * 2.5)), 0, 1.45, -0.13);
        box(0.6, 0.01, 0.5, '#111', 0.2, 0.92, 0.02);
        break;
      }
      case 'frigo': box(0.6, 1.8, 0.65, col('#eeeeee', b)); break;
      case 'table': {
        box(1.2, 0.04, 0.8, col('#a07a50', b), 0, 0.72, 0);
        for (const [x, z] of [[-0.55, -0.35], [0.55, -0.35], [-0.55, 0.35], [0.55, 0.35]]) box(0.05, 0.72, 0.05, col('#a07a50', b), x, 0, z);
        break;
      }
      case 'lit': {
        const L = o.L || 2, l = o.l || 1.6;
        box(l, 0.3, L, col('#6b5038', b), 0, 0, 0);
        box(l - 0.06, 0.22, L - 0.1, col('#eef0f2', b), 0, 0.3, 0.02);
        box(l - 0.2, 0.1, 0.4, col('#ffffff', b), 0, 0.52, -L / 2 + 0.3);
        break;
      }
      case 'armoire': box(1.2, 2.1, 0.6, col('#8a6b4b', b)); break;
      case 'bureau': {
        box(1.2, 0.04, 0.6, col('#d9d4c8', b), 0, 0.72, 0);
        box(0.05, 0.72, 0.55, col('#777', b), -0.55, 0, 0); box(0.05, 0.72, 0.55, col('#777', b), 0.55, 0, 0);
        box(0.55, 0.35, 0.03, '#1d1d1d', 0, 0.76, -0.15);
        break;
      }
      case 'baignoire': box(1.7, 0.55, 0.75, '#f3f3f3'); break;
      case 'tableauElec': {
        box(0.5, 0.45, 0.1, '#f1f1f1', 0, 0, 0);
        for (let i = 0; i < 6; i++) box(0.05, 0.08, 0.02, i === 2 ? '#d13b3b' : '#2b2b2b', -0.17 + i * 0.07, 0.18, 0.06);
        break;
      }
      case 'tondeuse': {
        box(0.5, 0.3, 0.55, '#2f7a3a', 0, 0.06, 0);
        box(0.04, 0.6, 0.04, '#333', -0.2, 0.36, 0.3).rotation.x = -0.5; box(0.04, 0.6, 0.04, '#333', 0.2, 0.36, 0.3).rotation.x = -0.5;
        break;
      }
      case 'jerrican': box(0.3, 0.36, 0.17, '#c4291f'); box(0.12, 0.05, 0.04, '#c4291f', 0, 0.36, 0); break;
      case 'etabli': box(o.L || 2, 0.06, 0.6, '#a07a50', 0, 0.86, 0); box(0.06, 0.86, 0.6, '#7a5b3c', -(o.L || 2) / 2 + 0.05, 0, 0); box(0.06, 0.86, 0.6, '#7a5b3c', (o.L || 2) / 2 - 0.05, 0, 0); break;
      case 'daaf': { const m = cyl(0.06, 0.06, 0.04, col('#f5f5f5', b), 0, 2.44, 0); m.castShadow = false; break; }
      case 'voiture': {
        box(4.1, 0.75, 1.75, col('#7a8794', b), 0, 0.3, 0);
        box(2.2, 0.55, 1.6, col('#7a8794', b), -0.2, 1.05, 0);
        for (const [x, z] of [[-1.3, -0.8], [1.3, -0.8], [-1.3, 0.8], [1.3, 0.8]]) { const w = cyl(0.32, 0.32, 0.22, '#1b1b1b', x, 0.0, z, 12); w.rotation.x = Math.PI / 2; w.position.y = 0.32; }
        break;
      }
      default: box(0.4, 0.4, 0.4, '#888');
    }
    g.position.set(o.x || 0, o.y || 0, o.z || 0);
    g.rotation.y = (o.rot || 0) * DEG;
    g.userData.objet = o.id;
    return g;
  }

  // ---------------------------------------------------------------- Fouille
  _buildFouille(f) {
    this.fouille = f || null;
    if (!f) return;
    const a = f.aire;
    const couches = [...f.couches].sort((x, y) => y.n - x.n); // du bas vers le haut
    let y = 0.006;
    for (const c of couches) {
      const grp = new THREE.Group();
      const r = rng(c.n * 77);
      const n = Math.round(a.w * a.d * 26);
      for (let i = 0; i < n; i++) {
        const w = 0.12 + r() * 0.3, d = 0.1 + r() * 0.3, h = c.h * (0.6 + r() * 0.7);
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(mix(c.couleur, r() < 0.5 ? '#000000' : '#bbbbbb', r() * 0.3)));
        m.position.set(a.x + w / 2 + r() * (a.w - w), y + h / 2, a.z + d / 2 + r() * (a.d - d));
        m.rotation.y = r() * 3; m.castShadow = true; m.receiveShadow = true;
        grp.add(m);
      }
      grp.userData.couche = c.n;
      this.root.add(grp);
      this.fouilleMeshes.push(grp);
      y += c.h * 0.85;
    }
    // ruban de délimitation de la zone d'intérêt
    const pts = [[a.x, a.z], [a.x + a.w, a.z], [a.x + a.w, a.z + a.d], [a.x, a.z + a.d], [a.x, a.z]].map(([x, z]) => new THREE.Vector3(x, 0.03, z));
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: '#ffcc00' }));
    line.visible = false; this.rubanFouille = line; this.root.add(line);
    this.setFouille(0);
  }

  setFouille(retirees) {
    if (!this.fouille) return;
    this.fouilleNiveau = retirees;
    for (const g of this.fouilleMeshes) g.visible = g.userData.couche > retirees;
    // les restes du canapé dans l'aire disparaissent avec la couche 2
    const a = this.fouille.aire, v = new THREE.Vector3();
    this.root.traverse(o => {
      if (o.userData.fouillable) {
        o.getWorldPosition(v);
        const inside = v.x >= a.x - 0.05 && v.x <= a.x + a.w + 0.05 && v.z >= a.z - 0.05 && v.z <= a.z + a.d + 0.05;
        if (inside) o.visible = retirees < 2;
      }
    });
  }

  montrerRubanFouille(on) { if (this.rubanFouille) this.rubanFouille.visible = !!on; }

  // ---------------------------------------------------------------- Points d'intérêt
  setHotspots(list) {
    for (const h of this.hotspots.values()) { this.root.remove(h.group); }
    this.hotspots.clear();
    const lueurTex = new THREE.CanvasTexture(canvasLueur());
    for (const it of list) {
      const group = new THREE.Group();
      group.position.set(...it.pos);
      const hit = new THREE.Mesh(new THREE.SphereGeometry(it.rayon || 0.32, 8, 6), new THREE.MeshBasicMaterial({ visible: false }));
      hit.userData.hotspot = it.id;
      group.add(hit);
      const lueur = new THREE.Sprite(new THREE.SpriteMaterial({ map: lueurTex, transparent: true, depthTest: false, blending: THREE.AdditiveBlending }));
      lueur.scale.set(0.45, 0.45, 1); lueur.visible = false; lueur.renderOrder = 10;
      group.add(lueur);
      this.root.add(group);
      this.hotspots.set(it.id, { ...it, group, hit, lueur, sprite: null, state: {} });
    }
  }

  updateHotspot(id, state) {
    const h = this.hotspots.get(id); if (!h) return;
    h.state = { ...h.state, ...state };
    const s = h.state;
    h.hit.visible = !!s.actif;
    h.group.visible = !!s.actif || !!s.toujours;
    h.lueur.visible = !!s.actif && !!s.lueur && !s.decouvert;
    if (s.decouvert) {
      const key = `${s.num}|${!!s.photo}|${!!s.analyse}`;
      if (h._key !== key) {
        if (h.sprite) h.group.remove(h.sprite);
        const tex = new THREE.CanvasTexture(canvasCavalier(s.num, s.photo, s.analyse));
        tex.colorSpace = THREE.SRGBColorSpace;
        h.sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
        h.sprite.scale.set(0.34, 0.34, 1); h.sprite.position.y = 0.26; h.sprite.renderOrder = 20;
        h.group.add(h.sprite); h._key = key;
      }
      h.sprite.visible = true;
    } else if (h.sprite) h.sprite.visible = false;
  }

  // ---------------------------------------------------------------- Caméra & coupe des murs
  setFocus(zone, piece, animate = true) {
    this.focus = { zone, piece };
    const tgt = new THREE.Vector3(...(zone?.cible || [this.centre.x, 0, this.centre.z]));
    const zoom = zone?.zoom || 0.6;
    const off = this.camera.position.clone().sub(this.controls.target);
    if (!animate) { this.controls.target.copy(tgt); this.camera.position.copy(tgt).add(off); this.camera.zoom = zoom; this.camera.updateProjectionMatrix(); this._cutDirty = true; return; }
    this._tween = { t0: performance.now(), dur: 650, fromT: this.controls.target.clone(), toT: tgt, fromZ: this.camera.zoom, toZ: zoom, off };
    this._cutDirty = true;
  }

  rotateView(deg) {
    const off = this.camera.position.clone().sub(this.controls.target);
    off.applyAxisAngle(new THREE.Vector3(0, 1, 0), deg * DEG);
    this.camera.position.copy(this.controls.target).add(off);
    this._cutDirty = true;
  }

  vueDessus(on) {
    const off = this.camera.position.clone().sub(this.controls.target);
    const len = off.length();
    if (on) { this.controls.minPolarAngle = 0; this.camera.position.copy(this.controls.target).add(new THREE.Vector3(0.001, len, 0.001)); }
    else { this.controls.minPolarAngle = 0.35; this.camera.position.copy(this.controls.target).add(new THREE.Vector3(len * 0.5, len * 0.6, len * 0.6)); }
    this._cutDirty = true;
  }

  setModeMurs(mode) { this.modeMurs = mode; this._cutDirty = true; }

  _updateCut() {
    const f = this.focus;
    const d = this.camera.position.clone().sub(this.controls.target); d.y = 0; d.normalize();
    const all = this.modeMurs === 'pleins' || !f || !f.piece;
    for (const w of this.walls) {
      let h = 99;
      if (this.modeMurs === 'bas') h = CUT;
      else if (!all) {
        const n = w.rooms[f.piece];
        if (n) h = n.dot(d) > 0.12 ? 99 : CUT;
        else h = CUT;
      }
      w.plane.constant = h;
    }
  }

  // ---------------------------------------------------------------- Interaction
  _ndc(e) {
    const r = this.renderer.domElement.getBoundingClientRect();
    return new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  }
  _click(e) {
    if (!this.onPick) return;
    this.raycaster.setFromCamera(this._ndc(e), this.camera);
    const hs = [...this.hotspots.values()].filter(h => h.state.actif).map(h => h.hit);
    const hh = this.raycaster.intersectObjects(hs, false);
    const scene = this.raycaster.intersectObjects(this.root.children, true).filter(i => i.object.visible && !i.object.userData.hotspot && i.object.type === 'Mesh' && this._visibleClip(i.point, i.object));
    const point = scene[0]?.point || null;
    this.onPick({ hotspot: hh[0]?.object.userData.hotspot || null, point, sol: scene[0]?.object.userData.sol || null });
  }
  _visibleClip(p, obj) {
    const m = Array.isArray(obj.material) ? obj.material[0] : obj.material;
    const pl = m?.clippingPlanes?.[0];
    return !pl || pl.distanceToPoint(p) >= 0;
  }
  _hover(e) {
    if (!this.hotspots.size) return;
    this.raycaster.setFromCamera(this._ndc(e), this.camera);
    const hs = [...this.hotspots.values()].filter(h => h.state.actif && h.state.decouvert).map(h => h.hit);
    const hit = this.raycaster.intersectObjects(hs, false)[0];
    this.renderer.domElement.style.cursor = hit ? 'pointer' : (this.curseur || 'crosshair');
  }

  capture(w = 420) {
    this.renderer.render(this.scene, this.camera);
    const src = this.renderer.domElement;
    const c = document.createElement('canvas');
    c.width = w; c.height = Math.round(w * src.height / src.width);
    c.getContext('2d').drawImage(src, 0, 0, c.width, c.height);
    return c.toDataURL('image/jpeg', 0.78);
  }

  // ---------------------------------------------------------------- Reconstitution
  _buildFireRig(bat) {
    const H = this.H;
    for (const p of bat.pieces) {
      const s = new THREE.Mesh(new THREE.BoxGeometry(p.w - 0.02, 1, p.d - 0.02), new THREE.MeshBasicMaterial({ color: '#100c0a', transparent: true, opacity: 0.55, depthWrite: false }));
      s.position.set(p.x + p.w / 2, H, p.z + p.d / 2); s.visible = false; s.renderOrder = 5;
      this.root.add(s); this.smoke[p.id] = s;
      const f = new THREE.Mesh(new THREE.BoxGeometry(p.w - 0.05, H - 0.05, p.d - 0.05), new THREE.MeshBasicMaterial({ color: '#ff6a1a', transparent: true, opacity: 0.0, depthWrite: false, blending: THREE.AdditiveBlending }));
      f.position.set(p.x + p.w / 2, H / 2, p.z + p.d / 2); f.visible = false; f.renderOrder = 6;
      this.root.add(f); this.flash[p.id] = f;
    }
    this.feu = new THREE.Group();
    const tex = new THREE.CanvasTexture(canvasFlamme());
    this.flammes = [];
    for (let i = 0; i < 7; i++) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      sp.userData.ph = Math.random() * 6; sp.userData.dx = (Math.random() - 0.5) * 0.5; sp.userData.dz = (Math.random() - 0.5) * 0.5;
      this.feu.add(sp); this.flammes.push(sp);
    }
    this.feuLight = new THREE.PointLight('#ff8a3a', 0, 9, 1.6);
    this.feu.add(this.feuLight);
    this.feu.visible = false;
    this.root.add(this.feu);
    // marqueur d'origine
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.28, 0.36, 32), new THREE.MeshBasicMaterial({ color: '#ff2d2d', side: THREE.DoubleSide, depthTest: false, transparent: true }));
    ring.rotation.x = -Math.PI / 2; ring.renderOrder = 30; ring.visible = false;
    this.origineMarqueur = ring; this.root.add(ring);
  }

  setOrigineMarqueur(pos) {
    if (!pos) { this.origineMarqueur.visible = false; return; }
    this.origineMarqueur.position.set(pos[0], 0.04, pos[2]); this.origineMarqueur.visible = true;
  }

  setReconstitution(frames, origine, t) {
    if (!frames) {
      this.feu.visible = false;
      for (const k in this.smoke) { this.smoke[k].visible = false; this.flash[k].visible = false; }
      this.hemi.intensity = 1.15; this.sun.intensity = 1.35; this.recon = null;
      return;
    }
    const n = frames.length - 1;
    const tt = Math.max(0, Math.min(n, t));
    const i = Math.min(n - 1, Math.floor(tt)), f = tt - i;
    const A = frames[i], B = frames[Math.min(n, i + 1)];
    const lerp = (a, b) => a + (b - a) * f;
    const feu = lerp(A.feu || 0, B.feu || 0);
    this.recon = { feu };
    this.hemi.intensity = 0.55; this.sun.intensity = 0.4;
    this.feu.visible = feu > 0.01;
    this.feu.position.set(origine[0], 0, origine[2]);
    this.feuLight.intensity = 6 * feu;
    for (const k in this.smoke) {
      const lv = lerp(A.fumee?.[k] || 0, B.fumee?.[k] || 0);
      const s = this.smoke[k];
      s.visible = lv > 0.01;
      s.scale.y = lv * this.H; s.position.y = this.H - lv * this.H / 2;
      const fl = (tt >= i && (A.flash || []).includes(k)) ? (f < 0.5 || (B.flash || []).includes(k) ? 1 : 1 - (f - 0.5) * 2) : ((B.flash || []).includes(k) ? f : 0);
      this.flash[k].visible = fl > 0.01;
      this.flash[k].material.opacity = 0.32 * fl;
    }
  }

  // ---------------------------------------------------------------- Boucle
  _loop() {
    this._raf = requestAnimationFrame(this._loop);
    const now = performance.now();
    if (this._tween) {
      const tw = this._tween;
      const k = Math.min(1, (now - tw.t0) / tw.dur), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      this.controls.target.lerpVectors(tw.fromT, tw.toT, e);
      this.camera.position.copy(this.controls.target).add(tw.off);
      this.camera.zoom = tw.fromZ + (tw.toZ - tw.fromZ) * e;
      this.camera.updateProjectionMatrix();
      this._cutDirty = true;
      if (k >= 1) this._tween = null;
    }
    this.controls.update();
    if (this._cutDirty) { this._updateCut(); this._cutDirty = false; }
    const t = this.clock.getElapsedTime();
    for (const h of this.hotspots.values()) if (h.lueur.visible) { const s = 0.3 + 0.18 * Math.sin(t * 3 + h.pos[0]); h.lueur.scale.set(s, s, 1); }
    if (this.feu?.visible && this.recon) {
      const I = this.recon.feu;
      this.flammes.forEach((sp, i) => {
        const k = 0.85 + 0.25 * Math.sin(t * 9 + sp.userData.ph);
        const h = (0.35 + 1.6 * I) * k;
        sp.scale.set(h * 0.55, h, 1);
        sp.position.set(sp.userData.dx * (0.3 + I), h / 2, sp.userData.dz * (0.3 + I));
      });
      this.feuLight.position.set(0, 0.8, 0);
    }
    if (this.origineMarqueur?.visible) this.origineMarqueur.material.opacity = 0.6 + 0.4 * Math.sin(t * 4);
    this.renderer.render(this.scene, this.camera);
  }
}
