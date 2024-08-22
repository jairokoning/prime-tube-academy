import { Injectable } from '@nestjs/common';
import CourseRepository from 'src/core/application/repositories/CourseRepository';
import Course from '../../core/domain/entities/course';
import { PrismaService } from '../prisma/prisma.service';
import Tag from '../../core/domain/entities/tag';

@Injectable()
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
          connect: course.tagIds.map((tagId) => ({ tagId })),
        },
      },
    });
  }
  async getById(courseId: string): Promise<Course> {
    const courseData = await this.prismaService.course.findUnique({
      where: { courseId },
      include: { tags: true },
    });
    return new Course(
      courseData.courseId,
      courseData.title,
      courseData.description,
      courseData.url,
      courseData.year,
      courseData.channel,
      courseData.tags.map((tag) => new Tag(tag.tagId, tag.label)),
      courseData.userId,
    );
  }
}
