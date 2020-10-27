import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const PRODUCTS_API = '/api/products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
   return this.http.get(PRODUCTS_API)
  }
}
