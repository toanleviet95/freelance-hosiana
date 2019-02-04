import { Action } from '@ngrx/store';
import {
  Listing,
  Relist,
  Promotion,
  ListingTotal,
  Page,
  Agency,
  Category,
  Facility,
  ExchangeRate,
  Item,
  City,
  District,
  Ward,
  GeoCode,
  PromotionList,
  AgencyStaff
} from '../models/agency';

export enum AgencyActionTypes {
  FAILURE = '[Agency] Failure',
  LOAD_LISTING_SUCCESS = '[Agency] Load Listings Success',
  LOAD_RELIST_SUCCESS = '[Agency] Load Relist Success',
  LOAD_PROMOTION_SUCCESS = '[Agency] Load Promotion Success',
  LOAD_LISTING_TOTAL_SUCCESS = '[Agency] Load Listing Total Success',
  LOAD_PAGINATION_SUCCESS = '[Agency] Load Pagination Success',
  LOAD_ALL_CATEGORIES = '[Agency] Load All Categories',
  LOAD_ALL_CATEGORIES_SUCCESS = '[Agency] Load All Categories Success',
  LOAD_ALL_FACILITIES = '[Agency] Load All Facilities',
  LOAD_ALL_FACILITIES_SUCCESS = '[Agency] Load All Facilities Success',
  LOAD_EXCHANGE_RATE = '[Agency] Load Exchange Rate',
  LOAD_EXCHANGE_RATE_SUCCESS = '[Agency] Load Exchange Rate Success',
  LOAD_PROJECTS = '[Agency] Load Projects',
  LOAD_PROJECTS_SUCCESS = '[Agency] Load Projects Success',
  LOAD_CITIES = '[Agency] Load Cities',
  LOAD_CITIES_SUCCESS = '[Agency] Load Cities Success',
  SEARCH_DISTRICT_BY_CITY = '[Agency] Search District By City',
  SEARCH_DISTRICT_BY_CITY_SUCCESS = '[Agency] Search District By City Success',
  SEARCH_WARD_BY_DISTRICT = '[Agency] Search Ward By District',
  SEARCH_WARD_BY_DISTRICT_SUCCESS = '[Agency] Search Ward By District Success',
  SEARCH_GEOGRAPHY_CODE_BY_ADDRESS = '[Agency] Search Geography Code By Address',
  SEARCH_GEOGRAPHY_CODE_BY_ADDRESS_SUCCESS = '[Agency] Search Geography Code By Address Success',
  LOAD_PROMOTIONS = '[Agency] Load Promotions List',
  LOAD_PROMOTIONS_SUCCESS = '[Agency] Load Promotions List Success',
  LOAD_AGENCY_STAFFS = '[Agency] Load Agency Staffs',
  LOAD_AGENCY_STAFFS_SUCCESS = '[Agency] Load Agency Staffs Success',
  CREATE = '[Agency] Create',
  CREATE_SUCCESS = '[Agency] Create Success'
}

export class Failure implements Action {
  readonly type = AgencyActionTypes.FAILURE;
  constructor(public payload: { concern: 'CREATE' | 'PATCH'; error: any }) {}
}
export class LoadListingsSuccess implements Action {
  readonly type = AgencyActionTypes.LOAD_LISTING_SUCCESS;
  constructor(readonly payload: { listings: Listing[] }) {}
}
export class LoadRelistSuccess implements Action {
  readonly type = AgencyActionTypes.LOAD_RELIST_SUCCESS;
  constructor(readonly payload: { relists: Relist[] }) {}
}
export class LoadPromotionsSuccess implements Action {
  readonly type = AgencyActionTypes.LOAD_PROMOTION_SUCCESS;
  constructor(readonly payload: { promotions: Promotion[] }) {}
}
export class LoadListingTotalSuccess implements Action {
  readonly type = AgencyActionTypes.LOAD_LISTING_TOTAL_SUCCESS;
  constructor(readonly payload: { listingTotal: ListingTotal }) {}
}
export class LoadPaginationSuccess implements Action {
  readonly type = AgencyActionTypes.LOAD_PAGINATION_SUCCESS;
  constructor(readonly payload: { pages: Page[] }) {}
}
export class LoadAllCategories implements Action {
  readonly type = AgencyActionTypes.LOAD_ALL_CATEGORIES;
}
export class LoadAllCategoriesSuccess implements Action {
  readonly type = AgencyActionTypes.LOAD_ALL_CATEGORIES_SUCCESS;
  constructor(readonly payload: { categories: Category[] }) {}
}
export class LoadAllFacilities implements Action {
  readonly type = AgencyActionTypes.LOAD_ALL_FACILITIES;
}
export class LoadAllFacilitiesSuccess implements Action {
  readonly type = AgencyActionTypes.LOAD_ALL_FACILITIES_SUCCESS;
  constructor(readonly payload: { facilities: Facility[] }) {}
}
export class LoadExchangeRate implements Action {
  readonly type = AgencyActionTypes.LOAD_EXCHANGE_RATE;
}
export class LoadExchangeRateSuccess implements Action {
  readonly type = AgencyActionTypes.LOAD_EXCHANGE_RATE_SUCCESS;
  constructor(readonly payload: { exchangeRates: ExchangeRate }) {}
}
export class LoadProjects implements Action {
  readonly type = AgencyActionTypes.LOAD_PROJECTS;
}
export class LoadProjectsSuccess implements Action {
  readonly type = AgencyActionTypes.LOAD_PROJECTS_SUCCESS;
  constructor(readonly payload: { projects: Item[] }) {}
}
export class LoadCities implements Action {
  readonly type = AgencyActionTypes.LOAD_CITIES;
}
export class LoadCitiesSuccess implements Action {
  readonly type = AgencyActionTypes.LOAD_CITIES_SUCCESS;
  constructor(readonly payload: { cities: City[] }) {}
}
export class SearchDistrictByCity implements Action {
  readonly type = AgencyActionTypes.SEARCH_DISTRICT_BY_CITY;
  constructor(public payload: string) {}
}
export class SearchDistrictByCitySuccess implements Action {
  readonly type = AgencyActionTypes.SEARCH_DISTRICT_BY_CITY_SUCCESS;
  constructor(public payload: { districts: District[] }) {}
}
export class SearchWardByDistrict implements Action {
  readonly type = AgencyActionTypes.SEARCH_WARD_BY_DISTRICT;
  constructor(public payload: string) {}
}
export class SearchWardByDistrictSuccess implements Action {
  readonly type = AgencyActionTypes.SEARCH_WARD_BY_DISTRICT_SUCCESS;
  constructor(public payload: { wards: Ward[] }) {}
}
export class SearchGeographyCodeByAddress implements Action {
  readonly type = AgencyActionTypes.SEARCH_GEOGRAPHY_CODE_BY_ADDRESS;
  constructor(public payload: string) {}
}
export class SearchGeographyCodeByAddressSuccess implements Action {
  readonly type = AgencyActionTypes.SEARCH_GEOGRAPHY_CODE_BY_ADDRESS_SUCCESS;
  constructor(public payload: { geoCode: GeoCode }) {}
}
export class LoadPromotions implements Action {
  readonly type = AgencyActionTypes.LOAD_PROMOTIONS;
}
export class LoadPromotionsListSuccess implements Action {
  readonly type = AgencyActionTypes.LOAD_PROMOTIONS_SUCCESS;
  constructor(readonly payload: { promotions: PromotionList[] }) {}
}
export class LoadAgencyStaffs implements Action {
  readonly type = AgencyActionTypes.LOAD_AGENCY_STAFFS;
}
export class LoadAgencyStaffsSuccess implements Action {
  readonly type = AgencyActionTypes.LOAD_AGENCY_STAFFS_SUCCESS;
  constructor(readonly payload: { agencyStaffs: AgencyStaff[] }) {}
}
export class Create implements Action {
  readonly type = AgencyActionTypes.CREATE;
  constructor(public payload: { agency: Agency }) {}
}
export class CreateSuccess implements Action {
  readonly type = AgencyActionTypes.CREATE_SUCCESS;
  constructor(public payload: { agency: Agency }) {}
}

export type All =
  | Failure
  | LoadListingsSuccess
  | LoadRelistSuccess
  | LoadPromotionsSuccess
  | LoadListingTotalSuccess
  | LoadPaginationSuccess
  | LoadAllCategoriesSuccess
  | LoadAllFacilitiesSuccess
  | LoadExchangeRateSuccess
  | LoadProjectsSuccess
  | LoadCitiesSuccess
  | SearchDistrictByCitySuccess
  | SearchWardByDistrictSuccess
  | SearchGeographyCodeByAddressSuccess
  | LoadPromotionsListSuccess
  | LoadAgencyStaffsSuccess
  | Create
  | CreateSuccess;
