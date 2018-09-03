import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BlueprintProcessComponent } from './components/blueprint-process/blueprint-process.component';
import { LeverageRelationComponent } from './components/leverage-relation/leverage-relation.component';
import { MappingItOutComponent } from './components/mapping-it-out/mapping-it-out.component';
import { ProactiveServiceComponent } from './components/proactive-service/proactive-service.component';
import { ProspectingComponent } from './components/prospecting/prospecting.component';
import { TheTruthComponent } from './components/the-truth/the-truth.component';
//
// Blueprint Process
//
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
//
// Mapping It Out
//
import { HomeMappingItOutComponent } from './components/mapping-it-out/children/home-mapping-it-out/home-mapping-it-out.component';
import { SettingTheStageComponent } from './components/mapping-it-out/children/setting-the-stage/setting-the-stage.component';
import { MappingItOutSubItemComponent } from './components/mapping-it-out/children/mapping-it-out-sub-item/mapping-it-out-sub-item.component';
import { TheMapWhatIsOnItComponent } from './components/mapping-it-out/children/the-map-what-is-on-it/the-map-what-is-on-it.component';
import { WhoComponent } from './components/mapping-it-out/children/who/who.component';
import { WhoKeyQuestionComponent } from './components/mapping-it-out/children/who-key-question/who-key-question.component';
import { WhenComponent } from './components/mapping-it-out/children/when/when.component';
import { HowMakingSureTheyGetItComponent } from './components/mapping-it-out/children/how-making-sure-they-get-it/how-making-sure-they-get-it.component';
import { WhyConfirmingTheyWantItComponent } from './components/mapping-it-out/children/why-confirming-they-want-it/why-confirming-they-want-it.component';
import { NotesComponent } from './components/mapping-it-out/children/notes/notes.component';
import { PresentingToWinComponent } from './components/mapping-it-out/children/presenting-to-win/presenting-to-win.component';
import { DinnerWithFriendsComponent } from './components/mapping-it-out/children/dinner-with-friends/dinner-with-friends.component';
import { ConclusionComponent } from './components/mapping-it-out/children/conclusion/conclusion.component';
import { SomeAnalogiesComponent } from './components/mapping-it-out/children/some-analogies/some-analogies.component';
import { WrittenServiceTimeline2017Component } from './components/mapping-it-out/children/written-service-timeline2017/written-service-timeline2017.component';
import { HomeLeverageRelationComponent } from './components/leverage-relation/children/home-leverage-relation/home-leverage-relation.component';
import { HomeProactiveServiceComponent } from './components/proactive-service/children/home-proactive-service/home-proactive-service.component';
import { HomeProspectingComponent } from './components/prospecting/children/home-prospecting/home-prospecting.component';
import { HomeTheTruthComponent } from './components/the-truth/children/home-the-truth/home-the-truth.component';

const routes: Routes = [
  { path: '', redirectTo: '/Blueprint Process', pathMatch: 'full' },
  {
    path: 'Blueprint Process', component: BlueprintProcessComponent,
    children: [
      { path: '', component: HomeOfTheBlueprintProcessComponent },
      { path: 'Blueprint and The Wedge', component: BlueprintAndTheWedgeComponent },
      { path: 'The BlueprintFive Bottlenecks to Growth', component: TheBlueprintComponent },
      { path: 'The BP Process (Three Mettings)', component: TheBPProcessComponent },
      { path: 'The BP Philosophy', component: TheBPPhilosophyComponent },
      { path: 'The Change Formula', component: TheChangeFormulaComponent },
      { path: 'What Makes You Different', component: WhatMakesYouDifferentComponent },
      { path: 'Two Pitfalls to Overcome', component: TwoPitfallsToOvercomeComponent },
      { path: 'The Vaccumn Cleaner Salesperson', component: TheVaccumnCleanerSalespersonComponent },
      { path: 'The Advisor/Consultant', component: TheAdvisorConsultantComponent },
      { path: 'The Initial Meeting', component: TheInitialMeetingComponent },
      { path: 'The Initial Meeting - The Open', component: TheInitialMeetingTheOpenComponent },
      { path: 'OutcomesLearning From The Prospect', component: OutcomesLearningFromTheProspectComponent },
      { path: 'Outcomes - P&C', component: OutcomesPCComponent },
      { path: 'Outcomes - EB', component: OutcomesEBComponent },
      { path: 'Outcomes', component: OutcomesComponent },
      { path: 'Phase 1 and Phase 2', component: Phase1AndPhase2Component },
      { path: 'The Scorecard', component: TheScorecardComponent },
      { path: 'A Powerful Discovery Session', component: APowerfulDiscoverySessionComponent },
      { path: 'Scorecard Discussion Points', component: ScorecardDiscussionPointsComponent },
      { path: 'The "Blueprint"Key Discovery Findings', component: TheBlueprintKeyDiscoveryFindingsComponent },
      { path: 'Outcome #1', component: Outcome1Component },
      { path: 'Driving The Point Home', component: DrivingThePointHomeComponent },
    ]
  },
  {
    path: 'Leverage Relation', component: LeverageRelationComponent,
    children: [
      { path: '', component: HomeLeverageRelationComponent },
      { path: '1', component: HomeLeverageRelationComponent },
      { path: '2', component: HomeLeverageRelationComponent },
      { path: '3', component: HomeLeverageRelationComponent },
      { path: '4', component: HomeLeverageRelationComponent },
      { path: '5', component: HomeLeverageRelationComponent },
      { path: '6', component: HomeLeverageRelationComponent },
      { path: '7', component: HomeLeverageRelationComponent },
    ]
  },
  {
    path: 'Mapping It Out', component: MappingItOutComponent,
    children: [
      { path: '', component: HomeMappingItOutComponent },
      { path: '1', component: SettingTheStageComponent },
      { path: '2', component: MappingItOutSubItemComponent },
      { path: '3', component: TheMapWhatIsOnItComponent },
      { path: '4', component: WhoComponent },
      { path: '5', component: WhoKeyQuestionComponent },
      { path: '6', component: WhenComponent },
      { path: '7', component: HowMakingSureTheyGetItComponent },
      { path: '8', component: WhyConfirmingTheyWantItComponent },
      { path: '9', component: NotesComponent },
      { path: '10', component: PresentingToWinComponent },
      { path: '11', component: DinnerWithFriendsComponent },
      { path: '12', component: ConclusionComponent },
      { path: '13', component: SomeAnalogiesComponent },
      { path: '14', component: WrittenServiceTimeline2017Component },
    ]
  },
  {
    path: 'Proactive Service', component: ProactiveServiceComponent,
    children: [
      { path: '', component: HomeProactiveServiceComponent },
      { path: '1', component: HomeProactiveServiceComponent },
      { path: '2', component: HomeProactiveServiceComponent },
      { path: '3', component: HomeProactiveServiceComponent },
      { path: '4', component: HomeProactiveServiceComponent },
      { path: '5', component: HomeProactiveServiceComponent },
      { path: '6', component: HomeProactiveServiceComponent },
      { path: '7', component: HomeProactiveServiceComponent },
      { path: '8', component: HomeProactiveServiceComponent },
      { path: '9', component: HomeProactiveServiceComponent },
      { path: '10', component: HomeProactiveServiceComponent },
      { path: '11', component: HomeProactiveServiceComponent },
      { path: '12', component: HomeProactiveServiceComponent },
      { path: '13', component: HomeProactiveServiceComponent },
      { path: '14', component: HomeProactiveServiceComponent },
    ]
  },
  {
    path: 'Prospecting', component: ProspectingComponent,
    children: [
      { path: '', component: HomeProspectingComponent },
      { path: '1', component: HomeProspectingComponent },
      { path: '2', component: HomeProspectingComponent },
      { path: '3', component: HomeProspectingComponent },
      { path: '4', component: HomeProspectingComponent },
      { path: '5', component: HomeProspectingComponent },
      { path: '6', component: HomeProspectingComponent },
      { path: '7', component: HomeProspectingComponent },
      { path: '8', component: HomeProspectingComponent },
      { path: '9', component: HomeProspectingComponent },
      { path: '10', component: HomeProspectingComponent },
      { path: '11', component: HomeProspectingComponent },
      { path: '12', component: HomeProspectingComponent },
      { path: '13', component: HomeProspectingComponent },
      { path: '14', component: HomeProspectingComponent },
      { path: '15', component: HomeProspectingComponent },
      { path: '16', component: HomeProspectingComponent },
      { path: '17', component: HomeProspectingComponent },
    ]
  },
  {
    path: 'The Truth', component: TheTruthComponent,
    children: [
      { path: '', component: HomeTheTruthComponent },
      { path: '1', component: HomeTheTruthComponent },
      { path: '2', component: HomeTheTruthComponent },
      { path: '3', component: HomeTheTruthComponent },
      { path: '4', component: HomeTheTruthComponent },
      { path: '5', component: HomeTheTruthComponent },
      { path: '6', component: HomeTheTruthComponent },
    ]
  }

];

@NgModule({
  imports: [

    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })

  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }