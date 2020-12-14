import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rating} from '../model/rating';
import {User} from '../model/user';
import {Rendezvous} from '../model/Rendezvous';

@Component({
  selector: 'app-commentcomponent',
  templateUrl: './commentcomponent.component.html',
  styleUrls: ['./commentcomponent.component.css']
})
export class CommentcomponentComponent implements OnInit {
  @Input() rating: Rating;
  @Output() Notification = new EventEmitter<Rating>();
  @Output() Notification2 = new EventEmitter<Rating>();

  user:User;
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));

    console.log(this.rating.nomber);
  }
  update(){
    return this.Notification.emit(this.rating);
  }
   delete(){
    return this.Notification2.emit(this.rating);
   }
}
