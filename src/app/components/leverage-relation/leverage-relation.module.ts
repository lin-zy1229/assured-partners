import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeverageRelationRoutingModule } from './leverage-relation-routing.module';
import { HomeLeverageRelationComponent } from './children/home-leverage-relation/home-leverage-relation.component';

@NgModule({
  imports: [
    CommonModule,
    LeverageRelationRoutingModule
  ],
  declarations: [HomeLeverageRelationComponent]
})
export class LeverageRelationModule { }
