import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

//-------[teachin app.module how to use herodetail component]----
import { PatientDetailComponent } from './patient-detail.component';



@NgModule({
  imports:      [ 
                  BrowserModule , 
                  FormsModule,//<--- declaration --
                ], 
  declarations: [ 
                  AppComponent , 
                  PatientDetailComponent //<--- declaration ---
                ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
