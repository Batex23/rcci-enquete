// Référentiel NFPA 921 — édition 2011 (numérotation des chapitres de cette édition).
// Les textes sont des reformulations pédagogiques en français, pas des citations de la norme.

export const NFPA_EDITION = 'NFPA 921 — édition 2011';

export const METHODE_SCIENTIFIQUE = [
  { id: 'besoin',    ref: '4.3.1', titre: 'Reconnaître le besoin',      texte: 'Un incendie a eu lieu : il faut en déterminer l\'origine et la cause pour prévenir sa répétition.' },
  { id: 'probleme',  ref: '4.3.2', titre: 'Définir le problème',         texte: 'Planifier l\'enquête : mission, sécurité, moyens, sources d\'information disponibles.' },
  { id: 'collecte',  ref: '4.3.3', titre: 'Collecter les données',       texte: 'Données empiriques : constatations, photos, fouille, témoins, sources ouvertes, analyses.' },
  { id: 'analyse',   ref: '4.3.4', titre: 'Analyser les données',        texte: 'Cataloguer n\'est pas analyser. Chaque donnée doit être interprétée avant toute hypothèse finale.' },
  { id: 'hypothese', ref: '4.3.5', titre: 'Développer des hypothèses',   texte: 'Raisonnement inductif : des hypothèses fondées uniquement sur les données collectées.' },
  { id: 'test',      ref: '4.3.6', titre: 'Tester les hypothèses',       texte: 'Raisonnement déductif : confronter chaque hypothèse à TOUTES les données, chercher ce qui la réfute.' },
  { id: 'final',     ref: '4.3.6 / 18.7', titre: 'Sélectionner l\'hypothèse finale', texte: 'Ne retenir que l\'hypothèse qui résiste aux tests, à l\'exclusion des autres hypothèses raisonnables.' },
];

export const CHAPITRES = [
  { n: 4,  titre: 'Méthodologie de base', cle: [
    ['4.3', 'Méthode scientifique : besoin → problème → données → analyse → hypothèse (induction) → test (déduction) → hypothèse finale.'],
    ['4.3.7', 'Éviter la présomption : aucune hypothèse arrêtée avant la collecte des données.'],
    ['4.3.8', 'Biais d\'attente : arriver avec une conclusion préconçue et ne voir que ce qui la conforte.'],
    ['4.3.9', 'Biais de confirmation : ne pas chercher à réfuter son hypothèse, écarter les données gênantes.'],
    ['4.5', 'Niveau de certitude : « probable » (> 50 %) ou « possible » (faisable mais non démontré). « Suspecté » n\'est pas une opinion d\'expert.'],
    ['4.6', 'Revue : administrative, technique, par les pairs.'],
  ]},
  { n: 5,  titre: 'Science du feu', cle: [
    ['5.5', 'Transferts thermiques : conduction, convection, rayonnement.'],
    ['5.6', 'Charge calorifique, puissance (HRR), propriétés des flammes.'],
    ['5.7', 'Inflammation : énergie, durée d\'exposition, inertie thermique du combustible.'],
    ['5.10', 'Développement en compartiment : feu croissant, couche chaude, embrasement généralisé (flashover), feu ventilé.'],
    ['5.12', 'Cheminements des fumées dans le bâtiment.'],
  ]},
  { n: 6,  titre: 'Tracés et indices (fire patterns)', cle: [
    ['6.2', 'Effets du feu : perte de masse, carbonisation, écaillage, oxydation, couleurs, fusion, déformation, suie, clean burn, calcination, verre, ressorts, ampoules, victimes.'],
    ['6.2.5', 'Écaillage (spalling) du béton/enduit : causes multiples, n\'est pas en soi un indicateur de liquide inflammable.'],
    ['6.2.13', 'Verre : le faïençage (crazing) résulte d\'un refroidissement brutal (eau d\'extinction), pas d\'un feu « rapide ».'],
    ['6.2.14', 'Ressorts affaissés : indicateur à utiliser avec prudence (durée/intensité d\'exposition).'],
    ['6.3.2', 'Origines des tracés : panache, ventilation, couche chaude, embrasement généralisé, extinction.'],
    ['6.3.4', 'Ombres thermiques et zones protégées : renseignent sur la position des objets pendant le feu.'],
    ['6.3.7', 'Géométries : V, cône inversé, sablier, U, cône tronqué, flèches/pointeurs, circulaires, irréguliers, linéaires, de surface, brûlures en selle.'],
    ['6.3.7.8', 'Tracés irréguliers au sol : fréquents après embrasement généralisé ; ne prouvent pas à eux seuls un liquide inflammable.'],
  ]},
  { n: 8,  titre: 'Électricité et incendie', cle: [
    ['8.6', 'Protections contre les surintensités (disjoncteurs, fusibles).'],
    ['8.9', 'Inflammation par énergie électrique : arcs, échauffements, mauvais contacts.'],
    ['8.11', 'Fusion par arc vs fusion par le feu : perle localisée à limite nette vs fusion étendue, gouttes, amincissements.'],
    ['8.11.5', 'Conducteurs entaillés ou écrasés : réduction de section, échauffement, dégradation de l\'isolant.'],
  ]},
  { n: 12, titre: 'Sécurité', cle: [
    ['12.2', 'Sécurité générale de la scène : ne jamais travailler seul, évaluer avant d\'entrer.'],
    ['12.3', 'Dangers : structure, électricité, gaz, atmosphère, chutes, contaminants.'],
    ['12.6', 'EPI adaptés : protection respiratoire, gants, casque, chaussures, combinaison.'],
  ]},
  { n: 13, titre: 'Sources d\'information', cle: [
    ['13.3', 'Formes d\'information : orale, écrite, visuelle, électronique.'],
    ['13.4', 'Entretiens : préparer, questions ouvertes, documenter, ne pas orienter le témoin.'],
    ['13.5 / 13.6', 'Sources publiques et privées (météo, réseaux, archives, données techniques).'],
  ]},
  { n: 15, titre: 'Documentation', cle: [
    ['15.2', 'Photographie : avant toute modification, du général au particulier, numérotée et référencée.'],
    ['15.3', 'Prise de notes.'],
    ['15.4', 'Croquis et plans.'],
    ['15.5', 'Rapports.'],
  ]},
  { n: 16, titre: 'Indices matériels', cle: [
    ['16.3', 'Préservation de la scène et des indices.'],
    ['16.4', 'Contamination : outils propres, gants changés, échantillons séparés.'],
    ['16.5.4', 'Prélèvements pour recherche d\'accélérants : avec échantillon de comparaison.'],
    ['16.6.2', 'Contenants pour liquides : pots métalliques neufs, bocaux verre, sachets spéciaux (nylon/polyester). Pas de sachet polyéthylène.'],
    ['16.9', 'Chaîne de traçabilité (scellés).'],
  ]},
  { n: 17, titre: 'Détermination de l\'origine', cle: [
    ['17.3.1.3', 'Ordre d\'examen : des zones les moins endommagées vers les plus endommagées, de l\'extérieur vers l\'intérieur.'],
    ['17.3.1.7', 'Modifications post-incendie (extinction, déblai, ouverture forcée par les secours).'],
    ['17.3.2', 'Fouille et reconstitution : enlèvement par couches, documentation de chaque couche, éviter la spoliation.'],
    ['17.3.3.1', 'Conditions avant le sinistre : photos, témoignages, aménagement.'],
    ['17.4.2', 'Analyse des vecteurs de chaleur et de flamme.'],
    ['17.4.3', 'Relevé de profondeur de carbonisation.'],
    ['17.4.4', 'Relevé de profondeur de calcination.'],
    ['17.4.5', 'Cartographie des arcs : l\'arc le plus en amont d\'un circuit renseigne sur la zone d\'origine.'],
    ['17.4.1.4', 'La ventilation peut créer des tracés intenses loin de l\'origine.'],
  ]},
  { n: 18, titre: 'Détermination de la cause', cle: [
    ['18.3', 'Collecte : combustibles, source et forme de chaleur, objets et activités dans la zone d\'origine.'],
    ['18.4.2', 'Compétence de la source d\'ignition vis-à-vis du premier combustible.'],
    ['18.6.5', 'Usage inapproprié de l\'élimination (« negative corpus ») : on ne conclut jamais à une source sans élément qui la démontre.'],
    ['18.6.5.1', 'Si toutes les hypothèses sont éliminées : la cause est indéterminée.'],
    ['18.7', 'Hypothèse finale : rendre compte de toutes les données et exclure les autres hypothèses raisonnables.'],
  ]},
  { n: 19, titre: 'Classification', cle: [
    ['19.2.1', 'Classifications : accidentelle, naturelle, volontaire (incendiary), indéterminée. « Suspecte » n\'est pas une classification.'],
    ['19.2.1', 'Si le niveau de certitude n\'est que « possible », la classification doit être « indéterminée ».'],
  ]},
  { n: 20, titre: 'Outils d\'analyse', cle: [
    ['20.2', 'Chronologies (time lines).'],
    ['20.4', 'Modélisation mathématique (corrélations, modèles de zone, CFD type FDS).'],
    ['20.5', 'Essais au feu.'],
  ]},
  { n: 22, titre: 'Incendies volontaires', cle: [
    ['22.2.1', 'Foyers multiples (à distinguer des propagations, chutes de matières, etc.).'],
    ['22.2.2', 'Traînées (trailers).'],
    ['22.2.3', 'Absence de combustible ou de source attendus dans la zone d\'origine.'],
    ['22.3', 'Indicateurs non liés à la combustion : à manier avec prudence, ils ne déterminent pas une cause.'],
  ]},
  { n: 23, titre: 'Décès et blessures', cle: [
    ['23.2', 'Mécanismes : CO, HCN, hyperthermie, brûlures, inhalation, hypoxie.'],
    ['23.5', 'Scènes avec décès : documentation, position, équipe pluridisciplinaire.'],
  ]},
  { n: 25, titre: 'Feux de véhicules', cle: [
    ['25.7', 'Documentation de la scène du véhicule.'],
    ['25.8', 'Examen du véhicule : systèmes, commandes, contacteurs.'],
    ['25.9', 'Destructions totales.'],
  ]},
];

// Glossaire des tracés utilisés dans les analyses
export const TRACES = [
  { id: 'V', nom: 'Tracé en V', ref: '6.3.7.1', def: 'Panache contre une paroi verticale ; le sommet bas du V oriente vers le foyer, l\'angle dépend de la puissance, de la ventilation et de la paroi.' },
  { id: 'coneInverse', nom: 'Cône inversé (triangle)', ref: '6.3.7.2', def: 'Feu de courte durée ou n\'ayant pas atteint le plafond.' },
  { id: 'couche', nom: 'Démarcation de couche chaude', ref: '6.3.2.3', def: 'Ligne horizontale de suie/dégâts correspondant à l\'interface de la couche de gaz chauds.' },
  { id: 'ventilation', nom: 'Tracé de ventilation', ref: '6.3.2.2', def: 'Combustion accrue près des ouvrants (apport d\'air), parfois loin de l\'origine.' },
  { id: 'embrasement', nom: 'Tracés d\'embrasement généralisé', ref: '6.3.2.4', def: 'Dégâts étendus, tracés au sol, qui peuvent masquer ou créer des tracés.' },
  { id: 'irregulier', nom: 'Tracés irréguliers au sol', ref: '6.3.7.8', def: 'Formes « en flaque » ; ne constituent pas seuls une preuve de liquide inflammable.' },
  { id: 'protegee', nom: 'Zone protégée / ombre thermique', ref: '6.3.4', def: 'Surface protégée par un objet, révèle sa position pendant le feu.' },
  { id: 'cleanburn', nom: 'Clean burn', ref: '6.2.11', def: 'Zone où la suie a été brûlée par contact de flamme ou forte chaleur.' },
  { id: 'calcination', nom: 'Calcination du plâtre', ref: '6.2.12', def: 'Déshydratation du gypse ; la profondeur renseigne sur la durée/intensité d\'exposition.' },
  { id: 'carbonisation', nom: 'Profondeur de carbonisation', ref: '17.4.3', def: 'Comparaison relative de profondeurs sur un même matériau pour hiérarchiser l\'exposition.' },
  { id: 'arc', nom: 'Perle d\'arc', ref: '8.11.1', def: 'Fusion localisée à limite nette sur un conducteur sous tension.' },
];

export const CLASSIFICATIONS = [
  { id: 'accidentelle', nom: 'Accidentelle', ref: '19.2.1.1' },
  { id: 'naturelle', nom: 'Naturelle', ref: '19.2.1.2' },
  { id: 'volontaire', nom: 'Volontaire (incendiary)', ref: '19.2.1.3' },
  { id: 'indeterminee', nom: 'Indéterminée', ref: '19.2.1.4' },
  { id: 'suspecte', nom: 'Suspecte', ref: '19.2.1', piege: true },
];

export const CERTITUDES = [
  { id: 'probable', nom: 'Probable (> 50 %)', ref: '4.5.1' },
  { id: 'possible', nom: 'Possible', ref: '4.5.1' },
  { id: 'suspecte', nom: 'Suspectée', ref: '4.5.2', piege: true },
];
