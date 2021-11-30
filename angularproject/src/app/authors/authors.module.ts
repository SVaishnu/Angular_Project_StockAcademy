import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddAuthorComponent,
    AuthorListComponent

  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthorsModule { }
