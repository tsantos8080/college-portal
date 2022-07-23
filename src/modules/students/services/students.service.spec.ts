import { Test, TestingModule } from '@nestjs/testing';
import { StudentsService } from './students.service';
import { plainToClass } from 'class-transformer';
import { CreateStudentDto } from '../dtos/create-student.dto';
import { StudentEntity } from '../entities/student.entity';

describe('StudentsService', () => {
  let service: StudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsService],
    }).compile();

    service = module.get<StudentsService>(StudentsService);
  });

  it('creates a student entity', () => {
    const createStudentDto = plainToClass(CreateStudentDto, {
      name: 'Chris Rock',
      age: 20,
    });

    const sut = service.create(createStudentDto);

    expect(sut).toBeInstanceOf(StudentEntity);
    expect(sut.name).toBe(createStudentDto.name);
    expect(sut.age).toBe(createStudentDto.age);
  });
});
