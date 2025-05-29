import { ApiProperty, OmitType } from "@nestjs/swagger";
import { CreateLibraryDto } from "src/libraries/dto/create-library.dto";

export class UserLibrariesResponseDto extends OmitType(CreateLibraryDto, ['userId'] as const) {
  @ApiProperty({
    type: String,
    description: 'The unique identifier of the library'
  })
  _id: string;

  @ApiProperty({
    type: String,
    description: 'The unique identifier of the user who owns the library'
  })
  user: string;
}