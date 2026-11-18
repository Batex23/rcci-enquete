// Logique d'une enquête en cours (indépendante de l'affichage)
import { possede } from '../state.js';
import { OUTILS, CONTENANTS } from '../data/outils.js';
import { norm } from '../ui.js';

export class Enquete {
  constructor(scn, carriere) {
    this.scn = scn;
    this.c = carriere;
    this.zoneActive = null;
    this.zonesVisitees = [];
    this.securite = { faite: false, choix: [], avantInterieur: false };
    this.decouverts = new Map(); // obsId -> { num }
    this.num = 0;
    this.photos = [];
    this.photoObs = new Set();
    this.photoZone = new Set();
    this.photoCouche = new Set();
    this.analyses = new Map(); // obsId -> { idx, ok }
    this.fouille = { retirees: 0 };
    this.scelles = [];
    this.faits = new Map();
    this.temoins = new Map();
    this.osint = { recherches: [], vus: new Set(), ajoutes: new Set() };
    this.hyp = { origines: new Map(), causes: new Map() };
    this.competence = new Set();
    this.violations = [];
    this.depenses = 0;
    this.journal = [];
    this.rapport = null;
    this.debut = Date.now();
  }

  // -------------------------------------------------- utilitaires
  obs(id) { return this.scn.observations.find(o => o.id === id); }
  zone(id) { return this.scn.zones.find(z => z.id === id); }
  outilNom(id) { return OUTILS.find(o => o.id === id)?.nom || id; }
  possede(id) { return possede(this.c, id); }
  log(t) { this.journal.push({ t: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }), texte: t }); }
  violation(type, texte, ref, points = 2) {
    if (this.violations.some(v => v.type === type && v.texte === texte)) return null;
    const v = { type, texte, ref, points };
    this.violations.push(v);
    return v;
  }
  ajouterFait(f) {
    if (this.faits.has(f.id)) return false;
    this.faits.set(f.id, { ...f, n: this.faits.size + 1 });
    return true;
  }

  // -------------------------------------------------- sécurité
  validerSecurite(choix) {
    this.securite.faite = true;
    this.securite.choix = choix;
    this.securite.avantInterieur = !this.zonesVisitees.some(z => !this.zone(z)?.exterieur);
    const opts = this.scn.securite?.options || [];
    const fautes = opts.filter(o => !o.ok && choix.includes(o.id));
    const oublis = opts.filter(o => o.ok && !choix.includes(o.id));
    this.log('Évaluation de sécurité réalisée.');
    return { fautes, oublis };
  }

  // -------------------------------------------------- zones
  entrerZone(id) {
    const z = this.zone(id);
    const msgs = [];
    if (!z) return msgs;
    if (!z.exterieur) {
      if (!this.securite.faite) {
        const v = this.violation('securite', 'Entrée dans le bâtiment sans évaluation de sécurité préalable.', '12.2 / 12.3', 4);
        if (v) msgs.push(v);
      }
      if (!this.zonesVisitees.some(zz => this.zone(zz)?.exterieur)) {
        const v = this.violation('ordre-ext', 'Examen intérieur commencé avant l\'examen des abords et de l\'extérieur.', '17.3.1.3 / 17.3.1.5', 3);
        if (v) msgs.push(v);
      }
      const inter = this.scn.zones.filter(x => !x.exterieur);
      const nonVues = inter.filter(x => !this.zonesVisitees.includes(x.id) && x.id !== id);
      if (nonVues.some(x => (x.rang ?? 0) < (z.rang ?? 0))) {
        const v = this.violation('ordre-degats', `Zone « ${z.nom} » examinée avant des zones moins endommagées.`, '17.3.1.3', 2);
        if (v) msgs.push(v);
      }
    }
    if (!this.zonesVisitees.includes(id)) { this.zonesVisitees.push(id); this.log(`Examen de la zone « ${z.nom} ».`); }
    this.zoneActive = id;
    return msgs;
  }

  // -------------------------------------------------- découverte
  estActif(o) {
    if (this.decouverts.has(o.id)) return true;
    if (o.cachee) return false;
    if (o.zone !== this.zoneActive) return false;
    if ((o.couche || 0) > this.fouille.retirees) return false;
    return true;
  }

  decouvrir(o) {
    if (this.decouverts.has(o.id)) return false;
    this.decouverts.set(o.id, { num: ++this.num });
    this.ajouterFait({ id: o.id, texte: `${o.titre} — ${o.description}`, court: o.titre, type: 'constat', source: this.zone(o.zone)?.nom, obs: o.id, ref: o.analyse?.ref });
    this.log(`Constat n°${this.num} : ${o.titre}.`);
    return true;
  }

  // Résolution d'un clic dans la scène selon l'outil actif
  pick(outil, { hotspot, point, sol }) {
    const o = hotspot ? this.obs(hotspot) : null;
    if (outil === 'observer') {
      if (!o) return { type: 'rien', msg: 'Rien de notable à cet endroit. Poursuivez l\'examen méthodique de la zone.' };
      if (o.outil && !this.decouverts.has(o.id)) {
        return { type: 'indice', obs: o, msg: o.indice || 'Un relevé instrumental serait nécessaire ici.', outilRequis: o.outil, possede: this.possede(o.outil) };
      }
      const neuf = this.decouvrir(o);
      return { type: 'obs', obs: o, neuf };
    }
    if (outil === 'photo') {
      if (o && this.decouverts.has(o.id)) return { type: 'photoObs', obs: o };
      return { type: 'photoZone' };
    }
    if (outil === 'jauge' || outil === 'arc') {
      if (o && o.outil === outil) { const neuf = this.decouvrir(o); return { type: 'obs', obs: o, neuf }; }
      if (o && this.decouverts.has(o.id)) return { type: 'obs', obs: o, neuf: false };
      return { type: 'rien', msg: outil === 'jauge' ? 'Pas de surface de référence exploitable ici pour un relevé comparatif.' : 'Aucun conducteur accessible à cet endroit.' };
    }
    if (outil === 'pid') {
      if (!point) return { type: 'rien', msg: 'Approchez la sonde des débris.' };
      const zones = this.scn.pid || [];
      const z = zones.find(p => Math.hypot(point.x - p.x, point.z - p.z) < p.r && (this.zone(this.zoneActive)?.piece));
      const valeur = z ? z.valeur : '0,2 ppm (bruit de fond)';
      if (z?.fait) { const ob = this.obs(z.fait); if (ob) this.decouvrir(ob); }
      this.log(`Lecture PID : ${valeur}.`);
      return { type: 'pid', valeur, obs: z?.fait ? this.obs(z.fait) : null };
    }
    if (outil === 'prelever') {
      if (o && this.decouverts.has(o.id)) {
        if (o.prelevement) return { type: 'prelever', obs: o };
        return { type: 'rien', msg: 'Rien à prélever sur ce constat (documentez-le, ne le déplacez pas).' };
      }
      return { type: 'rien', msg: 'Désignez un constat déjà relevé (cavalier jaune) pour le prélever.' };
    }
    if (outil === 'fouille') {
      const f = this.scn.fouille;
      if (!f || this.zoneActive !== f.zone) return { type: 'rien', msg: 'La fouille se pratique dans la zone d\'intérêt, une fois définie par l\'analyse des tracés.' };
      const a = f.aire;
      if (point && point.x >= a.x - 0.2 && point.x <= a.x + a.w + 0.2 && point.z >= a.z - 0.2 && point.z <= a.z + a.d + 0.2) return { type: 'fouille' };
      return { type: 'rien', msg: 'Hors de la zone d\'intérêt délimitée (ruban jaune). Une fouille hors zone détruit des données sans en apporter.' };
    }
    return { type: 'rien', msg: '' };
  }

  // -------------------------------------------------- photographie
  photoDeZone(img) {
    const z = this.zone(this.zoneActive);
    const n = this.photos.length + 1;
    const leg = `Vue d'ensemble — ${z?.nom || 'scène'}${this.scn.fouille && this.zoneActive === this.scn.fouille.zone && this.fouille.retirees < this.scn.fouille.couches.length ? ` (fouille : couche ${this.fouille.retirees + 1} en place)` : ''}`;
    this.photos.push({ n, img, legende: leg, zone: this.zoneActive });
    this.photoZone.add(this.zoneActive);
    if (this.scn.fouille && this.zoneActive === this.scn.fouille.zone) this.photoCouche.add(this.fouille.retirees + 1);
    this.log(`Photo n°${n} : ${leg}.`);
    return n;
  }
  photoDObs(o, img) {
    const n = this.photos.length + 1;
    const num = this.decouverts.get(o.id)?.num;
    this.photos.push({ n, img, legende: `Cavalier ${num} — ${o.titre}`, obs: o.id, zone: o.zone });
    this.photoObs.add(o.id);
    this.log(`Photo n°${n} : cavalier ${num}.`);
    return n;
  }

  // -------------------------------------------------- analyse des données
  analyser(obsId, idx) {
    const o = this.obs(obsId);
    const opt = o.analyse.options[idx];
    this.analyses.set(obsId, { idx, ok: !!opt.ok });
    const f = this.faits.get(obsId);
    if (f) f.interpretation = opt.t;
    this.log(`Analyse du constat « ${o.titre} ».`);
    return { ok: !!opt.ok, fb: opt.fb, ref: o.analyse.ref };
  }

  // -------------------------------------------------- fouille
  peutRetirerCouche() {
    const f = this.scn.fouille;
    if (!f) return { ok: false };
    if (this.fouille.retirees >= f.couches.length) return { ok: false, msg: 'Fouille terminée : niveau du sol atteint.' };
    return { ok: true };
  }
  retirerCouche() {
    const f = this.scn.fouille;
    const n = this.fouille.retirees + 1;
    const couche = f.couches.find(c => c.n === n);
    const msgs = [];
    if (!this.photoCouche.has(n)) {
      const v = this.violation('spoliation', `Couche ${n} (« ${couche.nom} ») retirée sans avoir été photographiée.`, '17.3.2.5 / 15.2', 3);
      if (v) msgs.push(v);
    }
    // constats visibles non photographiés détruits par la fouille
    const exposes = this.scn.observations.filter(o => o.zone === f.zone && (o.couche || 0) === n - 1 && this.decouverts.has(o.id) && (o.couche || 0) > 0 && !this.photoObs.has(o.id));
    for (const o of exposes) {
      const v = this.violation('photo-fouille', `Constat « ${o.titre} » déplacé par la fouille sans photo préalable.`, '15.2 / 17.3.2.5', 2);
      if (v) msgs.push(v);
    }
    this.fouille.retirees = n;
    this.log(`Fouille : couche ${n} « ${couche.nom} » retirée.`);
    const reveles = this.scn.observations.filter(o => (o.couche || 0) === n && o.zone === f.zone);
    return { couche, msgs, reveles };
  }

  // -------------------------------------------------- prélèvements & labo
  contenantsDisponibles() {
    return CONTENANTS.filter(c => c.base || this.possede(c.outil));
  }
  prelever(obsId, contenant, temoin) {
    const o = this.obs(obsId);
    const p = this.scn.prelevements.find(x => x.id === o.prelevement);
    if (this.scelles.some(s => s.prelevement === p.id)) return { erreur: 'Déjà prélevé et placé sous scellé.' };
    const msgs = [];
    const photoAvant = this.photoObs.has(obsId);
    if (!photoAvant) { const v = this.violation('photo-prelevement', `Prélèvement « ${p.nom} » sans photo préalable du constat en place.`, '16.5.2 / 15.2', 2); if (v) msgs.push(v); }
    const okCont = p.contenantsOK.includes(contenant);
    if (!okCont) { const v = this.violation('contenant', `Contenant inadapté pour « ${p.nom} ».`, '16.6.2', 3); if (v) msgs.push(v); }
    if (p.temoinRequis && !temoin) { const v = this.violation('temoin', `Pas d'échantillon de comparaison pour « ${p.nom} ».`, '16.5.4', 2); if (v) msgs.push(v); }
    const s = { id: `S${String(this.scelles.length + 1).padStart(2, '0')}`, prelevement: p.id, obs: obsId, nom: p.nom, contenant, temoin: !!temoin, okCont, photoAvant, resultats: {} };
    this.scelles.push(s);
    this.log(`Scellé ${s.id} : ${p.nom}${temoin ? ' + échantillon de comparaison' : ''}.`);
    return { scelle: s, msgs };
  }
  coutAnalyse(a) { return this.possede('labo') ? Math.round(a.cout / 2) : a.cout; }
  analyserScelle(sid, aid) {
    const s = this.scelles.find(x => x.id === sid);
    const p = this.scn.prelevements.find(x => x.id === s.prelevement);
    const a = p.analyses.find(x => x.id === aid);
    const cout = this.coutAnalyse(a);
    if (this.c.credits < cout) return { erreur: `Crédits insuffisants (${cout} requis).` };
    this.c.credits -= cout; this.depenses += cout;
    let r;
    if (!s.okCont) r = a.resultats.mauvaisContenant || { texte: 'Échantillon altéré par le conditionnement : résultat non interprétable.' };
    else if (p.temoinRequis && !s.temoin) r = a.resultats.sansTemoin || a.resultats.ok;
    else r = a.resultats.ok;
    s.resultats[aid] = { ...r, nom: a.nom };
    if (r.fait) {
      const id = r.partiel ? `${r.fait}p` : r.fait;
      this.ajouterFait({ id, texte: `${a.nom} (${s.id}) — ${r.texte}`, court: `Labo ${s.id} : ${a.nom}`, type: 'labo', source: 'Laboratoire', partiel: !!r.partiel });
    }
    this.log(`Analyse ${a.nom} sur ${s.id} (${cout} cr).`);
    return { resultat: r, cout };
  }

  // -------------------------------------------------- témoins
  poserQuestion(tid, qid) {
    const t = this.scn.temoins.find(x => x.id === tid);
    const q = t.questions.find(x => x.id === qid);
    if (!this.temoins.has(tid)) this.temoins.set(tid, new Set());
    this.temoins.get(tid).add(qid);
    const msgs = [];
    if (q.type === 'orientee') { const v = this.violation('question-orientee', `Question orientée posée à ${t.nom}.`, '13.4', 2); if (v) msgs.push(v); }
    if (q.fait) this.ajouterFait({ id: q.fait.id, texte: `${t.nom} : ${q.fait.texte}`, court: q.fait.texte, type: 'temoin', source: t.nom, contamine: !!q.fait.contamine });
    this.log(`Entretien ${t.nom} : « ${q.q} »`);
    return { q, msgs };
  }

  // -------------------------------------------------- OSINT
  rechercher(requete, source) {
    const qn = norm(requete).split(/\s+/).filter(Boolean);
    this.osint.recherches.push({ requete, source });
    const res = (this.scn.osint || []).filter(o => (source === 'tout' || o.source === source) && o.motsCles.some(set => set.every(k => qn.some(w => w.includes(norm(k).trim()) || norm(k).trim().includes(w) && w.length > 3))));
    for (const r of res) this.osint.vus.add(r.id);
    return res;
  }
  ajouterOsint(id) {
    const o = this.scn.osint.find(x => x.id === id);
    if (!o || this.osint.ajoutes.has(id)) return false;
    if (o.pro && !this.possede('osintpro')) return false;
    this.osint.ajoutes.add(id);
    this.ajouterFait({ id: o.fait.id, texte: `${o.titre} — ${o.fait.texte}`, court: o.fait.texte, type: 'osint', source: o.titre, fiabilite: o.fiabilite, speculatif: !!o.piege });
    this.log(`OSINT ajouté au dossier : ${o.titre}.`);
    return true;
  }

  // -------------------------------------------------- hypothèses
  ajouterHypothese(kind, id) {
    const m = this.hyp[kind];
    if (!m.has(id)) m.set(id, { statut: 'ouverte', soutien: [], refute: [] });
    this.log(`Hypothèse ${kind === 'origines' ? 'd\'origine' : 'de cause'} ajoutée.`);
  }
  testerHypothese(kind, id, soutien, refute, statut) {
    this.hyp[kind].set(id, { statut, soutien, refute, teste: true });
    this.log(`Test de l'hypothèse ${id} → ${statut}.`);
  }
  // Un fait « valide » : constat correctement analysé, ou fait non contaminé et non partiel
  faitValide(fid) {
    const f = this.faits.get(fid);
    if (!f || f.contamine || f.speculatif || f.partiel) return false;
    if (f.type === 'constat') return this.analyses.get(fid)?.ok === true;
    return true;
  }

  // -------------------------------------------------- progression méthode scientifique
  progression() {
    const nDec = this.decouverts.size;
    const nAna = this.analyses.size;
    const nHyp = this.hyp.origines.size + this.hyp.causes.size;
    const nTest = [...this.hyp.origines.values(), ...this.hyp.causes.values()].filter(h => h.teste).length;
    const final = [...this.hyp.origines.values()].some(h => h.statut === 'retenue') && [...this.hyp.causes.values()].some(h => h.statut === 'retenue');
    return {
      besoin: 1,
      probleme: this.securite.faite ? 1 : 0,
      collecte: Math.min(1, (nDec + this.faits.size / 2) / Math.max(8, this.scn.observations.length)),
      analyse: nDec ? nAna / nDec : 0,
      hypothese: Math.min(1, nHyp / 4),
      test: nHyp ? nTest / nHyp : 0,
      final: this.rapport ? 1 : final ? 0.6 : 0,
    };
  }
}
