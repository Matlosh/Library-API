import { OmitType } from "@nestjs/mapped-types";
import { UpdateUserDto } from "./update-user.dto";
import { User } from "../interfaces/user.interface";
import { IsAlphanumeric, IsAscii, IsEmail, IsString, IsStrongPassword, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto implements User {
  @ApiProperty({
    type: String,
    description: 'Unique login for the user',
  })
  @IsString()
  @IsAlphanumeric()
  @MinLength(3)
  login: string;

  @ApiProperty({
    type: String,
    description: 'Email address of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: 'Nickname of the user',
  })
  @IsString()
  @MinLength(3)
  nick: string;

  @ApiProperty({
    type: String,
    description: 'Password for the user account',
  })
  @IsStrongPassword()
  password: string;
}