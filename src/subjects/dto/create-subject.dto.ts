import { OmitType } from "@nestjs/mapped-types";
import { UpdateSubjectDto } from "./update-subject.dto";

export class CreateSubjectDto extends OmitType(UpdateSubjectDto, ['id'] as const) {}
