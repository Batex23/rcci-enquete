// Niveau 5 — Feu de véhicule en pleine nuit dans une allée : deux foyers au sol, essence, vidéo de voisinage
export default {
  id: 'vl-nuit',
  version: 1,
  ordre: 5,
  requiert: 'garage-vae',
  outilRequis: 'vehicule',
  titre: 'Véhicule Lambert — feu nocturne',
  titreCourt: 'Feu de véhicule',
  niveauLabel: 'Niveau 5 · Véhicule',
  type: 'vehicule',
  difficulte: 5,
  gradeMin: 1,
  recompense: { credits: 6000, bonusMax: 3000, xp: 1200 },
  resume: 'Une citadine a brûlé dans l\'allée d\'un pavillon à 3 h du matin. Un rappel constructeur, une menace, une rumeur… et deux zones brûlées au sol.',
  intro: 'Niveau 5 : ton premier <b>feu de véhicule</b>. Ici, la question « volontaire ou accidentel ? » se pose vraiment. Rappelle-toi : on ne conclut à un incendie volontaire qu\'avec des <b>faits matériels</b>, jamais par élimination ni sur un mobile. Et <b>qui</b> a mis le feu n\'est pas ta question : la tienne, c\'est <b>comment</b>.',

  mission: {
    mandant: 'Assureur automobile — cabinet d\'expertise Aquitaine',
    reference: 'EXP-26-5390',
    dateSinistre: 'Nuit du 9 au 10 novembre 2026',
    heureAlerte: '03h19 (voisin)',
    adresse: '27 rue des Acacias, 33610 Lescourre (commune fictive)',
    ordre: 'Déterminer l\'origine et la cause de l\'incendie du véhicule de Mme Lambert (citadine « Ondine 1.2 », marque fictive), stationné dans l\'allée de son domicile, et des dégâts causés à la façade.',
    preservation: 'Véhicule laissé en place, périmètre balisé. Batterie non déconnectée. Enquête judiciaire ouverte (plainte de la propriétaire).',
  },
  rapportSdis: [
    '03h19 — Appel 18 d\'un voisin : « une voiture brûle, ça a fait whoump ».',
    '03h31 — Arrivée : véhicule en feu, deux foyers bien distincts au niveau de la roue avant gauche et de la roue arrière droite. Volet de la maison en feu.',
    '03h33 — Extinction à la lance (eau + mousse), protection de la façade.',
    '03h45 — Feu éteint. Odeur d\'essence au sol signalée. Pas de victime.',
  ],
  meteo: 'Nuit fraîche (6 °C), sèche, vent faible d\'ouest.',

  securite: {
    ref: '25.2 / 12.3',
    options: [
      { id: 'epi', t: 'Casque, gants, protection respiratoire, chaussures de sécurité', ok: true },
      { id: 'batt', t: 'Considérer le circuit 12 V sous tension (batterie non déconnectée) et les vérins de hayon / airbags non déclenchés', ok: true },
      { id: 'pneu', t: 'Se méfier des jantes et pièces encore chaudes, des arêtes coupantes', ok: true },
      { id: 'pid', t: 'Débrancher la batterie avant toute photo pour gagner du temps', ok: false, fb: 'Toute intervention se documente d\'abord : on photographie la batterie et ses cosses en place, puis on la déconnecte si nécessaire (NFPA 921, chap. 25.2 et 15.2).' },
    ],
  },

  batiment: {
    hauteur: 2.5, epaisseur: 0.18,
    allee: { x: 15, z: 0, w: 2.6, d: 9 },
    toiture: { axe: 'x', x0: 0, x1: 10, z0: 0, z1: 8, altitude: 2.5, hauteur: 1.9, debord: 0.3, couleur: '#a5583a' },
    niveaux: [
      { id: 'rdc', nom: 'Rez-de-chaussée', altitude: 0, hauteur: 2.5,
        pieces: [
          { id: 'maison', nom: 'Maison', x: 0, z: 0, w: 10, d: 8, sol: 'carrelage', peinture: '#e8e1d0', couche: 2.4, suie: 0 },
          { id: 'allee', nom: 'Allée', x: 10.2, z: 0.5, w: 4.8, d: 7, sol: 'enrobe', ouverte: true, peinture: '#888', couche: 2.5, suie: 0 },
        ],
        ouvertures: [
          { type: 'fenetre', x: 10, z: 3.0, axe: 'v', w: 1.4, h: 1.25, allege: 0.9 },
          { type: 'porte', x: 10, z: 6.4, axe: 'v', w: 0.9, h: 2.1 },
          { type: 'fenetre', x: 5, z: 8, axe: 'h', w: 1.4, h: 1.2, allege: 0.9 },
        ],
        objets: [
          { id: 'vl', type: 'voiture', x: 12.6, z: 3.6, rot: 0, brule: 0.5, pneusBrules: ['avg', 'ard'], vitresBrisees: true },
          { id: 'bidon', type: 'bidon', x: 16.1, z: 7.6, couche: 1, brule: 0.3 },
          { id: 'poubelle', type: 'poubelle', x: 14.6, z: 0.9, brule: 0 },
        ],
        traces: [
          { piece: 'allee', cote: 'sol', type: 'irregulier', x: 14.1, z: 2.5, rx: 0.75, rz: 0.55, seed: 13 },
          { piece: 'allee', cote: 'sol', type: 'irregulier', x: 11.3, z: 4.7, rx: 0.7, rz: 0.5, seed: 29 },
          { piece: 'maison', cote: 'E', type: 'V', u: 3.0, y0: 0.3, angle: 34, force: 0.6 },
        ],
        tremies: [],
      },
    ],
  },

  zones: [
    { id: 'abords', nom: 'Rue et abords', exterieur: true, rang: 0, cible: [13, 0.5, 4.5], zoom: 0.8, azimut: 120, toiture: 'visible', desc: 'Rue, trottoir, caniveau, maisons voisines.' },
    { id: 'facade', nom: 'Façade', exterieur: true, rang: 0, cible: [10.1, 1.2, 3.5], zoom: 1.5, azimut: 100, toiture: 'visible' },
    { id: 'tour', nom: 'Tour du véhicule', rang: 1, cible: [12.6, 0.6, 3.6], zoom: 1.5, azimut: 140, toiture: 'visible' },
    { id: 'moteur', nom: 'Moteur', rang: 2, cible: [14.0, 0.8, 3.6], zoom: 2.3, azimut: 110, toiture: 'visible' },
    { id: 'habitacle', nom: 'Habitacle', rang: 2, cible: [12.4, 1.0, 3.6], zoom: 2.2, azimut: 150, toiture: 'visible' },
    { id: 'avg', nom: 'Roue AV gauche', rang: 4, cible: [13.9, 0.2, 2.6], zoom: 2.4, azimut: 60, toiture: 'visible' },
    { id: 'ard', nom: 'Roue AR droite', rang: 4, cible: [11.3, 0.2, 4.6], zoom: 2.4, azimut: 200, toiture: 'visible' },
  ],

  observations: [
    { id: 'V01', zone: 'abords', pos: [16.1, 0.15, 7.6], titre: 'Un bidon dans le caniveau',
      description: 'Bidon plastique de 1 L, vide, déformé par la chaleur sur une face, sans bouchon, dans le caniveau à 5 m de l\'avant du véhicule. Odeur d\'essence.',
      analyse: { question: 'Que fais-tu de ce bidon ?', ref: '16.2 / 16.5', options: [
        { t: 'Je le documente en place puis je le prélève : il peut être lié au feu, le labo dira ce qu\'il contenait.', ok: true, fb: 'Exact : un objet suspect se photographie, se localise et se prélève, sans conclure avant les analyses.' },
        { t: 'C\'est la preuve d\'un incendie volontaire.', ok: false, fb: 'Pas seul : un bidon dans un caniveau peut avoir mille explications. Il faut le relier à la scène par des faits.' },
        { t: 'Un déchet sans intérêt.', ok: false, fb: 'Un bidon sentant l\'essence près d\'un véhicule incendié se documente toujours.' },
      ] },
      prelevement: 'P3' },
    { id: 'V02', zone: 'abords', pos: [17.6, 1.4, 1.0], titre: 'Une sonnette vidéo en face',
      description: 'La maison d\'en face (M. Haddad) est équipée d\'une sonnette vidéo orientée vers la rue et l\'allée.',
      analyse: { question: 'Comment l\'exploites-tu ?', ref: '13.6 / 16.2', options: [
        { t: 'Une source à demander rapidement à son propriétaire (ou via l\'OPJ), en vérifiant l\'horodatage de l\'appareil.', ok: true, fb: 'Oui : les images s\'effacent vite, et une horloge d\'appareil est souvent décalée.' },
        { t: 'Inutile : une caméra de particulier n\'a pas de valeur.', ok: false, fb: 'Au contraire : c\'est une donnée objective, à exploiter avec méthode.' },
      ] } },
    { id: 'V03', zone: 'facade', pos: [10.05, 1.1, 3.0], titre: 'Le volet de la fenêtre',
      description: 'Volet roulant en PVC fondu en partie basse et affaissé. Vitrage derrière le volet intact, simplement noirci. Tracé en V peu marqué sur l\'enduit, depuis le sol.',
      thermo: { items: [
        { mat: 'pvc', etat: 'fondu', objet: 'Volet roulant (PVC), partie basse' },
        { mat: 'verre', etat: 'intact', objet: 'Vitrage de la fenêtre, noirci mais non coulé' },
      ], fb: 'Exact : la façade a reçu le rayonnement du véhicule (plus de ≈ 90 °C) sans être embrasée (moins de ≈ 750 °C). Les dégâts de la maison sont une conséquence.' } },
    { id: 'V04', zone: 'tour', pos: [12.6, 1.5, 3.6], titre: 'Vue d\'ensemble du véhicule',
      description: 'Carrosserie atteinte de façon hétérogène : aile avant gauche et aile arrière droite brûlées à nu ; flanc avant droit et arrière gauche peu atteints, peinture encore présente. Vitres effondrées, toit noirci.',
      analyse: { question: 'Que retiens-tu de ce premier tour ?', ref: '25.8 / 17.4.1', options: [
        { t: 'Deux zones de dégâts maximaux non contiguës, en diagonale : à expliquer avant toute hypothèse.', ok: true, fb: 'Exact : il faut comprendre comment deux zones opposées ont pu brûler le plus.' },
        { t: 'Le feu est parti du moteur, puis a fait le tour.', ok: false, fb: 'L\'avant droit est peu atteint : un feu parti du moteur n\'aurait pas « sauté » vers l\'arrière droit.' },
        { t: 'Un véhicule brûle toujours de façon homogène, rien à en tirer.', ok: false, fb: 'Au contraire : l\'hétérogénéité des dégâts est la première donnée à exploiter.' },
      ] } },
    { id: 'V05', zone: 'tour', pos: [13.9, 0.35, 3.6], titre: 'Les quatre pneus',
      description: 'Pneus avant gauche et arrière droit entièrement consumés. Pneus avant droit et arrière gauche intacts et encore gonflés. Sous le véhicule, entre les deux roues brûlées, l\'enrobé est propre.',
      analyse: { question: 'Comment lis-tu ces pneus ?', ref: '25.10 / 22.2.1', options: [
        { t: 'Deux foyers au niveau du sol, indépendants : aucun chemin de propagation entre eux sous le véhicule.', ok: true, fb: 'Exact : deux feux séparés, sans lien physique, sont un indicateur d\'incendie volontaire à confirmer par d\'autres faits (NFPA 921, chap. 22.2.1).' },
        { t: 'Les pneus brûlent au hasard pendant un feu de véhicule.', ok: false, fb: 'Pas au hasard : un pneu brûle quand le feu l\'atteint. Ici, ses voisins sont intacts.' },
        { t: 'Le feu a couru sous la voiture d\'une roue à l\'autre.', ok: false, fb: 'L\'enrobé est propre entre les deux roues : pas de propagation au sol.' },
      ] } },
    { id: 'V06', zone: 'tour', pos: [13.9, 0.25, 2.75], titre: 'Jante et frein avant gauche',
      description: 'Jante avant gauche en alliage d\'aluminium fondue en flaque. Disque de frein en fonte intact, oxydé.',
      thermo: { items: [
        { mat: 'alualliage', etat: 'fondu', objet: 'Jante avant gauche (alliage d\'aluminium)' },
        { mat: 'fonte', etat: 'intact', objet: 'Disque de frein (fonte)' },
      ], fb: 'Exact : plus de ≈ 600 °C, moins de ≈ 1 350 °C. Une jante en aluminium fond dans la plupart des feux de pneu : ce n\'est pas une preuve d\'accélérant.' } },
    { id: 'V07', zone: 'moteur', pos: [14.2, 0.9, 3.6], titre: 'Le compartiment moteur',
      description: 'Dégâts concentrés côté gauche, contre le passage de roue avant gauche : durites et faisceau fondus de ce côté. Côté droit : bocal de lave-glace (polyéthylène) intact, gaines du faisceau intactes.',
      analyse: { question: 'Le feu est-il né dans le moteur ?', ref: '25.8 / 17.4.2', options: [
        { t: 'Non : il y est entré par le passage de roue avant gauche, de l\'extérieur vers l\'intérieur.', ok: true, fb: 'Exact : les dégâts décroissent depuis le passage de roue gauche vers le côté droit.' },
        { t: 'Oui : le faisceau électrique a pris feu au centre du moteur.', ok: false, fb: 'Le côté droit est intact, y compris le faisceau : rien n\'est né au centre.' },
      ] } },
    { id: 'V08', zone: 'moteur', outil: 'arc', pos: [13.8, 0.75, 3.0], titre: 'Cartographie du faisceau et de la batterie',
      indice: 'Batterie, câbles et faisceau sont accessibles. Un kit de cartographie des arcs permettrait un relevé.',
      description: 'Batterie en place, cosses serrées. Un seul arc, sur le faisceau d\'éclairage qui longe le passage de roue avant gauche. Aucun arc sur le faisceau côté droit (objet du rappel constructeur), ni sur le câble de démarreur.',
      analyse: { question: 'Qu\'en conclus-tu ?', ref: '17.4.5 / 25.5.3', options: [
        { t: 'Le faisceau sous tension a été atteint là où le feu extérieur est entré : arc de conséquence. Le faisceau du rappel n\'a rien.', ok: true, fb: 'Exact : la cartographie situe l\'attaque du feu, elle n\'en fait pas une cause.' },
        { t: 'L\'arc prouve une défaillance électrique.', ok: false, fb: 'Un arc montre qu\'un conducteur était sous tension quand le feu l\'a atteint.' },
      ] } },
    { id: 'V09', zone: 'habitacle', pos: [12.4, 0.9, 3.6], titre: 'L\'habitacle',
      description: 'Siège conducteur brûlé côté porte, tapis arrière droit brûlé près de la porte ; console et tableau de bord ramollis en partie haute seulement. Cendrier vide et propre. Vitres latérales gauche avant et droite arrière effondrées en premier selon les secours.',
      analyse: { question: 'Le feu est-il parti de l\'habitacle ?', ref: '25.8 / 17.4.1', options: [
        { t: 'Non : il y est entré par deux points opposés, près des deux roues brûlées.', ok: true, fb: 'Exact : les dégâts les plus forts de l\'habitacle sont contre les deux zones extérieures.' },
        { t: 'Oui : une cigarette sur le siège conducteur.', ok: false, fb: 'Cendrier propre, véhicule arrêté depuis 5 h et dégâts venant de l\'extérieur : rien ne l\'indique.' },
      ] } },
    { id: 'V10', zone: 'habitacle', pos: [12.9, 1.2, 3.3], titre: 'Boucle de ceinture et rétroviseur',
      description: 'Boucle de ceinture conducteur (zamac) fondue. Miroir du rétroviseur intérieur intact, noirci.',
      thermo: { items: [
        { mat: 'zamac', etat: 'fondu', objet: 'Boucle de ceinture conducteur (zamac)' },
        { mat: 'verre', etat: 'intact', objet: 'Miroir du rétroviseur intérieur' },
      ], fb: 'Exact : au moins ≈ 380 °C au poste de conduite, moins de ≈ 750 °C au rétroviseur : l\'habitacle a brûlé, sans embrasement complet.' } },
    { id: 'V11', zone: 'avg', pos: [14.1, 0.03, 2.5], titre: 'L\'enrobé sous la roue avant gauche',
      description: 'Zone d\'enrobé ramollie et décolorée en forme de flaque, débordant largement hors du passage de roue, à bords nets. Forte odeur d\'hydrocarbure.',
      analyse: { question: 'Comment lis-tu cette tache ?', ref: '6.3.7.8 / 16.5.4', options: [
        { t: 'Compatible avec un liquide répandu au sol puis enflammé : à confirmer au labo, avec un échantillon de comparaison (l\'enrobé contient lui-même des hydrocarbures).', ok: true, fb: 'Exact : une forme de flaque ne prouve rien seule. Le labo, avec un témoin d\'enrobé non brûlé, tranchera.' },
        { t: 'C\'est la preuve d\'un accélérant.', ok: false, fb: 'Non : le pneu qui fond et brûle laisse aussi des taches. Seule l\'analyse avec comparaison peut le dire.' },
        { t: 'De l\'huile moteur qui a coulé.', ok: false, fb: 'Le carter est intact et la tache déborde hors de l\'aplomb du moteur.' },
      ] },
      prelevement: 'P1' },
    { id: 'V12', zone: 'avg', couche: 1, pos: [14.3, 0.04, 2.3], titre: 'Un bouchon fondu',
      description: 'Sous les débris de caoutchouc du pneu : un bouchon à vis en plastique, en partie fondu, collé à l\'enrobé.',
      analyse: { question: 'Que fais-tu de ce bouchon ?', ref: '16.2 / 16.10.4', options: [
        { t: 'Je le prélève pour le comparer au bidon du caniveau.', ok: true, fb: 'Exact : un examen comparatif peut relier deux objets.' },
        { t: 'Il vient forcément du véhicule.', ok: false, fb: 'Rien ne l\'indique : aucun bouchon du véhicule ne manque.' },
      ] },
      prelevement: 'P2' },
    { id: 'V13', zone: 'ard', pos: [11.3, 0.03, 4.75], titre: 'L\'enrobé sous la roue arrière droite',
      description: 'Seconde tache en forme de flaque sous et autour de la roue arrière droite, séparée de la première par 2,5 m d\'enrobé propre sous le véhicule. Aucune coulure depuis le réservoir.',
      analyse: { question: 'Que t\'apprend cette seconde tache ?', ref: '22.2.1 / 6.3.7.8', options: [
        { t: 'Un second foyer au sol, indépendant du premier : deux points de départ distincts.', ok: true, fb: 'Exact : sans lien physique entre elles, deux zones de départ au sol renforcent l\'hypothèse d\'une mise à feu.' },
        { t: 'Le carburant du réservoir a coulé jusque-là.', ok: false, fb: 'Aucune coulure depuis le réservoir, et l\'enrobé est propre entre les deux zones.' },
      ] } },
    { id: 'V14', zone: 'ard', pos: [11.0, 0.45, 3.6], titre: 'Le réservoir et les conduites',
      description: 'Réservoir en plastique à l\'arrière : intact, bouchon de remplissage verrouillé. Conduites de carburant intactes jusqu\'au compartiment moteur.',
      analyse: { question: 'Que retiens-tu ?', ref: '25.5.1 / 18.6', options: [
        { t: 'Aucune fuite du circuit de carburant du véhicule : ce n\'est pas la source du liquide au sol.', ok: true, fb: 'Exact : on écarte une piste avec des faits.' },
        { t: 'Le réservoir a fui pendant le feu.', ok: false, fb: 'Il est intact et verrouillé.' },
      ] } },
    { id: 'V15', zone: 'avg', cachee: true, outil: 'pid', pos: [14.1, 0.03, 2.5], titre: 'Lecture PID sous l\'avant gauche',
      description: 'Détecteur PID : 210 ppm au ras de l\'enrobé sous la roue avant gauche ; 35 ppm sur l\'enrobé non brûlé à 5 m.',
      analyse: { question: 'Que vaut cette mesure ?', ref: '16.5.4', options: [
        { t: 'Un dépistage : l\'enrobé lui-même dégage des hydrocarbures. Elle m\'aide à choisir où prélever, rien de plus.', ok: true, fb: 'Exact : sans laboratoire et sans comparaison, le PID ne prouve rien.' },
        { t: 'La preuve d\'un accélérant.', ok: false, fb: 'Non : même l\'enrobé intact fait réagir le PID (35 ppm).' },
      ] } },
  ],

  pid: [
    { x: 14.1, z: 2.5, r: 0.9, valeur: '210 ppm', fait: 'V15' },
    { x: 11.3, z: 4.7, r: 0.8, valeur: '160 ppm' },
    { x: 12.6, z: 6.8, r: 1.2, valeur: '35 ppm (enrobé non brûlé)' },
  ],

  fouille: {
    zone: 'avg', ref: '17.3.2',
    aire: { x: 13.4, z: 1.7, w: 1.5, d: 1.3 },
    couches: [
      { n: 1, nom: 'Débris du pneu et de l\'aile', description: 'Caoutchouc fondu, fil d\'acier des pneus, plastique de l\'aile.', h: 0.08, couleur: '#2a2522' },
    ],
  },

  prelevements: [
    { id: 'P1', nom: 'Enrobé et débris sous la roue avant gauche (recherche de liquide inflammable)', type: 'liquide', contenantsOK: ['potMetal', 'bocal', 'sachetNylon'], temoinRequis: true,
      temoin: 'Enrobé non brûlé de la même allée, à 5 m',
      analyses: [{ id: 'gcms', nom: 'Recherche de résidus de liquides inflammables (GC-MS)', cout: 300,
        resultats: {
          ok: { fait: 'VF11', texte: 'Essence partiellement évaporée identifiée (profil de carburant automobile). L\'échantillon de comparaison ne contient que les hydrocarbures lourds du bitume, sans essence.' },
          sansTemoin: { fait: 'VF11', partiel: true, texte: 'Hydrocarbures présents. L\'enrobé en contient naturellement : sans échantillon de comparaison, résultat non conclusif.' },
          mauvaisContenant: { texte: 'Échantillon non exploitable : contenant perméable aux composés volatils.' },
        } }] },
    { id: 'P2', nom: 'Bouchon à vis fondu', type: 'objet', contenantsOK: ['carton', 'sachetPapier', 'potMetal', 'sachetNylon'],
      analyses: [{ id: 'comp', nom: 'Examen comparatif avec le bidon du caniveau', cout: 250,
        resultats: { ok: { fait: 'VF12', texte: 'Même modèle de bouchon, filetage compatible avec le goulot du bidon retrouvé dans le caniveau.' } } }] },
    { id: 'P3', nom: 'Bidon de 1 L du caniveau', type: 'liquide', contenantsOK: ['potMetal', 'bocal', 'sachetNylon'],
      analyses: [{ id: 'gcms', nom: 'Identification du résidu liquide (GC-MS)', cout: 300,
        resultats: {
          ok: { fait: 'VF13', texte: 'Résidu liquide : essence (carburant automobile).' },
          mauvaisContenant: { texte: 'Résidu évaporé dans un contenant perméable : résultat non interprétable.' },
        } }] },
  ],

  temoins: [
    { id: 'T1', nom: 'Sophie Lambert', role: 'Propriétaire du véhicule (38 ans)', avatar: '👩', questions: [
      { id: 'q1', type: 'ouverte', q: 'Racontez-moi votre soirée.', r: 'Je suis rentrée vers 22h, j\'ai garé la voiture dans l\'allée, moteur coupé. Aucun voyant, rien d\'anormal. On a été réveillés vers 3h20 par la lueur et les cris du voisin.', fait: { id: 'VF1', texte: 'Véhicule arrêté depuis 22h, aucun voyant ni anomalie ; réveil vers 3h20.' } },
      { id: 'q2', type: 'ouverte', q: 'Parlez-moi de l\'entretien de la voiture.', r: 'Révision il y a trois mois. J\'avais reçu un courrier de rappel pour un câble dans le moteur ; le garage a fait l\'intervention en même temps.', fait: { id: 'VF2', texte: 'Rappel constructeur réalisé lors de la révision, trois mois avant.' } },
      { id: 'q3', type: 'ouverte', q: 'Y a-t-il eu des événements inhabituels ces derniers temps ?', r: 'Mon ex-compagnon m\'a envoyé des messages menaçants la semaine dernière. J\'ai déposé plainte.', fait: { id: 'VF3', texte: 'Messages menaçants reçus la semaine précédente ; plainte déposée.' }, info: 'Un contexte, pas une donnée sur la cause : qui a mis le feu relève de l\'enquête judiciaire, pas de la tienne.' },
      { id: 'q4', type: 'orientee', q: 'C\'est vous qui avez fait brûler votre voiture, non ?', r: '(Choquée) Pardon ?! Je viens de tout perdre et vous m\'accusez ?', fait: null, piege: 'Accuser sans élément ferme le dialogue et n\'apporte rien (NFPA 921, chap. 13.4).' },
    ] },
    { id: 'T2', nom: 'M. Haddad', role: 'Voisin d\'en face, auteur de l\'appel', avatar: '🧔', questions: [
      { id: 'q1', type: 'ouverte', q: 'Qu\'avez-vous vu ou entendu ?', r: 'Vers 3h15, un « whoump », puis des flammes de deux côtés de la voiture : devant à gauche et derrière à droite. Rien au milieu.', fait: { id: 'VF4', texte: 'Un « whoump » vers 3h15 puis deux zones de flammes séparées : avant gauche et arrière droit.' } },
      { id: 'q2', type: 'ouverte', q: 'Votre sonnette vidéo a-t-elle enregistré quelque chose ?', r: 'Oui, je vous montre. Attention, l\'horloge de l\'appareil avance de 7 minutes, je ne l\'ai jamais réglée.', fait: { id: 'VF6', texte: 'Vidéo (heure corrigée de −7 min) : vers 3h12, une personne s\'accroupit près de l\'avant gauche puis de l\'arrière droit avec un bidon ; deux lueurs successives ; elle s\'enfuit.' } },
      { id: 'q3', type: 'orientee', q: 'Elle avait des soucis d\'argent, votre voisine, non ?', r: 'Ah… peut-être, on dit qu\'elle a perdu son travail…', fait: { id: 'VF8', texte: 'Rumeur de difficultés financières de la propriétaire (sur suggestion).', contamine: true }, piege: 'Question orientée et rumeur : un mobile supposé n\'est ni un fait matériel ni une cause.' },
    ] },
    { id: 'T3', nom: 'Adjudant Moreau', role: 'Chef d\'agrès', avatar: '🧑‍🚒', questions: [
      { id: 'q1', type: 'ouverte', q: 'Que s\'est-il passé à votre arrivée ?', r: 'Deux foyers bien distincts, au niveau des pneus avant gauche et arrière droit. L\'habitacle a pris ensuite. Odeur d\'essence au sol. Le capot était froid côté droit quand on l\'a ouvert.', fait: { id: 'VF7', texte: 'Deux foyers distincts au niveau des pneus avant gauche et arrière droit ; odeur d\'essence ; capot froid côté droit.' } },
    ] },
  ],

  osint: [
    { id: 'O1', source: 'rappel', motsCles: [['ondine'], ['rappel', 'faisceau'], ['rappel', 'voiture'], ['rappel', 'vehicule']], titre: 'RappelConso — « Ondine 1.2 » (marque fictive), faisceau moteur',
      extrait: 'Risque d\'échauffement du faisceau électrique côté droit du compartiment moteur. Intervention gratuite en atelier.',
      fait: { id: 'VF9', texte: 'Rappel constructeur : risque d\'échauffement du faisceau côté droit du compartiment moteur.' }, fiabilite: 'Source officielle — à confronter à la scène.' },
    { id: 'O2', source: 'reseaux', motsCles: [['lambert'], ['menace'], ['ex']], titre: 'Réseau social — publication publique d\'un tiers',
      extrait: 'Message publié trois jours avant le sinistre : « Tu vas voir ce qui va t\'arriver. »',
      fait: { id: 'VF10', texte: 'Publication menaçante d\'un tiers, trois jours avant.' }, fiabilite: 'Source ouverte — contexte, ne renseigne pas sur la cause physique.', piege: true },
    { id: 'O3', source: 'meteo', motsCles: [['meteo'], ['météo'], ['orage'], ['foudre']], titre: 'Archives météo · 9/10 novembre',
      extrait: 'Nuit fraîche et sèche, aucune activité orageuse.',
      fait: { id: 'VF14', texte: 'Aucun orage cette nuit-là.' }, fiabilite: 'Source institutionnelle.' },
  ],

  hypotheses: {
    origines: [
      { id: 'VO1', nom: 'Deux foyers au sol : sous la roue avant gauche et sous la roue arrière droite', pos: [12.7, 0.05, 3.6], ok: true, soutien: ['V04', 'V05', 'V11', 'V13', 'V07', 'V09', 'VF4', 'VF7'], refute: [] },
      { id: 'VO2', nom: 'Compartiment moteur (faisceau électrique)', pos: [14.2, 0.8, 3.6], soutien: ['VF9'], refute: ['V07', 'V08', 'V05'] },
      { id: 'VO3', nom: 'Habitacle (poste de conduite)', pos: [12.4, 0.8, 3.6], soutien: [], refute: ['V09', 'V05'] },
      { id: 'VO4', nom: 'Réservoir et circuit de carburant', pos: [11.0, 0.4, 3.6], soutien: [], refute: ['V14'] },
    ],
    causes: [
      { id: 'VC1', nom: 'Mise à feu volontaire : essence répandue au sol près de deux roues, puis enflammée', premierCombustible: 'Essence répandue au sol, puis pneus', source: 'Flamme nue', classification: 'volontaire', ok: true, origine: 'VO1',
        soutien: ['V05', 'V11', 'V13', 'VF11', 'VF12', 'VF13', 'VF6', 'VF4', 'VF7'], refute: [], competence: { source: 'Flamme de diffusion', combustible: 'Polyéthylène' } },
      { id: 'VC2', nom: 'Défaillance du faisceau électrique visé par le rappel constructeur', premierCombustible: 'Gaines du faisceau', source: 'Échauffement électrique', classification: 'accidentelle', origine: 'VO2', soutien: ['VF9'], refute: ['V07', 'V08', 'VF2'] },
      { id: 'VC3', nom: 'Fuite de carburant du véhicule enflammée au contact d\'une partie chaude', premierCombustible: 'Carburant du véhicule', source: 'Échappement chaud', classification: 'accidentelle', origine: 'VO4', soutien: [], refute: ['V14', 'VF1'] },
      { id: 'VC4', nom: 'Article de fumeur oublié dans l\'habitacle', premierCombustible: 'Siège conducteur', source: 'Cigarette', classification: 'accidentelle', origine: 'VO3', soutien: [], refute: ['V09', 'VF1'] },
    ],
  },

  solution: {
    origine: 'VO1', cause: 'VC1', classification: 'volontaire', certitude: 'probable',
    probableSi: { tous: ['V05', 'V11'], unParmi: [['VF11'], ['VF6', 'VF12', 'VF13']] },
    faitsCles: ['V05', 'V11', 'V13', 'V14', 'VF11', 'VF6', 'VF4'],
    pieges: [
      { id: 'rappel', titre: 'Le rappel constructeur', ref: '25.4 / 18.6', texte: 'Un rappel décrit un risque, pas ce qui s\'est passé : le faisceau visé (côté droit) est intact et sans arc.', faits: ['VF9'], cause: 'VC2' },
      { id: 'jante', titre: 'La jante en aluminium fondue', ref: '6.2.2.2', texte: 'Une jante en aluminium fond dans un simple feu de pneu : une température élevée ne prouve pas un accélérant.', faits: ['V06'] },
      { id: 'mobile', titre: 'Le mobile supposé', ref: '19.5 / 13.4', texte: 'Une menace ou une rumeur de dettes ne renseignent pas sur la cause physique : l\'enquêteur RCCI démontre comment, pas qui.', faits: ['VF8', 'VF10', 'VF3'] },
      { id: 'pidenrobe', titre: 'Le PID sur l\'enrobé', ref: '16.5.4', texte: 'L\'enrobé contient des hydrocarbures : le PID et même le labo sans échantillon de comparaison ne prouvent rien.', faits: ['V15'] },
    ],
  },

  reconstitution: [
    { t: '22:00', titre: 'Véhicule garé dans l\'allée, moteur coupé.', feu: 0, fumee: {} },
    { t: '03:12', titre: 'Une personne répand de l\'essence au sol près de la roue avant gauche puis de la roue arrière droite.', feu: 0, fumee: {} },
    { t: '03:13', titre: 'Deux mises à feu successives : « whoump », pneus en feu aux deux endroits.', feu: 0.5, fumee: {} },
    { t: '03:20', titre: 'Le feu entre dans le compartiment moteur par le passage de roue gauche et dans l\'habitacle par les vitres ; le volet de la maison fond.', feu: 0.9, fumee: {} },
    { t: '03:45', titre: 'Feu éteint par les secours.', feu: 0, fumee: {} },
  ],
  dynamique: { piece: 'allee', L: 4.1, l: 1.75, H: 1.5, ouvertures: [{ nom: 'Plein air', w: 4, h: 1.5 }], combustible: 'Véhicule de tourisme' },
};
