import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProactiveServiceRoutingModule } from './proactive-service-routing.module';
import { HomeProactiveServiceComponent } from './children/home-proactive-service/home-proactive-service.component';

@NgModule({
  imports: [
    CommonModule,
    ProactiveServiceRoutingModule
  ],
  declarations: [HomeProactiveServiceComponent]
})
export class ProactiveServiceModule { }
