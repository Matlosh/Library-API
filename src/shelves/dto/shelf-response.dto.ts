import { CreateShelfDto } from "./create-shelf.dto";
import { ApiProperty, OmitType } from "@nestjs/swagger";

class ShelfLibraryResponse {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the library"
  })
  _id: string;

  @ApiProperty({
    type: String,
    description: "The name of the library"
  })
  name: string;
}

export class ShelfResponseDto extends OmitType(CreateShelfDto, ['libraryId'] as const) {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the shelf"
  })
  _id: string;

  @ApiProperty({
    type: ShelfLibraryResponse,
    description: "The library to which the shelf belongs"
  })
  library: ShelfLibraryResponse;
}