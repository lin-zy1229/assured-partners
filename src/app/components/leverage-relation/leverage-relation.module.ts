import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeverageRelationRoutingModule } from './leverage-relation-routing.module';
import { HomeLeverageRelationComponent } from './children/home-leverage-relation/home-leverage-relation.component';
import { CenterOfInfluenceWorksheetSubitemComponent } from './children/center-of-influence-worksheet-subitem/center-of-influence-worksheet-subitem.component';
import { AReferralOrAnIntroductionSubitemComponent } from './children/areferral-or-an-introduction-subitem/areferral-or-an-introduction-subitem.component';
import { RevenueTableSubitemComponent } from './children/revenue-table-subitem/revenue-table-subitem.component';
import { WhatWouldYouSayAboutUsSubitemComponent } from './children/what-would-you-say-about-us-subitem/what-would-you-say-about-us-subitem.component';
import { WriteItOutSubitemComponent } from './children/write-it-out-subitem/write-it-out-subitem.component';
import { DontAlienateYourSourceSubitemComponent } from './children/dont-alienate-your-source-subitem/dont-alienate-your-source-subitem.component';
import { MyGoalsSubitemComponent } from './children/my-goals-subitem/my-goals-subitem.component';

@NgModule({
  imports: [
    CommonModule,
    LeverageRelationRoutingModule
  ],
  declarations: [HomeLeverageRelationComponent, CenterOfInfluenceWorksheetSubitemComponent, AReferralOrAnIntroductionSubitemComponent, RevenueTableSubitemComponent, WhatWouldYouSayAboutUsSubitemComponent, WriteItOutSubitemComponent, DontAlienateYourSourceSubitemComponent, MyGoalsSubitemComponent]
})
export class LeverageRelationModule { }
