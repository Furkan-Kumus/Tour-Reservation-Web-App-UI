import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { _isAuthenticated } from 'src/app/services/common/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private jwtHelper: JwtHelperService, private router: Router) {

  }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

  /* const token: string = localStorage.getItem("accessToken");

  let expired: boolean;
    try {
      expired = this.jwtHelper.isTokenExpired(token);
    } catch {
      expired = true;
    } */


    if (!_isAuthenticated) {
      this.router.navigate(["login"], { queryParams: { returnUrl: state.url } });
    }
 
    

    return true;
  }
 
  //navbar html li içine ekle       *ngIf="!authService.isAuthenticated"
  //navbar html ekle                <li><a style="color:red;cursor:pointer;" (click)="signOut()" *ngIf="authService.isAuthenticated"><i class="fa fa-sign-out"></i> Çıkış Yap</a></li>
  //navbar ts                       constructor(public authService:AuthService,private router: Router){authService.identityCheck();}signOut() {localStorage.removeItem("accessToken");this.authService.identityCheck();this.router.navigate([""]);}  

  
};
