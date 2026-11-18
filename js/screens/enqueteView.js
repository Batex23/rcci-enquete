// Écran d'enquête : scène 3D + panneaux méthode / dossier
import { Scene3D } from '../engine/scene3d.js';
import { Enquete } from '../game/enquete.js';
import { OUTILS, CONTENANTS } from '../data/outils.js';
import { METHODE_SCIENTIFIQUE, CLASSIFICATIONS, CERTITUDES } from '../data/nfpa.js';
import { $, $$, h, esc, toast, modal, confirmer, ref } from '../ui.js';
import { calculateur, testCompetence } from './outilsAnalyse.js';
import { ouvrirDebrief } from './debrief.js';
import { apercuRapport } from './rapport.js';

const BARRE = ['observer', 'photo', 'jauge', 'pid', 'arc', 'fouille', 'prelever', 'calc'];
const SOURCES_OSINT = [
  ['tout', 'Toutes les sources'], ['reseaux', 'Réseaux sociaux'], ['meteo', 'Archives météo'], ['rappel', 'RappelConso'],
  ['presse', 'Presse locale'], ['cadastre', 'Cadastre / Géoportail'], ['societes', 'Registres sociétés (pro)'],
];

export function ouvrirEnquete(scnSrc, ctx) {
  const scn = structuredClone(scnSrc);
  const E = new Enquete(scn, ctx.app.c);
  const reg = ctx.app.c.reglages;
  const immediat = reg.feedback !== 'differe';
  const ui = { outil: 'observer', onglet: 'dossier', carte: null, osintRes: [] };

  const screen = $('#screen');
  screen.innerHTML = '';
  const root = h(`<div class="enq">
    <aside class="enq-left"></aside>
    <section class="viewport">
      <div class="ov ov-zone"></div>
      <div class="ov ov-view">
        <button class="btn btn-sm" data-v="rotg" title="Pivoter (Q)">⟲</button>
        <button class="btn btn-sm" data-v="rotd" title="Pivoter (E)">⟳</button>
        <button class="btn btn-sm" data-v="murs" title="Affichage des murs">🧱 Murs : auto</button>
        <button class="btn btn-sm" data-v="vue" title="Vue générale">🏠 Vue générale</button>
        <button class="btn btn-sm" data-v="dessus" title="Vue aérienne (drone)">🚁 Aérien</button>
      </div>
      <div class="ov ov-card" hidden></div>
      <div class="ov ov-fouille" hidden></div>
      <div class="ov toolbar"></div>
    </section>
    <aside class="enq-right"><nav class="rtabs"></nav><div class="rbody"></div></aside>
  </div>`);
  screen.appendChild(root);
  const S = new Scene3D($('.viewport', root));
  S.load(scn);
  S.setHotspots(scn.observations.map(o => ({ id: o.id, pos: o.pos })));
  S.onPick = onPick;
  ctx.onLeave = () => { S.dispose(); document.removeEventListener('keydown', onKey); };

  // ------------------------------------------------------------ rendus
  function refreshHotspots() {
    for (const o of scn.observations) {
      const d = E.decouverts.get(o.id);
      S.updateHotspot(o.id, { actif: E.estActif(o), decouvert: !!d, num: d?.num, photo: E.photoObs.has(o.id), analyse: E.analyses.has(o.id), lueur: reg.lueurs && !o.outil, toujours: !!d });
    }
  }

  function renderLeft() {
    const p = E.progression();
    const el = $('.enq-left', root);
    el.innerHTML = `
      <div>
        <div class="sec-t">Mission <button class="btn btn-sm btn-ghost" data-a="brief">Briefing</button></div>
        <div style="font-weight:700">${esc(scn.titre)}</div>
        <div class="muted small">${esc(scn.mission.adresse)}</div>
      </div>
      <div>
        <div class="sec-t">Méthode scientifique ${ref('4.3')}</div>
        <ul class="methode">${METHODE_SCIENTIFIQUE.map(m => `<li class="${p[m.id] >= 1 ? 'done' : ''}" title="${esc(m.texte)}"><span class="dot"><i style="--p:${Math.round((p[m.id] || 0) * 100)}%"></i></span><span>${esc(m.titre)}</span><span class="kbd">${m.ref.split(' ')[0]}</span></li>`).join('')}</ul>
      </div>
      <div>
        <div class="sec-t">Sécurité ${ref('12')}</div>
        <button class="btn btn-sm ${E.securite.faite ? '' : 'btn-fire'}" data-a="secu" style="width:100%">${E.securite.faite ? '✔ Évaluation réalisée' : '⚠ Évaluer la sécurité de la scène'}</button>
      </div>
      <div>
        <div class="sec-t">Zones <span class="muted" style="text-transform:none;letter-spacing:0">dégâts</span></div>
        <div class="zones">${scn.zones.map(z => `<button class="zone-b ${E.zoneActive === z.id ? 'on' : ''}" data-z="${z.id}">
          <span>${z.exterieur ? '🌳' : '🚪'}</span><span>${esc(z.nom)}</span>
          ${E.zonesVisitees.includes(z.id) ? '<span class="vu">✔</span>' : ''}
          <span class="rg">${[1, 2, 3, 4].map(i => `<i class="${(z.rang || 0) >= i ? 'f' : ''}"></i>`).join('')}</span></button>`).join('')}</div>
        <p class="muted small" style="margin-top:6px">Les barres indiquent l'intensité apparente des dégâts : elles ne désignent pas l'origine.</p>
      </div>
      <div>
        <div class="sec-t">Crédits</div>
        <div><b style="color:var(--accent2)">${ctx.app.c.credits.toLocaleString('fr-FR')}</b> cr <span class="muted small">· dépensés : ${E.depenses}</span></div>
      </div>
      <button class="btn btn-ghost btn-sm" data-a="quitter">⟵ Abandonner et revenir au QG</button>`;
    $$('[data-z]', el).forEach(b => b.onclick = () => allerZone(b.dataset.z));
    $('[data-a=brief]', el).onclick = briefing;
    $('[data-a=secu]', el).onclick = securite;
    $('[data-a=quitter]', el).onclick = async () => { if (await confirmer('Abandonner l\'enquête ?', 'La progression de cette enquête sera perdue (les crédits dépensés en analyses ne sont pas remboursés).', 'Abandonner')) ctx.allerQG(); };
  }

  function renderZoneOv() {
    const z = E.zone(E.zoneActive);
    const el = $('.ov-zone', root);
    if (!z) { el.innerHTML = `<h3>Vue générale</h3><div class="muted small">Choisissez une zone à examiner dans la colonne de gauche.</div>`; return; }
    const nObs = scn.observations.filter(o => o.zone === z.id && E.decouverts.has(o.id)).length;
    el.innerHTML = `<h3>${esc(z.nom)}</h3><div class="muted small">${esc(z.desc || '')} ${E.photoZone.has(z.id) ? '· 📷 vue d\'ensemble faite' : '· <span style="color:var(--warn)">pas encore de vue d\'ensemble</span>'} · ${nObs} constat(s)</div>`;
  }

  function renderToolbar() {
    const el = $('.toolbar', root);
    el.innerHTML = BARRE.map((id, i) => {
      const o = OUTILS.find(x => x.id === id);
      const owned = E.possede(id);
      return `<button class="tbtn ${ui.outil === id ? 'on' : ''} ${owned ? '' : 'lock'}" data-t="${id}" title="${esc(o.nom)} — ${esc(o.desc)}${owned ? '' : ' (non acquis)'}"><span class="i">${o.icone}</span><span>${esc(o.court || o.nom)}</span><span class="kbd">${i + 1}</span></button>`;
    }).join('');
    $$('[data-t]', el).forEach(b => b.onclick = () => choisirOutil(b.dataset.t));
  }

  function choisirOutil(id) {
    if (!E.possede(id)) { toast(`🔒 ${OUTILS.find(o => o.id === id).nom} : équipement non acquis (QG → Équipement).`, 'warn'); return; }
    if (id === 'calc') { calculateur(scn.dynamique); return; }
    ui.outil = id;
    S.curseur = { observer: 'crosshair', photo: 'copy', fouille: 'cell', prelever: 'grab' }[id] || 'crosshair';
    renderToolbar();
  }

  function renderFouille() {
    const f = scn.fouille, el = $('.ov-fouille', root);
    if (!f || E.zoneActive !== f.zone) { el.hidden = true; S.montrerRubanFouille(false); return; }
    const pret = zoneInteretDefinie();
    S.montrerRubanFouille(pret);
    el.hidden = false;
    const n = E.fouille.retirees;
    el.innerHTML = `<div class="sec-t" style="margin:0">Fouille par couches ${ref(f.ref)}</div>
      ${pret ? `<div class="layers">${[...f.couches].sort((a, b) => b.n - a.n).map(c => `<div class="layer ${c.n <= n ? 'gone' : ''} ${c.n === n + 1 ? 'cur' : ''}"><span>${c.n}</span><span title="${esc(c.description)}">${esc(c.nom)}</span><span>${E.photoCouche.has(c.n) ? '📷' : ''}</span></div>`).join('')}</div>
      ${n < f.couches.length ? `<div class="small muted" style="margin-bottom:6px">${esc(f.couches.find(c => c.n === n + 1).description)}</div>
      <div class="acts" style="display:flex;gap:6px"><button class="btn btn-sm" data-f="photo">📷 Photographier</button><button class="btn btn-sm btn-primary" data-f="retirer">⛏️ Retirer la couche ${n + 1}</button></div>` : '<div class="small" style="color:var(--ok)">Niveau du sol atteint. Examinez les éléments mis au jour.</div>'}`
      : `<p class="small muted" style="margin:6px 0 0">Analysez d'abord les tracés du séjour (au moins 3 constats analysés) pour délimiter une zone d'intérêt à fouiller. ${ref('17.3.1.8')}</p>`}`;
    $('[data-f=photo]', el)?.addEventListener('click', () => photoZone());
    $('[data-f=retirer]', el)?.addEventListener('click', () => retirerCouche());
  }

  function zoneInteretDefinie() {
    const f = scn.fouille;
    return [...E.analyses.keys()].filter(id => E.obs(id)?.zone === f.zone && !(E.obs(id).couche)).length >= 3;
  }

  // ------------------------------------------------------------ panneau droit
  const ONGLETS = [
    ['dossier', '📁 Dossier'], ['carnet', '📓 Carnet'], ['photos', '📷 Photos'], ['scelles', '🧪 Scellés'],
    ['temoins', '🗣️ Témoins'], ['osint', '🛰️ OSINT'], ['hyp', '🧠 Hypothèses'], ['rapport', '📄 Rapport'],
  ];
  function renderRight() {
    const nav = $('.rtabs', root);
    const cnt = { carnet: E.faits.size, photos: E.photos.length, scelles: E.scelles.length, hyp: E.hyp.origines.size + E.hyp.causes.size };
    nav.innerHTML = ONGLETS.map(([id, l]) => `<button class="rtab ${ui.onglet === id ? 'on' : ''}" data-o="${id}">${l}${cnt[id] ? `<span class="n">${cnt[id]}</span>` : ''}</button>`).join('');
    $$('[data-o]', nav).forEach(b => b.onclick = () => { ui.onglet = b.dataset.o; renderRight(); });
    const body = $('.rbody', root);
    body.innerHTML = '';
    ({ dossier, carnet, photos, scelles, temoins, osint, hyp, rapport })[ui.onglet](body);
  }

  function dossier(b) {
    b.innerHTML = `
      <div class="sec-t">Ordre de mission</div>
      <p class="small"><b>Mandant :</b> ${esc(scn.mission.mandant)}<br><b>Réf. :</b> ${esc(scn.mission.reference)}<br><b>Sinistre :</b> ${esc(scn.mission.dateSinistre)} · alerte ${esc(scn.mission.heureAlerte)}</p>
      <p class="small">${esc(scn.mission.ordre)}</p>
      <p class="small muted">${esc(scn.mission.preservation)}</p>
      <div class="sec-t">Compte rendu d'intervention SDIS</div>
      <ul class="small" style="padding-left:16px;margin-top:0">${scn.rapportSdis.map(l => `<li>${esc(l)}</li>`).join('')}</ul>
      <div class="sec-t">Météo déclarée</div><p class="small">${esc(scn.meteo)}</p>
      ${immediat ? `<div class="sec-t">Écarts de méthode relevés (${E.violations.length})</div>
      ${E.violations.length ? E.violations.map(v => `<div class="fait contamine"><div class="hd"><span class="chip ko">écart</span>${ref(v.ref)}</div>${esc(v.texte)}</div>`).join('') : '<p class="small muted">Aucun pour l\'instant.</p>'}` : '<p class="small muted">Mode expertise : les écarts de méthode seront révélés au débriefing.</p>'}
      <div class="sec-t">Journal</div>
      <div class="small muted">${E.journal.slice(-12).reverse().map(j => `<div>${j.t} — ${esc(j.texte)}</div>`).join('') || '—'}</div>`;
  }

  function faitHtml(f) {
    const o = f.obs ? E.obs(f.obs) : null;
    const a = o ? E.analyses.get(o.id) : null;
    const num = o ? E.decouverts.get(o.id)?.num : null;
    const typeChip = { constat: '<span class="chip">constat</span>', temoin: '<span class="chip">témoin</span>', osint: '<span class="chip">OSINT</span>', labo: '<span class="chip">labo</span>' }[f.type];
    return `<div class="fait ${f.contamine ? 'contamine' : ''}" data-f="${f.id}">
      <div class="hd">${num ? `<span class="cav">${num}</span>` : ''}<span class="id">${f.id}</span>${typeChip}${f.contamine ? '<span class="chip ko">contaminé</span>' : ''}${f.speculatif && immediat ? '<span class="chip warn">non probant</span>' : ''}${f.partiel ? '<span class="chip warn">partiel</span>' : ''}${o && E.photoObs.has(o.id) ? '<span class="chip">📷</span>' : ''}${f.ref ? ref(f.ref) : ''}</div>
      <div>${esc(f.court || f.texte)}</div>
      ${o ? (a ? `<div class="interp ${immediat && !a.ok ? 'ko' : ''}">Analyse : ${esc(o.analyse.options[a.idx].t)}</div>` : `<div style="margin-top:5px"><button class="btn btn-sm btn-primary" data-an="${o.id}">Analyser</button> <button class="btn btn-sm" data-voir="${o.id}">Voir</button></div>`) : ''}
      ${f.fiabilite ? `<div class="muted small">Fiabilité : ${esc(f.fiabilite)}</div>` : ''}
    </div>`;
  }
  function carnet(b) {
    const faits = [...E.faits.values()];
    if (!faits.length) { b.innerHTML = '<p class="muted">Aucune donnée collectée. Examinez la scène (outil 🔦), entendez les témoins, consultez les sources ouvertes.</p>'; return; }
    const nonAna = faits.filter(f => f.obs && !E.analyses.has(f.obs)).length;
    b.innerHTML = `<p class="small muted">« Cataloguer n'est pas analyser » ${ref('4.3.4')} — ${nonAna} constat(s) en attente d'analyse.</p>` +
      ['constat', 'temoin', 'osint', 'labo'].map(t => {
        const l = faits.filter(f => f.type === t);
        return l.length ? `<div class="sec-t">${{ constat: 'Constatations', temoin: 'Déclarations', osint: 'Sources ouvertes', labo: 'Résultats de laboratoire' }[t]}</div>${l.map(faitHtml).join('')}` : '';
      }).join('');
    $$('[data-an]', b).forEach(x => x.onclick = () => analyser(x.dataset.an));
    $$('[data-voir]', b).forEach(x => x.onclick = () => montrerCarte(E.obs(x.dataset.voir)));
  }

  function photos(b) {
    b.innerHTML = E.photos.length ? `<p class="small muted">Planche photographique (numérotée) ${ref('15.2')}</p><div class="photos">${E.photos.map(p => `<div class="photo"><img src="${p.img}" alt=""><div><b>${p.n}</b> · ${esc(p.legende)}</div></div>`).join('')}</div>` : '<p class="muted">Aucune photo. Outil 📷 : cliquez dans la scène pour une vue d\'ensemble de la zone, ou sur un cavalier pour un plan rapproché.</p>';
  }

  function scelles(b) {
    if (!E.scelles.length) { b.innerHTML = `<p class="muted">Aucun scellé. Outil 🧤 « Prélever » sur un constat relevé.</p><p class="small muted">Contenants disponibles : ${E.contenantsDisponibles().map(c => esc(c.nom)).join(', ')}.</p>`; return; }
    b.innerHTML = `<p class="small muted">Analyses ${E.possede('labo') ? 'au laboratoire interne (−50 %)' : 'par laboratoire extérieur'} · crédits : <b style="color:var(--accent2)">${ctx.app.c.credits}</b></p>` + E.scelles.map(s => {
      const p = scn.prelevements.find(x => x.id === s.prelevement);
      const cont = CONTENANTS.find(c => c.id === s.contenant);
      return `<div class="fait"><div class="hd"><span class="cav">${s.id}</span><b>${esc(s.nom)}</b></div>
        <div class="small muted">Contenant : ${esc(cont?.nom)}${s.temoin ? ' · avec échantillon de comparaison' : ''}${s.photoAvant ? ' · photo avant prélèvement' : ''}</div>
        ${p.analyses.map(a => s.resultats[a.id] ? `<div class="fb ${s.resultats[a.id].fait && !s.resultats[a.id].partiel ? 'ok' : 'ko'}"><b>${esc(a.nom)}</b><br>${esc(s.resultats[a.id].texte)}</div>` : `<div style="margin-top:6px"><button class="btn btn-sm btn-primary" data-s="${s.id}" data-a="${a.id}">Envoyer : ${esc(a.nom)} — ${E.coutAnalyse(a)} cr</button></div>`).join('')}
      </div>`;
    }).join('');
    $$('[data-s]', b).forEach(x => x.onclick = async () => {
      const r = E.analyserScelle(x.dataset.s, x.dataset.a);
      if (r.erreur) { toast(r.erreur, 'ko'); return; }
      ctx.save();
      toast(`🔬 Résultat reçu (−${r.cout} cr).`, 'ok');
      renderAll();
    });
  }

  function temoins(b) {
    b.innerHTML = `<p class="small muted">Préparez vos entretiens, privilégiez les questions ouvertes, documentez ${ref('13.4')}</p>` + scn.temoins.map(t => {
      const n = E.temoins.get(t.id)?.size || 0;
      return `<div class="temoin" data-t="${t.id}"><span class="av">${t.avatar || '👤'}</span><div><b>${esc(t.nom)}</b><div class="small muted">${esc(t.role)}</div></div><span class="chip" style="margin-left:auto">${n}/${t.questions.length}</span></div>`;
    }).join('');
    $$('[data-t]', b).forEach(x => x.onclick = () => entretien(x.dataset.t));
  }

  function entretien(tid) {
    const t = scn.temoins.find(x => x.id === tid);
    const corps = document.createElement('div');
    const draw = () => {
      const posees = E.temoins.get(tid) || new Set();
      corps.innerHTML = `<p class="muted small">${esc(t.role)}</p>
        ${t.questions.filter(q => posees.has(q.id)).map(q => `<div class="qa"><div class="q">« ${esc(q.q)} »</div><div class="r">${esc(q.r)}</div>${q.info ? `<div class="small" style="color:var(--blue);margin-top:4px">💡 ${esc(q.info)}</div>` : ''}${immediat && q.piege ? `<div class="fb ko small">${esc(q.piege)}</div>` : ''}</div>`).join('')}
        <div class="sec-t" style="margin-top:12px">Questions possibles</div>
        ${t.questions.filter(q => !posees.has(q.id)).map(q => `<button class="btn qbtn" data-q="${q.id}"><span class="typ">${{ ouverte: 'ouverte', fermee: 'fermée', orientee: 'directe' }[q.type]}</span>${esc(q.q)}</button>`).join('') || '<p class="muted small">Toutes les questions ont été posées.</p>'}`;
      $$('[data-q]', corps).forEach(x => x.onclick = () => {
        const r = E.poserQuestion(tid, x.dataset.q);
        if (immediat) r.msgs.forEach(v => toast(`⚠ ${esc(v.texte)} ${ref(v.ref)}`, 'warn', 5000));
        draw(); renderRight(); renderLeft();
      });
    };
    draw();
    modal({ titre: `${t.avatar || '👤'} Entretien — ${esc(t.nom)}`, corps, large: true, actions: [{ label: 'Terminer l\'entretien' }] });
  }

  function osint(b) {
    b.innerHTML = `<p class="small muted">Recherche en sources ouvertes ${ref('13.5 / 13.6')} — cherchez des noms, lieux, marques ou dates relevés pendant l'enquête. Évaluez la fiabilité de chaque source.</p>
      <div class="osint-bar"><select class="inp" id="osS">${SOURCES_OSINT.map(([v, l]) => `<option value="${v}">${l}</option>`).join('')}</select></div>
      <div class="osint-bar"><input id="osQ" placeholder="ex. : nom, adresse, marque, « météo »…" autocomplete="off"><button class="btn btn-primary" id="osGo">Rechercher</button></div>
      <div id="osR"></div>
      ${E.osint.recherches.length ? `<div class="sec-t" style="margin-top:12px">Historique</div><div class="small muted">${E.osint.recherches.slice(-8).reverse().map(r => esc(r.requete)).join(' · ')}</div>` : ''}`;
    const go = () => {
      const q = $('#osQ', b).value.trim(); if (!q) return;
      ui.osintRes = E.rechercher(q, $('#osS', b).value);
      drawRes();
    };
    const drawRes = () => {
      const r = $('#osR', b);
      r.innerHTML = ui.osintRes.length ? ui.osintRes.map(o => {
        const lock = o.pro && !E.possede('osintpro');
        return `<div class="res"><h4>${esc(o.titre)}</h4>${lock ? '<p class="small muted">🔒 Source réservée aux abonnements OSINT pro.</p>' : `<div class="small">${esc(o.extrait)}</div><div class="fia">Fiabilité : ${esc(o.fiabilite)}</div>
          <div style="margin-top:6px">${E.osint.ajoutes.has(o.id) ? '<span class="chip ok">versé au dossier</span>' : `<button class="btn btn-sm" data-add="${o.id}">Verser au dossier</button>`}</div>`}</div>`;
      }).join('') : '<p class="muted small">Aucun résultat pertinent.</p>';
      $$('[data-add]', r).forEach(x => x.onclick = () => { E.ajouterOsint(x.dataset.add); toast('Source versée au dossier.', 'ok'); drawRes(); renderLeft(); });
    };
    $('#osGo', b).onclick = go;
    $('#osQ', b).addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    if (ui.osintRes.length) drawRes();
  }

  // ------------------------------------------------------------ hypothèses
  function hyp(b) {
    const block = (kind, titre, rf) => {
      const defs = scn.hypotheses[kind];
      const m = E.hyp[kind];
      const dispo = defs.filter(d => !m.has(d.id));
      return `<div class="sec-t">${titre} ${ref(rf)}</div>
        ${[...m].map(([id, hh]) => { const d = defs.find(x => x.id === id); return `<div class="hyp"><div style="display:flex;gap:6px;align-items:center"><span class="st st-${hh.statut}">${{ ouverte: 'à tester', retenue: 'retenue', refutee: 'réfutée' }[hh.statut]}</span><span class="id muted small" style="margin-left:auto">${hh.soutien.length}↑ ${hh.refute.length}↓</span></div>
          <div>${esc(d.nom)}</div><div style="margin-top:6px;display:flex;gap:6px"><button class="btn btn-sm btn-primary" data-test="${kind}|${id}">Tester</button>${kind === 'causes' ? `<button class="btn btn-sm" data-comp="${id}">Compétence ${E.competence.has(id) ? '✔' : ''}</button>` : ''}</div></div>`; }).join('') || '<p class="small muted">Aucune hypothèse.</p>'}
        ${dispo.length ? `<div style="display:flex;gap:6px;margin:6px 0 14px"><select class="inp" data-sel="${kind}" style="flex:1;min-width:0">${dispo.map(d => `<option value="${d.id}">${esc(d.nom)}</option>`).join('')}</select><button class="btn btn-sm" data-add="${kind}">+ Ajouter</button></div>` : ''}`;
    };
    const nAna = E.analyses.size;
    b.innerHTML = `<p class="small muted">Induction : formulez des hypothèses à partir des données. Déduction : testez chacune contre <b>toutes</b> les données, en cherchant à la réfuter ${ref('4.3.5 / 4.3.6')}.</p>
      ${nAna < 4 ? `<div class="fb ko small">Seulement ${nAna} donnée(s) analysée(s). Éviter la présomption : collectez et analysez avant de conclure ${ref('4.3.7')}.</div>` : ''}
      ${block('origines', 'Hypothèses d\'origine', '17.5')}${block('causes', 'Hypothèses de cause', '18.5')}`;
    $$('[data-add]', b).forEach(x => x.onclick = () => { const k = x.dataset.add; E.ajouterHypothese(k, $(`[data-sel=${k}]`, b).value); renderAll(); });
    $$('[data-test]', b).forEach(x => x.onclick = () => { const [k, id] = x.dataset.test.split('|'); testerHyp(k, id); });
    $$('[data-comp]', b).forEach(x => x.onclick = () => {
      const d = scn.hypotheses.causes.find(c => c.id === x.dataset.comp);
      testCompetence(d, v => { E.competence.add(d.id); E.log(`Test de compétence (${d.id}) : ${v}.`); toast('Test de compétence enregistré.', 'ok'); renderAll(); });
    });
  }

  function testerHyp(kind, id) {
    const d = scn.hypotheses[kind].find(x => x.id === id);
    const cur = E.hyp[kind].get(id);
    const val = new Map();
    cur.soutien.forEach(f => val.set(f, 's')); cur.refute.forEach(f => val.set(f, 'r'));
    const faits = [...E.faits.values()];
    const corps = document.createElement('div');
    corps.innerHTML = `<p><b>${esc(d.nom)}</b></p>
      ${d.premierCombustible ? `<p class="small muted">Premier combustible : ${esc(d.premierCombustible)} · Source : ${esc(d.source)}</p>` : ''}
      <p class="small muted">Pour chaque donnée : la soutient-elle, la réfute-t-elle, ou est-elle neutre ? Une réfutation doit s'appuyer sur au moins un fait ; une hypothèse retenue doit être soutenue par des faits ${ref('4.3.6 / 18.6.5')}.</p>
      <div>${faits.map(f => { const o = f.obs ? E.obs(f.obs) : null; const a = o ? E.analyses.get(o.id) : null; return `<div class="ftest"><div><span class="id muted small">${f.id}</span> ${esc(f.court || f.texte)}${o && !a ? ' <span class="chip warn">non analysé</span>' : ''}${f.contamine ? ' <span class="chip ko">contaminé</span>' : ''}</div>
        <div class="tri" data-f="${f.id}"><button data-v="s">Soutient</button><button data-v="n">Neutre</button><button data-v="r">Réfute</button></div></div>`; }).join('') || '<p class="muted">Aucune donnée.</p>'}</div>
      <div class="form-row" style="margin-top:12px"><label>Statut de l'hypothèse</label><select class="inp" id="hSt">
        <option value="ouverte">À tester / en suspens</option><option value="refutee">Réfutée par les données</option><option value="retenue">Retenue (hypothèse finale)</option></select></div>`;
    const sync = () => $$('.tri', corps).forEach(t => { const v = val.get(t.dataset.f) || 'n'; $$('button', t).forEach(bb => bb.classList.toggle('on', bb.dataset.v === v)); });
    $$('.tri button', corps).forEach(bb => bb.onclick = () => { val.set(bb.parentElement.dataset.f, bb.dataset.v); sync(); });
    $('#hSt', corps).value = cur.statut;
    sync();
    modal({ titre: `🧠 Tester l'hypothèse ${kind === 'origines' ? 'd\'origine' : 'de cause'}`, corps, large: true, actions: [
      { label: 'Annuler', classe: 'btn-ghost' },
      { label: 'Enregistrer le test', classe: 'btn-primary', onClick: () => {
        const st = $('#hSt', corps).value;
        const s = [...val].filter(([, v]) => v === 's').map(([k]) => k), r = [...val].filter(([, v]) => v === 'r').map(([k]) => k);
        if (st === 'refutee' && !r.length) { toast('Une réfutation doit s\'appuyer sur au moins une donnée qui contredit l\'hypothèse.', 'ko', 4500); return false; }
        if (st === 'retenue' && !s.length) { toast('Negative corpus : une hypothèse ne peut être retenue sans donnée qui la soutienne (18.6.5).', 'ko', 5000); return false; }
        if (st === 'retenue') for (const [oid, hh] of E.hyp[kind]) if (oid !== id && hh.statut === 'retenue') hh.statut = 'ouverte';
        E.testerHypothese(kind, id, s, r, st);
        renderAll();
      } },
    ] });
  }

  // ------------------------------------------------------------ rapport
  function rapport(b) {
    const ret = k => [...E.hyp[k]].find(([, x]) => x.statut === 'retenue')?.[0];
    b.innerHTML = `<p class="small muted">Rapport d'enquête : constatations, prélèvements, déclarations, corrélation, conclusion ${ref('4.7 / 15.5')}.</p>
      <div class="panel small">
        <div>Hypothèse d'origine retenue : <b>${ret('origines') ? esc(scn.hypotheses.origines.find(x => x.id === ret('origines')).nom) : '—'}</b></div>
        <div>Hypothèse de cause retenue : <b>${ret('causes') ? esc(scn.hypotheses.causes.find(x => x.id === ret('causes')).nom) : '—'}</b></div>
        <div>Constats : ${E.decouverts.size} · analysés : ${E.analyses.size} · photos : ${E.photos.length} · scellés : ${E.scelles.length}</div>
      </div>
      <button class="btn btn-primary" id="rRed" style="width:100%">✍️ Rédiger et déposer le rapport</button>`;
    $('#rRed', b).onclick = rediger;
  }

  function rediger() {
    const ret = k => [...E.hyp[k]].find(([, x]) => x.statut === 'retenue')?.[0] || '';
    const faits = [...E.faits.values()];
    const cRet = ret('causes');
    const preAppui = new Set(cRet ? E.hyp.causes.get(cRet).soutien : []);
    const corps = document.createElement('div');
    corps.innerHTML = `
      <div class="form-row"><label>Zone d'origine</label><select class="inp" id="rO"><option value="">— non déterminée —</option>${scn.hypotheses.origines.map(o => `<option value="${o.id}" ${o.id === ret('origines') ? 'selected' : ''}>${esc(o.nom)}</option>`).join('')}</select></div>
      <div class="form-row"><label>Cause</label><select class="inp" id="rC"><option value="">— indéterminée —</option>${scn.hypotheses.causes.map(o => `<option value="${o.id}" ${o.id === cRet ? 'selected' : ''}>${esc(o.nom)}</option>`).join('')}</select></div>
      <div class="form-row"><label>Niveau de certitude ${ref('4.5')}</label><select class="inp" id="rCe">${CERTITUDES.map(c => `<option value="${c.id}">${esc(c.nom)}</option>`).join('')}</select></div>
      <div class="form-row"><label>Classification ${ref('19.2.1')}</label><select class="inp" id="rCl">${CLASSIFICATIONS.map(c => `<option value="${c.id}">${esc(c.nom)}</option>`).join('')}</select></div>
      <div class="form-row"><label>Faits à l'appui de la cause</label><div style="max-height:220px;overflow:auto;border:1px solid var(--line);border-radius:6px;padding:6px">${faits.map(f => `<label style="display:block;font-size:12.5px;padding:2px 0"><input type="checkbox" class="rF" value="${f.id}" ${preAppui.has(f.id) ? 'checked' : ''}> <span class="muted">${f.id}</span> ${esc(f.court || f.texte)}</label>`).join('')}</div></div>
      <div class="form-row"><label>Conclusion rédigée</label><textarea class="inp" id="rT" rows="5" placeholder="Synthèse argumentée : origine, premier combustible, source d'ignition, séquence, hypothèses écartées et pourquoi."></textarea></div>`;
    const collect = () => ({
      origine: $('#rO', corps).value, cause: $('#rC', corps).value, certitude: $('#rCe', corps).value, classification: $('#rCl', corps).value,
      faitsAppui: $$('.rF', corps).filter(x => x.checked).map(x => x.value), texte: $('#rT', corps).value,
    });
    modal({ titre: '📄 Rapport d\'enquête', corps, large: true, actions: [
      { label: 'Aperçu imprimable', onClick: () => { apercuRapport(E, collect(), ctx.app.c); return false; } },
      { label: 'Déposer le rapport', classe: 'btn-fire', onClick: () => {
        const R = collect();
        confirmer('Déposer le rapport ?', 'Le rapport sera évalué (méthode, analyse, conclusion). L\'enquête sera clôturée.', 'Déposer').then(ok => {
          if (!ok) return;
          E.rapport = R;
          ctx.onLeave?.(); ctx.onLeave = null;
          ouvrirDebrief(E, ctx);
        });
      } },
    ] });
  }

  // ------------------------------------------------------------ actions scène
  function allerZone(id) {
    const msgs = E.entrerZone(id);
    const z = E.zone(id);
    S.setFocus(z, z.piece || null);
    if (immediat) msgs.forEach(v => toast(`⚠ ${esc(v.texte)} ${ref(v.ref)}`, 'warn', 5500));
    fermerCarte();
    renderAll();
  }

  function photoZone() {
    if (!E.zoneActive) { toast('Choisissez d\'abord une zone.', 'warn'); return; }
    fermerCarte();
    setTimeout(() => {
      const n = E.photoDeZone(S.capture());
      toast(`📷 Photo n°${n} : vue d'ensemble.`, 'ok');
      renderAll();
    }, 30);
  }

  function retirerCouche() {
    const p = E.peutRetirerCouche();
    if (!p.ok) { toast(p.msg || 'Impossible.', 'warn'); return; }
    if (!zoneInteretDefinie()) { toast('Zone d\'intérêt non délimitée : analysez d\'abord les tracés du séjour.', 'warn'); return; }
    const r = E.retirerCouche();
    S.setFouille(E.fouille.retirees);
    if (immediat) r.msgs.forEach(v => toast(`⚠ ${esc(v.texte)} ${ref(v.ref)}`, 'warn', 5500));
    toast(`⛏️ Couche ${r.couche.n} retirée : ${esc(r.couche.nom)}.${r.reveles.length ? ` ${r.reveles.length} élément(s) à examiner.` : ''}`, 'info', 4500);
    renderAll();
  }

  function onPick(hit) {
    if (!E.zoneActive && ui.outil !== 'photo') { toast('Choisissez une zone à examiner (colonne de gauche).', 'warn'); return; }
    // un clic sur un cavalier déjà relevé ouvre sa fiche, quel que soit l'outil (sauf photo/prélèvement)
    if (hit.hotspot && E.decouverts.has(hit.hotspot) && !['photo', 'prelever', 'jauge', 'arc'].includes(ui.outil)) { montrerCarte(E.obs(hit.hotspot)); return; }
    const r = E.pick(ui.outil, hit);
    switch (r.type) {
      case 'rien': if (r.msg) toast(r.msg, 'info', 2600); break;
      case 'indice': montrerIndice(r); break;
      case 'obs': if (r.neuf) toast(`🟨 Cavalier ${E.decouverts.get(r.obs.id).num} posé : ${esc(r.obs.titre)}`, 'ok'); montrerCarte(r.obs); break;
      case 'photoZone': photoZone(); return;
      case 'photoObs': photoObs(r.obs); return;
      case 'pid': toast(`📟 PID : <b>${esc(r.valeur)}</b>${r.obs ? ' — lecture consignée au carnet.' : ''}`, r.obs ? 'warn' : 'info', 4200); if (r.obs) montrerCarte(r.obs); break;
      case 'prelever': prelever(r.obs); break;
      case 'fouille': retirerCouche(); return;
    }
    renderAll();
  }

  function photoObs(o) {
    fermerCarte();
    setTimeout(() => { const n = E.photoDObs(o, S.capture()); toast(`📷 Photo n°${n} : ${esc(o.titre)}.`, 'ok'); renderAll(); if (ui.carte === o.id) montrerCarte(o); }, 30);
  }

  function montrerIndice(r) {
    const el = $('.ov-card', root);
    el.hidden = false; ui.carte = null;
    el.innerHTML = `<h3>🔎 Indice</h3><div class="desc">${esc(r.msg)}</div>
      <p class="small">Outil requis : <b>${esc(E.outilNom(r.outilRequis))}</b> ${r.possede ? '<span class="chip ok">disponible</span>' : '<span class="chip ko">non acquis</span>'}</p>
      <div class="acts">${r.possede ? `<button class="btn btn-sm btn-primary" data-x="use">Prendre l'outil</button>` : ''}<button class="btn btn-sm" data-x="close">Fermer</button></div>`;
    $('[data-x=close]', el).onclick = fermerCarte;
    $('[data-x=use]', el)?.addEventListener('click', () => { choisirOutil(r.outilRequis); fermerCarte(); toast('Cliquez à nouveau sur la zone avec l\'outil.', 'info'); });
  }

  function montrerCarte(o) {
    if (!o) return;
    const el = $('.ov-card', root);
    ui.carte = o.id; el.hidden = false;
    const d = E.decouverts.get(o.id), a = E.analyses.get(o.id);
    const scelle = o.prelevement && E.scelles.find(s => s.prelevement === o.prelevement);
    el.innerHTML = `<h3><span class="cav">${d?.num ?? '?'}</span>${esc(o.titre)}</h3>
      <div class="small muted">${esc(E.zone(o.zone)?.nom)}${o.outil ? ` · relevé : ${esc(E.outilNom(o.outil))}` : ''}${o.couche ? ` · fouille, couche ${o.couche}` : ''}</div>
      <div class="desc">${esc(o.description)}</div>
      ${a ? `<div class="fb ${immediat ? (a.ok ? 'ok' : 'ko') : ''} small"><b>Votre analyse :</b> ${esc(o.analyse.options[a.idx].t)}${immediat ? `<br><span class="muted">${esc(o.analyse.options[a.idx].fb || '')}</span>` : ''}</div>` : ''}
      <div class="acts" style="margin-top:10px">
        ${E.photoObs.has(o.id) ? '<span class="chip ok">📷 photographié</span>' : '<button class="btn btn-sm" data-x="photo">📷 Photographier</button>'}
        ${a ? '' : '<button class="btn btn-sm btn-primary" data-x="ana">Analyser</button>'}
        ${o.prelevement ? (scelle ? `<span class="chip ok">scellé ${scelle.id}</span>` : '<button class="btn btn-sm" data-x="prel">🧤 Prélever</button>') : ''}
        <button class="btn btn-sm btn-ghost" data-x="close">Fermer</button>
      </div>`;
    $('[data-x=close]', el).onclick = fermerCarte;
    $('[data-x=photo]', el)?.addEventListener('click', () => photoObs(o));
    $('[data-x=ana]', el)?.addEventListener('click', () => analyser(o.id));
    $('[data-x=prel]', el)?.addEventListener('click', () => prelever(o));
  }
  function fermerCarte() { ui.carte = null; $('.ov-card', root).hidden = true; }

  function analyser(id) {
    const o = E.obs(id);
    const corps = document.createElement('div');
    corps.innerHTML = `<div class="desc" style="background:#15181c;border-left:3px solid var(--accent);padding:8px 10px;border-radius:0 6px 6px 0;margin-bottom:10px">${esc(o.description)}</div>
      <p><b>${esc(o.analyse.question)}</b></p>
      ${o.analyse.options.map((op, i) => `<label class="opt"><input type="radio" name="an" value="${i}"><span>${esc(op.t)}</span></label>`).join('')}
      <div id="anFb"></div>`;
    let fait = false;
    const m = modal({ titre: `Analyse — ${esc(o.titre)}`, corps, large: true, actions: [
      { label: 'Annuler', classe: 'btn-ghost' },
      { label: 'Valider l\'analyse', classe: 'btn-primary', onClick: () => {
        if (fait) return true;
        const sel = corps.querySelector('input[name=an]:checked');
        if (!sel) { toast('Choisissez une interprétation.', 'warn'); return false; }
        const r = E.analyser(id, +sel.value);
        fait = true;
        if (immediat) {
          $$('.opt', corps).forEach((l, i) => { if (i === +sel.value) l.classList.add(r.ok ? 'ok' : 'ko'); });
          $('#anFb', corps).innerHTML = `<div class="fb ${r.ok ? 'ok' : 'ko'}"><b>${r.ok ? 'Analyse correcte.' : 'Analyse discutable.'}</b> ${esc(r.fb || '')} ${ref(r.ref)}</div>`;
          m.el.querySelector('.modal-f .btn-primary').textContent = 'Continuer';
          renderAll(); if (ui.carte === id) montrerCarte(o);
          return false;
        }
        toast('Analyse consignée au carnet.', 'ok');
        renderAll(); if (ui.carte === id) montrerCarte(o);
      } },
    ] });
  }

  function prelever(o) {
    const p = scn.prelevements.find(x => x.id === o.prelevement);
    if (E.scelles.some(s => s.prelevement === p.id)) { toast('Déjà placé sous scellé.', 'info'); return; }
    const conts = E.contenantsDisponibles();
    const corps = document.createElement('div');
    corps.innerHTML = `<p><b>${esc(p.nom)}</b></p>
      ${E.photoObs.has(o.id) ? '' : `<div class="fb ko small">Ce constat n'a pas été photographié en place ${ref('16.5.2')}.</div>`}
      <div class="sec-t" style="margin-top:10px">Contenant ${ref('16.6')}</div>
      ${conts.map((c, i) => `<label class="opt"><input type="radio" name="ct" value="${c.id}" ${i === 0 ? 'checked' : ''}><span>${esc(c.nom)}</span></label>`).join('')}
      ${E.possede('pots') ? '' : '<p class="small muted">🔒 Pots métalliques, bocaux et sachets nylon : équipement « Contenants pour liquides inflammables ».</p>'}
      ${p.type === 'liquide' ? `<label class="opt"><input type="checkbox" id="ctT"><span>Prélever aussi un <b>échantillon de comparaison</b> : ${esc(p.temoin || 'même matériau hors zone')} ${ref('16.5.4')}</span></label>` : ''}
      <p class="small muted">Étiquetage, scellé et chaîne de traçabilité ${ref('16.7 / 16.9')}.</p>`;
    modal({ titre: '🧤 Prélèvement et mise sous scellé', corps, large: false, actions: [
      { label: 'Annuler', classe: 'btn-ghost' },
      { label: 'Placer sous scellé', classe: 'btn-primary', onClick: () => {
        const c = corps.querySelector('input[name=ct]:checked')?.value;
        const r = E.prelever(o.id, c, $('#ctT', corps)?.checked);
        if (r.erreur) { toast(r.erreur, 'ko'); return; }
        if (immediat) r.msgs.forEach(v => toast(`⚠ ${esc(v.texte)} ${ref(v.ref)}`, 'warn', 5500));
        toast(`🧪 Scellé ${r.scelle.id} constitué.`, 'ok');
        renderAll(); montrerCarte(o);
      } },
    ] });
  }

  function securite() {
    const opts = scn.securite.options;
    const corps = document.createElement('div');
    corps.innerHTML = `<p class="small muted">Avant d'entrer : évaluation des risques de la scène et mesures de protection ${ref(scn.securite.ref)}. Cochez les mesures que vous mettez en œuvre.</p>
      ${opts.map(o => `<label class="opt"><input type="checkbox" value="${o.id}" ${E.securite.choix.includes(o.id) ? 'checked' : ''}><span>${esc(o.t)}</span></label>`).join('')}<div id="sFb"></div>`;
    let fait = false;
    const m = modal({ titre: '⚠ Évaluation de sécurité', corps, actions: [
      { label: 'Valider', classe: 'btn-primary', onClick: () => {
        if (fait) return true;
        const choix = $$('input:checked', corps).map(x => x.value);
        const r = E.validerSecurite(choix);
        fait = true;
        if (immediat) {
          $('#sFb', corps).innerHTML = (r.fautes.length || r.oublis.length) ? `<div class="fb ko small">${r.fautes.map(f => `✗ ${esc(f.fb)}`).join('<br>')}${r.oublis.length ? `<br>Oubli(s) : ${r.oublis.map(o => esc(o.t)).join(' ; ')}` : ''}</div>` : '<div class="fb ok small">Évaluation complète et adaptée.</div>';
          m.el.querySelector('.modal-f .btn-primary').textContent = 'Continuer';
          renderLeft();
          return false;
        }
        renderLeft();
      } },
    ] });
  }

  function briefing() {
    modal({ titre: `📋 Briefing — ${esc(scn.titre)}`, large: true, corps: `
      <p><b>${esc(scn.mission.mandant)}</b> · réf. ${esc(scn.mission.reference)}</p>
      <p>${esc(scn.mission.ordre)}</p>
      <div class="panel small"><b>Sinistre :</b> ${esc(scn.mission.dateSinistre)}, alerte ${esc(scn.mission.heureAlerte)}<br><b>Adresse :</b> ${esc(scn.mission.adresse)}<br><b>Préservation :</b> ${esc(scn.mission.preservation)}</div>
      <div class="sec-t">Compte rendu SDIS</div><ul class="small" style="padding-left:16px">${scn.rapportSdis.map(l => `<li>${esc(l)}</li>`).join('')}</ul>
      <div class="sec-t">Rappels de méthode</div>
      <ol class="small" style="padding-left:18px">
        <li>Sécurité de la scène avant d'entrer ${ref('12')}.</li>
        <li>Abords et extérieur, puis intérieur, des zones les moins vers les plus endommagées ${ref('17.3.1.3')}.</li>
        <li>Photographier avant de toucher, fouiller par couches ${ref('15.2 / 17.3.2')}.</li>
        <li>Analyser chaque donnée, formuler et TESTER plusieurs hypothèses ${ref('4.3')}.</li>
        <li>Pas de conclusion sans donnée qui la démontre ${ref('18.6.5')}.</li>
      </ol>
      <p class="small muted">Commandes : clic gauche = outil actif · glisser = pivoter · clic droit glissé = déplacer · molette = zoom · touches 1–8 = outils · Q/E = pivoter.</p>`,
      actions: [{ label: 'Commencer l\'enquête', classe: 'btn-primary' }] });
  }

  // vue
  const ovv = $('.ov-view', root);
  const modesMurs = ['auto', 'bas', 'pleins'];
  let iMur = 0;
  ovv.addEventListener('click', e => {
    const v = e.target.closest('[data-v]')?.dataset.v; if (!v) return;
    if (v === 'rotg') S.rotateView(-45);
    if (v === 'rotd') S.rotateView(45);
    if (v === 'murs') { iMur = (iMur + 1) % 3; S.setModeMurs(modesMurs[iMur]); e.target.textContent = `🧱 Murs : ${modesMurs[iMur]}`; }
    if (v === 'vue') { E.zoneActive = null; S.setFocus(null, null); fermerCarte(); renderAll(); }
    if (v === 'dessus') { if (!E.possede('drone')) { toast('🔒 Vue aérienne : équipement « Drone » requis.', 'warn'); return; } ui.dessus = !ui.dessus; S.vueDessus(ui.dessus); }
  });

  function onKey(e) {
    if (e.target.closest('input,textarea,select') || $('.modal-bg')) return;
    const k = e.key.toLowerCase();
    if (k >= '1' && k <= '8') choisirOutil(BARRE[+k - 1]);
    if (k === 'q') S.rotateView(-45);
    if (k === 'e') S.rotateView(45);
    if (k === 'escape') fermerCarte();
  }
  document.addEventListener('keydown', onKey);

  window.__rcci = { E, S, pick: h2 => onPick(h2), zone: id => allerZone(id), outil: id => choisirOutil(id) };
  function renderAll() {
    refreshHotspots(); renderLeft(); renderZoneOv(); renderToolbar(); renderFouille(); renderRight();
  }
  S.setFocus(null, null, false);
  renderAll();
  briefing();
}
