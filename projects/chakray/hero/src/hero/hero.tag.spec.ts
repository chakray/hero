import { Spec } from '../../testing';
import { ChHeroTag as Tag } from './hero.tag';

Spec.outline(Tag, (ref) => {
  let tag: Tag;
  beforeEach(() => {
    tag = ref.tag;
  });
});
