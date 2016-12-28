import { Component, Input } from '@angular/core';
import { Patient } from './patient'

@Component({
  selector: 'patient-detail',
  template: `
   <div *ngIf = "patient">
   
    <h2>{{patient.fullname}} details:</h2>

      <div><span>name: {{patient.fullname}}</span>
      <div><span>id: {{patient.id}}</span></div> 
      <div><span>Pulse: {{patient.pulse}}</span></div>
      <div><span>Accelerometer: {{patient.accelerometer}}</span></div>
      <div><span>Blood Oxygenation: {{patient.bloodOxygenation}}</span></div>

  </div>`
})
export class PatientDetailComponent {

    @Input() patient :Patient; //---- input pfrom app.component (selected) ---
}