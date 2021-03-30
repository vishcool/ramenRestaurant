import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'id/:id', loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule) },
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
,{path:'**',redirectTo:'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }