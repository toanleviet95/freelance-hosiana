import { NgModule } from '@angular/core';
import { ListingAgencyRoutingModule } from './listing-agency-routing.module';
import { SharedModule } from '@app/shared';
import { AgmCoreModule } from '@agm/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { ListingAgencyComponent } from './pages/listing-agency/listing-agency.component';
import { AddListingComponent } from './pages/add-listing/add-listing.component';
import { FormFilterComponent } from './components/form-filter/form-filter.component';
import { AgencyItemComponent } from './components/agency-item/agency-item.component';
import { AddListingDetailComponent } from './components/add-listing-detail/add-listing-detail.component';
import { InformationDetailComponent } from './components/information-detail/information-detail.component';
import { PriceDetailComponent } from './components/price-detail/price-detail.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { FacilitiesDetailComponent } from './components/facilities-detail/facilities-detail.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { RelistComponent } from './pages/relist/relist.component';
import { RelistItemComponent } from './components/relist-item/relist-item.component';
import { HeaderListingComponent } from './components/header-listing/header-listing.component';
import { SwapListingComponent } from './components/swap-listing/swap-listing.component';
import { AddListingPromoteComponent } from './components/add-listing-promote/add-listing-promote.component';
import { DurationPromoteComponent } from './components/duration-promote/duration-promote.component';
import { PreviewPromoteComponent } from './components/preview-promote/preview-promote.component';
import { PromotionComponent } from './pages/promotion/promotion.component';
import { PromotionItemComponent } from './components/promotion-item/promotion-item.component';
// import { AgencyExtraComponent } from './components/agency-extra/agency-extra.component';
import { PaginationComponent } from './components/pagination/pagination.component';

import GLOBAL from '@config/global';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AgencyEffects } from './store/effects';

import { listingReducer } from './store/listing.reducers';
import { relistReducer } from './store/relist.reducers';
import { promotionReducer } from './store/promotion.reducers';
import { listingTotalReducer } from './store/listing-total.reducers';
import { paginationReducer } from './store/pagination.reducers';
import { agencyReducer } from './store/agency.reducers';
import { categoryReducer } from './store/category.reducers';
import { facilityReducer } from './store/facility.reducers';
import { exchangeRateReducer } from './store/exchange-rate.reducers';
import { projectReducer } from './store/project.reducers';
import { cityReducer } from './store/city.reducers';
import { districtReducer } from './store/district.reducers';
import { wardReducer } from './store/ward.reducers';
import { geoCodeReducer } from './store/geography-code.reducers';
import { promotionListReducer } from './store/promotion-list.reducers';
import { agencyStaffReducer } from './store/agency-staff.reducers';

@NgModule({
  imports: [
    SharedModule,
    ListingAgencyRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: GLOBAL.apiGoogleKeyApp
    }),
    NgSelectModule,
    GooglePlaceModule,
    EffectsModule.forFeature([AgencyEffects]),
    StoreModule.forFeature('listings', listingReducer),
    StoreModule.forFeature('relists', relistReducer),
    StoreModule.forFeature('promotions', promotionReducer),
    StoreModule.forFeature('listingTotal', listingTotalReducer),
    StoreModule.forFeature('pages', paginationReducer),
    StoreModule.forFeature('agencies', agencyReducer),
    StoreModule.forFeature('categories', categoryReducer),
    StoreModule.forFeature('facilities', facilityReducer),
    StoreModule.forFeature('exchangeRates', exchangeRateReducer),
    StoreModule.forFeature('projects', projectReducer),
    StoreModule.forFeature('cities', cityReducer),
    StoreModule.forFeature('districts', districtReducer),
    StoreModule.forFeature('wards', wardReducer),
    StoreModule.forFeature('geoCode', geoCodeReducer),
    StoreModule.forFeature('promotionList', promotionListReducer),
    StoreModule.forFeature('agencyStaffs', agencyStaffReducer),
  ],
  declarations: [
    ListingAgencyComponent,
    AddListingComponent,
    FormFilterComponent,
    AgencyItemComponent,
    AddListingDetailComponent,
    InformationDetailComponent,
    PriceDetailComponent,
    LocationDetailComponent,
    FacilitiesDetailComponent,
    PropertyDetailComponent,
    ContactDetailComponent,
    RelistComponent,
    RelistItemComponent,
    HeaderListingComponent,
    SwapListingComponent,
    AddListingPromoteComponent,
    DurationPromoteComponent,
    PreviewPromoteComponent,
    PromotionComponent,
    PromotionItemComponent,
    // AgencyExtraComponent,
    PaginationComponent
  ]
})
export class ListingAgencyModule {}
