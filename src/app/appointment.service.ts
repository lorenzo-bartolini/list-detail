import { Injectable } from '@angular/core';
import {of} from 'rxjs'
import { mock } from 'src/mock-appointments';
import { Appointment } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  getAll(){
    return of(mock)
  }

  getById(id: number){
    return of(mock.find(appointment => appointment.id === id))
  }
}
