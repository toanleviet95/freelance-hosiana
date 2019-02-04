import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Promotion, ListingTotal } from '@app/modules/listing-agency/models/agency';
import * as fromPromotionReducers from '@app/modules/listing-agency/store/promotion.reducers';
import * as fromListingTotalReducers from '@app/modules/listing-agency/store/listing-total.reducers';
import * as fromPaginationReducers from '@app/modules/listing-agency/store/pagination.reducers';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
  promotions: Observable<Promotion[]>;
  listingTotal: Observable<ListingTotal>;
  pages: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.promotions = this.store.select(fromPromotionReducers.selectAll);
    this.listingTotal = this.store.select(fromListingTotalReducers.selectAll);
    this.pages = this.store.select(fromPaginationReducers.selectEntities);
  }
}
