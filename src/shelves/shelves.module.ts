import { Module } from '@nestjs/common';
import { ShelvesController } from './shelves.controller';
import { ShelvesService } from './shelves.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Shelf, ShelfSchema } from './schemas/shelf.schema';
import { Library, LibrarySchema } from 'src/libraries/schemas/library.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Shelf.name, schema: ShelfSchema },
      { name: Library.name, schema: LibrarySchema }
    ]),
  ],
  controllers: [ShelvesController],
  providers: [ShelvesService]
})
export class ShelvesModule {}
