import { Module } from '@nestjs/common';
import { LibrariesService } from './libraries.service';
import { LibrariesController } from './libraries.controller';
import { AppService } from 'src/app.service';
import { UsersService } from 'src/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Library, LibrarySchema } from './schemas/library.schema';
import { UsersModule } from 'src/users/users.module';
import { User, UserSchema } from 'src/users/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Library.name, schema: LibrarySchema },
      { name: User.name, schema: UserSchema }
    ])
  ],
  controllers: [LibrariesController],
  providers: [LibrariesService]
})
export class LibrariesModule {}
