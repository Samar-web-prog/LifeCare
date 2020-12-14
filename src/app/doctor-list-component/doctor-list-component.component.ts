import { Component, OnInit } from '@angular/core';
import {Doctor} from '../model/doctors';

import {DocteurServicesService} from '../shared/docteur-services.service';

@Component({
  selector: 'app-doctor-list-component',
  templateUrl: './doctor-list-component.component.html',
  styleUrls: ['./doctor-list-component.component.css']
})
export class DoctorListComponentComponent implements OnInit {
  listDoctor: Doctor[];
  p = 1;
  chaine: string;
  constructor(private doctorService: DocteurServicesService) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(
      ( data: Doctor[]) => this.listDoctor = data
     );
    console.log(this.listDoctor);
  }
  affiche(){
    this.listDoctor = null;
    this.doctorService.Serch(this.chaine).subscribe(
  (data: Doctor[]) => this.listDoctor = data

);
    console.log("ok");
  }


}
