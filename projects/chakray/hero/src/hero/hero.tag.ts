import { Input, Component } from '@angular/core';
import { Hero } from './hero';
import { badges } from './badges';
import { HeroConfig } from './hero.config';

@Component({
  selector: 'ch-hero',
  templateUrl: './hero.tag.html',
  styleUrls: ['./hero.tag.sass']
})
export class ChHeroTag extends Hero {
  @Input() set data(v) {
    Object.assign(this, v);
    this.badges.forEach(f => {
      if (!f.base) { return; }
      f.url = f.base + v.mod;
    });
  }
  badges = badges;
  constructor(private cfg: HeroConfig) {
    super();
    const ks = Object.keys(new Hero());
    ks.forEach(k => {
      this[k] = cfg[k];
    });
  }
}
