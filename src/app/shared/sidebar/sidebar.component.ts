import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgentAcceptComponent } from '@app/shared/agent-accept/agent-accept.component';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  listAllFanpageAgency = [];
  listAllFriendAgency = [];
  user = 'Hoang Phi Yen';
  image = '/assets/images/avatar3x.png';
  @Input() tab:string = '';

  /**
   * @param {Array<>} listAllFanpageAgency : list all fanpage to show in sidebar network
   * @param {Array<>} listAllFriendAgency : list all suggest friend to follow
   */
  constructor(private modalService: NgbModal) {
    this.listAllFanpageAgency = [
      {
        image: '/assets/images/01x.png',
        link: '',
        statusFollow: 0,
        title: 'Lakeview Villas Estate Agency',
        id: 1
      },
      {
        image: '/assets/images/02x.png',
        link: '',
        statusFollow: 0,
        title: 'Chia khoa nha dat',
        id: 2
      },
      {
        image: '/assets/images/03x.png',
        link: '',
        statusFollow: 1,
        title: 'Phuong Thanh',
        id: 3
      },
      {
        image: '/assets/images/02x.png',
        link: '',
        statusFollow: 0,
        title: 'Hung Thinh ',
        id: 4
      },
      {
        image: '/assets/images/01x.png',
        link: '',
        statusFollow: 0,
        title: 'Tuan Anh',
        id: 5
      }
    ];
    this.listAllFriendAgency = [
      {
        image: '/assets/images/01x.png',
        link: '',
        statusFollow: 0,
        title: 'Nguyen Minh Ha',
        id: 1
      },
      {
        image: '/assets/images/02x.png',
        link: '',
        statusFollow: 0,
        title: 'Trang Hoang Thanh Thanh',
        id: 2
      },
      {
        image: '/assets/images/03x.png',
        link: '',
        statusFollow: 1,
        title: 'Nguyen Tan Dung',
        id: 3
      },
      {
        image: '/assets/images/02x.png',
        link: '',
        statusFollow: 0,
        title: 'Nguyen Phi Thuy Thuy',
        id: 4
      },
      {
        image: '/assets/images/01x.png',
        link: '',
        statusFollow: 0,
        title: 'Tran Ming',
        id: 5
      }
    ];
  }
  /**
   *
   * @param pageId <number>
   * @param {Fn} removeAgency: Click x and remove agency to list suggestions
   */
  removeAgency(pageId) {
  }

  openDialog(): void {
    const modalConnect = this.modalService.open(AgentAcceptComponent);
    modalConnect.componentInstance.image = '/assets/images/03x.png';
    modalConnect.componentInstance.user = 'Le Tuan Anh';
  }
  /**
   *
   * @param id {number} id friend or fanpage
   * @param {Fn} follow: click to follow as id of friend or fanpage
   */
  follow(id) {
    let resultFind = this.listAllFanpageAgency.find(data => data.id === id);
    let locationInArray = this.listAllFanpageAgency.indexOf(resultFind);
    this.listAllFanpageAgency[locationInArray]['statusFollow'] = 1;
  }

  /**
   *
   * @param pageId {number} pageId to Function unfollow
   * @param {Fn} unfollow : Unfollow page or friend
   */
  unfollow(pageId) {
    let resultFind = this.listAllFanpageAgency.find(data => data.id === pageId);
    let locationInArray = this.listAllFanpageAgency.indexOf(resultFind);
    this.listAllFanpageAgency[locationInArray]['statusFollow'] = 0;
  }
}
