import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HomePageRoutingModule,
    MatInputModule,
    MatRadioModule,
  ]
})
export class HomePageModule { }
