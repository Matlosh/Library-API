import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ShelvesService } from './shelves.service';
import { Shelf } from './interfaces/shelf.interface';
import { CreateShelfDto } from "./dto/create-shelf.dto";
import { UpdateShelfDto } from "./dto/update-shelf.dto";
import { randomInt } from "crypto";

@Controller('shelves')
export class ShelvesController {
  constructor(private shelvesService: ShelvesService) {}

  @Get()
  findAll(): Shelf[] {
    return this.shelvesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Shelf | null {
    return this.shelvesService.findOne(Number(id));
  }

  @Post()
  create(@Body() shelf: CreateShelfDto) {
    this.shelvesService.create({
      ...shelf,
      id: randomInt(1024)
    });
  }

  @Put()
  update(@Body() shelf: UpdateShelfDto) {
    this.shelvesService.update(shelf);
  }

  @Delete()
  remove(@Query('id') id: string) {
    this.shelvesService.remove(Number(id));
  }
}
