import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from '../dtos/create-student.dto';
import { StudentEntity } from '../entities/student.entity';

@Injectable()
export class StudentsService {
  create(createStudentDto: CreateStudentDto): StudentEntity {
    const studentEntity = new StudentEntity();

    studentEntity.name = createStudentDto.name;
    studentEntity.age = createStudentDto.age;

    return studentEntity;
  }
}
