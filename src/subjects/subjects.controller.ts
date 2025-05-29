import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, HttpCode } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './schemas/subject.schema';
import { ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse } from '@nestjs/swagger';
import { SubjectResponseDto } from './dto/subject-response.dto';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  @ApiCreatedResponse({
    type: SubjectResponseDto,
    description: 'Create a new subject'
  })
  create(@Body() createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.subjectsService.create(createSubjectDto);
  }

  @Get()
  @ApiOkResponse({
    type: [SubjectResponseDto],
    description: 'Retrieve a list of subjects'
  })
  findAll(@Query('page') page?: string): Promise<Subject[]> {
    return this.subjectsService.findAll(Number(page));
  }

  @Get(':id')
  @ApiOkResponse({
    type: SubjectResponseDto,
    description: 'Retrieve a subject by ID'
  })
  findOne(@Param('id') id: string): Promise<Subject | null> {
    return this.subjectsService.findOne(id);
  }

  @Put(':id')
  @ApiOkResponse({
    type: SubjectResponseDto,
    description: 'Update a subject by ID'
  })
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto): Promise<Subject | null> {
    return this.subjectsService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiNoContentResponse({
    description: 'Delete a subject by ID'
  })
  delete(@Param('id') id: string) {
    return this.subjectsService.delete(id);
  }
}
