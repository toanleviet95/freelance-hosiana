import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'app-chat-full-list',
	templateUrl: './chat-full-list.component.html',
	styleUrls: ['./chat-full-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ChatFullListComponent implements OnInit {
	/**
	 * @param newMessage
	 * @param listConnection
	 * @param { Boolean } showSidebar
	 */
	showSidebar:boolean = false;
	newMessage:boolean = false;
	listConnection:any = [];
	constructor() {
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
		];
	}

	changeHandlerNewMessage(event:any) {
		this.newMessage = event;
	}

	select(item) {
	}

    ngOnInit() {
	}

}
