import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheTruthRoutingModule } from './the-truth-routing.module';
import { HomeTheTruthComponent } from './children/home-the-truth/home-the-truth.component';

@NgModule({
  imports: [
    CommonModule,
    TheTruthRoutingModule
  ],
  declarations: [HomeTheTruthComponent]
})
export class TheTruthModule { }
