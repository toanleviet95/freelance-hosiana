import { Component, Input } from '@angular/core';
import { ListingTotal } from '../../models/agency';

@Component({
  selector: 'app-header-listing',
  templateUrl: './header-listing.component.html',
  styleUrls: ['./header-listing.component.scss']
})
export class HeaderListingComponent {
  @Input()
  active: string;
  @Input()
  listingTotal: ListingTotal;
}
