import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pharmacy} from '../model/pharmacy';

@Injectable({
  providedIn: 'root'
})
export class PharmaciesServicesService {

  constructor(private http: HttpClient) { }

  getPharmacies(){
    return this.http.get<Pharmacy[]>('http://localhost:8089/MVC/Angular/retrieve-pharmacies');
  }
  getPharmacieByType(type:string){
    return this.http.get<Pharmacy[]>('http://localhost:8089/MVC/Angular/retrieve-Pharmacie-type/' + type);
  }
}
