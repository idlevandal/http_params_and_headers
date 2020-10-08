import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private commentService: CommentService) {}

  results$: Observable<any>;
  
  public ngOnInit(): void {
    console.log('On Init..');
    
    this.results$ = this.commentService.comment$;

    this.commentService.textComment$.subscribe(console.log);
  }
}
