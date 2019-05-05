import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  data = {
    mod: '@chakray/hero',
    synopsis: 'quick setup for github-pages lander',
    setup: {
      title: 'Installation',
      content: ''
    }
  };
  constructor(private ti: Title,
              private http: HttpClient) {
    ti.setTitle(this.data.mod);
    const url = 'https://raw.githubusercontent.com/chakray/hero/master/notes/setup.md';
    http.get(url, { responseType: 'text' }).subscribe(d => {
      const [title, ...content] = d.split('\n');
      const o = { title: title.split(' ')[1], content: content.join('\n') };
      Object.assign(this.data.setup, o);
    });
  }
}
