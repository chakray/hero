import { Input, Component } from '@angular/core';
import { Hero } from './hero';

const badges = [{
  text: 'npm',
  logo: 'assets/hero/npm.png',
  base: 'https://www.npmjs.com/package/@'
}, {
  text: 'Github',
  logo: 'assets/hero/github.png',
  base: 'https://github.com/'
}, {
  text: 'Angular',
  logo: 'assets/hero/ng.png',
  url: 'https://angular.io'
}, {
  text: 'bmVsc29u',
  logo: 'https://avatars3.githubusercontent.com/u/46260795?s=460&v=4',
  url: 'https://github.com/bmVsc29u'
}];

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
}
