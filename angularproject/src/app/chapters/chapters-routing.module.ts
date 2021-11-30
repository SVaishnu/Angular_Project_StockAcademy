import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChaptersComponent } from './add-chapters/add-chapters.component';
import { ChaptersListComponent } from './chapters-list/chapters-list.component';

const routes: Routes = [
 
  { path: 'add' , component:AddChaptersComponent },

  { path: 'list' , component:ChaptersListComponent},

  {
    path:'update/:id', component:AddChaptersComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaptersRoutingModule { }
