import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from 'src/infra/prisma/prisma.service';

describe('CourseController (e2e)', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prismaService = moduleFixture.get<PrismaService>(PrismaService);
    await app.init();

    await prismaService.tagsOnCourses.deleteMany({});
    await prismaService.course.deleteMany({});
    await prismaService.tag.deleteMany({});
    await prismaService.user.deleteMany({});
  });

  it('/courses (POST)', async () => {
    const { userId } = await prismaService.user.create({
      data: {
        userId: '5b4260fc-86bb-4093-8f36-525acdd4283c',
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'ADMINISTRATOR',
      },
    });
    const { tagId } = await prismaService.tag.create({
      data: {
        tagId: '468f1b5c-c8c2-4919-a697-5e728984ab2b',
        label: 'nest',
      },
    });

    return request(app.getHttpServer())
      .post('/courses')
      .send({
        title: 'Learn NestJS – Complete Course',
        description:
          'Learn NestJS in this comprehensive course for beginners. NestJS is a framework for building efficient, scalable Node.js web applications.',
        url: 'https://www.youtube.com/watch?v=sFnAHC9lLaw',
        year: 2024,
        channel: 'freeCodeCamp.org',
        userId: userId,
        tagIds: [tagId],
      })
      .expect(201);
  });
});
