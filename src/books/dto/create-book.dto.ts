import { OmitType } from "@nestjs/mapped-types";
import { UpdateBookDto } from "./update-book.dto";
import { Book } from "../interfaces/book.interface";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

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
  subjects: number[];

  @IsOptional()
  @IsArray()
  shelves: number[];
}