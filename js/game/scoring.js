// Évaluation d'une enquête : méthode (40), analyse (30), conclusion (30)
export function evaluer(E) {
  const scn = E.scn, sol = scn.solution, R = E.rapport;
  const det = { methode: [], analyse: [], conclusion: [] };
  const add = (cat, titre, pts, max, texte, ref) => det[cat].push({ titre, pts: Math.max(0, Math.round(pts * 10) / 10), max, texte, ref, ok: pts >= max * 0.99 });

  // ---------------- MÉTHODE (40)
  const optS = scn.securite?.options || [];
  const bonsS = optS.filter(o => o.ok).map(o => o.id);
  const choix = E.securite.choix || [];
  let ptsS = 0;
  if (E.securite.faite) {
    ptsS = 4 * bonsS.filter(id => choix.includes(id)).length / Math.max(1, bonsS.length);
    ptsS -= 2 * optS.filter(o => !o.ok && choix.includes(o.id)).length;
    if (!E.securite.avantInterieur) ptsS -= 2;
  }
  add('methode', 'Sécurité de la scène', ptsS, 4, E.securite.faite ? (E.securite.avantInterieur ? 'Évaluation réalisée avant d\'entrer.' : 'Évaluation réalisée, mais après être entré dans le bâtiment.') : 'Aucune évaluation de sécurité.', '12.2 / 12.6');
  add('methode', 'De l\'extérieur vers l\'intérieur', E.violations.some(v => v.type === 'ordre-ext') ? 0 : 4, 4, 'Abords et façades avant l\'intérieur.', '17.3.1.3');
  add('methode', 'Des zones les moins vers les plus endommagées', E.violations.some(v => v.type === 'ordre-degats') ? 1 : 4, 4, 'Progression vers la zone la plus atteinte.', '17.3.1.3');
  const zonesV = E.zonesVisitees.length;
  const ptsPhZ = zonesV ? 3 * [...E.photoZone].length / zonesV : 0;
  const dec = [...E.decouverts.keys()];
  const ptsPhO = dec.length ? 3 * dec.filter(id => E.photoObs.has(id)).length / dec.length : 0;
  add('methode', 'Documentation photographique', ptsPhZ + ptsPhO - E.violations.filter(v => ['photo-fouille', 'photo-prelevement'].includes(v.type)).length, 6, `${E.photos.length} photos ; vues d'ensemble de ${E.photoZone.size}/${zonesV} zones ; ${dec.filter(id => E.photoObs.has(id)).length}/${dec.length} constats photographiés.`, '15.2');
  const nC = scn.fouille?.couches.length || 0;
  const ptsF = nC ? (4 * E.fouille.retirees / nC) - 1.5 * E.violations.filter(v => v.type === 'spoliation').length : 4;
  add('methode', 'Fouille par couches documentée', ptsF, 4, nC ? `${E.fouille.retirees}/${nC} couches retirées.` : '—', '17.3.2');
  const liq = E.scelles.filter(s => scn.prelevements.find(p => p.id === s.prelevement)?.type === 'liquide');
  const liqOk = liq.some(s => s.okCont && s.temoin);
  const elec = E.scelles.filter(s => scn.prelevements.find(p => p.id === s.prelevement)?.type !== 'liquide');
  const elecOk = elec.some(s => s.okCont && s.photoAvant);
  add('methode', 'Prélèvements et scellés', (liqOk ? 3 : liq.length ? 1 : 0) + (elecOk ? 3 : elec.length ? 1 : 0), 6, `${E.scelles.length} scellé(s).${liqOk ? '' : ' Recherche d\'accélérant : contenant étanche + échantillon de comparaison attendus.'}`, '16.5 / 16.6.2');
  const nT = [...E.temoins.keys()].length;
  const orient = E.violations.filter(v => v.type === 'question-orientee').length;
  add('methode', 'Entretiens', Math.min(2, nT * 0.5) + Math.max(0, 2 - orient), 4, `${nT} personne(s) entendue(s), ${orient} question(s) orientée(s).`, '13.4');
  const osF = (E.faits.has('F50') ? 2 : 0) + ([...E.osint.ajoutes].length >= 2 ? 1 : 0) + (E.faits.has('F52') ? 1 : 0);
  add('methode', 'Sources ouvertes', osF, 4, `${E.osint.ajoutes.size} source(s) versée(s) au dossier.`, '13.5 / 17.3.3.1');
  const ratioAna = dec.length ? E.analyses.size / dec.length : 0;
  add('methode', 'Toutes les données analysées', 4 * ratioAna, 4, `${E.analyses.size}/${dec.length} constats analysés.`, '4.3.4');

  // ---------------- ANALYSE (30)
  const bonnes = [...E.analyses.values()].filter(a => a.ok).length;
  const totObs = scn.observations.length;
  add('analyse', 'Interprétation des effets du feu', 15 * bonnes / Math.max(1, Math.max(dec.length, totObs * 0.75)), 15, `${bonnes} interprétation(s) correcte(s) sur ${E.analyses.size}.`, '6 / 17.4');
  const all = [...[...E.hyp.origines].map(([id, h]) => ({ kind: 'origines', id, h })), ...[...E.hyp.causes].map(([id, h]) => ({ kind: 'causes', id, h }))];
  const def = (kind, id) => scn.hypotheses[kind].find(x => x.id === id);
  const testees = all.filter(x => x.h.teste);
  add('analyse', 'Hypothèses alternatives envisagées', Math.min(5, testees.length), 5, `${testees.length} hypothèse(s) testée(s).`, '18.7 / 4.3.9');
  let refOk = 0, refKo = 0;
  for (const x of all.filter(x => x.h.statut === 'refutee')) {
    const d = def(x.kind, x.id);
    if (d.ok) { refKo += 2; continue; }
    const valides = x.h.refute.filter(f => d.refute.includes(f) && E.faitValide(f));
    if (valides.length) refOk++; else refKo++;
  }
  add('analyse', 'Réfutations fondées sur des faits', refOk ? 4 * refOk / (refOk + refKo) : 0, 4, `${refOk} réfutation(s) fondée(s), ${refKo} non fondée(s) ou erronée(s).`, '4.3.6 / 18.6');
  let contam = 0;
  for (const x of all) for (const f of x.h.soutien) if (E.faits.get(f)?.contamine || ['F54', 'F53', 'F40'].includes(f) && def(x.kind, x.id)?.ok !== true) contam++;
  add('analyse', 'Pas de donnée contaminée ou spéculative à l\'appui', Math.max(0, 4 - 2 * contam), 4, contam ? `${contam} appui(s) sur une rumeur, une suggestion ou un rappel produit.` : 'Aucun appui sur une donnée contaminée.', '4.3.8 / 13.4');
  add('analyse', 'Compétence de la source d\'ignition testée', E.competence.size ? 2 : 0, 2, E.competence.size ? 'Test de compétence réalisé.' : 'La compétence de la source vis-à-vis du premier combustible n\'a pas été testée.', '18.4.2 / 18.6.5.2');

  // ---------------- CONCLUSION (30)
  const okOrig = R.origine === sol.origine;
  const okCause = R.cause === sol.cause;
  add('conclusion', 'Zone d\'origine', okOrig ? 10 : 0, 10, okOrig ? 'Zone d\'origine correctement déterminée.' : `Zone retenue : « ${def('origines', R.origine)?.nom || 'aucune'} ».`, '17');
  add('conclusion', 'Cause (source, premier combustible, séquence)', okCause ? 8 : 0, 8, okCause ? 'Cause correctement déterminée.' : `Cause retenue : « ${def('causes', R.cause)?.nom || 'aucune'} ».`, '18');
  // certitude attendue au vu des données réunies
  const ps = sol.probableSi;
  const has = id => E.faits.has(id) && E.faitValide(id) || (E.faits.has(id) && E.faits.get(id).type !== 'constat');
  const probableJustifie = okOrig && okCause && ps && ps.tous.every(has) && ps.unParmi.every(g => g.some(has));
  const certAttendue = !okCause ? 'possible' : (probableJustifie ? 'probable' : 'possible');
  const classAttendue = certAttendue === 'possible' ? 'indeterminee' : sol.classification;
  const okCert = R.certitude === certAttendue;
  add('conclusion', 'Niveau de certitude', okCert ? 6 : (R.certitude === 'suspecte' ? 0 : 2), 6, okCert ? `« ${certAttendue} » : cohérent avec les données réunies.` : `Attendu au vu de vos données : « ${certAttendue} ».${R.certitude === 'suspecte' ? ' « Suspecté » n\'est pas une opinion d\'expert.' : ''}`, '4.5');
  const okClass = R.classification === classAttendue;
  add('conclusion', 'Classification', okClass ? 6 : 0, 6, okClass ? 'Classification cohérente avec la cause et la certitude.' : `Attendu : « ${classAttendue} ».${R.classification === 'suspecte' ? ' « Suspecte » n\'est pas une classification.' : ''}${certAttendue === 'possible' ? ' Une cause seulement « possible » impose « indéterminée ».' : ''}`, '19.2.1');

  // ---------------- PÉNALITÉS
  const penalites = [];
  const causeDef = def('causes', R.cause);
  const appui = (R.faitsAppui || []).filter(f => causeDef?.soutien.includes(f) && E.faitValide(f));
  if (R.cause && !appui.length) penalites.push({ titre: 'Negative corpus', pts: 10, texte: 'Cause retenue sans aucune donnée valide qui la démontre (élimination des autres hypothèses seulement).', ref: '18.6.5' });
  if (R.classification === 'volontaire' && sol.classification !== 'volontaire') penalites.push({ titre: 'Conclusion criminelle infondée', pts: 6, texte: 'Une conclusion d\'incendie volontaire erronée a des conséquences humaines et judiciaires lourdes.', ref: '22.1 / 4.3.8' });
  const ptsViol = E.violations.reduce((s, v) => s + (v.points || 0), 0) * 0.25;

  const sum = arr => arr.reduce((s, d) => s + Math.min(d.max, d.pts), 0);
  const m = sum(det.methode), a = sum(det.analyse), c = sum(det.conclusion);
  const pen = penalites.reduce((s, p) => s + p.pts, 0) + ptsViol;
  const total = Math.max(0, Math.min(100, Math.round(m + a + c - pen)));

  // ---------------- PIÈGES
  const pieges = (sol.pieges || []).map(p => {
    let etat = 'non';
    const usedAsSupport = id => [...E.hyp.origines.values(), ...E.hyp.causes.values()].some(h => h.soutien.includes(id) && h.statut !== 'refutee') || (R.faitsAppui || []).includes(id);
    const ana = id => E.analyses.get(id);
    if (p.id === 'irregulier') etat = ana('F15') ? (ana('F15').ok && R.origine !== 'OB' ? 'evite' : 'tombe') : (R.origine === 'OB' ? 'tombe' : 'non');
    if (p.id === 'pid') etat = E.faits.has('F19') ? ((ana('F19')?.ok !== false) && !usedAsSupport('F19') ? 'evite' : 'tombe') : 'non';
    if (p.id === 'temoin') etat = (E.faits.has('F40') || E.faits.has('F41') || E.faits.has('F54')) ? (usedAsSupport('F40') || usedAsSupport('F54') || R.classification === 'volontaire' ? 'tombe' : 'evite') : 'non';
    if (p.id === 'rappel') etat = E.faits.has('F53') ? (R.cause === 'CC' || usedAsSupport('F53') ? 'tombe' : 'evite') : 'non';
    if (p.id === 'verre') etat = ana('F03') ? (ana('F03').ok ? 'evite' : 'tombe') : 'non';
    if (p.id === 'fumeur') { const h = E.hyp.causes.get('CB'); etat = R.cause === 'CB' ? 'tombe' : h?.statut === 'refutee' && h.refute.some(f => ['F12', 'F13', 'F23', 'F30', 'F25'].includes(f) && E.faitValide(f)) ? 'evite' : (h ? 'non' : 'non'); }
    if (p.id === 'fumeur' && etat === 'non' && R.cause === 'CA' && !E.hyp.causes.has('CB')) etat = 'oublie';
    return { ...p, etat };
  });

  const ratio = total / 100;
  const deja = !!E.c.missions[scn.id]?.meilleur;
  const fact = deja ? 0.5 : 1;
  const credits = Math.round((scn.recompense.credits * 0.5 + scn.recompense.credits * 0.5 * ratio + scn.recompense.bonusMax * Math.max(0, ratio - 0.6) / 0.4) * fact);
  const xp = Math.round(scn.recompense.xp * ratio * fact);
  return { total, methode: m, analyse: a, conclusion: c, det, penalites, ptsViol, pieges, credits, xp, deja, certAttendue, classAttendue };
}
