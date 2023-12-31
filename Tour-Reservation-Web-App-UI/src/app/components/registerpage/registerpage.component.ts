

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
    /* private toastrService: CustomToastrService, */
    private formBuilder: FormBuilder, 
    private userService:UserService,
    private toastr: ToastrService
    ){}
  
  frm : FormGroup;
  
  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      NameSurname: ["", [
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(50)]],
      Username: ["", [
        Validators.required, 
        Validators.maxLength(50), 
        Validators.minLength(3)]],
      Email: ["", [
        Validators.required, 
        Validators.maxLength(250), 
        Validators.minLength(10),
        Validators.email]],
      Password: ["", [
        Validators.required, 
        Validators.minLength(6),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]]
    })

  }

  get component(){
    return this.frm.controls;
  }

  submitted: boolean = false;

  async onSubmit(user: user) {
    this.submitted = true;

    var c = this.component;
    
    
    if (this.frm.invalid)
      return;

    const result: Create_User = await this.userService.create(user);

    if (result.succeeded) {
      this.toastr.success("Kullanıcı Kaydı Başarılı.")
    }
    else{
      this.toastr.error("Aynı Kullanıcı Adına Sahip Birden Çok Kullanıcı Olamaz!", "Kayıt Başarısız!")
    }


  }

}