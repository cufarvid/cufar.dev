import gsap, { Power3 } from 'gsap';

import './style.css';
import GlUtil from './gl/GlUtil';
import Blob from './gl/blob/Blob';

class Main {
  private _isDarkMode = true;
  private _gl: GlUtil;
  private _blob: Blob | undefined;

  constructor() {
    this._gl = new GlUtil();

    this._addListeners();
    this._addBlobs();
  }

  private _addListeners(): void {
    document
      .getElementById('dark-mode-btn')
      ?.addEventListener('click', () => this._toggleDarkMode());
  }

  private _toggleDarkMode(): void {
    if (!this._blob) return;

    gsap.to(this._blob.material.uniforms.uColorFactor, {
      value: this._isDarkMode ? 0 : 1,
      ease: Power3.easeIn,
    });

    gsap.to(this._blob.material.uniforms.uWaves, {
      value: 5,
      yoyo: true,
      repeat: 1,
    });

    this._isDarkMode = !this._isDarkMode;
  }

  private _addBlobs(): void {
    this._blob = Blob.YellowCloud();

    this._gl.scene.add(this._blob);
  }
}

new Main();
