import { NgModule } from '@angular/core';

import { BlueprintProcessRoutingModule } from './blueprint-process-routing.module';
import { BlueprintAndTheWedgeComponent } from './children/blueprint-and-the-wedge/blueprint-and-the-wedge.component';
import { TheBlueprintComponent } from './children/the-blueprint/the-blueprint.component';
import { TheBPProcessComponent } from './children/the-bpprocess/the-bpprocess.component';
import { TheBPPhilosophyComponent } from './children/the-bpphilosophy/the-bpphilosophy.component';
import { TheChangeFormulaComponent } from './children/the-change-formula/the-change-formula.component';
import { WhatMakesYouDifferentComponent } from './children/what-makes-you-different/what-makes-you-different.component';
import { TwoPitfallsToOvercomeComponent } from './children/two-pitfalls-to-overcome/two-pitfalls-to-overcome.component';
import { TheVaccumnCleanerSalespersonComponent } from './children/the-vaccumn-cleaner-salesperson/the-vaccumn-cleaner-salesperson.component';
import { TheAdvisorConsultantComponent } from './children/the-advisor-consultant/the-advisor-consultant.component';
import { TheInitialMeetingComponent } from './children/the-initial-meeting/the-initial-meeting.component';
import { TheInitialMeetingTheOpenComponent } from './children/the-initial-meeting-the-open/the-initial-meeting-the-open.component';
import { OutcomesComponent } from './children/outcomes/outcomes.component';
import { OutcomesPCComponent } from './children/outcomes-pc/outcomes-pc.component';
import { OutcomesEBComponent } from './children/outcomes-eb/outcomes-eb.component';
import { OutcomesLearningFromTheProspectComponent } from './children/outcomes-learning-from-the-prospect/outcomes-learning-from-the-prospect.component';
import { Phase1AndPhase2Component } from './children/phase1-and-phase2/phase1-and-phase2.component';
import { TheScorecardComponent } from './children/the-scorecard/the-scorecard.component';
import { APowerfulDiscoverySessionComponent } from './children/apowerful-discovery-session/apowerful-discovery-session.component';
import { ScorecardDiscussionPointsComponent } from './children/scorecard-discussion-points/scorecard-discussion-points.component';
import { TheBlueprintKeyDiscoveryFindingsComponent } from './children/the-blueprint-key-discovery-findings/the-blueprint-key-discovery-findings.component';
import { Outcome1Component } from './children/outcome1/outcome1.component';
import { DrivingThePointHomeComponent } from './children/driving-the-point-home/driving-the-point-home.component';
import { HomeOfTheBlueprintProcessComponent } from './children/home-of-the-blueprint-process/home-of-the-blueprint-process.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatSelectModule, MatOptionModule, MatListModule, MatTableModule, MatCardModule, MatButtonModule } from '@angular/material';


const modules = [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule
];

@NgModule({
  imports: [
    modules,
    BlueprintProcessRoutingModule
  ],
  exports: [
    modules,
    BlueprintProcessRoutingModule
  ],
  
  declarations: [BlueprintAndTheWedgeComponent, TheBlueprintComponent, TheBPProcessComponent, TheBPPhilosophyComponent, TheChangeFormulaComponent, WhatMakesYouDifferentComponent, TwoPitfallsToOvercomeComponent, TheVaccumnCleanerSalespersonComponent, TheAdvisorConsultantComponent, TheInitialMeetingComponent, TheInitialMeetingTheOpenComponent, OutcomesComponent, OutcomesPCComponent, OutcomesEBComponent, OutcomesLearningFromTheProspectComponent, Phase1AndPhase2Component, TheScorecardComponent, APowerfulDiscoverySessionComponent, ScorecardDiscussionPointsComponent, TheBlueprintKeyDiscoveryFindingsComponent, Outcome1Component, DrivingThePointHomeComponent, HomeOfTheBlueprintProcessComponent]
})
export class BlueprintProcessModule { }
