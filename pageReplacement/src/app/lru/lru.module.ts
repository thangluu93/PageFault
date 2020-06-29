import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LruRoutingModule } from './lru-routing.module';
import { LruComponent } from './lru.component';


@NgModule({
  declarations: [LruComponent],
  imports: [
    CommonModule,
    LruRoutingModule
  ]
})
export class LruModule { }
