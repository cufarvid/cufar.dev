varying float vNoise;

uniform float uTime;
uniform float uRed;
uniform float uGreen;
uniform float uBlue;

void main() {
  float r = normalize(vNoise + uRed);
  float g = cos(vNoise + uGreen);
  float b = sin(vNoise + uBlue);

  gl_FragColor = vec4(r, g, b, 1.0);
}
