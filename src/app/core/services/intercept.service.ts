import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/catch';
// import { catchError, tap } from 'rxjs/operators';
import { AppInitService, AuthService } from '../services';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  private appInitService: AppInitService;
  private authService: AuthService;
  constructor(private injector: Injector) {}
  // intercept header request and add token
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.appInitService = this.injector.get(AppInitService);
    this.authService = this.injector.get(AuthService);

    let headers = {
      locale: 'en',
      deviceid: this.appInitService.getMacAddr(),
      apptoken: '2mqK7VPDqjLGG9lz2L7AvqfdEdCyIott8SoqC7oAnuI6wg3O9GQnHa0l2jA24j6j'
    };
    if (!request.url.endsWith('/unauth/get-key') && !request.url.endsWith('/users/login')) {
      headers = Object.assign(headers, { Authorization: `Bearer ${this.authService.getToken()}` });
    }
    request = request.clone({
      setHeaders: headers
    });
    return next.handle(request);
  }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).catch((response: any) => {
      // TODO: WAIT API FIX ERR 500, REMOVE CATCH BODY
      if (
        response instanceof HttpErrorResponse &&
        (response.status === 401 || (response.status === 500 && response.error.error.error.statusCode && response.error.error.error.statusCode === 401))
      ) {
        this.router.navigateByUrl('/home');
      }
      // return Observable.throw(response);
      return of();
    });
  }
}
