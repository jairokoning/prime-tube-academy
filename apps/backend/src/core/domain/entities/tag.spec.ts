import Tag from './tag';

describe('Tags Units Test', () => {
  it('should create new tag', () => {
    const input = {
      label: 'Nest.js com Domain Driven Design (DDD)',
    };
    const tag = Tag.create(input.label);
    expect(tag.tagId).toBeDefined();
    expect(tag.label).toEqual(input.label);
  });
});
