// cart.service.ts
import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

import {Subject, BehaviorSubject} from 'rxjs';

// business logic
// non-ui implementation
// web service communication
// keep the application data state, that can be 
// shared across multiple components
// dependency injection, inject the service instance 
// into component, service, pipe or directive

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  private _amount = 0;
  private _totalItems = 0;

  // $ is convention/best practice
  amount$: BehaviorSubject<number> = new BehaviorSubject(this._amount);
  totalItems$: BehaviorSubject<number> = new BehaviorSubject(this._totalItems);

  constructor() { 
    console.log('CartService created');
  }

  // es6, support getter and setter function

  // console.log(this.amount) getter is called
  get amount() {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;

    // publish the changes
    // next publish the value, latest amount
    this.amount$.next(this._amount);
  }

  get totalItems() {
    return this._totalItems;
  }

  set totalItems(value: number) {
    this._totalItems = value;

    // publish the changes
    this.totalItems$.next(this._totalItems);
  }

  calculate() {
    let amount = 0;
    let total = 0;

    for (const item of this.cartItems) {
       amount += item.price * item.qty;
       total += item.qty;
    }

    // calls setter
    this.amount = amount;

    // calls setter
    this.totalItems = total;
  }

  addItem(cartItem: CartItem): void {
    this.cartItems.push(cartItem);
    this.calculate();
  }

  removeItem(id: number): void {
    const index = this.cartItems.findIndex(item => item.id === id);
    this.cartItems.splice(index, 1);
    this.calculate();
  }

  empty() {
    // this.cartItems = []; // or // immutable, assign new array

    this.cartItems.splice(0, this.cartItems.length); // mutable
    this.calculate();
  }

}
