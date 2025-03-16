import { Module } from '@nestjs/common';
import { LibrariesService } from './libraries.service';
import { LibrariesController } from './libraries.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [LibrariesController],
  providers: [LibrariesService, AppService]
})
export class LibrariesModule {}
