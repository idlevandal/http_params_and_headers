import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }


  private httpHeaders = new HttpHeaders({
    Authorization: 'Bearer aa.bb.cc'
  });

  private httpParams = new HttpParams({
    fromObject: {
      postId: ['1', '2'],
      id: ['2', '9']
    }
  });
  // this will equate to
  // https://jsonplaceholder.typicode.com/comments?postId=1&postId=2&id=2&id=9

  // can also use set() **note can't pass arrays like you can in fromObject
  // private httpParams = new HttpParams()
  //     .set('postId', '3')
  //     .set('id', '2')

  comment$ = this.http.get('https://jsonplaceholder.typicode.com/comzzments', {
    params: this.httpParams,
    headers: this.httpHeaders
  });

  textComment$ = this.http.get('assets/comments.txt', {responseType: 'text'});
}
