import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { OfferComponent } from './components/offer/offer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bigbasket';


}
