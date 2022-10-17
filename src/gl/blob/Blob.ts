import {
  IcosahedronGeometry,
  IUniform,
  Mesh,
  Object3D,
  ShaderMaterial,
} from 'three';
import { vertex, fragment } from '../shaders';
import { TUniforms, YELLOW_CLOUD } from './templates';

export default class Blob extends Object3D {
  private readonly _geometry: IcosahedronGeometry;
  private readonly _material: ShaderMaterial;
  private readonly _mesh: Mesh;

  public get material(): ShaderMaterial {
    return this._material;
  }

  constructor(uniforms: TUniforms, radius = 1) {
    super();

    this._geometry = new IcosahedronGeometry(radius, 64);
    this._material = new ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: uniforms,
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

  public static YellowCloud(): Blob {
    return new Blob(YELLOW_CLOUD);
  }
}
