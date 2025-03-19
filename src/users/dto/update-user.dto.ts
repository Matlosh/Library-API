import { User } from "../interfaces/user.interface";

export class UpdateUserDto implements User {
  id: number;
  login: string;
  email: string;
  nick: string;
  password: string;
}