// Vue « Analyse » d'un dossier (RETEX) : scène 3D + document d'analyse complet, consultable par un client
import { Scene3D, altitudeDe, niveauIndex, niveauxDe } from '../engine/scene3d.js';
import { migrer } from '../game/prepa.js';
import { CLASSIFICATIONS, CERTITUDES, NFPA_EDITION } from '../data/nfpa.js';
import { $, $$, h, esc, modal, refTexte } from '../ui.js';
import { voirAussi, bibliographie } from '../data/sources.js';

export function catalogueFaits(scn) {
  const m = new Map();
  (scn.observations || []).forEach((o, i) => m.set(o.id, { n: i + 1, court: `Constat ${i + 1} — ${o.titre}`, type: 'constat' }));
  for (const t of scn.temoins || []) for (const q of t.questions || []) if (q.fait?.id) m.set(q.fait.id, { court: `${t.nom} : ${q.fait.texte}`, type: 'temoin', contamine: q.fait.contamine });
  for (const o of scn.osint || []) if (o.fait?.id) m.set(o.fait.id, { court: o.fait.texte, type: 'osint' });
  for (const p of scn.prelevements || []) for (const a of p.analyses || []) { const r = a.resultats?.ok; if (r?.fait) m.set(r.fait, { court: `${a.nom} : ${r.texte}`, type: 'labo' }); }
  return m;
}

export function ouvrirAnalyse(src, container, opts = {}) {
  const scn = migrer(structuredClone(src));
  const bat = scn.batiment, R = scn.retex || {}, sol = scn.solution || {};
  const faits = catalogueFaits(scn);
  const O = id => scn.hypotheses?.origines?.find(x => x.id === id);
  const C = id => scn.hypotheses?.causes?.find(x => x.id === id);
  const lecture = o => o.lecture || o.analyse?.options?.find(x => x.ok)?.t || '';
  const photosDe = id => (scn.photos || []).filter(p => p.constat === id && scn.medias?.[p.media]);
  const niv = niveauxDe(bat);
  const cert = CERTITUDES.find(c => c.id === sol.certitude)?.nom || sol.certitude || '—';
  const cls = CLASSIFICATIONS.find(c => c.id === sol.classification)?.nom || sol.classification || '—';
  const cibleDe = o => ({ ref: o.ref || o.analyse?.ref, sources: o.sources, texte: `${o.titre || ''} ${o.description || ''}` });
  const cibles = (scn.observations || []).map(cibleDe);
  const voirLigne = o => { const v = voirAussi(cibleDe(o), 3); return v.length ? `<p class="small ana-voir">📚 Voir aussi : ${v.map(x => x.libre ? esc(x.libre) : `${esc(x.b.court)}${x.b.annee ? ` (${x.b.annee})` : ''}, ${esc(x.loc)}`).join(' ; ')}</p>` : ''; };
  const fl = ids => (ids || []).map(id => faits.get(id)?.court || id).map(t => `<li>${esc(t)}</li>`).join('');

  const el = h(`<div class="ana">
    <section class="ana-3d">
      <div class="ov ov-zone"><h3>${esc(scn.titre)}</h3><div class="muted small">Cliquez sur un cavalier ou un appareil photo.</div></div>
      <div class="ov ov-view">
        ${niv.length > 1 ? `<select class="btn btn-sm" data-niv><option value="">Tous niveaux</option>${niv.map((n, i) => `<option value="${i}">${esc(n.nom)}</option>`).join('')}</select>` : ''}
        <button class="btn btn-sm" data-v="rotg">⟲</button><button class="btn btn-sm" data-v="rotd">⟳</button>
        <button class="btn btn-sm" data-v="murs">🧱 Murs : bas</button>
      </div>
      ${scn.reconstitution?.length > 1 ? `<div class="ov ov-recon"><button class="btn btn-sm" data-play>▶</button><input type="range" min="0" max="${scn.reconstitution.length - 1}" step="0.01" value="0"><div class="lbl small muted">Reconstitution : faites glisser le curseur.</div></div>` : ''}
    </section>
    <section class="ana-doc">
      <div class="ana-bar">${opts.onClose ? '<button class="btn btn-sm" data-close>⟵ Retour</button>' : ''}<span class="chip">${scn.mode === 'retex' ? 'Dossier RETEX' : 'Dossier d\'analyse'}</span><span style="flex:1"></span><button class="btn btn-sm" data-print>🖨️ Imprimer / PDF</button></div>
      <div class="ana-nav">${['synthese:Synthèse', 'contexte:Contexte', 'chrono:Chronologie', 'constats:Constatations', 'photos:Photos', 'labo:Analyses', 'temoins:Déclarations', 'hyp:Hypothèses', 'retex:Enseignements', 'refs:Références'].map(x => { const [k, l] = x.split(':'); return `<a href="#a-${k}" data-nav="${k}">${l}</a>`; }).join('')}</div>
      <article class="rapport-doc ana-article">
        <h1>${esc(scn.titre)}</h1>
        <p class="small">${esc([R.auteur && `Rédigé par ${R.auteur}`, R.service, R.date].filter(Boolean).join(' · '))}${R.confidentialite ? `<br><b>${esc(R.confidentialite)}</b>` : ''}</p>

        <h2 id="a-synthese">Synthèse</h2>
        ${R.resume || scn.resume ? `<p>${esc(R.resume || scn.resume)}</p>` : ''}
        <table>
          <tr><th style="width:190px">Zone d'origine</th><td>${esc(O(sol.origine)?.nom || 'Non déterminée')}</td></tr>
          <tr><th>Premier combustible</th><td>${esc(C(sol.cause)?.premierCombustible || '—')}</td></tr>
          <tr><th>Source d'ignition</th><td>${esc(C(sol.cause)?.source || '—')}</td></tr>
          <tr><th>Cause / séquence</th><td>${esc(C(sol.cause)?.nom || 'Indéterminée')}</td></tr>
          <tr><th>Niveau de certitude</th><td>${esc(cert)}</td></tr>
          <tr><th>Classification</th><td>${esc(cls)}</td></tr>
        </table>
        ${sol.faitsCles?.length ? `<p><b>Éléments déterminants :</b></p><ul>${fl(sol.faitsCles)}</ul>` : ''}

        <h2 id="a-contexte">Contexte et mission</h2>
        ${R.contexte ? `<p>${esc(R.contexte).replace(/\n/g, '<br>')}</p>` : ''}
        <p>${esc(scn.mission?.ordre || '')}</p>
        <p class="small">${[['Sinistre', scn.mission?.dateSinistre], ['Alerte', scn.mission?.heureAlerte], ['Lieu', R.lieuPublic || scn.mission?.adresse], ['Préservation', scn.mission?.preservation], ['Météo', scn.meteo]].filter(x => x[1]).map(([k, v]) => `<b>${k} :</b> ${esc(v)}`).join('<br>')}</p>
        ${(scn.rapportSdis || []).length ? `<p><b>Intervention des secours</b></p><ul>${scn.rapportSdis.map(l => `<li>${esc(l)}</li>`).join('')}</ul>` : ''}

        <h2 id="a-chrono">Chronologie</h2>
        <table>${(scn.reconstitution || []).map((f, i) => `<tr data-etape="${i}" style="cursor:pointer"><td style="width:70px"><b>${esc(f.t)}</b></td><td>${esc(f.titre)}</td></tr>`).join('')}</table>

        <h2 id="a-constats">Constatations</h2>
        ${(scn.zones || []).map(z => { const l = scn.observations.filter(o => o.zone === z.id); return l.length ? `<h3 class="ana-z">${esc(z.nom)}</h3>${l.map(o => { const n = scn.observations.indexOf(o) + 1; return `<div class="ana-c" id="c-${esc(o.id)}" data-obs="${esc(o.id)}">
          <div class="ana-ch"><span class="cav">${n}</span><b>${esc(o.titre)}</b>${o.analyse?.ref || o.ref ? `<span class="small"> · ${esc(refTexte(o.ref || o.analyse.ref))}</span>` : ''}</div>
          <p>${esc(o.description)}</p>${lecture(o) ? `<p><i>Analyse :</i> ${esc(lecture(o))}</p>` : ''}${voirLigne(o)}
          ${photosDe(o.id).length ? `<div class="ph">${photosDe(o.id).map(p => `<figure><img src="${scn.medias[p.media]}" data-ph="${esc(p.id)}" alt=""><figcaption>${esc(p.titre || '')}</figcaption></figure>`).join('')}</div>` : ''}
        </div>`; }).join('')}` : ''; }).join('')}
        ${scn.observations.filter(o => !(scn.zones || []).some(z => z.id === o.zone)).map(o => `<div class="ana-c" id="c-${esc(o.id)}" data-obs="${esc(o.id)}"><b>${esc(o.titre)}</b><p>${esc(o.description)}</p></div>`).join('')}

        <h2 id="a-photos">Planche photographique</h2>
        ${(scn.photos || []).filter(p => scn.medias?.[p.media]).length ? `<div class="ph">${scn.photos.filter(p => scn.medias?.[p.media]).map((p, i) => `<figure><img src="${scn.medias[p.media]}" data-ph="${esc(p.id)}" alt=""><figcaption><b>Photo ${i + 1}</b> — ${esc(p.titre || '')}${p.legende ? `<br>${esc(p.legende)}` : ''}</figcaption></figure>`).join('')}</div>` : '<p>Aucune photo jointe.</p>'}

        <h2 id="a-labo">Prélèvements et analyses</h2>
        ${(scn.prelevements || []).length ? `<table><tr><th>Prélèvement</th><th>Analyse</th><th>Résultat</th></tr>${scn.prelevements.flatMap(p => (p.analyses || []).map(a => `<tr><td>${esc(p.nom)}</td><td>${esc(a.nom)}</td><td>${esc(a.resultats?.ok?.texte || '')}</td></tr>`)).join('')}</table>` : '<p>Aucun prélèvement.</p>'}

        <h2 id="a-temoins">Déclarations et sources</h2>
        ${(scn.temoins || []).map(t => { const qs = (t.questions || []).filter(q => q.type !== 'orientee'); return qs.length ? `<p><b>${esc(t.nom)}</b> <span class="small">${esc(t.role || '')}</span></p><ul>${qs.map(q => `<li><i>${esc(q.q)}</i><br>${esc(q.r)}</li>`).join('')}</ul>` : ''; }).join('') || '<p>Aucune déclaration.</p>'}
        ${(scn.osint || []).length ? `<p><b>Sources ouvertes</b></p><ul>${scn.osint.map(o => `<li><b>${esc(o.titre)}</b> — ${esc(o.extrait)} <span class="small">(${esc(o.fiabilite || '')})</span></li>`).join('')}</ul>` : ''}

        <h2 id="a-hyp">Hypothèses et tests</h2>
        ${['origines', 'causes'].map(k => (scn.hypotheses?.[k] || []).length ? `<h3 class="ana-z">${k === 'origines' ? 'Origine' : 'Cause'}</h3><table><tr><th>Hypothèse</th><th style="width:90px">Statut</th><th>Données</th></tr>${scn.hypotheses[k].map(x => { const ok = x.id === (k === 'origines' ? sol.origine : sol.cause); return `<tr><td>${esc(x.nom)}</td><td><b>${ok ? 'RETENUE' : 'écartée'}</b></td><td>${ok ? `<ul>${fl(x.soutien)}</ul>` : (x.refute?.length ? `<i>Réfutée par :</i><ul>${fl(x.refute)}</ul>` : '—')}</td></tr>`; }).join('')}</table>` : '').join('')}

        <h2 id="a-retex">Enseignements</h2>
        ${[['Enseignements', R.enseignements], ['Points positifs', R.positifs], ['Axes d\'amélioration', R.ameliorations], ['Recommandations (prévention)', R.recommandations]].filter(x => x[1]?.length).map(([t, l]) => `<p><b>${t}</b></p><ul>${l.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`).join('') || '<p>—</p>'}
        <h2 id="a-refs">Références</h2>
        <p class="small">Méthode et numérotation : <b>${esc(NFPA_EDITION)}</b> (référence de base). Ouvrages complémentaires cités dans ce dossier :</p>
        <ul class="small">${bibliographie(cibles).map(b => `<li>${esc(b.ref)}</li>`).join('')}</ul>
        <p class="small" style="margin-top:20px;color:#666">Méthodologie : ${NFPA_EDITION} (recherche des causes et circonstances d'incendie, méthode scientifique). Document généré avec « RCCI · L'Enquêteur ».</p>
      </article>
    </section>
  </div>`);
  container.innerHTML = '';
  container.appendChild(el);

  const S = new Scene3D($('.ana-3d', el));
  S.load(scn);
  S.setModeMurs('bas');
  S.setHotspots(scn.observations.map(o => ({ id: o.id, pos: o.pos, alt: altitudeDe(bat, o.niveau), niv: niveauIndex(bat, o.niveau) })));
  scn.observations.forEach((o, i) => S.updateHotspot(o.id, { actif: true, decouvert: true, num: i + 1, toujours: true, analyse: true }));
  S.setPhotos((scn.photos || []).map(p => ({ id: p.id, pos: p.pos, yaw: p.yaw, alt: altitudeDe(bat, p.niveau), niv: niveauIndex(bat, p.niveau) })));
  const so = O(sol.origine);
  const origine = so ? Object.assign([...so.pos], { alt: altitudeDe(bat, so.niveau) }) : null;
  if (origine) S.setOrigineMarqueur(origine);

  const voirPhoto = id => {
    const p = scn.photos.find(x => x.id === id); if (!p) return;
    modal({ titre: `📷 ${esc(p.titre || 'Photo')}`, large: true, corps: `${scn.medias?.[p.media] ? `<img src="${scn.medias[p.media]}" alt="" style="width:100%;border-radius:8px">` : ''}<p style="margin-top:8px">${esc(p.legende || '')}</p><p class="small muted">${esc([p.date, p.auteur].filter(Boolean).join(' · '))}${p.constat && faits.get(p.constat) ? ` · ${esc(faits.get(p.constat).court)}` : ''}</p>`, actions: [{ label: 'Fermer' }] });
  };
  const doc = $('.ana-doc', el);
  const allerA = id => { const c = $(`#c-${CSS.escape(id)}`, el); if (!c) return; $$('.ana-c.on', el).forEach(x => x.classList.remove('on')); c.classList.add('on'); doc.scrollTo({ top: c.offsetTop - 90, behavior: 'smooth' }); };
  S.onPick = hit => { if (hit.photo) voirPhoto(hit.photo); else if (hit.hotspot) allerA(hit.hotspot); };
  $$('[data-ph]', el).forEach(i => i.onclick = () => voirPhoto(i.dataset.ph));
  $$('[data-obs]', el).forEach(c => c.querySelector('.ana-ch')?.addEventListener('click', () => {
    const o = scn.observations.find(x => x.id === c.dataset.obs);
    const n = niveauIndex(bat, o.niveau);
    S.setNiveauVisible(niv.length > 1 ? n : null);
    S.setFocus({ cible: [o.pos[0], altitudeDe(bat, o.niveau), o.pos[2]], zoom: 1.8 }, null);
  }));
  $$('[data-nav]', el).forEach(a => a.onclick = e => { e.preventDefault(); const t = $(`#a-${a.dataset.nav}`, el); doc.scrollTo({ top: t.offsetTop - 90, behavior: 'smooth' }); });
  $('[data-print]', el).onclick = () => window.print();
  $('[data-close]', el)?.addEventListener('click', () => { S.dispose(); opts.onClose(); });
  $('[data-niv]', el)?.addEventListener('change', e => S.setNiveauVisible(e.target.value === '' ? null : +e.target.value));
  const modes = ['bas', 'auto', 'pleins']; let im = 0;
  $('.ov-view', el).addEventListener('click', e => {
    const v = e.target.closest('[data-v]')?.dataset.v;
    if (v === 'rotg') S.rotateView(-45); if (v === 'rotd') S.rotateView(45);
    if (v === 'murs') { im = (im + 1) % 3; S.setModeMurs(modes[im]); e.target.textContent = `🧱 Murs : ${modes[im]}`; }
  });
  // reconstitution
  const slider = $('.ov-recon input', el);
  if (slider && origine) {
    const lbl = $('.ov-recon .lbl', el);
    const upd = () => { const t = +slider.value, f = scn.reconstitution[Math.round(t)]; S.setReconstitution(scn.reconstitution, origine, t); lbl.innerHTML = `<span class="t">${esc(f.t)}</span>${esc(f.titre)}`; };
    slider.oninput = upd;
    let play = null;
    $('[data-play]', el).onclick = () => {
      if (play) { cancelAnimationFrame(play); play = null; return; }
      if (+slider.value >= +slider.max) slider.value = 0;
      let last = performance.now();
      const step = now => { slider.value = Math.min(+slider.max, +slider.value + (now - last) / 1600); last = now; upd(); play = +slider.value < +slider.max ? requestAnimationFrame(step) : null; };
      play = requestAnimationFrame(step);
    };
    $$('[data-etape]', el).forEach(r => r.onclick = () => { slider.value = r.dataset.etape; upd(); });
  }
  return { dispose: () => S.dispose() };
}

// Anonymisation avant partage : remplace les noms des témoins dans TOUS les textes du dossier
export function anonymiser(src, o = {}) {
  const s = structuredClone(src);
  const medias = s.medias; delete s.medias;
  const echap = w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (o.temoins) {
    const t = s.temoins || [];
    const regles = [];
    t.forEach((x, i) => regles.push([new RegExp(`\\b${echap(x.nom)}\\b`, 'g'), `Témoin ${i + 1}`]));
    const usage = new Map();
    t.forEach((x, i) => x.nom.split(/\s+/).filter(w => w.length > 2 && /^[A-ZÀ-Ý]/.test(w)).forEach(w => { if (!usage.has(w)) usage.set(w, new Set()); usage.get(w).add(i); }));
    for (const [w, set] of usage) regles.push([new RegExp(`\\b${echap(w)}\\b`, 'g'), set.size > 1 ? 'X.' : `Témoin ${[...set][0] + 1}`]);
    const walk = v => {
      if (typeof v === 'string') return regles.reduce((acc, [re, r]) => acc.replace(re, r), v);
      if (Array.isArray(v)) return v.map(walk);
      if (v && typeof v === 'object') { for (const k of Object.keys(v)) v[k] = walk(v[k]); return v; }
      return v;
    };
    walk(s);
  }
  if (o.adresse && s.mission) s.mission.adresse = s.retex?.lieuPublic || 'Adresse non communiquée';
  if (o.mandant && s.mission) { s.mission.mandant = 'Mandant non communiqué'; s.mission.reference = ''; }
  if (o.sansTemoins) s.temoins = [];
  if (o.sansOsint) s.osint = [];
  s.medias = medias;
  return s;
}
