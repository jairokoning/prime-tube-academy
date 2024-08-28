import { Module } from '@nestjs/common';
import { CoursePrismaRepository } from './course-prisma.repository';
import { CourseController } from './course.controller';
import { TagPrismaRepository } from '../tag/tag-prisma.repository';
import AddCourse from 'src/core/application/usecases/add-course';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [
    {
      provide: CoursePrismaRepository,
      useFactory: (prismaService: PrismaService) =>
        new CoursePrismaRepository(prismaService),
      inject: [PrismaService],
      //useClass: CoursePrismaRepository,
    },
    {
      provide: TagPrismaRepository,
      useFactory: (prismaService: PrismaService) =>
        new TagPrismaRepository(prismaService),
      inject: [PrismaService],
    },
    {
      provide: AddCourse,
      useFactory: (
        courseRepository: CoursePrismaRepository,
        tagRepository: TagPrismaRepository,
      ) => new AddCourse(courseRepository, tagRepository),
      inject: [CoursePrismaRepository, TagPrismaRepository],
    },
  ],
  controllers: [CourseController],
})
export class CourseModule {}
