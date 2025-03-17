import { Module } from '@nestjs/common';
import { LibrariesService } from './libraries.service';
import { LibrariesController } from './libraries.controller';
import { AppService } from 'src/app.service';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [LibrariesController],
  providers: [LibrariesService, AppService, UsersService]
})
export class LibrariesModule {}
