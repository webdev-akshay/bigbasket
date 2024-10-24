import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private ApiUrl="/api/BigBasket/Login"
  constructor(private http:HttpClient) { }

  login(UserName:string,UserPassword:string):Observable<any>{
    const body={UserName,UserPassword};
    return this.http.post(this.ApiUrl,body)
  }
}
