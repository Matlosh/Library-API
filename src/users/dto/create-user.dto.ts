import { OmitType } from "@nestjs/mapped-types";
import { UpdateUserDto } from "./update-user.dto";
import { User } from "../interfaces/user.interface";

export class CreateUserDto implements User {
  login: string;
  email: string;
  nick: string;
  password: string;
}