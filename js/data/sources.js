// Références documentaires du jeu.
// La NFPA 921 (édition 2011) reste la référence de base : chaque constat, chaque règle du jeu renvoie à un
// chapitre ou une section de ce guide. Les autres ouvrages illustrent et complètent ces notions
// (« Pour aller plus loin »). Les notes sont des reformulations pédagogiques, pas des citations.

export const BIBLIO = {
  nfpa921: { court: 'NFPA 921', annee: 2011, langue: 'en', base: true,
    ref: 'NFPA 921 — Guide for Fire and Explosion Investigations, édition 2011, National Fire Protection Association.',
    role: 'Référence de base du jeu : méthode scientifique, science du feu, tracés, origine, cause, classification.' },
  lentini: { court: 'Lentini', annee: 2013, langue: 'en',
    ref: 'J. J. Lentini, Scientific Protocols for Fire Investigation, 2e édition, CRC Press, 2013.',
    role: 'Protocoles d\'enquête, mythes de l\'enquête incendie, sources d\'erreur et nombreux cas réels.' },
  chandler: { court: 'Chandler', annee: 2009, langue: 'en',
    ref: 'R. K. Chandler, Fire Investigation, Delmar Cengage Learning, 2009.',
    role: 'Manuel de terrain : sécurité, scène, électricité, tracés, preuves, entretiens, rapport.' },
  cnpp: { court: 'CNPP', annee: 2011, langue: 'fr',
    ref: 'CNPP, Étude prévention EP 02-11 — Méthodologie de recherche des causes d\'incendie.',
    role: 'Référence française : lecture des indices, démarche sur les lieux, prélèvements, sécurité de l\'expert.' },
  enfsi: { court: 'ENFSI', annee: 2017, langue: 'en',
    ref: 'ENFSI, Best Practice Manual for the Investigation of Fire Scenes, ENFSI-BPM-FEI-01, version 02, 2017.',
    role: 'Bonnes pratiques des laboratoires forensiques européens (primo-intervenants, scène, fouille, prélèvements).' },
  aaas: { court: 'AAAS', annee: 2017, langue: 'en',
    ref: 'AAAS, Forensic Science Assessments: A Quality and Gap Analysis — Fire Investigation, 2017.',
    role: 'Bilan scientifique : ce qui est démontré, ce qui ne l\'est pas, biais et besoins de recherche.' },
  gorbett: { court: 'Gorbett et al.', annee: 2015, langue: 'en',
    ref: 'G. E. Gorbett, B. J. Meacham, C. B. Wood, N. A. Dembsey, « Use of damage in fire investigation: a review of fire patterns analysis, research and future direction », Fire Science Reviews, 4:4, 2015.',
    role: 'Revue de la recherche sur les tracés : ce que les dégâts permettent (ou non) de conclure.' },
  iuthse: { court: 'IUT HSE', annee: 2009, langue: 'fr',
    ref: 'IUT, département Hygiène Sécurité Environnement, 2e année — Travaux pratiques « Incendie – risques chimiques » (simulation incendie, propagation de flamme et épiradiateur, explosimétrie), 2009.',
    role: 'Supports de TP dont s\'inspirent la cellule d\'essai, le tube de déflagration et le point éclair du laboratoire.' },
  usfa: { court: 'USFA', annee: 2016, langue: 'en',
    ref: 'FEMA / USFA / National Fire Academy, Fire Investigation: Fire Dynamics and Modeling (FI:FDM), manuel du stagiaire, 2e édition, 2016.',
    role: 'Dynamique du feu en compartiment, essais, modèles mathématiques et numériques.' },
  leberrera: { court: 'Leberrera', langue: 'fr',
    ref: 'G. Leberrera, La recherche des causes et circonstances des incendies, une nouvelle approche post-combustion.',
    role: 'Cadre français de la RCCI : acteurs, procédures, examen des lieux, électricité, témoignages, rapport.' },
  lcpp: { court: 'LCPP', annee: 2015, langue: 'fr',
    ref: 'A. Thiry-Muller (Laboratoire central de la préfecture de police), L\'expertise judiciaire et la science de l\'incendie, école thématique du CNRS, Porticcio, 2015.',
    role: 'L\'expertise post-incendie en France : laboratoires, démarche, essais et simulation.' },
  suzanne: { court: 'Suzanne', annee: 2009, langue: 'fr',
    ref: 'M. Suzanne, Conditions d\'utilisation de modèles numériques pour l\'évaluation de scénarios de départ de feu dans un cadre d\'investigation post-incendie, thèse, INSA de Rouen, 2009.',
    role: 'Quand et comment utiliser la simulation numérique pour tester un scénario.' },
  forensis: { court: 'Forensis', annee: 2014, langue: 'en',
    ref: 'Forensic Architecture (dir.), Forensis: The Architecture of Public Truth, Sternberg Press, 2014.',
    role: 'Reconstitution d\'événements à partir des bâtiments, des images et des sources ouvertes.' },
  nfpa1033: { court: 'NFPA 1033', annee: 2003, langue: 'en',
    ref: 'NFPA 1033 — Standard for Professional Qualifications for Fire Investigator, édition 2003.',
    role: 'Compétences attendues de l\'enquêteur : scène, documentation, preuves, entretiens, rapport.' },
  row: { court: 'Row', langue: 'en',
    ref: 'D. A. Row, Report Writing for Fire Investigators (support de formation).',
    role: 'Rédiger un rapport d\'expert : faits, analyses, opinion et méthode.' },
  nfc15100: { court: 'NF C 15-100', annee: 2002, langue: 'fr',
    ref: 'NF C 15-100 — Installations électriques à basse tension (AFNOR, 2002).',
    role: 'Règles d\'installation électrique : protections, sections, appareillage.' },
};

// Chaque thème est rattaché à une ou plusieurs sections de la NFPA 921 (2011) et liste les autres sources
// qui l'illustrent : [source, localisation, ce qu'on y trouve].
export const THEMES = [
  { id: 'methode', titre: 'Méthode scientifique', nfpa: ['4.1', '4.2', '4.3', '4.4', '18.2', '18.6', '18.6.1', '18.6.2', '18.6.3', '18.6.4', '18.7'], voir: [
    ['lentini', 'chap. 4, § 4.3', 'Partir de l\'hypothèse nulle (« cause non déterminée ») et ne la quitter que lorsque les données y obligent.'],
    ['lentini', 'chap. 4, § 4.14', 'Développer puis tester chaque hypothèse contre toutes les données.'],
    ['cnpp', '§ 2 (démarche sur les lieux)', 'La même démarche en français : préparation, observations, relevés, lieu d\'ignition, cause.'],
    ['enfsi', '§ 12 et annexe A2 § 12.1', 'Interprétation : formuler plusieurs hypothèses, puis retenir l\'hypothèse finale.'],
    ['leberrera', '« La méthode RCCI vue par le recueil NFPA 921 »', 'Transposition de la démarche NFPA 921 dans la pratique française.'],
  ]},
  { id: 'biais', titre: 'Biais et présomption', nfpa: ['4.3.7', '4.3.8', '4.3.9'], voir: [
    ['aaas', 'partie A (Fire Scene Investigation)', 'Le risque de biais cognitif est identifié comme un point faible majeur de l\'enquête incendie.'],
    ['lentini', 'chap. 9, § 9.2 à 9.6', 'Données critiques ignorées, mal interprétées ou incohérentes écartées : les erreurs classiques.'],
    ['lentini', 'chap. 9, § 9.10', 'Affaires judiciaires réelles, chacune suivie d\'une analyse des erreurs commises.'],
  ]},
  { id: 'certitude', titre: 'Niveau de certitude et revue', nfpa: ['4.5', '4.6'], voir: [
    ['lentini', 'chap. 4, § 4.14', 'Une hypothèse qui n\'a pas résisté aux tests ne peut pas être présentée comme probable.'],
    ['row', 'support de formation', 'Distinguer, dans le rapport, les faits, l\'analyse et l\'opinion de l\'expert.'],
    ['lcpp', 'partie 1 (cadre)', 'Le cadre de l\'expertise judiciaire française : ce que le magistrat attend d\'un avis.'],
  ]},
  { id: 'feu', titre: 'Science du feu et inflammation', nfpa: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9'], voir: [
    ['usfa', 'unité 1', 'Bases de la dynamique du feu : transferts thermiques, puissance, inflammation.'],
    ['lentini', 'chap. 3, § 3.1 à 3.6', 'Chimie du feu, inflammation chimique, combustion couvante, flammes.'],
    ['cnpp', '§ 1.1', 'Rappels sur l\'incendie : combustible, comburant, transmission de la chaleur, mécanismes d\'ignition.'],
  ]},
  { id: 'couvante', titre: 'Combustion lente, auto-échauffement', nfpa: ['5.7.4.1'], voir: [
    ['lentini', 'chap. 3, § 3.5', 'L\'inflammation par combustion couvante : lente, peu visible, longtemps avant la flamme.'],
    ['cnpp', '§ 1.1.5 (p. 15)', 'Auto-échauffement et auto-inflammation.'],
    ['lentini', 'chap. 6, § 6.4.1', 'Tests d\'inflammation spontanée.'],
  ]},
  { id: 'compartiment', titre: 'Feu en compartiment et embrasement généralisé', nfpa: ['5.10', '6.3.2.4'], voir: [
    ['usfa', 'unité 2', 'Dynamique du feu en compartiment : couche chaude, ventilation, embrasement généralisé.'],
    ['lentini', 'chap. 3, § 3.8', 'Feux de compartiment : comment l\'embrasement efface ou crée des tracés.'],
    ['lentini', 'chap. 9, § 9.9.1', 'Erreur fréquente : conclure à un incendie volontaire sur l\'aspect du sol d\'une pièce totalement embrasée.'],
    ['aaas', 'partie A', 'Après embrasement généralisé, la lecture des tracés pour l\'origine devient beaucoup moins fiable.'],
  ]},
  { id: 'fumees', titre: 'Cheminement des fumées', nfpa: ['5.12'], voir: [
    ['cnpp', '§ 2.2.1 (p. 37)', 'Les dépôts de fumées et ce qu\'ils indiquent du sens de propagation.'],
    ['usfa', 'unité 2', 'Écoulements aux ouvertures et déplacement des gaz chauds.'],
  ]},
  { id: 'effets', titre: 'Effets du feu (généralités)', nfpa: ['6', '6.1', '6.2', '6.3', '6.2.1', '6.2.3', '6.2.6', '6.2.7', '6.2.10', '6.2.15', '6.2.16'], voir: [
    ['cnpp', '§ 2.2 (p. 37 à 61)', 'Catalogue des indices : fumées, ventilation, couche chaude, bois, béton, plâtres, vitres, fusions.'],
    ['chandler', 'chap. 11 (p. 261)', 'Les tracés et leur interprétation, illustrés de photos de terrain.'],
    ['gorbett', 'article complet', 'Ce que la recherche a validé ou non dans l\'usage des dégâts pour trouver l\'origine.'],
  ]},
  { id: 'temperatures', titre: 'Températures, fusion et alliages', nfpa: ['6.2.2', '6.2.8', '6.2.9'], voir: [
    ['cnpp', '§ 2.2.2 (p. 39)', 'Fusion des matériaux : tableau des températures de fusion des métaux et matériaux courants.'],
    ['cnpp', '§ 2.2.3 (p. 43)', 'Alliages : un métal à bas point de fusion fait « fondre » le cuivre ou le fer bien plus bas.'],
    ['lentini', 'chap. 8, § 8.11', 'Mythe : temps et température — une température élevée ne désigne ni un accélérant ni l\'origine.'],
    ['usfa', 'unité 2', 'Températures typiques d\'un feu de compartiment avant et après embrasement généralisé.'],
  ]},
  { id: 'carbonisation', titre: 'Carbonisation du bois', nfpa: ['6.2.4', '6.3.6', '17.4.3'], voir: [
    ['cnpp', '§ 2.2.7 (p. 46)', 'Carbonisation du bois : lecture relative et précautions.'],
    ['lentini', 'chap. 8, § 8.4', 'Mythe : la profondeur ou l\'aspect « en écailles » du charbon ne date pas le feu et ne prouve pas un accélérant.'],
    ['gorbett', 'article complet', 'Profondeur de carbonisation : utile en relevé comparatif, peu fiable isolément.'],
  ]},
  { id: 'ecaillage', titre: 'Écaillage du béton', nfpa: ['6.2.5'], voir: [
    ['lentini', 'chap. 8, § 8.7', 'Mythe : l\'écaillage n\'est pas un indicateur de liquide inflammable.'],
    ['cnpp', '§ 2.2.8 (p. 47)', 'L\'éclatement du béton et ses causes multiples.'],
  ]},
  { id: 'cleanburn', titre: 'Clean burn', nfpa: ['6.2.11'], voir: [
    ['lentini', 'chap. 3, § 3.13', 'Le clean burn : suies brûlées par une exposition intense et prolongée.'],
  ]},
  { id: 'calcination', titre: 'Calcination du plâtre', nfpa: ['6.2.12', '17.4.4'], voir: [
    ['cnpp', '§ 2.2.11 (p. 52)', 'Comportement des plâtres au feu.'],
    ['gorbett', 'article complet', 'Relevés de profondeur de calcination : méthode et limites.'],
  ]},
  { id: 'verre', titre: 'Verre et vitrages', nfpa: ['6.2.13'], voir: [
    ['lentini', 'chap. 8, § 8.3', 'Mythe démonté : le verre faïencé vient d\'un refroidissement brutal (eau), pas d\'un feu « rapide ».'],
    ['chandler', 'chap. 11, « Windows and glass » (p. 278)', 'Ce que le verre brisé, fondu ou faïencé peut et ne peut pas dire.'],
    ['cnpp', '§ 2.2.12 (p. 52)', 'Les vitres comme indices de propagation et de ventilation.'],
    ['enfsi', 'annexe A2, § 5.3.8', 'Relever où se trouvent les éclats (dedans, dehors) et l\'état des ouvrants.'],
  ]},
  { id: 'ressorts', titre: 'Ressorts affaissés', nfpa: ['6.2.14'], voir: [
    ['lentini', 'chap. 8, § 8.6', 'Mythe : l\'affaissement des ressorts ne prouve ni un feu couvant ni un accélérant.'],
  ]},
  { id: 'victimes', titre: 'Victimes', nfpa: ['6.2.17', '23'], voir: [
    ['enfsi', 'annexe B1', 'Incendies avec victimes : coordination avec le médecin légiste.'],
    ['lentini', 'chap. 4, § 4.13', 'Les feux mortels : précautions supplémentaires.'],
  ]},
  { id: 'panache', titre: 'Tracés de panache, V et cônes', nfpa: ['6.3.2.1', '6.3.7.1', '6.3.7.2', '6.3.7.3', '6.3.7.4', '6.3.7.5', '6.3.7.6', '6.3.7.7', '17.4.2'], voir: [
    ['lentini', 'chap. 3, § 3.9', 'Formation des tracés de panache, d\'où naissent les V.'],
    ['lentini', 'chap. 8, § 8.10', 'Mythe : l\'angle du V ne mesure pas la vitesse du feu ; il dépend surtout de la puissance et de la géométrie.'],
    ['gorbett', 'article complet', 'Les V restent un outil d\'origine utile tant que la pièce n\'est pas embrasée.'],
    ['cnpp', '§ 2.2.1 (p. 37)', 'Dépôts de fumées et pointes de suie au-dessus du foyer.'],
  ]},
  { id: 'ventilation', titre: 'Tracés de ventilation', nfpa: ['6.3.2.2'], voir: [
    ['lentini', 'chap. 3, § 3.10', 'Les ouvertures créent des tracés intenses loin de l\'origine.'],
    ['cnpp', '§ 2.2.5 (p. 45)', 'Ventilation : le feu brûle le plus là où l\'air arrive.'],
    ['enfsi', 'annexe A2, § 5.3.8', 'Ouvrants et suies autour des ouvertures : indices de ventilation.'],
  ]},
  { id: 'couchechaude', titre: 'Couche chaude et lignes de démarcation', nfpa: ['6.3.2.3', '6.3.3.1'], voir: [
    ['cnpp', '§ 2.2.6 (p. 45)', 'Couche chaude : hauteur, horizontalité et ce qu\'elle révèle.'],
    ['lentini', 'chap. 8, § 8.5', 'Mythe : une ligne de démarcation nette ne signe pas un accélérant.'],
    ['lentini', 'chap. 3, § 3.12', 'Horizons, tracés de mouvement et d\'intensité.'],
    ['usfa', 'unité 2', 'Descente de la couche de gaz chauds et flux rayonné vers le sol.'],
  ]},
  { id: 'lance', titre: 'Traces de l\'extinction', nfpa: ['6.3.2.5', '16.3.5'], voir: [
    ['enfsi', 'annexe A1, § 3.4 et § 5', 'Primo-intervenants : limiter l\'altération de la scène et la préserver.'],
    ['chandler', 'chap. 6 (p. 115)', 'Spoliation : ce qui se perd pendant et après l\'extinction.'],
  ]},
  { id: 'sols', titre: 'Tracés au sol et trous dans le plancher', nfpa: ['6.3.3.2', '6.3.5', '6.3.7.8', '6.3.7.9', '6.3.7.10', '6.3.7.11'], voir: [
    ['lentini', 'chap. 8, § 8.9', 'Mythe : un feu « bas » ou un trou dans le plancher ne prouvent pas un liquide inflammable.'],
    ['lentini', 'chap. 9, § 9.9.1', 'Le sol d\'une pièce totalement embrasée : principale source d\'erreurs de conclusion.'],
    ['cnpp', '§ 2.2.14 (p. 54)', 'Feux de sol : causes possibles et vérifications.'],
    ['chandler', 'chap. 11, « Floors » (p. 282)', 'Lecture des tracés au sol.'],
    ['aaas', 'partie A', 'Les tracés irréguliers apparaissent aussi sans accélérant, notamment après embrasement.'],
  ]},
  { id: 'protegees', titre: 'Zones protégées et ombres thermiques', nfpa: ['6.3.4'], voir: [
    ['chandler', 'chap. 11, « Protected areas » (p. 289)', 'Replacer les objets dans leur position d\'avant le feu.'],
    ['lentini', 'chap. 4, § 4.8', 'La reconstitution de la scène remet chaque objet à sa place.'],
  ]},
  { id: 'trous', titre: 'Traversées de planchers', nfpa: ['6.3.5'], voir: [
    ['lentini', 'chap. 3, § 3.11', 'Traversées de planchers : du haut vers le bas ou du bas vers le haut.'],
  ]},
  { id: 'electricite', titre: 'Électricité et incendie', nfpa: ['8'], voir: [
    ['chandler', 'chap. 10 (p. 228)', 'Électricité et incendie : bases utiles à l\'enquêteur.'],
    ['leberrera', '« L\'électricité et les défaillances électriques »', 'Effet Joule, oxydation des contacts, comportement des appareils face au feu.'],
    ['cnpp', '§ 1.4 (p. 33)', 'L\'incendie d\'origine électrique.'],
    ['nfc15100', 'norme d\'installation', 'Référence française pour juger d\'une installation (protections, sections).'],
  ]},
  { id: 'arcs', titre: 'Fusions électriques et cartographie des arcs', nfpa: ['8.10', '8.11', '17.4.5'], voir: [
    ['cnpp', '§ 2.2.19 à 2.2.21 (p. 60-61)', 'Fusions multiples des conducteurs, court-circuit, faux contact.'],
    ['lentini', 'chap. 3, § 3.14', 'Tracés électriques et leur interprétation.'],
    ['chandler', 'chap. 10, « Melting of conductors » (p. 256)', 'Fusion par arc ou fusion par le feu.'],
    ['leberrera', '« Le perlage et ses significations »', 'Les perles de fusion dans la pratique française de la RCCI.'],
  ]},
  { id: 'securite', titre: 'Sécurité sur la scène', nfpa: ['12', '17.3.2.2'], voir: [
    ['enfsi', '§ 14 et annexe A2, § 14', 'Santé et sécurité de l\'enquêteur.'],
    ['chandler', 'chap. 2 (p. 29)', 'La sécurité d\'abord : structure, énergies, atmosphère, EPI.'],
    ['cnpp', '§ 2.8 (p. 80)', 'Sécurité de l\'expert sur les lieux.'],
    ['lentini', 'chap. 4, § 4.6', 'La première reconnaissance commence par la sécurité.'],
  ]},
  { id: 'entretiens', titre: 'Entretiens et témoignages', nfpa: ['13.1', '13.2', '13.3', '13.4'], voir: [
    ['chandler', 'chap. 19 (p. 442)', 'Mener un entretien : préparation, questions ouvertes, prise de notes.'],
    ['enfsi', 'annexe A2, § 5.2.1', 'Recueillir l\'information auprès des personnes avant d\'entrer.'],
    ['lentini', 'chap. 9, § 9.9.5', 'Les témoins neutres placent-ils l\'origine ailleurs ? Une question à se poser systématiquement.'],
    ['leberrera', '« L\'analyse de la déclaration du témoin »', 'Exploiter une déclaration avec prudence.'],
  ]},
  { id: 'osint', titre: 'Sources publiques et privées (OSINT)', nfpa: ['13.5', '13.6'], voir: [
    ['chandler', 'chap. 21 (p. 477)', 'Sources d\'information : registres, archives, données techniques.'],
    ['forensis', 'ouvrage', 'Reconstituer un événement en croisant images, vidéos et sources ouvertes.'],
  ]},
  { id: 'documentation', titre: 'Photographie et documentation', nfpa: ['15'], voir: [
    ['chandler', 'chap. 18 (p. 425), « Photographs » (p. 427)', 'Photographier du général au particulier, avant toute modification.'],
    ['lentini', 'chap. 4, § 4.7', 'Documenter la scène : photos, croquis, notes.'],
    ['enfsi', 'annexe A2, § 8.2.2', 'Enregistrer chaque indice en place avant de le prélever.'],
    ['nfpa1033', '§ 4.3', 'Compétence exigée : plan, photos et notes de terrain.'],
    ['leberrera', '« La photographie des indices »', 'La photo comme preuve dans le dossier d\'expertise.'],
  ]},
  { id: 'rapport', titre: 'Rapport', nfpa: ['15.5', '4.4.6'], voir: [
    ['lentini', 'chap. 4, § 4.15', 'Procédure de rédaction et de relecture du rapport.'],
    ['chandler', 'chap. 23 (p. 496)', 'Structure d\'un rapport d\'enquête incendie.'],
    ['row', 'support de formation', 'Un rapport d\'opinion : faits, données sur lesquelles l\'expert s\'appuie, méthode, conclusion.'],
    ['leberrera', '« Le rapport final d\'expertise et son contenu »', 'Pré-rapport et rapport final dans le cadre judiciaire français.'],
  ]},
  { id: 'preuves', titre: 'Preuves, préservation et spoliation', nfpa: ['16.1', '16.2', '16.3', '16.4', '16.7', '16.8', '16.9', '16.10', '16.11', '17.3.2.5', '17.3.2.6'], voir: [
    ['chandler', 'chap. 6 (p. 115) et chap. 8 (p. 159)', 'Éviter la spoliation ; collecter et conserver les preuves.'],
    ['lentini', 'chap. 4, § 4.10 et § 4.12', 'Spoliation, collecte et conservation des preuves.'],
    ['enfsi', 'annexe A1, § 5', 'Préserver la scène dès l\'arrivée des secours.'],
    ['leberrera', '« La protection et la préservation des indices fiables »', 'La chaîne de transmission des indices.'],
  ]},
  { id: 'prelevements', titre: 'Prélèvements pour recherche d\'accélérants', nfpa: ['16.5', '16.6'], voir: [
    ['enfsi', 'annexe A2, § 8.2.3.2', 'Où prélever : zones protégées (plinthes, seuils), bords des zones brûlées, matériaux absorbants ; prévoir un échantillon de comparaison.'],
    ['cnpp', '§ 2.7.2 (p. 77) et § 3.1 (p. 82)', 'Prélèvements puis analyses de débris en laboratoire.'],
    ['lentini', 'chap. 5', 'Analyse des résidus de liquides inflammables : méthodes et critères d\'identification.'],
    ['chandler', 'chap. 17 (p. 417)', 'Détection des accélérants sur la scène.'],
    ['aaas', 'partie B (Fire Debris Analysis)', 'Forces et limites de l\'analyse des débris.'],
  ]},
  { id: 'detection', titre: 'Détecteurs (PID) et chiens', nfpa: ['16.5.4.2', '16.5.4.7', '14.5.10'], voir: [
    ['lentini', 'chap. 9, § 9.9.3', 'Une alerte de chien ou de détecteur non confirmée par le laboratoire ne prouve rien.'],
    ['aaas', 'partie A', 'Chiens et détecteurs orientent les prélèvements ; seul le laboratoire confirme.'],
    ['enfsi', 'annexe A2, § 8.2.3.2', 'Chiens et détecteurs électroniques aident à choisir où prélever.'],
  ]},
  { id: 'examen', titre: 'Examen de la scène : de l\'extérieur vers l\'intérieur', nfpa: ['17.1', '17.2', '17.3', '17.3.1'], voir: [
    ['cnpp', '§ 2.1 (p. 35) et § 2.4.3 (p. 69)', 'Observer du général au détail, puis consigner les observations.'],
    ['enfsi', 'annexe A2, § 5.3.4 à 5.3.7', 'Vue d\'ensemble, abords, extérieur, puis intérieur.'],
    ['chandler', 'chap. 12 (p. 295)', 'Examiner la scène avec méthode.'],
    ['leberrera', '« Les méthodes utilisées pour l\'examen extérieur des lieux »', 'Examen extérieur puis intérieur.'],
  ]},
  { id: 'fouille', titre: 'Fouille et reconstruction', nfpa: ['17.3.2'], voir: [
    ['enfsi', 'annexe A2, § 5.4.1', 'Fouille stratigraphique : de la zone la moins touchée vers l\'origine présumée, couche par couche.'],
    ['lentini', 'chap. 4, § 4.8', 'Reconstruire la scène : remettre les objets à leur place pour relire les tracés.'],
    ['cnpp', '§ 2.4.3 (p. 69) et § 2.4.4 (p. 72)', 'Observations et relevés pendant le déblaiement.'],
  ]},
  { id: 'origine', titre: 'Détermination de l\'origine', nfpa: ['17.4', '17.4.1', '17.4.6', '17.4.7', '17.5', '17.6', '17.7'], voir: [
    ['lentini', 'chap. 4, § 4.11', 'Déterminer l\'origine avant de chercher la cause.'],
    ['cnpp', '§ 2.5 (p. 74)', 'Le lieu d\'ignition.'],
    ['enfsi', 'annexe A2, § 5.3.9', 'Délimiter la zone d\'intérêt.'],
    ['gorbett', 'article complet', 'Fiabilité de l\'analyse des tracés pour localiser l\'origine.'],
  ]},
  { id: 'cause', titre: 'Détermination de la cause', nfpa: ['18.1', '18.3', '18.4', '18.5'], voir: [
    ['cnpp', '§ 2.6 (p. 76)', 'La recherche de la cause à partir du lieu d\'ignition.'],
    ['chandler', 'chap. 13 (p. 311)', 'Cause : combustible, source d\'ignition et circonstances qui les ont réunis.'],
    ['nfpa1033', '§ 4.2', 'L\'enquêteur doit établir origine, source d\'ignition, matériau enflammé et circonstances.'],
  ]},
  { id: 'competence', titre: 'Compétence de la source d\'ignition', nfpa: ['18.3.2', '18.4.2', '18.5.3', '18.5.4', '18.6.5.2'], voir: [
    ['chandler', 'chap. 9, « Competent ignition sources » (p. 195)', 'Une source est compétente si elle apporte assez d\'énergie, assez longtemps, au bon combustible.'],
    ['lentini', 'chap. 6', 'Défaillances des appareils et sources d\'ignition courantes.'],
  ]},
  { id: 'negcorpus', titre: 'Élimination et negative corpus', nfpa: ['18.6.5', '18.6.5.1'], voir: [
    ['lentini', 'chap. 4, § 4.4', 'La méthode du negative corpus : pourquoi elle ne prouve rien.'],
    ['chandler', 'chap. 13, « Elimination » (p. 326)', 'Éliminer des causes n\'autorise pas à en affirmer une sans preuve positive.'],
    ['leberrera', '« Le processus d\'élimination, les causes probables, les mythes possibles »', 'La même mise en garde dans la pratique française.'],
  ]},
  { id: 'classification', titre: 'Classification de la cause', nfpa: ['19'], voir: [
    ['chandler', 'chap. 13, « Classification » (p. 327)', 'Accidentel, naturel, volontaire, indéterminé.'],
    ['lcpp', 'partie 1 (cadre)', 'Ce que la classification implique dans la procédure judiciaire française.'],
  ]},
  { id: 'chronologie', titre: 'Chronologie et outils d\'analyse', nfpa: ['20', '20.1', '20.2', '20.3'], voir: [
    ['enfsi', '§ 10 et § 11', 'Séquence des événements et reconstitution.'],
    ['forensis', 'ouvrage', 'Assembler une chronologie à partir de sources hétérogènes.'],
  ]},
  { id: 'modelisation', titre: 'Modélisation et essais', nfpa: ['20.4', '20.5', '20.6'], voir: [
    ['usfa', 'unités 3 à 5', 'Essais, corrélations mathématiques et modèles numériques.'],
    ['suzanne', 'thèse', 'Conditions d\'emploi d\'un modèle numérique pour tester un scénario de départ de feu.'],
    ['lentini', 'chap. 3, § 3.15 et chap. 9, § 9.9.6', 'Apport du modèle, et erreur d\'une conclusion fondée seulement sur un calcul ou une simulation.'],
    ['lcpp', 'partie 2', 'Simulation et essais en vraie grandeur pour valider une hypothèse.'],
    ['cnpp', '§ 3.2 (p. 89)', 'Reconstitution et essais.'],
  ]},
  { id: 'volontaire', titre: 'Incendie volontaire', nfpa: ['22'], voir: [
    ['lentini', 'chap. 9, § 9.9', 'Les questions à poser avant de retenir un incendie volontaire.'],
    ['chandler', 'chap. 16 (p. 373)', 'L\'incendie volontaire : indicateurs et prudence.'],
    ['cnpp', '§ 1.3 (p. 31)', 'L\'incendie volontaire.'],
  ]},
  { id: 'appareils', titre: 'Appareils et équipements', nfpa: ['24'], voir: [
    ['lentini', 'chap. 6, § 6.3', 'Défaillances d\'appareils : cuisinières, friteuses, chauffages, luminaires encastrés, tableaux.'],
    ['lentini', 'chap. 7', 'Cas réels classés par type de source (sèche-linge, chauffage, électricité, gaz…).'],
  ]},
  { id: 'vehicules', titre: 'Véhicules', nfpa: ['25'], voir: [
    ['leberrera', '« Le feu de véhicule »', 'Spécificités de l\'enquête sur un véhicule.'],
  ]},
];

// Thèmes ajoutés par mot-clé, quand le sujet d'un constat est plus précis que sa section NFPA
const MOTS = [
  { re: /\bPID\b|cynophile|chien|d[ée]tecteur/i, voir: [['lentini', 'chap. 9, § 9.9.3', 'Une alerte de chien ou de détecteur non confirmée par le laboratoire ne prouve rien.'], ['aaas', 'partie A', 'Chiens et détecteurs orientent les prélèvements ; seul le laboratoire confirme.']] },
  { re: /cuisini|plaque|casserole|huile|friteuse|hotte/i, voir: [['lentini', 'chap. 6, § 6.3.2 et § 6.3.4', 'Feux de cuisinières et de friteuses : modes de défaillance et scénarios typiques.']] },
  { re: /po[eê]le|conduit|chemin[ée]e|souche|chevron|charpente/i, voir: [['chandler', 'chap. 9, « Chimneys » (p. 209)', 'Conduits de fumée : distances aux combustibles et feux de charpente.'], ['lentini', 'chap. 6, § 6.3.5', 'Appareils de chauffage : défaillances et distances de sécurité.']] },
  { re: /spot|encastr/i, voir: [['lentini', 'chap. 6, § 6.3.9', 'Luminaires encastrés : isolation au contact et surchauffe.']] },
  { re: /cigarette|m[ée]got|fumeur/i, voir: [['chandler', 'chap. 9, « Smoking materials » (p. 198)', 'Cigarettes : feu couvant, conditions d\'inflammation, limites.']] },
  { re: /multiprise|rallonge|prolongateur/i, voir: [['nfc15100', 'norme d\'installation', 'Règles d\'usage des socles et prolongateurs.']] },
  { re: /tableau|disjonct/i, voir: [['lentini', 'chap. 6, § 6.3.11', 'Tableaux électriques : ce qu\'ils révèlent après le feu.']] },
  { re: /radiateur|chauffage d.appoint/i, voir: [['lentini', 'chap. 7, § 7.7', 'Cas réels de feux de chauffage (combustibles trop proches).']] },
];

const BY_ID = Object.fromEntries(THEMES.map(t => [t.id, t]));

// "6.3.7.8 / 17.4.1" → ['6.3.7.8', '17.4.1'] ; "Chap. 8 / 24" → ['8', '24']
export function refParts(r) {
  return String(r || '').split(/\s*[\/,;·]\s*|\s+et\s+/).map(p => p.replace(/^(chap(itre)?\.?|§)\s*/i, '').replace(/\*$/, '').trim()).filter(p => /^\d+(\.\d+)*$/.test(p));
}

// Thème le plus précis pour une section NFPA donnée
function themePour(part) {
  let best = null, score = -1;
  for (const t of THEMES) for (const p of t.nfpa) {
    if ((part === p || part.startsWith(p + '.')) && p.length > score) { best = t; score = p.length; }
  }
  return best;
}

export function themesDe(r) {
  const out = [];
  for (const p of refParts(r)) { const t = themePour(p); if (t && !out.includes(t)) out.push(t); }
  return out;
}

// Sources complémentaires pour un constat, une règle ou une notion.
// cible : chaîne de référence NFPA, ou objet { ref, sources, theme, texte }.
export function voirAussi(cible, max = 4) {
  const c = typeof cible === 'string' ? { ref: cible } : (cible || {});
  const items = [];
  const push = (s, loc, note) => {
    if (!s || items.some(x => x.s === s && x.loc === loc)) return;
    items.push({ s, loc, note, b: BIBLIO[s] });
  };
  // Sources saisies à la main (éditeur) : texte libre « Auteur, localisation — note »
  for (const l of c.sources || []) {
    if (Array.isArray(l)) push(l[0], l[1], l[2]);
    else if (l) items.push({ s: null, libre: String(l) });
  }
  for (const id of [].concat(c.theme || [])) for (const v of BY_ID[id]?.voir || []) push(...v);
  const themes = themesDe(c.ref);
  // une entrée par thème d'abord (diversité), puis le reste
  const listes = themes.map(t => t.voir.slice());
  const txt = c.texte || '';
  for (const m of MOTS) if (m.re.test(txt)) for (const v of m.voir) push(...v);
  // 1er tour : une source différente par thème (diversité des auteurs), puis le reste dans l'ordre
  for (const l of listes) { const i = l.findIndex(v => !items.some(x => x.s === v[0])); if (i >= 0) push(...l.splice(i, 1)[0]); }
  while (listes.some(l => l.length)) for (const l of listes) if (l.length) push(...l.shift());
  return items.slice(0, Math.max(max, (c.sources || []).length));
}

const esc = s => String(s ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;' }[ch]));

export function sourceLigne(x) {
  if (x.libre) return `<li>${esc(x.libre)}</li>`;
  const b = x.b || {};
  return `<li><b title="${esc(b.ref || '')}">${esc(b.court || x.s)}${b.annee ? ` (${b.annee})` : ''}</b>${x.loc ? `, ${esc(x.loc)}` : ''}${x.note ? ` — ${esc(x.note)}` : ''}</li>`;
}

// Bloc « Pour aller plus loin » (repliable)
export function voirAussiHtml(cible, { max = 4, titre = '📚 Ce qu\'en disent d\'autres références', ouvert = false, classe = 'voir' } = {}) {
  const items = voirAussi(cible, max);
  if (!items.length) return '';
  return `<details class="${classe}"${ouvert ? ' open' : ''}><summary>${titre}</summary><ul>${items.map(sourceLigne).join('')}</ul></details>`;
}

// Bibliographie des sources réellement citées par un ensemble de cibles (pour un rapport)
export function bibliographie(cibles) {
  const ids = new Set(['nfpa921']);
  for (const c of cibles) for (const x of voirAussi(c, 3)) if (x.s) ids.add(x.s);
  return Object.keys(BIBLIO).filter(id => ids.has(id)).map(id => BIBLIO[id]);
}
