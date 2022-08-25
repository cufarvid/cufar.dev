import GlUtil from './gl/GlUtil';
import Blob from './gl/Blob';

class Main {
  private _gl: GlUtil;

  constructor() {
    this._gl = new GlUtil();

    this._addBlobs();
  }

  private _addBlobs(): void {
    const blob1 = new Blob(1.75, 0.3, 0.5, 1.5, 0.12, Math.PI);

    this._gl.scene.add(blob1);
  }
}

new Main();
