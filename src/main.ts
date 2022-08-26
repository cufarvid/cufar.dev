import { GUI } from 'dat.gui';

import './style.css';
import GlUtil from './gl/GlUtil';
import Blob from './gl/Blob';

class Main {
  private _gl: GlUtil;
  private _gui: GUI = new GUI();
  private _options = {
    radius: 1.75,
    speed: 0.3,
    hue: 0.5,
    density: 1.5,
    strength: 0.12,
    offset: Math.PI,
  };

  private _blob: Blob | undefined;

  constructor() {
    this._gl = new GlUtil();

    this._init();

    this._addBlobs();
  }

  private _init(): void {
    this._gui.add(this._options, 'speed', 0, 1, 0.01).onChange((value) => {
      if (this._blob) {
        this._blob.material.uniforms.uSpeed.value = value;
      }
    });
    this._gui.add(this._options, 'density', 0, 10, 0.1).onChange((value) => {
      if (this._blob) {
        this._blob.material.uniforms.uNoiseDensity.value = value;
      }
    });
    this._gui.add(this._options, 'strength', 0, 1, 0.01).onChange((value) => {
      if (this._blob) {
        this._blob.material.uniforms.uNoiseStrength.value = value;
      }
    });
    this._gui.add(this._options, 'hue', 0, 1, 0.01).onChange((value) => {
      if (this._blob) {
        this._blob.material.uniforms.uHue.value = value;
      }
    });
    this._gui.add(this._options, 'offset', 0, 10, 0.1).onChange((value) => {
      if (this._blob) {
        this._blob.material.uniforms.uOffset.value = value;
      }
    });
  }

  private _addBlobs(): void {
    const blob1 = new Blob(1.75, 0.3, 0.5, 1.5, 0.12, Math.PI);
    const blob2 = new Blob(1, 0.2, 0.2, 0.5, 0.12, Math.PI * 2);

    blob1.position.x = -2;
    blob2.position.x = 3;

    this._blob = blob1;

    this._gl.scene.add(blob1, blob2);
  }
}

new Main();
