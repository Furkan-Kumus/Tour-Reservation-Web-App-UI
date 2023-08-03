import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpagesComponent } from './adminpages.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminpagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component: AdminpagesComponent}
    ])
  ]
})
export class AdminpagesModule { }
