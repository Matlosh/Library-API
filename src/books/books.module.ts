import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { AppService } from 'src/app.service';
import { BooksService } from './books.service';

@Module({
  controllers: [BooksController],
  providers: [AppService, BooksService]
})
export class BooksModule {}
