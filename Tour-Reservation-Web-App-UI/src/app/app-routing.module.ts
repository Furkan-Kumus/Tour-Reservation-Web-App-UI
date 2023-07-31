import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';

const routes: Routes = [
  {path :'register',component : RegisterpageComponent},
  {path :'login',component : LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
