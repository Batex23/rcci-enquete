# 🔥 RCCI · L'Enquêteur

Jeu sérieux de **recherche des causes et circonstances d'incendie (RCCI)**, construit sur la méthodologie de la **NFPA 921 (édition 2011)**.
Public visé : sapeurs-pompiers et enquêteurs qui veulent tendre vers l'expertise RCCI.

Le joueur mène des enquêtes sur des scènes d'incendie en **3D low-poly (vue isométrique)**. Il applique la méthode scientifique de bout en bout : sécurité, constatations, lecture des tracés, fouille, prélèvements, entretiens, OSINT, hypothèses testées et rapport. Ses gains financent de nouveaux outils d'investigation, jusqu'au véhicule et au laboratoire.

▶️ **Jouer** : ouvrir `index.html` via un serveur web (GitHub Pages, ou `python3 -m http.server` en local). Le jeu fonctionne hors ligne : aucune dépendance externe, Three.js est embarqué dans `vendor/`.

---

## Comment ça se joue

- **Bureau de l'enquêteur** : tableau en liège, dossiers punaisés, étoiles (★ ≥ 40, ★★ ≥ 70, ★★★ ≥ 90). Chaque niveau se débloque avec au moins une étoile au précédent.
- **En enquête** : la scène 3D occupe l'écran ; le **parcours des zones** (en bas) guide de l'extérieur vers l'intérieur, des zones les moins touchées vers les plus touchées ; les **objectifs** (en haut à gauche) se cochent tout seuls ; le **capitaine Ferrand**, ton tuteur, te parle et te conseille (clique sur son portrait).
- **Fiche d'indice** : clic sur un indice → 📷 photo rapprochée → choix de la lecture → retour immédiat → 🧤 mise sous scellé si besoin. Tout se fait dans la fiche, sans multiplier les clics.
- **Carnet de terrain** (touche C) : mission, indices écrits à la main avec leurs photos, témoins (dialogues), recherches sur le téléphone, scellés et labo, hypothèses, et une page de **notes libres** jointe au rapport.
- **Tableau d'enquête** : chaque hypothèse est confrontée aux faits (post-it 👍 / 👎), puis retenue ou écartée — jamais sans fait (negative corpus).
- **Conclusion guidée** en 5 cartes : où, comment, quels faits, quelle certitude et quelle classification, ta conclusion.
- **Témoins de température** : certains indices sont des objets fondus ou restés intacts (aluminium, verre, zamac, PVC, cuivre…). Avec ses repères de fusion (NFPA 921, tableau 6.2.8.2), le joueur en déduit la fourchette de température atteinte : un objet fondu donne un minimum, un objet intact un maximum. Pièges : l'alliage (cuivre « fondu » au contact de zinc ou d'aluminium) et le mythe « température élevée = accélérant ». La page 🌡️ du carnet trace la carte des températures.
- **Débriefing** : étoiles, badges (Méthodique, Œil de lynx, Lucide, Impartial, Thermomètre…), compétences gagnées, pièges évités ou non, reconstitution 3D.

### Progresser : compétences et laboratoire

- **Compétences** (onglet 🎓) : Méthode, Lecture des tracés, Températures, Électricité, Entretiens & sources, Raisonnement, Prélèvements & labo. Chaque analyse juste rapporte des points dans le domaine concerné (5 niveaux, de Novice à Maître). Chaque niveau gagné augmente les honoraires de 1 % ; au **niveau 3**, un avantage se débloque sur le terrain : photo automatique avant fouille, une lecture erronée barrée, témoins de température mis en évidence, analyses de labo moins chères, questions orientées signalées, aide à la certitude.
- **Le laboratoire** (onglet 🔬) : une vraie **salle en 3D** où l'on fait des travaux pratiques sur la science du feu, hors enquête, guidé par Dr Lina Morel. On tourne autour, on clique sur un poste et un panneau donne le protocole.
  - **TP 1 · Four de fusion** (jusqu'à 1 200 °C) : choix de 6 témoins (paraffine, PVC, polyéthylène, polypropylène, étain, plomb, zamac, zinc, aluminium, verre, laiton, cuivre, acier), consigne de température, lueur d'incandescence, journal d'observation. Trois défis : *Qui fond en premier ?*, *Le four mystère* (température cachée à encadrer), *Le piège de l'alliage* (fil de cuivre sur aluminium).
  - **TP 2 · Tétraèdre du feu** : bec de gaz, cloche en verre avec oxymètre, robinet de gaz, brumisateur, poudre. Il faut éteindre la flamme des quatre façons (comburant, combustible, énergie, réaction en chaîne), puis répondre aux questions de Lina.
  - **TP 3 · Mur d'essai** : brûleur de 50, 100 ou 200 kW au centre, contre un mur ou dans un angle de cloisons en plâtre. Hauteur de flamme calculée (corrélation de Heskestad, méthode « miroir »), tracés en V qui se dessinent sur le plâtre, combustion propre près du foyer.
  - **TP 4 · Cellule d'essai** (feu en compartiment, à la manière de CFAST) : pièce de 3,6 × 2,4 × 2,4 m et feu de canapé. On règle la porte (fermée, ouverte, ou ouverte/fermée en cours de feu), une trappe de désenfumage de 0,3 ou 0,7 m², un sprinkleur (68 °C) et une porte coupe-feu asservie au détecteur (57 °C). On suit la couche chaude (température, hauteur libre de fumées), l'oxygène, l'étouffement et la reprise violente à l'ouverture, l'embrasement généralisé et la ligne de démarcation qui se dépose sur les murs.
  - **TP 5 · Tube de déflagration** : méthane ou propane dans un tube de 3 m, avec rotamètres, bougie d'allumage, chronométrage du front de flamme et courbe vitesse / concentration. On y voit les LIE/LSE, la stœchiométrie et l'explosimètre étalonné méthane (% LIE, alarmes à 10 et 20 %, correction pour un autre gaz).
  - **TP 6 · Point éclair** (sous la sorbonne) : essence, éthanol, white-spirit, gazole, huile de friture. On y voit l'éclair, le point de feu, l'auto-inflammation, le couvercle qui étouffe et l'eau sur l'huile (boule de feu). Défi : identifier un « liquide X » par son point éclair.
  - Les TP 4 à 6 s'inspirent des travaux pratiques « Incendie – risques chimiques » de l'IUT HSE (simulation incendie, propagation de flamme, explosimétrie). Les modèles sont simplifiés et donnent des ordres de grandeur pédagogiques.
  - **Postes de révision** : microscope (arc, feu ou alliage ?), tableau des tracés, banc des idées reçues. Ce sont les séries de questions rapides.
  - Chaque TP réussi fait progresser une compétence. La première réussite du jour de chaque poste rapporte une petite prime (10 cr par TP, 5 cr par bonne réponse dans les séries). D'autres postes (calorimètre, chromatographe, grande cellule) accueilleront plus tard des études plus poussées.

### Les enquêtes

| Niveau | Enquête | Ce qu'on apprend |
|---|---|---|
| 1 | **Feu de cuisine** (tutoriel en doublon) | La méthode pas à pas : sécurité, extérieur, photo avant tout, lecture d'un V, fouille, vérifier les autres sources, témoin, hypothèses, conclusion |
| 2 | **Pavillon Durand** | Embrasement généralisé, tracés trompeurs, PID, témoignage orienté, produit rappelé, cartographie des arcs |
| 3 | **Maison à étage — feu de toiture** | Toiture effondrée, feu qui voyage de haut en bas, brûlures par chute de matériaux, charpente et conduit de poêle, pyrolyse lente du bois, piège de l'alliage zinc-cuivre |
| 4 | **Garage — vélo électrique en charge** | Batterie lithium-ion en emballement thermique, cellules projetées et foyers secondaires (≠ foyers multiples volontaires), PID faussé par l'électrolyte, rumeur de quartier, gradient de températures |
| 5 | **Feu de véhicule** (véhicule d'investigation requis) | Deux foyers au sol indépendants, essence confirmée avec échantillon de comparaison (l'enrobé contient des hydrocarbures), rappel constructeur hors de cause, vidéo à l'horloge décalée, mobile ≠ cause : un incendie **volontaire** démontré par des faits |
| 6 | **Conteneur de batteries** (site industriel, scénario fictif transposé d'un rapport du BEA-RI) | Enquête multi-parties (exploitant, intégrateur, fabricant). Les données enregistrées (supervision, BMS, contrôleurs d'isolement, ambiance) priment sur des dégâts limités. On y construit une chronologie, on lit les alarmes « intrusion » dues au gaz inerte et à l'explosion, on comprend que des traces d'arc sont des conséquences et on se méfie des déclarations intéressées. Emballement thermique d'une cellule : **accidentelle / probable** |
| 7 | **Notre-Dame de Paris** (niveau final, cas réel d'après des sources publiques, personne n'est nommé) | Scène presque entièrement consumée : la zone d'origine se déduit des images, de la chronologie et des témoignages. La levée de doute ratée est un facteur aggravant, pas une cause. Deux hypothèses accidentelles (électrique, mégot) restent ouvertes et l'acte volontaire n'est soutenu par rien : cause et classification **indéterminées**, conformément à l'état public de l'enquête judiciaire (toujours en cours) |

## Boucle de jeu

| Étape (NFPA 921, chap. 4.3) | Dans le jeu |
|---|---|
| 4.3.1 Reconnaître le besoin | Ordre de mission, compte rendu SDIS, météo |
| 4.3.2 Définir le problème | Évaluation de sécurité (NFPA 921, chap. 12), choix des équipements |
| 4.3.3 Collecter les données | Zones de l'extérieur vers l'intérieur, cavaliers jaunes numérotés, photos, fouille par couches, scellés, témoins, OSINT |
| 4.3.4 Analyser les données | Chaque constat doit être **interprété** (cataloguer ≠ analyser) |
| 4.3.5 Développer des hypothèses | Hypothèses d'origine et de cause |
| 4.3.6 Tester les hypothèses | Chaque donnée est classée *soutient / neutre / réfute* ; test de compétence de la source (chap. 18.4.2) |
| Hypothèse finale & rapport | Origine, cause, **niveau de certitude** (chap. 4.5), **classification** (chap. 19.2.1), planche photo, rapport imprimable |

### Ce qui est évalué

Les numéros renvoient aux chapitres et sections de la NFPA 921 (édition 2011).

- **Méthode (40)** : sécurité, ordre d'examen (17.3.1.3), photos avant toute modification (15.2), fouille documentée (17.3.2), contenants et échantillons de comparaison (16.5.4 / 16.6.2), entretiens sans question orientée (13.4), sources ouvertes, analyse de toutes les données.
- **Analyse (30)** : interprétation des effets du feu, hypothèses alternatives, réfutations fondées sur des faits, pas d'appui sur une rumeur ou un témoignage contaminé, test de compétence.
- **Conclusion (30)** : origine, cause, certitude **cohérente avec les données réellement réunies**, classification. Une cause seulement « possible » impose « indéterminée ».
- **Pénalités** : *negative corpus* (18.6.5), conclusion criminelle infondée, écarts de méthode.

### Pièges du Pavillon Durand (niveau 2)

Tracés irréguliers post-embrasement, lecture PID positive due aux produits de pyrolyse, faïençage du verre, jerrican dans le garage, témoignage orienté d'une voisine, article de presse, multiprise faisant l'objet d'un rappel (RappelConso) mais hors du point de défaillance, et une hypothèse « cigarette » crédible à réfuter par la localisation de l'origine.

---

## Progression

- **Crédits** : on démarre avec 600 cr. Les honoraires des missions (selon la note) vont de 800 cr pour le tutoriel à 6 000 cr pour le feu de véhicule. Ils servent à payer les équipements (de 400 cr pour les pots à 15 000 cr pour le laboratoire interne) et les analyses de laboratoire. Il faut donc enchaîner les expertises pour s'équiper : après le tutoriel, on peut s'offrir un ou deux petits outils, pas tout le catalogue. Si les crédits manquent pour une analyse en cours d'enquête, le cabinet avance les frais (jusqu'à 2 000 cr) et les reprend sur les honoraires : on n'est jamais bloqué.
- **Grades** : Enquêteur stagiaire → Enquêteur RCCI → Enquêteur confirmé → Expert RCCI → Expert près la cour d'appel.
- **Équipements** : jauge de carbonisation/calcination, contenants pour liquides inflammables, kit de cartographie des arcs, PID, calculateur de dynamique du feu (Thomas, Babrauskas, Heskestad), OSINT pro, drone, photogrammétrie, véhicule d'investigation, équipe cynophile, laboratoire interne.
- **Modes** : *Formation* (correction immédiate) ou *Expertise* (tout est révélé au débriefing), aide à la recherche activable.

### Accès administrateur (formateur)

Onglet **Carrière** → « Accès administrateur », ou directement `…/rcci-enquete/?admin`. Le code (`RCCI-ADMIN`, sans tenir compte des majuscules) débloque toutes les enquêtes, le grade maximal, tous les équipements et des crédits illimités. Le mode admin utilise une carrière séparée : la progression du joueur n'est pas touchée et revient telle quelle en quittant le mode. Le site est statique : ce code évite les accès par hasard, ce n'est pas une sécurité forte.

## Atelier de scènes (`editor.html`) — façon Les Sims

Une barre de **boutons ronds en bas de l'écran** : les modes à gauche, les outils du mode et le **catalogue** juste au-dessus, une bulle de conseil qui explique l'outil choisi. Les listes du niveau (pièces, objets, tracés, constats, photos) sont à gauche, la sélection s'édite à droite. Une aide illustrée s'ouvre à la première visite (touche **H**).

| Mode | Ce qu'on y fait |
|---|---|
| 🏗️ **Construire** | Tracer les murs comme dans Les Sims avec l'outil 🧱 **Paroi** (cliquez-glissez, droit ou à 45°, extrémités déplaçables), puis 🪣 **Sol de pièce** : un clic dans un espace fermé crée la pièce (nom, revêtement, zone d'enquête), même en L ; ou ⬛ **Pièce carrée** pour une pièce rectangulaire en un geste ; déplacer, redimensionner par les bords ; poser portes, fenêtres, baies, portes de garage ; **sols extérieurs** (allée, terrasse, parking : gravier, enrobé, dalles, terrasse bois, herbe, terre, sable…) et **terrain** autour du bâtiment ; catalogue d'objets ; **import de modèles 3D** ; **niveaux** (R+1, R+2…), **trémies** et escaliers |
| 🔥 **Effets du feu** | Par pièce : hauteur de la couche chaude et densité de suie ; pinceaux muraux (tracé en V, clean burn, calcination, zone protégée, démarcation) et au sol (tracés irréguliers, consommation, zone protégée, débris) ; degré de combustion de chaque objet |
| 📍 **Indices & photos** | Poser les **constats** dans la 3D avec leur **lecture** (interprétation réelle), pièges éventuels, référence NFPA 921 (chapitre / section) et autres sources éventuelles ; **témoins de température** (matériau, fondu ou intact, alliage) ; **épingler de vraies photos** à l'endroit et dans la direction de la prise de vue ; zone de fouille |
| 🧾 **Enquête** | Mission, compte rendu SDIS, témoins, OSINT, prélèvements et résultats, hypothèses, solution, pièges, chronologie ; génération automatique des zones |
| 📘 **RETEX** | Auteur, contexte, enseignements, points positifs, axes d'amélioration, recommandations ; **aperçu de la vue Analyse** ; **export HTML autonome** |

### Objets intelligents (à la manière du BIM)

Chaque objet, pièce, sol ou ouverture a un onglet **📋 Fiche technique** : matériau (avec sa température de fusion et un classement indicatif à confirmer), **réaction au feu** (Euroclasse, ancien classement M), **résistance au feu**, **procès-verbal** (numéro, laboratoire, date), fabricant, référence, date d'installation, alimentation et puissance, état, observations, **photos** et **documents joints** (PV en PDF, notice, facture). Les fiches apparaissent dans la vue Analyse (section *Inventaire technique*, clic sur un objet dans la 3D) et dans le jeu, quand l'enquêteur clique sur un objet documenté.

### Modèles 3D importés

Catalogue › **📦 Modèles 3D** › *Importer* : **glTF/GLB** (Blender), **DAE** (export Collada de SketchUp), **OBJ**, **STL**, **FBX**. L'échelle est détectée (mm, cm) et réglable (m, cm, mm, pouce), ainsi que l'orientation (axe Z vers le haut). Le modèle se pose, se déplace, se pivote, se « brûle » et se documente comme n'importe quel objet ; il est enregistré dans le dossier et inclus dans l'export RETEX (40 Mo maximum par fichier ; le format .skp natif n'est pas lisible : exporter en .dae ou .glb).

### Annuler, rétablir, raccourcis

| Raccourci | Action |
|---|---|
| Ctrl+Z / Ctrl+Y (ou Ctrl+Maj+Z) | Annuler / rétablir (boutons ↶ ↷ en haut) |
| Ctrl+C / Ctrl+V / Ctrl+D | Copier / coller / dupliquer (objet, pièce avec son mobilier, constat) |
| Suppr · Échap | Supprimer · désélectionner ou quitter l'outil |
| Flèches (Maj : pas de 25 cm) | Déplacer la sélection de 5 cm |
| R (Maj+R) · Q / E | Pivoter l'objet de 90° (15°) · pivoter la vue |
| 1 à 5 · V M B P T O F X · G | Modes · sélection, paroi, sol de pièce, pièce carrée, sols, porte, fenêtre, gomme · grille |
| Ctrl+S · H ou ? | Enregistrer le brouillon · aide |

### Un dossier, deux vues

- **Vue Analyse** : tout est visible — scène 3D cliquable (constats numérotés, photos), synthèse, chronologie avec reconstitution, constatations illustrées, analyses, déclarations, hypothèses retenues/écartées et les faits qui les justifient, enseignements. Imprimable en PDF.
- **Vue Jeu** : la même scène devient une enquête : la conclusion est masquée, les constats sont des indices à trouver, les photos apparaissent quand le constat lié est relevé. Les interprétations proposées au joueur sont générées à partir de vos lectures (vos pièges en priorité).

### Partager un RETEX

« Exporter le dossier (HTML autonome) » produit **un seul fichier** qui s'ouvre hors ligne dans n'importe quel navigateur, photos incluses, avec options d'anonymisation (témoins, adresse, mandant). **Les photos ne passent jamais par GitHub** : elles restent dans le navigateur (IndexedDB) et dans les fichiers que vous exportez.

> Si vous modifiez le moteur ou la vue Analyse, régénérez la visionneuse : `npm install && npm run build:retex` (le jeu lui-même ne nécessite aucune compilation).

## Structure

```
index.html              Jeu (QG, enquête, débriefing)
editor.html             Atelier de scènes (construction, effets, indices, enquête, RETEX)
dist/retex-viewer.js    Visionneuse RETEX autonome (générée par esbuild)
css/style.css
vendor/                 Three.js r160 et ses chargeurs de modèles (embarqués, hors ligne)
js/main.js              QG : missions, équipement, référentiel, carrière
js/state.js             Sauvegarde locale (carrière, scénarios formateur)
js/engine/              Moteur 3D (scène, textures procédurales des effets du feu)
js/game/                Logique d'enquête et notation
js/screens/             Écrans : enquête, débriefing, rapport, outils d'analyse
js/editor/              Atelier de scènes (schéma, formulaires, outils)
css/atelier.css         Interface de l'Atelier (barre ronde, catalogue)
js/engine/modeles.js    Import des modèles 3D (glTF, DAE, OBJ, STL, FBX)
js/data/bim.js          Fiches techniques des objets (matériaux, réaction au feu, PV)
js/retex/               Export et point d'entrée du dossier RETEX autonome
js/stockage.js          IndexedDB (dossiers, brouillon, photos)
js/data/nfpa.js         Référentiel NFPA 921 (2011), reformulé en français
js/data/sources.js      Bibliographie et correspondances NFPA 921 → autres sources
js/data/thermique.js    Témoins de température (fusion, ramollissement, alliages)
js/game/competences.js  Compétences, niveaux et avantages
js/screens/entrainement.js  Le laboratoire : page d'entrée, séries de révision
js/screens/labo3d.js        La salle 3D du laboratoire (four, tétraèdre, mur d'essai)
js/screens/laboTP.js        Postes cellule d'essai, tube de déflagration, point éclair
js/screens/laboOutils.js    Petits outils 3D partagés par le laboratoire
js/data/materiaux.js    Températures, puissances, fusion (tableau mnémotechnique de l'auteur)
js/data/scenarios/      Scénarios d'enquête (JSON)
```

## Feuille de route

- Variantes du pavillon : autre heure, autre puissance, autre origine (feu de cuisine).
- Scène avec **victime** (chap. 23) et lecture des **traces d'actions de lance** des sapeurs-pompiers (6.3.2.5).
- Enquête complexe en entrepôt (chap. 20 et 27), modélisation.
- Laboratoire : études plus poussées (calorimètre, chromatogrammes, essais en grande cellule), en lien avec le laboratoire interne.

## Sources

La **NFPA 921 (édition 2011)** est la référence de base : chaque constat, chaque règle et chaque correction renvoie à un chapitre ou une section de ce guide, affiché sous la forme « NFPA 921 – chap. 6.3.7.1 » (chapitre 6, section 6.3.7.1).

Les autres ouvrages de la bibliothèque méthodologique **illustrent** ces notions : ils apparaissent dans les fiches d'indices (« 📚 Ce qu'en disent d'autres références »), au débriefing, dans le Référentiel (page *Sources et bibliographie*, correspondances par thème), dans le rapport et dans les dossiers d'analyse RETEX.

| Ouvrage | Apport dans le jeu |
|---|---|
| J. J. Lentini, *Scientific Protocols for Fire Investigation* (2013) | Hypothèse nulle, negative corpus, mythes (verre faïencé, écaillage, angle du V, feux « bas »), sources d'erreur, cas réels d'appareils |
| R. K. Chandler, *Fire Investigation* (2009) | Sécurité, tracés (verre, sols, zones protégées), électricité, sources d'ignition (conduits, cigarettes), entretiens, rapport |
| CNPP, EP 02-11 *Méthodologie de recherche des causes d'incendie* | Lecture des indices en français (fumées, couche chaude, bois, béton, plâtres, vitres, fusions), démarche, prélèvements, sécurité |
| ENFSI, *Best Practice Manual for the Investigation of Fire Scenes* (2017) | Primo-intervenants, examen extérieur → intérieur, fouille stratigraphique, prélèvements de liquides inflammables |
| AAAS, *Fire Investigation* (2017) ; Gorbett et al., *Fire Science Reviews* (2015) | Ce que la recherche valide ou non : tracés après embrasement, biais, chiens et détecteurs |
| FEMA/USFA, *Fire Dynamics and Modeling* (2016) ; M. Suzanne, thèse INSA Rouen (2009) ; LCPP (2015) | Dynamique du feu en compartiment, essais, modélisation |
| G. Leberrera, *La recherche des causes et circonstances des incendies* | Cadre français de la RCCI, examen des lieux, électricité, témoignages, rapport |
| Forensis (Forensic Architecture, 2014) ; NFPA 1033 ; D. A. Row, *Report Writing* ; NF C 15-100 | Sources ouvertes et reconstitution ; compétences de l'enquêteur ; rédaction du rapport ; installations électriques |

Dans l'Atelier, chaque constat peut recevoir ses propres sources (champ « Autres sources ») ; à défaut, des sources sont proposées à partir de sa référence NFPA 921. La correspondance est dans `js/data/sources.js`.

## Avertissement

Les références renvoient à la numérotation de la **NFPA 921, édition 2011**. Les autres ouvrages sont cités par chapitre, section ou page ; leurs contenus sont résumés, jamais reproduits. Les textes du jeu sont des reformulations pédagogiques, pas des extraits de la norme. Les personnes, lieux et produits (dont « VOLTEX », « VOLTIX », « Inoxtub », « Ondine ») sont fictifs.
