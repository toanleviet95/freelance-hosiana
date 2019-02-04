import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { PromotionList } from '@app/modules/listing-agency/models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export interface State extends EntityState<PromotionList> {
  isLoaded: boolean;
}
export const adapter: EntityAdapter<PromotionList> = createEntityAdapter<PromotionList>();
export const initialState: State = adapter.getInitialState({ isLoaded: false });
export function promotionListReducer(state = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.AgencyActionTypes.LOAD_PROMOTIONS_SUCCESS:
      return adapter.addAll(action.payload.promotions, { ...state, isLoaded: true });
    default: {
      return state;
    }
  }
}

export const selectPromotionsState = createFeatureSelector<State>('promotionList');
export const { selectAll } = adapter.getSelectors(selectPromotionsState);
