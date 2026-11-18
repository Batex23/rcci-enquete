// Catalogue des outils et infrastructures d'investigation
export const OUTILS = [
  // Dotation de départ
  { id: 'observer', court: 'Observer', nom: 'Observation / lampe', icone: '🔦', prix: 0, base: true, desc: 'Examiner la scène et relever les effets du feu.', ref: '17.3.1' },
  { id: 'photo', court: 'Photo', nom: 'Appareil photo', icone: '📷', prix: 0, base: true, desc: 'Documenter avant toute modification, du général au particulier.', ref: '15.2' },
  { id: 'fouille', court: 'Fouille', nom: 'Pelle, truelle, tamis', icone: '⛏️', prix: 0, base: true, desc: 'Fouille manuelle par couches dans la zone d\'intérêt.', ref: '17.3.2' },
  { id: 'prelever', court: 'Prélever', nom: 'Kit de prélèvement de base', icone: '🧤', prix: 0, base: true, desc: 'Gants, sachets plastique, sachets papier, cartons, étiquettes de scellés.', ref: '16.5' },
  // Équipements à acquérir
  { id: 'jauge', court: 'Jauge', nom: 'Jauge de carbonisation & calcination', icone: '📏', prix: 400, grade: 0, desc: 'Relevés de profondeur de carbonisation (bois) et de calcination (plâtre). Permet de hiérarchiser l\'exposition thermique.', ref: '17.4.3 / 17.4.4' },
  { id: 'pots', court: 'Contenants', nom: 'Contenants pour liquides inflammables', icone: '🥫', prix: 250, grade: 0, desc: 'Pots métalliques neufs, bocaux verre, sachets nylon spécifiques. Indispensables pour une recherche de résidus exploitable.', ref: '16.6.2' },
  { id: 'arc', court: 'Arcs', nom: 'Kit de cartographie des arcs', icone: '⚡', prix: 700, grade: 0, desc: 'Loupe, étiquettes, schéma de circuits : relevé systématique des sites d\'arc sur les conducteurs.', ref: '17.4.5' },
  { id: 'pid', court: 'PID', nom: 'Détecteur PID (photo-ionisation)', icone: '📟', prix: 900, grade: 0, desc: 'Détection de composés organiques volatils. Outil de dépistage uniquement : ne remplace jamais l\'analyse en laboratoire.', ref: '16.5.4' },
  { id: 'calc', court: 'Calcul', nom: 'Calculateur de dynamique du feu', icone: '🧮', prix: 800, grade: 0, desc: 'Puissance d\'embrasement (Thomas, Babrauskas), hauteur de flamme, compétence des sources d\'ignition.', ref: '5.10 / 20.4' },
  { id: 'osintpro', court: 'OSINT pro', nom: 'Abonnements OSINT pro', icone: '🛰️', prix: 600, grade: 0, desc: 'Registres des sociétés, archives de presse, données cadastrales avancées.', ref: '13.5 / 13.6' },
  { id: 'drone', court: 'Drone', nom: 'Drone', icone: '🚁', prix: 1500, grade: 1, desc: 'Vue aérienne et orthophotographie de la scène et des abords.', ref: '15.2' },
  { id: 'photogram', court: 'Photogram.', nom: 'Station de photogrammétrie', icone: '🧊', prix: 2500, grade: 1, desc: 'Reconstitution 3D de la scène à partir des photos : superposition des tracés et de la reconstitution dans le rapport.', ref: '15.2 / 20.4' },
  { id: 'vehicule', court: 'Véhicule', nom: 'Véhicule d\'investigation', icone: '🚐', prix: 4000, grade: 1, desc: 'Atelier mobile : ouvre les missions éloignées et les feux de véhicules.', ref: '25' },
  { id: 'k9', court: 'K9', nom: 'Partenariat équipe cynophile', icone: '🐕', prix: 1200, grade: 2, desc: 'Chien de détection d\'accélérants : oriente les prélèvements, ne vaut jamais résultat de laboratoire.', ref: '16.5.4' },
  { id: 'labo', court: 'Labo', nom: 'Laboratoire interne', icone: '🔬', prix: 8000, grade: 2, desc: 'Analyses à moitié prix : GC-MS, examen des conducteurs, radiographie d\'objets.', ref: '16.10' },
];

export const CONTENANTS = [
  { id: 'sachetPE', nom: 'Sachet plastique polyéthylène', base: true },
  { id: 'sachetPapier', nom: 'Sachet / enveloppe papier', base: true },
  { id: 'carton', nom: 'Boîte carton rigide', base: true },
  { id: 'potMetal', nom: 'Pot métallique neuf (type pot de peinture)', outil: 'pots' },
  { id: 'bocal', nom: 'Bocal en verre à couvercle étanche', outil: 'pots' },
  { id: 'sachetNylon', nom: 'Sachet nylon / polyester spécial incendie', outil: 'pots' },
];

export const GRADES = [
  { n: 0, nom: 'Enquêteur stagiaire', xp: 0 },
  { n: 1, nom: 'Enquêteur RCCI', xp: 400 },
  { n: 2, nom: 'Enquêteur confirmé', xp: 1200 },
  { n: 3, nom: 'Expert RCCI', xp: 2500 },
  { n: 4, nom: 'Expert près la cour d\'appel', xp: 5000 },
];
