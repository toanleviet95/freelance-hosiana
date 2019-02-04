import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-invitations',
  templateUrl: './manage-invitations.component.html',
  styleUrls: ['./manage-invitations.component.scss']
})
export class ManageInvitationsComponent {
  activeTab = 1;
  listInvitations = [];
  listInvitationsSent = [];

  /**
   * @param {activeTab} activeTab use add class active when click in tab received or sent
   * @param {Array<>} listInvitations: Show all invitations for user logged
   * @param {Array<>} listInvitationsSent: Show all request friend to another of user logged
   */
  constructor() {
    this.listInvitations = [
      {
        id: 1,
        name: 'Hanna Momy',
        message: '',
        job: 'Sale Excutive at Hung Thinh',
        image: '/assets/images/01x.png',
        status: 0
      },
      {
        id: 2,
        name: 'Hanna Momy',
        message: '',
        job: 'Sale Excutive at Hung Thinh',
        image: '/assets/images/02x.png',
        status: 0
      },
      {
        id: 3,
        name: 'Hanna Momy',
        message: 'offer you listing VN001-454 with commission 4,000,000 VND',
        job: 'Sale Excutive at Hung Thinh',
        image: '/assets/images/03x.png',
        status: 0
      }
    ];
    this.listInvitationsSent = [
      {
        id: 1,
        name: 'Hosiana Hello',
        message: 'Hi, I want to add friend with you',
        job: 'Sale Excutive at Hung Thinh',
        image: '/assets/images/01x.png'
      },
      {
        id: 2,
        name: 'Hosiana Hello',
        message: 'Hi, I want to add friend with you',
        job: 'Sale Excutive at Hung Thinh',
        image: '/assets/images/02x.png'
      },
      {
        id: 3,
        name: 'Hosiana Hello',
        message: 'Hi, I want to add friend with you',
        job: 'Sale Excutive at Hung Thinh',
        image: '/assets/images/03x.png'
      }
    ];
  }
  /**
   * @param { method changeTab()} change class active when click.
   */
  changeTab(tab) {
    this.activeTab = tab;
  }

  /**
   * @param {Fn} denyInvitation: Don;t accept friend with friend sent request to user logged
   * @param {}
   */

  denyInvitation(id) {
    let result = this.listInvitations.find(invitation => invitation.id === id);
    const indexOfId = this.listInvitations.indexOf(result);
    this.listInvitations.splice(indexOfId, 1);
  }

  /**
   *
   * @param {Fn} acceptInvitation : Accept friend with who sent request to user
   */
  acceptInvitation(id) {}

  /**
   *
   * @param {Fn} cancelRequest: Cancel send request friend to other
   */
  cancelRequest(id) {
    let result = this.listInvitationsSent.find(invitation => invitation.id === id);
    const indexOfId = this.listInvitationsSent.indexOf(result);
    this.listInvitationsSent.splice(indexOfId, 1);
  }
}
