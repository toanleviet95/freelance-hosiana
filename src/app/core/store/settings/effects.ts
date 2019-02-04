import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
// import { switchMap, map, filter } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

import * as SettingActions from './actions';
import { TranslateService } from '@ngx-translate/core';
// import { LocalStorageService } from '@core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SettingEffects {
  constructor(
    private actions: Actions,
    private translate: TranslateService
  ) // private localStorageService: LocalStorageService
  {}

  @Effect({ dispatch: false })
  persistSettings = this.actions.pipe(
    ofType(SettingActions.SettingActionTypes.CHANGE_LANG),
    tap((action: SettingActions.ChangeLang) => {
      // this.translate.setDefaultLang(action.payload.language);
      this.translate.use(action.payload.language);
      // this.localStorageService.setItem(SettingActions.SETTINGS_KEY, {
      //     language: action.payload.language,
      // });
    })
  );
}
