import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptimalComponent } from './optimal.component';

const routes: Routes = [{ path: '', component: OptimalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptimalRoutingModule { }
