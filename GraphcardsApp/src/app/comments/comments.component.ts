import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentList } from '../model/comment-list.model';
import { Comment } from '../model/comment.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: CommentList = new CommentList();
  id: number = 0;
  newCom: Comment = new Comment();

  constructor(private service: CardService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.getComments();
    });
  }

  getComments():void{
    this.service.getComments(this.id).subscribe((data: CommentList) => {
      this.comments = data;
    })
  }

  postComment():void{
    this.newCom.date =  new Date().toISOString();
    this.newCom.cards = this.id;
    console.log(this.newCom);
    
    this.service.postComment(this.newCom).subscribe((data: Comment) => {
      this.newCom = new Comment();
      window.alert("Succesfull add of new comment!");
      this.getComments();
    },
    error => {
      console.log("error: " + error.statusText);
    });
  }

}
