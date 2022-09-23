varying vec2 vUv;
varying float vNoise;

uniform float uTime;
uniform float uDisplace;
uniform float uDecay;
uniform float uSize;
uniform float uComplex;
uniform float uWaves;
uniform float uHue;

#include util/util.glsl
#include util/pnoise.glsl

float turbulence(vec3 p) {
  float t = -0.005;
  for (float f = 1.0; f <= 1.0; f++){
    float power = pow(1.3, f);
    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);
  }
  return t;
}

void main() {
  vUv = uv;

  vNoise = (0.3 *  -uHue) * turbulence(uDecay * abs(normal + uTime));

  float noise = (2.0 *  -uWaves) * turbulence(uDecay * abs(normal + uTime));
  float b = pnoise(uComplex * (position) + vec3((uDecay * 2.0) * uTime), vec3(100.0));
  float displacement = -atan(noise) + tan(b * uDisplace);
  vec3 p = position + (normal * displacement);

  gl_Position = (projectionMatrix * modelViewMatrix) * vec4(p, 1.0);
}
