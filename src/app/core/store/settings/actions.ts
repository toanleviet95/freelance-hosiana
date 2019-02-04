import { Action } from '@ngrx/store';

export const SETTINGS_KEY = 'SETTINGS';

export enum SettingActionTypes {
  CHANGE_LANG = '[Settings] Change Lang',
  CHANGE_THEME = '[Settings] Change Theme',
  PERSIST = '[Settings] Persist'
}

export class ChangeLang implements Action {
  readonly type = SettingActionTypes.CHANGE_LANG;
  constructor(public payload: any) {}
}

export class Persist implements Action {
  readonly type = SettingActionTypes.PERSIST;
  constructor(public payload: any) {}
}

export type All = ChangeLang | Persist;
