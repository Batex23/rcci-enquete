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
- **Débriefing** : étoiles, badges (Méthodique, Œil de lynx, Lucide, Impartial…), pièges évités ou non, reconstitution 3D.

### Les enquêtes

| Niveau | Enquête | Ce qu'on apprend |
|---|---|---|
| 1 | **Feu de cuisine** (tutoriel en doublon) | La méthode pas à pas : sécurité, extérieur, photo avant tout, lecture d'un V, fouille, vérifier les autres sources, témoin, hypothèses, conclusion |
| 2 | **Pavillon Durand** | Embrasement généralisé, tracés trompeurs, PID, témoignage orienté, produit rappelé, cartographie des arcs |
| 3 | **Maison à étage — feu de toiture** | Toiture effondrée, feu qui voyage de haut en bas, brûlures par chute de matériaux, charpente et conduit de poêle, pyrolyse lente du bois |

## Boucle de jeu

| Étape NFPA 921 | Dans le jeu |
|---|---|
| 4.3.1 Reconnaître le besoin | Ordre de mission, compte rendu SDIS, météo |
| 4.3.2 Définir le problème | Évaluation de sécurité (chap. 12), choix des équipements |
| 4.3.3 Collecter les données | Zones de l'extérieur vers l'intérieur, cavaliers jaunes numérotés, photos, fouille par couches, scellés, témoins, OSINT |
| 4.3.4 Analyser les données | Chaque constat doit être **interprété** (cataloguer ≠ analyser) |
| 4.3.5 Développer des hypothèses | Hypothèses d'origine et de cause |
| 4.3.6 Tester les hypothèses | Chaque donnée est classée *soutient / neutre / réfute* ; test de compétence de la source (18.4.2) |
| Hypothèse finale & rapport | Origine, cause, **niveau de certitude** (4.5), **classification** (19.2.1), planche photo, rapport imprimable |

### Ce qui est évalué

- **Méthode (40)** : sécurité, ordre d'examen (17.3.1.3), photos avant toute modification (15.2), fouille documentée (17.3.2), contenants et échantillons de comparaison (16.5.4 / 16.6.2), entretiens sans question orientée (13.4), sources ouvertes, analyse de toutes les données.
- **Analyse (30)** : interprétation des effets du feu, hypothèses alternatives, réfutations fondées sur des faits, pas d'appui sur une rumeur ou un témoignage contaminé, test de compétence.
- **Conclusion (30)** : origine, cause, certitude **cohérente avec les données réellement réunies**, classification. Une cause seulement « possible » impose « indéterminée ».
- **Pénalités** : *negative corpus* (18.6.5), conclusion criminelle infondée, écarts de méthode.

### Pièges de l'enquête n°1 (Pavillon Durand)

Tracés irréguliers post-embrasement, lecture PID positive due aux produits de pyrolyse, faïençage du verre, jerrican dans le garage, témoignage orienté d'une voisine, article de presse, multiprise faisant l'objet d'un rappel (RappelConso) mais hors du point de défaillance, et une hypothèse « cigarette » crédible à réfuter par la localisation de l'origine.

---

## Progression

- **Crédits** : honoraires des missions (selon la note), dépensés en équipements et en analyses de laboratoire.
- **Grades** : Enquêteur stagiaire → Enquêteur RCCI → Enquêteur confirmé → Expert RCCI → Expert près la cour d'appel.
- **Équipements** : jauge de carbonisation/calcination, contenants pour liquides inflammables, kit de cartographie des arcs, PID, calculateur de dynamique du feu (Thomas, Babrauskas, Heskestad), OSINT pro, drone, photogrammétrie, véhicule d'investigation, équipe cynophile, laboratoire interne.
- **Modes** : *Formation* (correction immédiate) ou *Expertise* (tout est révélé au débriefing), aide à la recherche activable.

## Atelier de scènes (`editor.html`) — façon Les Sims

Cinq modes, de la construction au dossier partagé :

| Mode | Ce qu'on y fait |
|---|---|
| 🏗️ **Construire** | Dessiner les pièces à la souris sur une grille (pas de 25 cm), les déplacer, les redimensionner par les bords ; poser portes, fenêtres, baies, portes de garage sur les murs ; catalogue de mobilier (touche **R** pour pivoter) ; **niveaux** (R+1, R+2… avec reprise de l'emprise), **trémies** et escaliers |
| 🔥 **Effets du feu** | Par pièce : hauteur de la couche chaude et densité de suie ; pinceaux muraux (tracé en V, clean burn, calcination, zone protégée, démarcation) et au sol (tracés irréguliers, consommation, zone protégée, débris) ; degré de combustion de chaque objet |
| 📍 **Indices & photos** | Poser les **constats** dans la 3D avec leur **lecture** (interprétation réelle), pièges éventuels et référence NFPA ; **épingler de vraies photos** à l'endroit et dans la direction de la prise de vue, liées ou non à un constat ; zone de fouille |
| 🧾 **Enquête** | Mission, compte rendu SDIS, témoins, OSINT, prélèvements et résultats, hypothèses, solution, pièges, chronologie ; génération automatique des zones |
| 📘 **RETEX** | Auteur, contexte, enseignements, points positifs, axes d'amélioration, recommandations ; **aperçu de la vue Analyse** ; **export HTML autonome** |

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
vendor/                 Three.js r160 (embarqué, hors ligne)
js/main.js              QG : missions, équipement, référentiel, carrière
js/state.js             Sauvegarde locale (carrière, scénarios formateur)
js/engine/              Moteur 3D (scène, textures procédurales des effets du feu)
js/game/                Logique d'enquête et notation
js/screens/             Écrans : enquête, débriefing, rapport, outils d'analyse
js/editor/              Atelier de scènes (schéma, formulaires, outils)
js/retex/               Export et point d'entrée du dossier RETEX autonome
js/stockage.js          IndexedDB (dossiers, brouillon, photos)
js/data/nfpa.js         Référentiel NFPA 921 (2011), reformulé en français
js/data/materiaux.js    Températures, puissances, fusion (tableau mnémotechnique de l'auteur)
js/data/scenarios/      Scénarios d'enquête (JSON)
```

## Feuille de route

- Feux de véhicules (chap. 25), avec le véhicule d'investigation.
- Variantes du pavillon : autre heure, autre puissance, autre origine (feu de cuisine).
- Scène avec **victime** (chap. 23) et lecture des **traces d'actions de lance** des sapeurs-pompiers (6.3.2.5).
- Batteries lithium-ion, enquête complexe en entrepôt (chap. 20 et 27), modélisation.

## Avertissement

Les références renvoient à la numérotation de la **NFPA 921, édition 2011**. Les textes du jeu sont des reformulations pédagogiques, pas des extraits de la norme. Les personnes, lieux et produits (dont « VOLTEX ») sont fictifs.
