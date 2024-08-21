import CourseStatus, { PendingStatus } from './course-status';
import Tag from './tag';

export default class Course {
  status: CourseStatus;
  constructor(
    readonly courseId: string,
    readonly title: string,
    readonly description: string,
    readonly url: string,
    readonly year: number,
    readonly channel: string,
    readonly tags: Tag[],
    readonly userId: string,
    readonly created_at?: Date,
  ) {
    this.courseId = courseId;
    this.title = title;
    this.description = description;
    this.url = url;
    this.year = year;
    this.channel = channel;
    this.status = new PendingStatus(this);
    this.tags = tags;
    this.userId = userId;
    this.created_at = created_at;
  }

  static add(
    title: string,
    description: string,
    url: string,
    year: number,
    channel: string,
    tags: Tag[],
    userId: string,
  ) {
    const courseId = crypto.randomUUID();
    return new Course(
      courseId,
      title,
      description,
      url,
      year,
      channel,
      tags,
      userId,
    );
  }

  get tagIds(): string[] {
    return this.tags.map((tag) => tag.tagId);
  }

  getStatus(): string {
    return this.status.value;
  }
}
