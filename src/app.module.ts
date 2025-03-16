import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LibrariesModule } from './libraries/libraries.module';

@Module({
  imports: [UsersModule, LibrariesModule],
  exports: [AppService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
