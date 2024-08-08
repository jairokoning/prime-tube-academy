export default class Course {
  // private courseId: string;
  // private title: string;
  // private description: string;
  // private url: string;
  // private year: number;
  // private channel: string;
  // private status: string;
  // private tags: string[];
  // private added_by: string;
  // private created_at: Date;

  private constructor(
    readonly courseId: string,
    readonly title: string,
    readonly description: string,
    readonly url: string,
    readonly year: number,
    readonly channel: string,
    readonly status: string,
    readonly tags: string[],
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
    status: string,
    tags: string[],
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
      status,
      tags,
      added_by,
    );
  }
}
