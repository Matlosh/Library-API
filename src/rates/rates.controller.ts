import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RatesService } from './rates.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Post()
  create(@Body() rate: CreateRateDto) {
    return this.ratesService.create(rate);
  }

  @Get()
  findAll() {
    return this.ratesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ratesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() rate: UpdateRateDto) {
    return this.ratesService.update(+id, rate);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratesService.remove(+id);
  }
}
