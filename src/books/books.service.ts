import { Injectable } from "@nestjs/common";
import { Book } from "./interfaces/book.interface";
import { AppService } from "src/app.service";

@Injectable()
export class BooksService {
  private readonly books: Book[];

  constructor(private appService: AppService) {
    this.books = this.appService.database.books;
  }

  create(book: Book) {
    this.books.push(book);
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book | null {
    const book = this.books.find(l => l.id === id);
    return book ? book : null;
  }

  update(book: Book) {
    const bookIndex = this.books.findIndex(l => l.id === book.id);
    if(bookIndex > -1) {
      this.books[bookIndex] = book;
    }
  }

  remove(id: number) {
    const bookIndex = this.books.findIndex(l => l.id === id);
    if(bookIndex > -1) {
      this.books.splice(bookIndex, 1);
    }
  }
}