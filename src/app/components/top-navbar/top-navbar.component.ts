import { SharedService } from './../../services/shared.service';
import { CommonModule } from '@angular/common';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss'
})
export class TopNavbarComponent  implements OnInit{
  query:string='';
  constructor(private SharedService:SharedService){}


  onSearch(){
    this.SharedService.updateSearchQuery(this.query)
  }
  ngOnInit(): void {

  }
}
