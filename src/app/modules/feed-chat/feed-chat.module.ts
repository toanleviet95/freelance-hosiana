import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { AutosizeModule } from 'ngx-autosize';
import { NgSelectModule } from '@ng-select/ng-select';
import { FeedChatRoutingModule } from './feed-chat-routing.module';
import { FeedsMainComponent } from './pages/feeds-main/feeds-main.component';
import { SidebarInfoUserComponent } from './components/sidebar-info-user/sidebar-info-user.component';
import { FormCreatePostComponent } from './components/form-create-post/form-create-post.component';
import { FeedsNotificationsComponent } from './pages/feeds-notifications/feeds-notifications.component';
import { SidebarNotificationsComponent } from './components/sidebar-notifications/sidebar-notifications.component';
import { FeedNewComponent } from './pages/feed-new/feed-new.component';
import { ChatFullListComponent } from './pages/chat-full-list/chat-full-list.component';
import { WindowMessageComponent } from './components/window-message/window-message.component';
import { SidebarMessageComponent } from './components/sidebar-message/sidebar-message.component';
@NgModule({
  imports: [
    SharedModule,
    FeedChatRoutingModule,
    NgSelectModule,
    AutosizeModule
  ],
  declarations: [FeedsMainComponent, SidebarInfoUserComponent, FormCreatePostComponent, FeedsNotificationsComponent, SidebarNotificationsComponent, FeedNewComponent, ChatFullListComponent, WindowMessageComponent, SidebarMessageComponent]
})
export class FeedChatModule { }
