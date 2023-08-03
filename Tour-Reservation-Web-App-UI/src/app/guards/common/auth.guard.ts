import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    return true;
  }

  
};
