import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectingRoutingModule } from './prospecting-routing.module';
import { HomeProspectingComponent } from './children/home-prospecting/home-prospecting.component';
import { ProspectingWhereToBeginSubitemComponent } from './children/prospecting-where-to-begin-subitem/prospecting-where-to-begin-subitem.component';
import { UsingSalesNavigatorSubitemComponent } from './children/using-sales-navigator-subitem/using-sales-navigator-subitem.component';
import { SearchSpotlightsSubitemComponent } from './children/search-spotlights-subitem/search-spotlights-subitem.component';
import { MultiThreadingSubitemComponent } from './children/multi-threading-subitem/multi-threading-subitem.component';
import { WhyPostOnLinkedInSubitemComponent } from './children/why-post-on-linked-in-subitem/why-post-on-linked-in-subitem.component';
import { ProspectingProcessToFollowSubitemComponent } from './children/prospecting-process-to-follow-subitem/prospecting-process-to-follow-subitem.component';
import { TouchesWeek12BeginningSubitemComponent } from './children/touches-week12-beginning-subitem/touches-week12-beginning-subitem.component';
import { TouchesWeek3GettingMeetingSubitemComponent } from './children/touches-week3-getting-meeting-subitem/touches-week3-getting-meeting-subitem.component';
import { TouchesWeek4OrganizingSubitemComponent } from './children/touches-week4-organizing-subitem/touches-week4-organizing-subitem.component';
import { TouchesBeginningYourRelationshipCampaignSubitemComponent } from './children/touches-beginning-your-relationship-campaign-subitem/touches-beginning-your-relationship-campaign-subitem.component';
import { FaceToFaceColdCallingSubitemComponent } from './children/face-to-face-cold-calling-subitem/face-to-face-cold-calling-subitem.component';
import { CenterOfInfluenceWorksheetSubitemComponent } from './children/center-of-influence-worksheet-subitem/center-of-influence-worksheet-subitem.component';
import { AReferralOrAnIntroductionSubitemComponent } from './children/areferral-or-an-introduction-subitem/areferral-or-an-introduction-subitem.component';
import { WhatWouldYouSayAboutUsSubitemComponent } from './children/what-would-you-say-about-us-subitem/what-would-you-say-about-us-subitem.component';
import { WriteItOutSubitemComponent } from './children/write-it-out-subitem/write-it-out-subitem.component';
import { DontAlienateYourSourceSubitemComponent } from './children/dont-alienate-your-source-subitem/dont-alienate-your-source-subitem.component';
import { MyGoalsSubitemComponent } from './children/my-goals-subitem/my-goals-subitem.component';
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
        ProspectingRoutingModule
    ],
    exports: [
        modules,
    ],
    declarations: [HomeProspectingComponent, ProspectingWhereToBeginSubitemComponent, UsingSalesNavigatorSubitemComponent, SearchSpotlightsSubitemComponent, MultiThreadingSubitemComponent, WhyPostOnLinkedInSubitemComponent, ProspectingProcessToFollowSubitemComponent, TouchesWeek12BeginningSubitemComponent, TouchesWeek3GettingMeetingSubitemComponent, TouchesWeek4OrganizingSubitemComponent, TouchesBeginningYourRelationshipCampaignSubitemComponent, FaceToFaceColdCallingSubitemComponent, CenterOfInfluenceWorksheetSubitemComponent, AReferralOrAnIntroductionSubitemComponent, WhatWouldYouSayAboutUsSubitemComponent, WriteItOutSubitemComponent, DontAlienateYourSourceSubitemComponent, MyGoalsSubitemComponent]
})
export class ProspectingModule { }
