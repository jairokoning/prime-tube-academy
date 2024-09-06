import { Body, Controller, Post } from '@nestjs/common';
import AddCourse from '../../core/application/usecases/add-course';
import { CourseInput } from 'src/core/application/dtos/course-input';

@Controller('courses')
export class CourseController {
  constructor(private addCourse: AddCourse) {}

  @Post()
  add(@Body() courseInput: CourseInput) {
    return this.addCourse.execute(courseInput);
  }
}
