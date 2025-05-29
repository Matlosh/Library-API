import { CreateRateDto } from './create-rate.dto';
import { IsObjectId } from 'src/decorators/isObjectId.decorator';
import mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRateDto extends CreateRateDto {
  @ApiProperty({
    type: String,
    description: 'The unique identifier of the rate to update'
  })
  @IsObjectId()
  id: mongoose.Schema.Types.ObjectId;
}
