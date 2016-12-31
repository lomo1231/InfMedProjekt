import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Temp1Component } from './doctor/temp1.component';
import { Temp2Component } from './patient/temp2.component';
import { DataService } from './data_service/data.service';

import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
   ],

  declarations: [
    AppComponent,
    DashboardComponent,
    Temp1Component,
    Temp2Component
  ],

  providers: [DataService],

  bootstrap: [AppComponent]

})

export class AppModule { }
