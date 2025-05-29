import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from "@nestjs/common";
import { ShelvesService } from './shelves.service';
import { Shelf } from './schemas/shelf.schema';
import { CreateShelfDto } from "./dto/create-shelf.dto";
import { UpdateShelfDto } from "./dto/update-shelf.dto";

@Controller('shelves')
export class ShelvesController {
  constructor(private shelvesService: ShelvesService) {}

  @Post()
  async create(@Body() shelf: CreateShelfDto): Promise<Shelf> {
    return this.shelvesService.create(shelf);
  }

  @Get()
  async findAll(@Query('page') page?: string): Promise<Shelf[]> {
    return this.shelvesService.findAll(Number(page));
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Shelf | null> {
    return this.shelvesService.findOne(id);
  } 

  @Put(':id')
  async update(@Param('id') id: string, @Body() shelf: UpdateShelfDto): Promise<Shelf | null> {
    return this.shelvesService.update(id, shelf);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    this.shelvesService.delete(id);
  }
}
