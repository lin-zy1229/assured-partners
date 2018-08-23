import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappingItOutRoutingModule } from './mapping-it-out-routing.module';
import { SettingTheStageComponent } from './children/setting-the-stage/setting-the-stage.component';
import { MappingItOutSubItemComponent } from './children/mapping-it-out-sub-item/mapping-it-out-sub-item.component';
import { TheMapWhatIsOnItComponent } from './children/the-map-what-is-on-it/the-map-what-is-on-it.component';
import { WhoComponent } from './children/who/who.component';
import { WhoKeyQuestionComponent } from './children/who-key-question/who-key-question.component';
import { WhenComponent } from './children/when/when.component';
import { HowMakingSureTheyGetItComponent } from './children/how-making-sure-they-get-it/how-making-sure-they-get-it.component';
import { WhyConfirmingTheyWantItComponent } from './children/why-confirming-they-want-it/why-confirming-they-want-it.component';
import { NotesComponent } from './children/notes/notes.component';
import { PresentingToWinComponent } from './children/presenting-to-win/presenting-to-win.component';
import { DinnerWithFriendsComponent } from './children/dinner-with-friends/dinner-with-friends.component';
import { ConclusionComponent } from './children/conclusion/conclusion.component';
import { SomeAnalogiesComponent } from './children/some-analogies/some-analogies.component';
import { WrittenServiceTimeline2017Component } from './children/written-service-timeline2017/written-service-timeline2017.component';
import { HomeMappingItOutComponent } from './children/home-mapping-it-out/home-mapping-it-out.component';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatSelectModule, MatOptionModule, MatListModule, MatTableModule, MatStepperModule, MatButtonModule } from '@angular/material';


const modules = [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
];

@NgModule({
  imports: [
    modules,
    CommonModule,
    MappingItOutRoutingModule
  ],
  exports: [
    modules,
    MappingItOutRoutingModule
  ],
  declarations: [SettingTheStageComponent, MappingItOutSubItemComponent, TheMapWhatIsOnItComponent, WhoComponent, WhoKeyQuestionComponent, WhenComponent, HowMakingSureTheyGetItComponent, WhyConfirmingTheyWantItComponent, NotesComponent, PresentingToWinComponent, DinnerWithFriendsComponent, ConclusionComponent, SomeAnalogiesComponent, WrittenServiceTimeline2017Component, HomeMappingItOutComponent]
})
export class MappingItOutModule { }
