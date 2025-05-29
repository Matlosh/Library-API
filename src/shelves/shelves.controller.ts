import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from "@nestjs/common";
import { ShelvesService } from './shelves.service';
import { Shelf } from './schemas/shelf.schema';
import { CreateShelfDto } from "./dto/create-shelf.dto";
import { UpdateShelfDto } from "./dto/update-shelf.dto";
import { ApiCreatedResponse, ApiOkResponse } from "@nestjs/swagger";
import { ShelfResponseDto } from "./dto/shelf-response.dto";

@Controller('shelves')
export class ShelvesController {
  constructor(private shelvesService: ShelvesService) {}

  @Post()
  @ApiCreatedResponse({
    type: ShelfResponseDto,
    description: "Create a shelf."
  })
  async create(@Body() shelf: CreateShelfDto): Promise<Shelf> {
    return this.shelvesService.create(shelf);
  }

  @Get()
  @ApiOkResponse({
    type: [ShelfResponseDto],
    description: "Get all shelves."
  })
  async findAll(@Query('page') page?: string): Promise<Shelf[]> {
    return this.shelvesService.findAll(Number(page));
  }

  @Get(':id')
  @ApiOkResponse({
    type: ShelfResponseDto,
    description: "Get a shelf by ID."
  })
  async findOne(@Param('id') id: string): Promise<Shelf | null> {
    return this.shelvesService.findOne(id);
  } 

  @Put(':id')
  @ApiOkResponse({
    type: ShelfResponseDto,
    description: "Update a shelf by ID."
  })
  async update(@Param('id') id: string, @Body() shelf: UpdateShelfDto): Promise<Shelf | null> {
    return this.shelvesService.update(id, shelf);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOkResponse({
    description: "Delete a shelf by ID."
  })
  delete(@Param('id') id: string) {
    this.shelvesService.delete(id);
  }
}
