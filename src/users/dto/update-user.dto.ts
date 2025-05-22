import { IsNumber } from "class-validator";
import { User } from "../interfaces/user.interface";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends CreateUserDto {
  @IsNumber()
  id: number;
}