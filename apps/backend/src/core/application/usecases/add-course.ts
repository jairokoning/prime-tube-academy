import Course from '../../domain/entities/course';
import Tag from '../../domain/entities/tag';
import CourseRepository from '../repositories/CourseRepository';
import TagRepository from '../repositories/TagRepository';

interface AddCourseDTO {
  title: string;
  description: string;
  url: string;
  year: number;
  channel: string;
  tagIds: string[];
  userId: string;
}

export default class AddCourse {
  constructor(
    private courseRepository: CourseRepository,
    private tagRepository: TagRepository,
  ) {}
  async execute({
    title,
    description,
    url,
    year,
    channel,
    tagIds,
    userId,
  }: AddCourseDTO): Promise<Output> {
    const repoTags = await this.tagRepository.getByIds(tagIds);
    const tags = repoTags.map((tag) => new Tag(tag.tagId, tag.label));
    const course = Course.add(
      title,
      description,
      url,
      year,
      channel,
      tags,
      userId,
    );
    await this.courseRepository.save(course);
    return { courseId: course.courseId };
  }
}

type Output = {
  courseId: string;
};
