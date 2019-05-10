import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as marked from 'marked';
import { CmMarkedMod, mdLib, MarkedLib } from '@chakray/marked';

import { ChTabViewTag } from './tab-view/tab-view.tag';
import { ChBadgeTag } from './badge/badge.tag';
import { ChHeroTag } from './hero.tag';

export function mdFac() {
  return new MarkedLib(marked);
}

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    CmMarkedMod,
  ],
  providers: [
    { provide: mdLib, useFactory: mdFac }
  ],
  declarations: [
    ChTabViewTag,
    ChBadgeTag,
    ChHeroTag],
  exports: [ChHeroTag]
})
export class ChHeroMod {}
