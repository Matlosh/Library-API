import { Subject } from '../interfaces/subject.interface';

export class UpdateSubjectDto implements Subject {
  id: number;
  name: string;
}
