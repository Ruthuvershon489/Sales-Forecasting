import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule, LineSeriesService, CategoryService } from '@syncfusion/ej2-angular-charts';
import * as CanvasJSAngularChart from 'C:/Users/91938/OneDrive/Desktop/Ruthu KAAR/new/sales/src/assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginPageComponent } from './login-page/login-page.component';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartpageComponent } from './chartpage/chartpage.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorpageComponent,
    LoginPageComponent,
    ChartpageComponent,
    CanvasJSChart
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,

  ],
  providers: [LineSeriesService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }