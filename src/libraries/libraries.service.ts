import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Library } from './interfaces/library.interface';
import { AppService } from 'src/app.service';
import { UsersService } from 'src/users/users.service';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { randomInt } from 'crypto';

@Injectable()
export class LibrariesService {
  private readonly libraries: Library[];

  constructor(private appService: AppService, private usersService: UsersService) {
    this.libraries = this.appService.database.libraries;
  }

  create(library: CreateLibraryDto) {
    this.libraries.push({
      ...library,
      id: randomInt(1024)
    });
  }

  findAll(): Library[] {
    return this.libraries;
  }

  findOne(id: number): Library | null {
    const library = this.libraries.find(l => l.id === id);
    return library ? library : null;
  }

  update(id: number, library: UpdateLibraryDto) {
    const libraryIndex = this.libraries.findIndex(l => l.id === id);
    if(libraryIndex <= -1) {
      throw new NotFoundException("Can't find library to update.");
    }

    if(!this.usersService.findOne(library.userId)) {
      throw new BadRequestException("Passed userId is incorrect.");
    }

    this.libraries[libraryIndex] = {
      ...library,
      id
    };
  }

  remove(id: number) {
    const libraryIndex = this.libraries.findIndex(l => l.id === id);
    if(libraryIndex <= -1) {
      throw new NotFoundException("Can't find library to delete.");
    }

    this.libraries.splice(libraryIndex, 1);
  } 
}
