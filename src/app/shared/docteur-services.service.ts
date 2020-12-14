import { Injectable } from '@angular/core';
import { Doctor } from '../model/doctors';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DocteurServicesService {

  constructor(private http:HttpClient) { }
  getDoctors(){
    return this.http.get<Doctor[]>('http://localhost:8089/MVC/Angular/retrieve-doctors');
    }
    getSingleDoctor(id){
      return this.http.get('http://localhost:8089/MVC/Angular/retrieve-single-doctor/' + id);
      }
      Serch(str){
    return this.http.get<Doctor[]>('http://localhost:8089/MVC/Angular/retrieve-recherche-doctor/' + str);
      }
}
