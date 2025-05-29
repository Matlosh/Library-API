import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from "@nestjs/common";
import { LibrariesService } from "./libraries.service";
import { CreateLibraryDto } from "./dto/create-library.dto";
import { UpdateLibraryDto } from "./dto/update-library.dto";
import { Library } from "./schemas/library.schema";
import { ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse } from "@nestjs/swagger";
import { LibraryResponseDto } from "./dto/library-response.dto";

@Controller('/libraries')
export class LibrariesController {
  constructor(private librariesService: LibrariesService) {}

  @Post()
  @ApiCreatedResponse({
    type: LibraryResponseDto,
    description: 'Creates a new library'
  })
  async create(@Body() library: CreateLibraryDto): Promise<Library> {
    return this.librariesService.create(library);
  }

  @Get()
  @ApiOkResponse({
    type: [LibraryResponseDto],
    description: 'Returns a list of libraries'
  })
  async findAll(@Query('page') page?: string): Promise<Library[]> {
    return this.librariesService.findAll(Number(page));
  }

  @Get(':id')
  @ApiOkResponse({
    type: LibraryResponseDto,
    description: 'Returns a library by its ID'
  })
  async findOne(@Param('id') id: string): Promise<Library | null> {
    return this.librariesService.findOne(id);
  }

  @Put(':id')
  @ApiOkResponse({
    type: LibraryResponseDto,
    description: 'Updates a library by its ID'
  })
  async update(@Param('id') id: string, @Body() updateLibraryDto: UpdateLibraryDto): Promise<Library | null> {
    return this.librariesService.update(id, updateLibraryDto);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiNoContentResponse({
    description: 'Deletes a library by its ID'
  })
  async delete(@Param('id') id: string) {
    this.librariesService.delete(id);
  }
}
