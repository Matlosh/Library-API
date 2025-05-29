import { ApiProperty, OmitType } from "@nestjs/swagger";
import { Rate } from "../schemas/rate.schema";
import { CreateRateDto } from "./create-rate.dto";

class RateBookResponse {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the book"
  })
  _id: string;

  @ApiProperty({
    type: String,
    description: "The title of the book"
  })
  title: string;

  @ApiProperty({
    type: String,
    description: "The author of the book"
  }) 
  author: string;
}

class RateUserResponse {
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

export class RateResponseDto extends OmitType(CreateRateDto, ['userId', 'bookId'] as const) {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the rate"
  })
  _id: string;

  @ApiProperty({
    type: RateUserResponse,
    description: "User who created the rate"
  })
  user: RateUserResponse;

  @ApiProperty({
    type: RateBookResponse,
    description: "Book that was rated"
  })
  book: RateBookResponse;
}