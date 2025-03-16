import { Injectable } from '@nestjs/common';
import { Library } from './interfaces/library.interface';
import { AppService } from 'src/app.service';

@Injectable()
export class LibrariesService {
   private readonly libraries: Library[];

  constructor(private appService: AppService) {
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
      this.libraries[libraryIndex] = library;
    }
  }

  remove(id: number) {
    const libraryIndex = this.libraries.findIndex(l => l.id === id);
    console.log(libraryIndex);
    if(libraryIndex > -1) {
      this.libraries.splice(libraryIndex, 1);
    }
  } 
}
