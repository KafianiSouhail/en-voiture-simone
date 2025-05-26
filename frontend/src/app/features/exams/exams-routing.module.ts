import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamsListComponent } from './components/exams-list/exams-list.component';
import { AddExamComponent } from './components/add-exam/add-exam.component';

const routes: Routes = [
  { path: '', component: ExamsListComponent, pathMatch: 'full' },
  { path: 'new-exam', component: AddExamComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamsRoutingModule {}
