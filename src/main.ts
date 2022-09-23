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
      this._blob?.setUniformValue('uSpeed', value);
    });
    this._gui.add(this._options, 'density', 0, 10, 0.1).onChange((value) => {
      this._blob?.setUniformValue('uNoiseDensity', value);
    });
    this._gui.add(this._options, 'strength', 0, 1, 0.01).onChange((value) => {
      this._blob?.setUniformValue('uNoiseStrength', value);
    });
    this._gui.add(this._options, 'hue', 0, 1, 0.01).onChange((value) => {
      this._blob?.setUniformValue('uHue', value);
    });
    this._gui.add(this._options, 'offset', 0, 10, 0.1).onChange((value) => {
      this._blob?.setUniformValue('uOffset', value);
    });
  }

  private _addBlobs(): void {
    const blob1 = new Blob(1.75, 0.3, 0.5, 1.5, 0.12, Math.PI);

    this._blob = blob1;

    this._gl.scene.add(blob1);
  }
}

new Main();
