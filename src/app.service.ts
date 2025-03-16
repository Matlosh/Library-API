import { Injectable } from '@nestjs/common';
import { Database } from './interfaces/database.interface';

@Injectable()
export class AppService {
  database: Database;

  constructor() {
    this.database = {
      users: [],
      libraries: [],
      shelves: [],
      shelvesBooks: [],
      books: [],
      rates: [],
      booksSubjects: [],
      subjects: []
    };
  }

  getHello(): string {
    return 'Hello World!';
  }
}
