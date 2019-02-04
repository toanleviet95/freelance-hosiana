import { Component, OnInit, ViewEncapsulation, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '@core/services/language.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-pro-education',
	templateUrl: './pro-education.component.html',
	styleUrls: ['./pro-education.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ProEducationComponent implements OnInit {
	listVideo:any = [];
	formContact:FormGroup;
	submitted:boolean = false;
	modal:any;
	videoSource:string = '';
	emmitTrue:boolean = false;
	@ViewChild('content') contentElement;
	titleHeader:string;
    descriptionHeader:string;
    translate:any;
	@Output('change_header') changeHeader:EventEmitter<any> = new EventEmitter();
	constructor(private fb:FormBuilder, private modalService: NgbModal, private languageService:LanguageService) {
        this.translate = this.languageService.getInstance();
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
			image: 'assets/images/avatar-image.png',
			title: 'How can push a listing',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			office: "Frontend Developer",
			name: 'Tuan Anh',
			content: 'I was looking for a way to make extra money at home'
		}
		];
		this.formContact = this.fb.group({
			email: [null, Validators.compose([Validators.required, Validators.email])]
        });
        this.titleHeader = this.translate.instant('faq.pro_resource_center');
        this.descriptionHeader = this.translate.instant('faq.get_real_estate_all');
		this.changeHeader.emit({title: this.titleHeader, description: this.descriptionHeader});
	}

	open(content, value) {
		this.videoSource = value;
		this.modal = this.modalService.open(content, { size: 'lg', backdropClass: 'modalEdit' });
	}

	d(){
		this.modal.close();
	}

	changeDetect(e:any) {
		if(e.video != '') {
			this.open(this.contentElement, e);
		}
	}

	submitFormContact(e) {
		e.preventDefault();
		this.submitted = true;
	}
}
