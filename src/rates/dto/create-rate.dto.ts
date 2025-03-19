import { OmitType } from "@nestjs/mapped-types";
import { UpdateRateDto } from "./update-rate.dto";

export class CreateRateDto extends OmitType(UpdateRateDto, ['id'] as const) {}
