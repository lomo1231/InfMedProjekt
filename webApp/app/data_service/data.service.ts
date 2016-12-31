
import { Injectable } from '@angular/core';
import { PATIENTS } from '../patient_model/patient-list'
import { Patient } from '../patient_model/patient'

@Injectable()
export class DataService {


getPatients(): Promise<Patient[]> {
    return Promise.resolve(PATIENTS);
    
  }
}
