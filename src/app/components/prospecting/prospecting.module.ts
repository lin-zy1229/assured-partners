import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectingRoutingModule } from './prospecting-routing.module';
import { HomeProspectingComponent } from './children/home-prospecting/home-prospecting.component';

@NgModule({
  imports: [
    CommonModule,
    ProspectingRoutingModule
  ],
  declarations: [HomeProspectingComponent]
})
export class ProspectingModule { }
