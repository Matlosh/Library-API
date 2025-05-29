import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { AppService } from "src/app.service";
import { UsersService } from './users.service';
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { Library, LibrarySchema } from "src/libraries/schemas/library.schema";

@Module({
  imports: [MongooseModule.forFeature([
    { name: User.name, schema: UserSchema },
    { name: Library.name, schema: LibrarySchema }
  ])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {

}