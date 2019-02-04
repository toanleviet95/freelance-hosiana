import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AgencyService } from '@app/modules/listing-agency/services/agency.service';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.scss']
})
export class FormFilterComponent implements OnInit {
  // @Input()
  // page;
  listingType: any;
  serviceType: any;
  private queryParams: any = {};

  constructor(private router: Router) {}

  ngOnInit() {
    this.listingType = AgencyService.getListingTypeFilter();
    this.serviceType = AgencyService.getServiceTypeFilter();
  }

  onSearchChange(key, value): void {
    this.queryParams = Object.assign(this.queryParams, { [key]: value });
    let navigationExtras: NavigationExtras = {
      queryParams: this.queryParams,
      queryParamsHandling: 'merge'
    };
    this.router.navigate(['listing-agency'], navigationExtras);
  }
}
