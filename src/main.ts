import gsap, { Power3 } from 'gsap';

import './style.css';
import GlUtil from './gl/GlUtil';
import Blob from './gl/blob/Blob';

class Main {
  private _colorScheme: 'dark' | 'light';
  private _gl: GlUtil;
  private _blob: Blob | undefined;

  constructor() {
    this._gl = new GlUtil();
    this._colorScheme = this._getPreferredColorScheme();

    this._addListeners();
    this._addBlobs();
    this._setColorScheme(this._colorScheme);
  }

  private _addListeners(): void {
    // Toggle dark mode with button press
    document
      .getElementById('dark-mode-btn')
      ?.addEventListener('click', () => this._toggleDarkMode());

    // Toggle dark mode with user setting preference
    window
      .matchMedia?.('(prefers-color-scheme: dark)')
      .addEventListener('change', () =>
        this._setColorScheme(this._getPreferredColorScheme())
      );
  }

  private _setColorScheme(scheme: 'dark' | 'light'): void {
    if (!this._blob) return;

    gsap.to(this._blob.material.uniforms.uColorFactor, {
      value: scheme === 'dark' ? 1 : 0,
      ease: Power3.easeIn,
    });

    gsap.to(this._blob.material.uniforms.uWaves, {
      value: 5,
      yoyo: true,
      repeat: 1,
    });

    document.body.classList.toggle('dark-mode');

    this._colorScheme = scheme;
  }

  private _toggleDarkMode(): void {
    this._setColorScheme(this._colorScheme === 'dark' ? 'light' : 'dark');
  }

  private _addBlobs(): void {
    this._blob = Blob.YellowCloud();

    this._gl.scene.add(this._blob);
  }

  private _getPreferredColorScheme(): 'dark' | 'light' {
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
}

new Main();
