import {
  IcosahedronGeometry,
  IUniform,
  Mesh,
  Object3D,
  ShaderMaterial,
} from 'three';
import { vertex, fragment } from './shaders';

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
    offset: number,
    frequency = 3,
    amplitude = 6
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
        uFreq: { value: frequency },
        uAmp: { value: amplitude },
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

  public setUniformValue<T>(uniformName: string, value: T): void {
    const uniform: IUniform = this._material.uniforms[uniformName];

    if (!uniform) return;

    uniform.value = value;
  }
}
