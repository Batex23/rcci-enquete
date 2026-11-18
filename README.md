# 🔥 RCCI · L'Enquêteur

Jeu sérieux de **recherche des causes et circonstances d'incendie (RCCI)**, construit sur la méthodologie de la **NFPA 921 (édition 2011)**.
Public visé : sapeurs-pompiers et enquêteurs qui veulent tendre vers l'expertise RCCI.

Le joueur mène des enquêtes sur des scènes d'incendie en **3D low-poly (vue isométrique)**. Il applique la méthode scientifique de bout en bout : sécurité, constatations, lecture des tracés, fouille, prélèvements, entretiens, OSINT, hypothèses testées et rapport. Ses gains financent de nouveaux outils d'investigation, jusqu'au véhicule et au laboratoire.

▶️ **Jouer** : ouvrir `index.html` via un serveur web (GitHub Pages, ou `python3 -m http.server` en local). Le jeu fonctionne hors ligne : aucune dépendance externe, Three.js est embarqué dans `vendor/`.

---

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

## Éditeur formateur (`editor.html`)

- Édition complète d'un scénario : pièces, ouvertures, mobilier brûlé, tracés (V, clean burn, calcination, zones protégées, tracés irréguliers…), zones, constats et leurs analyses, fouille, PID, prélèvements et résultats de labo, témoins, OSINT, hypothèses, solution, pièges, chronologie de reconstitution.
- **Aperçu 3D en direct** et placement des points en cliquant dans la scène (📍).
- **Créer une variante** : même bâtiment, autre heure, autre puissance, autre origine.
- Contrôle d'intégrité, import/export JSON, publication dans le tableau des missions du navigateur.

Pour intégrer définitivement un scénario au dépôt : exporter le JSON, le placer dans `js/data/scenarios/`, l'importer dans `js/data/scenarios/index.js`.

## Structure

```
index.html              Jeu (QG, enquête, débriefing)
editor.html             Éditeur formateur
css/style.css
vendor/                 Three.js r160 (embarqué, hors ligne)
js/main.js              QG : missions, équipement, référentiel, carrière
js/state.js             Sauvegarde locale (carrière, scénarios formateur)
js/engine/              Moteur 3D (scène, textures procédurales des effets du feu)
js/game/                Logique d'enquête et notation
js/screens/             Écrans : enquête, débriefing, rapport, outils d'analyse
js/editor/              Éditeur formateur (schéma, formulaires)
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
