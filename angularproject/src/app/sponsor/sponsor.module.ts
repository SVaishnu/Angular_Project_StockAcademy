import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorRoutingModule } from './sponsor-routing.module';
import { AddSponsorComponent } from './add-sponsor/add-sponsor.component';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddSponsorComponent,
    SponsorListComponent
  ],
  imports: [
    CommonModule,
    SponsorRoutingModule,
    ReactiveFormsModule
  ]
})
export class SponsorModule { }
