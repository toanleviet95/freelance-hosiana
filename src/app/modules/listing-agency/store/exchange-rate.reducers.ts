import { createFeatureSelector } from '@ngrx/store';
import { ExchangeRate } from '../models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export function exchangeRateReducer(state: ExchangeRate = null, action: fromActions.All): any {
  switch (action.type) {
    case fromActions.AgencyActionTypes.LOAD_EXCHANGE_RATE_SUCCESS:
      return Object.assign({}, state, action.payload.exchangeRates)
    default: {
      return state;
    }
  }
}
export const selectAll = createFeatureSelector<any>('exchangeRates');
