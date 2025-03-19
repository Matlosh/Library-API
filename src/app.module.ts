import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LibrariesModule } from './libraries/libraries.module';
import { ShelvesModule } from './shelves/shelves.module';
import { BooksModule } from './books/books.module';
import { SubjectsModule } from './subjects/subjects.module';
import { RatesModule } from './rates/rates.module';

@Module({
  imports: [UsersModule, LibrariesModule, ShelvesModule, BooksModule, SubjectsModule, RatesModule],
  exports: [AppService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
