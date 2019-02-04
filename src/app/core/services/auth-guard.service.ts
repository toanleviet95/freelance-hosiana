import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated() === true) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    this.router.navigateByUrl('/home');
    return false;
  }
}
