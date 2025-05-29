import { IsNumber } from 'class-validator';
import { Rate } from '../interfaces/rate.interface';
import { CreateRateDto } from './create-rate.dto';
import { IsObjectId } from 'src/decorators/isObjectId.decorator';
import mongoose from 'mongoose';

export class UpdateRateDto extends CreateRateDto {
  @IsObjectId()
  id: mongoose.Schema.Types.ObjectId;
}
