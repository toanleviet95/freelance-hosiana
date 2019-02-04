import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';

import * as fromActions from '@core/store/auth/actions';
import { AuthService } from '@core/services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private localSt: LocalStorageService,
    private router: Router
  ) {}

  @Effect()
  logIn: Observable<any> = this.actions.pipe(
    ofType(fromActions.AuthActionTypes.LOGIN),
    map((action: fromActions.LogIn) => action.payload),
    switchMap(payload => {
      return this.authService.logIn(payload.email, payload.password).pipe(
        map(user => new fromActions.LogInSuccess({ user })),
        catchError(error => {
          return of(new fromActions.LogInFailure({ error: error }));
        })
      );
    })
  );

  @Effect({ dispatch: false }) // no emit something
  logInSuccess: Observable<Action> = this.actions.pipe(
    ofType(fromActions.AuthActionTypes.LOGIN_SUCCESS),
    tap((action: any) => {
      let now = Date.now();
      const data = Object.assign({}, action.payload.user.result.data, { created: now });
      // data.timeToLive = 5;
      this.localSt.store(fromActions.AUTH_KEY, data);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  logInFailure: Observable<Action> = this.actions.pipe(
    ofType(fromActions.AuthActionTypes.LOGIN_FAILURE)
  );

  @Effect()
  logOut: Observable<any> = this.actions.ofType(fromActions.AuthActionTypes.LOGOUT).pipe(
    map((action: fromActions.LogOut) => action.payload),
    switchMap(payload => {
      this.localSt.clear(fromActions.AUTH_KEY);
      this.router.navigateByUrl('/home');
      return this.authService.logOut().pipe(
        map(result => {
          return new fromActions.LogOutSuccess({ islogOut: true })
        }),
        catchError(error => {
          return of(new fromActions.LogOutFailure({}));
        })
      );
    }
  ));

  @Effect({ dispatch: false }) // no emit something
  logOutSuccess: Observable<Action> = this.actions.pipe(
    ofType(fromActions.AuthActionTypes.LOGOUT_SUCCESS),
    tap((action: any) => {
      // this.localSt.clear();
      // this.router.navigateByUrl('/home');
    })
  );

  @Effect({ dispatch: false })
  logOutFailure: Observable<Action> = this.actions.pipe(
    ofType(fromActions.AuthActionTypes.LOGOUT_FAILURE),
    tap(action => {
      // this.localSt.clear();
      // this.router.navigateByUrl('/home');
    })
  );

  // @Effect()
  // singUp: Observable<any> = this.actions
  //   .ofType(AuthActionTypes.SIGNUP)
  //   .map((action: SignUp) => action.payload)
  //   .switchMap(payload => {
  //     return this.authService
  //       .signUp(payload)
  //       .map(user => {
  //         setTimeout(() => {
  //           this.router.navigate(['']);
  //         }, 3000);
  //         return new SignUpSuccess({ data: user });
  //       })
  //       .catch(err => {
  //         return Observable.of(new SignUpFailure({ error: err }));
  //       });
  //   });
}
