// Point d'entrée : bureau de l'enquêteur (missions, équipement, référentiel, carrière)
import { charger, sauver, grade, possede, reinitialiser, scenariosPerso, supprimerScenarioPerso } from './state.js';
import { SCENARIOS, A_VENIR } from './data/scenarios/index.js';
import { OUTILS, GRADES } from './data/outils.js';
import { CHAPITRES, TRACES, METHODE_SCIENTIFIQUE, NFPA_EDITION } from './data/nfpa.js';
import { MATERIAUX } from './data/materiaux.js';
import { BIBLIO, THEMES, voirAussiHtml } from './data/sources.js';
import { $, $$, h, esc, toast, modal, confirmer, ref } from './ui.js';
import { ouvrirEnquete } from './screens/enqueteView.js';
import { ouvrirAnalyse } from './screens/analyseView.js';
import { jouabilite } from './game/prepa.js';
import { BADGES, etoiles } from './game/badges.js';
import { DOMAINES, PALIERS, NOMS_NIVEAU, xpDe, progression, bonusHonoraires } from './game/competences.js';
import { entrainement as salleEntrainement } from './screens/entrainement.js';
import { FUSIONS } from './data/thermique.js';
import { son } from './game/sons.js';

const app = { c: charger(), onglet: 'missions', codex: 'methode' };
const ctx = {
  app,
  save: () => sauver(app.c),
  allerQG: (o) => allerQG(o),
  onLeave: null,
};

const etoilesHtml = n => [1, 2, 3].map(i => `<span class="${i <= n ? 'on' : ''}">★</span>`).join('');
const titreDe = id => SCENARIOS.find(s => s.id === id)?.titreCourt || id;

function allerQG(onglet) {
  if (ctx.onLeave) { ctx.onLeave(); ctx.onLeave = null; }
  document.body.classList.remove('en-jeu');
  if (onglet) app.onglet = onglet;
  const g = grade(app.c.xp);
  const pct = g.suivant ? Math.round(100 * (app.c.xp - g.xp) / (g.suivant.xp - g.xp)) : 100;
  const screen = $('#screen');
  screen.innerHTML = '';
  const el = h(`<div class="bureau"><div class="bureau-in">
    <div class="bandeau">
      <div class="avatar">🕵️</div>
      <div><h1>${esc(app.c.nom === 'Enquêteur' ? 'Bureau de l\'enquêteur' : app.c.nom)}</h1><div class="sub">RCCI · L'Enquêteur — méthode ${NFPA_EDITION}</div></div>
      <div class="grade-b"><div style="display:flex;justify-content:space-between"><b>🎖️ ${esc(g.nom)}</b><span>${app.c.xp} XP</span></div>
        <div class="xpbar"><i style="width:${pct}%"></i></div>
        <div class="small" style="display:flex;justify-content:space-between;margin-top:4px;color:#d7c6a8"><span>${g.suivant ? `prochain : ${esc(g.suivant.nom)}` : 'grade maximal'}</span><span style="color:#ffd23f;font-weight:800">${app.c.credits.toLocaleString('fr-FR')} cr</span></div></div>
    </div>
    <nav class="qtabs">${[['missions', '🗂️ Enquêtes'], ['entrainement', '🎯 Entraînement'], ['competences', '🎓 Compétences'], ['equipement', '🧰 Équipement'], ['codex', '📚 Référentiel'], ['carriere', '🏅 Carrière']].map(([id, l]) => `<button class="qtab ${app.onglet === id ? 'on' : ''}" data-o="${id}">${l}</button>`).join('')}
      <a class="qtab" href="editor.html" style="text-decoration:none;margin-left:auto">🛠️ Atelier de scènes</a></nav>
    <div class="tableau" id="qgBody"></div>
  </div></div>`);
  screen.appendChild(el);
  $$('[data-o]', el).forEach(b => b.onclick = () => { son('page'); allerQG(b.dataset.o); });
  const body = $('#qgBody', el);
  ({ missions, entrainement: b2 => salleEntrainement(b2, ctx), competences, equipement, codex, carriere })[app.onglet](body);
}

// ------------------------------------------------------------ Enquêtes
async function missions(b) {
  const perso = await scenariosPerso();
  const jamais = !Object.keys(app.c.missions).length;
  const deverrouille = s => !s.requiert || (app.c.missions[s.requiert]?.meilleur ?? 0) >= 40;
  const dossier = (s, i, opts = {}) => {
    const m = app.c.missions[s.id];
    const okNiv = deverrouille(s);
    const manqueOutil = okNiv && s.outilRequis && !possede(app.c, s.outilRequis) ? OUTILS.find(o => o.id === s.outilRequis) : null;
    const ok = okNiv && !manqueOutil;
    const jeu = opts.perso ? jouabilite(s) : { ok: true };
    return `<div class="dossier ${ok ? '' : 'verrou'}"><span class="punaise"></span>
      ${ok && !m && !opts.perso ? '<span class="tampon-n">NOUVEAU</span>' : ''}
      <div class="niv">${esc(s.niveauLabel || (opts.perso ? (s.mode === 'retex' ? 'Dossier RETEX' : 'Scénario formateur') : `Niveau ${i + 1}`))}</div>
      <h3>${esc(s.titreCourt || s.titre)}</h3>
      <p>${esc(s.resume || '')}</p>
      ${!okNiv ? `<p><b>🔒 Termine d'abord « ${esc(titreDe(s.requiert))} » (au moins 1 ★).</b></p>` : manqueOutil ? `<p><b>🔒 Il te faut : ${manqueOutil.icone} ${esc(manqueOutil.nom)}</b> (onglet Équipement, ${manqueOutil.prix.toLocaleString('fr-FR')} cr${manqueOutil.grade ? `, grade « ${esc(GRADES[manqueOutil.grade].nom)} »` : ''}).</p>` : ''}
      <div class="pied"><span class="etoiles">${etoilesHtml(etoiles(m?.meilleur ?? -1))}</span><span style="flex:1"></span>
        ${opts.perso ? `<button class="btn-j" data-ana="${esc(s.id)}">📘 Analyse</button>` : ''}
        ${ok && jeu.ok ? `<button class="btn-j go" data-go="${esc(s.id)}">${m ? '↻ Rejouer' : '▶ Commencer'}</button>` : opts.perso && !jeu.ok ? '<span class="small">non jouable</span>' : ''}
        ${opts.perso ? `<button class="btn-j ghost" data-del="${esc(s.id)}" title="Supprimer">🗑</button>` : ''}</div></div>`;
  };
  b.innerHTML = `${jamais ? `<div class="hcarte" style="max-width:640px;margin:0 auto 22px;display:flex;gap:12px;align-items:center"><span style="font-size:40px">👨‍🚒</span><div><b>Bienvenue, stagiaire !</b><br>Je suis le capitaine Ferrand. On commence ensemble par le <b>niveau 1</b> : un petit feu de cuisine, en doublon. Je te montre la méthode pas à pas.</div></div>` : ''}
    <div class="chemin">${SCENARIOS.map((s, i) => dossier(s, i)).join('')}${perso.map((s, i) => dossier(s, i, { perso: true })).join('')}
    ${A_VENIR.map(s => `<div class="dossier verrou"><span class="punaise"></span><div class="niv">Bientôt</div><h3>${esc(s.titre)}</h3><p>${esc(s.resume)}</p></div>`).join('')}</div>`;
  $$('[data-go]', b).forEach(x => x.onclick = () => lancer(SCENARIOS.find(y => y.id === x.dataset.go) || perso.find(y => y.id === x.dataset.go)));
  $$('[data-ana]', b).forEach(x => x.onclick = () => {
    const s = perso.find(y => y.id === x.dataset.ana);
    if (ctx.onLeave) { ctx.onLeave(); ctx.onLeave = null; }
    const v = ouvrirAnalyse(s, $('#screen'), { onClose: () => allerQG() });
    ctx.onLeave = () => v.dispose();
  });
  $$('[data-del]', b).forEach(x => x.onclick = async () => {
    if (await confirmer('Supprimer ce scénario ?', 'Il sera retiré de ce navigateur.', 'Supprimer')) { await supprimerScenarioPerso(x.dataset.del); allerQG(); }
  });
}

function lancer(scn) {
  try {
    ctx.onLeave = null;
    document.body.classList.add('en-jeu');
    son('page');
    ouvrirEnquete(scn, ctx);
  } catch (e) {
    console.error(e);
    toast('Impossible de lancer ce scénario : ' + esc(e.message), 'ko', 6000);
    allerQG();
  }
}

// ------------------------------------------------------------ Compétences
function competences(b) {
  const bonus = Math.round(bonusHonoraires(app.c) * 100);
  b.innerHTML = `<div class="hcarte" style="margin-bottom:16px;display:flex;gap:12px;align-items:center"><span style="font-size:36px">🎓</span><div>Tes compétences progressent à chaque analyse juste, en enquête comme à l'entraînement. Chaque niveau gagné augmente tes honoraires de 1 % (bonus actuel : <b>+${bonus} %</b>). Au <b>niveau 3</b>, chaque compétence débloque un avantage sur le terrain.</div></div>
    <div class="comp-grille">${DOMAINES.map(d => {
      const xp = xpDe(app.c, d.id), p = progression(xp);
      return `<div class="comp-carte ${p.n >= 3 ? 'av' : ''}"><div class="hd"><span class="ic">${d.ic}</span><div><b>${esc(d.nom)}</b><small>${esc(d.desc)}</small></div><span class="niv">Niv. ${p.n}</span></div>
        <div class="xpbar"><i style="width:${p.pct}%"></i></div>
        <div class="small" style="display:flex;justify-content:space-between;margin-top:3px"><span>${NOMS_NIVEAU[p.n - 1]}</span><span>${xp} pts${p.reste ? ` · encore ${p.reste} pour « ${NOMS_NIVEAU[p.n]} »` : ' · maîtrise'}</span></div>
        <div class="avant ${p.n >= 3 ? 'ok' : ''}">${p.n >= 3 ? '✅' : '🔒'} <b>${esc(d.avantage.nom)}</b> — ${esc(d.avantage.desc)}${p.n >= 3 ? '' : ' <i>(niveau 3)</i>'}</div></div>`;
    }).join('')}</div>
    <p class="hcarte small" style="margin-top:12px">Paliers : ${PALIERS.map((v, i) => `${NOMS_NIVEAU[i]} ${v}`).join(' · ')}. Une enquête rejouée rapporte moitié moins.</p>`;
}

// ------------------------------------------------------------ Équipement
function equipement(b) {
  const g = grade(app.c.xp);
  b.innerHTML = `<div class="hcarte" style="margin-bottom:16px">🧰 Chaque outil ouvre de nouveaux indices sur les scènes : sans jauge, pas de relevé de carbonisation ; sans contenants adaptés, pas d'analyse d'accélérant exploitable ; sans kit, pas de cartographie des arcs.</div>
    <div class="boutique">${OUTILS.filter(o => !o.base).map(o => {
      const own = possede(app.c, o.id);
      const lockG = (o.grade || 0) > g.n;
      return `<div class="objet-b ${own ? 'owned' : ''}"><span class="ic">${o.icone}</span><h4>${esc(o.nom)}</h4><p>${esc(o.desc)}</p><div>${ref(o.ref)}</div>
        <div>${own ? '<span class="tampon ok">ACQUIS</span>' : lockG ? `<span class="small">🔒 ${esc(GRADES[o.grade].nom)}</span>` : `<button class="btn-j go" data-buy="${o.id}" ${app.c.credits < o.prix ? 'disabled' : ''}>Acheter · <span class="etiquette-prix">${o.prix.toLocaleString('fr-FR')} cr</span></button>`}</div></div>`;
    }).join('')}</div>`;
  $$('[data-buy]', b).forEach(x => x.onclick = () => {
    const o = OUTILS.find(y => y.id === x.dataset.buy);
    if (app.c.credits < o.prix) return;
    app.c.credits -= o.prix; app.c.outils.push(o.id); ctx.save();
    son('ok'); toast(`${o.icone} ${esc(o.nom)} acquis !`, 'ok');
    allerQG('equipement');
  });
}

// ------------------------------------------------------------ Référentiel
function codex(b) {
  const nav = [['methode', 'Méthode scientifique'], ['biblio', '📚 Sources et bibliographie'], ...CHAPITRES.map(c => [`ch${c.n}`, `Chap. ${c.n} — ${c.titre}`]), ['traces', 'Glossaire des tracés'], ['ignition', 'Sources d\'ignition (°C)'], ['puissance', 'Puissances (HRR)'], ['fusion', 'Fusion / inflammation'], ['reperes', 'Repères thermiques']];
  b.innerHTML = `<div class="codex" style="background:var(--bg);border-radius:12px;padding:14px;color:var(--txt)"><nav>${nav.map(([id, l]) => `<button class="${app.codex === id ? 'on' : ''}" data-c="${id}">${esc(l)}</button>`).join('')}</nav><div id="cx"></div></div>`;
  $$('[data-c]', b).forEach(x => x.onclick = () => { app.codex = x.dataset.c; codex(b); });
  const cx = $('#cx', b);
  const k = app.codex;
  if (k === 'methode') {
    cx.innerHTML = `<div class="panel"><h3>Méthode scientifique ${ref('4.3')}</h3>${METHODE_SCIENTIFIQUE.map((m, i) => `<p><b>${i + 1}. ${esc(m.titre)}</b> ${ref(m.ref)}<br><span class="muted">${esc(m.texte)}</span></p>`).join('')}
      ${voirAussiHtml('4.3', { max: 5, ouvert: true })}
      <p class="small muted">Textes reformulés à des fins pédagogiques. Numérotation : ${NFPA_EDITION}. « NFPA 921 – chap. 4.3.6 » se lit : chapitre 4, section 4.3.6.</p></div>`;
  } else if (k === 'biblio') {
    const autres = Object.entries(BIBLIO).filter(([, b]) => !b.base);
    const nb = id => THEMES.filter(t => t.voir.some(v => v[0] === id)).length;
    cx.innerHTML = `<div class="panel"><h3>La référence de base : NFPA 921</h3>
      <p>Tout le jeu suit la <b>${esc(BIBLIO.nfpa921.ref)}</b> Chaque référence s'écrit <span class="ref">NFPA 921 – chap. 6.3.7.1</span> : chapitre 6, section 6.3.7.1 de l'édition 2011.</p>
      <p class="muted small">Les autres ouvrages ci-dessous ne remplacent pas la NFPA 921 : ils l'illustrent, la complètent par des essais, des cas réels et la pratique française. Ils apparaissent dans les fiches d'indices (« 📚 Ce qu'en disent d'autres références »), au débriefing et dans les dossiers d'analyse.</p></div>
      <div class="panel"><h3>Pour aller plus loin</h3><table><tr><th>Ouvrage</th><th>Ce qu'on y trouve</th><th style="width:70px">Thèmes</th></tr>${autres.map(([id, b]) => `<tr><td><b>${esc(b.court)}${b.annee ? ` (${b.annee})` : ''}</b> <span class="small muted">${b.langue === 'fr' ? '🇫🇷' : '🇬🇧'}</span><div class="small muted">${esc(b.ref)}</div></td><td>${esc(b.role)}</td><td>${nb(id)}</td></tr>`).join('')}</table></div>
      <div class="panel"><h3>Correspondances par thème</h3>${THEMES.map(t => `<details class="voir"><summary><b>${esc(t.titre)}</b> ${ref(t.nfpa.join(' / '))}</summary><ul>${t.voir.map(([sid, loc, note]) => `<li><b title="${esc(BIBLIO[sid].ref)}">${esc(BIBLIO[sid].court)}${BIBLIO[sid].annee ? ` (${BIBLIO[sid].annee})` : ''}</b>, ${esc(loc)} — ${esc(note)}</li>`).join('')}</ul></details>`).join('')}</div>`;
  } else if (k.startsWith('ch')) {
    const c = CHAPITRES.find(x => `ch${x.n}` === k);
    cx.innerHTML = `<div class="panel"><h3>Chapitre ${c.n} — ${esc(c.titre)}</h3><table><tr><th style="width:175px">Réf.</th><th>Notion clé</th></tr>${c.cle.map(([r, t]) => `<tr><td>${ref(r)}</td><td>${esc(t)}${voirAussiHtml({ ref: r, texte: t }, { max: 3, titre: '📚 Voir aussi' })}</td></tr>`).join('')}</table></div>`;
  } else if (k === 'traces') {
    cx.innerHTML = `<div class="panel"><table><tr><th>Tracé</th><th>Réf.</th><th>Lecture</th></tr>${TRACES.map(t => `<tr><td><b>${esc(t.nom)}</b></td><td>${ref(t.ref)}</td><td>${esc(t.def)}${voirAussiHtml({ ref: t.ref, texte: t.nom }, { max: 3, titre: '📚 Voir aussi' })}</td></tr>`).join('')}</table></div>`;
  } else if (k === 'ignition') {
    cx.innerHTML = `<div class="panel"><table><tr><th>Source</th><th>Min (°C)</th><th>Max (°C)</th></tr>${MATERIAUX.ignition.map(s => `<tr><td>${esc(s.source)}</td><td>${s.min ?? ''}</td><td>${s.max ?? ''}</td></tr>`).join('')}</table>
      <h3 style="margin-top:14px">Couleur de flamme</h3><table>${MATERIAUX.flamme.map(f => `<tr><td>${esc(f.couleur)}</td><td>${esc(f.temp)}</td></tr>`).join('')}</table></div>`;
  } else if (k === 'puissance') {
    cx.innerHTML = `<div class="panel"><table><tr><th>Combustible</th><th>Puissance (kW)</th></tr>${MATERIAUX.puissance.map(p => `<tr><td>${esc(p.combustible)}</td><td>${esc(p.kw)}</td></tr>`).join('')}</table></div>`;
  } else if (k === 'fusion') {
    cx.innerHTML = `<div class="panel"><h3>Témoins de température ${ref('6.2.8')}</h3><p class="small muted">Un matériau fondu prouve une température <b>minimale</b> atteinte à cet endroit ; un matériau intact, une température <b>maximale</b>. Valeurs approchées (NFPA 921, tableau 6.2.8.2 ; CNPP EP 02-11, § 2.2.2) : la composition réelle varie, seul un laboratoire donne une valeur sûre. Attention aux alliages : un métal à bas point de fusion (aluminium, zinc, plomb) fait « fondre » le cuivre ou l'acier bien plus bas ${ref('6.2.8.6')}.</p>
      <table><tr><th>Matériau</th><th>On le trouve dans…</th><th style="width:120px">°C</th></tr>${FUSIONS.map(f => `<tr><td><b>${esc(f.nom)}</b>${f.seuil ? ` <span class="small muted">(${esc(f.seuil)})</span>` : ''}</td><td class="small">${esc(f.ex)}</td><td>${esc(f.plage)}</td></tr>`).join('')}</table></div>
      <div class="panel"><h3>Tableau mnémotechnique (version de l'auteur)</h3><input class="inp" id="fq" placeholder="Filtrer (ex. PVC, cuivre, aluminium)…" style="width:100%;margin-bottom:8px"><table id="ft"></table></div>`;
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
  const gagnes = new Set(app.c.badges || []);
  b.innerHTML = `<div class="panel"><h3>🏅 Badges (${gagnes.size}/${BADGES.length})</h3><div class="badges">${BADGES.map(x => `<div class="badge ${gagnes.has(x.id) ? '' : 'off'}"><span class="ic">${x.ic}</span><b>${esc(x.nom)}</b><br>${esc(x.desc)}</div>`).join('')}</div></div>
  <div class="hero">
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

allerQG();
