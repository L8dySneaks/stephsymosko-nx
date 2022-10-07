import { CartService } from './../cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sw-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<{ type: string, price: number }[]>;
  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }
}
