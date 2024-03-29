import { GUI } from 'dat.gui';

import GlUtil from '../gl/GlUtil';
import Blob from '../gl/blob/Blob';

export class Playground {
  private _gl: GlUtil;
  private _gui: GUI = new GUI();
  private _options = {
    uSpeed: 0.25,
    scale: 1,
    uDecay: 1.2,
    uDisplace: 0.1,
    uComplex: 0.1,
    uWaves: 20,
    uHue: 4.0,
    uRed: 1.5,
    uGreen: 0.7,
    uBlue: 1.5,
    uColorFactor: 0,
  };

  private _blob: Blob | undefined;

  constructor() {
    this._gl = new GlUtil();

    this._init();

    this._addBlobs();
  }

  private _init(): void {
    this.addGuiOption('uSpeed', 0, 1)
      .addGuiOption('uDecay', 0, 1)
      .addGuiOption('uDisplace', 0, 5)
      .addGuiOption('uComplex', 0, 1)
      .addGuiOption('uWaves', 0, 50, 1)
      .addGuiOption('uHue', 0, 50)
      .addGuiOption('uRed', 0, 2.5)
      .addGuiOption('uGreen', 0, 2.5)
      .addGuiOption('uBlue', 0, 2.5)
      .addGuiOption('uColorFactor', 0, 1)
      .addGuiOption('scale', 0, 1, 0.01, (v) => this._blob?.setScale(v));
  }

  private _addBlobs(): void {
    this._blob = Blob.YellowCloud();

    this._gl.scene.add(this._blob);
  }

  private addGuiOption(
    propName: string,
    min: number,
    max: number,
    step = 0.01,
    callback?: (value: number) => void
  ): Playground {
    this._gui.add(this._options, propName, min, max, step).onChange((value) => {
      if (callback) {
        callback(value);
      } else {
        this._blob?.setUniformValue(propName, value);
      }
    });

    return this;
  }
}
