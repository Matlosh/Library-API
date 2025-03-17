import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { AppService } from 'src/app.service';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(private appService: AppService) {
    this.users = this.appService.database.users;
  }

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | null {
    const user = this.users.find(u => u.id === id);
    return user ? user : null;
  }

  update(user: User) {
    const userIndex = this.users.findIndex(u => u.id === user.id);
    if(userIndex > -1) {
      this.users[userIndex] = user;
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
