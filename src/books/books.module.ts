import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema';
import { Shelf, ShelfSchema } from 'src/shelves/schemas/shelf.schema';
import { Subject, SubjectSchema } from 'src/subjects/schemas/subject.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema },
      { name: Subject.name, schema: SubjectSchema },
      { name: Shelf.name, schema: ShelfSchema }
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
