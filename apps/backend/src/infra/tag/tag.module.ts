import { Module } from '@nestjs/common';
import { TagPrismaRepository } from './tag-prisma.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [
    {
      provide: TagPrismaRepository,
      useFactory: (prismaService: PrismaService) =>
        new TagPrismaRepository(prismaService),
      inject: [PrismaService],
    },
  ],
})
export class TagModule {}
