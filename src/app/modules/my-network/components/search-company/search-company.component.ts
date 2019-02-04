import { Component } from '@angular/core';

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.scss']
})
export class SearchCompanyComponent{

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
        follows: '1,200',
        following: 0
      },
      {
        id: 2,
        image: '/assets/images/02x.png',
        name: 'Nguyen Van B',
        follows: '1,200',
        following: 1
      },
      {
        id: 3,
        image: '/assets/images/03x.png',
        name: 'Nguyen Van C',
        follows: '1,200',
        following: 0
      },
      {
        id: 4,
        image: '/assets/images/02x.png',
        name: 'Nguyen Van E',
        follows: '1,200',
        following: 0
      },
      {
        id: 5,
        image: '/assets/images/01x.png',
        name: 'Nguyen Van F',
        follows: '1,200',
        following: 0
      },
      {
        id: 6,
        image: '/assets/images/03x.png',
        name: 'Nguyen Van G',
        follows: '1,200',
        following: 0
      },
      {
        id: 7,
        image: '/assets/images/02x.png',
        name: 'Nguyen Van H',
        follows: '1,200',
        following: 0
      },
      {
        id: 8,
        image: '/assets/images/01x.png',
        name: 'Nguyen Van I',
        follows: '1,200',
        following: 0
      },
      {
        id: 9,
        image: '/assets/images/03x.png',
        name: 'Nguyen Van C',
        follows: '1,200',
        following: 0
      },
      {
        id: 10,
        image: '/assets/images/02x.png',
        name: 'Nguyen Van C',
        follows: '1,200',
        following: 0
      }
    ];
  }

}
