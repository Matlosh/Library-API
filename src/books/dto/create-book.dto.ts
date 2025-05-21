import { OmitType } from "@nestjs/mapped-types";
import { UpdateBookDto } from "./update-book.dto";
import { Book } from "../interfaces/book.interface";

export class CreateBookDto implements Book {
  title: string;
  isbn: string;
  author: string;
  coverUrl: string;
  pagesCount: number;
  subjects: number[];
  shelves: number[];
}