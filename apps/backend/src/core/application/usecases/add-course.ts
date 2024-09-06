import Course from '../../domain/entities/course';
import Tag from '../../domain/entities/tag';
import { CourseInput } from '../dtos/course-input';
import CourseRepository from '../repositories/CourseRepository';
import TagRepository from '../repositories/TagRepository';

export default class AddCourse {
  constructor(
    private courseRepository: CourseRepository,
    private tagRepository: TagRepository,
  ) {}
  async execute(input: CourseInput): Promise<Output> {
    const repoTags = await this.tagRepository.getByIds(input.tagIds);
    const tags = repoTags.map((tag) => new Tag(tag.tagId, tag.label));
    const course = Course.add(
      input.title,
      input.description,
      input.url,
      input.year,
      input.channel,
      tags,
      input.userId,
    );
    await this.courseRepository.save(course);
    return { courseId: course.courseId };
  }
}

type Output = {
  courseId: string;
};
