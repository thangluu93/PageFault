import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LruComponent } from './lru.component';

const routes: Routes = [{ path: '', component: LruComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LruRoutingModule { }
