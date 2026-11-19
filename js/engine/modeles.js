// Modèles 3D importés (Blender, SketchUp…) : glTF/GLB, OBJ, STL, Collada (DAE), FBX.
// Les fichiers sont stockés dans le dossier (scn.modeles[clé] = { nom, format, data: dataURL }) et
// analysés une seule fois ; chaque pose dans la scène en est un clone.
import * as THREE from '../../vendor/three.module.min.js';

export const FORMATS_3D = {
  glb: 'glTF binaire (Blender : Fichier › Exporter › glTF 2.0)',
  gltf: 'glTF texte, fichier unique (textures intégrées)',
  obj: 'Wavefront OBJ (SketchUp Pro, Blender)',
  stl: 'STL (SketchUp, impression 3D)',
  dae: 'Collada DAE (SketchUp : Fichier › Exporter › Modèle 3D)',
  fbx: 'FBX (SketchUp Pro, Blender)',
};
export const ACCEPT_3D = Object.keys(FORMATS_3D).map(e => '.' + e).join(',');
export const formatDe = nom => (String(nom).toLowerCase().match(/\.([a-z0-9]+)$/) || [])[1] || '';

const cache = new Map(); // clé -> Promise<{ objet, taille }>

async function versBuffer(data) { return (await fetch(data)).arrayBuffer(); }
const texte = buf => new TextDecoder().decode(buf);

async function analyser(def) {
  const buf = await versBuffer(def.data);
  const f = def.format;
  let obj;
  if (f === 'glb' || f === 'gltf') {
    const { GLTFLoader } = await import('../../vendor/GLTFLoader.js');
    obj = await new Promise((ok, ko) => new GLTFLoader().parse(f === 'glb' ? buf : texte(buf), '', g => ok(g.scene), ko));
  } else if (f === 'obj') {
    const { OBJLoader } = await import('../../vendor/OBJLoader.js');
    obj = new OBJLoader().parse(texte(buf));
    obj.traverse(n => { if (n.isMesh && (!n.material || n.material.type === 'MeshPhongMaterial')) n.material = new THREE.MeshStandardMaterial({ color: n.material?.color || 0xbfbab0, roughness: 0.85 }); });
  } else if (f === 'stl') {
    const { STLLoader } = await import('../../vendor/STLLoader.js');
    const geo = new STLLoader().parse(buf); geo.computeVertexNormals();
    obj = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xbfbab0, roughness: 0.85 }));
  } else if (f === 'dae') {
    const { ColladaLoader } = await import('../../vendor/ColladaLoader.js');
    obj = new ColladaLoader().parse(texte(buf), '').scene;
  } else if (f === 'fbx') {
    const { FBXLoader } = await import('../../vendor/FBXLoader.js');
    obj = new FBXLoader().parse(buf, '');
  } else throw new Error(`Format non pris en charge : .${f}`);
  obj.traverse(n => { if (n.isMesh) { n.castShadow = true; n.receiveShadow = true; } });
  const box = new THREE.Box3().setFromObject(obj);
  const taille = box.getSize(new THREE.Vector3());
  return { objet: obj, taille, box };
}

export function chargerModele(cle, def) {
  if (!cache.has(cle)) cache.set(cle, analyser(def).catch(e => { cache.delete(cle); throw e; }));
  return cache.get(cle);
}
export function infoModele(cle) { return cache.get(cle); }

// Instance prête à poser : posée au sol, centrée, à l'échelle, orientée, éventuellement brûlée
export async function instanceModele(cle, def, o) {
  const { objet } = await chargerModele(cle, def);
  const inst = objet.clone(true);
  const pivot = new THREE.Group();
  if (o.zHaut) inst.rotation.x = -Math.PI / 2;
  pivot.add(inst);
  const e = o.echelle || 1;
  pivot.scale.setScalar(e);
  pivot.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(pivot);
  const c = box.getCenter(new THREE.Vector3());
  inst.position.x -= c.x / e; inst.position.z -= c.z / e; inst.position.y -= box.min.y / e;
  const b = o.brule || 0;
  inst.traverse(n => {
    if (!n.isMesh) return;
    n.material = Array.isArray(n.material) ? n.material.map(m => m.clone()) : n.material.clone();
    for (const m of [].concat(n.material)) if (m.color && b > 0) m.color.multiplyScalar(1 - 0.82 * b);
  });
  return pivot;
}
