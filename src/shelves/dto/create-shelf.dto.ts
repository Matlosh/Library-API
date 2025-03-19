import { OmitType } from "@nestjs/mapped-types";
import { UpdateShelfDto } from "./update-shelf.dto";

export class CreateShelfDto extends OmitType(UpdateShelfDto, ['id'] as const) {}