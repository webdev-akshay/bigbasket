import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OfferComponent } from './components/offer/offer.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'offer', component:OfferComponent},
  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'all-products', component:ProductsComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', component:NotfoundComponent}
];
