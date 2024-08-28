import { Test, TestingModule } from '@nestjs/testing';
import { CoursePrismaRepository } from './course-prisma.repository';
import { PrismaService } from '../prisma/prisma.service';
import Course from '../../core/domain/entities/course';
import CourseRepository from 'src/core/application/repositories/CourseRepository';

describe('CoursePrismaRepository', () => {
  let repository: CourseRepository;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursePrismaRepository, PrismaService],
    }).compile();
    //repository = module.get<CourseRepository>(CoursePrismaRepository);
    prismaService = module.get<PrismaService>(PrismaService);
    repository = new CoursePrismaRepository(prismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should save a course', async () => {
    const course = Course.add(
      'Learn NestJS – Complete Course',
      'Learn NestJS in this comprehensive course for beginners. NestJS is a framework for building efficient, scalable Node.js web applications.',
      'https://www.youtube.com/watch?v=sFnAHC9lLaw',
      2024,
      'freeCodeCamp.org',
      [{ tagId: '745a1869-9c90-4ed9-971e-a738e41adeb4', label: 'nest' }],
      '745a1869-9c90-4ed9-971e-a738e41adeb4',
    );
    prismaService.course.create = jest.fn().mockResolvedValue(course);
    await repository.save(course);
    expect(prismaService.course.create).toHaveBeenCalledWith({
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
          })),
        },
      },
    });
  });
});
