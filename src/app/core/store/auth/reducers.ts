import { AuthActionTypes, All } from './actions';
export interface State {
  isAuthenticated: boolean;
  user: any | null;
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function authReducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }
    // case AuthActionTypes.LOGOUT: {
    //   return initialState;
    // }
    // case AuthActionTypes.SIGNUP_SUCCESS: {
    //   return {
    //     ...state,
    //     errorMessage: null
    //   };
    // }
    // case AuthActionTypes.SIGNUP_FAILURE: {
    //   return {
    //     ...state,
    //     errorMessage: 'Sign up failed'
    //   };
    // }
    default: {
      return state;
    }
  }
}
