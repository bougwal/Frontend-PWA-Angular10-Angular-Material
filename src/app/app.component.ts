import { Component, OnInit } from '@angular/core';

import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {ProductsService} from './products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  products$: Observable<any>;
  cart$ : Observable<any>
  cart;
  constructor(private ps : ProductsService, private cartService: CartService , private dialgo: MatDialog) {
    this.products$ = this.ps.getProducts()
    this.cart$ = this.cartService.cart$.subscribe(cart => this.cart = cart);
  }

  displayNetworkStatus(){
    if(navigator.onLine){
      document.querySelector('body').style.filter = '';
    }else{
      document.querySelector('body').style.filter = 'grayscale(1)'
    }
  }
  ngOnInit(){
    this.displayNetworkStatus();
    window.addEventListener('online', this.displayNetworkStatus);
    window.addEventListener('offline', this.displayNetworkStatus)
  }
  onAddProduct(count, product){
    this.cartService.addToCart(count, product)
  }

  openCart(){
    this.dialgo.open(CartComponent, {
      width: '500px'
    })
  }

}

