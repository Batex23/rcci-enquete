// Point d'entrée : QG (missions, équipement, référentiel, carrière)
import { charger, sauver, grade, possede, reinitialiser, scenariosPerso, supprimerScenarioPerso } from './state.js';
import { SCENARIOS, A_VENIR } from './data/scenarios/index.js';
import { OUTILS, GRADES } from './data/outils.js';
import { CHAPITRES, TRACES, METHODE_SCIENTIFIQUE, NFPA_EDITION } from './data/nfpa.js';
import { MATERIAUX } from './data/materiaux.js';
import { $, $$, h, esc, toast, modal, confirmer, ref } from './ui.js';
import { ouvrirEnquete } from './screens/enqueteView.js';
import { ouvrirAnalyse } from './screens/analyseView.js';
import { jouabilite } from './game/prepa.js';

const app = { c: charger(), onglet: 'missions', codex: 'methode' };
const ctx = {
  app,
  save: () => { sauver(app.c); renderTopbar(); },
  allerQG: (o) => allerQG(o),
  onLeave: null,
};

function renderTopbar() {
  const g = grade(app.c.xp);
  const pct = g.suivant ? Math.round(100 * (app.c.xp - g.xp) / (g.suivant.xp - g.xp)) : 100;
  $('#topbar').innerHTML = `
    <div class="logo" data-a="qg"><div class="logo-mark">🔥</div><div>RCCI · L'Enquêteur<small>Méthodologie ${NFPA_EDITION}</small></div></div>
    <div class="tb-sp"></div>
    <div class="tb-stat">Grade<b>${esc(g.nom)}</b><span class="xpbar"><i style="width:${pct}%"></i></span></div>
    <div class="tb-stat">Expérience<b>${app.c.xp.toLocaleString('fr-FR')} XP${g.suivant ? ` <span class="muted small">/ ${g.suivant.xp}</span>` : ''}</b></div>
    <div class="tb-stat cred">Crédits<b>${app.c.credits.toLocaleString('fr-FR')} cr</b></div>`;
  $('[data-a=qg]', $('#topbar')).onclick = () => { if (!document.querySelector('.enq')) allerQG(); };
}

function allerQG(onglet) {
  if (ctx.onLeave) { ctx.onLeave(); ctx.onLeave = null; }
  if (onglet) app.onglet = onglet;
  renderTopbar();
  const screen = $('#screen');
  screen.innerHTML = '';
  const g = grade(app.c.xp);
  const el = h(`<div class="qg"><div class="qg-inner">
    <div class="hero">
      <div class="hero-card">
        <div class="kicker">Quartier général</div>
        <h1>Devenez expert en recherche des causes et circonstances d'incendie</h1>
        <p class="muted">Chaque enquête se mène selon la méthode scientifique de la NFPA 921 : sécurité, constatations de l'extérieur vers l'intérieur, lecture des tracés, fouille par couches, prélèvements, entretiens, sources ouvertes, hypothèses testées, rapport. Les crédits gagnés financent vos outils, votre véhicule, votre laboratoire.</p>
        <div class="steps">${METHODE_SCIENTIFIQUE.map((m, i) => `<span>${i + 1}. ${esc(m.titre)}</span>`).join('')}</div>
      </div>
      <div class="hero-card">
        <div class="kicker">Votre dossier</div>
        <p><b style="font-size:18px">${esc(g.nom)}</b><br><span class="muted">${app.c.xp} XP${g.suivant ? ` · prochain grade : ${esc(g.suivant.nom)} à ${g.suivant.xp} XP` : ''}</span></p>
        <p>Équipement : ${app.c.outils.length} / ${OUTILS.length} · Enquêtes réussies : ${Object.values(app.c.missions).filter(m => m.meilleur >= 50).length}</p>
        <p class="small muted">Mode : ${app.c.reglages.feedback === 'differe' ? 'Expertise (correction différée)' : 'Formation (correction immédiate)'} · aide à la recherche ${app.c.reglages.lueurs ? 'activée' : 'désactivée'}</p>
        <a class="btn btn-sm" href="editor.html" style="text-decoration:none;display:inline-block">🛠️ Éditeur formateur</a>
      </div>
    </div>
    <nav class="tabs">${[['missions', '🗂️ Missions'], ['equipement', '🧰 Équipement'], ['codex', '📚 Référentiel'], ['carriere', '🎖️ Carrière & réglages']].map(([id, l]) => `<button class="tab ${app.onglet === id ? 'on' : ''}" data-o="${id}">${l}</button>`).join('')}</nav>
    <div id="qgBody"></div>
  </div></div>`);
  screen.appendChild(el);
  $$('[data-o]', el).forEach(b => b.onclick = () => allerQG(b.dataset.o));
  const body = $('#qgBody', el);
  ({ missions, equipement, codex, carriere })[app.onglet](body);
}

// ------------------------------------------------------------ Missions
async function missions(b) {
  const g = grade(app.c.xp);
  b.innerHTML = '<p class="muted">Chargement…</p>';
  const perso = await scenariosPerso();
  const carte = (s, opts = {}) => {
    const best = app.c.missions[s.id]?.meilleur;
    const lock = (s.gradeMin || 0) > g.n;
    const jeu = opts.perso ? jouabilite(s) : { ok: true };
    return `<div class="mcard ${lock ? 'lock' : ''}">
      <div class="type">${esc(s.type || 'habitation')}${s.mode === 'retex' ? ' · RETEX' : opts.perso ? ' · formateur' : ''}${(s.photos || []).length ? ` · ${s.photos.length} photo(s)` : ''}</div>
      <h3>${esc(s.titre)}</h3>
      <p class="small muted">${esc(s.resume || '')}</p>
      <div class="foot">
        <span class="chip">Difficulté ${'★'.repeat(s.difficulte || 1)}</span>
        ${s.recompense ? `<span class="chip">${s.recompense.credits.toLocaleString('fr-FR')}+ cr</span>` : ''}
        ${best != null ? `<span class="chip ${best >= 70 ? 'ok' : best >= 50 ? 'warn' : 'ko'}">meilleur : ${best}</span>` : ''}
        <span style="flex:1"></span>
        ${opts.perso ? `<button class="btn btn-sm" data-ana="${esc(s.id)}">📘 Vue analyse</button>` : ''}
        ${lock ? `<span class="chip">🔒 ${esc(GRADES[s.gradeMin].nom)}</span>` : jeu.ok ? `<button class="btn btn-primary btn-sm" data-go="${esc(s.id)}">${best != null ? 'Rejouer' : 'Lancer l\'enquête'}</button>` : `<span class="chip warn" title="Manque : ${esc(jeu.manques.join(', '))}">non jouable</span>`}
        ${opts.perso ? `<button class="btn btn-sm btn-ghost" data-del="${esc(s.id)}" title="Supprimer">🗑</button>` : ''}
      </div></div>`;
  };
  b.innerHTML = `
    <div class="grid-missions">${SCENARIOS.map(s => carte(s)).join('')}${perso.map(s => carte(s, { perso: true })).join('')}</div>
    <h3 style="margin-top:24px">Enquêtes à venir</h3>
    <div class="grid-missions">${A_VENIR.map(s => `<div class="mcard lock"><div class="type">${esc(s.type)}</div><h3>${esc(s.titre)}</h3><p class="small muted">${esc(s.resume)}</p>
      <div class="foot"><span class="chip">🔒 ${esc(GRADES[s.gradeMin].nom)}</span>${s.outil ? `<span class="chip">requiert : ${esc(OUTILS.find(o => o.id === s.outil).nom)}</span>` : ''}<span class="ref">${esc(s.ref)}</span></div></div>`).join('')}</div>`;
  $$('[data-go]', b).forEach(x => x.onclick = () => {
    const s = SCENARIOS.find(y => y.id === x.dataset.go) || perso.find(y => y.id === x.dataset.go);
    lancer(s);
  });
  $$('[data-ana]', b).forEach(x => x.onclick = () => {
    const s = perso.find(y => y.id === x.dataset.ana);
    if (ctx.onLeave) { ctx.onLeave(); ctx.onLeave = null; }
    const v = ouvrirAnalyse(s, $('#screen'), { onClose: () => allerQG() });
    ctx.onLeave = () => v.dispose();
  });
  $$('[data-del]', b).forEach(x => x.onclick = async () => {
    if (await confirmer('Supprimer ce scénario ?', 'Le scénario formateur sera retiré de ce navigateur.', 'Supprimer')) { await supprimerScenarioPerso(x.dataset.del); allerQG(); }
  });
}

function lancer(scn) {
  try {
    ctx.onLeave = null;
    renderTopbar();
    ouvrirEnquete(scn, ctx);
  } catch (e) {
    console.error(e);
    toast('Impossible de lancer ce scénario : ' + esc(e.message), 'ko', 6000);
    allerQG();
  }
}

// ------------------------------------------------------------ Équipement
function equipement(b) {
  const g = grade(app.c.xp);
  b.innerHTML = `<p class="muted">Les outils ouvrent de nouvelles données sur les scènes : sans jauge, pas de relevé de carbonisation ; sans contenants adaptés, pas de recherche d'accélérant exploitable ; sans kit, pas de cartographie des arcs.</p>
    <div class="shop">${OUTILS.map(o => {
      const own = possede(app.c, o.id);
      const lockG = (o.grade || 0) > g.n;
      return `<div class="tool ${own ? 'owned' : ''}"><div class="ic">${o.icone}</div><h4>${esc(o.nom)}</h4><div class="small muted">${esc(o.desc)}</div><div>${ref(o.ref)}</div>
        <div class="act">${own ? '<span class="chip ok">✔ acquis</span>' : lockG ? `<span class="chip">🔒 ${esc(GRADES[o.grade].nom)}</span>` : `<button class="btn btn-sm btn-primary" data-buy="${o.id}" ${app.c.credits < o.prix ? 'disabled' : ''}>Acquérir — ${o.prix.toLocaleString('fr-FR')} cr</button>`}</div></div>`;
    }).join('')}</div>`;
  $$('[data-buy]', b).forEach(x => x.onclick = () => {
    const o = OUTILS.find(y => y.id === x.dataset.buy);
    if (app.c.credits < o.prix) return;
    app.c.credits -= o.prix; app.c.outils.push(o.id); ctx.save();
    toast(`${o.icone} ${esc(o.nom)} acquis.`, 'ok');
    allerQG('equipement');
  });
}

// ------------------------------------------------------------ Référentiel
function codex(b) {
  const nav = [['methode', 'Méthode scientifique'], ...CHAPITRES.map(c => [`ch${c.n}`, `Chap. ${c.n} — ${c.titre}`]), ['traces', 'Glossaire des tracés'], ['ignition', 'Sources d\'ignition (°C)'], ['puissance', 'Puissances (HRR)'], ['fusion', 'Fusion / inflammation'], ['reperes', 'Repères thermiques']];
  b.innerHTML = `<div class="codex"><nav>${nav.map(([id, l]) => `<button class="${app.codex === id ? 'on' : ''}" data-c="${id}">${esc(l)}</button>`).join('')}</nav><div id="cx"></div></div>`;
  $$('[data-c]', b).forEach(x => x.onclick = () => { app.codex = x.dataset.c; codex(b); });
  const cx = $('#cx', b);
  const k = app.codex;
  if (k === 'methode') {
    cx.innerHTML = `<div class="panel"><h3>Méthode scientifique ${ref('4.3')}</h3>${METHODE_SCIENTIFIQUE.map((m, i) => `<p><b>${i + 1}. ${esc(m.titre)}</b> ${ref(m.ref)}<br><span class="muted">${esc(m.texte)}</span></p>`).join('')}
      <p class="small muted">Textes reformulés à des fins pédagogiques. Numérotation : ${NFPA_EDITION}.</p></div>`;
  } else if (k.startsWith('ch')) {
    const c = CHAPITRES.find(x => `ch${x.n}` === k);
    cx.innerHTML = `<div class="panel"><h3>Chapitre ${c.n} — ${esc(c.titre)}</h3><table><tr><th style="width:90px">Réf.</th><th>Notion clé</th></tr>${c.cle.map(([r, t]) => `<tr><td>${ref(r)}</td><td>${esc(t)}</td></tr>`).join('')}</table></div>`;
  } else if (k === 'traces') {
    cx.innerHTML = `<div class="panel"><table><tr><th>Tracé</th><th>Réf.</th><th>Lecture</th></tr>${TRACES.map(t => `<tr><td><b>${esc(t.nom)}</b></td><td>${ref(t.ref)}</td><td>${esc(t.def)}</td></tr>`).join('')}</table></div>`;
  } else if (k === 'ignition') {
    cx.innerHTML = `<div class="panel"><table><tr><th>Source</th><th>Min (°C)</th><th>Max (°C)</th></tr>${MATERIAUX.ignition.map(s => `<tr><td>${esc(s.source)}</td><td>${s.min ?? ''}</td><td>${s.max ?? ''}</td></tr>`).join('')}</table>
      <h3 style="margin-top:14px">Couleur de flamme</h3><table>${MATERIAUX.flamme.map(f => `<tr><td>${esc(f.couleur)}</td><td>${esc(f.temp)}</td></tr>`).join('')}</table></div>`;
  } else if (k === 'puissance') {
    cx.innerHTML = `<div class="panel"><table><tr><th>Combustible</th><th>Puissance (kW)</th></tr>${MATERIAUX.puissance.map(p => `<tr><td>${esc(p.combustible)}</td><td>${esc(p.kw)}</td></tr>`).join('')}</table></div>`;
  } else if (k === 'fusion') {
    cx.innerHTML = `<div class="panel"><input class="inp" id="fq" placeholder="Filtrer (ex. PVC, cuivre, aluminium)…" style="width:100%;margin-bottom:8px"><table id="ft"></table></div>`;
    const draw = () => {
      const q = $('#fq', cx).value.toLowerCase();
      $('#ft', cx).innerHTML = `<tr><th>Type</th><th>Matériau</th><th>°C</th><th>Usages</th></tr>` + MATERIAUX.fusion.filter(f => !q || (f.mat + f.usage).toLowerCase().includes(q)).map(f => `<tr><td>${esc(f.type)}</td><td>${esc(f.mat)}</td><td>${f.min}${f.max !== f.min ? '–' + f.max : ''}</td><td class="small muted">${esc(f.usage)}</td></tr>`).join('');
    };
    $('#fq', cx).oninput = draw; draw();
  } else if (k === 'reperes') {
    cx.innerHTML = `<div class="panel"><table>${MATERIAUX.reperes.map(r => `<tr><td>${esc(r.nom)}</td><td>${esc(r.temp)}</td></tr>`).join('')}</table>
      <h3 style="margin-top:14px">Disparition de la suie (temps selon température)</h3><table><tr><th>Température (°C)</th><th>Durée (min)</th></tr>${MATERIAUX.suie.map(s => `<tr><td>${s.temp}</td><td>${s.min}</td></tr>`).join('')}</table></div>`;
  }
}

// ------------------------------------------------------------ Carrière
function carriere(b) {
  const r = app.c.reglages;
  b.innerHTML = `<div class="hero">
    <div class="panel"><h3>Réglages pédagogiques</h3>
      <div class="form-row"><label>Nom de l'enquêteur</label><input class="inp" id="rgN" value="${esc(app.c.nom)}"></div>
      <div class="form-row"><label>Correction</label><select class="inp" id="rgF"><option value="immediat">Formation : correction immédiate de chaque analyse et écart</option><option value="differe">Expertise : tout est révélé au débriefing</option></select></div>
      <div class="form-row"><label>Aide à la recherche</label><select class="inp" id="rgL"><option value="1">Lueurs sur les points d'intérêt non relevés</option><option value="0">Aucune aide (recherche libre)</option></select></div>
      <button class="btn btn-primary" id="rgS">Enregistrer</button>
    </div>
    <div class="panel"><h3>Sauvegarde</h3>
      <p class="small muted">La progression est conservée dans ce navigateur. Exportez-la pour changer de poste.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" id="exp">Exporter</button><label class="btn">Importer<input type="file" id="imp" accept=".json" hidden></label><button class="btn btn-ghost" id="rst" style="color:var(--ko)">Réinitialiser la carrière</button></div>
      <h3 style="margin-top:16px">Historique</h3>
      ${app.c.journal.length ? `<table class="det">${app.c.journal.map(j => `<tr><td>${esc(j.date)}</td><td>${esc(j.mission)}</td><td class="p">${j.score}/100</td></tr>`).join('')}</table>` : '<p class="muted">Aucune enquête terminée.</p>'}
    </div></div>`;
  $('#rgF', b).value = r.feedback; $('#rgL', b).value = r.lueurs ? '1' : '0';
  $('#rgS', b).onclick = () => { app.c.nom = $('#rgN', b).value || 'Enquêteur'; r.feedback = $('#rgF', b).value; r.lueurs = $('#rgL', b).value === '1'; ctx.save(); toast('Réglages enregistrés.', 'ok'); };
  $('#exp', b).onclick = () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(app.c, null, 2)], { type: 'application/json' }));
    a.download = 'rcci-carriere.json'; a.click();
  };
  $('#imp', b).onchange = async e => {
    try { const d = JSON.parse(await e.target.files[0].text()); if (typeof d.xp !== 'number') throw new Error('format'); app.c = { ...app.c, ...d }; ctx.app.c = app.c; ctx.save(); toast('Carrière importée.', 'ok'); allerQG('carriere'); }
    catch { toast('Fichier de sauvegarde invalide.', 'ko'); }
  };
  $('#rst', b).onclick = async () => { if (await confirmer('Réinitialiser ?', 'XP, crédits, équipements et historique seront effacés.', 'Réinitialiser')) { app.c = reinitialiser(); ctx.app.c = app.c; ctx.save(); allerQG('carriere'); } };
}

renderTopbar();
allerQG();
