import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Post } from '@core/models/index';

@Injectable()
export class AgencyResolverService {

  constructor(private store: Store<any>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any/* Observable<Post> */ {
    // const courseId = route.params['id'];
    // console.log('route.params id: ', courseId);
    // console.log('route.params page: ', route.params['page']);
  }
}
