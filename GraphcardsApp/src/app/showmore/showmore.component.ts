import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showmore',
  templateUrl: './showmore.component.html',
  styleUrls: ['./showmore.component.css']
})
export class ShowmoreComponent implements OnInit {

  @Input() textSize: number = 1000;
  @Input() description: string = "";

  isShowMore: boolean = false;
  showText: string = "";

  constructor() { }

  ngOnInit(): void {
    this.toogleShow();
  }

  toogleShow(): void{
    if(this.description.length > this.textSize){
      this.showText = this.description.substr(0,130) +"...";
      this.isShowMore = true;
    } else{
      this.showText = this.description;
    }
  }

  clickOne():void{
    this.isShowMore = !this.isShowMore;
    this.showText = this.description;
  }

  clickTwo():void{
    this.isShowMore = !this.isShowMore;
    this.showText = this.description.substr(0,130) +"...";
  }

}
