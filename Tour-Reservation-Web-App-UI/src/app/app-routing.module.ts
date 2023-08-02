import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ListtoursComponent } from './components/listtours/listtours.component';
import { TourDetailPageComponent } from './components/tour-detail-page/tour-detail-page.component';
import { AskedComponent } from './components/asked/asked.component';


const routes: Routes = [
  {path :'register',component : RegisterpageComponent},
  {path :'home',component : ListtoursComponent},
  {path :'login',component : LoginpageComponent},
  {path :'home/:id',component : TourDetailPageComponent},
  {path :'Rsked',component : AskedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
