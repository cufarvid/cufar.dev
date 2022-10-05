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

  constructor(radius: number) {
    super();

    this._geometry = new IcosahedronGeometry(radius, 64);
    this._material = new ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uTime: { value: 0.1 },
        uSpeed: { value: 0.25 },
        uDecay: { value: 1.2 },
        uSize: { value: 3 },
        uDisplace: { value: 0.1 },
        uComplex: { value: 0.1 },
        uWaves: { value: 20 },
        uHue: { value: 4.0 },
        uRed: { value: 1.5 },
        uGreen: { value: 0.7 },
        uBlue: { value: 1.5 },
        uColorFactor: { value: 0 },
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

  public setScale(value: number): void {
    this._geometry.scale(value, value, value);
  }
}
