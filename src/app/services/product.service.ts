import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl="https://freeapi.miniprojectideas.com/api/BigBasket/GetAllProducts";

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<any>{
    return this.http.get(this.apiUrl)
  }
  searchProducts(query:string):Observable<any>{
    const params=new HttpParams().set('query',query);
    return this.http.get<any>(`${this.apiUrl},{params}`)

  }
}
