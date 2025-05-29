import { Module } from '@nestjs/common';
import { RatesService } from './rates.service';
import { RatesController } from './rates.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rate, RateSchema } from './schemas/rate.schema';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { Book, BookSchema } from 'src/books/schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Rate.name, schema: RateSchema },
      { name: User.name, schema: UserSchema },
      { name: Book.name, schema: BookSchema }
    ]),
  ],
  controllers: [RatesController],
  providers: [RatesService],
})
export class RatesModule {}
