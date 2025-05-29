import { ApiProperty } from "@nestjs/swagger";
import { Book } from "../interfaces/book.interface";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import mongoose from "mongoose";

export class CreateBookDto implements Book {
  @ApiProperty({
    type: String,
    description: 'Title of the book'
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
    description: 'Identifier for the book (ISBN)',
    required: false
  })
  @IsOptional()
  @IsString()
  isbn: string;

  @ApiProperty({
    type: String,
    description: 'Author of the book'
  })
  @IsString()
  author: string;

  @ApiProperty({
    type: String,
    description: 'Cover URL',
    required: false
  })
  @IsOptional()
  @IsString()
  coverUrl: string;

  @ApiProperty({
    type: Number,
    description: 'Number of pages in the book',
    required: false
  })
  @IsOptional()
  @IsNumber()
  pagesCount: number;

  @ApiProperty({
    type: String,
    description: 'Identifiers of the subjects associated with the book',
    required: false
  })
  @IsOptional()
  @IsArray()
  subjectsIds: mongoose.Schema.Types.ObjectId[];

  @ApiProperty({
    type: String,
    description: 'Identifiers of the shelves where the book is stored',
    required: false
  })
  @IsOptional()
  @IsArray()
  shelvesIds: mongoose.Schema.Types.ObjectId[];
}