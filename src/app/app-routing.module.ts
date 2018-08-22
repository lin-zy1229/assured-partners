import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BlueprintProcessComponent } from './components/blueprint-process/blueprint-process.component';
import { LeverageRelationComponent } from './components/leverage-relation/leverage-relation.component';
import { MappingItOutComponent } from './components/mapping-it-out/mapping-it-out.component';
import { ProactiveServiceComponent } from './components/proactive-service/proactive-service.component';
import { ProspectingComponent } from './components/prospecting/prospecting.component';
import { TheTruthComponent } from './components/the-truth/the-truth.component';

import { BlueprintAndTheWedgeComponent } from './components/blueprint-process/children/blueprint-and-the-wedge/blueprint-and-the-wedge.component';
import { TheBlueprintComponent } from './components/blueprint-process/children/the-blueprint/the-blueprint.component';
import { TheBPProcessComponent } from './components/blueprint-process/children/the-bpprocess/the-bpprocess.component';
import { TheBPPhilosophyComponent } from './components/blueprint-process/children/the-bpphilosophy/the-bpphilosophy.component';
import { TheChangeFormulaComponent } from './components/blueprint-process/children/the-change-formula/the-change-formula.component';
import { WhatMakesYouDifferentComponent } from './components/blueprint-process/children/what-makes-you-different/what-makes-you-different.component';
import { TwoPitfallsToOvercomeComponent } from './components/blueprint-process/children/two-pitfalls-to-overcome/two-pitfalls-to-overcome.component';
import { TheVaccumnCleanerSalespersonComponent } from './components/blueprint-process/children/the-vaccumn-cleaner-salesperson/the-vaccumn-cleaner-salesperson.component';
import { TheAdvisorConsultantComponent } from './components/blueprint-process/children/the-advisor-consultant/the-advisor-consultant.component';
import { TheInitialMeetingComponent } from './components/blueprint-process/children/the-initial-meeting/the-initial-meeting.component';
import { TheInitialMeetingTheOpenComponent } from './components/blueprint-process/children/the-initial-meeting-the-open/the-initial-meeting-the-open.component';
import { OutcomesLearningFromTheProspectComponent } from './components/blueprint-process/children/outcomes-learning-from-the-prospect/outcomes-learning-from-the-prospect.component';
import { OutcomesPCComponent } from './components/blueprint-process/children/outcomes-pc/outcomes-pc.component';
import { OutcomesEBComponent } from './components/blueprint-process/children/outcomes-eb/outcomes-eb.component';
import { OutcomesComponent } from './components/blueprint-process/children/outcomes/outcomes.component';
import { Phase1AndPhase2Component } from './components/blueprint-process/children/phase1-and-phase2/phase1-and-phase2.component';
import { TheScorecardComponent } from './components/blueprint-process/children/the-scorecard/the-scorecard.component';
import { APowerfulDiscoverySessionComponent } from './components/blueprint-process/children/apowerful-discovery-session/apowerful-discovery-session.component';
import { ScorecardDiscussionPointsComponent } from './components/blueprint-process/children/scorecard-discussion-points/scorecard-discussion-points.component';
import { TheBlueprintKeyDiscoveryFindingsComponent } from './components/blueprint-process/children/the-blueprint-key-discovery-findings/the-blueprint-key-discovery-findings.component';
import { Outcome1Component } from './components/blueprint-process/children/outcome1/outcome1.component';
import { DrivingThePointHomeComponent } from './components/blueprint-process/children/driving-the-point-home/driving-the-point-home.component';
import { HomeOfTheBlueprintProcessComponent } from './components/blueprint-process/children/home-of-the-blueprint-process/home-of-the-blueprint-process.component';

const routes: Routes = [
  {
    path: '1', component: BlueprintProcessComponent,
    children: [
      { path: '', component: HomeOfTheBlueprintProcessComponent },
      { path: '1', component: BlueprintAndTheWedgeComponent },
      { path: '2', component: TheBlueprintComponent },
      { path: '3', component: TheBPProcessComponent },
      { path: '4', component: TheBPPhilosophyComponent },
      { path: '5', component: TheChangeFormulaComponent },
      { path: '6', component: WhatMakesYouDifferentComponent },
      { path: '7', component: TwoPitfallsToOvercomeComponent },
      { path: '8', component: TheVaccumnCleanerSalespersonComponent },
      { path: '9', component: TheAdvisorConsultantComponent },
      { path: '10', component: TheInitialMeetingComponent },
      { path: '11', component: TheInitialMeetingTheOpenComponent },
      { path: '12', component: OutcomesLearningFromTheProspectComponent },
      { path: '13', component: OutcomesPCComponent },
      { path: '14', component: OutcomesEBComponent },
      { path: '15', component: OutcomesComponent },
      { path: '16', component: Phase1AndPhase2Component },
      { path: '17', component: TheScorecardComponent },
      { path: '18', component: APowerfulDiscoverySessionComponent },
      { path: '19', component: ScorecardDiscussionPointsComponent },
      { path: '20', component: TheBlueprintKeyDiscoveryFindingsComponent },
      { path: '21', component: Outcome1Component },
      { path: '22', component: DrivingThePointHomeComponent },
    ]
  },
  { path: '2', component: LeverageRelationComponent },
  { path: '3', component: MappingItOutComponent },
  { path: '4', component: ProactiveServiceComponent },
  { path: '5', component: ProspectingComponent },
  { path: '6', component: TheTruthComponent }

];

@NgModule({
  imports: [

    CommonModule,
    RouterModule.forRoot(routes)

  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }