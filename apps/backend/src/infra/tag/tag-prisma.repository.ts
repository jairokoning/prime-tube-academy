import TagRepository from 'src/core/application/repositories/TagRepository';
import { PrismaService } from '../prisma/prisma.service';
import Tag from 'src/core/domain/entities/tag';

export class TagPrismaRepository implements TagRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getByIds(tagIds: string[]): Promise<Tag[]> {
    const tags = await this.prismaService.tag.findMany({
      where: { tagId: { in: tagIds } },
    });
    return tags.map((tag) => new Tag(tag.tagId, tag.label));
  }
}
