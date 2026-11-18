// Briques de formulaires de l'éditeur (générées depuis un schéma)
import { get, set } from './schema.js';
import { $, $$, esc, toast, confirmer } from '../ui.js';

// contexte partagé : sélection d'un point dans la 3D, éléments dépliés
export const ctxF = { ouverts: new Set(), pick: () => {} };

export function champHtml(obj, [path, type, aide, opts, label], key) {
  const v = get(obj, path);
  const id = `f_${key}_${path.replace(/\W/g, '_')}`;
  const lbl = `<label for="${id}">${esc(label || path.split('.').pop())}${aide ? `<span class="muted small" style="display:block">${esc(aide)}</span>` : ''}</label>`;
  let inp;
  switch (type) {
    case 'textarea': inp = `<textarea class="inp" id="${id}" rows="3">${esc(v ?? '')}</textarea>`; break;
    case 'number': inp = `<input class="inp" type="number" step="any" id="${id}" value="${v ?? ''}">`; break;
    case 'range': inp = `<div style="display:flex;gap:8px;align-items:center"><input type="range" id="${id}" min="${opts[0]}" max="${opts[1]}" step="${opts[2]}" value="${v ?? opts[0]}" style="flex:1;accent-color:var(--fire)"><output class="small">${v ?? ''}</output></div>`; break;
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

export function lire(type, el) {
  const val = el.type === 'checkbox' ? el.checked : el.value;
  switch (type) {
    case 'number': return val === '' ? undefined : +val;
    case 'range': return +val;
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

export function lier(cont, obj, onChange) {
  $$('.form-row[data-path]', cont).forEach(row => {
    const el = $(`#${row.dataset.for}`, row);
    if (!el || el._lie) return;
    el._lie = true;
    if (row.dataset.type === 'range') el.addEventListener('input', () => { const o = el.parentElement.querySelector('output'); if (o) o.textContent = el.value; });
    el.addEventListener('change', () => {
      try { set(obj, row.dataset.path, lire(row.dataset.type, el)); el.classList.remove('bad'); onChange(); }
      catch (e) { el.classList.add('bad'); toast(`Valeur invalide (${row.dataset.path}) : ${esc(e.message)}`, 'ko'); }
    });
  });
  $$('[data-pick]', cont).forEach(b => {
    if (b._lie) return; b._lie = true;
    b.onclick = () => {
      const row = b.closest('.form-row'); const el = $(`#${row.dataset.for}`, row);
      ctxF.pick(p => { el.value = [p.x, p.y, p.z].map(n => Math.round(n * 100) / 100).join(', '); el.dispatchEvent(new Event('change')); });
      toast('Cliquez dans l\'aperçu 3D pour placer le point.', 'info');
    };
  });
}

export function rendreListe(cont, arr, def, onChange, key) {
  cont.innerHTML = `<div class="ed-list">${arr.map((it, i) => {
    const k = `${key}_${i}`;
    const open = ctxF.ouverts.has(k);
    return `<div class="ed-item ${open ? 'open' : ''}" data-i="${i}">
      <div class="ed-ih"><button class="btn-x" data-tog>${open ? '▾' : '▸'}</button><span class="ed-sum">${esc(def.resume(it) ?? '')}</span>
      <span style="flex:1"></span><button class="btn btn-sm btn-ghost" data-up title="Monter">↑</button><button class="btn btn-sm btn-ghost" data-dup title="Dupliquer">⧉</button><button class="btn btn-sm btn-ghost" data-del title="Supprimer">🗑</button></div>
      ${open ? `<div class="ed-ib">${def.champs.filter(c => c[1] !== 'liste').map(c => champHtml(it, c, k)).join('')}${def.champs.filter(c => c[1] === 'liste').map(c => `<div class="ed-sub"><div class="sec-t">${esc(c[2] || c[0])}</div><div data-sub="${c[0]}"></div></div>`).join('')}</div>` : ''}
    </div>`;
  }).join('')}<button class="btn btn-sm" data-add>+ Ajouter</button></div>`;
  $$(':scope > .ed-list > .ed-item', cont).forEach(item => {
    const i = +item.dataset.i, it = arr[i], k = `${key}_${i}`;
    $('[data-tog]', item).onclick = () => { ctxF.ouverts.has(k) ? ctxF.ouverts.delete(k) : ctxF.ouverts.add(k); rendreListe(cont, arr, def, onChange, key); };
    $('[data-del]', item).onclick = async () => { if (await confirmer('Supprimer cet élément ?', esc(def.resume(it) || ''), 'Supprimer')) { arr.splice(i, 1); onChange(); rendreListe(cont, arr, def, onChange, key); } };
    $('[data-dup]', item).onclick = () => { arr.splice(i + 1, 0, structuredClone(it)); onChange(); rendreListe(cont, arr, def, onChange, key); };
    $('[data-up]', item).onclick = () => { if (i > 0) { [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; onChange(); rendreListe(cont, arr, def, onChange, key); } };
    if (ctxF.ouverts.has(k)) {
      lier($('.ed-ib', item), it, () => { $('.ed-sum', item).textContent = def.resume(it) ?? ''; onChange(); });
      for (const c of def.champs.filter(c => c[1] === 'liste')) {
        if (!Array.isArray(get(it, c[0]))) set(it, c[0], []);
        rendreListe($(`[data-sub="${c[0]}"]`, item), get(it, c[0]), c[3], onChange, `${k}_${c[0]}`);
      }
    }
  });
  $(':scope > .ed-list > [data-add]', cont).onclick = () => { arr.push(structuredClone(def.modele)); ctxF.ouverts.add(`${key}_${arr.length - 1}`); onChange(); rendreListe(cont, arr, def, onChange, key); };
}

