import {Component, Input} from '@angular/core';
import {Patient} from './patient'

@Component({
  selector: 'patient-detail',
  template: `
   <div *ngIf = "patient">

    <h2>{{patient.fullname}} details:</h2>

      <!--<div><span>name: {{patient.fullname}}</span>-->
      <!--<div><span>id: {{patient.id}}</span></div> -->
      <table>
        <tr>
          <td align='right' class='dataSet1col'>Pulse:</td>
          <td>{{patient.pulse}}</td>
        </tr>
        <tr>
          <td align='right' class='dataSet1col'>Accelerometer:</td>
          <td>{{patient.accelerometer}}</td>
        </tr>
        <tr>
          <td align='right' class='dataSet1col'>Blood Oxygenation:</td>
          <td> {{patient.bloodOxygenation}}</td>
        </tr>
      </table>
  </div>`
})
export class PatientDetailComponent {

  @Input() patient:Patient; //---- input pfrom app.component (selected) ---
}
