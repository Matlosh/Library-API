import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rate } from './schemas/rate.schema';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { Book } from 'src/books/schemas/book.schema';
import { config } from 'src/config';

@Injectable()
export class RatesService {
  constructor(
    @InjectModel(Rate.name) private rateModel: Model<Rate>,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Book.name) private bookModel: Model<Book>,
  ) {}

  private async validateUserAndBook(
    userId: mongoose.Schema.Types.ObjectId,
    bookId: mongoose.Schema.Types.ObjectId
  ): Promise<void> {
    const [user, book] = await Promise.all([
      this.userModel.findById(userId).exec(),
      this.bookModel.findById(bookId).exec()
    ]);

    if(!user) {
      throw new NotFoundException("User with passed userId doesn't exist.");
    }

    if(!book) {
      throw new NotFoundException("Book with passed bookId doesn't exist.");
    }
  }

  async create(rate: CreateRateDto) {
    await this.validateUserAndBook(rate.userId, rate.bookId);

    const createdRate = new this.rateModel({
      ...rate,
      user: rate.userId,
      book: rate.bookId
    });
    return createdRate.save();
  }

  async findAll(page: number = 0): Promise<Rate[]> {
    return this.rateModel
      .find()
      .limit(config.findAllLimit)
      .skip(page * config.findAllLimit)
      .exec();
  }

  async findOne(id: string): Promise<Rate | null> {
    return this.rateModel
      .findOne({ _id: id })
      .exec();
  }

  async update(id: string, rate: UpdateRateDto): Promise<Rate | null> {
    await this.validateUserAndBook(rate.userId, rate.bookId);

    if(this.rateModel.find({ _id: id }).exec() === null) {
      throw new NotFoundException("Can't find rate to update.");
    }

    const response = await this.rateModel
      .updateOne({ _id: id }, {
        ...rate,
        user: rate.userId,
        book: rate.bookId
      })
      .exec();

    if(response.matchedCount === 0) { 
      throw new NotFoundException("Can't find rate to update.");
    }

    return await this.findOne(id);
  }

  async delete(id: string) {
    const response = await this.rateModel.deleteOne({ _id: id }).exec();
    if(response.deletedCount === 0) {
      throw new NotFoundException("Can't find rate to delete.");
    }
  }
}
