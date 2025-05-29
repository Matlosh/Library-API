import { Injectable, NotFoundException } from "@nestjs/common";
import { AppService } from "src/app.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { randomInt } from "crypto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { SubjectsService } from "src/subjects/subjects.service";
import { ShelvesService } from "src/shelves/shelves.service";
import { InjectModel } from "@nestjs/mongoose";
import { Book } from "./schemas/book.schema";
import mongoose, { Model } from "mongoose";
import { Subject } from "src/subjects/schemas/subject.schema";
import { Shelf } from "src/shelves/schemas/shelf.schema";
import { config } from "src/config";

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>,
    @InjectModel(Subject.name) private subjectModel: Model<Subject>,
    @InjectModel(Shelf.name) private shelfModel: Model<Shelf>
  ) {}

  private async validateSubjectsAndShelves(
    subjectsIds: mongoose.Schema.Types.ObjectId[],
    shelvesIds: mongoose.Schema.Types.ObjectId[]
  ): Promise<void> {
    const subjects = await this.subjectModel.find({ _id: { $in: subjectsIds } }).exec();
    if (subjects.length !== subjectsIds.length) {
      throw new NotFoundException("One or more subjects do not exist.");
    }

    const shelves = await this.shelfModel.find({ _id: { $in: shelvesIds } }).exec();
    if (shelves.length !== shelvesIds.length) {
      throw new NotFoundException("One or more shelves do not exist.");
    }
  }

  async create(book: CreateBookDto): Promise<Book> {
    await this.validateSubjectsAndShelves(book.subjectsIds, book.shelvesIds);

    const createdBook = new this.bookModel({
      ...book,
      subjects: book.subjectsIds,
      shelves: book.shelvesIds
    });
    return createdBook.save();
  }

  async findAll(page: number = 0): Promise<Book[]> {
    return this.bookModel
      .find()
      .limit(config.findAllLimit)
      .skip(page * config.findAllLimit)
      .exec();
  }

  async findOne(id: string): Promise<Book | null> {
    return this.bookModel
      .findById(id)
      .exec();
  }

  async update(id: string, book: UpdateBookDto): Promise<Book | null> {
    await this.validateSubjectsAndShelves(book.subjectsIds, book.shelvesIds);

    const response = await this.bookModel.updateOne({ _id: id }, book).exec();
    if(response.matchedCount === 0) {
      throw new NotFoundException("Can't find book to update.");
    }

    return await this.findOne(id);
  }

  async delete(id: string) {
    const response = await this.bookModel.deleteOne({ _id: id }).exec();
    if(response.deletedCount === 0) {
      throw new NotFoundException("Can't find book to delete.");
    }
  }
}