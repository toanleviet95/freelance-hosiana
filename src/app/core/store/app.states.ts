import { createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store'; // To do move MetaReducer
import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
// import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '@env/environment';
// import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
// import { debug } from './meta-reducers/debug.reducer';

import * as auth from '@core/store/auth/reducers';
import * as setting from '@core/store/settings/reducers';

export interface AppState {
  authState: auth.State;
  settingState: setting.State;
}

export const reducers = {
  auth: auth.authReducer,
  setting: setting.settingReducer,
  router: routerReducer
};

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const selectAuthState = createFeatureSelector<AppState>('auth'); // move to auth???
// export const getAgenciesState = createFeatureSelector<AppState>('agencies');

// const customStorage: Storage = {
//   length: 0,
//   clear: function(): void {
//     if (window && window.localStorage) {
//       window.localStorage.clear();
//       this.length = window.localStorage.length;
//     }
//   },
//   getItem: function(key: string): string | null {
//     try {
//       return window.localStorage.getItem(key);
//     } catch {
//       return null;
//     }
//   },
//   key: function(index: number): string | null {
//     try {
//       return window.localStorage.key(index);
//     } catch {
//       return null;
//     }
//   },
//   removeItem: function(key: string): void {
//     try {
//       window.localStorage.removeItem(key);
//       this.length = window.localStorage.length;
//     } catch {
//       return;
//     }
//   },
//   setItem: function(key: string, data: string): void {
//     try {
//       window.localStorage.setItem(key, data);
//       this.length = window.localStorage.length;
//     } catch {
//       return;
//     }
//   }
// };
// export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
//   return localStorageSync({ keys: [{ auth: ["token"] }, { shopping_cart: ["products"] }], rehydrate: true, storage: customStorage })(reducer);
// }
// export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
//   return localStorageSync({ keys: ['auth'], rehydrate: true, storage: customStorage })(reducer);
// }
// export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

// export const metaReducers: MetaReducer<any>[] = [initStateFromLocalStorage];
// if (!environment.production) {
//   metaReducers.unshift(storeFreeze);
//   // if (!environment.test) {
//   // metaReducers.unshift(debug);
//   // }
// }
