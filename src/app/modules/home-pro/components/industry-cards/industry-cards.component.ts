import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry-cards',
  templateUrl: './industry-cards.component.html'
})
export class IndustryCardsComponent implements OnInit {
  industries = [];
  constructor() {
    this.industries = [
      {
        id: 4,
        content: 'brokers',
        image: 'house',
        backgroundImage: '/assets/images/card1.png'
      },
      {
        id: 1,
        content: 'agency',
        image: 'service',
        backgroundImage: '/assets/images/card2.png'
      },
      {
        id: 2,
        content: 'hs',
        image: 'service-02',
        backgroundImage: '/assets/images/card3.png'
      },
      {
        id: 3,
        content: 'proj',
        image: 'project',
        backgroundImage: '/assets/images/card4.png'
      }
    ];
  }

  ngOnInit() {}
}
