import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Rate } from './interfaces/rate.interface';
import { AppService } from 'src/app.service';
import { randomInt } from 'crypto';
import { UsersService } from 'src/users/users.service';
import { BooksService } from 'src/books/books.service';

@Injectable()
export class RatesService {
  private readonly rates: Rate[];

  constructor(private appService: AppService,
    private usersService: UsersService, private booksService: BooksService) {
    this.rates = this.appService.database.rates;
  }

  create(rate: CreateRateDto) {
    if(this.usersService.findOne(rate.userId) && this.booksService.findOne(rate.bookId)) {
      this.rates.push({
        ...rate,
        id: randomInt(1024)
      });
    } else {
      throw new BadRequestException("Passed userId or bookId are incorrect.");
    }
  }

  findAll() {
    return this.rates;
  }

  findOne(id: number) {
    const rate = this.rates.find(r => r.id === id);
    return rate ? rate : null;
  }

  update(id: number, rate: UpdateRateDto) {
    const rateIndex = this.rates.findIndex(r => r.id === id);
    if(rateIndex > -1) {
      if(this.usersService.findOne(rate.userId) && this.booksService.findOne(rate.bookId)) {
        this.rates[rateIndex] = {
          ...rate,
          id
        };
      } else {
        throw new BadRequestException("Passed userId or bookId are incorrect.");
      }
    } else {
      throw new BadRequestException("Can't find rate to update.");
    }
  }

  remove(id: number) {
    const rateIndex = this.rates.findIndex(l => l.id === id);
    if(rateIndex > -1) {
      this.rates.splice(rateIndex, 1);
    } else {
      throw new BadRequestException("Can't find rate to delete.");
    }
  }
}
