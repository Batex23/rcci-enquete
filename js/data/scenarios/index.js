import tutoCuisine from './tuto-cuisine.js';
import pavillonDurand from './pavillon-durand.js';
import maisonEtage from './maison-etage.js';
import garageVae from './garage-vae.js';
import vlNuit from './vl-nuit.js';
import conteneurBess from './conteneur-bess.js';
import notreDame from './notre-dame.js';

// Scénarios intégrés, dans l'ordre de progression
export const SCENARIOS = [tutoCuisine, pavillonDurand, maisonEtage, garageVae, vlNuit, conteneurBess, notreDame];

// Missions à venir (affichées verrouillées sur le tableau des missions)
export const A_VENIR = [
  { id: 'appart-victime', titre: 'Appartement R+3 — une victime', type: 'habitation', gradeMin: 2, resume: 'Victime dans le séjour, lecture des actions de lance, toxicologie (CO, HCN).', ref: 'Chap. 23' },
  { id: 'entrepot', titre: 'Entrepôt logistique', type: 'industriel', gradeMin: 3, resume: 'Enquête complexe, parties multiples, modélisation.', ref: 'Chap. 20 / 27' },
];
