import { Book } from "src/books/interfaces/book.interface";
import { BookSubject } from "src/dao/bookSubject.interface";
import { Rate } from "src/dao/rate.interface";
import { ShelfBook } from "src/dao/shelfBook.interface";
import { Subject } from "src/dao/subject.interface";
import { Library } from "src/libraries/interfaces/library.interface";
import { Shelf } from "src/shelves/interfaces/shelf.interface";
import { User } from "src/users/interfaces/user.interface";

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