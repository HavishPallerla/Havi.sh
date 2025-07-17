// Utility functions for swirl.js

const TAU = Math.PI * 2;

function rand(n) {
  return Math.random() * n;
}

function randRange(n) {
  return n - rand(2 * n);
}

function fadeInOut(t, m) {
  let hm = 0.5 * m;
  return Math.abs((t + hm) % m - hm) / hm;
}

function lerp(n1, n2, speed) {
  return (1 - speed) * n1 + speed * n2;
}

// Add missing trigonometric functions
function cos(n) {
  return Math.cos(n);
}

function sin(n) {
  return Math.sin(n);
}

// Export for global use
if (typeof window !== 'undefined') {
  window.TAU = TAU;
  window.rand = rand;
  window.randRange = randRange;
  window.fadeInOut = fadeInOut;
  window.lerp = lerp;
  window.cos = cos;
  window.sin = sin;
}
