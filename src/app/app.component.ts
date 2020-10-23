import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {ProductsService} from './products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products$: Observable<any>;
  cart$ : Observable<any>
  cart;
  constructor(private ps : ProductsService, private cartService: CartService , private dialgo: MatDialog) {
    this.products$ = this.ps.getProducts()
    this.cart$ = this.cartService.cart$.subscribe(cart => this.cart = cart);
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

