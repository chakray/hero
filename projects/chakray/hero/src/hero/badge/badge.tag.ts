import { Input, Component } from '@angular/core';

@Component({
  selector: 'ch-badge',
  templateUrl: './badge.tag.html',
  styleUrls: ['./badge.tag.sass']
})
export class ChBadgeTag {
  @Input() logo;
  @Input() text;
  @Input() url;
}
