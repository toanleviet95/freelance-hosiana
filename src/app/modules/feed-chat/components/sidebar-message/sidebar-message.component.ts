import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';

@Component({
  	selector: 'app-sidebar-message',
  	templateUrl: './sidebar-message.component.html',
	styleUrls: ['./sidebar-message.component.scss'],
	encapsulation: ViewEncapsulation.None  
})
export class SidebarMessageComponent implements OnInit {

	public activeSidebarListConnector:string = 'agents';
	public activeConnectorMessage:number = 993;
	public listConnectorInMessage:any;
	public stateSidebarShow:boolean = true;
	@Input() newMessage:boolean;
	@Input() customClass:string;
	@Input() showWindow:boolean = false;
	@Output('createNewMessage') createNewMessage:EventEmitter<boolean> = new EventEmitter<boolean>();
  	constructor() { 
		this.listConnectorInMessage = [
			{
				id: 992,
				image: 'assets/images/01x.png',
				name: 'Phan Dinh Thuy Thuy ',
				message: 'Text text text text text text text…',
				active: true,
				read: true
			},
			{
				id: 993,
				image: 'assets/images/01x.png',
				name: 'Phan Dinh Thuy Thuy ',
				message: 'Text text text text text text text…',
				active: false,
				read: true
			},
			{
				id: 994,
				image: 'assets/images/01x.png',
				name: 'Phan Dinh Thuy Thuy ',
				message: 'Text text text text text text text…',
				active: false,
				read: false
			},
			{
				id: 995,
				image: 'assets/images/01x.png',
				name: 'Phan Dinh Thuy Thuy ',
				message: 'Text text text text text text text…',
				active: false,
				read: false
			},
			{
				id: 996,
				image: 'assets/images/01x.png',
				name: 'Phan Dinh Thuy Thuy ',
				message: 'Text text text text text text text…',
				active: true,
				read: true
			},
			{
				id: 997,
				image: 'assets/images/01x.png',
				name: 'Phan Dinh Thuy Thuy ',
				message: 'Text text text text text text text…',
				active: true,
				read: true
			},
			{
				id: 998,
				image: 'assets/images/01x.png',
				name: 'Phan Dinh Thuy Thuy ',
				message: 'Text text text text text text text…',
				active: true,
				read: false
			},
			{
				id: 999,
				image: 'assets/images/01x.png',
				name: 'Phan Dinh Thuy Thuy ',
				message: 'Text text text text text text text…',
				active: true,
				read: true
			}
		];	  
	}
	
	/**
	 * Change active list connector Ex: agents and clients
	 * 
	 * @param {String} type
	 */
	changeActiveListConnector(type:string) {
		this.activeSidebarListConnector = type;
	}

	/**
	 * Add New Message
	 */
	addNewMessage() {
		this.newMessage = true;
		this.createNewMessage.emit(this.newMessage);
	}

	/**
	 * Create new window message
	 */
	createWindowMessage() {
		this.newMessage = true;
		this.createNewMessage.emit(this.newMessage);
	}

	/**
	 * Change active when click to another message
	 * 
	 * @param {Number} id
	 */
	changeActiveConnectorMessage(id:number) {
		this.activeConnectorMessage = id;
	}

	/**
	 * Toggle State of sidebar
	 */
	toggleStateOfSidebar(state:any) {
		this.stateSidebarShow = !state;
	}

	/**
	 *	Show message
	*/
	showMessagePeople(id:any) {
		this.newMessage = false;
		this.createNewMessage.emit(this.newMessage);
	}

  	ngOnInit() {
  	}

}
