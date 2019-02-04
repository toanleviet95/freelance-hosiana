import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-feeds-notifications',
	templateUrl: './feeds-notifications.component.html',
	styleUrls: ['./feeds-notifications.component.scss']
})
export class FeedsNotificationsComponent implements OnInit {

  	/** listNotifications<Object> all list new notification of current user */

  	listNotifications: Array<object> = [];
  	listNotificationListing: Array<object> = [];
  	active = 'feed';
  	countListNotifications: any = 10;
  	countListingNotifications: any = 2;
  	constructor() {
	  	this.listNotifications = [
		  	{
				id: 1,
				person: 'Hanna Momy',
				action: 'View your profile',
				time: '1 hour ago',
				read: true,
			},
			{
				id: 2,
				person: 'Hanna Momy',
				action: 'View your profile',
				time: '1 hour ago',
				read: false,
			},
			{
				id: 3,
				person: 'Hanna Momy',
				action: 'View your profile',
				time: '1 hour ago',
				read: true,
			}, {
				id: 4,
				person: 'Hanna Momy',
				action: 'View your profile',
				time: '1 hour ago',
				read: false,
			},
			{
				id: 5,
				person: 'Hanna Momy',
				action: 'View your profile',
				time: '1 hour ago',
				read: true,
			},
			{
				id: 6,
				person: 'Hanna Momy',
				action: 'View your profile',
				time: '1 hour ago',
				read: false,
			}
	  	];
	  	this.listNotificationListing = [
            {
                id: 1,
                person: 'Hanna Momy',
                action: 'offer you listing VN001-454 with commission 4,000,000 VND',
                time: '1 hour ago',
                read: true,
            },
            {
                id: 2,
                person: 'Hanna Momy',
                action: 'offer you listing VN001-454 with commission 4,000,000 VND',
                time: '1 hour ago',
                read: false,
            },
            {
                id: 3,
                person: 'Hanna Momy',
                action: 'offer you listing VN001-454 with commission 4,000,000 VND',
                time: '1 hour ago',
                read: true,
            },
            {
                id: 4,
                person: 'Hanna Momy',
                action: 'offer you listing VN001-454 with commission 4,000,000 VND',
                time: '1 hour ago',
                read: false,
            }
        ];
  	}
	
	changeTypeNotifi(type:string) {
		this.active = type;
	}
	
  	ngOnInit() {
  	}
}
