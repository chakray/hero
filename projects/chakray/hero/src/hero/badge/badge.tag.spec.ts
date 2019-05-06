import { Spec } from '../../../testing';
import { ChBadgeTag as Tag } from './badge.tag';

Spec.outline(Tag, (ref) => {
  let tag: Tag;
  beforeEach(() => {
    tag = ref.tag;
  });
});
