import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, switchMap, concatMap, flatMap, filter } from 'rxjs/operators';
// import 'rxjs/add/operator/switchMap';

import * as JsEncryptModule from 'jsencrypt';
const encrypt = new JsEncryptModule.JSEncrypt();

import { ApiBaseService } from '@core/services/api-base.service';
// import { environment } from '@env/environment';
// const BASE_URL = environment.apiUrl;

import { LocalStorageService } from 'ngx-webstorage';
import { AUTH_KEY } from '@core/store/auth/actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiBaseService {
  // constructor(private http: HttpClient, private localSt: LocalStorageService) {}
  constructor(http: HttpClient, private localSt: LocalStorageService) {
    super(http);
  }

  // getUserId(): string {
  //   const authData = this.localSt.retrieve(AUTH_KEY);
  //   // console.log('getUserId: ', authData, typeof authData);
  //   return '';
  // }

  isAuthenticated(): boolean {
    const authData = this.localSt.retrieve(AUTH_KEY);
    if (authData) {
      return Date.now() < authData.created + authData.timeToLive * 1000;
    }

    return false;
  }

  getToken(): string {
    const authData = this.localSt.retrieve(AUTH_KEY);
    if (authData) {
      return authData.token;
    }

    return '';
  }

  logIn(email: string, password: string): Observable<any> {
    return super.get('/unauth/get-key').pipe(
      switchMap((data: any) => {
        const publicKey = data.result.data.publicKey;
        encrypt.setPublicKey(publicKey);
        const passwordEncrypted = encrypt.encrypt(password);
        return super.post('/users/login', { email: email, password: passwordEncrypted });
      })
    );
  }

  logOut(): Observable<any> {
    return super.get('/users/logout');
  }

  // logIn(email: string, password: string): Observable<any> {
  //   const keyUrl = `${BASE_URL}/unauth/get-key`,
  //     loginUrl = `${BASE_URL}/users/login`;

  //   return this.http.get(keyUrl).switchMap((data: any) => {
  //     const publicKey = data.result.data.publicKey;
  //     encrypt.setPublicKey(publicKey);
  //     const passwordEncrypted = encrypt.encrypt(password);
  //     // console.log('passwordEncrypted: ', passwordEncrypted);
  //     return this.http.post<any>(loginUrl, { email: email, password: passwordEncrypted });
  //   });

  //   // const loginUrl = `${BASE_URL}/users/login`;
  //   // // return this.http.post<any>(url, { email, password });
  //   // return this.http.post<User>(loginUrl, { email, password });
  // }

  // signUp(data: any): Observable<User> {
  //   const url = `${BASE_URL}/api/user/register`;
  //   return this.http.post<User>(url, data);
  // }
}
