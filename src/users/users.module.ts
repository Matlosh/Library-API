import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { AppService } from "src/app.service";
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [AppService, UsersService]
})
export class UsersModule {

}