import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProactiveServiceRoutingModule } from './proactive-service-routing.module';
import { HomeProactiveServiceComponent } from './children/home-proactive-service/home-proactive-service.component';
import { TheFiveCategoriesOfSalesPeopleSubitemComponent } from './children/the-five-categories-of-sales-people-subitem/the-five-categories-of-sales-people-subitem.component';
import { TheChallengerSubitemComponent } from './children/the-challenger-subitem/the-challenger-subitem.component';
import { RulesOfProspectEngagementSubitemComponent } from './children/rules-of-prospect-engagement-subitem/rules-of-prospect-engagement-subitem.component';
import { ObjectiveResultSubitemComponent } from './children/objective-result-subitem/objective-result-subitem.component';
import { PriceCoverageServiceSubitemComponent } from './children/price-coverage-service-subitem/price-coverage-service-subitem.component';
import { DifferentiationBeUniqueSubitemComponent } from './children/differentiation-be-unique-subitem/differentiation-be-unique-subitem.component';
import { DefiningProactiveServiceSubitemComponent } from './children/defining-proactive-service-subitem/defining-proactive-service-subitem.component';
import { LadderOfAbstractionSubitemComponent } from './children/ladder-of-abstraction-subitem/ladder-of-abstraction-subitem.component';
import { A3DefiningProactiveServiceSubitemComponent } from './children/a3-defining-proactive-service-subitem/a3-defining-proactive-service-subitem.component';
import { A3ClaimsReviewProcessSubitemComponent } from './children/a3-claims-review-process-subitem/a3-claims-review-process-subitem.component';
import { ArticulationOfThe3AProcessSubitemComponent } from './children/articulation-of-the3-aprocess-subitem/articulation-of-the3-aprocess-subitem.component';
import { LetsTryOneOfYourOwnSubitemComponent } from './children/lets-try-one-of-your-own-subitem/lets-try-one-of-your-own-subitem.component';
import { TheArticulationWedgeStyleSubitemComponent } from './children/the-articulation-wedge-style-subitem/the-articulation-wedge-style-subitem.component';
import { TheArticulationBlueprintStyleSubitemComponent } from './children/the-articulation-blueprint-style-subitem/the-articulation-blueprint-style-subitem.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatStepperModule, MatInputModule, MatFormFieldModule, MatTableModule } from '@angular/material';
import { PlainLanguageIsAllAboutTrustSubitemComponent } from './children/plain-language-is-all-about-trust-subitem/plain-language-is-all-about-trust-subitem.component';

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
];

@NgModule({
    imports: [
        modules,
        CommonModule,
        ProactiveServiceRoutingModule
    ],
    exports: [
        modules,
    ],
    declarations: [HomeProactiveServiceComponent, TheFiveCategoriesOfSalesPeopleSubitemComponent, TheChallengerSubitemComponent, RulesOfProspectEngagementSubitemComponent, ObjectiveResultSubitemComponent, PriceCoverageServiceSubitemComponent, DifferentiationBeUniqueSubitemComponent, DefiningProactiveServiceSubitemComponent, LadderOfAbstractionSubitemComponent, A3DefiningProactiveServiceSubitemComponent, A3ClaimsReviewProcessSubitemComponent, ArticulationOfThe3AProcessSubitemComponent, LetsTryOneOfYourOwnSubitemComponent, TheArticulationWedgeStyleSubitemComponent, TheArticulationBlueprintStyleSubitemComponent, PlainLanguageIsAllAboutTrustSubitemComponent]
})
export class ProactiveServiceModule { }
