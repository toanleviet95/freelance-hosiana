import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Listing } from '@app/modules/listing-agency/models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export interface State extends EntityState<Listing> {
  isLoaded: boolean;
}
export const adapter: EntityAdapter<Listing> = createEntityAdapter<Listing>({ sortComparer: false });
export const initialState: State = adapter.getInitialState({
  isLoaded: false
});
export function listingReducer(state = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.AgencyActionTypes.LOAD_LISTING_SUCCESS:
      return adapter.addAll(action.payload.listings, { ...state, isLoaded: true });
    default: {
      return state;
    }
  }
}

export const selectListingsState = createFeatureSelector<State>('listings');
export const { selectAll } = adapter.getSelectors(selectListingsState);
