import { createFeatureSelector } from '@ngrx/store';
import { ListingTotal } from '@app/modules/listing-agency/models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export function listingTotalReducer(state: ListingTotal = null, action: fromActions.All): any {
  switch (action.type) {
    case fromActions.AgencyActionTypes.LOAD_LISTING_TOTAL_SUCCESS:
      return Object.assign({}, state, action.payload.listingTotal);
    default: {
      return state;
    }
  }
}
export const selectAll = createFeatureSelector<any>('listingTotal');
