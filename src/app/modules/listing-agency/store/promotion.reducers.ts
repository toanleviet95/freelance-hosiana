import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Promotion } from '@app/modules/listing-agency/models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export interface State extends EntityState<Promotion> {
  isLoaded: boolean;
}
export const adapter: EntityAdapter<Promotion> = createEntityAdapter<Promotion>({ sortComparer: false });
export const initialState: State = adapter.getInitialState({ isLoaded: false });
export function promotionReducer(state = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.AgencyActionTypes.LOAD_PROMOTION_SUCCESS:
      return adapter.addAll(action.payload.promotions, { ...state, isLoaded: true });
    default: {
      return state;
    }
  }
}

export const selectPromotionState = createFeatureSelector<State>('promotions');
export const { selectAll } = adapter.getSelectors(selectPromotionState);
