import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { AgencyStaff } from '@app/modules/listing-agency/models/agency';
import * as fromActions from '@app/modules/listing-agency/store/actions';

export interface State extends EntityState<AgencyStaff> {
  isLoaded: boolean;
}
export const adapter: EntityAdapter<AgencyStaff> = createEntityAdapter<AgencyStaff>();
export const initialState: State = adapter.getInitialState({ isLoaded: false });
export function agencyStaffReducer(state = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.AgencyActionTypes.LOAD_AGENCY_STAFFS_SUCCESS:
      return adapter.addAll(action.payload.agencyStaffs, { ...state, isLoaded: true });
    default: {
      return state;
    }
  }
}

export const selectAgencyStaffsState = createFeatureSelector<State>('agencyStaffs');
export const { selectAll } = adapter.getSelectors(selectAgencyStaffsState);
