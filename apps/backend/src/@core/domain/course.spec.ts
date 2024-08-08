import Course from './course';

describe('Course Units Test', () => {
  it('should add new course', () => {
    const input = {
      title: 'Nest.js com Domain Driven Design (DDD)',
      description: 'Curso completo dos fundamentos do Typescript',
      url: 'https://www.youtube.com/watch?v=XTmvAj5OSQI&ab_channel=FullCycle',
      year: 2022,
      channel: 'FullCycle',
      status: 'PENDING',
      tags: ['745a1869-9c90-4ed9-971e-a738e41adeb4'],
      added_by: 'John Doe',
    };
    const course = Course.add(
      input.title,
      input.description,
      input.url,
      input.year,
      input.channel,
      input.status,
      input.tags,
      input.added_by,
    );
    expect(course).toEqual(course);
  });
});
