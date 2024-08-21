import Course from 'src/core/domain/entities/course';

export default interface CourseRepository {
  save(course: Course): Promise<void>;
  getById(courseId: string): Promise<Course>;
}
