// import { createFeatureSelector } from '@ngrx/store';
// import { Page } from '../models/agency';
// import * as fromActions from '@app/modules/listing-agency/store/actions';

// export function listingPaginationReducer(state: Page, action: fromActions.All): any {
//   switch (action.type) {
//     case fromActions.AgencyActionTypes.LOAD_PAGINATION_SUCCESS:
//       return Object.assign({}, state, action.payload.pages);
//     default: {
//       return state;
//     }
//   }
// }
// export const selectAll = createFeatureSelector<any>('pages');

import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Page } from '@app/modules/listing-agency/models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export interface State extends EntityState<Page> {
  isLoaded: boolean;
}
export const adapter: EntityAdapter<Page> = createEntityAdapter<Page>();
export const initialState: State = adapter.getInitialState({ isLoaded: false });
export function paginationReducer(state = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.AgencyActionTypes.LOAD_PAGINATION_SUCCESS:
      return adapter.addAll(action.payload.pages, { ...state, isLoaded: true });
    default: {
      return state;
    }
  }
}

export const selectPaginationState = createFeatureSelector<State>('pages');
export const { selectAll, selectEntities, selectIds } = adapter.getSelectors(selectPaginationState);
