import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { Temp1Component } from './doctor.component';
import { PatientComponent } from './patient.component';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';

import {NglModule} from 'ng-lightning/ng-lightning';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NglModule.forRoot()
   ],

  declarations: [
    AppComponent,
    DashboardComponent,
    Temp1Component,
    PatientComponent
  ],

  providers: [DataService],

  bootstrap: [AppComponent]

})

export class AppModule { }
