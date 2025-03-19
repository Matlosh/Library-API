import { OmitType } from "@nestjs/mapped-types";
import { UpdateLibraryDto } from "./update-library.dto";

export class CreateLibraryDto extends OmitType(UpdateLibraryDto, ['id'] as const) {}