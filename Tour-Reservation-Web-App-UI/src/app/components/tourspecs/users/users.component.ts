import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
  
import { ToastrService } from 'ngx-toastr';
import { List_Users } from 'src/app/contracts/tour_elements/list_users';
import { Create_Users } from 'src/app/contracts/users/create_users';
import { users } from 'src/app/entities/users';
import { UsersService } from 'src/app/services/common/models/users.service';  


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private toastr: ToastrService
  ) {}

  displayedColumns: string[] = ['Id', 'UsersName', 'UsersSurname', 'UsersCompany', 'UsersAuthority', 'update', 'delete'];
  dataSource: MatTableDataSource<List_Users> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  frmUsers: FormGroup;

  async getUsers() {
    const allUsers: { totalCount: number; users: List_Users[] } = await this.usersService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
    this.dataSource = new MatTableDataSource<List_Users>(allUsers.users);
    console.log(this.dataSource);
    
    this.paginator.length = allUsers.totalCount;
  }

  async ngOnInit(){
    this.frmUsers = this.formBuilder.group({
      UsersName: ['', [Validators.required]],
      UsersSurname: ['', [Validators.required]],
      UsersCompany: ['', [Validators.required]],
      UsersAuthority: ['', [Validators.required]],
    });

    await this.getUsers();
  }

  get component() {
    return this.frmUsers.controls;
  }

  isSubmitted: boolean = false;

  async addUsers(users: users) {
    if (this.frmUsers.invalid) {
      return;
    }
    
    this.toastr.success( "Kayıt Başarıyla Database'e Kaydedilmiştir.", "Kullanıcı Kaydı Başarılı!")
    
    const result: Create_Users = await this.usersService.create(users);
    await this.getUsers();
  }

  opentab() {
    this.isSubmitted = true;
  }

  closeTab() {
    this.isSubmitted = false;
  }

  async pageChanged() {
    await this.getUsers();
  }

}

  
 

  
    
