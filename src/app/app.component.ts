import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'list-detail';

  constructor(private appointmentService: AppointmentService){}

  ngOnInit(){
    this.appointmentService.getAll().subscribe(res => {
      console.log(res);

    })
  }

}
