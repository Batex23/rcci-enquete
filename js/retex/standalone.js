// Point d'entrée du fichier RETEX autonome (compilé dans dist/retex-viewer.js)
import { ouvrirAnalyse } from '../screens/analyseView.js';

const d = window.__RETEX__;
document.title = d?.titre ? `RETEX · ${d.titre}` : 'Dossier RETEX';
ouvrirAnalyse(d, document.getElementById('screen'), { standalone: true });
