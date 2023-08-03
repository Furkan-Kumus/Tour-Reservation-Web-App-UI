import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { _isAuthenticated } from 'src/app/services/common/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private jwtHelper: JwtHelperService, /* private toastrService: CustomToastrService, */ private router: Router) {

  }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!_isAuthenticated) {
      this.router.navigate(["login"], { queryParams: { returnUrl: state.url } });
    // this.toastrService.message("Oturum açmanız gerekiyor!", "Yetkisiz Erişim!", {        messageType: ToastrMessageType.Warning,        position: ToastrPosition.TopRight })
    
    }
 
    return true;
  }
  
};
