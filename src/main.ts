import { GUI } from 'dat.gui';

import './style.css';
import GlUtil from './gl/GlUtil';
import Blob from './gl/Blob';

class Main {
  private _gl: GlUtil;
  private _gui: GUI = new GUI();
  private _options = {
    speed: 0.4,
    scale: 1,
    perlins: 1.0,
    uDecay: 1.2,
    uDisplace: 0.1,
    uComplex: 0.1,
    uWaves: 20,
    uHue: 4.0,
    uRed: 1.5,
    uGreen: 0.7,
    uBlue: 1.5,
  };

  private _blob: Blob | undefined;

  constructor() {
    this._gl = new GlUtil();

    this._init();

    this._addBlobs();
  }

  private _init(): void {
    this._gui.add(this._options, 'speed', 0, 1, 0.01).onChange((value) => {
      this._blob?.setUniformValue('speed', value);
    });
    this._gui.add(this._options, 'scale', 0, 1, 0.01).onChange((value) => {
      this._blob?.setScale(value);
    });
    this._gui.add(this._options, 'perlins', 0, 10, 0.01).onChange((value) => {
      this._blob?.setUniformValue('perlins', value);
    });
    this._gui.add(this._options, 'uDecay', 0, 1, 0.01).onChange((value) => {
      this._blob?.setUniformValue('uDecay', value);
    });
    this._gui.add(this._options, 'uDisplace', 0, 5, 0.01).onChange((value) => {
      this._blob?.setUniformValue('uDisplace', value);
    });
    this._gui.add(this._options, 'uComplex', 0, 1, 0.01).onChange((value) => {
      this._blob?.setUniformValue('uComplex', value);
    });
    this._gui.add(this._options, 'uWaves', 0, 10, 0.01).onChange((value) => {
      this._blob?.setUniformValue('uWaves', value);
    });
    this._gui.add(this._options, 'uHue', 0, 50, 0.01).onChange((value) => {
      this._blob?.setUniformValue('uHue', value);
    });
    this._gui.add(this._options, 'uRed', 0, 2.5, 0.01).onChange((value) => {
      this._blob?.setUniformValue('uRed', value);
    });
    this._gui.add(this._options, 'uGreen', 0, 2.5, 0.01).onChange((value) => {
      this._blob?.setUniformValue('uGreen', value);
    });
    this._gui.add(this._options, 'uBlue', 0, 2.5, 0.01).onChange((value) => {
      this._blob?.setUniformValue('uBlue', value);
    });
  }

  private _addBlobs(): void {
    const blob1 = new Blob(1);

    this._blob = blob1;

    this._gl.scene.add(blob1);
  }
}

new Main();
