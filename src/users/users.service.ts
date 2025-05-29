import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { config } from 'src/config';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: CreateUserDto): Promise<User> {
    // - Where's the password hashing???
    // - There's no need to, no one will get here ^.^ (guess what happens next)
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll(page: number = 0): Promise<User[]> {
    return this.userModel
      .find()
      .limit(config.findAllLimit)
      .skip(page * config.findAllLimit)
      .exec();
  }

  async findOne(id: string): Promise<User | null> {
    return this.userModel
      .findById(id)
      .exec();
  }

  async update(id: string, user: UpdateUserDto): Promise<User | null> {
    const response = await this.userModel.updateOne({ _id: id }, user).exec();

    if(response.matchedCount === 0) {
      throw new NotFoundException("Can't find user to update.")
    }

    return await this.findOne(id);
  }

  async delete(id: string) {
    const response = await this.userModel.deleteOne({ _id: id }).exec();

    if(response.deletedCount === 0) {
      throw new NotFoundException("Can't find user to delete.");
    }
  }
}
