// Écran d'enquête « jeu » : 3D plein écran, carnet de terrain, tuteur, objectifs, fiches d'indices
import { Scene3D, altitudeDe, niveauIndex, toutesPieces, niveauxDe } from '../engine/scene3d.js';
import { preparerJeu } from '../game/prepa.js';
import { Enquete } from '../game/enquete.js';
import { OUTILS, CONTENANTS } from '../data/outils.js';
import { CLASSIFICATIONS, CERTITUDES } from '../data/nfpa.js';
import { $, $$, h, esc, toast, modal, confirmer, ref } from '../ui.js';
import { calculateur, testCompetence } from './outilsAnalyse.js';
import { voirAussiHtml } from '../data/sources.js';
import { FUSIONS, fusion, fourchette, etatAtteint, etatNon, fmt } from '../data/thermique.js';
import { ficheHtml } from '../data/bim.js';
import { ouvrirDebrief } from './debrief.js';
import { apercuRapport } from './rapport.js';
import { son, basculerSon, estMuet } from '../game/sons.js';

const PAGES = [
  ['mission', '📋', 'Mission', '#f6d365'], ['constats', '🔎', 'Indices', '#fda085'], ['temoins', '🗣️', 'Témoins & recherches', '#a1c4fd'],
  ['thermo', '🌡️', 'Températures', '#ffd6a5'], ['labo', '🧪', 'Scellés & labo', '#c2e9fb'], ['hyp', '🧠', 'Hypothèses', '#d4fc79'], ['notes', '✏️', 'Mes notes', '#fbc2eb'],
];
const ICONES = [[/cuisine/i, '🍳'], [/s[ée]jour|salon/i, '🛋️'], [/chambre/i, '🛏️'], [/bain|sdb|wc/i, '🛁'], [/garage/i, '🚗'], [/couloir|entr[ée]e|palier|d[ée]gagement/i, '🚪'], [/combles|toit/i, '🏚️'], [/fa[çc]ade/i, '🧱'], [/bureau/i, '🖥️'], [/moteur/i, '⚙️'], [/habitacle/i, '💺'], [/roue/i, '🛞'], [/v[ée]hicule/i, '🚗'], [/cellier/i, '🧺']];
const APPS = [['tout', '🔍 Web'], ['reseaux', '👥 Réseaux'], ['meteo', '☁️ Météo'], ['rappel', '⚠️ RappelConso'], ['presse', '📰 Presse'], ['cadastre', '🗺️ Cadastre'], ['societes', '🏢 Sociétés']];
const MENTOR = { nom: 'Cne Ferrand · ton tuteur', avatar: '👨‍🚒' };

export function ouvrirEnquete(scnSrc, ctx) {
  const scn = preparerJeu(scnSrc);
  const E = new Enquete(scn, ctx.app.c);
  E.notes = '';
  const reg = ctx.app.c.reglages;
  const immediat = reg.feedback !== 'differe';
  const tuto = scn.tutoriel?.length ? scn.tutoriel : null;
  const bat = scn.batiment;
  const aThermo = scn.observations.some(o => o.thermo?.options?.length);
  const ui = { outil: 'observer', page: 'mission', carnet: !tuto, carte: null, tutoIdx: 0, app: 'tout', res: [], vu: new Set() };
  if (tuto) for (const k of ['origines', 'causes']) for (const d of scn.hypotheses[k]) E.ajouterHypothese(k, d.id);

  // ------------------------------------------------------------ squelette
  const screen = $('#screen');
  screen.innerHTML = '';
  const root = h(`<div class="jeu ${ui.carnet ? '' : 'carnet-ferme'}">
    <div class="s3d"></div>
    <div class="hud hud-tl"><div class="hud-box mission-chip"></div><div class="hud-box objectifs"></div><div class="hud-box fouille-p" hidden style="padding:12px"></div></div>
    <div class="hud hud-tr"><div class="hud-box compteurs"></div></div>
    <div class="hud hud-box parcours"></div>
    <div class="hud hud-box ceinture"></div>
    <div class="hud mentor cache"><div class="portrait" title="Demander conseil">${MENTOR.avatar}</div><div class="bulle"></div></div>
    <div class="hud fiche" hidden></div>
    <div class="hud carnet"><div class="onglets"></div><div class="page"></div></div>
    <div class="pops"></div>
  </div>`);
  screen.appendChild(root);
  const S = new Scene3D($('.s3d', root));
  S.load(scn);
  S.setHotspots(scn.observations.map(o => ({ id: o.id, pos: o.pos, alt: altitudeDe(bat, o.niveau), niv: niveauIndex(bat, o.niveau) })));
  const pieces = toutesPieces(bat);
  const zonePhoto = p => {
    if (p.zone) return p.zone;
    const niv = niveauIndex(bat, p.niveau);
    const r = pieces.find(q => q._niv === niv && p.pos[0] >= q.x && p.pos[0] <= q.x + q.w && p.pos[2] >= q.z && p.pos[2] <= q.z + q.d);
    return (r && scn.zones.find(z => z.piece === r.id)?.id) || scn.zones.find(z => z.exterieur)?.id;
  };
  S.setPhotos((scn.photos || []).map(p => ({ id: p.id, pos: p.pos, yaw: p.yaw, alt: altitudeDe(bat, p.niveau), niv: niveauIndex(bat, p.niveau), visible: false })));
  S.onPick = onPick;
  S.setToiture('visible');
  ctx.onLeave = () => { S.dispose(); document.removeEventListener('keydown', onKey); };

  // ------------------------------------------------------------ effets de jeu
  function pop(txt, cls = '') {
    const el = h(`<div class="pop ${cls}">${txt}</div>`);
    $('.pops', root).appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }
  let mentorActs = [];
  function dire(html, { refs, actions = [], garder = false } = {}) {
    const m = $('.mentor', root);
    m.classList.remove('cache');
    mentorActs = actions;
    $('.bulle', m).innerHTML = `<div class="nom">${MENTOR.nom}</div><div class="txt">${html} ${refs ? ref(refs) : ''}</div>
      <div class="acts">${actions.map((a, i) => `<button class="btn-j ${a.cls || ''}" data-ma="${i}">${a.label}</button>`).join('')}${garder ? '' : '<button class="btn-j ghost" data-ma="x">Compris</button>'}</div>`;
    $$('[data-ma]', m).forEach(b => b.onclick = () => { if (b.dataset.ma === 'x') m.classList.add('cache'); else mentorActs[+b.dataset.ma].fn(); });
  }
  $('.mentor .portrait', root).onclick = conseil;
  function signaler(msgs) {
    if (!msgs?.length) return;
    son('ko');
    if (immediat) dire(msgs.map(v => `⚠️ ${esc(v.texte)} ${ref(v.ref)}`).join('<br>'), {});
  }

  // ------------------------------------------------------------ objectifs
  const nObs = () => scn.observations.filter(o => !o.cachee).length;
  const zonesOrd = [...scn.zones].sort((a, b) => (b.exterieur ? 1 : 0) - (a.exterieur ? 1 : 0) || (a.rang || 0) - (b.rang || 0));
  function objectifs() {
    if (tuto) return tuto.map((s, i) => ({ t: s.objectif, ok: i < ui.tutoIdx, cur: i === ui.tutoIdx }));
    const ext = scn.zones.filter(z => z.exterieur);
    const vz = E.zonesVisitees.length, nz = scn.zones.length;
    const dec = [...E.decouverts.keys()].filter(id => !E.obs(id)?.cachee).length;
    const ana = E.analyses.size, anaPos = [...E.decouverts.keys()].filter(id => E.obs(id)?.analyse).length;
    const tn = scn.temoins.length, tv = [...E.temoins.keys()].length;
    const hy = k => [...E.hyp[k].values()].filter(x => x.teste).length;
    const l = [
      { t: 'Sécuriser la scène', ok: E.securite.faite, hint: 'Avant d\'entrer : clique sur <b>⚠ Sécurité</b> dans ta ceinture d\'outils.', ref: '12' },
      { t: 'Examiner l\'extérieur', ok: ext.some(z => E.photoZone.has(z.id)), hint: 'Commence toujours dehors : choisis une étape 🌳 du parcours en bas et prends une <b>vue d\'ensemble</b>.', ref: '17.3.1.3' },
      { t: `Parcourir les zones`, n: vz, max: nz, ok: vz >= nz, hint: 'Suis le parcours de gauche à droite : des zones les moins touchées vers les plus touchées.', ref: '17.3.1.3' },
      { t: `Trouver les indices`, n: dec, max: nObs(), ok: dec >= nObs(), hint: 'Survole la scène et clique sur ce qui t\'intrigue : traces, objets, appareils. Pivote la vue avec Q / E.' },
      { t: `Interpréter les indices`, n: ana, max: Math.max(anaPos, 1), ok: anaPos > 0 && ana >= anaPos, hint: 'Ouvre chaque indice : photographie-le, puis choisis la bonne lecture.', ref: '4.3.4' },
    ];
    const nTh = scn.observations.filter(o => o.thermo?.options?.length && !o.cachee).length;
    if (nTh) l.push({ t: 'Estimer les températures', n: E.releves.size, max: nTh, ok: E.releves.size >= Math.ceil(nTh * 0.75), hint: 'Certains indices sont des <b>témoins de température</b> : ce qui a fondu ou est resté intact. Dans la fiche, déduis la température atteinte à cet endroit.', ref: '6.2.2' });
    if (scn.fouille) l.push({ t: 'Fouiller la zone d\'intérêt', n: E.fouille.retirees, max: scn.fouille.couches.length, ok: E.fouille.retirees >= scn.fouille.couches.length, hint: 'Quand les tracés t\'ont mené à la zone d\'origine, fouille couche par couche : photo, puis retrait.', ref: '17.3.2' });
    if (tn) l.push({ t: 'Entendre les témoins', n: tv, max: tn, ok: tv >= Math.ceil(tn / 2), hint: 'Carnet → 🗣️ : questions ouvertes d\'abord, jamais de question qui suggère la réponse.', ref: '13.4' });
    l.push({ t: 'Tester les hypothèses', n: hy('origines') + hy('causes'), max: 4, ok: hy('origines') >= 2 && hy('causes') >= 2, hint: 'Carnet → 🧠 : ajoute au moins deux origines et deux causes possibles, et confronte-les aux faits.', ref: '4.3.6' });
    l.push({ t: 'Conclure l\'enquête', ok: false, hint: 'Quand tu es sûr de toi : bouton <b>Conclure</b>.' });
    const i = l.findIndex(x => !x.ok); if (i >= 0) l[i].cur = true;
    return l;
  }
  function renderObjectifs() {
    const l = objectifs();
    const fait = l.filter(x => x.ok).length;
    $('.objectifs', root).innerHTML = `<h4><span>${tuto ? 'Tutoriel' : 'Objectifs'}</span><span>${fait}/${l.length}</span></h4>
      ${(tuto ? l.slice(Math.max(0, ui.tutoIdx - 2), ui.tutoIdx + 3) : l).map(x => `<div class="obj ${x.ok ? 'fait' : ''} ${x.cur ? 'cur' : ''}"><i>${x.ok ? '✓' : ''}</i><div>${esc(x.t)}${x.max ? ` <small>${x.n} / ${x.max}</small>` : ''}</div></div>`).join('')}
      <div class="prog"><i style="width:${Math.round(100 * fait / l.length)}%"></i></div>`;
    $('.mission-chip', root).innerHTML = `<div class="k">${tuto ? 'Niveau 1 · en doublon' : esc(scn.niveauLabel || 'Enquête')}</div><div class="t">${esc(scn.titreCourt || scn.titre)}</div>`;
  }
  function conseil() {
    if (tuto) { direEtape(); return; }
    const o = objectifs().find(x => x.cur);
    dire(o?.hint || 'Tu as tout ce qu\'il faut : conclus quand tu es prêt.', { refs: o?.ref });
  }

  // ------------------------------------------------------------ tutoriel
  function condOk(c) {
    if (!c) return false;
    const tous = (ids, f) => ids.every(f);
    switch (c.type) {
      case 'securite': return E.securite.faite;
      case 'zone': return E.zonesVisitees.includes(c.id);
      case 'photoZone': return E.photoZone.has(c.id);
      case 'decouvert': return tous(c.ids, id => E.decouverts.has(id));
      case 'photo': return tous(c.ids, id => E.photoObs.has(id));
      case 'analyse': return tous(c.ids, id => E.analyses.has(id));
      case 'thermo': return tous(c.ids, id => E.releves.has(id));
      case 'fouille': return E.fouille.retirees >= (c.n || 1);
      case 'temoin': return (E.temoins.get(c.id)?.size || 0) >= (c.n || 1);
      case 'hypotheses': return [...E.hyp.origines.values(), ...E.hyp.causes.values()].every(x => x.teste);
      case 'carnet': return ui.vu.has(c.page);
      case 'rapport': return !!E.rapport;
    }
    return false;
  }
  function direEtape() {
    const st = tuto?.[ui.tutoIdx];
    if (!st) return;
    dire(st.mentor, { refs: st.ref });
  }
  function verifierTuto() {
    if (!tuto) return;
    let avance = false;
    while (ui.tutoIdx < tuto.length && condOk(tuto[ui.tutoIdx].cond)) { ui.tutoIdx++; avance = true; }
    if (avance) { son('objectif'); pop('✔ Objectif atteint', 'ok'); setTimeout(direEtape, 350); }
  }
  function surligner() {
    $$('.pulse', root).forEach(x => x.classList.remove('pulse'));
    const st = tuto?.[ui.tutoIdx];
    if (st?.cible) $$(st.cible, root).forEach(x => x.classList.add('pulse'));
  }

  // ------------------------------------------------------------ HUD
  function renderCompteurs() {
    const dec = [...E.decouverts.keys()].filter(id => !E.obs(id)?.cachee).length;
    $('.compteurs', root).innerHTML = `
      <div class="cpt"><b>${dec}/${nObs()}</b><span>indices</span></div>
      <div class="cpt"><b>${E.photos.length}</b><span>photos</span></div>
      <div class="cpt"><b>${E.scelles.length}</b><span>scellés</span></div>
      <div class="cpt"><b style="color:#ffd23f">${ctx.app.c.credits.toLocaleString('fr-FR')}</b><span>crédits</span></div>
      <div class="vue-btns" style="flex-direction:row">
        <button class="ic-btn" data-v="rotg" title="Pivoter (Q)">⟲</button><button class="ic-btn" data-v="rotd" title="Pivoter (E)">⟳</button>
        <button class="ic-btn" data-v="vue" title="Vue générale">🏠</button>
        <button class="ic-btn" data-v="son" title="Sons">${estMuet() ? '🔇' : '🔊'}</button>
        <button class="ic-btn" data-v="quit" title="Quitter l'enquête">✕</button>
      </div>`;
    $$('[data-v]', root).forEach(b => b.onclick = () => vue(b.dataset.v));
  }
  function vue(v) {
    if (v === 'rotg') S.rotateView(-45);
    if (v === 'rotd') S.rotateView(45);
    if (v === 'vue') { E.zoneActive = null; S.setFocus(null, null); S.setNiveauVisible(null); S.setToiture('visible'); fermerFiche(); renderAll(); }
    if (v === 'son') { basculerSon(); renderCompteurs(); }
    if (v === 'quit') confirmer('Quitter l\'enquête ?', 'La progression de cette enquête sera perdue.', 'Quitter').then(ok => ok && ctx.allerQG());
  }

  function iconeZone(z) {
    if (z.exterieur) return /fa[çc]ade/i.test(z.nom) ? '🧱' : '🌳';
    return ICONES.find(([re]) => re.test(z.nom))?.[1] || '🚪';
  }
  function renderParcours() {
    $('.parcours', root).innerHTML = zonesOrd.map((z, i) => `${i ? '<span class="lien"></span>' : ''}<button class="etape ${E.zonesVisitees.includes(z.id) ? 'vu' : ''} ${E.zoneActive === z.id ? 'on' : ''}" data-z="${z.id}" title="${esc(z.nom)}">
      <span class="rond">${iconeZone(z)}</span><small>${esc(z.nom)}</small><span class="dg">${[1, 2, 3, 4].map(k => `<i class="${(z.rang || 0) >= k ? 'f' : ''}"></i>`).join('')}</span></button>`).join('');
    $$('[data-z]', root).forEach(b => b.onclick = () => allerZone(b.dataset.z));
  }

  function renderCeinture() {
    const t = [];
    if (!E.securite.faite) t.push(['secu', '⚠️', 'Sécurité']);
    t.push(['observer', '🔦', 'Examiner'], ['photoZone', '📷', 'Vue d\'ensemble']);
    if (E.possede('pid')) t.push(['pid', '📟', 'PID']);
    if (E.possede('calc')) t.push(['calc', '🧮', 'Calculs']);
    if (E.possede('drone')) t.push(['drone', '🚁', 'Drone']);
    $('.ceinture', root).innerHTML = t.map(([id, ic, l]) => `<button class="outil ${ui.outil === id ? 'on' : ''}" data-t="${id}" ${id === 'secu' ? 'data-a="secu"' : ''}><span class="i">${ic}</span>${l}</button>`).join('') +
      `<button class="outil carnet-b" data-t="carnet"><span class="i">📒</span>Carnet</button>
       <button class="outil cle" data-t="conclure" ${E.decouverts.size < 3 ? 'disabled title="Relève au moins 3 indices"' : ''}><span class="i">⚖️</span>Conclure</button>`;
    $$('[data-t]', root).forEach(b => b.onclick = () => outil(b.dataset.t));
  }
  function outil(id) {
    if (id === 'secu') return securite();
    if (id === 'photoZone') return photoZone();
    if (id === 'calc') return calculateur(scn.dynamique);
    if (id === 'drone') { ui.dessus = !ui.dessus; S.vueDessus(ui.dessus); return; }
    if (id === 'carnet') { ui.carnet = !ui.carnet; root.classList.toggle('carnet-ferme', !ui.carnet); son('page'); return; }
    if (id === 'conclure') return conclure();
    ui.outil = id; renderCeinture();
    if (id === 'pid') pop('📟 Clique au sol pour mesurer', '');
  }

  // ------------------------------------------------------------ fouille
  function zoneInteretDefinie() {
    const f = scn.fouille;
    const cand = scn.observations.filter(o => o.zone === f.zone && !o.couche && o.analyse).length;
    return [...E.analyses.keys()].filter(id => E.obs(id)?.zone === f.zone && !(E.obs(id).couche)).length >= Math.min(tuto ? 1 : 3, cand);
  }
  function renderFouille() {
    const f = scn.fouille, el = $('.fouille-p', root);
    if (!f || E.zoneActive !== f.zone) { el.hidden = true; S.montrerRubanFouille(false); return; }
    const pret = zoneInteretDefinie();
    S.montrerRubanFouille(pret);
    el.hidden = false;
    const n = E.fouille.retirees, cur = f.couches.find(c => c.n === n + 1);
    el.innerHTML = `<div style="font-weight:800;margin-bottom:4px">⛏️ Fouille par couches ${ref(f.ref || '17.3.2')}</div>
      ${!pret ? `<div class="small" style="color:#cfd3d8">Lis d'abord les tracés de cette pièce : ils te diront où creuser.</div>` : `
      <div class="layers">${[...f.couches].sort((a, b) => b.n - a.n).map(c => `<div class="layer ${c.n <= n ? 'gone' : ''} ${c.n === n + 1 ? 'cur' : ''}"><span>${c.n}</span><span>${esc(c.nom)}</span><span>${E.photoCouche.has(c.n) ? '📷' : ''}</span></div>`).join('')}</div>
      ${cur ? `<div class="small" style="color:#cfd3d8;margin-bottom:8px">${esc(cur.description || '')}</div>
      <div style="display:flex;gap:6px">${E.photoCouche.has(cur.n) ? '' : '<button class="btn-j" data-f="photo">📷 Photo</button>'}<button class="btn-j go" data-f="retirer">Retirer la couche ${cur.n}</button></div>` : '<div class="small" style="color:#7ee0a6">Niveau du sol atteint : examine ce qui est apparu.</div>'}`}`;
    $('[data-f=photo]', el)?.addEventListener('click', photoZone);
    $('[data-f=retirer]', el)?.addEventListener('click', retirerCouche);
  }
  function retirerCouche() {
    if (E.perk('methode') && !E.photoCouche.has(E.fouille.retirees + 1)) {
      capture(img => { E.photoDeZone(img); pop('📷 Réflexe photo : couche photographiée'); retirerCouche(); });
      return;
    }
    const r = E.retirerCouche();
    S.setFouille(E.fouille.retirees);
    signaler(r.msgs);
    son('trouve');
    pop(`⛏️ ${esc(r.couche.nom)} retirée${r.reveles.length ? ` · ${r.reveles.length} élément(s) à examiner` : ''}`, 'gold');
    renderAll();
  }

  // ------------------------------------------------------------ carnet
  function renderCarnet() {
    const cnt = { constats: [...E.decouverts.keys()].filter(id => E.obs(id)?.analyse && !E.analyses.has(id)).length, thermo: [...E.decouverts.keys()].filter(id => E.aEstimer(E.obs(id))).length, hyp: [...E.hyp.origines.values(), ...E.hyp.causes.values()].filter(x => !x.teste).length };
    const pages = PAGES.filter(p => p[0] !== 'thermo' || aThermo);
    $('.carnet .onglets', root).innerHTML = pages.map(([id, ic, l, c]) => `<button class="onglet ${ui.page === id ? 'on' : ''}" data-p="${id}" title="${l}" style="background:${c}">${ic}${cnt[id] ? `<span class="n">${cnt[id]}</span>` : ''}</button>`).join('');
    $$('.onglet', root).forEach(b => b.onclick = () => { ui.page = b.dataset.p; ui.vu.add(ui.page); if (!ui.carnet) { ui.carnet = true; root.classList.remove('carnet-ferme'); } son('page'); renderCarnet(); verifierTuto(); renderObjectifs(); surligner(); });
    const page = $('.carnet .page', root);
    const [, ic, titre] = PAGES.find(p => p[0] === ui.page);
    page.innerHTML = `<div class="page-h"><h2>${ic} ${titre}</h2><small>${esc(scn.titreCourt || scn.titre)}</small></div><div class="page-b"></div>`;
    ({ mission: pMission, constats: pConstats, thermo: pThermo, temoins: pTemoins, labo: pLabo, hyp: pHyp, notes: pNotes })[ui.page]($('.page-b', page));
  }

  function pMission(b) {
    b.innerHTML = `<div class="fax"><b>ORDRE DE MISSION</b> — ${esc(scn.mission.reference || '')}<br>${esc(scn.mission.mandant || '')}<br><br>${esc(scn.mission.ordre || '')}<br><br>Sinistre : ${esc(scn.mission.dateSinistre || '')} · alerte ${esc(scn.mission.heureAlerte || '')}<br>${esc(scn.mission.adresse || '')}</div>
      ${scn.rapportSdis.length ? `<div class="sous">Compte rendu des secours</div><div class="fax">${scn.rapportSdis.map(esc).join('<br>')}</div>` : ''}
      ${scn.meteo ? `<div class="sous">Météo</div><div class="mot">${esc(scn.meteo)}</div>` : ''}
      ${immediat && E.violations.length ? `<div class="sous">Remarques du tuteur</div>${E.violations.map(v => `<div class="ecart">✗ ${esc(v.texte)}</div>`).join('')}` : ''}`;
  }

  function pConstats(b) {
    const parZone = zonesOrd.map(z => ({ z, l: [...E.decouverts].filter(([id]) => E.obs(id).zone === z.id).map(([id, d]) => ({ o: E.obs(id), num: d.num })) })).filter(x => x.l.length);
    if (!parZone.length) { b.innerHTML = '<div class="mot">Rien encore… Examine la scène : chaque indice trouvé s\'écrira ici.</div>'; return; }
    b.innerHTML = parZone.map(({ z, l }) => `<div class="sous">${iconeZone(z)} ${esc(z.nom)}</div>${l.sort((a, b2) => a.num - b2.num).map(({ o, num }) => {
      const a = E.analyses.get(o.id); const ph = E.photos.find(p => p.obs === o.id);
      return `<div class="entree" data-o="${o.id}"><div class="hd"><span class="cv">${num}</span><span class="ti">${esc(o.titre)}</span>${ph ? `<img class="ph" src="${ph.img}" alt="">` : ''}</div>
        ${a ? `<div class="an ${immediat ? (a.ok ? 'ok' : 'ko') : ''}">→ ${esc(o.analyse.options[a.idx].t)}</div>` : o.analyse ? `<div class="todo">${E.photoObs.has(o.id) ? '✎ à interpréter' : '📷 à photographier puis interpréter'}</div>` : ''}
        ${o.thermo?.options ? (E.releves.has(o.id) ? `<div class="an ${immediat ? (E.releves.get(o.id).ok ? 'ok' : 'ko') : ''}">🌡️ ${esc(o.thermo.options[E.releves.get(o.id).idx].t)}</div>` : `<div class="todo">🌡️ température à estimer</div>`) : ''}</div>`;
    }).join('')}`).join('') +
      (E.photos.filter(p => !p.obs).length ? `<div class="sous">Vues d'ensemble</div><div class="polas">${E.photos.filter(p => !p.obs).map(p => `<div class="pola"><img src="${p.img}" alt=""><span>n°${p.n}</span></div>`).join('')}</div>` : '');
    $$('[data-o]', b).forEach(x => x.onclick = () => { const o = E.obs(x.dataset.o); cadrer(o); ouvrirFiche(o); });
  }

  function pThermo(b) {
    const l = [...E.releves].map(([id, r]) => ({ o: E.obs(id), r, f: fourchette(E.obs(id).thermo.items) }));
    const reste = [...E.decouverts.keys()].filter(id => E.aEstimer(E.obs(id))).length;
    const X = t => Math.max(0, Math.min(100, 100 * t / 1600));
    const barre = (bas, haut, cls = '') => `<div class="th-bar ${cls}"><i style="left:${X(bas ?? 0)}%;right:${100 - X(haut ?? 1600)}%"></i>${[200, 400, 600, 800, 1000, 1200, 1400].map(t => `<u style="left:${X(t)}%"></u>`).join('')}</div>`;
    const lignes = l.map(({ o, r, f }) => {
      const z = E.zone(o.zone);
      const montre = immediat || r.ok;
      return `<div class="th-l" data-o="${o.id}"><div class="hd">${iconeZone(z)} <b>${esc(z?.nom || '')}</b> · ${esc(o.titre)}</div>
        ${montre ? barre(f.bas, f.haut, immediat && !r.ok ? 'ko' : '') : ''}<div class="lb ${immediat ? (r.ok ? 'ok' : 'ko') : ''}">${esc(o.thermo.options[r.idx].t)}${immediat && !r.ok ? ` <span style="color:#666">(attendu : ${esc(o.thermo.options.find(x => x.ok).t)})</span>` : ''}</div></div>`;
    }).join('');
    const parZone = {};
    for (const { o, r, f } of l) if ((immediat || r.ok) && f.bas != null) parZone[o.zone] = Math.max(parZone[o.zone] ?? 0, f.bas);
    const top = Object.entries(parZone).sort((a, b2) => b2[1] - a[1])[0];
    b.innerHTML = `<div class="mot">Un objet <b>fondu</b> : la température a <b>au moins</b> atteint sa fusion. Un objet <b>intact</b> : elle est restée <b>en dessous</b>. ${ref('6.2.2.4')}</div>
      ${l.length ? `<div class="th-ech"><span>0</span><span>400</span><span>800</span><span>1 200</span><span>1 600 °C</span></div>${lignes}` : '<div class="mot" style="color:#8a8374">Aucune estimation encore. Cherche ce qui a fondu… et ce qui a résisté.</div>'}
      ${reste ? `<div class="todo" style="margin:8px 0">🌡️ ${reste} témoin(s) relevé(s) à estimer</div>` : ''}
      ${top ? `<div class="sous">Ce que j'en retiens</div><div class="mot">Exposition la plus forte relevée : <b>${esc(E.zone(top[0])?.nom || '')}</b> (au moins ${fmt(top[1])}). Attention : la zone la plus chaude n'est pas forcément l'origine — ventilation, charge combustible et durée comptent autant ${ref('6.2.2.3')}.</div>` : ''}
      <details class="voir" style="margin-top:10px"><summary>📖 Mes repères de fusion</summary>${tableFusions()}</details>`;
    $$('[data-o]', b).forEach(x => x.onclick = () => { const o = E.obs(x.dataset.o); cadrer(o); ouvrirFiche(o); });
  }
  function tableFusions(ids = null, surligner = new Set()) {
    const l = ids ? FUSIONS.filter(f => ids.has(f.id)) : FUSIONS;
    return `<table class="reperes">${l.map(f => `<tr class="${surligner.has(f.id) ? 'hl' : ''}"><td><b>${esc(f.nom)}</b><small>${esc(f.ex)}</small></td><td>${f.seuil ? esc(f.seuil) : 'fusion'}</td><td class="t">${esc(f.plage)} °C</td></tr>`).join('')}</table>`;
  }

  function pTemoins(b) {
    const decl = [...E.faits.values()].filter(f => f.type === 'temoin');
    const os = [...E.faits.values()].filter(f => f.type === 'osint');
    b.innerHTML = (scn.temoins.length ? scn.temoins.map(t => `<div class="perso" data-t="${t.id}"><span class="av">${t.avatar || '👤'}</span><div><b>${esc(t.nom)}</b><small>${esc(t.role)}</small></div><span class="bdg">${E.temoins.get(t.id)?.size || 0}/${t.questions.length}</span></div>`).join('') : '<div class="mot">Aucun témoin à entendre.</div>') +
      (decl.length ? `<div class="sous">Ce qu'on m'a dit</div>${decl.map(f => `<div class="mot">« ${esc(f.court)} »${f.contamine ? ' <span style="color:#c0392b">(sur ma suggestion…)</span>' : ''}</div>`).join('')}` : '') +
      ((scn.osint || []).length ? `<div class="sous">Recherches</div><button class="btn-j go gros" data-tel>📱 Ouvrir le téléphone (sources ouvertes)</button>${os.map(f => `<div class="coupure"><b>${esc(f.source)}</b>${esc(f.court)}${f.fiabilite ? `<div style="color:#888;font-size:12px">${esc(f.fiabilite)}</div>` : ''}</div>`).join('')}` : '');
    $$('[data-t]', b).forEach(x => x.onclick = () => entretien(x.dataset.t));
    $('[data-tel]', b)?.addEventListener('click', telephone);
  }

  function pLabo(b) {
    if (!E.scelles.length) { b.innerHTML = `<div class="mot">Aucun scellé. Prélève depuis la fiche d'un indice (🧤).</div><div class="mot" style="color:#8a8374">Contenants dans ma mallette : ${E.contenantsDisponibles().map(c => esc(c.nom.split(' (')[0])).join(', ')}.</div>`; return; }
    b.innerHTML = E.scelles.map(s => {
      const p = scn.prelevements.find(x => x.id === s.prelevement);
      return `<div class="enveloppe"><span class="scel">${s.id}</span><b>${esc(s.nom)}</b><div style="font-size:12.5px">${esc(CONTENANTS.find(c => c.id === s.contenant)?.nom)}${s.temoin ? ' · + comparaison' : ''}</div>
        ${p.analyses.map(a => s.resultats[a.id] ? `<div class="resultat"><span class="tampon ${s.resultats[a.id].fait && !s.resultats[a.id].partiel ? 'ok' : 'ko'}">${s.resultats[a.id].fait && !s.resultats[a.id].partiel ? 'RÉSULTAT' : 'INEXPLOITABLE'}</span><br><b>${esc(a.nom)}</b><br>${esc(s.resultats[a.id].texte)}</div>`
          : `<button class="btn-j go" style="margin-top:8px" data-s="${s.id}" data-a="${a.id}">📮 Envoyer : ${esc(a.nom)} — ${E.coutAnalyse(a, p)} cr</button>`).join('')}</div>`;
    }).join('');
    $$('[data-s]', b).forEach(x => x.onclick = () => {
      const r = E.analyserScelle(x.dataset.s, x.dataset.a);
      if (r.erreur) { toast(r.erreur, 'ko'); return; }
      ctx.save(); son('ok'); pop(`🔬 Résultats du labo reçus (−${r.cout} cr)`, 'gold'); renderAll(); if (r.avance) toast('💼 Le cabinet t\'avance les frais d\'analyse : ils seront repris sur tes honoraires.', 'info', 5000);
    });
  }

  function pHyp(b) {
    const bloc = (kind, titre) => {
      const defs = scn.hypotheses[kind], m = E.hyp[kind];
      const dispo = defs.filter(d => !m.has(d.id));
      const tamp = { ouverte: ['wait', 'À TESTER'], retenue: ['ok', 'RETENUE'], refutee: ['ko', 'ÉCARTÉE'] };
      return `<div class="sous">${titre}</div>${[...m].map(([id, hh]) => { const d = defs.find(x => x.id === id); const [c, l] = tamp[hh.statut]; return `<div class="hcarte"><span class="tampon ${c}">${l}</span><p>${esc(d.nom)}</p>
        <div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap"><button class="btn-j go" data-test="${kind}|${id}">🧷 Confronter aux faits</button>${kind === 'causes' ? `<button class="btn-j" data-comp="${id}">🔥 Compétence ${E.competence.has(id) ? '✓' : ''}</button>` : ''}</div></div>`; }).join('')}
        ${dispo.length && !tuto ? `<div style="display:flex;gap:6px;margin:6px 0 10px"><select class="inp" data-sel="${kind}" style="flex:1;min-width:0;background:#fff;color:#222;border-color:#ddd5c2">${dispo.map(d => `<option value="${d.id}">${esc(d.nom)}</option>`).join('')}</select><button class="btn-j" data-add="${kind}">＋</button></div>` : ''}`;
    };
    b.innerHTML = `<div class="mot">Je pars des faits, j'imagine plusieurs explications, puis j'essaie de les <b>démolir</b> une à une.</div>${bloc('origines', 'Où le feu a-t-il pris ?')}${bloc('causes', 'Comment a-t-il pris ?')}`;
    $$('[data-add]', b).forEach(x => x.onclick = () => { const k = x.dataset.add; E.ajouterHypothese(k, $(`[data-sel=${k}]`, b).value); son('page'); renderAll(); });
    $$('[data-test]', b).forEach(x => x.onclick = () => { const [k, id] = x.dataset.test.split('|'); confronter(k, id); });
    $$('[data-comp]', b).forEach(x => x.onclick = () => { const d = scn.hypotheses.causes.find(c => c.id === x.dataset.comp); testCompetence(d, v => { E.competence.add(d.id); pop('🔥 Test de compétence noté', 'ok'); renderAll(); }); });
  }

  function pNotes(b) {
    b.innerHTML = `<textarea class="notes-zone" placeholder="Mes notes de terrain… (heures, doutes, pistes à vérifier)">${esc(E.notes)}</textarea>`;
    $('textarea', b).oninput = e => { E.notes = e.target.value; };
  }

  // ------------------------------------------------------------ fiche d'indice
  function cadrer(o) {
    const z = E.zone(o.zone);
    if (z && E.zoneActive !== z.id) allerZone(z.id, true);
  }
  function fermerFiche() { ui.carte = null; $('.fiche', root).hidden = true; root.classList.remove('fiche-ouverte'); }
  function ficheEtroite() { root.classList.add('fiche-ouverte'); if (innerWidth < 1250 && ui.carnet) { ui.carnet = false; root.classList.add('carnet-ferme'); } }

  function ouvrirFiche(o) {
    const el = $('.fiche', root);
    ui.carte = o.id; el.hidden = false; ficheEtroite();
    const d = E.decouverts.get(o.id), a = E.analyses.get(o.id), ph = E.photoObs.has(o.id);
    const scelle = o.prelevement && E.scelles.find(s => s.prelevement === o.prelevement);
    const mesPhotos = E.photos.filter(p => p.obs === o.id);
    const vraies = (scn.photos || []).filter(p => p.constat === o.id && scn.medias?.[p.media]);
    const rel = E.releves.get(o.id), th = o.thermo?.options?.length ? o.thermo : null;
    const etapes = [['Repéré', true], ['Photo', ph], ...(o.analyse ? [['Lecture', !!a]] : []), ...(th ? [['Température', !!rel]] : []), ...(o.prelevement ? [['Scellé', !!scelle]] : [])];
    const cur = etapes.findIndex(x => !x[1]);
    el.innerHTML = `<span class="num">${d?.num ?? '?'}</span><h3>${esc(o.titre)}</h3>
      <div class="lieu">${esc(E.zone(o.zone)?.nom || '')}${o.outil ? ` · relevé : ${esc(E.outilNom(o.outil))}` : ''}</div>
      <div class="etapes">${etapes.map(([l, ok], i) => `<span class="etp ${ok ? 'ok' : i === cur ? 'cur' : ''}">${ok ? '✓ ' : ''}${l}</span>`).join('')}</div>
      ${mesPhotos.length || vraies.length ? `<div class="polas">${mesPhotos.map(p => `<div class="pola"><img src="${p.img}" alt=""><span>n°${p.n}</span></div>`).join('')}${vraies.map(p => `<div class="pola" data-ph="${p.id}"><img src="${scn.medias[p.media]}" alt=""><span>photo réelle</span></div>`).join('')}</div>` : ''}
      <div class="desc">${esc(o.description)}</div>
      <div class="suite"></div>`;
    const s = $('.suite', el);
    if (!ph) {
      s.innerHTML = `<button class="btn-j go gros" style="margin-top:12px" data-x="photo">📷 Photographier l'indice</button><div class="small" style="color:#8a8374;margin-top:6px;text-align:center">On photographie toujours avant de toucher ou d'interpréter ${ref('15.2')}</div>`;
      $('[data-x=photo]', s).onclick = () => photoObs(o);
    } else {
      if (o.analyse && !a) {
        const barree = E.perk('traces') ? o.analyse.options.findIndex(x => !x.ok) : -1;
        s.innerHTML = `<div class="question">${esc(o.analyse.question)}</div>${o.analyse.options.map((op, i) => `<button class="choix ${i === barree ? 'barree' : ''}" data-i="${i}" ${i === barree ? 'disabled title="Œil exercé : lecture écartée"' : ''}>${esc(op.t)}</button>`).join('')}`;
        $$('[data-i]', s).forEach(btn => btn.onclick = () => {
          const r = E.analyser(o.id, +btn.dataset.i);
          if (immediat) { son(r.ok ? 'ok' : 'ko'); pop(r.ok ? '✔ Bonne lecture !' : '✗ Lecture discutable', r.ok ? 'ok' : 'ko'); }
          else { son('page'); pop('✍ Lecture notée au carnet'); }
          renderAll(); ouvrirFiche(o);
        });
      } else if (a) {
        s.innerHTML = immediat ? `<div class="verdict ${a.ok ? 'ok' : 'ko'}"><b>${a.ok ? 'Bien vu !' : 'Pas tout à fait…'}</b>${esc(o.analyse.options[a.idx].t)}<div style="margin-top:6px;font-size:13px">${esc(o.analyse.options[a.idx].fb || '')}${!a.ok ? `<br><b style="font:700 14px var(--sans);display:inline">Lecture attendue :</b> ${esc(o.analyse.options.find(x => x.ok)?.t || '')}` : ''}</div><div style="margin-top:4px">${ref(o.analyse.ref || o.ref)}</div>${voirAussiHtml({ ref: o.analyse.ref || o.ref, sources: o.sources, texte: `${o.titre} ${o.description || ''}` }, { max: 3 })}</div>` : `<div class="verdict" style="background:#f1ead6">✍ ${esc(o.analyse.options[a.idx].t)}</div>`;
      }
      if (th && (!o.analyse || a)) blocThermo(o, s);
    }
    if (ph && o.prelevement && !scelle && (!o.analyse || a) && (!th || rel)) {
      const p = scn.prelevements.find(x => x.id === o.prelevement);
      const conts = E.contenantsDisponibles();
      s.insertAdjacentHTML('beforeend', `<div class="question">🧤 Prélever : ${esc(p.nom)}</div><div class="mini-form">${conts.map((c, i) => `<label><input type="radio" name="ct" value="${c.id}" ${i === 0 ? 'checked' : ''}> ${esc(c.nom)}</label>`).join('')}
        ${p.type === 'liquide' ? `<label><input type="checkbox" class="cmp"> + échantillon de comparaison (${esc(p.temoin || 'même matériau, hors zone')})</label>` : ''}</div>
        ${E.possede('pots') ? '' : '<div class="small" style="color:#8a8374">🔒 Pots métalliques et sachets spéciaux : équipement « Contenants » au QG.</div>'}
        <button class="btn-j fire gros" style="margin-top:6px" data-x="scelle">Mettre sous scellé</button>`);
      $('[data-x=scelle]', s).onclick = () => {
        const r = E.prelever(o.id, $('input[name=ct]:checked', s).value, $('.cmp', s)?.checked);
        if (r.erreur) { toast(r.erreur, 'ko'); return; }
        signaler(r.msgs); son('ok'); pop(`🧪 Scellé ${r.scelle.id} constitué`, 'gold'); renderAll(); ouvrirFiche(o);
      };
    } else if (scelle) s.insertAdjacentHTML('beforeend', `<div class="small" style="margin-top:8px">🧪 Sous scellé <b>${scelle.id}</b> — résultats dans le carnet (onglet 🧪).</div>`);
    s.insertAdjacentHTML('beforeend', `<div style="display:flex;justify-content:flex-end;margin-top:12px"><button class="btn-j ghost" data-x="close">Fermer ✕</button></div>`);
    $('[data-x=close]', s).onclick = fermerFiche;
    $$('[data-ph]', el).forEach(x => x.onclick = () => voirPhoto(x.dataset.ph));
  }

  function blocThermo(o, s) {
    const th = o.thermo, r = E.releves.get(o.id);
    const ids = new Set(th.items.map(it => it.mat));
    const autres = FUSIONS.filter(f => !ids.has(f.id)).map(f => ({ f, d: Math.min(...[...ids].map(id => Math.abs((fusion(id)?.t || 0) - f.t))) })).sort((x, y) => x.d - y.d).slice(0, 5).map(x => x.f.id);
    const visibles = new Set([...ids, ...autres]);
    const temoins = `<div class="thermo-t">${th.items.map(it => { const m = fusion(it.mat); if (!m) return ''; const at = it.etat === 'fondu'; return `<div class="tm ${at ? 'at' : 'non'}"><span class="ic">${at ? '💧' : '🧊'}</span><div><b>${esc(it.objet || m.ex.split(',')[0])}</b><small>${esc(m.nom)} — <b>${esc(at ? etatAtteint(m) : etatNon(m))}</b></small></div></div>`; }).join('')}</div>`;
    let html = `<div class="question">🌡️ Témoins de température</div>${temoins}
      <details class="voir" ${r ? '' : 'open'}><summary>📖 Mes repères de fusion</summary>${tableFusions(visibles, E.perk('thermo') ? ids : new Set())}</details>`;
    if (!r) {
      html += `<div class="question" style="margin-top:10px">${esc(th.question)}</div>${th.options.map((op, i) => `<button class="choix" data-ti="${i}">${esc(op.t)}</button>`).join('')}`;
    } else {
      const op = th.options[r.idx], f = fourchette(th.items);
      const X = t => Math.max(0, Math.min(100, 100 * t / 1600));
      html += immediat ? `<div class="verdict ${r.ok ? 'ok' : 'ko'}"><b>${r.ok ? 'Bien estimé !' : 'Raisonnement à revoir…'}</b>${esc(op.t)}
        <div class="th-bar ${r.ok ? '' : 'ko'}" style="margin:8px 0 2px"><i style="left:${X(f.bas ?? 0)}%;right:${100 - X(f.haut ?? 1600)}%"></i></div><div class="th-ech"><span>0</span><span>800</span><span>1 600 °C</span></div>
        <div style="margin-top:6px;font-size:13px">${esc(op.fb || '')}${!r.ok ? `<br><b style="font:700 14px var(--sans);display:inline">Estimation attendue :</b> ${esc(th.options.find(x => x.ok)?.t || '')}` : ''}</div>
        <div style="margin-top:4px">${ref(th.ref)}</div>${voirAussiHtml({ ref: th.ref, texte: 'fusion température alliage' }, { max: 3 })}</div>` : `<div class="verdict" style="background:#f1ead6">🌡️ ${esc(op.t)}</div>`;
    }
    s.insertAdjacentHTML('beforeend', html);
    $$('[data-ti]', s).forEach(btn => btn.onclick = () => {
      const res = E.estimerTemperature(o.id, +btn.dataset.ti);
      if (immediat) { son(res.ok ? 'ok' : 'ko'); pop(res.ok ? '🌡️ Bonne estimation !' : '✗ Estimation discutable', res.ok ? 'ok' : 'ko'); }
      else { son('page'); pop('🌡️ Estimation notée au carnet'); }
      renderAll(); ouvrirFiche(o);
    });
    if (!r && !ui.thermoExplique) {
      ui.thermoExplique = true;
      dire('Ça, c\'est un <b>témoin de température</b>. Regarde ce qui a fondu et ce qui a tenu : un objet fondu prouve qu\'on a <b>au moins</b> atteint sa température de fusion ; un objet intact, qu\'on est resté <b>en dessous</b>. Ouvre tes repères de fusion pour chiffrer.', { refs: '6.2.2.4 / 6.2.8' });
    }
  }

  function ficheIndice(o) {
    const el = $('.fiche', root);
    ui.carte = null; el.hidden = false; ficheEtroite();
    const poss = E.possede(o.outil), out = OUTILS.find(x => x.id === o.outil);
    el.innerHTML = `<span class="num">?</span><h3>Quelque chose à mesurer…</h3><div class="desc">${esc(o.indice || 'Un relevé instrumental serait utile ici.')}</div>
      ${poss ? `<button class="btn-j go gros" style="margin-top:12px" data-x="use">${out.icone} Utiliser : ${esc(out.nom)}</button>` : `<div class="verdict ko"><b>Il me manque l'outil</b>${out.icone} ${esc(out.nom)} — disponible à l'équipement du QG (${out.prix} cr).</div>`}
      <div style="display:flex;justify-content:flex-end;margin-top:10px"><button class="btn-j ghost" data-x="close">Fermer ✕</button></div>`;
    $('[data-x=close]', el).onclick = fermerFiche;
    $('[data-x=use]', el)?.addEventListener('click', () => { const r = E.pick(o.outil, { hotspot: o.id }); if (r.obs) { son('trouve'); pop(`${out.icone} Relevé effectué`, 'gold'); renderAll(); ouvrirFiche(o); } });
  }

  function voirPhoto(id) {
    const p = scn.photos.find(x => x.id === id);
    modal({ titre: `📷 ${esc(p.titre || 'Photo')}`, classe: 'jeu-m', large: true, corps: `${scn.medias?.[p.media] ? `<img src="${scn.medias[p.media]}" alt="" style="width:100%;border-radius:8px">` : ''}<p style="margin-top:10px">${esc(p.legende || '')}</p><p class="small muted">${esc([p.date, p.auteur].filter(Boolean).join(' · '))}</p>`, actions: [{ label: 'Fermer' }] });
  }

  // ------------------------------------------------------------ actions
  function allerZone(id, silencieux) {
    const msgs = E.entrerZone(id);
    const z = E.zone(id);
    S.setFocus({ ...z, azimut: z.azimut ?? (z.exterieur ? undefined : 42) }, z.piece || null);
    S.setNiveauVisible(z.piece ? S._nivDePiece(z.piece) : null);
    S.setToiture(z.toiture || (z.exterieur ? 'visible' : 'cache'));
    if (!silencieux) fermerFiche();
    signaler(msgs);
    if (!msgs.length && !silencieux) son('page');
    renderAll();
  }

  function capture(cb, cible) {
    const fl = h('<div style="position:absolute;inset:0;background:#fff;z-index:40;opacity:.85;transition:opacity .35s;pointer-events:none"></div>');
    if (cible) { S.setFocus({ cible, zoom: Math.max(S.camera.zoom, 2.2) }, S.focus?.piece || null); }
    setTimeout(() => { const img = S.capture(); root.appendChild(fl); son('photo'); requestAnimationFrame(() => { fl.style.opacity = 0; }); setTimeout(() => fl.remove(), 400); cb(img); }, cible ? 720 : 30);
  }
  function photoZone() {
    if (!E.zoneActive) { dire('Choisis d\'abord une zone dans le parcours, en bas de l\'écran.'); return; }
    const vis = !$('.fiche', root).hidden; $('.fiche', root).hidden = true;
    capture(img => { const n = E.photoDeZone(img); pop(`📷 Photo n°${n} : vue d'ensemble`); if (vis && ui.carte) ouvrirFiche(E.obs(ui.carte)); renderAll(); });
  }
  function photoObs(o) {
    $('.fiche', root).hidden = true;
    capture(img => { E.photoDObs(o, img); pop('📷 Indice photographié'); renderAll(); ouvrirFiche(o); }, [o.pos[0], altitudeDe(bat, o.niveau) + o.pos[1], o.pos[2]]);
  }

  function onPick(hit) {
    if (hit.photo) { voirPhoto(hit.photo); return; }
    if (hit.hotspot) {
      const o = E.obs(hit.hotspot);
      if (E.decouverts.has(o.id)) { ouvrirFiche(o); return; }
      if (!E.zoneActive) { dire('Choisis d\'abord la zone à examiner dans le parcours.'); return; }
      if (o.outil) { ficheIndice(o); return; }
      const r = E.pick('observer', hit);
      if (r.obs) { son('trouve'); pop(`🔎 Nouvel indice : ${esc(o.titre)}`, 'gold'); renderAll(); ouvrirFiche(o); }
      return;
    }
    if (hit.objet && ui.outil !== 'pid') {
      const ob = niveauxDe(scn.batiment).flatMap(n => n.objets || []).find(x => x.id === hit.objet);
      const f = ob && ficheHtml(ob.fiche, scn.medias || {});
      if (f) { son('page'); modal({ titre: `📋 Documentation : ${esc(ob.nom || ob.type)}`, classe: 'jeu-m', corps: `<p class="small" style="color:#6b6457">Informations recueillies auprès du propriétaire, du fabricant ou dans les procès-verbaux.</p>${f}`, actions: [{ label: 'Fermer', classe: 'btn-primary' }] }); return; }
    }
    if (ui.outil === 'pid' && E.zoneActive) {
      const r = E.pick('pid', hit);
      if (r.type === 'pid') { son(r.obs ? 'trouve' : 'page'); pop(`📟 PID : ${esc(r.valeur)}`, r.obs ? 'gold' : ''); if (r.obs) { renderAll(); ouvrirFiche(r.obs); } }
    }
  }

  // ------------------------------------------------------------ sécurité
  function securite() {
    const opts = scn.securite.options;
    const corps = h(`<div><p>Avant d'entrer, coche les mesures que tu prends ${ref(scn.securite.ref)}.</p>${opts.map(o => `<label class="opt" style="background:#fff;border-color:#e2dccb;color:#222"><input type="checkbox" value="${o.id}"><span>${esc(o.t)}</span></label>`).join('')}<div class="sFb"></div></div>`);
    let fait = false;
    const m = modal({ titre: '⚠️ Sécurité de la scène', classe: 'jeu-m', corps, actions: [{ label: 'Valider', classe: 'btn-primary', onClick: () => {
      if (fait) return true;
      const r = E.validerSecurite($$('input:checked', corps).map(x => x.value));
      fait = true;
      const bon = !r.fautes.length && !r.oublis.length;
      son(bon ? 'ok' : 'ko');
      if (immediat) {
        $('.sFb', corps).innerHTML = bon ? '<div class="verdict ok"><b>Parfait.</b>Scène sécurisée, on peut travailler.</div>' : `<div class="verdict ko"><b>À revoir</b>${r.fautes.map(f => `✗ ${esc(f.fb)}`).join('<br>')}${r.oublis.length ? `<br>Oublié : ${r.oublis.map(o => esc(o.t)).join(' ; ')}` : ''}</div>`;
        m.el.querySelector('.modal-f .btn-primary').textContent = 'Continuer';
        renderAll(); return false;
      }
      renderAll();
    } }] });
  }

  // ------------------------------------------------------------ témoins (dialogue)
  function entretien(tid) {
    const t = scn.temoins.find(x => x.id === tid);
    const corps = h(`<div class="dialogue"><div class="qui"><div class="av">${t.avatar || '👤'}</div><b>${esc(t.nom)}</b><div class="small muted">${esc(t.role)}</div></div><div><div class="fil"></div><div class="repliques"></div></div></div>`);
    const draw = () => {
      const posees = E.temoins.get(tid) || new Set();
      $('.fil', corps).innerHTML = t.questions.filter(q => posees.has(q.id)).map(q => `<div class="b-q">${esc(q.q)}</div><div class="b-r">${esc(q.r)}</div>${q.info ? `<div class="b-t">💡 ${esc(q.info)}</div>` : ''}${immediat && q.piege ? `<div class="b-t">👨‍🚒 ${esc(q.piege)}</div>` : ''}`).join('') || '<div class="b-t">Prends le temps de te présenter, puis laisse parler la personne.</div>';
      $('.repliques', corps).innerHTML = t.questions.filter(q => !posees.has(q.id)).map(q => `<button class="replique" data-q="${q.id}">💬 ${esc(q.q)}${q.type === 'orientee' && E.perk('enquete') ? ' <span class="orient">⚠ question orientée</span>' : ''}</button>`).join('') || '<div class="small muted">Tu as fait le tour.</div>';
      $('.fil', corps).scrollTop = 1e6;
      $$('[data-q]', corps).forEach(x => x.onclick = () => { const r = E.poserQuestion(tid, x.dataset.q); signaler(r.msgs); if (r.q.fait) pop('✍ Noté au carnet'); son('page'); draw(); renderAll(); });
    };
    draw();
    modal({ titre: `Entretien`, classe: 'jeu-m', corps, large: true, actions: [{ label: 'Terminer l\'entretien' }] });
  }

  // ------------------------------------------------------------ téléphone (OSINT)
  function telephone() {
    const corps = h(`<div class="tel"><div class="ecran"><div class="barre"><span>${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span><span>📶 🔋</span></div>
      <div class="apps"></div><div class="rech"><input placeholder="Nom, lieu, marque, « météo »…"><button>OK</button></div><div class="res"></div></div></div>`);
    const draw = () => {
      $('.apps', corps).innerHTML = APPS.map(([k, l]) => `<button class="app ${ui.app === k ? 'on' : ''}" data-a="${k}">${l}</button>`).join('');
      $$('[data-a]', corps).forEach(b => b.onclick = () => { ui.app = b.dataset.a; draw(); });
      $('.res', corps).innerHTML = ui.res.length ? ui.res.map(o => { const lock = o.pro && !E.possede('osintpro'); return `<div class="post"><b>${esc(o.titre)}</b>${lock ? '🔒 Réservé à l\'abonnement OSINT pro.' : `${esc(o.extrait)}<small>Fiabilité : ${esc(o.fiabilite || '—')}</small>
        <div style="margin-top:6px">${E.osint.ajoutes.has(o.id) ? '<span class="tampon ok">ÉPINGLÉ</span>' : `<button class="btn-j go" data-add="${o.id}">📌 Épingler au carnet</button>`}</div>`}</div>`; }).join('') : '<div class="post">Cherche des noms, des lieux, des marques relevées sur la scène…</div>';
      $$('[data-add]', corps).forEach(b => b.onclick = () => { E.ajouterOsint(b.dataset.add); son('ok'); pop('📌 Source épinglée'); draw(); renderAll(); });
    };
    const go = () => { const q = $('input', corps).value.trim(); if (!q) return; ui.res = E.rechercher(q, ui.app); son('page'); draw(); };
    $('.rech button', corps).onclick = go;
    $('input', corps).addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    draw();
    modal({ titre: '📱 Recherches', classe: 'jeu-m', corps, actions: [{ label: 'Ranger le téléphone' }] });
  }

  // ------------------------------------------------------------ hypothèses (tableau en liège)
  function confronter(kind, id) {
    const d = scn.hypotheses[kind].find(x => x.id === id);
    const cur = E.hyp[kind].get(id);
    const val = new Map(); cur.soutien.forEach(f => val.set(f, 's')); cur.refute.forEach(f => val.set(f, 'r'));
    const faits = [...E.faits.values()];
    const src = { constat: '🔎 indice', temoin: '🗣️ témoin', osint: '📱 source', labo: '🧪 labo' };
    const corps = h(`<div class="liege"><div class="hyp-t">${esc(d.nom)}</div>
      <div style="color:#fff;font-weight:700;margin-bottom:8px;text-shadow:0 1px 2px rgba(0,0,0,.6)">Pour chaque fait : est-ce qu'il <span style="color:#a6f0c6">appuie</span> ou <span style="color:#ffb3ab">contredit</span> cette hypothèse ? ${ref('4.3.6')}</div>
      <div class="postits">${faits.map(f => `<div class="postit" data-f="${f.id}"><span class="src">${src[f.type]}${f.contamine ? ' · contaminé' : ''}</span>${esc(f.court || f.texte)}<div class="vote"><button data-v="s">👍 appuie</button><button data-v="r">👎 contredit</button></div></div>`).join('') || '<div class="postit">Aucun fait au carnet pour l\'instant.</div>'}</div>
      <div class="verdicts"><button data-st="retenue" style="background:#2fa36b;color:#fff">✔ Je la retiens</button><button data-st="refutee" style="background:#d8463b;color:#fff">✖ Je l'écarte</button><button data-st="ouverte" style="background:#fff">… Plus tard</button></div></div>`);
    const sync = () => $$('.postit[data-f]', corps).forEach(p => { const v = val.get(p.dataset.f); p.className = `postit ${v || ''}`; $$('.vote button', p).forEach(b => b.classList.toggle('on', b.dataset.v === v)); });
    $$('.vote button', corps).forEach(b => b.onclick = () => { const f = b.closest('.postit').dataset.f; val.set(f, val.get(f) === b.dataset.v ? null : b.dataset.v); son('page'); sync(); });
    sync();
    const m = modal({ titre: '🧷 Tableau d\'enquête', classe: 'jeu-m', large: true, corps, actions: [] });
    $$('[data-st]', corps).forEach(b => b.onclick = () => {
      const st = b.dataset.st;
      const s = [...val].filter(([, v]) => v === 's').map(([k]) => k), r = [...val].filter(([, v]) => v === 'r').map(([k]) => k);
      if (st === 'refutee' && !r.length) { son('ko'); toast('Pour écarter une hypothèse, désigne au moins un fait qui la contredit.', 'ko', 4500); return; }
      if (st === 'retenue' && !s.length) { son('ko'); toast('On ne retient jamais une hypothèse sans fait qui la démontre (negative corpus, NFPA 921, chap. 18.6.5).', 'ko', 5000); return; }
      if (st === 'retenue') for (const [oid, hh] of E.hyp[kind]) if (oid !== id && hh.statut === 'retenue') hh.statut = 'ouverte';
      E.testerHypothese(kind, id, s, r, st);
      son(st === 'ouverte' ? 'page' : 'ok'); pop(st === 'retenue' ? '✔ Hypothèse retenue' : st === 'refutee' ? '✖ Hypothèse écartée' : '… En suspens', st === 'refutee' ? 'ko' : 'ok');
      m.close(); renderAll();
    });
  }

  // ------------------------------------------------------------ conclusion (assistant)
  function donneesSuffisantes() {
    const ps = scn.solution?.probableSi; if (!ps) return false;
    const has = id => E.faits.has(id) && (E.faitValide(id) || E.faits.get(id).type !== 'constat');
    return ps.tous.every(has) && ps.unParmi.every(g => g.some(has));
  }
  function conclure() {
    const ret = k => [...E.hyp[k]].find(([, x]) => x.statut === 'retenue')?.[0] || '';
    const R = { origine: ret('origines'), cause: ret('causes'), certitude: '', classification: '', faitsAppui: ret('causes') ? [...E.hyp.causes.get(ret('causes')).soutien] : [], texte: '' };
    let etape = 0;
    const corps = h('<div></div>');
    const nb = 5;
    const draw = () => {
      const cartes = (items, cle) => `<div class="cartes" data-cle="${cle}">${items.map(it => `<button class="carte-c ${R[cle] === it.id ? 'on' : ''}" data-v="${it.id}">${it.tag ? `<span class="tag">${it.tag}</span>` : ''}${esc(it.nom)}${it.sub ? `<small>${esc(it.sub)}</small>` : ''}</button>`).join('')}</div>`;
      let html = `<div class="wiz-steps">${Array.from({ length: nb }, (_, i) => `<span class="${i <= etape ? 'on' : ''}"></span>`).join('')}</div>`;
      if (etape === 0) html += `<div class="wiz-q">Où le feu a-t-il pris ?</div>` + cartes([...scn.hypotheses.origines.map(o => ({ id: o.id, nom: o.nom, tag: E.hyp.origines.get(o.id)?.statut === 'retenue' ? 'ta piste' : '' })), { id: '', nom: 'Je ne peux pas la déterminer', sub: 'Origine indéterminée' }], 'origine');
      if (etape === 1) html += `<div class="wiz-q">Comment a-t-il pris ?</div>` + cartes([...scn.hypotheses.causes.map(o => ({ id: o.id, nom: o.nom, sub: o.premierCombustible ? `1er combustible : ${o.premierCombustible}` : '', tag: E.hyp.causes.get(o.id)?.statut === 'retenue' ? 'ta piste' : '' })), { id: '', nom: 'Je ne peux pas la déterminer', sub: 'Cause indéterminée' }], 'cause');
      if (etape === 2) html += `<div class="wiz-q">Quels faits le démontrent ?</div><div class="small muted" style="margin-bottom:8px">Choisis les faits solides. Une rumeur ou une suggestion n'est pas une preuve ${ref('18.6.5')}</div><div class="postits">${[...E.faits.values()].map(f => `<div class="postit ${R.faitsAppui.includes(f.id) ? 's' : ''}" data-f="${f.id}" style="cursor:pointer">${esc(f.court || f.texte)}</div>`).join('')}</div>`;
      if (etape === 3) html += `<div class="wiz-q">Avec quelle certitude ?</div>` + cartes(CERTITUDES.map(c => ({ id: c.id, nom: c.nom, sub: { probable: 'Plus probable que toute autre explication', possible: 'Faisable mais non démontré', suspecte: 'Une impression…' }[c.id] })), 'certitude') +
        `<div class="wiz-q" style="margin-top:16px">Et la classification ?</div>` + cartes(CLASSIFICATIONS.map(c => ({ id: c.id, nom: c.nom })), 'classification') +
        (E.perk('raisonnement') ? `<div class="mot" style="margin-top:12px">🧠 <b>Rigueur</b> : ${donneesSuffisantes() ? 'les faits que tu as réunis permettent d\'aller jusqu\'à « probable », si ta cause est la bonne.' : 'il te manque des faits démontrés pour aller jusqu\'à « probable ».'}</div>` : '');
      if (etape === 4) html += `<div class="wiz-q">Ta conclusion, en quelques mots</div><textarea class="inp" rows="5" style="width:100%;background:#fff;color:#222;border-color:#ddd5c2;font:600 20px var(--hand)" placeholder="Le feu a pris… parce que…">${esc(R.texte)}</textarea>
        <p class="small muted">Tes notes de terrain seront jointes au rapport.</p><button class="btn-j" data-apercu>🖨️ Aperçu du rapport</button>`;
      html += `<div style="display:flex;justify-content:space-between;margin-top:16px"><button class="btn-j ghost" data-nav="-1" ${etape ? '' : 'disabled'}>← Retour</button>${etape < nb - 1 ? '<button class="btn-j go" data-nav="1">Suivant →</button>' : '<button class="btn-j fire" data-fin>⚖️ Déposer mon rapport</button>'}</div>`;
      corps.innerHTML = html;
      $$('.carte-c', corps).forEach(b => b.onclick = () => { const cle = b.closest('.cartes').dataset.cle; R[cle] = b.dataset.v; if (cle === 'cause' && R.cause && !R.faitsAppui.length) R.faitsAppui = [...(E.hyp.causes.get(R.cause)?.soutien || [])]; son('page'); draw(); });
      $$('.postit[data-f]', corps).forEach(p => p.onclick = () => { const f = p.dataset.f; R.faitsAppui = R.faitsAppui.includes(f) ? R.faitsAppui.filter(x => x !== f) : [...R.faitsAppui, f]; draw(); });
      $('textarea', corps)?.addEventListener('input', e => { R.texte = e.target.value; });
      $$('[data-nav]', corps).forEach(b => b.onclick = () => {
        if (+b.dataset.nav > 0 && etape === 3 && (!R.certitude || !R.classification)) { toast('Choisis une certitude et une classification.', 'warn'); return; }
        etape += +b.dataset.nav; draw();
      });
      $('[data-apercu]', corps)?.addEventListener('click', () => apercuRapport(E, { ...R, texte: R.texte + (E.notes ? `\n\nNotes de terrain :\n${E.notes}` : '') }, ctx.app.c));
      $('[data-fin]', corps)?.addEventListener('click', () => {
        E.rapport = { ...R, texte: R.texte + (E.notes ? `\n\nNotes de terrain :\n${E.notes}` : '') };
        m.close(); son('victoire');
        ctx.onLeave?.(); ctx.onLeave = null;
        ouvrirDebrief(E, ctx);
      });
    };
    const m = modal({ titre: '⚖️ Conclure l\'enquête', classe: 'jeu-m', large: true, corps, actions: [] });
    draw();
  }

  // ------------------------------------------------------------ clavier & rendu
  function onKey(e) {
    if (e.target.closest('input,textarea,select') || $('.modal-bg')) return;
    const k = e.key.toLowerCase();
    if (k === 'q') S.rotateView(-45);
    if (k === 'e') S.rotateView(45);
    if (k === 'c') outil('carnet');
    if (k === 'escape') fermerFiche();
  }
  document.addEventListener('keydown', onKey);

  function refreshHotspots() {
    const st = tuto?.[ui.tutoIdx];
    const focus = new Set(st?.obs || []);
    for (const p of scn.photos || []) S.setPhotoVisible(p.id, p.constat ? E.decouverts.has(p.constat) : E.zonesVisitees.includes(zonePhoto(p)));
    for (const o of scn.observations) {
      const d = E.decouverts.get(o.id);
      const lueur = tuto ? focus.has(o.id) : ((reg.lueurs && !o.outil) || (!!o.thermo && E.perk('thermo')));
      const fini = (!o.analyse || E.analyses.has(o.id)) && (!o.thermo?.options || E.releves.has(o.id)) && (o.analyse || o.thermo);
      S.updateHotspot(o.id, { actif: E.estActif(o), decouvert: !!d, num: d?.num, photo: E.photoObs.has(o.id), analyse: !!fini, lueur, toujours: !!d });
    }
  }

  function renderAll() {
    verifierTuto();
    refreshHotspots(); renderObjectifs(); renderCompteurs(); renderParcours(); renderCeinture(); renderFouille(); renderCarnet();
    surligner();
  }
  window.__rcci = { E, S, ui, pick: x => onPick(x), zone: id => allerZone(id), outil, fiche: id => ouvrirFiche(E.obs(id)), conclure, render: renderAll };

  S.setFocus(null, null, false);
  renderAll();
  // accueil
  if (tuto) direEtape();
  else dire(scn.intro || 'Cette fois, c\'est toi qui mènes l\'enquête. Suis ta méthode : sécurité, extérieur, puis des zones les moins touchées vers les plus touchées. Clique sur moi si tu as besoin d\'un conseil.', { refs: '4.3' });
}
