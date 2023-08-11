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
import { UsersComponent } from './components/tourspecs/users/users.component';
import { CityComponent } from './components/tourspecs/city/city.component';
import { HotelComponent } from './components/tourspecs/hotel/hotel.component';
import { RegionsComponent } from './components/tourspecs/regions/regions.component';
import { VehicleComponent } from './components/tourspecs/vehicle/vehicle.component';


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
  {path :'vehicle',component : VehicleComponent,canActivate: [AuthGuard] },
  {path :'region',component : RegionsComponent,canActivate: [AuthGuard] },
  {path :'users',component : UsersComponent,canActivate: [AuthGuard] },
  {path :'driver',component : DriverComponent,canActivate: [AuthGuard] },
  {path :'city',component : CityComponent,canActivate: [AuthGuard] },
  {path :'hotel',component : HotelComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
