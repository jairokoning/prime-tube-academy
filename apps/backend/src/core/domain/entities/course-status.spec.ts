import Course from './course';

describe('Course Status Units Test', () => {
  it('should change course status', () => {
    const input = {
      title: 'Learn NestJS – Complete Course',
      description:
        'Learn NestJS in this comprehensive course for beginners. NestJS is a framework for building efficient, scalable Node.js web applications.',
      url: 'https://www.youtube.com/watch?v=sFnAHC9lLaw',
      year: 2024,
      channel: 'freeCodeCamp.org',
      tags: [{ tagId: '745a1869-9c90-4ed9-971e-a738e41adeb4', label: 'nest' }],
      userId: '745a1869-9c90-4ed9-971e-a738e41adeb4',
    };
    const course = Course.add(
      input.title,
      input.description,
      input.url,
      input.year,
      input.channel,
      input.tags,
      input.userId,
    );
    expect(course.getStatus()).toBe('PENDING');
  });
});
