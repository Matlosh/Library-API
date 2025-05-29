import { ApiProperty, OmitType } from "@nestjs/swagger";
import { CreateBookDto } from "./create-book.dto";

class SubjectResponse {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the subject"
  })
  _id: string;

  @ApiProperty({
    type: String,
    description: "The name of the subject"
  })
  name: string;
}

class ShelfResponse {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the shelf"
  })
  _id: string;

  @ApiProperty({
    type: String,
    description: "The name of the shelf"
  })
  name: string;
}

export class BookResponseDto extends OmitType(CreateBookDto, ['subjectsIds', 'shelvesIds'] as const) {
  @ApiProperty({
    type: String,
    description: 'The unique identifier of the book'
  })
  _id: string;

  @ApiProperty({
    type: [SubjectResponse],
    description: 'The subjects associated with the book',
  })
  subjects: SubjectResponse[];

  @ApiProperty({
    type: [ShelfResponse],
    description: 'The shelves associated with the book',
  })
  shelves: ShelfResponse[];
}