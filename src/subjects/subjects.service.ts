import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { AppService } from 'src/app.service';
import { randomInt } from 'crypto';
import { InjectModel } from '@nestjs/mongoose';
import { Subject } from './schemas/subject.schema';
import { Model } from 'mongoose';
import { config } from 'src/config';

@Injectable()
export class SubjectsService {
  constructor(@InjectModel(Subject.name) private subjectModel: Model<Subject>) {}

  async create(subject: CreateSubjectDto): Promise<Subject> {
    const createdSubject = new this.subjectModel(subject);
    return createdSubject.save();
  }

  async findAll(page: number = 0): Promise<Subject[]> {
    return this.subjectModel
      .find()
      .limit(config.findAllLimit)
      .skip(page * config.findAllLimit)
      .exec();
  }

  async findOne(id: string): Promise<Subject | null> {
    return this.subjectModel  
      .findById(id)
      .exec();
  }

  async update(id: string, subject: UpdateSubjectDto): Promise<Subject | null> {
    const response = await this.subjectModel.updateOne({ _id: id }, subject).exec();

    if(response.matchedCount === 0) {
      throw new NotFoundException("Can't find subject to update.");
    }

    return await this.findOne(id);
  }

  async delete(id: string) {
    const response = await this.subjectModel.deleteOne({ _id: id }).exec();

    if(response.deletedCount === 0) {
      throw new NotFoundException("Can't find subject to delete.");
    }
  }
}
