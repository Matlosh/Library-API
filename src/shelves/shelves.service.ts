import { Injectable } from "@nestjs/common";
import { Shelf } from "./interfaces/shelf.interface";
import { AppService } from "src/app.service";

@Injectable()
export class ShelvesService {
  private readonly shelves: Shelf[];

  constructor(private appService: AppService) {
    this.shelves = this.appService.database.shelves;
  }

  create(shelf: Shelf) {
    this.shelves.push(shelf);
  }

  findAll(): Shelf[] {
    return this.shelves;
  }

  findOne(id: number): Shelf | null {
    const shelf = this.shelves.find(l => l.id === id);
    return shelf ? shelf : null;
  }

  update(shelf: Shelf) {
    const shelfIndex = this.shelves.findIndex(l => l.id === shelf.id);
    if(shelfIndex > -1) {
      this.shelves[shelfIndex] = shelf;
    }
  }

  remove(id: number) {
    const shelfIndex = this.shelves.findIndex(l => l.id === id);
    if(shelfIndex > -1) {
      this.shelves.splice(shelfIndex, 1);
    }
  } 
}