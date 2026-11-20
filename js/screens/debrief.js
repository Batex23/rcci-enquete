// Débriefing : notation, pièges, solution, reconstitution 3D
import { evaluer } from '../game/scoring.js';
import { Scene3D, altitudeDe } from '../engine/scene3d.js';
import { grade } from '../state.js';
import { $, $$, h, esc, ref, toast } from '../ui.js';
import { apercuRapport } from './rapport.js';
import { voirAussiHtml } from '../data/sources.js';
import { DOMAINES, gainsEnquete, crediter, niveauDe, NOMS_NIVEAU } from '../game/competences.js';
import { BADGES, badgesGagnes, etoiles } from '../game/badges.js';
import { SCENARIOS } from '../data/scenarios/index.js';

export function ouvrirDebrief(E, ctx) {
  const scn = E.scn, c = ctx.app.c;
  const ev = evaluer(E);
  const gAvant = grade(c.xp);
  c.credits += ev.credits; c.xp += ev.xp;
  const m = c.missions[scn.id] || { meilleur: 0, tentatives: 0 };
  c.missions[scn.id] = { meilleur: Math.max(m.meilleur || 0, ev.total), tentatives: (m.tentatives || 0) + 1, dernier: ev.total };
  c.journal.unshift({ date: new Date().toLocaleDateString('fr-FR'), mission: scn.titre, score: ev.total });
  c.journal = c.journal.slice(0, 40);
  const avant = new Set(c.badges || []);
  const gagnes = badgesGagnes(E, ev);
  if (SCENARIOS.filter(x => x.ordre <= 3).every(x => (c.missions[x.id]?.meilleur ?? 0) >= 40)) gagnes.push('tous');
  const gainsC = gainsEnquete(E, ev);
  const montees = crediter(c, gainsC);
  if (DOMAINES.some(d => niveauDe(c, d.id) >= 3)) gagnes.push('specialiste');
  if (DOMAINES.every(d => niveauDe(c, d.id) >= 2)) gagnes.push('polyvalent');
  const nouveaux = gagnes.filter(b => !avant.has(b));
  c.badges = [...new Set([...avant, ...gagnes])];
  ctx.save();
  const nbE = etoiles(ev.total);
  const suivant = SCENARIOS.find(x => x.requiert === scn.id);
  const gApres = grade(c.xp);

  const sol = scn.solution;
  const O = id => scn.hypotheses.origines.find(x => x.id === id);
  const C = id => scn.hypotheses.causes.find(x => x.id === id);
  const etatChip = { evite: '<span class="chip ok">évité</span>', tombe: '<span class="chip ko">piège</span>', non: '<span class="chip">non rencontré</span>', oublie: '<span class="chip warn">non testé</span>' };
  const table = arr => `<table class="det">${arr.map(d => `<tr><td>${d.ok ? '✅' : d.pts > 0 ? '🟡' : '❌'} <b>${esc(d.titre)}</b><div class="muted small">${esc(d.texte)}</div></td><td>${ref(d.ref)}</td><td class="p">${Math.min(d.pts, d.max)} / ${d.max}</td></tr>`).join('')}</table>`;
  const screen = $('#screen');
  screen.innerHTML = '';
  const el = h(`<div class="debrief bureau"><div class="qg-inner">
    <div class="hcarte" style="text-align:center;padding:22px 18px;margin-bottom:18px;background:var(--paper)">
      <div style="font:700 40px/1 var(--hand);color:var(--ink)">${nbE === 3 ? 'Expertise remarquable !' : nbE === 2 ? 'Belle enquête !' : nbE === 1 ? 'Enquête bouclée' : 'Enquête à reprendre'}</div>
      <div class="etoiles-big">${[1, 2, 3].map(i => `<span class="${i <= nbE ? 'on' : ''}">★</span>`).join('')}</div>
      <div style="font-size:15px">👨‍🚒 <i>${nbE >= 2 ? 'Bon travail. Regarde quand même le détail : on apprend surtout de ses petites erreurs.' : nbE === 1 ? 'La méthode est là, mais certaines lectures ou étapes t\'ont échappé. On reprend ensemble ?' : 'Pas de panique : relis les pièges et les lectures attendues, puis retente.'}</i></div>
      ${nouveaux.length ? `<div style="margin-top:10px">${nouveaux.map(id => { const b = BADGES.find(x => x.id === id); return `<span class="badge-gagne">${b.ic} ${esc(b.nom)}</span>`; }).join('')}</div>` : ''}
      <div style="display:flex;gap:8px;justify-content:center;margin-top:14px;flex-wrap:wrap">${suivant && nbE >= 1 ? `<button class="btn-j go" data-a="qg">▶ Débloqué : ${esc(suivant.titreCourt || suivant.titre)}</button>` : '<button class="btn-j go" data-a="qg">Retour au bureau</button>'}<button class="btn-j" data-a="rapport">Relire mon rapport</button></div>
    </div>
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
        ${gApres.n > gAvant.n ? `<br><span class="chip ok" style="margin-top:8px">🎖️ Promotion : ${esc(gApres.nom)}</span>` : ''}${ev.bonusComp ? ` <span class="small muted">(dont +${Math.round(ev.bonusComp * 100)} % de bonus de compétences)</span>` : ''}</p>
        <div class="kicker" style="margin-top:12px">Compétences gagnées</div>
        <div class="comp-gains">${DOMAINES.filter(d => gainsC[d.id]).map(d => `<span class="chip">${d.ic} ${esc(d.nom)} <b>+${gainsC[d.id]}</b></span>`).join(' ') || '<span class="small muted">—</span>'}</div>
        ${montees.map(m => `<div class="chip ok" style="margin-top:6px">${m.dom.ic} ${esc(m.dom.nom)} : niveau ${m.n} (${NOMS_NIVEAU[m.n - 1]})${m.n === 3 ? ` — avantage débloqué : <b>${esc(m.dom.avantage.nom)}</b>` : ''}</div>`).join('')}
      </div>
      <div class="hero-card">
        <div class="kicker">Solution de référence</div>
        <p><b>Origine :</b> ${esc(O(sol.origine)?.nom)} ${E.rapport.origine === sol.origine ? '✅' : '❌'}</p>
        <p><b>Cause :</b> ${esc(C(sol.cause)?.nom || sol.causeTexte || 'Indéterminée')} ${E.rapport.cause === sol.cause ? '✅' : '❌'}</p>
        <p><b>Premier combustible :</b> ${esc(C(sol.cause)?.premierCombustible || 'Non déterminé')}<br><b>Source :</b> ${esc(C(sol.cause)?.source || 'Non déterminée')}</p>
        <p><b>Certitude attendue au vu de VOS données :</b> ${esc(ev.certAttendue)} · <b>classification :</b> ${esc(ev.classAttendue)}</p>
        <p class="small muted">Faits clés : ${sol.faitsCles.map(f => `<span class="chip ${E.faits.has(f) ? 'ok' : ''}">${f}</span>`).join(' ')}</p>
        ${sol.noteFinale ? `<div class="panel" style="margin-top:8px">${sol.noteFinale}</div>` : ''}
        ${scn.sources?.length ? `<details class="voir" style="margin-top:8px"><summary>📚 Sources publiques de cette étude de cas</summary><ul>${scn.sources.map(x => `<li>${x.url ? `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.titre)}</a>` : esc(x.titre)}</li>`).join('')}</ul></details>` : ''}
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
    <div class="panel"><h3>Pièges de la scène</h3>${ev.pieges.map(p => `<div class="piege"><div>${etatChip[p.etat]}</div><div><b>${esc(p.titre)}</b> ${ref(p.ref)}<div class="small muted">${esc(p.texte)}</div>${voirAussiHtml({ ref: p.ref, texte: `${p.titre} ${p.texte}` }, { max: 3 })}</div></div>`).join('')}</div>
    <div class="panel"><h3>Écarts de méthode (${E.violations.length})</h3>${E.violations.map(v => `<div class="small" style="padding:4px 0;border-bottom:1px solid var(--line)">⚠ ${esc(v.texte)} ${ref(v.ref)}</div>`).join('') || '<p class="muted">Aucun.</p>'}</div>
    <div class="panel"><h3>Analyses discutables</h3>${[...E.analyses].filter(([, a]) => !a.ok).map(([id, a]) => { const o = E.obs(id); const bon = o.analyse.options.find(x => x.ok); return `<div class="fait"><div class="hd"><b>${esc(o.titre)}</b>${ref(o.analyse.ref)}</div><div class="small">Votre réponse : ${esc(o.analyse.options[a.idx].t)}</div><div class="small" style="color:var(--ok)">Attendu : ${esc(bon.t)}</div><div class="small muted">${esc(o.analyse.options[a.idx].fb || bon.fb || '')}</div>${voirAussiHtml({ ref: o.analyse.ref || o.ref, sources: o.sources, texte: `${o.titre} ${o.description || ''}` }, { max: 3 })}</div>`; }).join('') }${[...E.releves].filter(([, r]) => !r.ok).map(([id, r]) => { const o = E.obs(id); const bon = o.thermo.options.find(x => x.ok); return `<div class="fait"><div class="hd"><b>🌡️ ${esc(o.titre)}</b>${ref(o.thermo.ref)}</div><div class="small">Votre estimation : ${esc(o.thermo.options[r.idx].t)}</div><div class="small" style="color:var(--ok)">Attendu : ${esc(bon.t)}</div><div class="small muted">${esc(o.thermo.options[r.idx].fb || '')}</div></div>`; }).join('')}${[...E.analyses].some(([, a]) => !a.ok) || [...E.releves].some(([, r]) => !r.ok) ? '' : '<p class="muted">Toutes vos analyses sont correctes.</p>'}</div>
  </div></div>`);
  screen.appendChild(el);

  const S = new Scene3D($('.recon-view', el));
  S.load(scn);
  const posRef = O(sol.origine).pos;
  const pieceRef = S.niveaux.flatMap(n => n.pieces).find(p => posRef[0] >= p.x && posRef[0] <= p.x + p.w && posRef[2] >= p.z && posRef[2] <= p.z + p.d);
  const zoneRef = scn.zones.find(z => z.piece === pieceRef?.id);
  S.setFocus(zoneRef ? { ...zoneRef, zoom: (zoneRef.zoom || 1) * 0.75 } : null, null, false);
  S.setModeMurs('bas');
  const opos = h => { if (!h) return null; const p = [...h.pos]; p.alt = altitudeDe(scn.batiment, h.niveau); return p; };
  let origine = opos(O(E.rapport.origine)) || opos(O(sol.origine));
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
  $('[data-o=joueur]', el).onclick = () => { origine = opos(O(E.rapport.origine)) || opos(O(sol.origine)); if (!O(E.rapport.origine)) toast('Aucune origine déterminée dans votre rapport.', 'warn'); upd(); };
  $('[data-o=ref]', el).onclick = () => { origine = opos(O(sol.origine)); upd(); };
  ctx.onLeave = () => { if (play) cancelAnimationFrame(play); S.dispose(); };
  $$('[data-a=qg]', el).forEach(b => b.onclick = () => ctx.allerQG());
  $$('[data-a=rapport]', el)[0].onclick = () => apercuRapport(E, E.rapport, c);
}
