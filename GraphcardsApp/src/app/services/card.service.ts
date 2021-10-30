import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CardList } from '../model/card-list.model';
import { CommentList } from '../model/comment-list.model';
import { Card } from '../model/card.model';
import { Comment } from '../model/comment.model';

const baseURL = 'http://localhost:3000/api/cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCards(params?:any): Observable<CardList> {
    let queryParams = {}

    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("page",params.page || "")
        .set("pageSize",params.pageSize || "")
      }
    }

    return this.http.get(baseURL, queryParams).pipe(map((data: any) => {
      return new CardList(data);
    }))
  }

  getComments(id: number): Observable<CommentList> {
    return this.http.get(`${baseURL}/${id}/comments`).pipe(map((data: any) => {
      return new CommentList(data);
    }))
  }

  postComment(a :Comment) :Observable<Comment>{
		return this.http.post(`${baseURL}/${a.cards}/comments`, a).pipe(map(
			data => { return new Comment(data);}
		));
  }

  updateCard(b :Card) :Observable<Card>{
		return this.http.put(`${baseURL}/${b._id}`, b).pipe(map(
			data => { return new Card(data);}
		));
  }

}
