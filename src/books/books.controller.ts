import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(@Query('page') page?: string): Promise<Book[]> {
    return this.booksService.findAll(Number(page));
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book | null> {
    return this.booksService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<Book | null> {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.booksService.delete(id);
  }

}
