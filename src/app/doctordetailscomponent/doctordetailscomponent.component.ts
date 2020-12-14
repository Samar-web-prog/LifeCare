import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../model/doctors';
import { DocteurServicesService } from '../shared/docteur-services.service';
import {User} from '../model/user';
import {CommentserviceService} from '../shared/commentservice.service';
import {Rating} from '../model/rating';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-doctordetailscomponent',
  templateUrl: './doctordetailscomponent.component.html',
  styleUrls: ['./doctordetailscomponent.component.css']
})
export class DoctordetailscomponentComponent implements OnInit {
  doctor:Doctor;
  id: number;
  private sub:any;
  img:string;
  user:User;
  interface:boolean;
  interface2:boolean;
  rating: Rating[];
  ratingForm: FormGroup;
  rat:Rating;
  i1:number;
  constructor(private doctorService: DocteurServicesService, private route: ActivatedRoute ,private comment:CommentserviceService) { }

  ngOnInit(): void {

    this.interface = false;
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.img = 'assets/images/testi_02.png';

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.doctorService.getSingleDoctor(this.id).subscribe((data: Doctor) => this.doctor = data);


    //console.log(this.doctor);
    this.ratingForm = new FormGroup({
      comments: new FormControl(),
      nomber: new FormControl(),
    });
this.interface2=false;
  }
  get comments(){
    return this.ratingForm.get('comments');
  }
  get nomber(){
    return this.ratingForm.get('nomber');
  }

    show(){
    this.interface=true;
    this.comment.getCommentDoctors(this.id).subscribe((data: Rating[]) => this.rating = data);


  }
deletecomment(rat:Rating){
let i =this.rating.indexOf(rat);
let id1=this.rating[i].id;
    this.comment.deletComent(this.rating[i].id).subscribe(
      ()=>this.rating=this.rating.filter(rating => rating.id !==id1)
    )
}
updateComment(){
this.interface2=true;
}
submit(){
    let rating1 = new Rating();
    rating1 = (this.ratingForm.value as Rating);
    rating1.user = this.user;
    rating1.pharmacie = null;
    rating1.doctor = this.doctor;
    this.comment.addcomment(rating1).subscribe(()=>this.rating =[rating1,... this.rating]);
    this.ratingForm.reset();
}
  updatee(rated:Rating){
  let i =this.rating.indexOf(rated);
  console.log(i);
    this.comment.updateComment(this.rating[i]).subscribe();
    console.log(this.rating[i]);


}
}
