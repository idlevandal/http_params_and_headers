import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private http: HttpClient) { }

  startmeup() {
    return this.http.get('/assets/comments.txt', {responseType: 'text'}).toPromise().then(async x => 
      {
        console.log(x);
        await new Promise(resolve => setTimeout(resolve, 4000));
        console.log('Configuration loaded');
      });
  }
}
