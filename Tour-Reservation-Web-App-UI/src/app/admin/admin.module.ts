import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class AdminModule { }
