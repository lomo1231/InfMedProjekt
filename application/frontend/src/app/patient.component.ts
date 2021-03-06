// -------------------------------------------------------------------------------
//                    WIDOK PACJENTA
// -------------------------------------------------------------------------------


import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Deserialize} from "cerialize";
import {Heartbeat} from "./heartbeat";
import {Patient} from "./patient"
declare var EventSource: any;

@Component({
  selector: 'temp2',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  source: any;
  heartbeat: Heartbeat;


  constructor(private router: Router) {
  }

  //mock data na potrzeby prezentacji

  Ja: Patient = {id: 1, fullname: 'Jakub Lubas', pulse: 75, accelerometer: false};

  ngOnInit() {
    console.log("onInit");
    this.getHeartbeat();
    this.getFall();
    this.showAlert =false;
  }

   updateHeartbeat = (msg:any) => {
    let obj = JSON.parse(msg.data);
    console.log(obj);
    let deserialized: Heartbeat = Deserialize(obj, Heartbeat);
    if (deserialized.value)
      this.heartbeat = Deserialize(obj, Heartbeat)
  };

   getHeartbeat() {
    this.source = new EventSource('http://localhost:8080/stream');
    console.log('getHeartbeat()');
    this.source.addEventListener('message', this.updateHeartbeat, false);
  }

  getFall() {
    this.source = new EventSource('http://localhost:8080/stream2');
    console.log('getFall()');
    this.source.addEventListener('message', this.updateAlert, false);
  }

  updateAlert = (msg:any) => {
    console.log(msg);
     this.showAlert = true
  };

//-------pop up z info---------

  placement: string;
  open = true;
  openClick1 = false;

  change(placement: string) {
    this.open = true;
    this.placement = placement;
  }


  //-----notifications----------
  showAlert = false;

  show() {
    this.showAlert = true;
  }

  onClose(reason: string) {
    console.log(`Alert closed by ${reason}`);
    this.showAlert = false;
  }

}



