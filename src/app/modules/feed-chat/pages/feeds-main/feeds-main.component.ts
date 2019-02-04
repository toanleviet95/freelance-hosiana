import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  	selector: 'app-feeds-main',
  	templateUrl: './feeds-main.component.html',
  	styleUrls: ['./feeds-main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FeedsMainComponent {

  	/**
	 * @param {Array<>} listPostOfCurrentAgency: list all of post of current agency posted
	 */
	public postSetting:boolean = false;
	public showPopup:boolean = false;
	showSidebar:boolean = true;
	content:string;
	multiUpload: boolean = true;
	listPostOfCurrentAgency:Array<object> = [];
	

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
				share: 3,
				show:false
			},
			{
				time: 'Now',
				content: `<p>[SYNOVA - SOLUTIONS]_.NET Developer offshore Denmark</p>
						<p>Chào mọi người,</p>
						<p>Hiện tại công ty Synova tuyrnt vị trí #doNET #Developer</p>`,
				image: '/assets/images/agency-post.jpg',
				like: 9,
				comment: 8,
				share: 3,
				show:false
			},
			{
				time: 'Now',
				content: `<p>[SYNOVA - SOLUTIONS]_.NET Developer offshore Denmark</p>
						<p>Chào mọi người,</p>
						<p>Hiện tại công ty Synova tuyrnt vị trí #doNET #Developer</p>`,
				image: '/assets/images/agency-post.jpg',
				like: 9,
				comment: 8,
				share: 3,
				show:true
			}
		];
		/**
		 * End list Post
		 */
	}
	changeIsAnimation(stateAnimation) {
		this.showPopup = stateAnimation;
	}
	hideDrop() {
		this.showPopup = false;
	}
}
