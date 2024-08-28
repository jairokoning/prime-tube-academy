import { Body, Controller, Post } from '@nestjs/common';
import AddCourse from '../../core/application/usecases/add-course';

@Controller('courses')
export class CourseController {
  constructor(private addCourse: AddCourse) {}

  @Post()
  add(@Body() course) {
    return this.addCourse.execute(course);
  }
}
