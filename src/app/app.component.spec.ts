import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { Spec } from '@chakray/utils/testing';
import { heroConfig } from '@chakray/hero';

import { AppTag as Tag } from './app.tag';

Spec.tag(Tag, {
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    RouterTestingModule
  ],
  providers: [
    { provide: heroConfig, useValue: { mod: 'test' } }
  ]
}, (ref) => {
  let t: Tag;
  beforeEach(() => {
    t = ref.tag;
  });
});
