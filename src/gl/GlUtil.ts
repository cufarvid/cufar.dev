import { Clock, PerspectiveCamera, Scene, Vector2, WebGLRenderer } from 'three';
import Blob from './Blob';

export default class GlUtil {
  private readonly _camera: PerspectiveCamera;
  private readonly _scene: Scene;
  private _renderer: WebGLRenderer;
  private _clock: Clock;
  private _mouse: Vector2;
  private _mouseTarget: Vector2;

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
    this._camera.position.z = 5;

    this._scene = new Scene();

    this._clock = new Clock();

    this._mouse = new Vector2();
    this._mouseTarget = new Vector2();

    this._addListeners();

    this._animate();
  }

  private _addListeners(): void {
    window.addEventListener('resize', () => this._resize());
    window.addEventListener('mousemove', (event) => this._mouseMove(event));
  }

  private _animate(): void {
    requestAnimationFrame(() => this._animate());
    this._render();
  }

  private _render(): void {
    this._scene.children.forEach((mesh) => {
      const blob = mesh as Blob;
      blob.material.uniforms.uTime.value = this._clock.getElapsedTime();
    });

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

  private _mouseMove(event: MouseEvent): void {
    this._mouse.setX((event.clientX / window.innerWidth) * 2 - 1);
    this._mouse.setY(-(event.clientY / window.innerHeight) * 2 + 1);
  }
}
