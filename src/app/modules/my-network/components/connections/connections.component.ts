import { Component } from '@angular/core';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent {
  /**
   * @param {Array<>} listConnections is online
   * @param { Array<> } listSorts
   */
  listConnections = [];
  listSorts = [
    {
      key: 'DESC',
      title: 'Option 1'
    },
    {
      key: 'ASC',
      title: 'Option 2'
    },
    {
      key: 'PriceDESC',
      title: 'Option 3'
    }
  ];
  constructor() {
    this.listConnections = [
      {
        image: '/assets/images/03x.png',
        name: 'Nguyen Van A',
        job: 'Sale Executive at Hung Thinh Corp'
      },
      {
        image: '/assets/images/02x.png',
        name: 'Nguyen Van B',
        job: 'Sale Executive at Hung Helo Corp'
      },
      {
        image: '/assets/images/03x.png',
        name: 'Nguyen Van C',
        job: 'Sale Executive at Hosiana'
      },
      {
        image: '/assets/images/02x.png',
        name: 'Nguyen Van E',
        job: 'Sale Executive at Hosiana'
      },
      {
        image: '/assets/images/01x.png',
        name: 'Nguyen Van F',
        job: 'Sale Executive at Hosiana'
      },
      {
        image: '/assets/images/03x.png',
        name: 'Nguyen Van G',
        job: 'Sale Executive at Hosiana'
      },
      {
        image: '/assets/images/02x.png',
        name: 'Nguyen Van H',
        job: 'Sale Executive at Hosiana'
      },
      {
        image: '/assets/images/01x.png',
        name: 'Nguyen Van I',
        job: 'Sale Executive at Hosiana'
      },
      {
        image: '/assets/images/03x.png',
        name: 'Nguyen Van C',
        job: 'Sale Executive at Hosiana'
      },
      {
        image: '/assets/images/02x.png',
        name: 'Nguyen Van C',
        job: 'Sale Executive at Hosiana'
      }
    ];
  }

}
