import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';
import {Rendezvous} from '../model/Rendezvous';

@Component({
  selector: 'app-rendezvoususer',
  templateUrl: './rendezvoususer.component.html',
  styleUrls: ['./rendezvoususer.component.css']
})
export class RendezvoususerComponent implements OnInit {

  constructor() { }
  @Input() rendezVous: Rendezvous;
  @Output() Notification = new EventEmitter<Rendezvous>();
  ngOnInit(): void {

  }
  NotifSend(){
    return this.Notification.emit(this.rendezVous);
  }

}
