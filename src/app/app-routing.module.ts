import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ChartpageComponent } from './chartpage/chartpage.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    component:LoginPageComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'chartpage',
    component:ChartpageComponent
  },
  {
    path: '**',
    component: ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
