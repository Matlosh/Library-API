import { OmitType } from "@nestjs/mapped-types";
import { UpdateSubjectDto } from "./update-subject.dto";
import { Subject } from "../interfaces/subject.interface";
import { IsAlphanumeric, IsString, MinLength } from "class-validator";

export class CreateSubjectDto implements Subject {
  @IsString()
  name: string;
}
