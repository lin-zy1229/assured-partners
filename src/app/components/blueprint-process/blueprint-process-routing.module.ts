import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlueprintAndTheWedgeComponent } from './children/blueprint-and-the-wedge/blueprint-and-the-wedge.component';
import { TheBlueprintComponent } from './children/the-blueprint/the-blueprint.component';

const routes: Routes = [
  
  // { path: '1/1', component: BlueprintAndTheWedgeComponent },
  // { path: '1/2', component: TheBlueprintComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlueprintProcessRoutingModule { }
