import { Injectable } from "@nestjs/common";
import { Book } from "./interfaces/book.interface";
import { AppService } from "src/app.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { randomInt } from "crypto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { SubjectsService } from "src/subjects/subjects.service";
import { ShelvesService } from "src/shelves/shelves.service";

@Injectable()
export class BooksService {
  private readonly books: Book[];

  constructor(
    private appService: AppService,
    private subjectsService: SubjectsService,
    private shelvesService: ShelvesService) {
    this.books = this.appService.database.books;
  }

  create(book: CreateBookDto) {
    const {subjects, shelves, ...rest} = book;
    const id = randomInt(1024);

    this.books.push({
      ...rest,
      id 
    });

    this.createBooksSubjects(id, subjects); 
    this.createShelvesBooks(id, shelves);
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book | null {
    const book = this.books.find(l => l.id === id);
    return book ? book : null;
  }

  update(id: number, book: UpdateBookDto) {
    const bookIndex = this.books.findIndex(l => l.id === id);
    if(bookIndex > -1) {
      const {subjects, shelves, ...rest} = book;

      this.books[bookIndex] = {
        ...rest,
        id
      };

      this.appService.database.booksSubjects =
        this.appService.database.booksSubjects.filter(entry => entry.bookId !== id);
        
      this.appService.database.shelvesBooks =
        this.appService.database.shelvesBooks.filter(entry => entry.bookId !== id);

      this.createBooksSubjects(id, subjects);
      this.createShelvesBooks(id, shelves);
    }
  }

  remove(id: number) {
    const bookIndex = this.books.findIndex(l => l.id === id);
    if(bookIndex > -1) {
      this.books.splice(bookIndex, 1);
    }
  }

  createBooksSubjects(bookId: number, subjectsIds: number[]) {
    for(const subjectId of subjectsIds) {
      if(this.subjectsService.findOne(subjectId)) {
        this.appService.database.booksSubjects.push({
          bookId,
          subjectId
        });
      }
    }
  }

  createShelvesBooks(bookId: number, shelvesIds: number[]) {
    for(const shelfId of shelvesIds) {
      if(this.shelvesService.findOne(shelfId)) {
        this.appService.database.shelvesBooks.push({
          bookId,
          shelfId
        });
      }
    }
  }
}