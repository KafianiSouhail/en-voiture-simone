import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { Exam } from '../models/interfaces/exam.interface';

@Injectable({
  providedIn: 'root',
})
export class ExamsService {
  private readonly http = inject(ApiHttpService);

  public getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>('exams');
  }

  public addExam(exam: Exam) {
    return this.http.post<Exam>('exams', exam);
  }
}
