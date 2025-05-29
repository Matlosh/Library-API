import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateShelfDto } from "./dto/create-shelf.dto";
import { UpdateShelfDto } from "./dto/update-shelf.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Shelf } from "./schemas/shelf.schema";
import mongoose, { Model } from "mongoose";
import { config } from "src/config";
import { Library } from "src/libraries/schemas/library.schema";

@Injectable()
export class ShelvesService {
  constructor(
    @InjectModel(Shelf.name) private shelfModel: Model<Shelf>,
    @InjectModel(Library.name) private libraryModel: Model<Library>
  ) {}

  private async validateLibrary(libraryId: mongoose.Schema.Types.ObjectId): Promise<void> {
    const library = await this.libraryModel.findOne({ _id: libraryId }).exec();
    if (!library) {
      throw new NotFoundException("Library with passed libraryId doesn't exist.");
    }
  }

  async create(shelf: CreateShelfDto): Promise<Shelf> {
    await this.validateLibrary(shelf.libraryId);

    const createdShelf = new this.shelfModel({
      ...shelf,
      library: shelf.libraryId
    });
    return createdShelf.save();
  }

  async findAll(page: number = 0): Promise<Shelf[]> {
    return this.shelfModel
      .find()
      .limit(config.findAllLimit)
      .skip(page * config.findAllLimit)
      .exec();
  }

  async findOne(id: string): Promise<Shelf | null> {
    return this.shelfModel
      .findById(id)
      .exec();
  }

  async update(id: string, shelf: UpdateShelfDto): Promise<Shelf | null> {
    await this.validateLibrary(shelf.libraryId);

    const response = await this.shelfModel.updateOne({ _id: id }, {
      ...shelf,
      library: shelf.libraryId
    }).exec();

    if(response.matchedCount === 0) {
      throw new NotFoundException("Can't find shelf to update.");
    }

    return await this.findOne(id);
  }

  async delete(id: string) {
    const response = await this.shelfModel.deleteOne({ _id: id }).exec();

    if(response.deletedCount === 0) {
      throw new NotFoundException("Can't find shelf to delete.");
    }
  }
}