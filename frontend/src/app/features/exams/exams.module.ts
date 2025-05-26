import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddExamComponent } from './components/add-exam/add-exam.component';
import { ExamsListComponent } from './components/exams-list/exams-list.component';
import { ExamsRoutingModule } from './exams-routing.module';

@NgModule({
  declarations: [ExamsListComponent, AddExamComponent],
  imports: [ExamsRoutingModule, SharedModule],
})
export class ExamsModule {}
