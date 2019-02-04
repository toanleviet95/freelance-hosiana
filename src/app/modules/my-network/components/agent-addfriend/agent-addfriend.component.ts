import { Component} from '@angular/core';

@Component({
  selector: 'app-agent-addfriend',
  templateUrl: './agent-addfriend.component.html',
  styleUrls: ['./agent-addfriend.component.scss'],
})
export class AgentAddfriendComponent {
  /**
   * @param {Array<>} listExperiences : list all experience of current profile
   * @param {Array<>} listEducations : list all education of current profile
   * @param {Number} activeTab : change tab active in recommendations
   * @param {Array<>} listRecommendations
   */
  listExperiences = [];
  listEducations = [];
  listRecommendations = [];
  activeTab = 0;

  constructor() {
    this.listExperiences = [
      {
        image: '/assets/images/exp.png',
        title: 'Senior Product Designer',
        description: 'Interactivelabs',
        time: 'May 2015 – Present - 3 yrs 2 mos',
        country: 'USA',
        link: ''
      },
      {
        image: '/assets/images/exp.png',
        title: 'Senior Product Designer',
        description: 'Interactivelabs',
        time: 'May 2015 – Present - 3 yrs 2 mos',
        country: 'Viet Nam',
        link: 'hosiana.vn'
      },
      {
        image: '/assets/images/exp.png',
        title: 'Senior Product Designer',
        description: 'Interactivelabs',
        time: 'May 2015 – Present - 3 yrs 2 mos',
        country: 'Silicon',
        link: 'hosiana.vn'
      }
    ];
    this.listEducations = [
      {
        image: '/assets/images/exp.png',
        title: 'University of Natural Science',
        description: 'Information Technology',
        time: '2007 - 2011',
        position: 'Software Enineer'
      }
    ];
    this.listRecommendations = [
      {
        image: '/assets/images/01x.png',
        title: 'Nghiem Tran Thuy Thuy',
        job: 'CEO at FPT Asia Pacific March 29, 2009',
        description: 'Dung worker with Thomas in the same group',
        content: `<p style="color:red">I have known Dung in a variety of capacities for many years. We has been 
                      working in FPT Software together.</p>
                  <br>
                  <p>I have known Dung in a variety of capacities for many years. We has been 
                      working in FPT Software together.I have known Dung in a variety of apacities for many years. We has been working in FPT Software together
                  </p>`
      },
      {
        image: '/assets/images/01x.png',
        title: 'Nghiem Tran Thuy Nguyen',
        job: 'CEO at FPT Hosiana March 29, 2009',
        description: 'Dung worker with Thomas in the same group',
        content: `<p style="color:red">I have known Dung in a variety of capacities for many years. We has been 
                      working in FPT Software together.</p>
                  <br>
                  <p>I have known Dung in a variety of capacities for many years. We has been 
                      working in FPT Software together.I have known Dung in a variety of apacities for many years. We has been working in FPT Software together
                  </p>`
      }
    ];
  }

  /**
   * @param {Fn} changeTabActive: change active on tab recommendations
   *
   */
  changeTabActive(id) {
    this.activeTab = id;
  }
}
