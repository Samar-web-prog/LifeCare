import { Component, OnInit } from '@angular/core';
import {RendezvousserviceService} from '../shared/rendezvousservice.service';
import {Rendezvous} from '../model/Rendezvous';
import {Doctor} from '../model/doctors';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DocteurServicesService} from '../shared/docteur-services.service';
import {User} from '../model/user';
@Component({
  selector: 'app-rendez-vous-list',
  templateUrl: './rendez-vous-list.component.html',
  styleUrls: ['./rendez-vous-list.component.css']
})
export class RendezVousListComponent implements OnInit {
  listRendezvous: Rendezvous[];
  doctor: Doctor;
  id: number;
   sub: any;
   p = 1;
   lname:string;
   user1: User;
   rendezvousform: FormGroup;
  constructor(private rendezvouss: RendezvousserviceService , private doctorService: DocteurServicesService, private route: ActivatedRoute, private doucteurService: DocteurServicesService) { }

  ngOnInit(): void {
    this.user1 = JSON.parse(sessionStorage.getItem('user'));
    this.sub = this.route.params.subscribe(params => {
      this.id = + params.id;
    });
    this.doctorService.getSingleDoctor(this.id).subscribe((data:Doctor)=>this.doctor=data);
    this.rendezvouss.getRendezvous(this.id).subscribe(
      (data: Rendezvous[]) => this.listRendezvous = data);
    this.rendezvousform = new FormGroup({
       nompatient: new FormControl('', [Validators.required]),
       prenompatient: new FormControl('', [Validators.required]),
      // description: new FormControl('', [Validators.required]),
       docteur: new FormControl(),
       date: new FormControl('',[Validators.required]),
      jour: new FormControl('',[Validators.required]),
      temp: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required,Validators.minLength(15)]),


     });
    console.log(this.listRendezvous);
    this.doucteurService.getSingleDoctor(this.id).subscribe((data: Doctor ) => this.doctor = data);

  }
  // tslint:disable-next-line:typedef
 get nompatient(){
    return this.rendezvousform.get('nompatient');
 }
 //
  // tslint:disable-next-line:typedef
  get prenompatient(){
    return this.rendezvousform.get('prenompatient');
  }

 // get description(){
   // return this.rendezvousform.get('description');
//  }
get date(){
    return this.rendezvousform.get('date');
}
get temp(){
    return this.rendezvousform.get('temp');
}
get jour(){
    return this.rendezvousform.get('jour');
}
get description(){
    return this.rendezvousform.get('description');
}
  submit(){
   alert('hello');
   let rendezVous = new Rendezvous();
   rendezVous = (this.rendezvousform.value as Rendezvous);
   rendezVous.id = Math.floor((Math.random() * 9999) +  1);
   rendezVous.docteur = this.doctor;
   rendezVous.user = this.user1;
   // rendezVous.user= this.user1.id;
   rendezVous.etatRendezvous = 'Encours' ;
   this.rendezvouss.postRendezvous(rendezVous).subscribe(() => this.listRendezvous = [rendezVous, ... this.listRendezvous]);
   console.log(this.rendezvouss.getRendezvousT());
   console.log(this.rendezvouss);
  this.rendezvousform.reset();
  }
  delete(id1){
    this.rendezvouss.deleteRendezVous(id1).subscribe(
      () => this.listRendezvous = this.listRendezvous.filter(rendezvous => rendezvous.id !== id1)
    );
  }
}
