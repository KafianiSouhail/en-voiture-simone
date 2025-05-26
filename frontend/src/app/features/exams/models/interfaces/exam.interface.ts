import { ExamStatus } from '../enums/exam-status.enum';

export interface Exam {
  firstname: string;
  lastname: string;
  meeting_point: string;
  date: Date;
  status: ExamStatus;
}
