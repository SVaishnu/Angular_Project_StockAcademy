import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AuthorListComponent } from './author-list/author-list.component';

const routes: Routes = [

{ path: 'add' , component:AddAuthorComponent},

{ path: 'list' , component:AuthorListComponent},

{
  path: 'update/:id', component: AddAuthorComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
