import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://dummyjson.com/products';
  constructor(private http: HttpClient){}
  
  getProducts(){
      return this.http.get('https://dummyjson.com/products')
  }
  getProductById(i : any)
  {
    return this.http.get('https://dummyjson.com/products')
  }
  getProductsByCategory(category: string) {
    return this.http.get(`${this.baseUrl}/category/${category}`);
  }
}
