import { Module } from '@nestjs/common';
import { CoursePrismaRepository } from './course-prisma.repository';

@Module({
  providers: [CoursePrismaRepository],
  controllers: [],
})
export class CourseModule {}
