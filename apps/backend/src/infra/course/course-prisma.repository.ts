import CourseRepository from 'src/core/application/repositories/CourseRepository';
import Course from '../../core/domain/entities/course';
import { PrismaService } from '../prisma/prisma.service';
import Tag from '../../core/domain/entities/tag';

export class CoursePrismaRepository implements CourseRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async save(course: Course): Promise<void> {
    await this.prismaService.course.create({
      data: {
        courseId: course.courseId,
        title: course.title,
        description: course.description,
        url: course.url,
        status: course.status.value,
        year: course.year,
        channel: course.channel,
        userId: course.userId,
        tags: {
          create: course.tags.map((tag) => ({
            tag: {
              connect: {
                tagId: tag.tagId,
              },
            },
            // connect: {
            //   courseId_tagId: { courseId: course.courseId, tagId: tag.tagId },
            // }
            // courseId_tagId: { courseId: course.courseId, tagId: tag.tagId },
          })),

          // [
          //   {
          //     assignedBy: 'Bob',
          //     assignedAt: new Date(),
          //     category: {
          //       connect: {
          //         id: 9,
          //       },
          //     },
          //   },
          //   {
          //     assignedBy: 'Bob',
          //     assignedAt: new Date(),
          //     category: {
          //       connect: {
          //         id: 22,
          //       },
          //     },
          //   },
          // ],
        },
        // tags: {
        //   connect: course.tags.map((tag) => ({
        //     courseId_tagId: { courseId: course.courseId, tagId: tag.tagId },
        //   })),
        // },
      },
    });
  }
  async getById(courseId: string): Promise<Course> {
    const courseData = await this.prismaService.course.findUnique({
      where: { courseId },
      include: { tags: { include: { tag: true } } },
    });
    return new Course(
      courseData.courseId,
      courseData.title,
      courseData.description,
      courseData.url,
      courseData.year,
      courseData.channel,
      courseData.tags.map((tag) => new Tag(tag.tag.tagId, tag.tag.label)),
      courseData.userId,
    );
  }
}
