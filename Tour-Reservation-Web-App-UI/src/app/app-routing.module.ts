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
import { FlightsComponent } from './components/tourspecs/flights/flights.component';
import { AirportComponent } from './components/tourspecs/airport/airport.component';
import { CountryComponent } from './components/tourspecs/country/country.component';
import { DriverComponent } from './components/tourspecs/driver/driver.component';
import { UserComponent } from './components/tourspecs/user/user.component';
import { RegionComponent } from './components/tourspecs/region/region.component';
import { CarComponent } from './components/tourspecs/car/car.component';


const routes: Routes = [
  {
    path: "kkkk", component: LayoutComponent, children: [
      { path: "kkkkk", component: AdminpagesComponent, },
      /* {path : "adminpages", loadChildren : ()=> import("./admin/components/adminpages/adminpages.module").then
      (module => module.AdminpagesModule)} */
      /* {path : "adminpages", loadChildren : ()=> import("./admin/components/adminpages/adminpages.module").then
      (module => module.AdminpagesModule)} */
], canActivate: [AuthGuard]

},

  {path: "admin", component: AdminpageComponent, canActivate: [AuthGuard]},
  {path: "airport", component: AirportComponent,canActivate: [AuthGuard] },
  {path :'register',component : RegisterpageComponent},
  {path :'',component : ListtoursComponent},
  {path :'login',component : LoginpageComponent},
  {path :'home/:id',component : TourDetailPageComponent},
  {path :'asked',component : AskedComponent},
  {path :'country',component : CountryComponent ,canActivate: [AuthGuard] },
  {path :'flights',component : FlightsComponent,canActivate: [AuthGuard] },
  {path :'car',component : CarComponent,canActivate: [AuthGuard] },
  {path :'region',component : RegionComponent,canActivate: [AuthGuard] },
  {path :'user',component : UserComponent,canActivate: [AuthGuard] },
  {path :'driver',component : DriverComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
