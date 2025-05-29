import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { User as UserInterface } from "../interfaces/user.interface";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements UserInterface {
  @Prop()
  login: string;

  @Prop()
  email: string;

  @Prop()
  nick: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);