import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Facility } from '@app/modules/listing-agency/models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export interface State extends EntityState<Facility> {
  isLoaded: boolean;
}
export const adapter: EntityAdapter<Facility> = createEntityAdapter<Facility>();
export const initialState: State = adapter.getInitialState({ isLoaded: false });
export function facilityReducer(state = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.AgencyActionTypes.LOAD_ALL_FACILITIES_SUCCESS:
      return adapter.addAll(action.payload.facilities, { ...state, isLoaded: true });
    default: {
      return state;
    }
  }
}

export const selectFacilitiesState = createFeatureSelector<State>('facilities');
export const { selectAll, selectEntities } = adapter.getSelectors(selectFacilitiesState);
