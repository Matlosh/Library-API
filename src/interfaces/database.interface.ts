import { Book } from "src/books/interfaces/book.interface";
import { Library } from "src/libraries/interfaces/library.interface";
import { Rate } from "src/rates/interfaces/rate.interface";
import { Shelf } from "src/shelves/interfaces/shelf.interface";
import { Subject } from "src/subjects/interfaces/subject.interface";
import { User } from "src/users/interfaces/user.interface";
import { ShelfBook } from "./shelfBook.interface";
import { BookSubject } from "./bookSubject.interface";

export interface Database {
  users: User[],
  libraries: Library[],
  shelves: Shelf[],
  shelvesBooks: ShelfBook[],
  books: Book[],
  rates: Rate[],
  booksSubjects: BookSubject[],
  subjects: Subject[]
}