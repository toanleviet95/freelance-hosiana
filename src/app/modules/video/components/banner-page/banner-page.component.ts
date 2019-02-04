import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'video-banner-page',
	templateUrl: './banner-page.component.html',
	styleUrls: ['./banner-page.component.scss']
})
export class BannerPageComponent implements OnInit {

	@Input() content:any;
	constructor() { }

	ngOnInit() {
	}

}
