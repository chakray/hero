import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Hero } from './hero';

export function mockHero() {
  return new Hero();
}
export const heroConfig = new InjectionToken<Hero>('hero.cfg', {
  providedIn: 'root', factory: mockHero
});

@Injectable({ providedIn: 'root' })
export class HeroConfig {
  mod = 'chakray/hero';
  synopsis = 'no comment';
  tabs = [];
  constructor(@Inject(heroConfig) cfg: Hero) {
    Object.assign(this, cfg);
  }
}
