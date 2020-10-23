import { CartService } from './cart.service';
import { Component } from '@angular/core';
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
  constructor(private ps : ProductsService, private cartService: CartService){
    this.products$ = this.ps.getProducts()
    this.cart$ = this.cartService.cart$.subscribe(cart => this.cart = cart);
  }
  onAddProduct(count, product){
    this.cartService.addToCart(count, product)
  }
}
