

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Create_User } from 'src/app/contracts/users/create_user';
import { user } from 'src/app/entities/user';
import { UserService } from 'src/app/services/common/models/user.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})

export class RegisterpageComponent implements OnInit{

  constructor(
    private formBuilder: FormBuilder, 
    private userService:UserService){}
  
  frm : FormGroup;
  
  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      NameSurname: ["", [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      Username: [""],
      Email: [""],
      Password: [""]
    })

  }

  get component(){
    return this.frm.controls; //37.video dk37 yap validations
  }

  submitted: boolean = false;
  async onSubmit(user: user) {
    this.submitted = true;

    if (this.frm.invalid)
      return;

    const result: Create_User = await this.userService.create(user);
  }

  //yeni kullanıcı kaydetme alternatifi api, database, client //bunu onSubmit'te çağır -> this.saveRegister();
  // saveRegister(){
  //   const model = {
  //     NameSurname:"stiris", 
  //     Username:"strsagza",
  //     Email:"zlatan@gail.com",
  //     Password:"qsdgf23A*"
  //   }

  //   var x = new RequestParameters();
  //   x.fullEndPoint = environment.url + ApiAdresses.loginOperations.register
  //   this.httpClientService.post(x, model).subscribe((res) => {

  //   });
  // }
}