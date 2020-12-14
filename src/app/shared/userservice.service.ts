import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  postUser(u: User){
    return this.http.post('http://localhost:8089/MVC/Angular/add-user' , u);
  }
  loGin(u: User){
    // return this.http.get('http://localhost:3000/user?email=' + u.email + '&pwd=' + u.pwd);
    return this.http.get('http://localhost:8089/MVC/Angular/retrieve-coonected-user/' + u.email + '/' + u.pwd);
  }
  login2(p: String, e: string){
   // return this.http.get<User>('http://localhost:3000/user?email=' + e + '&pwd=' + p);
    return this.http.get<User>('http://localhost:8089/MVC/Angular/retrieve-coonected-user/' + e + '/' + p);
    // ;
  }
  // For the profile
  profile(id: number){
    return this.http.get('http://localhost:3000/user/' + id);
  }
  // For the Update Of User
  update(u: User){
    return this.http.put('http://localhost:8089/MVC/Angular/modify-user/', u);
  }
  delete(id: number){
    return this.http.delete('http://localhost:8089/MVC/Angular/delete-user/' + id);
  }
}
