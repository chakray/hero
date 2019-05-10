import { Input, Component } from '@angular/core';
import { Hero } from './hero';
import { badges } from './badges';

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
  tabs = [{
    link: 'setup',
    text: 'Setup'
  }, {
    link: 'demo',
    text: 'Demo'
  }]
}
