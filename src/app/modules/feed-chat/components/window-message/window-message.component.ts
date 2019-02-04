import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { stat } from 'fs';

@Component({
	selector: 'app-window-message',
  	templateUrl: './window-message.component.html',
	styleUrls: ['./window-message.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class WindowMessageComponent implements OnInit {

	/**
	 * @param {FormGroup} formChangeNickName
	 * @param {} modal
	 * @param {Input < Boolean > } showSidebar
	 */

	formChangeNickName:FormGroup;
	formAddToChat:FormGroup;
	@Input() showSidebar:boolean;
	modal: any;
	listMessageApi:any = [];
	listMessage:any = [];
	listConnection:any = [];
	newMessageWindow:boolean = false;
  	constructor(private modalService: NgbModal, private fb:FormBuilder) { 
		this.listMessageApi = [
			{
				id: 0,
				name: "Nguyen Cao",
				unread: 4
			},
			{
				id: 1,
				name: "Hoang Phi Hong Hong",
				unread: 2
			},
			{
				id: 2,
				name: "Le Tuan Anh",
				unread: 0
			},
			{
				id: 3,
				name: "Thanh Truc",
				unread: 0
			}
		];
		this.listMessage = this.convertWindowMessage(this.listMessageApi);
		this.listConnection = [
			{
				id: 244,
				name: "Nguyen Cao",
				image: 'assets/images/01x.png',
			},
			{
				id: 245,
				name: "John Doe",
				image: 'assets/images/01x.png'
			},
			{
				id: 244,
				name: "William Doe",
				image: 'assets/images/01x.png'
			},
		]
	}

	/**
     * Show popup when click change nickname in chat window using ng-bootstrap modal
     *
     * @param {String} content
     */
    showEditYourNickName(content) {
        this.modal = this.modalService.open(content, { backdropClass: 'modalEdit' });
	}
	
	/**
	 * Convert list data message
	 * 
	 * @param {Any} listWindowMessages 
	 */
	convertWindowMessage(listWindowMessages:any) {
		listWindowMessages = listWindowMessages.map((data,index) => {
			return {
				id				: data.id,
				name			: data.name,
				unread			: data.unread,
				left			: index == 0 ? 320 : (index* 280) + 320,
				show			: typeof data.show == 'undefined' ? true : data.show,
				showAddPerson	: typeof data.show == 'undefined' ? false : data.show,
				newMessage 		: typeof data.newMessage == 'undefined' ? false : data.newMessage
			}
		});

		return listWindowMessages.slice(0, 3);
	}

	/**
	 * Toggle Window Chat
	 * 
	 * @param {Number} idWindow
	 */
	toggleWindowChat(idWindow:any, state:any) {
		this.listMessage.filter((data) => {
			if(data.id == idWindow) {
				data.show = !state;
				return data;
			}
			return data;
		});
	}

	/**
	 * Remove chat when click close in chat window
	 * 
	 * @param {Number} itemId
	 */
	removeChat(itemId:number) {
		this.listMessageApi.map((data,index) => {
			if(data.id == itemId) {
				return this.listMessageApi.splice(index, 1);
			}
			return data;
		});
		this.listMessage = this.convertWindowMessage(this.listMessageApi);
	}

	/**
	 * Seen Message when focus in textarea
	 */
	seenMessage(itemId) {
		this.listMessage.map((data:any,index:any) => {
			if(data.id == itemId) {
				data.unread = 0;
				return data;
			}
			return data;
		});
		this.listMessage = this.convertWindowMessage(this.listMessage);
	}

	/**
	 * Handler new message 
	 */
	handlerNewMessage(event) {
		this.newMessageWindow = true;
		this.listMessageApi.unshift({
			id				: this.listMessage.length,
			name			: 'New message',
			unread			: 0,
			left			: 320,
			show			: true,
			showAddPerson	: true,
			newMessage		: true
		});
		return this.listMessage = this.convertWindowMessage(this.listMessageApi);
	}

	/**
	 * Show Input to add person
	 * 
	 * @param {Number} idChat
	 */
	showAddPerson(idChat:number, state:any) {
		this.listMessage.filter((data) => {
			if(data.id == idChat) {
				data.showAddPerson = !state;
				return data;
			}
			return data;
		});
	}
	

  	ngOnInit() {
    	/**
         * Create form group for Edit nickname
         */
        this.formChangeNickName = this.fb.group({
            name: [null, Validators.compose([Validators.required])],
		});
  	}

}
