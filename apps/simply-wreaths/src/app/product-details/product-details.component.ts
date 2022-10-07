import { CartService } from './../cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'sw-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService ) {}

  ngOnInit(): void {
    // Get product id from current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // find product that matches product id from route
    this.product = products.find(product => product.id === productIdFromRoute);

  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert(`You have just added ${product.name} to your cart.`);
  }
}
