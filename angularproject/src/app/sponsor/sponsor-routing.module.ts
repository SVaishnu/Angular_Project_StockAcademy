import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSponsorComponent } from './add-sponsor/add-sponsor.component';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';

const routes: Routes = [

  { path: 'add' , component:AddSponsorComponent},

  { path: 'list' , component:SponsorListComponent},

  { path: 'update/:id' , component:AddSponsorComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorRoutingModule { }
