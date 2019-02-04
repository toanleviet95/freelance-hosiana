import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedsMainComponent } from './pages/feeds-main/feeds-main.component';
import { FeedsNotificationsComponent } from '@app/modules/feed-chat/pages/feeds-notifications/feeds-notifications.component';
import { FeedNewComponent } from '@app/modules/feed-chat/pages/feed-new/feed-new.component';
import { ChatFullListComponent } from '@app/modules/feed-chat/pages/chat-full-list/chat-full-list.component';

const routes: Routes = [
	{
		path: '',
		component: FeedsMainComponent
	},
	{
		path: 'notifications',
		component: FeedsNotificationsComponent
	},
	{
		path: 'news',
		component: FeedNewComponent
	},
	{
		path: 'chat-full',
		component: ChatFullListComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedChatRoutingModule { }
