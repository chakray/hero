import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../data';

@Component({
  selector: 'ch-marked-tab',
  templateUrl: './marked-tab.tag.html',
  styleUrls: ['./marked-tab.tag.sass']
})
export class ChMarkedTabTag {
  content = '';
  constructor(private route: ActivatedRoute,
              private data: Data) {
    route.data.subscribe(({ loader: l }) => {
      data.notes(l.file, l.branch).subscribe((d: any) => {
        this.content = d.content;
      });
    });
  }
}
