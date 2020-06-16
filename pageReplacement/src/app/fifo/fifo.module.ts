import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FifoRoutingModule } from './fifo-routing.module';
import { FifoComponent } from './fifo.component';
import { HomePageModule } from '../home-page/home-page.module';


@NgModule({
  declarations: [FifoComponent],
  imports: [
    CommonModule,
    FifoRoutingModule,
    HomePageModule
  ]
})
export class FifoModule { }
