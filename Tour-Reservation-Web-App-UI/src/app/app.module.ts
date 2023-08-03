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
import { HttpClientModule } from  '@angular/common/http';
import { AdminModule } from './admin/admin.module';



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
    AdminpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [
    { provide: "baseUrl", useValue: "https://localhost:7246/api", multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
