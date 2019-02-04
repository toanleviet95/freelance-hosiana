// import { User } from '@core/models/user';

import { SettingActionTypes, All } from './actions';

export interface State {
  language: string;
}

export const initialState: State = {
  language: 'en'
};

export function settingReducer(state = initialState, action: All): State {
  switch (action.type) {
    case SettingActionTypes.CHANGE_LANG: {
      return {
        ...state,
        language: action.payload.language
      };
    }
    case SettingActionTypes.PERSIST: {
      return {
        ...state,
        language: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
