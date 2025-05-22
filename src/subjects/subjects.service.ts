import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { AppService } from 'src/app.service';
import { Subject } from './interfaces/subject.interface';
import { randomInt } from 'crypto';

@Injectable()
export class SubjectsService {
  private readonly subjects: Subject[];

  constructor(private appService: AppService) {
    this.subjects = appService.database.subjects;
  }

  create(subject: CreateSubjectDto) {
    this.subjects.push({
      ...subject,
      id: randomInt(1024)
    });
  }

  findAll() {
    return this.subjects;
  }

  findOne(id: number) {
    const subject = this.subjects.find(s => s.id === id);
    return subject ? subject : null;
  }

  update(id: number, subject: UpdateSubjectDto) {
    const subjectIndex = this.subjects.findIndex(s => s.id === id);
    if(subjectIndex <= -1) {
      throw new NotFoundException("Can't find subject to update.");
    }

    this.subjects[subjectIndex] = {
      ...subject,
      id
    };
  }

  remove(id: number) {
    const subjectIndex = this.subjects.findIndex(s => s.id === id);
    if(subjectIndex <= -1) {
      throw new NotFoundException("Can't find subject to delete.");
    }

    this.subjects.splice(subjectIndex, 1);
  }
}
