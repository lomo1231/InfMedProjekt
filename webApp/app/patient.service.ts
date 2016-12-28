import { Injectable } from '@angular/core'
import { PATIENTS } from './mock-data'
import { Patient } from './patient'

@Injectable() export class PatientService {

 getPatients(): Promise<Patient[]> {
    return Promise.resolve(PATIENTS);
    
  }

}