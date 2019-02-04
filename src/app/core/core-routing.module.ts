import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NgxPermissionsModule, NgxPermissionsGuard } from 'ngx-permissions';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { GoToLinkComponent } from '@core/layouts/go-to-link/go-to-link.component';
const coreRoutes: Routes = [
  {
    path: '',
    redirectTo: '/listing-agency',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ClientLayoutComponent,
    // canActivate: [NgxPermissionsGuard],
    children: [{ path: '', loadChildren: 'app/modules/home-pro/home-pro.module#HomeProModule' }]
  },
  {
    path: 'listing-agency',
    component: ClientLayoutComponent,
    canActivate: [AuthGuard],
    // canActivate: [NgxPermissionsGuard],
    // data: {
    //     permissions: {
    //         // only: 'ADMIN'
    //     }
    // },
    children: [{ path: '', loadChildren: 'app/modules/listing-agency/listing-agency.module#ListingAgencyModule' }]
  },
  {
    path: 'my-network',
    component: ClientLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: 'app/modules/my-network/my-network.module#MyNetworkModule'
      }
    ]
  },
  {
    path: 'feed-chat',
    component: ClientLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: 'app/modules/feed-chat/feed-chat.module#FeedChatModule'
      }
    ]
  },
  {
    path: 'pro-stories',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/modules/video/video.module#VideoModule'
      }
    ],
    data: {
    },
  },
  {
    path: 'pro-education',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/modules/video/video.module#VideoModule'
      }
    ],
    data: {
      route: 'education'
    },
  },
  {
    path: 'setting/register-bo-cong-thuong',
    component: GoToLinkComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    // redirectTo: '/listing-agency',
    pathMatch: 'full'
  }
  // {
  //     path: "**",
  //     component: PageNotFoundComponent
  // }
];
@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
