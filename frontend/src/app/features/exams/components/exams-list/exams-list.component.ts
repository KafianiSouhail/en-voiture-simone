import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ExamsService } from '../../services/exams.service';
import { Exam } from '../../models/interfaces/exam.interface';
import { ExamStatus } from '../../models/enums/exam-status.enum';
import { Observable, shareReplay } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamsListComponent implements OnInit {
  public exams$: Observable<Exam[]>;
  public examStatus: typeof ExamStatus = ExamStatus;

  private readonly examsService = inject(ExamsService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.exams$ = this.examsService.getExams().pipe(shareReplay(1));
  }

  getStatusClassName(status: ExamStatus): string {
    switch (status) {
      case ExamStatus.CONFIRMED:
        return 'status-confirmed';
      case ExamStatus.TO_ORGANIZE:
        return 'status-organize';
      case ExamStatus.CANCELED:
        return 'status-canceled';
      case ExamStatus.SEARCHING_PLACE:
        return 'status-looking';
    }
  }

  navigateToAddExam(): void {
    this.router.navigate(['new-exam'], { relativeTo: this.activatedRoute });
  }
}
