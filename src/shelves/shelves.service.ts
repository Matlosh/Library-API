import { BadRequestException, Injectable } from "@nestjs/common";
import { Shelf } from "./interfaces/shelf.interface";
import { AppService } from "src/app.service";
import { CreateShelfDto } from "./dto/create-shelf.dto";
import { randomInt } from "crypto";
import { UpdateShelfDto } from "./dto/update-shelf.dto";

@Injectable()
export class ShelvesService {
  private readonly shelves: Shelf[];

  constructor(private appService: AppService) {
    this.shelves = this.appService.database.shelves;
  }

  create(shelf: CreateShelfDto) {
    this.shelves.push({
      ...shelf,
      id: randomInt(1024)
    });
  }

  findAll(): Shelf[] {
    return this.shelves;
  }

  findOne(id: number): Shelf | null {
    const shelf = this.shelves.find(s => s.id === id);
    return shelf ? shelf : null;
  }

  update(id: number, shelf: UpdateShelfDto) {
    const shelfIndex = this.shelves.findIndex(s => s.id === id);
    if(shelfIndex > -1) {
      this.shelves[shelfIndex] = {
        ...shelf,
        id
      };
    } else {
      throw new BadRequestException("Can't find shelf to update.");
    }
  }

  remove(id: number) {
    const shelfIndex = this.shelves.findIndex(s => s.id === id);
    if(shelfIndex > -1) {
      this.shelves.splice(shelfIndex, 1);
    } else {
      throw new BadRequestException("Can't find shelf to delete.");
    }
  } 
}