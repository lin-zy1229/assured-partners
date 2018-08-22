import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { LogoAreaComponent } from './logo-area/logo-area.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SubmenuAreaComponent } from './submenu-area/submenu-area.component';
import { HeaderAreaComponent } from './header-area/header-area.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { AppRoutingModule } from './/app-routing.module';
import { BlueprintProcessComponent } from './components/blueprint-process/blueprint-process.component';
import { LeverageRelationComponent } from './components/leverage-relation/leverage-relation.component';
import { MappingItOutComponent } from './components/mapping-it-out/mapping-it-out.component';
import { ProactiveServiceComponent } from './components/proactive-service/proactive-service.component';
import { ProspectingComponent } from './components/prospecting/prospecting.component';
import { TheTruthComponent } from './components/the-truth/the-truth.component';
import { BlueprintProcessSubmenuComponent } from './components/blueprint-process/blueprint-process-submenu/blueprint-process-submenu.component';
import { LeverageRelationSubmenuComponent } from './components/leverage-relation/leverage-relation-submenu/leverage-relation-submenu.component';
import { MappingItOutSubmenuComponent } from './components/mapping-it-out/mapping-it-out-submenu/mapping-it-out-submenu.component';
import { ProactiveServiceSubmenuComponent } from './components/proactive-service/proactive-service-submenu/proactive-service-submenu.component';
import { ProspectingSubmenuComponent } from './components/prospecting/prospecting-submenu/prospecting-submenu.component';
import { TheTruthSubmenuComponent } from './components/the-truth/the-truth-submenu/the-truth-submenu.component';

// import { BlueprintAndTheWedgeComponent } from './components/blueprint-process/children/blueprint-and-the-wedge/blueprint-and-the-wedge.component';
// import { TheBlueprintComponent } from './components/blueprint-process/children/the-blueprint/the-blueprint.component';
// import { HomeOfTheBlueprintProcessComponent } from './components/blueprint-process/children/home-of-the-blueprint-process/home-of-the-blueprint-process.component';


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
import { OutcomesComponent } from './components/blueprint-process/children/outcomes/outcomes.component';
import { OutcomesPCComponent } from './components/blueprint-process/children/outcomes-pc/outcomes-pc.component';
import { OutcomesEBComponent } from './components/blueprint-process/children/outcomes-eb/outcomes-eb.component';
import { OutcomesLearningFromTheProspectComponent } from './components/blueprint-process/children/outcomes-learning-from-the-prospect/outcomes-learning-from-the-prospect.component';
import { Phase1AndPhase2Component } from './components/blueprint-process/children/phase1-and-phase2/phase1-and-phase2.component';
import { TheScorecardComponent } from './components/blueprint-process/children/the-scorecard/the-scorecard.component';
import { APowerfulDiscoverySessionComponent } from './components/blueprint-process/children/apowerful-discovery-session/apowerful-discovery-session.component';
import { ScorecardDiscussionPointsComponent } from './components/blueprint-process/children/scorecard-discussion-points/scorecard-discussion-points.component';
import { TheBlueprintKeyDiscoveryFindingsComponent } from './components/blueprint-process/children/the-blueprint-key-discovery-findings/the-blueprint-key-discovery-findings.component';
import { Outcome1Component } from './components/blueprint-process/children/outcome1/outcome1.component';
import { DrivingThePointHomeComponent } from './components/blueprint-process/children/driving-the-point-home/driving-the-point-home.component';
import { HomeOfTheBlueprintProcessComponent } from './components/blueprint-process/children/home-of-the-blueprint-process/home-of-the-blueprint-process.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoAreaComponent,
    MenuBarComponent,
    SubmenuAreaComponent,
    HeaderAreaComponent,
    FooterAreaComponent,
    MainAreaComponent,
    //
    // Main Menu
    //
    BlueprintProcessComponent,
    LeverageRelationComponent,
    MappingItOutComponent,
    ProactiveServiceComponent,
    ProspectingComponent,
    TheTruthComponent,
    //
    // Submenus
    //
    BlueprintProcessSubmenuComponent,
    LeverageRelationSubmenuComponent,
    MappingItOutSubmenuComponent,
    ProactiveServiceSubmenuComponent,
    ProspectingSubmenuComponent,
    TheTruthSubmenuComponent,
    //
    // Blueprint Process
    //
    BlueprintAndTheWedgeComponent, TheBlueprintComponent, TheBPProcessComponent, TheBPPhilosophyComponent, TheChangeFormulaComponent, WhatMakesYouDifferentComponent, TwoPitfallsToOvercomeComponent, TheVaccumnCleanerSalespersonComponent, TheAdvisorConsultantComponent, TheInitialMeetingComponent, TheInitialMeetingTheOpenComponent, OutcomesComponent, OutcomesPCComponent, OutcomesEBComponent, OutcomesLearningFromTheProspectComponent, Phase1AndPhase2Component, TheScorecardComponent, APowerfulDiscoverySessionComponent, ScorecardDiscussionPointsComponent, TheBlueprintKeyDiscoveryFindingsComponent, Outcome1Component, DrivingThePointHomeComponent, HomeOfTheBlueprintProcessComponent,
    
  ],
  imports: [
    AngularFontAwesomeModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
