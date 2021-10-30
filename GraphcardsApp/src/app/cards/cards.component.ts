import { Component, OnInit } from '@angular/core';
import { CardList } from '../model/card-list.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: CardList = new CardList();

  params = {
    page: 1,
    pageSize: 10
  }

  constructor(private service: CardService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards():void{
    this.service.getCards(this.params).subscribe((data: CardList) => {
      this.cards = data;
    })
  }

  changePage(newPage: number):void{
    this.params.page = newPage;
    this.getCards();
  }

  changePageSize(x: number):void{
    this.params.pageSize = x;
    this.getCards();
  }

}
