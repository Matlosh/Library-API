import { Rate } from '../interfaces/rate.interface';
import { CreateRateDto } from './create-rate.dto';

export class UpdateRateDto extends CreateRateDto {
  id: number;
}
