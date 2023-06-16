import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardSidebarComponent } from './layout/dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { SignupComponent } from './layout/signup/signup.component';
import { DashboardLayoutComponent } from './layout/dashboard/dashboard-layout/dashboard-layout.component';
import { UserComponent } from './layout/pages/user/user.component';
import { TotalItemComponent } from './layout/pages/total-item/total-item.component';
import { PopularItemComponent } from './layout/pages/popular-item/popular-item.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardSidebarComponent,
    DashboardLayoutComponent,
    UserComponent,
    TotalItemComponent,
    PopularItemComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
