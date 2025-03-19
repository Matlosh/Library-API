import { Book } from "../interfaces/book.interface";

export class UpdateBookDto implements Book {
  id: number;
  title: string;
  isbn: string;
  author: string;
  coverUrl: string;
  pagesCount: number;
  subjects: number[];
  shelves: number[];
}