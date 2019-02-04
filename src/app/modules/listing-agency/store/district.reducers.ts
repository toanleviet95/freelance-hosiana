import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { District } from '@app/modules/listing-agency/models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export interface State extends EntityState<District> {
  isLoaded: boolean;
}
export const adapter: EntityAdapter<District> = createEntityAdapter<District>();
export const initialState: State = adapter.getInitialState({ isLoaded: false });
export function districtReducer(state = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.AgencyActionTypes.SEARCH_DISTRICT_BY_CITY_SUCCESS:
      return adapter.addAll(action.payload.districts, { ...state, isLoaded: true });
    default: {
      return state;
    }
  }
}

export const selectDistrictsState = createFeatureSelector<State>('districts');
export const { selectAll } = adapter.getSelectors(selectDistrictsState);
