import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, filter } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as fromActions from '../store/actions';
import { Agency, Page } from '../models/agency';
import { AgencyService } from '../services/agency.service';

@Injectable({
  providedIn: 'root'
})
export class AgencyEffects {
  constructor(private router: ActivatedRoute, private actions: Actions, private agencyService: AgencyService) {}

  private getInitPagination(id: string, total: number, paging: boolean = false) {
    const listingPagination: Page = AgencyService.getInitPages();
    listingPagination.id = id;
    listingPagination.totalElements = total;
    if (paging) {
      listingPagination.activePage = this.router.snapshot.queryParams['page']
        ? this.router.snapshot.queryParams['page']
        : listingPagination.activePage;
    }

    return listingPagination;
  }

  private getListingTotalPayload(data: any): any {
    if (this.router.snapshot.queryParams['page'] === undefined) {
      const listingTotal = {
        listing: data.total,
        relist: data.totalRelist,
        promotion: data.totalPromotion
      };
      return listingTotal;
    }

    return undefined;
  }

  @Effect()
  loadListing: Observable<Action> = this.actions.pipe(
    ofType(ROUTER_NAVIGATION),
    filter(
      (action: any) =>
        action.payload.routerState.url.startsWith('/listing-agency') &&
        !action.payload.routerState.url.includes('/listing-agency/relist') &&
        !action.payload.routerState.url.includes('/listing-agency/promotion')
    ),
    switchMap(action => this.agencyService.getListings(action.payload.routerState.root.queryParams)),
    switchMap(response => {
      let states = [];
      states.push(new fromActions.LoadListingsSuccess({ listings: response.result.data.items }));

      let listingTotal = this.getListingTotalPayload(response.result.data);
      if (listingTotal) {
        states.push(new fromActions.LoadListingTotalSuccess({ listingTotal }));
      }

      const listingPagination = this.getInitPagination('listing', response.result.data.total, true),
        relistPagination = this.getInitPagination('relist', response.result.data.totalRelist),
        promotionPagination = this.getInitPagination('promotion', response.result.data.totalPromotion);
      states.push(
        new fromActions.LoadPaginationSuccess({ pages: [listingPagination, relistPagination, promotionPagination] })
      );

      return states;
      // return [
      //   new fromActions.LoadPaginationSuccess({ pages: [listingPagination, relistPagination, promotionPagination] }),
      //   new fromActions.LoadListingsSuccess({ listings: response.result.data.items })
      // ];
    })
  );

  @Effect()
  loadRelist: Observable<Action> = this.actions.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((action: any) => action.payload.routerState.url.startsWith('/listing-agency/relist')),
    switchMap(action => this.agencyService.getRelists(action.payload.routerState.root.queryParams)),
    switchMap(response => {
      let states = [];
      states.push(new fromActions.LoadRelistSuccess({ relists: response.result.data.items }));

      let listingTotal = this.getListingTotalPayload(response.result.data);
      if (listingTotal) {
        states.push(new fromActions.LoadListingTotalSuccess({ listingTotal }));
      }

      const listingPagination = this.getInitPagination('listing', response.result.data.total),
        relistPagination = this.getInitPagination('relist', response.result.data.totalRelist, true),
        promotionPagination = this.getInitPagination('promotion', response.result.data.totalPromotion);
      states.push(
        new fromActions.LoadPaginationSuccess({ pages: [listingPagination, relistPagination, promotionPagination] })
      );

      return states;
    })
  );

  @Effect()
  loadPromotion: Observable<Action> = this.actions.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((action: any) => action.payload.routerState.url.startsWith('/listing-agency/promotion')),
    switchMap(action => this.agencyService.getPromotions(action.payload.routerState.root.queryParams)),
    switchMap(response => {
      let states = [];
      states.push(new fromActions.LoadPromotionsSuccess({ promotions: response.result.data.items }));

      let listingTotal = this.getListingTotalPayload(response.result.data);
      if (listingTotal) {
        states.push(new fromActions.LoadListingTotalSuccess({ listingTotal }));
      }

      const listingPagination = this.getInitPagination('listing', response.result.data.total),
        relistPagination = this.getInitPagination('relist', response.result.data.totalRelist),
        promotionPagination = this.getInitPagination('promotion', response.result.data.totalPromotion, true);
      states.push(
        new fromActions.LoadPaginationSuccess({ pages: [listingPagination, relistPagination, promotionPagination] })
      );
      return states;
      // return [
      //   new fromActions.LoadPaginationSuccess({ pages: [listingPagination, relistPagination, promotionPagination] }),
      //   new fromActions.LoadPromotionsSuccess({ promotions: response.result.data.items })
      // ];
    })
  );

  @Effect()
  loadAllCategories: Observable<Action> = this.actions
    .ofType(fromActions.AgencyActionTypes.LOAD_ALL_CATEGORIES)
    .map((action: any) => action.payload)
    .switchMap(() => {
      return this.agencyService
        .getCategories()
        .map((response: any) => {
          return new fromActions.LoadAllCategoriesSuccess({ categories: response.result.data });
        })
        .catch(error => {
          return of(new fromActions.Failure({ concern: 'CREATE', error: error }));
        });
    });

  @Effect()
  loadAllFacilities: Observable<any> = this.actions.ofType(fromActions.AgencyActionTypes.LOAD_ALL_FACILITIES).pipe(
    map((action: any) => action.payload),
    switchMap(() =>
      this.agencyService.getFacilities().pipe(
        map((response: any) => {
          let facilities = response.result.data.map(({ name, type, items }) => ({ name: name, id: type, sub: items }));
          return new fromActions.LoadAllFacilitiesSuccess({ facilities: facilities });
        }),
        catchError(error => of(error))
      )
    )
  );

  @Effect()
  loadExchangeRates: Observable<Action> = this.actions.pipe(
    ofType(fromActions.AgencyActionTypes.LOAD_EXCHANGE_RATE),
    // map((action: any) => action.payload),
    switchMap(() => this.agencyService.getExchangeRates('?fromCurrency=usd&toCurrency=vnd')),
    map((response: any) => {
      return new fromActions.LoadExchangeRateSuccess({ exchangeRates: response.result.data });
    })
  );

  @Effect()
  loadProjects: Observable<Action> = this.actions.pipe(
    ofType(fromActions.AgencyActionTypes.LOAD_PROJECTS),
    switchMap(() => this.agencyService.getProjects()),
    map((response: any) => {
      return new fromActions.LoadProjectsSuccess({ projects: response.result.data.items });
    })
  );

  @Effect()
  loadCities: Observable<Action> = this.actions.pipe(
    ofType(fromActions.AgencyActionTypes.LOAD_CITIES),
    switchMap(() => this.agencyService.getCities()),
    map((response: any) => {
      return new fromActions.LoadCitiesSuccess({ cities: response.result.data.items });
    })
  );

  @Effect()
  searchDistrictByCity: Observable<Action> = this.actions.pipe(
    ofType(fromActions.AgencyActionTypes.SEARCH_DISTRICT_BY_CITY),
    map((action: fromActions.SearchDistrictByCity) => action.payload),
    switchMap(payload => this.agencyService.getDistrictsByCity(payload)),
    map((response: any) => new fromActions.SearchDistrictByCitySuccess({ districts: response.result.data.items }))
  );

  @Effect()
  searchWardByDistrict: Observable<Action> = this.actions.pipe(
    ofType(fromActions.AgencyActionTypes.SEARCH_WARD_BY_DISTRICT),
    map((action: fromActions.SearchWardByDistrict) => action.payload),
    switchMap(payload => this.agencyService.getWardsByDistrict(payload)),
    map((response: any) => new fromActions.SearchWardByDistrictSuccess({ wards: response.result.data.items }))
  );

  @Effect()
  searchGeographyCodeByAddress: Observable<Action> = this.actions.pipe(
    ofType(fromActions.AgencyActionTypes.SEARCH_GEOGRAPHY_CODE_BY_ADDRESS),
    map((action: fromActions.SearchGeographyCodeByAddress) => action.payload),
    switchMap(payload => this.agencyService.getGeographyCodeByAddress(payload)),
    map((response: any) => {
      return new fromActions.SearchGeographyCodeByAddressSuccess({ geoCode: response });
    })
  );

  @Effect()
  loadPromotionsList: Observable<Action> = this.actions.pipe(
    ofType(fromActions.AgencyActionTypes.LOAD_PROMOTIONS),
    switchMap(() => this.agencyService.getPromotionsList()),
    map((response: any) => {
      return new fromActions.LoadPromotionsListSuccess({ promotions: response.result.data });
    })
  );

  @Effect()
  loadAgencyStaffs: Observable<Action> = this.actions.pipe(
    ofType(fromActions.AgencyActionTypes.LOAD_AGENCY_STAFFS),
    switchMap(() => this.agencyService.getAgencyStaffs()),
    map((response: any) => {
      return new fromActions.LoadAgencyStaffsSuccess({ agencyStaffs: response.result.data.items });
    })
  );

  @Effect()
  create: Observable<Action> = this.actions.pipe(
    ofType(fromActions.AgencyActionTypes.CREATE),
    map((action: fromActions.Create) => action.payload),
    switchMap(payload => this.agencyService.create(payload.agency)),
    map((createdAgency: Agency) => new fromActions.CreateSuccess({ agency: createdAgency })),
    catchError(err => {
      alert(err['error']['error']['message']);
      return of(new fromActions.Failure({ concern: 'CREATE', error: err }));
    })
  );
}
