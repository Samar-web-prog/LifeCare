import { Component, OnInit } from '@angular/core';
import {PharmaciesServicesService} from '../shared/pharmacies-services.service';
import {Pharmacy} from '../model/pharmacy';

@Component({
  selector: 'app-pharmacieslist',
  templateUrl: './pharmacieslist.component.html',
  styleUrls: ['./pharmacieslist.component.css']
})
export class PharmacieslistComponent implements OnInit {

  constructor(private pharmacieServices: PharmaciesServicesService ) { }
listPhramacies: Pharmacy[];
  ngOnInit(): void {
    this.pharmacieServices.getPharmacies().subscribe(
      (data: Pharmacy[])=>this.listPhramacies = data);
  }
  nuit() {
    this.listPhramacies = null;
    this.pharmacieServices.getPharmacieByType("nuit").subscribe(
      (data: Pharmacy[]) => this.listPhramacies = data);
  }
  date(){
    this.listPhramacies = null;
    this.pharmacieServices.getPharmacieByType("jour").subscribe(
      (data: Pharmacy[]) => this.listPhramacies = data);
  }
all(){
  this.listPhramacies = null;
  this.pharmacieServices.getPharmacies().subscribe(
    (data: Pharmacy[])=>this.listPhramacies = data);
}

}
