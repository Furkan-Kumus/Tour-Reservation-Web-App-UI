import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
<<<<<<< Updated upstream
import { ListtoursComponent } from './components/listtours/listtours.component';
import { TourDetailPageComponent } from './components/tour-detail-page/tour-detail-page.component';
import { AskedComponent } from './components/asked/asked.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';


const routes: Routes = [
  {path :'register',component : RegisterpageComponent},
  {path :'home',component : ListtoursComponent},
  {path :'login',component : LoginpageComponent},
  {path :'home/:id',component : TourDetailPageComponent},
  {path :'asked',component : AskedComponent},
  {path: 'admin', component:AdminpageComponent}
=======
import { ToursComponent } from './components/tours/tours.component';

const routes: Routes = [
  {path :'register',component : RegisterpageComponent},
  {path :'login',component : LoginpageComponent},
  {path : 'tours', component : ToursComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
