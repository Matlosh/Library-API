import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { AppService } from 'src/app.service';
import { BooksService } from './books.service';
import { SubjectsService } from 'src/subjects/subjects.service';
import { ShelvesService } from 'src/shelves/shelves.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService, AppService, SubjectsService, ShelvesService]
})
export class BooksModule {}
