import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ShelvesService } from './shelves.service';
import { Shelf } from './interfaces/shelf.interface';
import { CreateShelfDto } from "./dto/create-shelf.dto";
import { UpdateShelfDto } from "./dto/update-shelf.dto";

@Controller('shelves')
export class ShelvesController {
  constructor(private shelvesService: ShelvesService) {}

  @Post()
  create(@Body() shelf: CreateShelfDto) {
    this.shelvesService.create(shelf);
  }

  @Get()
  findAll(): Shelf[] {
    return this.shelvesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Shelf | null {
    return this.shelvesService.findOne(+id);
  } 

  @Put(':id')
  update(@Param('id') id: string, @Body() shelf: UpdateShelfDto) {
    this.shelvesService.update(+id, shelf);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.shelvesService.remove(+id);
  }
}
