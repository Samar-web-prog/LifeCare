import { Component, OnInit } from '@angular/core';
import{Doctor} from '../model/doctors';
import {DocteurServicesService} from '../shared/docteur-services.service';
import {User} from '../model/user';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private doctorService:DocteurServicesService) { }
  listDoctor:Doctor[];
  log: String;
   user:User;
  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
    setTimeout(() => {
      console.log(localStorage.getItem('user'));
    }, 2000);

    this.log = sessionStorage.getItem('user');
    console.log(this.log);
    this.doctorService.getDoctors().subscribe(
     ( data:Doctor[])=>this.listDoctor=data
    );
    /*[{

      cin: 123456789,firstName: "Salam",lastName: "Labyadh",email: "salam@gmail.com",
      pwd: "salam123",datedeNaissance: "12/12/1955"

  },
  {

    cin: 123456789,firstName: "Salam",lastName: "Labyadh",email: "salam@gmail.com",
    pwd: "salam123",datedeNaissance: "12/12/1955"

},{

  cin: 123456789,firstName: "Salam",lastName: "Labyadh",email: "salam@gmail.com",
  pwd: "salam123",datedeNaissance: "12/12/1955"

},
]*/
  }

}
