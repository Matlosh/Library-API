import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, HttpCode } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './schemas/subject.schema';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.subjectsService.create(createSubjectDto);
  }

  @Get()
  findAll(@Query('page') page?: string): Promise<Subject[]> {
    return this.subjectsService.findAll(Number(page));
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Subject | null> {
    return this.subjectsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto): Promise<Subject | null> {
    return this.subjectsService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.subjectsService.delete(id);
  }
}
