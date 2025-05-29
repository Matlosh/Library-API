import { IsNumber } from 'class-validator';
import { Subject } from '../interfaces/subject.interface';
import { CreateSubjectDto } from './create-subject.dto';
import mongoose from 'mongoose';
import { IsObjectId } from 'src/decorators/isObjectId.decorator';

export class UpdateSubjectDto extends CreateSubjectDto {
  @IsObjectId()
  id: mongoose.Schema.Types.ObjectId;
}
