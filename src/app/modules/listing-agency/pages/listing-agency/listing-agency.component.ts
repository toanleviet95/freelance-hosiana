import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Listing, ListingTotal } from '@app/modules/listing-agency/models/agency';
import * as fromListingReducers from '@app/modules/listing-agency/store/listing.reducers';
import * as fromListingTotalReducers from '@app/modules/listing-agency/store/listing-total.reducers';
import * as fromPaginationReducers from '@app/modules/listing-agency/store/pagination.reducers';

@Component({
  selector: 'app-listing-agency',
  templateUrl: './listing-agency.component.html',
  styleUrls: ['./listing-agency.component.scss']
})
export class ListingAgencyComponent implements OnInit {
  activeTabID = 'promotion';
  listings: Observable<Listing[]>;
  listingTotal: Observable<ListingTotal>;
  pages: Observable<any>;

  constructor(private store: Store<any>, private router: Router, private location: Location) {}

  ngOnInit() {
    this.listings = this.store.select(fromListingReducers.selectAll);
    this.listingTotal = this.store.select(fromListingTotalReducers.selectAll);
    this.pages = this.store.select(fromPaginationReducers.selectEntities);

    const lastSegment = this.router.url
      .split('/')
      .slice(-1)
      .pop();
    switch (lastSegment) {
      case 'listing-agency': {
        // Load listing
        this.activeTabID = 'all-listing';
        break;
      }
      case 'relist': {
        // Load Relist
        this.activeTabID = 'relist';
        break;
      }
      case 'promotion': {
        // Load promotion
        this.activeTabID = 'promotion';
        break;
      }
    }
  }

  handleChangeTab($event: any) {
    if ($event.nextId === 'all-listing') {
      this.activeTabID = 'all-listing';
      this.location.replaceState(`/listing-agency`);
    }
    if ($event.nextId === 'relist') {
      this.activeTabID = 'relist';
      this.location.replaceState(`/listing-agency/relist`);
    }
    if ($event.nextId === 'promotion') {
      this.activeTabID = 'promotion';
      this.location.replaceState(`/listing-agency/promotion`);
    }
  }
}
