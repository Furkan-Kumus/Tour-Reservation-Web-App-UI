import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminheaderComponent } from './adminheader/adminheader.component';



@NgModule({
  declarations: [
    AdminheaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AdminheaderComponent
  ]
})
export class ComponentsModule { }
