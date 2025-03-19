import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [SubjectsController],
  providers: [SubjectsService, AppService],
})
export class SubjectsModule {}
