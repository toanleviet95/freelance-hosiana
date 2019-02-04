import { Action } from '@ngrx/store';

export const AUTH_KEY = 'AUTH';
export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  SIGNUP = '[Auth] Signup',
  SIGNUP_SUCCESS = '[Auth] Signup Success',
  SIGNUP_FAILURE = '[Auth] Signup Failure',
  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_FAILURE = '[Auth] Logout Failure',
  GET_STATUS = '[Auth] GetStatus' // unused
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(readonly payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(readonly payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(readonly payload: any) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGNUP;
  constructor(readonly payload: any) {}
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(readonly payload: any) {}
}

export class SignUpFailure implements Action {
  readonly type = AuthActionTypes.SIGNUP_FAILURE;
  constructor(readonly payload: any) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
  constructor(readonly payload: any) {}
}

export class LogOutSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;
  constructor(readonly payload: any) {}
}

export class LogOutFailure implements Action {
  readonly type = AuthActionTypes.LOGOUT_FAILURE;
  constructor(readonly payload: any) {}
}

export class GetStatus implements Action {
  readonly type = AuthActionTypes.GET_STATUS;
}

// export type All = LogInSuccess | LogInFailure | SignUpSuccess | SignUpFailure | LogOut | GetStatus;
export type All = LogInSuccess | LogInFailure | LogOutSuccess | LogOutFailure;
