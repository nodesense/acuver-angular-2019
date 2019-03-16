import { CartService } from './../../../cart/services/cart.service';
import { CartItem } from './../../../cart/models/cart-item';
// product-list.component.ts
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  addToCart(product: Product){
    const cartItem = new CartItem();
    cartItem.id = product.id;
    cartItem.name = product.name;
    cartItem.price = product.price;
    cartItem.qty = 1;

    this.cartService.addItem(cartItem);
  }

  deleteProduct(id: number){
      this.productService
          .deleteProduct(id)
          .subscribe ( result => {
            // get latest products from service
            this.products$ = this.productService.getProducts();
          });
  }

}
