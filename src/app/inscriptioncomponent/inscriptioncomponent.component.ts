import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {User} from '../model/user';
import {UserserviceService} from '../shared/userservice.service';
@Component({
  selector: 'app-inscriptioncomponent',
  templateUrl: './inscriptioncomponent.component.html',
  styleUrls: ['./inscriptioncomponent.component.css']
})
export class InscriptioncomponentComponent implements OnInit {
  user: User;
  user2: User;
  constructor(private userservice:UserserviceService, private router:Router) { }

  ngOnInit(): void {
    this.user= new User();
  }
  add(){
    this.user.id=Math.floor((Math.random() * 9999) +  1);
    this.userservice.postUser(this.user).subscribe(u => {

        // JSON.parse(sessionStorage.getItem("user");  //recuperer
      localStorage.setItem('user', JSON.stringify(u));
      sessionStorage.setItem('user', JSON.stringify(u));
      setTimeout(() => {
        console.log(sessionStorage.getItem('user'))
      }, 2000);
    
  
      setTimeout( () => {console.log(localStorage.getItem('user'))}, 2000);
      }
    );
    console.log(this.user);

    this.router.navigate(['home']);
  }

}
