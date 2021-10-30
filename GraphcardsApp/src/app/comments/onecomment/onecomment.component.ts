import { Component, Input, OnInit } from '@angular/core';
import { CommentList } from 'src/app/model/comment-list.model';

@Component({
  selector: 'app-onecomment',
  templateUrl: './onecomment.component.html',
  styleUrls: ['./onecomment.component.css']
})
export class OnecommentComponent implements OnInit {

  @Input() comments: CommentList = new CommentList();

  constructor() { }

  ngOnInit(): void {
  }

}
