import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheTruthRoutingModule } from './the-truth-routing.module';
import { HomeTheTruthComponent } from './children/home-the-truth/home-the-truth.component';
import { SettingTheStageSubitemComponent } from './children/setting-the-stage-subitem/setting-the-stage-subitem.component';
import { TheIntellectualResponseSubitemComponent } from './children/the-intellectual-response-subitem/the-intellectual-response-subitem.component';
import { TheRehearsalStepsSubitemComponent } from './children/the-rehearsal-steps-subitem/the-rehearsal-steps-subitem.component';
import { DilemmaSecondTransitionSubitemComponent } from './children/dilemma-second-transition-subitem/dilemma-second-transition-subitem.component';
import { TheCrystalBallSubitemComponent } from './children/the-crystal-ball-subitem/the-crystal-ball-subitem.component';
import { WrappingUpSubitemComponent } from './children/wrapping-up-subitem/wrapping-up-subitem.component';

@NgModule({
  imports: [
    CommonModule,
    TheTruthRoutingModule
  ],
  declarations: [HomeTheTruthComponent, SettingTheStageSubitemComponent, TheIntellectualResponseSubitemComponent, TheRehearsalStepsSubitemComponent, DilemmaSecondTransitionSubitemComponent, TheCrystalBallSubitemComponent, WrappingUpSubitemComponent]
})
export class TheTruthModule { }
