import { Component, OnInit, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from '@core/services/language.service';

@Component({
	selector: 'app-pro-stories',
	templateUrl: './pro-stories.component.html',
	styleUrls: ['./pro-stories.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ProStoriesComponent implements OnInit {

	listVideo:any = [];
	modal:any;
	videoSource:string = '';
	@ViewChild('content') contentElement;
	titleHeader:string;
	descriptionHeader:string;
	@Output('change_header') changeHeader:EventEmitter<any> = new EventEmitter();
	countPage:number;
    listRenderVideo:any = [];
    translateService:any;

	constructor(private modalService: NgbModal, private languageService:LanguageService) { 
        this.translateService = this.languageService.getInstance();
		this.titleHeader = this.translateService.instant('faq.you_are_pro');
		this.countPage = 2;
	}

	ngOnInit() {
		this.listVideo = [
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://interactive-examples.mdn.mozilla.net/media/examples/stream_of_water.webm',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'https://teamphotomakeup.com/wp-content/uploads/2018/04/chup-hinh-quay-phim-360x240.jpg',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://interactive-examples.mdn.mozilla.net/media/examples/stream_of_water.webm',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'https://teamphotomakeup.com/wp-content/uploads/2018/04/chup-hinh-quay-phim-360x240.jpg',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://interactive-examples.mdn.mozilla.net/media/examples/stream_of_water.webm',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		},
		{
			image: 'https://teamphotomakeup.com/wp-content/uploads/2018/04/chup-hinh-quay-phim-360x240.jpg',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Co-Founder HSBC Bank",
			name: 'Christtan Danner',
			content: 'I was looking for a way to make extra money at home'
		}
		];
		this.countPage = Math.ceil(this.listVideo.length / 6);
		this.countPage = this.countPage > 2 ? 2 : this.countPage;
		this.renderVideo();
		this.changeHeader.emit({title: this.titleHeader, description: this.descriptionHeader});
	}

	renderVideo() {
		this.listRenderVideo = this.rebindListVideo(this.listVideo);
	}

	open(content, value) {
		this.videoSource = value;
		this.modal = this.modalService.open(content, { size: 'lg', backdropClass: 'modalEdit' });
	}

	/**
	* Rendeer video of size, 6 per div
	* @param {Array} data
	*
	* @return  {Array} result
	*/
	rebindListVideo(data:any) {
		let result:any = [];
		if(data.length > 0) {
			for(let i = 1; i <= this.countPage; i++) {
				let childItem:any = [];
				for(let j = 6; j > 0; j--) {
					if(data[i*6-j]) {
						childItem.push(data[i*6-j]);
					}
				}
				if(childItem.length > 0) {
					result.push(childItem);
				}
			}
		}

		return result;
	}

	/**
	* load more data when click load more button
	* @return {Any} mixed
	*/
	loadMore() :void {
		this.countPage++;
		this.renderVideo();
	}

	/**
	*	start confirm info and upload video to your story
	*	@return mixed
	*/
	startYourStory() :void {
		alert('Chúng tôi đang cố gắng hoàn thiện phần này. Phiền quý khách vui lòng quay lại sau');
	}

	d(){
		this.modal.close();
	}

	changeDetect(e:any) {
		if(e.video != '') {
			this.open(this.contentElement, e);
		}
	}
}
