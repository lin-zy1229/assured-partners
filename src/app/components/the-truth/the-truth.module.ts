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
import { SettingTheStageContSubitemComponent } from './children/setting-the-stage-cont-subitem/setting-the-stage-cont-subitem.component';
import { ProposalsCostMoneySubitemComponent } from './children/proposals-cost-money-subitem/proposals-cost-money-subitem.component';
import { TheIntellectualResponseContSubitemComponent } from './children/the-intellectual-response-cont-subitem/the-intellectual-response-cont-subitem.component';
import { WhatAreOtherQuestionsSubitemComponent } from './children/what-are-other-questions-subitem/what-are-other-questions-subitem.component';
import { ThreeImportantItemsSubitemComponent } from './children/three-important-items-subitem/three-important-items-subitem.component';
import { MoreScriptingSubitemComponent } from './children/more-scripting-subitem/more-scripting-subitem.component';
import { ReallySubitemComponent } from './children/really-subitem/really-subitem.component';
import { RehearsingWhatWillHappenSubitemComponent } from './children/rehearsing-what-will-happen-subitem/rehearsing-what-will-happen-subitem.component';
import { NotesSubitemComponent } from './children/notes-subitem/notes-subitem.component';
import { DilemmaSubitemComponent } from './children/dilemma-subitem/dilemma-subitem.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatStepperModule, MatButtonModule, MatChipsModule } from '@angular/material';

const modules = [
    BrowserModule,
    BrowserAnimationsModule,
    // MatListModule,
    MatFormFieldModule,
    MatInputModule,
    // MatSelectModule,
    // MatOptionModule,
    // MatTableModule,
    MatStepperModule,
    MatButtonModule,
    // MatGridListModule,
    MatChipsModule,
];

@NgModule({
  imports: [
    modules,
    CommonModule,
    TheTruthRoutingModule
  ],
  exports: [
    modules,
  ],
  declarations: [HomeTheTruthComponent, SettingTheStageSubitemComponent, TheIntellectualResponseSubitemComponent, TheRehearsalStepsSubitemComponent, DilemmaSecondTransitionSubitemComponent, TheCrystalBallSubitemComponent, WrappingUpSubitemComponent, SettingTheStageContSubitemComponent, ProposalsCostMoneySubitemComponent, TheIntellectualResponseContSubitemComponent, WhatAreOtherQuestionsSubitemComponent, ThreeImportantItemsSubitemComponent, MoreScriptingSubitemComponent, ReallySubitemComponent, RehearsingWhatWillHappenSubitemComponent, NotesSubitemComponent, DilemmaSubitemComponent]
})
export class TheTruthModule { }
