import { createFeatureSelector } from '@ngrx/store';
import { GeoCode } from '@app/modules/listing-agency/models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export function geoCodeReducer(state: GeoCode = null, action: fromActions.All): any {
  switch (action.type) {
    case fromActions.AgencyActionTypes.SEARCH_GEOGRAPHY_CODE_BY_ADDRESS_SUCCESS:
      return Object.assign({}, state, action.payload.geoCode);
    default: {
      return state;
    }
  }
}
export const selectAll = createFeatureSelector<any>('geoCode');

