import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Agency } from '../models/agency';
import * as fromActions from '../store/actions';

export const adapter: EntityAdapter<Agency> = createEntityAdapter<Agency>({
  selectId: (agency: Agency) => agency.id,
  sortComparer: false
});

export interface State extends EntityState<Agency> {
  currentAgencyId?: number;
}
export const initialState: State = adapter.getInitialState({ currentAgencyId: undefined });

export function agencyReducer(state = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.AgencyActionTypes.CREATE_SUCCESS:
      return adapter.addOne(action.payload.agency, { ...state });
    // case fromActions.AgencyActionTypes.SearchComplete: {
    //   /**
    //    * The addMany function provided by the created adapter
    //    * adds many records to the entity dictionary
    //    * and returns a new state including those records. If
    //    * the collection is to be sorted, the adapter will
    //    * sort each record upon entry into the sorted array.
    //    */
    //   return adapter.addMany(action.payload, {
    //     ...state,
    //     // selectedAgencyId: state.selectedAgencyId
    //   });
    // }

    // case fromActions.AgencyActionTypes.Load: {
    //   /**
    //    * The addOne function provided by the created adapter
    //    * adds one record to the entity dictionary
    //    * and returns a new state including that records if it doesn't
    //    * exist already. If the collection is to be sorted, the adapter will
    //    * insert the new record into the sorted array.
    //    */
    //   return adapter.addOne(action.payload, {
    //     ...state,
    //     // selectedAgencyId: state.selectedAgencyId
    //   });
    // }

    // case fromActions.AgencyActionTypes.Select: {
    //   return state;
    //   // return {
    //   //   ...state,
    //   //   selectedAgencyId: action.payload
    //   // };
    // }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
// export const getSelectedId = (state: State) => state.selectedAgencyId;

// Create the default selectors
/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getAgenciesState = createFeatureSelector<State>('agencies');
export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors(getAgenciesState);
