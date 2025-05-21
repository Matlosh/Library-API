import { User } from "../interfaces/user.interface";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends CreateUserDto {
  id: number;
}