// Débriefing : notation, pièges, solution, reconstitution 3D
import { evaluer } from '../game/scoring.js';
import { Scene3D } from '../engine/scene3d.js';
import { grade } from '../state.js';
import { $, $$, h, esc, ref, toast } from '../ui.js';
import { apercuRapport } from './rapport.js';

export function ouvrirDebrief(E, ctx) {
  const scn = E.scn, c = ctx.app.c;
  const ev = evaluer(E);
  const gAvant = grade(c.xp);
  c.credits += ev.credits; c.xp += ev.xp;
  const m = c.missions[scn.id] || { meilleur: 0, tentatives: 0 };
  c.missions[scn.id] = { meilleur: Math.max(m.meilleur || 0, ev.total), tentatives: (m.tentatives || 0) + 1, dernier: ev.total };
  c.journal.unshift({ date: new Date().toLocaleDateString('fr-FR'), mission: scn.titre, score: ev.total });
  c.journal = c.journal.slice(0, 40);
  ctx.save();
  const gApres = grade(c.xp);

  const sol = scn.solution;
  const O = id => scn.hypotheses.origines.find(x => x.id === id);
  const C = id => scn.hypotheses.causes.find(x => x.id === id);
  const etatChip = { evite: '<span class="chip ok">évité</span>', tombe: '<span class="chip ko">piège</span>', non: '<span class="chip">non rencontré</span>', oublie: '<span class="chip warn">non testé</span>' };
  const table = arr => `<table class="det">${arr.map(d => `<tr><td>${d.ok ? '✅' : d.pts > 0 ? '🟡' : '❌'} <b>${esc(d.titre)}</b><div class="muted small">${esc(d.texte)}</div></td><td>${ref(d.ref)}</td><td class="p">${Math.min(d.pts, d.max)} / ${d.max}</td></tr>`).join('')}</table>`;
  const screen = $('#screen');
  screen.innerHTML = '';
  const el = h(`<div class="debrief"><div class="qg-inner">
    <div class="hero">
      <div class="hero-card">
        <div class="kicker">Débriefing · ${esc(scn.titre)}</div>
        <div style="display:flex;gap:24px;align-items:center;flex-wrap:wrap">
          <div><div class="score-big">${ev.total}</div><div class="muted">/ 100</div></div>
          <div class="bars" style="flex:1;min-width:260px">
            ${[['Méthode', ev.methode, 40], ['Analyse', ev.analyse, 30], ['Conclusion', ev.conclusion, 30]].map(([l, v, mx]) => `<div class="bar"><span>${l}</span><span class="tr"><i style="width:${Math.round(100 * v / mx)}%"></i></span><span class="small">${Math.round(v)} / ${mx}</span></div>`).join('')}
            ${ev.penalites.length || ev.ptsViol ? `<div class="small" style="color:var(--ko)">Pénalités : −${Math.round(ev.penalites.reduce((s, p) => s + p.pts, 0) + ev.ptsViol)}</div>` : ''}
          </div>
        </div>
        <p style="margin-top:14px">+ <b style="color:var(--accent2)">${ev.credits.toLocaleString('fr-FR')} cr</b> · + <b>${ev.xp} XP</b>${ev.deja ? ' <span class="muted small">(rejouée : gains réduits)</span>' : ''}
        ${gApres.n > gAvant.n ? `<br><span class="chip ok" style="margin-top:8px">🎖️ Promotion : ${esc(gApres.nom)}</span>` : ''}</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-primary" data-a="qg">Retour au QG</button><button class="btn" data-a="rapport">Relire mon rapport</button></div>
      </div>
      <div class="hero-card">
        <div class="kicker">Solution de référence</div>
        <p><b>Origine :</b> ${esc(O(sol.origine)?.nom)} ${E.rapport.origine === sol.origine ? '✅' : '❌'}</p>
        <p><b>Cause :</b> ${esc(C(sol.cause)?.nom)} ${E.rapport.cause === sol.cause ? '✅' : '❌'}</p>
        <p><b>Premier combustible :</b> ${esc(C(sol.cause)?.premierCombustible)}<br><b>Source :</b> ${esc(C(sol.cause)?.source)}</p>
        <p><b>Certitude attendue au vu de VOS données :</b> ${esc(ev.certAttendue)} · <b>classification :</b> ${esc(ev.classAttendue)}</p>
        <p class="small muted">Faits clés : ${sol.faitsCles.map(f => `<span class="chip ${E.faits.has(f) ? 'ok' : ''}">${f}</span>`).join(' ')}</p>
      </div>
    </div>

    <div class="panel"><h3>Reconstitution 3D</h3>
      <p class="small muted">Chronologie de référence. Comparez le développement selon votre hypothèse d'origine et selon l'origine réelle ${ref('20.2 / 20.4')}.</p>
      <div style="display:flex;gap:6px;margin-bottom:8px;flex-wrap:wrap"><button class="btn btn-sm" data-o="joueur">Votre origine</button><button class="btn btn-sm" data-o="ref">Origine de référence</button><button class="btn btn-sm" data-p="play">▶ Lecture</button></div>
      <div class="recon-view"><div class="ov ov-recon"><button class="btn btn-sm" data-p="play2">▶</button><input type="range" min="0" max="${scn.reconstitution.length - 1}" step="0.01" value="0"><div class="lbl"></div></div></div>
    </div>

    <div class="hero">
      <div class="panel"><h3>Méthode</h3>${table(ev.det.methode)}</div>
      <div class="panel"><h3>Analyse</h3>${table(ev.det.analyse)}<h3 style="margin-top:14px">Conclusion</h3>${table(ev.det.conclusion)}</div>
    </div>
    ${ev.penalites.length ? `<div class="panel"><h3>Pénalités</h3>${ev.penalites.map(p => `<div class="fait contamine"><div class="hd"><b>${esc(p.titre)}</b> ${ref(p.ref)} <span class="chip ko">−${p.pts}</span></div>${esc(p.texte)}</div>`).join('')}</div>` : ''}
    <div class="panel"><h3>Pièges de la scène</h3>${ev.pieges.map(p => `<div class="piege"><div>${etatChip[p.etat]}</div><div><b>${esc(p.titre)}</b> ${ref(p.ref)}<div class="small muted">${esc(p.texte)}</div></div></div>`).join('')}</div>
    <div class="panel"><h3>Écarts de méthode (${E.violations.length})</h3>${E.violations.map(v => `<div class="small" style="padding:4px 0;border-bottom:1px solid var(--line)">⚠ ${esc(v.texte)} ${ref(v.ref)}</div>`).join('') || '<p class="muted">Aucun.</p>'}</div>
    <div class="panel"><h3>Analyses discutables</h3>${[...E.analyses].filter(([, a]) => !a.ok).map(([id, a]) => { const o = E.obs(id); const bon = o.analyse.options.find(x => x.ok); return `<div class="fait"><div class="hd"><b>${esc(o.titre)}</b>${ref(o.analyse.ref)}</div><div class="small">Votre réponse : ${esc(o.analyse.options[a.idx].t)}</div><div class="small" style="color:var(--ok)">Attendu : ${esc(bon.t)}</div><div class="small muted">${esc(o.analyse.options[a.idx].fb || bon.fb || '')}</div></div>`; }).join('') || '<p class="muted">Toutes vos analyses sont correctes.</p>'}</div>
  </div></div>`);
  screen.appendChild(el);

  const S = new Scene3D($('.recon-view', el));
  S.load(scn);
  const posRef = O(sol.origine).pos;
  const pieceRef = S.roomAt(posRef[0], posRef[2]);
  const zoneRef = scn.zones.find(z => z.piece === pieceRef?.id);
  S.setFocus(zoneRef ? { ...zoneRef, zoom: (zoneRef.zoom || 1) * 0.75 } : null, null, false);
  S.setModeMurs('bas');
  let origine = O(E.rapport.origine)?.pos || O(sol.origine).pos;
  const slider = $('input[type=range]', el), lbl = $('.lbl', el);
  const upd = () => {
    const t = +slider.value, f = scn.reconstitution[Math.min(scn.reconstitution.length - 1, Math.round(t))];
    S.setReconstitution(scn.reconstitution, origine, t);
    S.setOrigineMarqueur(origine);
    lbl.innerHTML = `<span class="t">${esc(f.t)}</span>${esc(f.titre)}`;
  };
  slider.oninput = upd; upd();
  let play = null;
  const toggle = () => {
    if (play) { cancelAnimationFrame(play); play = null; return; }
    if (+slider.value >= +slider.max) slider.value = 0;
    let last = performance.now();
    const step = now => { slider.value = Math.min(+slider.max, +slider.value + (now - last) / 1600); last = now; upd(); if (+slider.value < +slider.max) play = requestAnimationFrame(step); else play = null; };
    play = requestAnimationFrame(step);
  };
  $$('[data-p]', el).forEach(b => b.onclick = toggle);
  $('[data-o=joueur]', el).onclick = () => { origine = O(E.rapport.origine)?.pos || O(sol.origine).pos; if (!O(E.rapport.origine)) toast('Aucune origine déterminée dans votre rapport.', 'warn'); upd(); };
  $('[data-o=ref]', el).onclick = () => { origine = O(sol.origine).pos; upd(); };
  ctx.onLeave = () => { if (play) cancelAnimationFrame(play); S.dispose(); };
  $('[data-a=qg]', el).onclick = () => ctx.allerQG();
  $('[data-a=rapport]', el).onclick = () => apercuRapport(E, E.rapport, c);
}
