import { Component,ViewEncapsulation, HostListener } from '@angular/core';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  	selector: 'app-agency-side',
  	templateUrl: './agency-side.component.html',
  	styleUrls: ['./agency-side.component.scss'],
  	encapsulation: ViewEncapsulation.None
})
export class AgencySideComponent {
	/**
	 * @param {} activeTab : set active tab .
	 * @param {Array<>} listPostOfCurrentAgency: list all of post of current agency posted
	 */
	formPostAgencySide: FormGroup;
	activeTab = 'page';
	content: string;
	arrayFileUpload = [];
	image: object;
	multiUpload: boolean = true;
	listPostOfCurrentAgency = [];
	fileTransfer: string[];

	isAnimation: boolean = false;

	constructor(private fb: FormBuilder, private modalService: NgbModal) {
		this.formPostAgencySide = fb.group({
		content: [null],
		image: [null]
		});

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
	showDrop() {
		this.isAnimation = true;
	}
	hideDrop() {
		this.isAnimation = false;
	}
	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		if (document.documentElement.scrollTop > 600) {
		this.isAnimation = false;
		}
	}
}
