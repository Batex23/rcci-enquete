// Le laboratoire : postes d'expérimentation courts pour comprendre les phénomènes (et faire progresser les compétences)
import { FUSIONS, fusion, optionsThermo, etatAtteint, etatNon } from '../data/thermique.js';
import { TRACES } from '../data/nfpa.js';
import { voirAussiHtml } from '../data/sources.js';
import { DOMAINES, crediter, niveauDe, NOMS_NIVEAU } from '../game/competences.js';
import { BADGES } from '../game/badges.js';
import { $, $$, h, esc, modal, ref, toast } from '../ui.js';
import { son } from '../game/sons.js';
import { TP, DEFIS_FOUR } from './labo3d.js';

const melange = a => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const choisir = a => a[Math.floor(Math.random() * a.length)];

// ---------------------------------------------------------------- exercices
function genThermo() {
  const pool = FUSIONS.filter(f => f.t >= 80 && f.t <= 1460 && !['argent', 'or'].includes(f.id));
  const T = 180 + Math.random() * 950;
  const dessous = pool.filter(f => f.t <= T).sort((a, b) => b.t - a.t).slice(0, 4);
  const dessus = pool.filter(f => f.t > T).sort((a, b) => a.t - b.t).slice(0, 3);
  const items = [];
  if (dessous.length) items.push({ mat: choisir(dessous.slice(0, 2)).id, etat: 'fondu' });
  if (dessous.length > 2 && Math.random() < 0.5) { const m = choisir(dessous.slice(2)); if (!items.some(i => i.mat === m.id)) items.push({ mat: m.id, etat: 'fondu' }); }
  if (dessus.length && (Math.random() < 0.85 || !items.length)) items.push({ mat: choisir(dessus.slice(0, 2)).id, etat: 'intact' });
  if (T > 700 && Math.random() < 0.3 && !items.some(i => i.mat === 'cuivre')) { items.push({ mat: 'alu', etat: 'fondu' }); items.push({ mat: 'cuivre', etat: 'fondu', alliage: true, objet: 'Fil de cuivre percé, grisâtre, au contact de gouttes d\'aluminium' }); }
  const uniq = items.filter((it, i) => items.findIndex(x => x.mat === it.mat) === i).map(it => ({ ...it, objet: it.objet || `${choisir(fusion(it.mat).ex.split(', '))}`.replace(/^./, c => c.toUpperCase()) }));
  const opts = melange(optionsThermo({ items: uniq }));
  const ids = new Set(uniq.map(i => i.mat));
  const voisins = FUSIONS.filter(f => !ids.has(f.id)).map(f => ({ f, d: Math.min(...[...ids].map(id => Math.abs(fusion(id).t - f.t))) })).sort((a, b) => a.d - b.d).slice(0, 5).map(x => x.f.id);
  const vis = new Set([...ids, ...voisins]);
  return {
    q: `<div class="question">Sur un même mur, à la même hauteur, tu relèves :</div><div class="thermo-t">${uniq.map(it => { const m = fusion(it.mat); const at = it.etat === 'fondu'; return `<div class="tm ${at ? 'at' : 'non'}"><span class="ic">${at ? '💧' : '🧊'}</span><div><b>${esc(it.objet)}</b><small>${esc(m.nom)} — <b>${esc(at ? etatAtteint(m) : etatNon(m))}</b></small></div></div>`; }).join('')}</div>
      <details class="voir" open><summary>📖 Mes repères de fusion</summary><table class="reperes">${FUSIONS.filter(f => vis.has(f.id)).map(f => `<tr><td><b>${esc(f.nom)}</b><small>${esc(f.ex)}</small></td><td>${f.seuil ? esc(f.seuil) : 'fusion'}</td><td class="t">${esc(f.plage)} °C</td></tr>`).join('')}</table></details>
      <div class="question" style="margin-top:10px">Quelle température a régné à cet endroit ?</div>`,
    opts, ref: '6.2.2 / 6.2.8', texte: 'fusion température alliage',
  };
}

const MYTHES = [
  ['Le verre faïencé prouve une montée en température très rapide.', false, 'Le faïençage vient d\'un refroidissement brutal (eau d\'extinction) sur un verre chaud.', '6.2.13'],
  ['Un objet en aluminium fondu prouve qu\'on a dépassé environ 600 à 660 °C à cet endroit.', true, 'Oui : c\'est une température minimale atteinte localement (attention aux alliages variés).', '6.2.8'],
  ['Le bois brûle moins chaud que l\'essence : une température élevée signe un accélérant.', false, 'Les flammes de diffusion du bois et des hydrocarbures ont des températures comparables ; c\'est la puissance qui diffère.', '6.2.2.2'],
  ['L\'écaillage du béton prouve l\'emploi d\'un liquide inflammable.', false, 'L\'écaillage a de nombreuses causes (humidité, contraintes, chauffage rapide) ; il ne prouve rien seul.', '6.2.5'],
  ['Après un embrasement généralisé, des tracés irréguliers peuvent apparaître au sol sans aucun accélérant.', true, 'Oui : le rayonnement de la couche chaude et les débris brûlent le sol de façon irrégulière.', '6.3.7.8'],
  ['Plus un tracé en V est étroit, plus le feu a été rapide.', false, 'L\'angle du V dépend surtout de la puissance, de la ventilation et de la géométrie, pas de la vitesse.', '6.3.7.1'],
  ['Des ressorts de canapé affaissés prouvent un feu couvant de cigarette.', false, 'L\'affaissement dépend de la durée et de l\'intensité de l\'exposition ; il ne désigne pas une cause.', '6.2.14'],
  ['Un détecteur PID positif suffit à prouver la présence d\'essence.', false, 'Le PID réagit aussi aux produits de pyrolyse : seul le laboratoire confirme.', '16.5.4'],
  ['La profondeur de carbonisation sert à comparer l\'exposition entre deux endroits, pas à dater le feu.', true, 'Oui : on compare des profondeurs relatives, mesurées de la même façon.', '17.4.3'],
  ['Un disjoncteur déclenché prouve une origine électrique.', false, 'Un circuit atteint par le feu déclenche aussi : c\'est souvent une conséquence.', '8.6'],
  ['Une perle d\'arc montre que le conducteur était sous tension au moment où l\'arc s\'est produit.', true, 'Oui, mais cela ne prouve pas que l\'arc a causé le feu : il faut le situer (cartographie).', '8.11 / 17.4.5'],
  ['Un fil de cuivre percé au contact de gouttes d\'aluminium prouve qu\'on a dépassé 1 082 °C.', false, 'Piège de l\'alliage : le mélange cuivre-aluminium fond bien plus bas que le cuivre pur.', '6.2.8.6'],
  ['Une ligne de démarcation très nette est le signe d\'un accélérant.', false, 'Une démarcation nette marque surtout la limite d\'une couche chaude ou d\'une zone protégée.', '6.3.3.1'],
  ['Quand toutes les causes accidentelles sont écartées, on peut conclure à un incendie volontaire.', false, 'C\'est le negative corpus : sans fait qui démontre une mise à feu, la cause reste indéterminée.', '18.6.5'],
  ['La façon dont on pose une question peut modifier le souvenir d\'un témoin.', true, 'Oui : les questions orientées contaminent le témoignage. Questions ouvertes d\'abord.', '13.4'],
  ['La zone où il a fait le plus chaud est forcément la zone d\'origine.', false, 'Ventilation, charge combustible et durée peuvent créer les températures les plus fortes loin de l\'origine.', '6.2.2.3'],
  ['Un objet en plastique resté intact près du sol indique que la couche chaude n\'y est pas descendue durablement.', true, 'Oui : les thermoplastiques renseignent surtout sur l\'exposition aux gaz chauds.', '6.2.8.4'],
  ['« Suspecté » est un niveau de certitude acceptable pour une conclusion d\'expert.', false, 'Une opinion d\'expert est « probable » ; sinon la cause reste « possible » et la classification indéterminée.', '4.5'],
];
function genMythe(i) {
  const [t, vrai, fb, r] = MYTHES[i];
  return { q: `<div class="question" style="font-size:17px">« ${esc(t)} »</div>`, opts: [{ t: '✅ Réalité', ok: vrai, fb }, { t: '❌ Mythe', ok: !vrai, fb }], ref: r, texte: t };
}

function genTrace(i, pool) {
  const t = pool[i];
  const autres = melange(pool.filter(x => x !== t)).slice(0, 3);
  return { q: `<div class="question">De quel tracé s'agit-il ?</div><div class="tm" style="margin-bottom:8px"><span class="ic">🔎</span><div>${esc(t.def)}</div></div>`, opts: melange([{ t: t.nom, ok: true, fb: t.def }, ...autres.map(a => ({ t: a.nom, ok: false, fb: `Non : ${a.nom.toLowerCase()} — ${a.def}` }))]), ref: t.ref, texte: t.nom };
}

const ARCS = [
  ['Perle ronde et lisse à l\'extrémité d\'un brin, limite nette avec le cuivre intact juste à côté.', 'arc', 'Fusion localisée à limite nette : signature d\'un arc.'],
  ['Brins amincis, gouttes et coulures réparties sur une grande longueur, sans limite nette.', 'feu', 'Fusion étendue et progressive : le feu a fait fondre le conducteur.'],
  ['Deux encoches face à face sur deux conducteurs voisins, avec des perles correspondantes.', 'arc', 'Les deux conducteurs portent la trace du même arc.'],
  ['Cuivre « fondu » à la teinte grisâtre, au contact de gouttes d\'aluminium solidifiées.', 'alliage', 'Le cuivre a formé un alliage avec l\'aluminium fondu : il n\'a pas atteint 1 082 °C.'],
  ['Conducteurs recuits et cassants, isolant disparu, aucune perle ni goutte.', 'recuit', 'Le cuivre a chauffé sans fondre : simple exposition au feu.'],
  ['Perle localisée sur une rallonge, la plus en amont de toutes celles du circuit.', 'arc', 'Le premier arc en amont situe l\'endroit où le feu a d\'abord atteint le circuit (ou la défaillance).'],
  ['Gouttelettes de cuivre au plafond d\'une pièce embrasée, sans perle localisée.', 'feu', 'Après embrasement, la chaleur peut faire fondre le cuivre sans arc.'],
  ['Zone grise et poreuse sur un fil de cuivre posé sous une gouttière en zinc fondue.', 'alliage', 'Le zinc fondu s\'allie au cuivre et le fait « fondre » plus bas que prévu.'],
];
const ARC_OPTS = [['arc', '⚡ Arc électrique'], ['feu', '🔥 Fusion par le feu'], ['alliage', '🧪 Alliage'], ['recuit', '🧊 Recuit, sans fusion']];
function genArc(i) {
  const [d, rep, fb] = ARCS[i];
  return { q: `<div class="question">Sur ce conducteur :</div><div class="tm" style="margin-bottom:8px"><span class="ic">🔍</span><div>${esc(d)}</div></div><div class="question">Qu'est-ce que c'est ?</div>`, opts: ARC_OPTS.map(([k, l]) => ({ t: l, ok: k === rep, fb })), ref: rep === 'alliage' ? '6.2.8.6' : '8.11 / 17.4.5', texte: 'arc perle conducteur' };
}

export const EXERCICES = [
  { id: 'thermo', ic: '🔥', poste: 'Four de fusion', nom: 'Fondu ou intact ?', dom: 'thermo', n: 5, desc: 'On chauffe des objets du quotidien : certains fondent, d\'autres tiennent. Quelle température a régné ?', gen: () => Array.from({ length: 5 }, genThermo) },
  { id: 'mythes', ic: '⚗️', poste: 'Banc d\'essai', nom: 'Mythe ou réalité ?', dom: 'raisonnement', n: 6, desc: 'Les idées reçues de l\'enquête incendie, confrontées aux essais et à la NFPA 921.', gen: () => melange(MYTHES.map((_, i) => i)).slice(0, 6).map(genMythe) },
  { id: 'traces', ic: '🧱', poste: 'Cellule d\'essai au feu', nom: 'Lecture des tracés', dom: 'traces', n: 6, desc: 'Après un essai en cellule, les murs parlent : associe chaque marque au bon tracé.', gen: () => { const pool = TRACES.filter(t => t.def && !/^(Accidentelle|Naturelle|Volontaire|Indéterminée|Suspecte|Probable|Possible|Suspectée)/.test(t.nom)); return melange(pool.map((_, i) => i)).slice(0, 6).map(i => genTrace(i, pool)); } },
  { id: 'arcs', ic: '🔬', poste: 'Microscope', nom: 'Arc, feu ou alliage ?', dom: 'elec', n: 5, desc: 'Sous l\'objectif, des conducteurs fondus : lequel a vu un arc, le feu, ou un alliage ?', gen: () => melange(ARCS.map((_, i) => i)).slice(0, 5).map(genArc) },
];

// ---------------------------------------------------------------- écran
const FUTURS = [
  { ic: '🧫', poste: 'Calorimètre', nom: 'Puissance des objets', desc: 'Mesurer ce que dégage un canapé, une poubelle, un matelas…' },
  { ic: '📈', poste: 'Chromatographe', nom: 'Analyse de débris', desc: 'Lire un chromatogramme : essence, pyrolyse ou électrolyte ?' },
  { ic: '🏗️', poste: 'Grande cellule', nom: 'Embrasement généralisé', desc: 'Reproduire un feu de pièce et observer la couche chaude descendre.' },
];
export const LABO = { nom: 'Dr Lina Morel', role: 'ingénieure du laboratoire', avatar: '👩‍🔬' };

export function entrainement(b, ctx) {
  const c = ctx.app.c;
  c.entrainement ||= {};
  c.laboTP ||= {};
  const jour = new Date().toISOString().slice(0, 10);
  const faitTP = id => id === 'four' ? DEFIS_FOUR.every(d => c.laboTP['four-' + d.id]?.reussi) : !!c.laboTP[id]?.reussi;
  b.innerHTML = `<div class="labo-entete"><span class="av">${LABO.avatar}</span><div><b>Bienvenue au laboratoire.</b> Ici, pas d'enquête : on <b>expérimente</b> pour comprendre la science du feu. Entre dans la salle, approche-toi d'un poste et fais tes travaux pratiques. Chaque expérience réussie fait progresser une compétence, et la première réussite du jour de chaque poste est payée par une petite prime.<small>— ${esc(LABO.nom)}, ${esc(LABO.role)}</small></div></div>
    <div class="labo-porte"><div class="lp-vitre"><span>🔥</span><span>🔺</span><span>🧱</span><span>🔬</span></div><div class="lp-txt"><h3>La salle d'expériences</h3><p>Une vraie pièce en 3D : four de fusion, banc du tétraèdre du feu, mur d'essai au feu, microscope… Tourne autour, clique sur un poste et lance l'expérience.</p><button class="btn-j go lp-go" data-entrer>🚪 Entrer dans le laboratoire</button></div></div>
    <h3 class="labo-h">Travaux pratiques</h3>
    <div class="paillasse">${TP.map((t, i) => { const d = DOMAINES.find(y => y.id === t.dom); return `<div class="poste">
      <div class="app-labo"><span>${t.ic}</span><i>TP ${i + 1} · ${esc(t.nom)}</i></div>
      <p>${esc(t.desc)}</p>
      <div class="small">${d.ic} ${esc(d.nom)} · niv. ${niveauDe(c, d.id)} · ${faitTP(t.id) ? '<b style="color:#2e7d4f">✓ réussi</b>' : 'à faire'}</div>
      <div class="go-l"><button class="btn-j go" data-tp="${t.id}">▶ Aller au poste</button></div></div>`; }).join('')}</div>
    <h3 class="labo-h">Révisions express <small>(séries de questions rapides)</small></h3>
    <div class="paillasse">${EXERCICES.map((x, i) => { const st = c.entrainement[x.id] || {}; const d = DOMAINES.find(y => y.id === x.dom); return `<div class="poste">
      <div class="app-labo"><span>${x.ic}</span><i>${esc(x.poste)}</i></div>
      <h4>${esc(x.nom)}</h4><p>${esc(x.desc)}</p>
      <div class="small">${d.ic} ${esc(d.nom)} · niv. ${niveauDe(c, d.id)} · record : ${st.meilleur ?? '—'} / ${x.n}</div>
      <div class="go-l"><button class="btn-j" data-ex="${x.id}">▶ Lancer la série</button>${st.jour === jour ? '<span class="small muted">prime du jour perçue</span>' : `<span class="small" style="color:#9a7a20">jusqu'à +${x.n * 5} cr</span>`}</div></div>`; }).join('')}</div>
    <div class="paillasse futur">${FUTURS.map(x => `<div class="poste verrou"><div class="app-labo"><span>${x.ic}</span><i>${esc(x.poste)}</i></div><h4>${esc(x.nom)}</h4><p>${esc(x.desc)}</p><div class="small">🔒 Études plus poussées : bientôt</div></div>`).join('')}</div>`;
  $$('[data-ex]', b).forEach(x => x.onclick = () => lancerExercice(EXERCICES.find(e => e.id === x.dataset.ex), ctx, () => (ctx.allerQG ? ctx.allerQG('entrainement') : entrainement(b, ctx))));
  $('[data-entrer]', b).onclick = () => ctx.ouvrirLabo?.();
  $$('[data-tp]', b).forEach(x => x.onclick = () => ctx.ouvrirLabo?.(x.dataset.tp));
}

export function lancerExercice(ex, ctx, fin) {
  const c = ctx.app.c;
  const qs = ex.gen();
  let i = 0, bons = 0, rep = null;
  const corps = h('<div class="entrainement"></div>');
  const m = modal({ titre: `${ex.ic} ${esc(ex.poste)} — ${esc(ex.nom)}`, classe: 'jeu-m labo-m', large: true, corps, actions: [], onClose: () => fin() });
  const draw = () => {
    if (i >= qs.length) return bilan();
    const q = qs[i];
    corps.innerHTML = `<div class="wiz-steps">${qs.map((_, k) => `<span class="${k <= i ? 'on' : ''}"></span>`).join('')}</div>${q.q}
      <div class="opts">${q.opts.map((o, k) => `<button class="choix ${rep != null ? (o.ok ? 'ok' : k === rep ? 'ko' : '') : ''}" data-k="${k}" ${rep != null ? 'disabled' : ''}>${esc(o.t)}</button>`).join('')}</div>
      ${rep != null ? `<div class="verdict ${q.opts[rep].ok ? 'ok' : 'ko'}"><b>${q.opts[rep].ok ? 'Exact !' : 'Raté…'}</b>${esc(q.opts[rep].fb || q.opts.find(o => o.ok).fb || '')}<div style="margin-top:4px">${ref(q.ref)}</div>${voirAussiHtml({ ref: q.ref, texte: q.texte }, { max: 2 })}</div>
        <div style="display:flex;justify-content:flex-end;margin-top:10px"><button class="btn-j go" data-next>${i < qs.length - 1 ? 'Suivant →' : 'Voir le bilan'}</button></div>` : ''}`;
    $$('[data-k]', corps).forEach(bt => bt.onclick = () => { rep = +bt.dataset.k; const ok = q.opts[rep].ok; if (ok) bons++; son(ok ? 'ok' : 'ko'); draw(); });
    $('[data-next]', corps)?.addEventListener('click', () => { i++; rep = null; son('page'); draw(); });
  };
  const bilan = () => {
    const st = c.entrainement[ex.id] ||= {};
    const jour = new Date().toISOString().slice(0, 10);
    const cr = st.jour === jour ? 0 : bons * 5;
    if (cr) { c.credits += cr; st.jour = jour; }
    st.meilleur = Math.max(st.meilleur || 0, bons); st.sessions = (st.sessions || 0) + 1;
    const montees = crediter(c, { [ex.dom]: bons * 10 });
    const nouveauBadge = bons === qs.length && !(c.badges || []).includes('assidu');
    if (bons === qs.length) c.badges = [...new Set([...(c.badges || []), 'assidu'])];
    ctx.save();
    const d = DOMAINES.find(x => x.id === ex.dom);
    son(bons >= qs.length * 0.8 ? 'victoire' : 'page');
    corps.innerHTML = `<div style="text-align:center;padding:10px">
      <div class="small" style="text-transform:uppercase;letter-spacing:.12em;color:#5b7385;font-weight:800">Compte rendu d'expérience</div>
      <div style="font:700 38px/1 var(--hand);margin-top:4px">${bons === qs.length ? 'Résultats impeccables !' : bons >= qs.length * 0.6 ? 'Bonnes observations' : 'On refait l\'expérience ?'}</div>
      <div style="font-size:44px;font-weight:900;margin:8px 0">${bons} / ${qs.length}</div>
      <div><span class="chip">${d.ic} ${esc(d.nom)} <b>+${bons * 10}</b></span> ${cr ? `<span class="chip ok">+${cr} cr</span>` : '<span class="chip">crédits du jour déjà gagnés</span>'}</div>
      ${montees.map(mm => `<div class="chip ok" style="margin-top:8px">${mm.dom.ic} Niveau ${mm.n} (${NOMS_NIVEAU[mm.n - 1]})${mm.n === 3 ? ` — avantage : ${esc(mm.dom.avantage.nom)}` : ''}</div>`).join('')}
      ${nouveauBadge ? `<div style="margin-top:8px"><span class="badge-gagne">${BADGES.find(x => x.id === 'assidu').ic} ${esc(BADGES.find(x => x.id === 'assidu').nom)}</span></div>` : ''}
      <div style="display:flex;gap:8px;justify-content:center;margin-top:16px"><button class="btn-j go" data-again>↻ Relancer l'expérience</button><button class="btn-j ghost" data-close>Fermer</button></div></div>`;
    $('[data-again]', corps).onclick = () => { m.close(); lancerExercice(ex, ctx, fin); };
    $('[data-close]', corps).onclick = () => m.close();
    if (montees.length) toast(`${montees[0].dom.ic} ${montees[0].dom.nom} : niveau ${montees[0].n} !`, 'ok');
  };
  draw();
}
