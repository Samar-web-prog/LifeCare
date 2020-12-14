import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rendezvous} from '../model/Rendezvous';

@Injectable({
  providedIn: 'root'
})
export class RendezvousserviceService {

  constructor(private http: HttpClient) {}
  getRendezvousT(){
    return this.http.get<Rendezvous[]>('http://localhost:3000/Rendez-vous');
  }
  // tslint:disable-next-line:typedef
    getRendezvous(id){
      return this.http.get<Rendezvous[]>('http://localhost:8089/MVC/Angular/retrieve-rendezvous-doctor/' + id);
    }
  // tslint:disable-next-line:typedef
  postRendezvous(R: Rendezvous){
    return this.http.post('http://localhost:8089/MVC/Angular/add-rendez-vous', R);

  }
  // tslint:disable-next-line:typedef
  deleteRendezVous(id: number){
    return this.http.delete('http://localhost:8089/MVC/Angular/delete-rendez-vous/' + id);
  }
  getRendezUer(id:number){
    return this.http.get<Rendezvous[]>('http://localhost:8089/MVC/Angular/retrieve-rendezvous-user/' + id);
  }

}
