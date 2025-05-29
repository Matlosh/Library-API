import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from "@nestjs/common";
import { LibrariesService } from "./libraries.service";
import { CreateLibraryDto } from "./dto/create-library.dto";
import { UpdateLibraryDto } from "./dto/update-library.dto";
import { Library } from "./schemas/library.schema";

@Controller('/libraries')
export class LibrariesController {
  constructor(private librariesService: LibrariesService) {}

  @Post()
  async create(@Body() library: CreateLibraryDto): Promise<Library> {
    return this.librariesService.create(library);
  }

  @Get()
  async findAll(@Query('page') page?: string): Promise<Library[]> {
    return this.librariesService.findAll(Number(page));
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Library | null> {
    return this.librariesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLibraryDto: UpdateLibraryDto): Promise<Library | null> {
    return this.librariesService.update(id, updateLibraryDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    this.librariesService.delete(id);
  }
}
