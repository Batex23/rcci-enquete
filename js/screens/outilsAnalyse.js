// Outils d'analyse : calculateur de dynamique du feu et test de compétence de la source
import { MATERIAUX } from '../data/materiaux.js';
import { modal, esc, ref, $ } from '../ui.js';

const num = s => { const m = String(s).replace(',', '.').match(/[\d.]+/g); if (!m) return null; const v = m.map(Number); const k = /M/.test(String(s)) ? 1000 : 1; return v.length > 1 ? [v[0] * k, v[1] * k] : [v[0] * k, v[0] * k]; };

export function calculateur(dyn) {
  const d = dyn || { L: 5, l: 4, H: 2.5, ouvertures: [{ nom: 'Porte', w: 0.9, h: 2 }] };
  const corps = document.createElement('div');
  corps.innerHTML = `
    <p class="muted small">Corrélations d'ingénierie (ordre de grandeur) : puissance nécessaire à l'embrasement généralisé d'un local. ${ref('5.10 / 20.4')}</p>
    <div class="form-row"><label>Local (L × l × H, m)</label><div style="display:flex;gap:6px">
      <input class="inp" id="cL" type="number" step="0.1" value="${d.L}"><input class="inp" id="cl" type="number" step="0.1" value="${d.l}"><input class="inp" id="cH" type="number" step="0.1" value="${d.H}"></div></div>
    <div class="form-row"><label>Ouvertures prises en compte</label><div>${d.ouvertures.map((o, i) => `<label style="display:block"><input type="checkbox" class="co" data-i="${i}" ${i === 0 ? 'checked' : ''}> ${esc(o.nom)} (${o.w} × ${o.h} m)</label>`).join('')}</div></div>
    <div class="form-row"><label>Combustible de référence</label><select class="inp" id="cComb">${MATERIAUX.puissance.map(p => `<option ${p.combustible === d.combustible ? 'selected' : ''}>${esc(p.combustible)} — ${esc(p.kw)} kW</option>`).join('')}</select></div>
    <div id="cOut" class="panel" style="margin-top:10px"></div>
    <p class="muted small">Thomas : Q<sub>fo</sub> = 7,8·A<sub>T</sub> + 378·A<sub>o</sub>√H<sub>o</sub> · Babrauskas : Q<sub>fo</sub> = 750·A<sub>o</sub>√H<sub>o</sub> · Hauteur de flamme (Heskestad) : L = 0,235·Q<sup>2/5</sup> − 1,02·D. Données de puissance : tableau mnémotechnique de l'auteur.</p>`;
  const m = modal({ titre: '🧮 Calculateur de dynamique du feu', corps, large: true, actions: [{ label: 'Fermer' }] });
  const calc = () => {
    const L = +$('#cL', corps).value, l = +$('#cl', corps).value, H = +$('#cH', corps).value;
    const ops = [...corps.querySelectorAll('.co')].filter(c => c.checked).map(c => d.ouvertures[+c.dataset.i]);
    const Ao = ops.reduce((s, o) => s + o.w * o.h, 0);
    const Ho = ops.length ? ops.reduce((s, o) => s + o.h * o.w * o.h, 0) / Math.max(Ao, 1e-6) : 0;
    const AT = 2 * L * l + 2 * (L + l) * H - Ao;
    const thomas = 7.8 * AT + 378 * Ao * Math.sqrt(Ho);
    const babr = 750 * Ao * Math.sqrt(Ho);
    const comb = MATERIAUX.puissance[corps.querySelector('#cComb').selectedIndex];
    const q = num(comb.kw);
    const D = 1.0;
    const flamme = q ? 0.235 * Math.pow(q[1], 0.4) - 1.02 * D : null;
    const verdict = q ? (q[1] >= thomas ? `<span class="chip ok">peut conduire à l'embrasement généralisé</span>` : q[1] >= thomas * 0.5 ? `<span class="chip warn">proche du seuil</span>` : `<span class="chip">insuffisant seul</span>`) : '';
    $('#cOut', corps).innerHTML = `
      <table class="det"><tr><td>Surface des parois A<sub>T</sub></td><td class="p">${AT.toFixed(1)} m²</td></tr>
      <tr><td>Surface d'ouverture A<sub>o</sub> / hauteur H<sub>o</sub></td><td class="p">${Ao.toFixed(2)} m² / ${Ho.toFixed(2)} m</td></tr>
      <tr><td><b>Q<sub>fo</sub> Thomas</b></td><td class="p"><b>${Math.round(thomas)} kW</b></td></tr>
      <tr><td>Q<sub>fo</sub> Babrauskas</td><td class="p">${Math.round(babr)} kW</td></tr>
      <tr><td>Puissance du combustible (max.)</td><td class="p">${q ? q[1] + ' kW' : '—'} ${verdict}</td></tr>
      <tr><td>Hauteur de flamme estimée (D = 1 m)</td><td class="p">${flamme != null ? Math.max(0, flamme).toFixed(2) + ' m' : '—'}</td></tr></table>`;
  };
  corps.addEventListener('input', calc); calc();
  return m;
}

export function testCompetence(cause, onDone) {
  const sources = [...MATERIAUX.ignition.map(s => ({ nom: s.source, t: s.max || s.min }))];
  if (!sources.some(s => /arc/i.test(s.nom))) sources.push({ nom: 'Arc électrique', t: 3750 });
  const combs = [...MATERIAUX.fusion.filter(f => f.type !== 'Métaux').map(f => ({ nom: f.mat, t: f.min, t2: f.max }))];
  combs.push({ nom: 'Mousse PU (inflammation, ordre de grandeur)', t: 370, t2: 370 });
  const pre = cause.competence || {};
  const corps = document.createElement('div');
  corps.innerHTML = `
    <p><b>${esc(cause.nom)}</b></p>
    <p class="muted small">La source d'ignition proposée est-elle compétente pour enflammer le premier combustible proposé ? La température n'est qu'un critère : il faut aussi l'énergie, la durée d'exposition, le transfert thermique et la géométrie. ${ref('18.4.2 / 18.6.5.2')}</p>
    <div class="form-row"><label>Source d'ignition</label><select class="inp" id="tsS">${sources.map(s => `<option ${s.nom === pre.source || (pre.source && s.nom.toLowerCase().includes(pre.source.toLowerCase().slice(0, 8))) ? 'selected' : ''}>${esc(s.nom)} — ${s.t} °C</option>`).join('')}</select></div>
    <div class="form-row"><label>Premier combustible</label><select class="inp" id="tsC">${combs.map(c => `<option ${c.nom === pre.combustible || (pre.combustible && c.nom.toLowerCase().startsWith(pre.combustible.toLowerCase().slice(0, 12))) ? 'selected' : ''}>${esc(c.nom)} — ${c.t}${c.t2 && c.t2 !== c.t ? '–' + c.t2 : ''} °C</option>`).join('')}</select></div>
    <div id="tsOut" class="panel"></div>
    <div class="form-row"><label>Votre conclusion</label><select class="inp" id="tsV"><option value="">—</option><option value="oui">Source compétente pour ce combustible</option><option value="non">Source non compétente</option><option value="indet">Indéterminable avec ces données</option></select></div>`;
  const out = () => {
    const s = sources[$('#tsS', corps).selectedIndex], c = combs[$('#tsC', corps).selectedIndex];
    const marge = s.t - (c.t2 || c.t);
    $('#tsOut', corps).innerHTML = `Température de la source : <b>${s.t} °C</b> · Seuil du combustible : <b>${c.t}${c.t2 && c.t2 !== c.t ? '–' + c.t2 : ''} °C</b><br>
      ${marge > 0 ? `<span class="chip ok">Écart favorable : +${Math.round(marge)} °C</span>` : `<span class="chip ko">Source plus froide que le seuil</span>`}
      <span class="muted small"> — à confronter à l'énergie disponible et à la durée (une cigarette couve des heures ; un arc est bref mais très énergétique localement).</span>`;
  };
  corps.addEventListener('change', out); out();
  modal({ titre: '🔥 Test de compétence de la source d\'ignition', corps, large: true, actions: [
    { label: 'Annuler', classe: 'btn-ghost' },
    { label: 'Enregistrer le test', classe: 'btn-primary', onClick: () => { const v = $('#tsV', corps).value; if (!v) return false; onDone && onDone(v); } },
  ] });
}
