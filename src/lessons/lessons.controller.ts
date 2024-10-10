import { Controller, Get, Param } from '@nestjs/common';

@Controller('lessons')
export class LessonsController {
  @Get('math')
  findAllLessons() {
    return 'This action returns all lessons';
  }
  @Get('/:id')
  findOneLesson(@Param('id') id: string) {
    return `This action returns a #${id} lesson`;
  }
}
