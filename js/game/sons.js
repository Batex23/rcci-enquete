// Petits sons de jeu synthétisés (aucun fichier audio), désactivables
let ctx = null;
let muet = false;
try { muet = localStorage.getItem('rcci-enquete.muet') === '1'; } catch { /* ignoré */ }

export function estMuet() { return muet; }
export function basculerSon() { muet = !muet; try { localStorage.setItem('rcci-enquete.muet', muet ? '1' : '0'); } catch { /* ignoré */ } return muet; }

function note(freq, t0, dur, type = 'sine', vol = 0.12) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, ctx.currentTime + t0);
  g.gain.setValueAtTime(0, ctx.currentTime + t0);
  g.gain.linearRampToValueAtTime(vol, ctx.currentTime + t0 + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t0 + dur);
  o.connect(g).connect(ctx.destination);
  o.start(ctx.currentTime + t0); o.stop(ctx.currentTime + t0 + dur + 0.05);
}

export function son(type) {
  if (muet) return;
  try {
    ctx ||= new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    switch (type) {
      case 'trouve': note(660, 0, 0.12, 'triangle'); note(990, 0.08, 0.18, 'triangle'); break;
      case 'ok': note(523, 0, 0.12); note(659, 0.09, 0.12); note(784, 0.18, 0.25); break;
      case 'ko': note(300, 0, 0.18, 'sawtooth', 0.06); note(220, 0.12, 0.25, 'sawtooth', 0.06); break;
      case 'photo': note(1800, 0, 0.05, 'square', 0.05); note(900, 0.05, 0.08, 'square', 0.04); break;
      case 'page': note(420, 0, 0.06, 'triangle', 0.05); break;
      case 'objectif': note(784, 0, 0.1); note(988, 0.08, 0.1); note(1175, 0.16, 0.3); break;
      case 'victoire': [523, 659, 784, 1047].forEach((f, i) => note(f, i * 0.12, 0.35, 'triangle', 0.1)); break;
    }
  } catch { /* audio indisponible */ }
}
