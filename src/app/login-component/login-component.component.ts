import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserserviceService} from '../shared/userservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private userservice: UserserviceService, private router: Router) {
  }

  user: User;
  user2: User;
  log: User;

  ngOnInit(): void {
    this.user = new User();
    this.userservice.login2(this.user.pwd, this.user.email).subscribe(u => {
      this.user2 = u;

    });
  }

  login() {

    this.userservice.login2(this.user.pwd, this.user.email).subscribe(u => {
        this.user2 = u;
        // JSON.parse(sessionStorage.getItem("user");  //recuperer
        //sessionStorage.setItem('user', JSON.stringify(u[0]));
        //console.log(sessionStorage.getItem('user'));
        //  this.log =JSON.parse(sessionStorage.getItem('user'));
        sessionStorage.setItem('user', JSON.stringify(u));
        setTimeout(() => {
          console.log(sessionStorage.getItem('user'))
        }, 2000);
      }
    );
    this.log=this.user;
    console.log(this.user);

    if (this.log) {
      this.router.navigate(['home']);

    } else {
      alert('erreur');
    }


  }
}

