// Éditeur formateur : création / modification de scénarios d'enquête
import { Scene3D } from '../engine/scene3d.js';
import { SCENARIOS } from '../data/scenarios/index.js';
import { scenariosPerso, sauverScenarioPerso } from '../state.js';
import { SECTIONS, get, set, nouveauScenario, valider } from './schema.js';
import { $, $$, h, esc, toast, modal, confirmer } from '../ui.js';

const ED = { scn: structuredClone(SCENARIOS[0]), section: 'general', ouverts: new Set(), pick: null };
let S = null, tPrev = null;

function apercu(force) {
  clearTimeout(tPrev);
  tPrev = setTimeout(() => {
    try {
      S.load(ED.scn);
      S.setModeMurs($('#mursEd')?.value || 'auto');
      S.setHotspots((ED.scn.observations || []).map(o => ({ id: o.id, pos: o.pos })));
      (ED.scn.observations || []).forEach((o, i) => S.updateHotspot(o.id, { actif: true, decouvert: true, num: o.id.replace(/\D/g, '') || i + 1, toujours: true }));
      const z = ED.scn.zones?.find(x => x.id === $('#zoneEd')?.value);
      if (z) S.setFocus(z, z.piece || null, false);
      $('#apErr').textContent = '';
    } catch (e) { $('#apErr').textContent = 'Aperçu impossible : ' + e.message; console.error(e); }
  }, force ? 0 : 450);
}

function champHtml(obj, [path, type, aide, opts], key) {
  const v = get(obj, path);
  const id = `f_${key}_${path.replace(/\W/g, '_')}`;
  const lbl = `<label for="${id}">${esc(path.split('.').pop())}${aide ? `<span class="muted small" style="display:block">${esc(aide)}</span>` : ''}</label>`;
  let inp;
  switch (type) {
    case 'textarea': inp = `<textarea class="inp" id="${id}" rows="3">${esc(v ?? '')}</textarea>`; break;
    case 'number': inp = `<input class="inp" type="number" step="any" id="${id}" value="${v ?? ''}">`; break;
    case 'bool': inp = `<label style="padding-top:7px"><input type="checkbox" id="${id}" ${v ? 'checked' : ''}> oui</label>`; break;
    case 'select': inp = `<select class="inp" id="${id}">${(opts || []).map(o => `<option ${o === (v ?? '') ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>`; break;
    case 'color': inp = `<input type="color" id="${id}" value="${v || '#cccccc'}">`; break;
    case 'json': inp = `<textarea class="inp mono" id="${id}" rows="2">${esc(v === undefined ? '' : JSON.stringify(v))}</textarea>`; break;
    case 'csv': inp = `<input class="inp" id="${id}" value="${esc((v || []).join(', '))}">`; break;
    case 'lines': inp = `<textarea class="inp" id="${id}" rows="5">${esc((v || []).join('\n'))}</textarea>`; break;
    case 'groupes': inp = `<input class="inp" id="${id}" value="${esc((v || []).map(g => g.join(', ')).join(' ; '))}">`; break;
    case 'vec3': inp = `<div style="display:flex;gap:4px"><input class="inp" id="${id}" value="${esc((v || [0, 0, 0]).join(', '))}"><button class="btn btn-sm" data-pick="${id}" title="Cliquer dans l'aperçu 3D">📍</button></div>`; break;
    default: inp = `<input class="inp" id="${id}" value="${esc(v ?? '')}">`;
  }
  return `<div class="form-row" data-path="${esc(path)}" data-type="${type}" data-for="${id}">${lbl}<div>${inp}</div></div>`;
}

function lire(type, el) {
  const val = el.type === 'checkbox' ? el.checked : el.value;
  switch (type) {
    case 'number': return val === '' ? undefined : +val;
    case 'bool': return val || undefined;
    case 'json': if (val.trim() === '') return undefined; return JSON.parse(val);
    case 'csv': return val.split(',').map(x => x.trim()).filter(Boolean);
    case 'lines': return val.split('\n').map(x => x.trim()).filter(Boolean);
    case 'groupes': return val.split(';').map(g => g.split(',').map(x => x.trim()).filter(Boolean)).filter(g => g.length);
    case 'vec3': { const a = val.split(',').map(x => +x.trim()); if (a.length !== 3 || a.some(isNaN)) throw new Error('3 nombres attendus'); return a; }
    case 'select': return val || undefined;
    default: return val;
  }
}

function lier(cont, obj, onChange) {
  $$('.form-row[data-path]', cont).forEach(row => {
    const el = $(`#${row.dataset.for}`, row);
    if (!el || el._lie) return;
    el._lie = true;
    el.addEventListener('change', () => {
      try { set(obj, row.dataset.path, lire(row.dataset.type, el)); el.classList.remove('bad'); onChange(); }
      catch (e) { el.classList.add('bad'); toast(`Valeur invalide (${row.dataset.path}) : ${esc(e.message)}`, 'ko'); }
    });
  });
  $$('[data-pick]', cont).forEach(b => {
    if (b._lie) return; b._lie = true;
    b.onclick = () => {
      const row = b.closest('.form-row'); const el = $(`#${row.dataset.for}`, row);
      ED.pick = p => { el.value = [p.x, p.y, p.z].map(n => Math.round(n * 100) / 100).join(', '); el.dispatchEvent(new Event('change')); };
      $('#pickHint').hidden = false;
      toast('Cliquez dans l\'aperçu 3D pour placer le point.', 'info');
    };
  });
}

function rendreListe(cont, arr, def, onChange, key) {
  cont.innerHTML = `<div class="ed-list">${arr.map((it, i) => {
    const k = `${key}_${i}`;
    const open = ED.ouverts.has(k);
    return `<div class="ed-item ${open ? 'open' : ''}" data-i="${i}">
      <div class="ed-ih"><button class="btn-x" data-tog>${open ? '▾' : '▸'}</button><span class="ed-sum">${esc(def.resume(it) ?? '')}</span>
      <span style="flex:1"></span><button class="btn btn-sm btn-ghost" data-up title="Monter">↑</button><button class="btn btn-sm btn-ghost" data-dup title="Dupliquer">⧉</button><button class="btn btn-sm btn-ghost" data-del title="Supprimer">🗑</button></div>
      ${open ? `<div class="ed-ib">${def.champs.filter(c => c[1] !== 'liste').map(c => champHtml(it, c, k)).join('')}${def.champs.filter(c => c[1] === 'liste').map(c => `<div class="ed-sub"><div class="sec-t">${esc(c[2] || c[0])}</div><div data-sub="${c[0]}"></div></div>`).join('')}</div>` : ''}
    </div>`;
  }).join('')}<button class="btn btn-sm" data-add>+ Ajouter</button></div>`;
  $$(':scope > .ed-list > .ed-item', cont).forEach(item => {
    const i = +item.dataset.i, it = arr[i], k = `${key}_${i}`;
    $('[data-tog]', item).onclick = () => { ED.ouverts.has(k) ? ED.ouverts.delete(k) : ED.ouverts.add(k); rendreListe(cont, arr, def, onChange, key); };
    $('[data-del]', item).onclick = async () => { if (await confirmer('Supprimer cet élément ?', esc(def.resume(it) || ''), 'Supprimer')) { arr.splice(i, 1); onChange(); rendreListe(cont, arr, def, onChange, key); } };
    $('[data-dup]', item).onclick = () => { arr.splice(i + 1, 0, structuredClone(it)); onChange(); rendreListe(cont, arr, def, onChange, key); };
    $('[data-up]', item).onclick = () => { if (i > 0) { [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; onChange(); rendreListe(cont, arr, def, onChange, key); } };
    if (ED.ouverts.has(k)) {
      lier($('.ed-ib', item), it, () => { $('.ed-sum', item).textContent = def.resume(it) ?? ''; onChange(); });
      for (const c of def.champs.filter(c => c[1] === 'liste')) {
        if (!Array.isArray(get(it, c[0]))) set(it, c[0], []);
        rendreListe($(`[data-sub="${c[0]}"]`, item), get(it, c[0]), c[3], onChange, `${k}_${c[0]}`);
      }
    }
  });
  $(':scope > .ed-list > [data-add]', cont).onclick = () => { arr.push(structuredClone(def.modele)); ED.ouverts.add(`${key}_${arr.length - 1}`); onChange(); rendreListe(cont, arr, def, onChange, key); };
}

function rendreSection() {
  const sec = SECTIONS.find(s => s.id === ED.section);
  const f = $('#edForm');
  const changed = () => { if (sec.apercu || true) apercu(); majTitre(); };
  f.innerHTML = `<h2>${esc(sec.titre)}</h2><div id="edChamps">${(sec.champs || []).map(c => champHtml(ED.scn, c, 'root')).join('')}</div><div id="edListe"></div>`;
  lier($('#edChamps', f), ED.scn, changed);
  if (sec.liste) {
    if (sec.liste.chemin.startsWith('fouille') && !ED.scn.fouille) ED.scn.fouille = { zone: '', aire: { x: 0, z: 0, w: 1, d: 1 }, ref: '17.3.2', couches: [] };
    if (!Array.isArray(get(ED.scn, sec.liste.chemin))) set(ED.scn, sec.liste.chemin, []);
    rendreListe($('#edListe', f), get(ED.scn, sec.liste.chemin), sec.liste, changed, sec.id);
  }
}

function majTitre() {
  $('#edTitre').textContent = ED.scn.titre || ED.scn.id;
  const zs = $('#zoneEd'); const cur = zs.value;
  zs.innerHTML = `<option value="">Vue générale</option>` + (ED.scn.zones || []).map(z => `<option value="${esc(z.id)}">${esc(z.nom)}</option>`).join('');
  zs.value = cur;
}

function rendreNav() {
  $('#edNav').innerHTML = SECTIONS.map(s => `<button class="${ED.section === s.id ? 'on' : ''}" data-s="${s.id}">${esc(s.titre)}</button>`).join('');
  $$('#edNav [data-s]').forEach(b => b.onclick = () => { ED.section = b.dataset.s; rendreNav(); rendreSection(); });
}

function charger(scn) { ED.scn = structuredClone(scn); ED.ouverts.clear(); rendreNav(); rendreSection(); majTitre(); apercu(true); }

function controle(montrerOk = true) {
  const r = valider(ED.scn);
  modal({ titre: '🔎 Contrôle d\'intégrité', corps: `<p>${r.nFaits} faits référencés.</p>
    ${r.err.length ? `<div class="fb ko"><b>${r.err.length} erreur(s)</b><ul>${r.err.map(e => `<li>${esc(e)}</li>`).join('')}</ul></div>` : (montrerOk ? '<div class="fb ok">Aucune erreur bloquante.</div>' : '')}
    ${r.warn.length ? `<div class="fb" style="border:1px solid #6a4a16;background:#2a2113;margin-top:8px"><b>${r.warn.length} avertissement(s)</b><ul>${r.warn.map(e => `<li>${esc(e)}</li>`).join('')}</ul></div>` : ''}`, actions: [{ label: 'Fermer' }] });
  return r;
}

function init() {
  S = new Scene3D($('#edPrev'));
  S.onPick = ({ point }) => { if (ED.pick && point) { ED.pick(point); ED.pick = null; $('#pickHint').hidden = true; } else if (point) { $('#coords').textContent = `x ${point.x.toFixed(2)} · y ${point.y.toFixed(2)} · z ${point.z.toFixed(2)}`; } };
  $('#zoneEd').onchange = () => apercu(true);
  $('#mursEd').onchange = () => S.setModeMurs($('#mursEd').value);
  $('#fouilleEd').oninput = e => S.setFouille(+e.target.value);
  $('#bNouveau').onclick = async () => { if (await confirmer('Nouveau scénario ?', 'Les modifications non exportées ou non publiées seront perdues.', 'Créer')) charger(nouveauScenario()); };
  $('#bCharger').onclick = () => {
    const perso = scenariosPerso();
    const m = modal({ titre: 'Ouvrir un scénario', corps: `<div style="display:flex;flex-direction:column;gap:6px">${[...SCENARIOS.map(s => ({ s, t: 'intégré' })), ...perso.map(s => ({ s, t: 'formateur' }))].map(({ s, t }, i) => `<button class="btn qbtn" data-i="${i}"><span class="typ">${t}</span>${esc(s.titre)}</button>`).join('')}</div>`, actions: [{ label: 'Annuler' }] });
    $$('[data-i]', m.el).forEach(b => b.onclick = () => { const all = [...SCENARIOS, ...perso]; charger(all[+b.dataset.i]); m.close(); });
  };
  $('#bVariante').onclick = () => {
    const s = structuredClone(ED.scn);
    s.id = `${s.id.replace(/-v\d+$/, '')}-v${Math.floor(Math.random() * 900 + 100)}`; s.titre = `${s.titre} (variante)`;
    charger(s); toast('Variante créée : modifiez l\'origine, l\'heure, la puissance, les tracés et la solution.', 'ok', 5000);
  };
  $('#bImport').onchange = async e => {
    try { const d = JSON.parse(await e.target.files[0].text()); charger(d); toast('Scénario importé.', 'ok'); } catch (err) { toast('JSON invalide : ' + esc(err.message), 'ko'); }
    e.target.value = '';
  };
  $('#bExport').onclick = () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(ED.scn, null, 2)], { type: 'application/json' }));
    a.download = `${ED.scn.id}.json`; a.click();
  };
  $('#bValider').onclick = () => controle();
  $('#bPublier').onclick = () => {
    const r = valider(ED.scn);
    if (r.err.length) { controle(false); return; }
    if (SCENARIOS.some(s => s.id === ED.scn.id)) { toast('Cet identifiant est celui d\'un scénario intégré : créez une variante (nouvel identifiant) avant de publier.', 'warn', 5500); return; }
    if (sauverScenarioPerso(ED.scn)) toast('Publié dans le jeu (tableau des missions, onglet formateur) sur ce navigateur.', 'ok', 5000);
    else toast('Stockage du navigateur indisponible : exportez le JSON.', 'ko');
  };
  rendreNav(); rendreSection(); majTitre(); apercu(true);
}

init();
