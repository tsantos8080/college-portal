import { Module } from '@nestjs/common';
import { StudentsService } from './services/students.service';

@Module({
  providers: [StudentsService],
})
export class StudentsModule {}
