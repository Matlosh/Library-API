import { IsNumber } from 'class-validator';
import { Subject } from '../interfaces/subject.interface';
import { CreateSubjectDto } from './create-subject.dto';
import mongoose from 'mongoose';
import { IsObjectId } from 'src/decorators/isObjectId.decorator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSubjectDto extends CreateSubjectDto {
  @ApiProperty({
    type: String,
    description: 'The unique identifier of the subject to update'
  })
  @IsObjectId()
  id: mongoose.Schema.Types.ObjectId;
}
