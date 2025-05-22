import { IsNumber } from 'class-validator';
import { Rate } from '../interfaces/rate.interface';
import { CreateRateDto } from './create-rate.dto';

export class UpdateRateDto extends CreateRateDto {
  @IsNumber()
  id: number;
}
