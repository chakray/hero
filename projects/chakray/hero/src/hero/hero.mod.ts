import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as marked from 'marked';
import { CmMarkedMod, mdLib, MarkedLib } from '@chakray/marked';

import { ChBadgeTag } from './badge/badge.tag';
import { ChHeroTag } from './hero.tag';

export function mdFac() {
  return new MarkedLib(marked);
}

@NgModule({
  imports: [
    CommonModule,
    CmMarkedMod,
  ],
  providers: [
    { provide: mdLib, useFactory: mdFac }
  ],
  declarations: [
    ChBadgeTag,
    ChHeroTag],
  exports: [ChHeroTag]
})
export class ChHeroMod {}
