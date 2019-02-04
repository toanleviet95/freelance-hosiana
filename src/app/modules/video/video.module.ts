import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { VideoRoutingModule } from './video-routing.module';
import { BannerPageComponent } from './components/banner-page/banner-page.component';
import { ProEducationComponent } from './pages/pro-education/pro-education.component';
import { PlayListComponent } from './pages/play-list.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { ProStoriesComponent } from './pages/pro-stories/pro-stories.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VideoRoutingModule
  ],
  declarations: [BannerPageComponent, ProEducationComponent, PlayListComponent, VideoItemComponent, ProStoriesComponent]
})
export class VideoModule { }
