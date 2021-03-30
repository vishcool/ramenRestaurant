import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatProgressSpinnerModule,
    MatGridListModule
  ]
})
export class HomeModule { }
