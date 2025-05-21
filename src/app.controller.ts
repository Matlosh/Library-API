import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Database } from './interfaces/database.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('database')
  getDatabase(): Database {
    return this.appService.database;
  }
}
