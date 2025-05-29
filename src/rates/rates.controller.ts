import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode } from '@nestjs/common';
import { RatesService } from './rates.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Rate } from './schemas/rate.schema';

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Post()
  async create(@Body() rate: CreateRateDto): Promise<Rate> {
    return this.ratesService.create(rate);
  }

  @Get()
  async findAll(@Query('page') page: string): Promise<Rate[]> {
    return this.ratesService.findAll(Number(page));
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Rate | null> {
    return this.ratesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() rate: UpdateRateDto): Promise<Rate | null> {
    return this.ratesService.update(id, rate);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    this.ratesService.delete(id);
  }
}
