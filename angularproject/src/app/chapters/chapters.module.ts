import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersRoutingModule } from './chapters-routing.module';
import { AddChaptersComponent } from './add-chapters/add-chapters.component';
import { ChaptersListComponent } from './chapters-list/chapters-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddChaptersComponent,
    ChaptersListComponent
  ],
  imports: [
    CommonModule,
    ChaptersRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChaptersModule { }
