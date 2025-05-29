import { OmitType } from "@nestjs/mapped-types";
import { UpdateSubjectDto } from "./update-subject.dto";
import { Subject } from "../interfaces/subject.interface";
import { IsAlphanumeric, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSubjectDto implements Subject {
  @ApiProperty({
    type: String,
    description: 'Unique name for the subject'
  })
  @IsString()
  name: string;
}
