import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-play-list',
	templateUrl: './play-list.component.html',
	styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {

	content:any = {};
	currentPath:string;
	constructor(private router:ActivatedRoute) { 
	}

	ngOnInit() {
		this.currentPath = this.router.snapshot.data.route;
	}
	handleHeader(event) {
		this.content = {
			title : event.title ? event.title : '' ,
			description : event.description ? event.description : ''
		}
	}
}
