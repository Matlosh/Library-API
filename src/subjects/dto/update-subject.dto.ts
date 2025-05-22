import { IsNumber } from 'class-validator';
import { Subject } from '../interfaces/subject.interface';
import { CreateSubjectDto } from './create-subject.dto';

export class UpdateSubjectDto extends CreateSubjectDto {
  @IsNumber()
  id: number;
}
