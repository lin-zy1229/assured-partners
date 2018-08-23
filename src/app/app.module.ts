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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BlueprintProcessModule } from './components/blueprint-process/blueprint-process.module';
import { MappingItOutModule } from './components/mapping-it-out/mapping-it-out.module';
import { LeverageRelationModule } from './components/leverage-relation/leverage-relation.module';
import { ProactiveServiceModule } from './components/proactive-service/proactive-service.module';
import { ProspectingModule } from './components/prospecting/prospecting.module';
import { TheTruthModule } from './components/the-truth/the-truth.module';
import { MatStepperModule } from '@angular/material';

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
  ],
  imports: [
    AngularFontAwesomeModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    BlueprintProcessModule,
    LeverageRelationModule,
    MappingItOutModule,
    ProactiveServiceModule,
    ProspectingModule,
    TheTruthModule,

  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
