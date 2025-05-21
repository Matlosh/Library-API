import { Subject } from '../interfaces/subject.interface';
import { CreateSubjectDto } from './create-subject.dto';

export class UpdateSubjectDto extends CreateSubjectDto {
  id: number;
}
