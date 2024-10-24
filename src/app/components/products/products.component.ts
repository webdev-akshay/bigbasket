import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  productData:any[]=[]
  constructor(private ProductService:ProductService){}

  getData(){
    this.ProductService.getAllProducts().subscribe((res)=>{
      this.productData=res.data;
    })

  }
  ngOnInit():void{
    this.getData();
    console.log(this.productData)

  }
}
