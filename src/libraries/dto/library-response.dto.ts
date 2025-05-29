import { ApiProperty, OmitType } from "@nestjs/swagger";
import { CreateLibraryDto } from "./create-library.dto";

class LibraryUserResponse {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the user"
  })
  _id: string;

  @ApiProperty({
    type: String,
    description: "The nick of the user"
  })
  nick: string;
}

export class LibraryResponseDto extends OmitType(CreateLibraryDto, ['userId'] as const) {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the library"
  })
  _id: string;

  @ApiProperty({
    type: LibraryUserResponse,
    description: "The user who owns the library"
  })
  user: LibraryUserResponse;
}