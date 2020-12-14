import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserserviceService} from '../shared/userservice.service';
import {RendezvousserviceService} from '../shared/rendezvousservice.service';
import {Rendezvous} from '../model/Rendezvous';
import {DocteurServicesService} from '../shared/docteur-services.service';
import {Doctor} from '../model/doctors';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profilecomponent',
  templateUrl: './profilecomponent.component.html',
  styleUrls: ['./profilecomponent.component.css']
})
export class ProfilecomponentComponent implements OnInit {

  constructor(private userservice: UserserviceService, private rendezvouss: RendezvousserviceService , private doctorService: DocteurServicesService ,  private router: Router){ }
 p=1;
  u: User;
  doctor: Doctor;

  user1: User;
  listRendezvous: Rendezvous[];
   id1:number;
  id: number;
  ngOnInit(): void {
    this.u = JSON.parse(sessionStorage.getItem('user'));
    this.id = this.u.id;
    this.userservice.profile(this.id).subscribe((data: User) => this.user1 = data);
    this.rendezvouss.getRendezUer(this.id).subscribe((data: Rendezvous[]) => this.listRendezvous = data);



  }
  delete(rendezVous:Rendezvous){
    let r=this.listRendezvous.indexOf(rendezVous);
    let id1=this.listRendezvous[r].id;
    this.rendezvouss.deleteRendezVous(this.listRendezvous[r].id).subscribe(
      () => this.listRendezvous = this.listRendezvous.filter(rendezvous => rendezvous.id !== id1)
    );
  }
  deleteProfile(){

    this.userservice.delete(this.id).subscribe( d =>
    {
      console.log("wouuuh");
      sessionStorage.removeItem('user');
      this.router.navigate(['home']);
    });
   

  }


}
