import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-exam-item',
  templateUrl: './exam-item.component.html',
  styleUrls: ['./exam-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamItemComponent {}
