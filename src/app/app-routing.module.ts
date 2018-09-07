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
import { CenterOfInfluenceWorksheetSubitemComponent } from './components/leverage-relation/children/center-of-influence-worksheet-subitem/center-of-influence-worksheet-subitem.component';
import { AReferralOrAnIntroductionSubitemComponent } from './components/leverage-relation/children/areferral-or-an-introduction-subitem/areferral-or-an-introduction-subitem.component';
import { WhatWouldYouSayAboutUsSubitemComponent } from './components/leverage-relation/children/what-would-you-say-about-us-subitem/what-would-you-say-about-us-subitem.component';
import { WriteItOutSubitemComponent } from './components/leverage-relation/children/write-it-out-subitem/write-it-out-subitem.component';
import { DontAlienateYourSourceSubitemComponent } from './components/leverage-relation/children/dont-alienate-your-source-subitem/dont-alienate-your-source-subitem.component';
import { MyGoalsSubitemComponent } from './components/leverage-relation/children/my-goals-subitem/my-goals-subitem.component';
import { RevenueTableSubitemComponent } from './components/leverage-relation/children/revenue-table-subitem/revenue-table-subitem.component';
import { TheFiveCategoriesOfSalesPeopleSubitemComponent } from './components/proactive-service/children/the-five-categories-of-sales-people-subitem/the-five-categories-of-sales-people-subitem.component';
import { TheChallengerSubitemComponent } from './components/proactive-service/children/the-challenger-subitem/the-challenger-subitem.component';
import { RulesOfProspectEngagementSubitemComponent } from './components/proactive-service/children/rules-of-prospect-engagement-subitem/rules-of-prospect-engagement-subitem.component';
import { ObjectiveResultSubitemComponent } from './components/proactive-service/children/objective-result-subitem/objective-result-subitem.component';
import { PriceCoverageServiceSubitemComponent } from './components/proactive-service/children/price-coverage-service-subitem/price-coverage-service-subitem.component';
import { DifferentiationBeUniqueSubitemComponent } from './components/proactive-service/children/differentiation-be-unique-subitem/differentiation-be-unique-subitem.component';
import { DefiningProactiveServiceSubitemComponent } from './components/proactive-service/children/defining-proactive-service-subitem/defining-proactive-service-subitem.component';
import { LadderOfAbstractionSubitemComponent } from './components/proactive-service/children/ladder-of-abstraction-subitem/ladder-of-abstraction-subitem.component';
import { A3DefiningProactiveServiceSubitemComponent } from './components/proactive-service/children/a3-defining-proactive-service-subitem/a3-defining-proactive-service-subitem.component';
import { A3ClaimsReviewProcessSubitemComponent } from './components/proactive-service/children/a3-claims-review-process-subitem/a3-claims-review-process-subitem.component';
import { ArticulationOfThe3AProcessSubitemComponent } from './components/proactive-service/children/articulation-of-the3-aprocess-subitem/articulation-of-the3-aprocess-subitem.component';
import { LetsTryOneOfYourOwnSubitemComponent } from './components/proactive-service/children/lets-try-one-of-your-own-subitem/lets-try-one-of-your-own-subitem.component';
import { TheArticulationWedgeStyleSubitemComponent } from './components/proactive-service/children/the-articulation-wedge-style-subitem/the-articulation-wedge-style-subitem.component';
import { TheArticulationBlueprintStyleSubitemComponent } from './components/proactive-service/children/the-articulation-blueprint-style-subitem/the-articulation-blueprint-style-subitem.component';
import { ProspectingWhereToBeginSubitemComponent } from './components/prospecting/children/prospecting-where-to-begin-subitem/prospecting-where-to-begin-subitem.component';
import { UsingSalesNavigatorSubitemComponent } from './components/prospecting/children/using-sales-navigator-subitem/using-sales-navigator-subitem.component';
import { SearchSpotlightsSubitemComponent } from './components/prospecting/children/search-spotlights-subitem/search-spotlights-subitem.component';
import { MultiThreadingSubitemComponent } from './components/prospecting/children/multi-threading-subitem/multi-threading-subitem.component';
import { WhyPostOnLinkedInSubitemComponent } from './components/prospecting/children/why-post-on-linked-in-subitem/why-post-on-linked-in-subitem.component';
import { ProspectingProcessToFollowSubitemComponent } from './components/prospecting/children/prospecting-process-to-follow-subitem/prospecting-process-to-follow-subitem.component';
import { TouchesWeek12BeginningSubitemComponent } from './components/prospecting/children/touches-week12-beginning-subitem/touches-week12-beginning-subitem.component';
import { TouchesWeek3GettingMeetingSubitemComponent } from './components/prospecting/children/touches-week3-getting-meeting-subitem/touches-week3-getting-meeting-subitem.component';
import { FaceToFaceColdCallingSubitemComponent } from './components/prospecting/children/face-to-face-cold-calling-subitem/face-to-face-cold-calling-subitem.component';
import { TouchesWeek4OrganizingSubitemComponent } from './components/prospecting/children/touches-week4-organizing-subitem/touches-week4-organizing-subitem.component';
import { TouchesBeginningYourRelationshipCampaignSubitemComponent } from './components/prospecting/children/touches-beginning-your-relationship-campaign-subitem/touches-beginning-your-relationship-campaign-subitem.component';
import { CenterOfInfluenceWorksheetSubitemComponent as CenterOfInfluenceWorksheetSubitemProspectingComponent} from './components/prospecting/children/center-of-influence-worksheet-subitem/center-of-influence-worksheet-subitem.component';
import { AReferralOrAnIntroductionSubitemComponent as AReferralOrAnIntroductionSubitemProspectingComponent} from './components/prospecting/children/areferral-or-an-introduction-subitem/areferral-or-an-introduction-subitem.component';
import { WhatWouldYouSayAboutUsSubitemComponent as WhatWouldYouSayAboutUsSubitemProspectingComponent} from './components/prospecting/children/what-would-you-say-about-us-subitem/what-would-you-say-about-us-subitem.component';
import { WriteItOutSubitemComponent as WriteItOutSubitemProspectingComponent} from './components/prospecting/children/write-it-out-subitem/write-it-out-subitem.component';
import { DontAlienateYourSourceSubitemComponent as DontAlienateYourSourceSubitemProspectingComponent} from './components/prospecting/children/dont-alienate-your-source-subitem/dont-alienate-your-source-subitem.component';
import { MyGoalsSubitemComponent as MyGoalsSubitemProspectingComponent} from './components/prospecting/children/my-goals-subitem/my-goals-subitem.component';
import { SettingTheStageSubitemComponent } from './components/the-truth/children/setting-the-stage-subitem/setting-the-stage-subitem.component';
import { TheIntellectualResponseSubitemComponent } from './components/the-truth/children/the-intellectual-response-subitem/the-intellectual-response-subitem.component';
import { TheRehearsalStepsSubitemComponent } from './components/the-truth/children/the-rehearsal-steps-subitem/the-rehearsal-steps-subitem.component';
import { DilemmaSecondTransitionSubitemComponent } from './components/the-truth/children/dilemma-second-transition-subitem/dilemma-second-transition-subitem.component';
import { TheCrystalBallSubitemComponent } from './components/the-truth/children/the-crystal-ball-subitem/the-crystal-ball-subitem.component';
import { WrappingUpSubitemComponent } from './components/the-truth/children/wrapping-up-subitem/wrapping-up-subitem.component';
import { PlainLanguageIsAllAboutTrustSubitemComponent } from './components/proactive-service/children/plain-language-is-all-about-trust-subitem/plain-language-is-all-about-trust-subitem.component';


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
      { path: '1', component: CenterOfInfluenceWorksheetSubitemComponent },
      { path: '2', component: AReferralOrAnIntroductionSubitemComponent },
      { path: '3', component: RevenueTableSubitemComponent },
      { path: '4', component: WhatWouldYouSayAboutUsSubitemComponent },
      { path: '5', component: WriteItOutSubitemComponent },
      { path: '6', component: DontAlienateYourSourceSubitemComponent },
      { path: '7', component: MyGoalsSubitemComponent },
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
      { path: '1', component: TheFiveCategoriesOfSalesPeopleSubitemComponent },
      { path: '2', component: TheChallengerSubitemComponent },
      { path: '3', component: RulesOfProspectEngagementSubitemComponent },
      { path: '4', component: ObjectiveResultSubitemComponent },
      { path: '5', component: PriceCoverageServiceSubitemComponent },
      { path: '6', component: DifferentiationBeUniqueSubitemComponent },
      { path: '7', component: DefiningProactiveServiceSubitemComponent },
      { path: '8', component: LadderOfAbstractionSubitemComponent },
      { path: '9', component: PlainLanguageIsAllAboutTrustSubitemComponent },
      { path: '10', component: A3DefiningProactiveServiceSubitemComponent },
      { path: '11', component: A3ClaimsReviewProcessSubitemComponent },
      { path: '12', component: ArticulationOfThe3AProcessSubitemComponent },
      { path: '13', component: LetsTryOneOfYourOwnSubitemComponent },
      { path: '14', component: TheArticulationWedgeStyleSubitemComponent },
      { path: '15', component: TheArticulationBlueprintStyleSubitemComponent },
    ]
  },
  {
    path: 'Prospecting', component: ProspectingComponent,
    children: [
      { path: '', component: HomeProspectingComponent },
      { path: '1', component: ProspectingWhereToBeginSubitemComponent },
      { path: '2', component: UsingSalesNavigatorSubitemComponent },
      { path: '3', component: SearchSpotlightsSubitemComponent },
      { path: '4', component: MultiThreadingSubitemComponent },
      { path: '5', component: WhyPostOnLinkedInSubitemComponent },
      { path: '6', component: ProspectingProcessToFollowSubitemComponent },
      { path: '7', component: TouchesWeek12BeginningSubitemComponent },
      { path: '8', component: TouchesWeek3GettingMeetingSubitemComponent },
      { path: '9', component: FaceToFaceColdCallingSubitemComponent },
      { path: '10', component: TouchesWeek4OrganizingSubitemComponent },
      { path: '11', component: TouchesBeginningYourRelationshipCampaignSubitemComponent },
      { path: '12', component: CenterOfInfluenceWorksheetSubitemProspectingComponent },
      { path: '13', component: AReferralOrAnIntroductionSubitemProspectingComponent },
      { path: '14', component: WhatWouldYouSayAboutUsSubitemProspectingComponent },
      { path: '15', component: WriteItOutSubitemProspectingComponent },
      { path: '16', component: DontAlienateYourSourceSubitemProspectingComponent },
      { path: '17', component: MyGoalsSubitemProspectingComponent },
    ]
  },
  {
    path: 'The Truth', component: TheTruthComponent,
    children: [
      { path: '', component: HomeTheTruthComponent },
      { path: '1', component: SettingTheStageSubitemComponent },
      { path: '2', component: TheIntellectualResponseSubitemComponent },
      { path: '3', component: TheRehearsalStepsSubitemComponent },
      { path: '4', component: DilemmaSecondTransitionSubitemComponent },
      { path: '5', component: TheCrystalBallSubitemComponent },
      { path: '6', component: WrappingUpSubitemComponent },
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