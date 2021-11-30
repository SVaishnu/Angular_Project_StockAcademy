import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddSubjectComponent,
    SubjectListComponent,
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class SubjectModule { }
