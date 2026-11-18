// Aperçu imprimable du rapport d'enquête (structure inspirée du modèle de rapport RCCI)
import { CLASSIFICATIONS, CERTITUDES, NFPA_EDITION } from '../data/nfpa.js';
import { CONTENANTS } from '../data/outils.js';
import { modal, esc, refTexte } from '../ui.js';
import { bibliographie } from '../data/sources.js';

export function rapportHtml(E, R, carriere) {
  const scn = E.scn;
  const O = scn.hypotheses.origines.find(x => x.id === R.origine);
  const C = scn.hypotheses.causes.find(x => x.id === R.cause);
  const cl = CLASSIFICATIONS.find(x => x.id === R.classification);
  const ce = CERTITUDES.find(x => x.id === R.certitude);
  const constats = [...E.decouverts].map(([id, d]) => ({ o: E.obs(id), num: d.num })).sort((a, b) => a.num - b.num);
  const parZone = z => constats.filter(c => c.o.zone === z.id);
  const declar = [...E.faits.values()].filter(f => f.type === 'temoin');
  const osint = [...E.faits.values()].filter(f => f.type === 'osint');
  const hypRows = k => [...E.hyp[k]].map(([id, hh]) => {
    const d = scn.hypotheses[k].find(x => x.id === id);
    return `<tr><td>${esc(d.nom)}</td><td>${{ ouverte: 'en suspens', retenue: 'RETENUE', refutee: 'réfutée' }[hh.statut]}</td><td>${hh.soutien.join(', ') || '—'}</td><td>${hh.refute.join(', ') || '—'}</td></tr>`;
  }).join('');
  return `<div class="rapport-doc">
    <h1>Rapport d'enquête incendie</h1>
    <p><b>Mandant :</b> ${esc(scn.mission.mandant)} — <b>Réf. :</b> ${esc(scn.mission.reference)}<br>
    <b>Enquêteur :</b> ${esc(carriere.nom)} — <b>Référentiel :</b> ${NFPA_EDITION}</p>
    <h2>1. Mission</h2><p>${esc(scn.mission.ordre)}</p>
    <h2>2. Situation à l'arrivée sur les lieux</h2>
    <p><b>Adresse :</b> ${esc(scn.mission.adresse)}<br><b>Sinistre :</b> ${esc(scn.mission.dateSinistre)} — alerte ${esc(scn.mission.heureAlerte)}<br><b>Préservation :</b> ${esc(scn.mission.preservation)}<br><b>Météo :</b> ${esc(scn.meteo)}</p>
    <p><b>Intervention des sapeurs-pompiers :</b></p><ul>${scn.rapportSdis.map(l => `<li>${esc(l)}</li>`).join('')}</ul>
    <h2>3. Constatations</h2>
    ${scn.zones.filter(z => parZone(z).length).map(z => `<p><b>${esc(z.nom)}</b></p><table><tr><th style="width:40px">N°</th><th>Constatation</th><th>Analyse</th></tr>${parZone(z).map(c => { const a = E.analyses.get(c.o.id); return `<tr><td>${c.num}</td><td>${esc(c.o.description)}</td><td>${a ? esc(c.o.analyse.options[a.idx].t) : c.o.analyse ? '<i>non analysé</i>' : ''}${E.releves?.get(c.o.id) ? `${a ? '<br>' : ''}🌡️ ${esc(c.o.thermo.options[E.releves.get(c.o.id).idx].t)}` : c.o.thermo?.options ? '<i>température non estimée</i>' : ''}${c.o.analyse?.ref || c.o.ref ? `<br><small>${esc(refTexte(c.o.analyse?.ref || c.o.ref))}</small>` : ''}</td></tr>`; }).join('')}</table>`).join('')}
    <h2>4. Fouille de la zone d'intérêt</h2>
    <p>${scn.fouille ? `${E.fouille.retirees} couche(s) sur ${scn.fouille.couches.length} retirée(s) : ${scn.fouille.couches.filter(c => c.n <= E.fouille.retirees).map(c => esc(c.nom)).join(' ; ') || '—'}.` : '—'}</p>
    <h2>5. Prélèvements et analyses</h2>
    ${E.scelles.length ? `<table><tr><th>Scellé</th><th>Objet</th><th>Conditionnement</th><th>Résultat</th></tr>${E.scelles.map(s => `<tr><td>${s.id}</td><td>${esc(s.nom)}</td><td>${esc(CONTENANTS.find(c => c.id === s.contenant)?.nom)}${s.temoin ? ' + comparaison' : ''}</td><td>${Object.values(s.resultats).map(r => `<b>${esc(r.nom)} :</b> ${esc(r.texte)}`).join('<br>') || 'non analysé'}</td></tr>`).join('')}</table>` : '<p>Aucun prélèvement.</p>'}
    <h2>6. Déclarations et sources ouvertes</h2>
    ${declar.length ? `<ul>${declar.map(f => `<li>${esc(f.texte)}${f.contamine ? ' <i>(recueillie sur question orientée — non retenue)</i>' : ''}</li>`).join('')}</ul>` : '<p>Aucune déclaration recueillie.</p>'}
    ${osint.length ? `<ul>${osint.map(f => `<li>${esc(f.texte)} <i>(${esc(f.fiabilite || '')})</i></li>`).join('')}</ul>` : ''}
    <h2>7. Corrélation — hypothèses testées</h2>
    <table><tr><th>Hypothèse</th><th>Statut</th><th>Faits à l'appui</th><th>Faits contraires</th></tr>${hypRows('origines')}${hypRows('causes')}</table>
    <h2>8. Conclusion</h2>
    <table>
      <tr><th style="width:200px">Zone d'origine</th><td>${O ? esc(O.nom) : 'Non déterminée'}</td></tr>
      <tr><th>Premier combustible</th><td>${C ? esc(C.premierCombustible) : '—'}</td></tr>
      <tr><th>Source d'ignition</th><td>${C ? esc(C.source) : '—'}</td></tr>
      <tr><th>Séquence d'inflammation</th><td>${C ? esc(C.nom) : 'Indéterminée'}</td></tr>
      <tr><th>Niveau de certitude</th><td>${ce ? esc(ce.nom) : '—'}</td></tr>
      <tr><th>Classification</th><td>${cl ? esc(cl.nom) : '—'}</td></tr>
      <tr><th>Faits à l'appui</th><td>${(R.faitsAppui || []).map(id => esc(E.faits.get(id)?.court || id)).join(' ; ') || '—'}</td></tr>
    </table>
    ${R.texte ? `<p style="margin-top:10px">${esc(R.texte).replace(/\n/g, '<br>')}</p>` : ''}
    <h2>Références</h2>
    <p>Méthode et numérotation : <b>${NFPA_EDITION}</b> (référence de base). Ouvrages complémentaires en lien avec les constatations :</p>
    <ul>${bibliographie(constats.map(c => ({ ref: c.o.analyse?.ref || c.o.ref, sources: c.o.sources, texte: `${c.o.titre} ${c.o.description || ''}` }))).map(b => `<li>${esc(b.ref)}</li>`).join('')}</ul>
    <h2>Annexe — planche photographique</h2>
    ${E.photos.length ? `<div class="ph">${E.photos.map(p => `<figure><img src="${p.img}" alt=""><figcaption><b>Photo ${p.n}</b> — ${esc(p.legende)}</figcaption></figure>`).join('')}</div>` : '<p>Aucune photo.</p>'}
  </div>`;
}

export function apercuRapport(E, R, carriere) {
  modal({ titre: '🖨️ Aperçu du rapport', large: true, corps: rapportHtml(E, R, carriere), actions: [
    { label: 'Imprimer / PDF', classe: 'btn-primary', onClick: () => { window.print(); return false; } },
    { label: 'Fermer' },
  ] });
}
