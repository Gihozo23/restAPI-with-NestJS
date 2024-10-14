import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('lessons')
export class LessonsController {
  @Get()
  findAllLessons() {
    return 'This action returns all lessons';
  }
  @Get('/:id')
  findOneLesson(@Param('id') id: string) {
    if (id) {
      return `This action returns a #${id} lesson`;
    } else return 'not found';
  }
  @Post()
  createLesson(@Body('name') name: string) {
    `${name} lesson has been created`;
  }

  @Patch('/:id')
  updateLesson(@Param('id') id: string, @Body() body) {
    return `This action updated the #${id}`;
  }
}
