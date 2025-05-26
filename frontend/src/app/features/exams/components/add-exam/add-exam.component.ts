import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExamStatus } from '../../models/enums/exam-status.enum';
import { ExamsService } from '../../services/exams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss'],
})
export class AddExamComponent implements OnInit {
  public readonly examStatus = Object.values(ExamStatus);
  public examForm: FormGroup = new FormGroup({});

  private readonly examService = inject(ExamsService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.examForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      status: new FormControl(ExamStatus.CONFIRMED, Validators.required),
      date: new FormControl(null),
      meeting_point: new FormControl(null),
    });
  }

  onSubmit(): void {
    if (this.examForm.valid) {
      this.examService.addExam(this.examForm.value).subscribe(() => {
        this.examForm.reset();
        this.router.navigate(['exams']);
      });
    }
  }
}
