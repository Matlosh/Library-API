import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { Library } from './interfaces/library.interface';
import { AppService } from 'src/app.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LibrariesService {
  private readonly libraries: Library[];

  constructor(private appService: AppService, private usersService: UsersService) {
    this.libraries = this.appService.database.libraries;
  }

  create(library: Library) {
    this.libraries.push(library);
  }

  findAll(): Library[] {
    return this.libraries;
  }

  findOne(id: number): Library | null {
    const library = this.libraries.find(l => l.id === id);
    return library ? library : null;
  }

  update(library: Library) {
    const libraryIndex = this.libraries.findIndex(l => l.id === library.id);
    if(libraryIndex > -1) {
      if(this.usersService.findOne(library.userId)) {
        this.libraries[libraryIndex] = library;
      } else {
        throw new BadRequestException("Can't find user with provided userId.");
      }
    } else {
      throw new BadRequestException("Can't find library to update.")
    }
  }

  remove(id: number) {
    const libraryIndex = this.libraries.findIndex(l => l.id === id);
    if(libraryIndex > -1) {
      this.libraries.splice(libraryIndex, 1);
    } else {
      throw new BadRequestException("Can't find library to delete.");
    }
  } 
}
