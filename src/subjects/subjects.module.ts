import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { AppService } from 'src/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Subject, SubjectSchema } from './schemas/subject.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }])],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}
