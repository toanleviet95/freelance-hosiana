import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { Store } from '@ngrx/store';
import { Page } from '../../models/agency';
import * as fromPaginationReducers from '@app/modules/listing-agency/store/pagination.reducers';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input()
  active: string;
  pages: Page = null;

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {
    this.store.select(fromPaginationReducers.selectEntities).subscribe(data => (this.pages = data[this.active]));
  }

  OnPageChange(currentPage) {
    let navigationExtras: NavigationExtras = {
      queryParams: { page: currentPage },
      queryParamsHandling: 'merge'
    };
    this.router.navigate([], navigationExtras);
  }
}
