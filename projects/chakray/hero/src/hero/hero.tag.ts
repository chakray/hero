import { Input, Component } from '@angular/core';
import { Hero } from './hero';

const badges = [{
  text: 'Github',
  logo: 'https://github.com/chakray/marked/blob/master/src/assets/github.png?raw=true',
  url: 'https://github.com/chakray/marked'
}, {
  text: 'Angular',
  logo: 'https://github.com/chakray/marked/blob/master/src/assets/ng.png?raw=true',
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
  }
  badges = badges;
}
