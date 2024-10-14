import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonsController } from './lessons/lessons.controller';
import { ExercisesController } from './exercises/exercises.controller';

@Module({
  imports: [],
  controllers: [AppController, LessonsController, ExercisesController],
  providers: [AppService],
})
export class AppModule {}
