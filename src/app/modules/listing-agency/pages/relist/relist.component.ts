import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Relist, ListingTotal } from '@app/modules/listing-agency/models/agency';
import * as fromRelistReducers from '@app/modules/listing-agency/store/relist.reducers';
import * as fromListingTotalReducers from '@app/modules/listing-agency/store/listing-total.reducers';
import * as fromPaginationReducers from '@app/modules/listing-agency/store/pagination.reducers';

@Component({
  selector: 'app-relist',
  templateUrl: './relist.component.html',
  styleUrls: ['./relist.component.scss']
})
export class RelistComponent implements OnInit {
  relists: Observable<Relist[]>;
  listingTotal: Observable<ListingTotal>;
  pages: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.relists = this.store.select(fromRelistReducers.selectAll);
    this.listingTotal = this.store.select(fromListingTotalReducers.selectAll);
    this.pages = this.store.select(fromPaginationReducers.selectEntities);
  }
}
