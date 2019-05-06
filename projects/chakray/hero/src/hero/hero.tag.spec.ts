import { Spec } from '../../testing';
import { ChHeroTag as Tag } from './hero.tag';

Spec.outline(Tag, (ref) => {
  let tag: Tag;
  beforeEach(() => {
    tag = ref.tag;
  });
  ref.prop('data', () => {
    it('should update properties', () => {
      console.log('asdf', tag)
      tag.data = { mod: 'test-tag' };
      expect(tag.badges[0].url.endsWith('test-tag')).toBeTruthy();
    });
  });
});
