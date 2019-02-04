import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-clients',
  templateUrl: './card-clients.component.html',
  styleUrls: ['./card-clients.component.scss']
})
export class CardClientsComponent implements OnInit {
  clients = [];
  constructor() {
    this.clients = [
      {
        header: 'Lakeview Villas',
        image: '/assets/images/agency1.png',
        content:
          '“Hosiana bring us the serenity of mind, they support us from A to Z and we can only focus on our core busuness: serve our clients”',
        name: 'lakeview'
      },
      {
        header: 'Mekong Realty',
        image: '/assets/images/agency2.png',
        content:
          '“Since I exclusively work with Hosiana, I get more contact and am not in compertition with individual sellers”.',
        name: 'toyo'
      },
      {
        header: 'TODD’S REALTY',
        image: '/assets/images/agency3.png',
        content: '“Now we use Hosiana tools, we can follow what oue team is doing and support them in every steps”.',
        name: 'mekong'
      }
    ];
  }

  ngOnInit() {}
}
