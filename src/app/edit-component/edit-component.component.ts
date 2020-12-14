import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../shared/userservice.service';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  constructor(private userservice: UserserviceService , private router: Router) { }
  user: User;
  pass: string;
  user2: User;


  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));


  }
  update(){
    this.userservice.update(this.user).subscribe(
      d =>
      {
        console.log("wouuuh");
      });
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.router.navigate(['profil']);


  }

}
