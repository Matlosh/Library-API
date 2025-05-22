import { OmitType } from "@nestjs/mapped-types";
import { UpdateUserDto } from "./update-user.dto";
import { User } from "../interfaces/user.interface";
import { IsAlphanumeric, IsAscii, IsEmail, IsString, IsStrongPassword, MinLength } from "class-validator";

export class CreateUserDto implements User {
  @IsString()
  @IsAlphanumeric()
  @MinLength(3)
  login: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  nick: string;

  @IsStrongPassword()
  password: string;
}