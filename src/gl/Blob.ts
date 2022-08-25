import { IcosahedronGeometry, Mesh, Object3D, ShaderMaterial } from 'three';
import { fragment, vertex } from './shaders';

export default class Blob extends Object3D {
  private readonly _geometry: IcosahedronGeometry;
  private readonly _material: ShaderMaterial;
  private readonly _mesh: Mesh;

  public get material(): ShaderMaterial {
    return this._material;
  }

  constructor(
    radius: number,
    speed: number,
    color: number,
    density: number,
    strength: number,
    offset: number
  ) {
    super();

    this._geometry = new IcosahedronGeometry(radius, 64);
    this._material = new ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: speed },
        uNoiseDensity: { value: density },
        uNoiseStrength: { value: strength },
        uFreq: { value: 3 },
        uAmp: { value: 6 },
        uHue: { value: color },
        uOffset: { value: offset },
        red: { value: 0 },
        green: { value: 0 },
        blue: { value: 0 },
        uAlpha: { value: 1.0 },
      },
      defines: {
        PI: Math.PI,
      },
      transparent: true,
    });

    this._mesh = new Mesh(this._geometry, this._material);

    this.add(this._mesh);
  }
}
