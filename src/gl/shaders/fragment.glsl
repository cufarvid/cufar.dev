varying float vNoise;

uniform float uTime;
uniform float uRed;
uniform float uGreen;
uniform float uBlue;
uniform float uColorFactor;

void main() {
  float r = normalize(vNoise + uRed);
  float g = cos(vNoise + uGreen);
  float b = sin(vNoise + uBlue);

  vec3 colors = vec3(r, g, b);
  vec3 lum = vec3(0.21, 0.71, 0.07);
  float gray = dot(colors.rgb, lum.rgb);

  gl_FragColor = vec4(colors.rgb * (1.0 - uColorFactor) + (gray * uColorFactor), 1.0);
}
