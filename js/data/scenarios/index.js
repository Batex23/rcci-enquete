import pavillonDurand from './pavillon-durand.js';

// Scénarios intégrés
export const SCENARIOS = [pavillonDurand];

// Missions à venir (affichées verrouillées sur le tableau des missions)
export const A_VENIR = [
  { id: 'vl-parking', titre: 'Feu de véhicule sur parking (VL thermique)', type: 'vehicule', gradeMin: 1, outil: 'vehicule', resume: 'Total burn sur un parking de supermarché. Systèmes du véhicule, carburant, commandes, vidéosurveillance.', ref: 'Chap. 25' },
  { id: 'pavillon-cuisine', titre: 'Pavillon — variante « feu de cuisine »', type: 'habitation', gradeMin: 1, resume: 'Même pavillon, autre heure, autre puissance, autre origine.', ref: 'Chap. 17–18' },
  { id: 'appart-victime', titre: 'Appartement R+3 — une victime', type: 'habitation', gradeMin: 2, resume: 'Victime dans le séjour, lecture des actions de lance, toxicologie (CO, HCN).', ref: 'Chap. 23' },
  { id: 'vae-garage', titre: 'Garage — trottinette électrique en charge', type: 'habitation', gradeMin: 2, resume: 'Batterie lithium-ion, emballement thermique, arcs multiples.', ref: 'Chap. 8 / 24' },
  { id: 'entrepot', titre: 'Entrepôt logistique — enquête complexe', type: 'industriel', gradeMin: 3, resume: 'Gestion d\'enquête complexe, parties multiples, modélisation.', ref: 'Chap. 20 / 27' },
  { id: 'pl-autoroute', titre: 'Poids lourd sur aire d\'autoroute', type: 'vehicule', gradeMin: 3, outil: 'vehicule', resume: 'Freins, pneumatiques, groupe frigorifique.', ref: 'Chap. 25' },
];
