import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-video-item',
	templateUrl: './video-item.component.html',
	styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
	@Input() items:any;
	@Output('change_modal') changeModal:EventEmitter<any> = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}

	showPopupVideo(item) {
		this.changeModal.emit(item);
	}

}
