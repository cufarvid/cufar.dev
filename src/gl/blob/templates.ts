import { IUniform } from 'three';

export type TUniforms = { [p: string]: IUniform };

export const PINK_CLOUD: TUniforms = {
  uTime: { value: 0.1 },
  uSpeed: { value: 0.25 },
  uDecay: { value: 1.2 },
  uSize: { value: 3 },
  uDisplace: { value: 0.1 },
  uComplex: { value: 0.1 },
  uWaves: { value: 20 },
  uHue: { value: 4.0 },
  uRed: { value: 1.5 },
  uGreen: { value: 0.7 },
  uBlue: { value: 1.5 },
  uColorFactor: { value: 0 },
};

export const YELLOW_CLOUD: TUniforms = {
  uTime: { value: 0.1 },
  uSpeed: { value: 0.25 },
  uDecay: { value: 1.2 },
  uSize: { value: 3 },
  uDisplace: { value: 0.1 },
  uComplex: { value: 0.1 },
  uWaves: { value: 20 },
  uHue: { value: 4.0 },
  uRed: { value: 2.5 },
  uGreen: { value: 1 },
  uBlue: { value: 0 },
  uColorFactor: { value: 0 },
};

export const ALIEN_BRAIN: TUniforms = {
  uTime: { value: 0.1 },
  uSpeed: { value: 0.25 },
  uDecay: { value: 1.2 },
  uSize: { value: 3 },
  uDisplace: { value: 0.1 },
  uComplex: { value: 0.1 },
  uWaves: { value: 20 },
  uHue: { value: 15 },
  uRed: { value: 0.3 },
  uGreen: { value: 1.5 },
  uBlue: { value: 2.5 },
  uColorFactor: { value: 0 },
};

export const COLOR_MIX: TUniforms = {
  uTime: { value: 0.1 },
  uSpeed: { value: 0.25 },
  uDecay: { value: 1.2 },
  uSize: { value: 3 },
  uDisplace: { value: 0.1 },
  uComplex: { value: 0.1 },
  uWaves: { value: 20 },
  uHue: { value: 40 },
  uRed: { value: 2.5 },
  uGreen: { value: 1 },
  uBlue: { value: 1 },
  uColorFactor: { value: 0 },
};
