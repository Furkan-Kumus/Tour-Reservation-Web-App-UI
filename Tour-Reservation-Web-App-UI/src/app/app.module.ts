import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { ListtoursComponent } from './components/listtours/listtours.component';
import { TourDetailPageComponent } from './components/tour-detail-page/tour-detail-page.component';
import { TourFilterPipe } from './components/listtours/tour-filter.pipe';
import { AskedComponent } from './components/asked/asked.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { JwtModule } from '@auth0/angular-jwt';
import { FlightsComponent } from './components/tourspecs/flights/flights.component';
import { CountryComponent } from './components/tourspecs/country/country.component';
import { AirportComponent } from './components/tourspecs/airport/airport.component';
import { DriverComponent } from './components/tourspecs/driver/driver.component';
import { UserComponent } from './components/tourspecs/user/user.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeleteDirective } from './directives/admin/delete.directive';
import { CityComponent } from './components/tourspecs/city/city.component';
import { HotelComponent } from './components/tourspecs/hotel/hotel.component';
import { RegionsComponent } from './components/tourspecs/regions/regions.component';
import { DeleteairportDirective } from './directives/admin/deleteairport.directive';
import { DeletehotelDirective } from './directives/admin/deletehotel.directive';
import { DeleteregionDirective } from './directives/admin/deleteregion.directive';
import { DeletedriverDirective } from './directives/admin/deletedriver.directive';
import { VehicleComponent } from './components/tourspecs/vehicle/vehicle.component';
import { DeletecityDirective } from './directives/admin/deletecity.directive';
import { DeletevehicleDirective } from './directives/deletevehicle.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    RegisterpageComponent,
    ListtoursComponent,
    TourDetailPageComponent,
    TourFilterPipe,
    AskedComponent,
    AdminpageComponent,
    FlightsComponent,
    CountryComponent,
    AirportComponent,
    DriverComponent,
    UserComponent,
    DeleteDirective,
    CityComponent,
    HotelComponent,
    RegionsComponent,
    DeleteairportDirective,
    DeletehotelDirective,
    DeleteregionDirective,
    DeletedriverDirective,
    VehicleComponent,
    DeletecityDirective,
    DeletevehicleDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    ToastrModule.forRoot({
      progressBar: true,
      progressAnimation: 'increasing',
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('accessToken'),
        allowedDomains: ['localhost:7246'],
      },
    }),
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: 'baseUrl', useValue: 'https://localhost:7246/api', multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
