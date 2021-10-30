import { Component, Input, OnInit } from '@angular/core';
import { CardList } from 'src/app/model/card-list.model';
import { Card } from 'src/app/model/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-onecard',
  templateUrl: './onecard.component.html',
  styleUrls: ['./onecard.component.css']
})
export class OnecardComponent implements OnInit {

  @Input() cards: CardList = new CardList();

  constructor(private service: CardService) { }

  ngOnInit(): void {
  }

  updateCard(card: Card, s: string):void{
    
    if(s == "+"){
      card.grade+=1;
    } else if(s == "-"){
      card.grade-=1;
    }

    this.service.updateCard(card).subscribe(
      data => {
        window.alert("Succesfull update of existing card!");
      },
      error => {
        console.log("error: " + error.statusText);
      }
    );
  }

}
