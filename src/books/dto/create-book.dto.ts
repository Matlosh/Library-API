import { Book } from "../interfaces/book.interface";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import mongoose from "mongoose";

export class CreateBookDto implements Book {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  isbn: string;

  @IsString()
  author: string;

  @IsOptional()
  @IsString()
  coverUrl: string;

  @IsOptional()
  @IsNumber()
  pagesCount: number;

  @IsOptional()
  @IsArray()
  subjectsIds: mongoose.Schema.Types.ObjectId[];

  @IsOptional()
  @IsArray()
  shelvesIds: mongoose.Schema.Types.ObjectId[];
}