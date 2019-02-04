import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Relist } from '@app/modules/listing-agency/models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export interface State extends EntityState<Relist> {
  isLoaded: boolean;
}
export const adapter: EntityAdapter<Relist> = createEntityAdapter<Relist>({ sortComparer: false });
export const initialState: State = adapter.getInitialState({ isLoaded: false });
export function relistReducer(state = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.AgencyActionTypes.LOAD_RELIST_SUCCESS:
      return adapter.addAll(action.payload.relists, { ...state, isLoaded: true });
    default: {
      return state;
    }
  }
}

export const selectRelistState = createFeatureSelector<State>('relists');
export const { selectAll } = adapter.getSelectors(selectRelistState);
