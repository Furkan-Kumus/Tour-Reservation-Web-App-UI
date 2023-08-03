import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ListtoursComponent } from './components/listtours/listtours.component';
import { TourDetailPageComponent } from './components/tour-detail-page/tour-detail-page.component';
import { AskedComponent } from './components/asked/asked.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { AuthGuard } from './guards/common/auth.guard';
import { LayoutComponent } from './admin/layout/layout.component';
import { AdminpagesComponent } from './admin/components/adminpages/adminpages.component';


const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: AdminpagesComponent, },
      /* {path : "adminpages", loadChildren : ()=> import("./admin/components/adminpages/adminpages.module").then
      (module => module.AdminpagesModule)} */
], canActivate: [AuthGuard]
},
  {path :'register',component : RegisterpageComponent},
  {path :'',component : ListtoursComponent},
  {path :'login',component : LoginpageComponent},
  {path :'home/:id',component : TourDetailPageComponent},
  {path :'asked',component : AskedComponent},
  {path: 'admin', component:AdminpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
