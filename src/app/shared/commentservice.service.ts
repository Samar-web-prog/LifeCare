import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rating} from '../model/rating';

@Injectable({
  providedIn: 'root'
})
export class CommentserviceService {

  constructor(private http: HttpClient) { }

  addcomment(r:Rating){
    return this.http.post('http://localhost:8089/MVC/Angular/add-rating/',r);
}

    getCommentDoctors(id){
    return this.http.get<Rating[]>('http://localhost:8089/MVC/Angular/retrieve-rating-doctor/' + id);
  }
  getCommentPharmacies(id){

    return this.http.get<Rating[]>('http://localhost:8089/MVC/Angular/retrieve-rating-pharmacies/' + id);
  }
  deletComent(id){
    return this.http.delete('http://localhost:8089/MVC/Angular/delete-comments/' + id);
  }

  updateComment(c:Rating){
    return this.http.put('http://localhost:8089/MVC/Angular/modify-rating/', c);
  }


}
