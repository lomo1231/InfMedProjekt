

// -------------------------------------------------------------------------------
//                    WIDOK LEKARZA
// -------------------------------------------------------------------------------


import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { DataService }  from './data.service';

import {Patient} from './patient'

@Component({
  selector: 'my-temp1',
  templateUrl: './temp1.component.html',
  styleUrls: [ './temp1.component.css' ]

})

export class Temp1Component  implements OnInit {

  constructor(private dataService: DataService,
     private route: ActivatedRoute, private location: Location)
   {}


   //-------------------pobieranie listy pacjentow z data service-------------
   patients :Patient[];

   ngOnInit(): void {
    this.dataService.getPatients()
      .then(patients => this.patients = patients);}

    //-------------------wybieranie z listy pacj-------------
   selected :Patient;

   select(patient: Patient) { this.selected = patient;}





}
