import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-feed-new',
	templateUrl: './feed-new.component.html',
	styleUrls: ['./feed-new.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FeedNewComponent {

	/**
	 * @param {Array<>} listPostOfCurrentAgency: list all of post of current agency posted
	 */
	public postSetting:boolean = true;
	public showPopup:boolean = false;
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
				content: ``,
				image: [
					{
						url: 'assets/images/agency-post.jpg',
						type: 'video',
					}
				],
				like: 9,
				comment: 8,
				share: 3,
				show:false,
				title: "This is my news feed"
			},
			{
				time: 'Now',
				content: ``,
				image: [
					{
						url: 'assets/images/agency-post.jpg',
						type: 'image',
					},
					{
						url: 'assets/images/coca-c.png',
						type: 'image',
					}
				],
				like: 9,
				comment: 8,
				share: 3,
				show:false,
				title: "This is my news feed"
			},
			{
				time: 'Now',
				content: ``,
				image: [
					{
						url: 'assets/images/agency-post.jpg',
						type: 'image',
					}
				],
				like: 9,
				comment: 8,
				share: 3,
				show:true,
				title: "This is my news feed"
			}
		];
		/**
		 * 
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