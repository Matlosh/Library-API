import { ApiProperty } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";

export class UserResponseDto extends CreateUserDto {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the user"
  })
  _id: string; 
}