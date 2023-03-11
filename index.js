// scripts
const modeChanger = document.getElementById('mode');
const mode = document.getElementById('moder');

mode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// canvas

import createGlobe from 'https://cdn.skypack.dev/cobe';

let phi = 0;
let canvas = document.getElementById('cobe');

const globe = createGlobe(canvas, {
  devicePixelRatio: 2,
  width: 1000,
  height: 1000,
  phi: 0,
  theta: 0,
  dark: 0,
  diffuse: 1.2,
  scale: 1.1,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [1, 1, 1],
  markerColor: [1, 0.5, 1],
  glowColor: [1, 1, 1],
  offset: [0, 0],
  markers: [
    { location: [37.7595, -122.4367], size: 0.03 },
    { location: [40.7128, -74.006], size: 0.1 },
  ],
  onRender: (state) => {
    state.phi = phi;
    phi += 0.01;
  },
});
