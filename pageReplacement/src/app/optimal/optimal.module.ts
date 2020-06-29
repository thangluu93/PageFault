import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptimalRoutingModule } from './optimal-routing.module';
import { OptimalComponent } from './optimal.component';


@NgModule({
  declarations: [OptimalComponent],
  imports: [
    CommonModule,
    OptimalRoutingModule
  ]
})
export class OptimalModule { }
