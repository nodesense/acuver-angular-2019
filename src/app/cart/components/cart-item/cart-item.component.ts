import { CartItem } from './../../models/cart-item';
import { Component, OnInit, Input,

  Output,
  EventEmitter


} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  // parent to child is property binding
  @Input()
  cartItem: CartItem;

  // child to parent communication is event binding/always
  @Output()
  removeItemFromCart: EventEmitter<number> = new EventEmitter();



  constructor() { 
    console.log('cart Item comp created');
  }

  ngOnInit() {
  }

  removeItem(id: number) {
    // publish the id
    // trigger an event
    // removeItemFromCart is a publisher
    // parent should subscribe
    // (removeItemFromCart)="remove($event)"
    this.removeItemFromCart.emit(id);
  }

}
