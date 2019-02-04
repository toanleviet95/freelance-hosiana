import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Category } from '../models/agency';
import * as fromActions from '../store/actions';

export interface State extends EntityState<Category> {
  isLoaded: boolean;
}

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>();

export const initialState: State = adapter.getInitialState({ isLoaded: false });

export function categoryReducer(state = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.AgencyActionTypes.LOAD_ALL_CATEGORIES_SUCCESS:
      return adapter.addAll(action.payload.categories, { ...state, isLoaded: true });
    default: {
      return state;
    }
  }
}

export const selectCategoriesState = createFeatureSelector<State>('categories');
export const { selectAll } = adapter.getSelectors(selectCategoriesState);
// export const { selectAll, selectEntities, selectIds selectTotal } = adapter.getSelectors(selectCategoriesState);
