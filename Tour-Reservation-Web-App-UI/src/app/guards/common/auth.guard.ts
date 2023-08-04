import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { _isAuthenticated } from 'src/app/services/common/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private jwtHelper: JwtHelperService,  private toastr: ToastrService, private router: Router) {

  }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!_isAuthenticated) {
      this.router.navigate(["login"], { queryParams: { returnUrl: state.url } });
      this.toastr.warning("Giriş Yapınız")
      this.toastr.error("Yetkisiz Erişim")  
      
    }
 
    return true;
  }
  
};
