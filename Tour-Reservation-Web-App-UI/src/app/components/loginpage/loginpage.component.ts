import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/common/models/user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  async login(usernameOrEmail: string, password: string) {
    await this.userService.login(usernameOrEmail, password);
  }
}
