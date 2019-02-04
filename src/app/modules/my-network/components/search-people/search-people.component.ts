import { Component } from '@angular/core';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss']
})
export class SearchPeopleComponent {

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
        id: 1,
        image: '/assets/images/03x.png',
        name: 'Nguyen Van A',
        job: 'Sale Executive at Hung Thinh Corp'
      },
      {
        id: 2,
        image: '/assets/images/02x.png',
        name: 'Nguyen Van B',
        job: 'Sale Executive at Hung Helo Corp'
      },
      {
        id: 3,
        image: '/assets/images/03x.png',
        name: 'Nguyen Van C',
        job: 'Sale Executive at Hosiana'
      },
      {
        id: 4,
        image: '/assets/images/02x.png',
        name: 'Nguyen Van E',
        job: 'Sale Executive at Hosiana'
      },
      {
        id: 5,
        image: '/assets/images/01x.png',
        name: 'Nguyen Van F',
        job: 'Sale Executive at Hosiana'
      },
      {
        id: 6,
        image: '/assets/images/03x.png',
        name: 'Nguyen Van G',
        job: 'Sale Executive at Hosiana'
      },
      {
        id: 7,
        image: '/assets/images/02x.png',
        name: 'Nguyen Van H',
        job: 'Sale Executive at Hosiana'
      },
      {
        id: 8,
        image: '/assets/images/01x.png',
        name: 'Nguyen Van I',
        job: 'Sale Executive at Hosiana'
      },
      {
        id: 9,
        image: '/assets/images/03x.png',
        name: 'Nguyen Van C',
        job: 'Sale Executive at Hosiana'
      },
      {
        id: 10,
        image: '/assets/images/02x.png',
        name: 'Nguyen Van C',
        job: 'Sale Executive at Hosiana'
      }
    ];
  }

}
