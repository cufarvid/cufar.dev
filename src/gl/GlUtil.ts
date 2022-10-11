import { Clock, PerspectiveCamera, Scene, Vector2, WebGLRenderer } from 'three';
import gsap from 'gsap';

import Blob from './blob/Blob';

export default class GlUtil {
  private readonly _renderer: WebGLRenderer;
  private readonly _camera: PerspectiveCamera;
  private readonly _scene: Scene = new Scene();
  private readonly _clock: Clock = new Clock();
  private readonly _mouse: Vector2 = new Vector2();
  private readonly _mouseTarget: Vector2 = new Vector2();

  public get scene(): Scene {
    return this._scene;
  }

  constructor() {
    this._renderer = new WebGLRenderer({
      canvas: document.getElementById('canvas') ?? undefined,
    });
    this._renderer.setPixelRatio(window.devicePixelRatio);
    this._renderer.setSize(window.innerWidth, window.innerHeight);
    this._renderer.setClearColor(0xffffff, 0);

    this._camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this._camera.position.setZ(5);

    this._addListeners();

    this._animate();
  }

  private _addListeners(): void {
    window.addEventListener('resize', () => this._resize());
    window.addEventListener('mousemove', (event) => this._onMouseMove(event));
  }

  private _animate(): void {
    requestAnimationFrame(() => this._animate());
    this._render();
  }

  private _render(): void {
    this._scene.children.forEach((mesh) => {
      const { uSpeed, uTime } = (mesh as Blob).material.uniforms;
      uTime.value = uSpeed.value * this._clock.getElapsedTime();
    });

    this._mouseTarget.set(
      gsap.utils.interpolate(this._mouseTarget.x, this._mouse.x, 0.042),
      gsap.utils.interpolate(this._mouseTarget.y, this._mouse.y, 0.042)
    );

    this._scene.rotation.set(
      this._mouseTarget.y * 0.25,
      this._mouseTarget.x * 0.25,
      0
    );

    this._renderer.render(this._scene, this._camera);
  }

  private _resize(): void {
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;

    this._camera.aspect = width / height;
    this._renderer.setSize(width, height);

    this._camera.updateProjectionMatrix();
  }

  private _onMouseMove(event: MouseEvent): void {
    this._mouse.set(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );
  }
}
