// Export d'un dossier RETEX en fichier HTML autonome (hors ligne, photos incluses)
import { anonymiser } from '../screens/analyseView.js';

export async function exporterRetexHtml(scn, opts = {}) {
  const [js, css] = await Promise.all([
    fetch(new URL('../../dist/retex-viewer.js', import.meta.url)).then(r => { if (!r.ok) throw new Error('visionneuse introuvable (dist/retex-viewer.js)'); return r.text(); }),
    fetch(new URL('../../css/style.css', import.meta.url)).then(r => r.text()),
  ]);
  const d = anonymiser(scn, opts);
  // seules les photos réellement utilisées sont embarquées
  const used = new Set((d.photos || []).map(p => p.media));
  d.medias = Object.fromEntries(Object.entries(d.medias || {}).filter(([k]) => used.has(k)));
  const data = JSON.stringify(d).replace(/</g, '\\u003c');
  const titre = (d.titre || 'Dossier RETEX').replace(/[<&]/g, '');
  const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>RETEX · ${titre}</title>
<style>${css}</style></head>
<body><div id="app"><header id="topbar"><div class="logo"><div class="logo-mark">🔥</div><div>Dossier RETEX<small>${titre}</small></div></div></header>
<main id="screen" style="flex:1;display:flex;min-height:0"></main></div><div id="modal-root"></div><div id="toasts"></div>
<script>window.__RETEX__=${data};</script>
<script>${js.replace(/<\/script/gi, '<\\/script')}</script>
</body></html>`;
  const blob = new Blob([html], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `RETEX-${(d.id || 'dossier').replace(/[^\w-]+/g, '_')}.html`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  return blob.size;
}
