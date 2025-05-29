import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Subject as SubjectInterface } from "../interfaces/subject.interface";

export type SubjectDocument = HydratedDocument<Subject>;

@Schema()
export class Subject implements SubjectInterface {
  @Prop()
  name: string;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);