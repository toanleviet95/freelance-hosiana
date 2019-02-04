import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {
  /**
   * @param {Array<>} listInvitations : all list invitations
   * @param {Number} activeTab
   * @param {Array<>} listSuggestions : all list person you might know
   */

  listInvitations = [];
  listSuggestions = [];
  activeTab = 0;

  constructor() {
    this.listInvitations = [
      {
        image: '/assets/images/02x.png',
        name: 'Nguyen Van A',
        count_mutual: '6'
      },
      {
        image: '/assets/images/01x.png',
        name: 'Nguyen Van B',
        count_mutual: '45'
      }
    ];
    this.listSuggestions = [
      {
        image: '/assets/images/02x.png',
        name: 'Nguyen Van Tung',
        job: 'Senior Sales Executive at Muaban.net',
        id: 1
      },
      {
        image: '/assets/images/01x.png',
        name: 'Nguyen Van Huy',
        job: 'Senior Sales Executive at Muaban.net',
        id: 2
      },
      {
        image: '/assets/images/03x.png',
        name: 'Nguyen Van Tai',
        job: 'Senior Sales Executive at Muaban.net',
        id: 3
      },
      {
        image: '/assets/images/02x.png',
        name: 'Nguyen Van Nam',
        job: 'Senior Sales Executive at Muaban.net',
        id: 4
      },
      {
        image: '/assets/images/01x.png',
        name: 'Nguyen Van Long',
        job: 'Senior Sales Executive at Muaban.net',
        id: 5
      },
      {
        image: '/assets/images/03x.png',
        name: 'Nguyen Van Huy',
        job: 'Senior Sales Executive at Muaban.net',
        id: 6
      },
      {
        image: '/assets/images/02x.png',
        name: 'Nguyen Van Thuyen Thueyn',
        job: 'Senior Sales Executive at Muaban.net',
        id: 7
      },
      {
        image: '/assets/images/03x.png',
        name: 'Nguyen Van Thanh Thanh',
        job: 'Senior Sales Executive at Muaban.net',
        id: 8
      },
      {
        image: '/assets/images/01x.png',
        name: 'Nguyen Van Hung',
        job: 'Senior Sales Executive at Muaban.net',
        id: 9
      }
    ];
  }
  changeTab(tabId) {
    this.activeTab = tabId;
  }
  ngOnInit() {}
}
