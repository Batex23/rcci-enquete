import tutoCuisine from './tuto-cuisine.js';
import pavillonDurand from './pavillon-durand.js';
import maisonEtage from './maison-etage.js';

// Scénarios intégrés, dans l'ordre de progression
export const SCENARIOS = [tutoCuisine, pavillonDurand, maisonEtage];

// Missions à venir (affichées verrouillées sur le tableau des missions)
export const A_VENIR = [
  { id: 'vl-parking', titre: 'Feu de véhicule sur parking', type: 'vehicule', gradeMin: 1, outil: 'vehicule', resume: 'Total burn sur un parking de supermarché : systèmes du véhicule, carburant, commandes, vidéosurveillance.', ref: 'Chap. 25' },
  { id: 'appart-victime', titre: 'Appartement R+3 — une victime', type: 'habitation', gradeMin: 2, resume: 'Victime dans le séjour, lecture des actions de lance, toxicologie (CO, HCN).', ref: 'Chap. 23' },
  { id: 'vae-garage', titre: 'Garage — trottinette en charge', type: 'habitation', gradeMin: 2, resume: 'Batterie lithium-ion, emballement thermique, arcs multiples.', ref: 'Chap. 8 / 24' },
  { id: 'entrepot', titre: 'Entrepôt logistique', type: 'industriel', gradeMin: 3, resume: 'Enquête complexe, parties multiples, modélisation.', ref: 'Chap. 20 / 27' },
];
