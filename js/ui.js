// Petits utilitaires d'interface
export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export function h(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

export function toast(msg, type = 'info', ms = 3200) {
  const root = $('#toasts');
  const el = h(`<div class="toast toast-${type}">${msg}</div>`);
  root.appendChild(el);
  setTimeout(() => el.classList.add('out'), ms);
  setTimeout(() => el.remove(), ms + 400);
}

export function modal({ titre, corps, actions = [], large = false, onClose, classe = '' }) {
  const root = $('#modal-root');
  const el = h(`<div class="modal-bg"><div class="modal ${large ? 'modal-large' : ''} ${classe}" role="dialog" aria-modal="true">
    <header class="modal-h"><h2>${titre}</h2><button class="btn-x" aria-label="Fermer">✕</button></header>
    <div class="modal-b"></div>
    <footer class="modal-f"></footer></div></div>`);
  const b = $('.modal-b', el);
  if (typeof corps === 'string') b.innerHTML = corps; else if (corps) b.appendChild(corps);
  const f = $('.modal-f', el);
  const close = () => { el.remove(); onClose && onClose(); };
  for (const a of actions) {
    const btn = h(`<button class="btn ${a.classe || ''}">${a.label}</button>`);
    btn.onclick = () => { const r = a.onClick ? a.onClick(el) : undefined; if (r !== false) close(); };
    f.appendChild(btn);
  }
  if (!actions.length) f.remove();
  $('.btn-x', el).onclick = close;
  el.addEventListener('mousedown', e => { if (e.target === el) close(); });
  root.appendChild(el);
  return { el, close, body: b };
}

export function confirmer(titre, texte, labelOk = 'Confirmer') {
  return new Promise(res => {
    modal({ titre, corps: `<p>${texte}</p>`, actions: [
      { label: 'Annuler', classe: 'btn-ghost', onClick: () => res(false) },
      { label: labelOk, classe: 'btn-primary', onClick: () => res(true) },
    ], onClose: () => res(false) });
  });
}

export function ref(r) { return r ? `<span class="ref" title="NFPA 921 (2011)">NFPA ${esc(r)}</span>` : ''; }

export function norm(s) {
  return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9\- ]/g, ' ');
}
