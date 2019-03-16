import { CartItem } from './../../models/cart-item';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[];

  // check if cart service already created
  // if not creates one cart service [singleton]
  // inject the cart service instance
  constructor(private cartService: CartService) {
    console.log('Cart Component created');

    // assign an array ref here
    this.cartItems = this.cartService.cartItems;
  }

  ngOnInit() {
  }

  add() {
    const id = Math.ceil(Math.random() * 10000);
    const item = new CartItem();
    item.id = id;
    item.name = `Product ${id}`;
    item.price = Math.ceil(Math.random() * 100);
    item.qty = 1;

    this.cartService.addItem(item);
  }

  // child to parent communication
  remove(id: number) {
    this.cartService.removeItem(id);
  }

  empty() {
    this.cartService.empty();
  }

}
