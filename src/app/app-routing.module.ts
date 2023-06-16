import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './layout/signup/signup.component';
import { DashboardLayoutComponent } from './layout/dashboard/dashboard-layout/dashboard-layout.component';
import { UserComponent } from './layout/pages/user/user.component';
import { TotalItemComponent } from './layout/pages/total-item/total-item.component';
import { PopularItemComponent } from './layout/pages/popular-item/popular-item.component';

const routes: Routes = [
  // {path:'users',redirectTo:'/users',pathMatch:'full'},
  { path: '', component: SignupComponent, pathMatch: 'full' },
  // { path: '**', redirectTo: '/', pathMatch: 'full' },
  {path:'users',component:UserComponent},
  {path:'dashboard',component:DashboardLayoutComponent},
  {path:'items',component:TotalItemComponent},
  {path:'popular-item',component:PopularItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
