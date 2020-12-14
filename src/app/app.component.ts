import {Component, OnInit} from '@angular/core';
import {User} from './model/user';
import {sequenceEqual} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProjettAngular';
  log: String;
  constructor(){}
  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
    setTimeout(() => {
      console.log(localStorage.getItem('user'));
    }, 2000);

    this.log = sessionStorage.getItem('user');
    console.log(this.log);
  }
logout(){
    sessionStorage.removeItem('user');
  }


}
