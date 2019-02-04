import { Component} from '@angular/core';

@Component({
  selector: 'app-agency-userside',
  templateUrl: './agency-userside.component.html',
  styleUrls: ['./agency-userside.component.scss']
})
export class AgencyUsersideComponent {
  /**
   * @param {} activeTab : set active tab .
   * @param {Array<>} listPostOfCurrentAgency: list all of post of current agency posted
   */
  activeTab = 'page';
  listPostOfCurrentAgency = [];
  constructor() {
    /**
     *
     * listAll Post
     */
    this.listPostOfCurrentAgency = [
      {
        time: 'Now',
        content: `<p>[SYNOVA - SOLUTIONS]_.NET Developer offshore Denmark</p>
				<p>Chào mọi người,</p>
				<p>Hiện tại công ty Synova tuyrnt vị trí #doNET #Developer</p>`,
        image: '/assets/images/agency-post.jpg',
        like: 9,
        comment: 8,
        share: 3
      },
      {
        time: 'Now',
        content: `<p>[SYNOVA - SOLUTIONS]_.NET Developer offshore Denmark</p>
				<p>Chào mọi người,</p>
				<p>Hiện tại công ty Synova tuyrnt vị trí #doNET #Developer</p>`,
        image: '/assets/images/agency-post.jpg',
        like: 9,
        comment: 8,
        share: 3
      },
      {
        time: 'Now',
        content: `<p>[SYNOVA - SOLUTIONS]_.NET Developer offshore Denmark</p>
				<p>Chào mọi người,</p>
				<p>Hiện tại công ty Synova tuyrnt vị trí #doNET #Developer</p>`,
        image: '/assets/images/agency-post.jpg',
        like: 9,
        comment: 8,
        share: 3
      }
    ];
    /**
     * End list Post
     */
  }
  changeActive(tab) {
    this.activeTab = tab;
  }

}
