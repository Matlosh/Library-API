import { ApiProperty } from "@nestjs/swagger";
import { CreateSubjectDto } from "./create-subject.dto";

export class SubjectResponseDto extends CreateSubjectDto {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the subject"
  })
  _id: string; 
}