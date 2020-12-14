import {Component, Input, OnInit} from '@angular/core';
import {Pharmacy} from '../model/pharmacy';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {

  constructor() { }
@Input() pharmacy: Pharmacy;
  ngOnInit(): void {
  }

}
