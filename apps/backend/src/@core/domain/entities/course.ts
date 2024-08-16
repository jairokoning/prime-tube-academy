import Tag from './tag';

export default class Course {
  constructor(
    readonly courseId: string,
    readonly title: string,
    readonly description: string,
    readonly url: string,
    readonly year: number,
    readonly channel: string,
    readonly status: string,
    readonly tags: Tag[],
    readonly added_by: string,
    readonly created_at?: Date,
  ) {
    this.courseId = courseId;
    this.title = title;
    this.description = description;
    this.url = url;
    this.year = year;
    this.channel = channel;
    this.status = status;
    this.tags = tags;
    this.added_by = added_by;
    this.created_at = created_at;
  }

  static add(
    title: string,
    description: string,
    url: string,
    year: number,
    channel: string,
    tags: Tag[],
    added_by: string,
  ) {
    const courseId = crypto.randomUUID();
    return new Course(
      courseId,
      title,
      description,
      url,
      year,
      channel,
      'PENDING',
      tags,
      added_by,
    );
  }

  get tagIds(): string[] {
    return this.tags.map((tag) => tag.tagId);
  }
}
