
import { Injectable } from '@angular/core';
import { PATIENTS } from './patient-list'
import { Patient } from './patient'

@Injectable()
export class DataService {


getPatients(): Promise<Patient[]> {
    return Promise.resolve(PATIENTS);
    
  }
}
