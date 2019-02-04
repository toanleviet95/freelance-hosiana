import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Item } from '@app/modules/listing-agency/models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export interface State extends EntityState<Item> {
  isLoaded: boolean;
}
export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>();
export const initialState: State = adapter.getInitialState({ isLoaded: false });
export function projectReducer(state = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.AgencyActionTypes.LOAD_PROJECTS_SUCCESS:
      return adapter.addAll(action.payload.projects, { ...state, isLoaded: true });
    default: {
      return state;
    }
  }
}

export const selectProjectsState = createFeatureSelector<State>('projects');
export const { selectAll } = adapter.getSelectors(selectProjectsState);
