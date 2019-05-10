import { Input, Component } from '@angular/core';

@Component({
  selector: 'ch-tab-view',
  templateUrl: './tab-view.tag.html',
  styleUrls: ['./tab-view.tag.sass']
})
export class ChTabViewTag {
  @Input() tabs = [];
}
