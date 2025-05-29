import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './schemas/book.schema';
import { ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse } from '@nestjs/swagger';
import { BookResponseDto } from './dto/book-response.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiCreatedResponse({
    type: BookResponseDto,
    description: 'Create a new book',
  })
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOkResponse({
    type: [BookResponseDto],
    description: 'Retrieve a list of books',
  })
  async findAll(@Query('page') page?: string): Promise<Book[]> {
    return this.booksService.findAll(Number(page));
  }

  @Get(':id')
  @ApiOkResponse({
    type: BookResponseDto,
    description: 'Retrieve a book by its ID',
  })
  async findOne(@Param('id') id: string): Promise<Book | null> {
    return this.booksService.findOne(id);
  }

  @Put(':id')
  @ApiOkResponse({
    type: BookResponseDto,
    description: 'Update a book by its ID',
  })
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<Book | null> {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  @ApiNoContentResponse({
    description: 'Delete a book by its ID'
  })
  async delete(@Param('id') id: string) {
    return this.booksService.delete(id);
  }

}
