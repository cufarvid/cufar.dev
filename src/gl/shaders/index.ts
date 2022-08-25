// import { classic } from './classic3d';
// import { periodic } from './periodic3d';
import { noise3d } from './noise3d';
import { rotate } from './rotate';

export const vertex = `
varying vec2 vUv;
varying float vDistort;

uniform float uTime;
uniform float uSpeed;
uniform float uNoiseStrength;
uniform float uNoiseDensity;
uniform float uFreq;
uniform float uAmp;
uniform float uOffset;

${noise3d}
${rotate}

float map(float value, float inMin, float inMax, float outMin, float outMax) {
  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
}

void main() {
  vUv = uv;

  float t = uTime * uSpeed;
  float distortion = pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;

  vec3 pos = position + (normal * distortion);
  float angle = sin(uv.y * uFreq + t) * uAmp;
  pos = rotateY(pos, angle);

  pos *= map(sin(uTime + uOffset), -1.0, 1.0, 1.0, 1.2);

  vDistort = distortion;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`;

export const fragment = `
varying vec2 vUv;
varying float vDistort;

uniform float uTime;
uniform float uHue;
uniform float uAlpha;

vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  float distort = vDistort * 2.0;

  vec3 brightness = vec3(0.5, 0.5, 0.5);
  vec3 contrast = vec3(0.5, 0.5, 0.5);
  vec3 oscilation = vec3(1.0, 1.0, 1.0);
  vec3 phase = vec3(0.0, 0.1, 0.2);

  vec3 color = cosPalette(uHue + distort, brightness, contrast, oscilation, phase);

  gl_FragColor = vec4(color, uAlpha);
}`;
