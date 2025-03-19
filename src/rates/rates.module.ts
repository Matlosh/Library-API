import { Module } from '@nestjs/common';
import { RatesService } from './rates.service';
import { RatesController } from './rates.controller';
import { BooksService } from 'src/books/books.service';
import { UsersService } from 'src/users/users.service';
import { AppService } from 'src/app.service';
import { SubjectsService } from 'src/subjects/subjects.service';
import { ShelvesService } from 'src/shelves/shelves.service';

@Module({
  controllers: [RatesController],
  providers: [RatesService, AppService, BooksService, UsersService, SubjectsService, ShelvesService],
})
export class RatesModule {}
