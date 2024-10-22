import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OfferComponent } from './components/offer/offer.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {path:'home', component:AppComponent},
  {path:'offer', component:OfferComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];
