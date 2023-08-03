import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/common/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(public authService:AuthService,private router: Router){authService.identityCheck();}signOut() {localStorage.removeItem("accessToken");this.authService.identityCheck();this.router.navigate([""]);}  

}
