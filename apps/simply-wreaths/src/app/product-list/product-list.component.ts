import { products } from './../product';
import { Component } from '@angular/core';

@Component({
  selector: 'sw-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}
