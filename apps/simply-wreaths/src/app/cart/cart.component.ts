import { CartService } from './cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'sw-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {

  items = this.cartService.getItems();
  constructor(private cartService: CartService) {}

}
