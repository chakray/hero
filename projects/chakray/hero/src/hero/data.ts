import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { HeroConfig } from './hero.config';

const gcu = 'https://raw.githubusercontent.com';
function ghurl(mod, res) {
  return `${gcu}/${mod}/${res}`;
}

@Injectable({ providedIn: 'root' })
export class Data {
  constructor(private cfg: HeroConfig, private http: HttpClient) {}
  notes(file, branch = 'master') {
    const url = ghurl(this.cfg.mod, `${branch}/notes/${file}.md`);
    return this.http.get(url, { responseType: 'text' }).pipe(map(d => {
      const [title, ...content] = d.split('\n');
      return { title: title.split(' ')[1], content: content.join('\n') };
    }));
  }
}
