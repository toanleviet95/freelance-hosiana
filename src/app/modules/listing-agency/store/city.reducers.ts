import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { City } from '@app/modules/listing-agency/models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export interface State extends EntityState<City> {
  isLoaded: boolean;
}
export const adapter: EntityAdapter<City> = createEntityAdapter<City>();
export const initialState: State = adapter.getInitialState({ isLoaded: false });
export function cityReducer(state = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.AgencyActionTypes.LOAD_CITIES_SUCCESS:
      return adapter.addAll(action.payload.cities, { ...state, isLoaded: true });
    default: {
      return state;
    }
  }
}

export const selectCitiesState = createFeatureSelector<State>('cities');
export const { selectAll } = adapter.getSelectors(selectCitiesState);
