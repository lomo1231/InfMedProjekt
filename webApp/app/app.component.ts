import { Component , OnInit  } from '@angular/core';

import { Patient } from './patient'

import { PatientService } from './patient.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [PatientService]
})




export class AppComponent implements OnInit  { 
  
  title = 'chwytliwy tytul aplikacji'; 
  patients : Patient[];
  selected :Patient;

  select(patient :Patient){
    this.selected = patient;
    console.log('select!')
  }

  constructor(private patientService: PatientService) { }
  getData(): void {
    this.patientService.getPatients().then(patients => this.patients = patients);
    console.log('constructor!')
    
  }

  ngOnInit(): void {
    this.getData();
    console.log('ngOnInit!')
  }

}

