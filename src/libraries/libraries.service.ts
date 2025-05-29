import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Library } from './schemas/library.schema';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { config } from 'src/config';

@Injectable()
export class LibrariesService {
  constructor(
    @InjectModel(Library.name) private libraryModel: Model<Library>,
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  private async validateUser(userId: mongoose.Schema.Types.ObjectId): Promise<void> {
    const user = await this.userModel.findOne({ _id: userId }).exec();
    if (!user) {
      throw new NotFoundException("User with passed userId doesn't exist.");
    }
  }

  async create(library: CreateLibraryDto): Promise<Library> {
    await this.validateUser(library.userId);

    const createdLibrary = new this.libraryModel({
      ...library,
      user: library.userId
    });
    return createdLibrary.save();
  }

  async findAll(page: number = 0): Promise<Library[]> {
    return this.libraryModel
      .find()
      .limit(config.findAllLimit)
      .skip(page * config.findAllLimit)
      .exec();
  }

  async findOne(id: string): Promise<Library | null> {
    return this.libraryModel
      .findById(id)
      .exec();
  }

  async update(id: string, library: UpdateLibraryDto): Promise<Library | null> {
    await this.validateUser(library.userId);

    const response = await this.libraryModel.updateOne({ _id: id }, library).exec();
    if(response.matchedCount === 0) {
      throw new NotFoundException("Can't find library to update.");
    }

    return await this.findOne(id);
  }

  async delete(id: string) {
    const response = await this.libraryModel.deleteOne({ _id: id }).exec();
    if(response.deletedCount === 0) {
      throw new NotFoundException("Can't find library to delete.");
    }
  } 
}
