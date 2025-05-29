import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode } from '@nestjs/common';
import { RatesService } from './rates.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Rate } from './schemas/rate.schema';
import { ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { RateResponseDto } from './dto/rate-response.dto';

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Post()
  @ApiCreatedResponse({
    type: RateResponseDto,
    description: 'Creates a new rate for a book by a user'
  })
  async create(@Body() rate: CreateRateDto): Promise<Rate> {
    return this.ratesService.create(rate);
  }

  @Get()
  @ApiOkResponse({
    type: [RateResponseDto],
    description: 'Returns a list of all rates'
  })
  async findAll(@Query('page') page: string): Promise<Rate[]> {
    return this.ratesService.findAll(Number(page));
  }

  @Get(':id')
  @ApiOkResponse({
    type: RateResponseDto,
    description: 'Returns a rate by its ID'
  })
  async findOne(@Param('id') id: string): Promise<Rate | null> {
    return this.ratesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    type: RateResponseDto,
    description: 'Updates a rate by its ID'
  })
  async update(@Param('id') id: string, @Body() rate: UpdateRateDto): Promise<Rate | null> {
    return this.ratesService.update(id, rate);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiNoContentResponse({
    description: 'Deletes a rate by its ID',
  })
  async delete(@Param('id') id: string) {
    this.ratesService.delete(id);
  }
}
