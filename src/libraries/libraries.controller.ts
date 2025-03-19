import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { LibrariesService } from "./libraries.service";
import { Library } from "./interfaces/library.interface";
import { CreateLibraryDto } from "./dto/create-library.dto";
import { randomInt } from "crypto";
import { UpdateLibraryDto } from "./dto/update-library.dto";

@Controller('/libraries')
export class LibrariesController {
  constructor(private librariesService: LibrariesService) {}

  @Post()
  create(@Body() library: CreateLibraryDto) {
    this.librariesService.create(library);
  }

  @Get()
  findAll(): Library[] {
    return this.librariesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Library | null {
    return this.librariesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLibraryDto: UpdateLibraryDto) {
    this.librariesService.update(+id, updateLibraryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.librariesService.remove(+id);
  }
}
