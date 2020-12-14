import { Component, OnInit ,Input } from '@angular/core';
import { Doctor } from '../model/doctors';

@Component({
  selector: 'app-doctorcomponent',
  templateUrl: './doctorcomponent.component.html',
  styleUrls: ['./doctorcomponent.component.css']
})
export class DoctorcomponentComponent implements OnInit {

  constructor() { }
  @Input() doctor:Doctor;

  ngOnInit(): void {
  }

}
