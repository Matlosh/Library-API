import { OmitType } from "@nestjs/mapped-types";
import { UpdateSubjectDto } from "./update-subject.dto";
import { Subject } from "../interfaces/subject.interface";

export class CreateSubjectDto implements Subject {
  name: string;
}
