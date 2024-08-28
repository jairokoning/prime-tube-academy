import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './infra/prisma/prisma.module';
import { CourseModule } from './infra/course/course.module';
import { TagModule } from './infra/tag/tag.module';

@Module({
  imports: [PrismaModule, CourseModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
