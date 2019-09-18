import { Injectable} from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {AuthService} from '../../services/authservice/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.authService.isLoggedIn){
            return true
        }

        this.authService.redirectUrl = state.url;
        this.router.navigate(["login"])
    }
}

/**
 * If the user is already logged in, and attempts to navigate to /login, then redirect them to home.
 */

@Injectable()
export class alreadyLoggedIn implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}