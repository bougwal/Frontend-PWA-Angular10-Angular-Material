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

  constructor(private ps : ProductsService){
    this.products$ = this.ps.getProducts()
  }
}
