import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';

const routes: Routes = [
  {
    path: 'Addsubject', component: AddSubjectComponent,
  },
  {
    path: 'Subjectlist', component: SubjectListComponent
  },
  {
    path: 'update/:id', component: AddSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
