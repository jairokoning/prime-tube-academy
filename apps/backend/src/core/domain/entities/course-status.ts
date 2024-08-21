import Course from './course';

export enum CourseStatusEnum {
  PENDING = 'PENDING',
  PUBLISHED = 'PUBLISHED',
  REFUSED = 'REFUSED',
}

export default interface CourseStatus {
  value: CourseStatusEnum;

  publish(): void;
  refuse(): void;
}

export class PendingStatus implements CourseStatus {
  value: CourseStatusEnum;

  constructor(readonly course: Course) {
    this.value = CourseStatusEnum.PENDING;
  }

  publish(): void {
    this.course.status = new PublishedStatus(this.course);
  }

  refuse(): void {
    this.course.status = new RefusedStatus(this.course);
  }
}

export class PublishedStatus implements CourseStatus {
  value: CourseStatusEnum;

  constructor(readonly course: Course) {
    this.value = CourseStatusEnum.PUBLISHED;
  }

  publish(): void {
    throw new Error('Could not publish course');
  }

  refuse(): void {
    this.course.status = new RefusedStatus(this.course);
  }
}

export class RefusedStatus implements CourseStatus {
  value: CourseStatusEnum;

  constructor(readonly course: Course) {
    this.value = CourseStatusEnum.REFUSED;
  }

  publish(): void {
    this.course.status = new RefusedStatus(this.course);
  }

  refuse(): void {
    throw new Error('Could not publish course');
  }
}
