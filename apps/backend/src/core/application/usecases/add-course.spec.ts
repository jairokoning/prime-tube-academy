import Course from '../../domain/entities/course';
import Tag from '../../domain/entities/tag';
import CourseRepository from '../repositories/CourseRepository';
import AddCourse from './add-course';
import TagRepository from '../repositories/TagRepository';
import CourseStatus from 'src/core/domain/entities/course-status';

describe('Add Course | Integration Test', () => {
  const courses = new Map<
    string,
    {
      courseId: string;
      title: string;
      description: string;
      url: string;
      year: number;
      channel: string;
      status: CourseStatus;
      tagIds: string[];
      userId: string;
    }
  >();
  const tags: Tag[] = [
    new Tag('1', 'node'),
    new Tag('2', 'nest'),
    new Tag('3', 'react'),
    new Tag('4', 'next'),
    new Tag('5', 'vue'),
    new Tag('6', 'tdd'),
    new Tag('7', 'ddd'),
  ];

  it('should add new course', async () => {
    const input = {
      title: 'Nest.js TDD',
      description: 'Introdução Nest com TDD',
      url: 'https://www.youtube.com/watch?v=abcdef',
      year: 2024,
      channel: 'Youtube',
      tagIds: ['2', '6'],
      userId: '745a1869-9c90-4ed9-971e-a738e41adeb4',
    };
    const courseRepository: CourseRepository = {
      async save(course: Course): Promise<void> {
        courses.set(course.courseId, {
          courseId: course.courseId,
          title: course.title,
          description: course.description,
          url: course.url,
          year: course.year,
          channel: course.channel,
          status: course.status,
          tagIds: course.tagIds,
          userId: course.userId,
        });
      },
      getById: async function (courseId: string): Promise<Course> {
        const courseData = courses.get(courseId);
        const tagsData = tags.filter((tag) =>
          courseData.tagIds.includes(tag.tagId),
        );
        return new Course(
          courseData.courseId,
          courseData.title,
          courseData.description,
          courseData.url,
          courseData.year,
          courseData.channel,
          tagsData,
          courseData.userId,
        );
      },
    };
    const tagRepository: TagRepository = {
      async getByIds(tagIds: string[]): Promise<Tag[]> {
        return tags.filter((tag) => tagIds.includes(tag.tagId));
      },
    };
    const addCourse = new AddCourse(courseRepository, tagRepository);
    const { courseId } = await addCourse.execute(input);
    const output = await courseRepository.getById(courseId);
    expect(output.courseId).toBeDefined();
    expect(output.title).toEqual(input.title);
    expect(output.url).toEqual(input.url);
    expect(output.tags).toMatchObject([{ tagId: '2' }, { tagId: '6' }]);
    expect(output.status.value).toEqual('PENDING');
  });
});
