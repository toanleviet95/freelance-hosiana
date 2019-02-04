import { Component, OnInit, HostListener, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
	selector: 'feed-chat-form-create-post',
	templateUrl: './form-create-post.component.html',
	styleUrls: ['./form-create-post.component.scss']
})
export class FormCreatePostComponent implements OnInit {

	/** Receive isAnimation in parent's component
	 * It was set default false
	 */
	public multiUpload:boolean = true;
	@Input() postSetting:boolean;
	@Input() isAnimation:boolean;

	@Output() change:EventEmitter<boolean> = new EventEmitter<boolean>();

	public formPostAgencySide:FormGroup;

	constructor(private fb:FormBuilder) { }
	/*
		Show Drop
	*/
	showDrop() {
		this.isAnimation = true;
		this.changeDetectStateAnimation(this.isAnimation);
	}
	/*Hide drop*/
	hideDrop() {
		this.isAnimation = false;
		this.changeDetectStateAnimation(this.isAnimation);
	}
	// Check window scroll
	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		if (document.documentElement.scrollTop > 600) {
		this.isAnimation = false;
		}
	}
	ngOnInit() {
		this.formPostAgencySide = this.fb.group({
			content: [null],
			image: [null]
		});
	}
	// Change value output
	changeDetectStateAnimation(vl) {
		this.change.emit(vl);
	}
}
