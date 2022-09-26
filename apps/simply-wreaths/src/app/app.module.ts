import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: ProductListComponent,
        },
        {
          path: 'products/:productId',
          component: ProductDetailsComponent,
        },
        {
          path: 'cart',
          component: CartComponent
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
