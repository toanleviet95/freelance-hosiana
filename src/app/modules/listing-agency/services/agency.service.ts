import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';
import { ApiBaseService } from '@core/services/api-base.service';
import {
  Agency,
  Category,
  Facility,
  ExchangeRate,
  Item,
  ItemFilter,
  City,
  District,
  Ward,
  PromotionList,
  Page,
  GeoCode,
  AgencyStaff
} from '../models/agency';
import GLOBAL from '@config/global';

@Injectable({
  providedIn: 'root'
})
export class AgencyService extends ApiBaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  static getListingType(): Item[] {
    const type = [{ id: 1, name: 'Residential' }, { id: 2, name: 'Commercial' }];

    return type;
  }
  static getServiceType(): Item[] {
    const type = [{ id: 1, name: 'Sale' }, { id: 2, name: 'Rent' }, { id: 3, name: 'Swap' }];

    return type;
  }

  static getListingTypeFilter(): ItemFilter[] {
    const first: ItemFilter = { id: 0, name: 'All', active: true };
    const type = [first, ...AgencyService.getListingType()];
    return type;
  }
  static getServiceTypeFilter(): ItemFilter[] {
    const first: ItemFilter = { id: 0, name: 'Service Type', active: true };
    const type = [first, ...AgencyService.getServiceType()];
    return type;
  }

  static getInitPages(): Page {
    const pages: Page = {
      activePage: 1,
      size: 4,
      totalElements: 0,
      displayPage: 6
    };
    return pages;
  }

  private buildQuery(params): any {
    const query = Object.keys(params)
      .filter(key => key !== 'page')
      .reduce((obj, key) => {
        obj[key] = params[key];
        return obj;
      }, {});
    query['limit'] = 4;
    if (params.page && params.page > 1) {
      query['offset'] = (params.page - 1) * AgencyService.getInitPages().size;
    }
    return query;
  }

  getListings(params): Observable<any> {
    // let query = { ...params, limit: limit };
    // let query = Object.keys(params)
    //   .filter(key => key !== 'page')
    //   .reduce((obj, key) => {
    //     obj[key] = params[key];
    //     return obj;
    //   }, {});
    // if (params.page && params.page > 1) {
    //   query['offset'] = (params.page - 1) * AgencyService.getInitPages().size;
    // }
    return super.get('/listings/pro', { params: this.buildQuery(params) });
  }

  getRelists(params): Observable<any> {
    return super.get('/listings/pro/relist', { params: this.buildQuery(params) });
  }

  getPromotions(params): Observable<any> {
    return super.get('/listings/pro/promotion', { params: this.buildQuery(params) });
  }

  getCategories(): Observable<Category[]> {
    return super.get('/listings/categories');
  }

  getFacilities(): Observable<Facility[]> {
    return super.get('/facilities');
  }

  getExchangeRates(params: string): Observable<ExchangeRate> {
    return super.get(`/exchange-rates${params}`);
  }

  getProjects(): Observable<Item[]> {
    return super.get('/projects/pro');
  }

  getCities(): Observable<City[]> {
    return super.get('/cities');
  }

  getDistrictsByCity(cityId: string): Observable<District[]> {
    return super.get(`/districts?city=${cityId}`);
  }

  getWardsByDistrict(districtId: string): Observable<Ward[]> {
    return super.get(`/wards?district=${districtId}`);
  }

  getGeographyCodeByAddress(address: string): Observable<GeoCode> {
    return Observable.create(observer => {
      axios
        .get(`${GLOBAL.apiGoogle}/geocode/json?address=${address}&key=${GLOBAL.apiGoogleKeyApp}`)
        .then(response => {
          const data = response.data;
          if (data.results) {
            const location = data.results[data.results.length - 1];
            const addressResult = location
              ? { displayPosition: location.geometry.location, address: location.formatted_address }
              : { displayPosition: {}, address: '' };
            observer.next(addressResult);
            observer.complete();
          } else {
            observer.next({ displayPosition: {}, address: '' });
            observer.complete();
          }
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  getPromotionsList(): Observable<PromotionList[]> {
    return super.get('/packages/promotion');
  }

  create(agency: Agency): Observable<Agency> {
    return super.post('/listings', agency);
  }

  getAgencyStaffs(): Observable<AgencyStaff[]> {
    return super.get('/agency-staff');
  }
}
