import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingAgencyComponent } from './pages/listing-agency/listing-agency.component';
import { AddListingComponent } from './pages/add-listing/add-listing.component';
// import { AddListingDetailComponent } from './components/add-listing-detail/add-listing-detail.component';
// import { AddListingPromoteComponent } from './components/add-listing-promote/add-listing-promote.component';
import { RelistComponent } from './pages/relist/relist.component';
import { PromotionComponent } from './pages/promotion/promotion.component';
// import { AgencyResolverService } from './services/agency-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ListingAgencyComponent
  },
  // {
  //   path: ':term',
  //   component: ListingAgencyComponent
  // },
  // {
  //   path: '',
  //   // component: ListingAgencyComponent
  //   redirectTo: 'page/1', //This will make sure that we are always redirected to the first page
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'page/:page',
  //   component: ListingAgencyComponent,
  //   resolve: {
  //     agency: AgencyResolverService
  //   }
  // },
  {
    path: 'promotion',
    component: PromotionComponent
  },
  {
    path: 'add-listing',
    component: AddListingComponent
  },
  {
    path: 'relist',
    component: RelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [/*AgencyResolverService*/]
})
export class ListingAgencyRoutingModule { }
