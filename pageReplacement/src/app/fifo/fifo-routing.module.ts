import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FifoComponent } from './fifo.component';

const routes: Routes = [{ path: '', component: FifoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FifoRoutingModule { }
