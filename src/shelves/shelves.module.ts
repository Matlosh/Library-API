import { Module } from '@nestjs/common';
import { ShelvesController } from './shelves.controller';
import { AppService } from 'src/app.service';
import { ShelvesService } from './shelves.service';

@Module({
  controllers: [ShelvesController],
  providers: [AppService, ShelvesService]
})
export class ShelvesModule {}
