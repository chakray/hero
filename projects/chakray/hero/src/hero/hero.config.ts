import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeroConfig {
  mod = 'chakray/hero';
  synopsis = 'no comment';
  tabs = [];
  constructor() {
    Object.assign(this, arguments[0]);
  }
}
