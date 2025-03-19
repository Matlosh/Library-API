import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { AppService } from 'src/app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { randomInt } from 'crypto';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(private appService: AppService) {
    this.users = this.appService.database.users;
  }

  create(user: CreateUserDto) {
    this.users.push({
      ...user,
      id: randomInt(1024) 
    });
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | null {
    const user = this.users.find(u => u.id === id);
    return user ? user : null;
  }

  update(id: number, user: UpdateUserDto) {
    const userIndex = this.users.findIndex(u => u.id === id);
    if(userIndex > -1) {
      this.users[userIndex] = {
        ...user,
        id
      };
    } else {
      throw new BadRequestException("Can't find user to update.")
    }
  }

  remove(id: number) {
    const userIndex = this.users.findIndex(u => u.id === id);
    if(userIndex > -1) {
      this.users.splice(userIndex, 1);
    } else {
      throw new BadRequestException("Can't find user to delete.");
    }
  }
}
