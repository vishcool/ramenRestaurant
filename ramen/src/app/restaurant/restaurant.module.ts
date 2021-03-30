import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [RestaurantComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    MatProgressSpinnerModule,
    MatGridListModule
  ]
})
export class RestaurantModule { }
