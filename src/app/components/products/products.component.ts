import { SharedService } from './../../services/shared.service';
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
  productData:any[]=[];
  allProducts:any[]=[];
  query:string='';
  constructor(private ProductService:ProductService, private SharedService:SharedService){}

  // getData(){
  //   this.ProductService.getAllProducts().subscribe((res)=>{
  //     this.productData=res.data;
  //   })

  // }

  fetchAllProducts(){
    this.ProductService.getAllProducts().subscribe({
      next: (data)=>{
        this.allProducts=data.data;
        this.productData=this.allProducts
      },
      error: (err)=>{
        console.log('failed to fetch products')
      }
    })
  }

  filterProducts(){
    if(this.query){
      this.productData=this.allProducts.filter(product=>
        product.name.toLowerCase().includes(this.query.toLowerCase())
      );
    }else{
      this.productData=this.allProducts
    }
  }

  ngOnInit():void{
    this.fetchAllProducts();
    this.SharedService.currentSearchQuery.subscribe((query)=>{
      this.query=query;
      this.filterProducts()
    })
  }
}
