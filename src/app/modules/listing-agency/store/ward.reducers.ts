import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Ward } from '@app/modules/listing-agency/models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export interface State extends EntityState<Ward> {
  isLoaded: boolean;
}
export const adapter: EntityAdapter<Ward> = createEntityAdapter<Ward>();
export const initialState: State = adapter.getInitialState({ isLoaded: false });
export function wardReducer(state = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.AgencyActionTypes.SEARCH_WARD_BY_DISTRICT_SUCCESS:
      return adapter.addAll(action.payload.wards, { ...state, isLoaded: true });
    default: {
      return state;
    }
  }
}

export const selectWardsState = createFeatureSelector<State>('wards');
export const { selectAll } = adapter.getSelectors(selectWardsState);
