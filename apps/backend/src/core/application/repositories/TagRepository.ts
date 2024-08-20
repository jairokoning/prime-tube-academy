import Tag from 'src/@core/domain/entities/tag';

export default interface TagRepository {
  getByIds(tagIds: string[]): Promise<Tag[]>;
}
