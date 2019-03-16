import { Address } from './../../shared/models/address';
import { Component, 
         OnInit,
        
         ViewChild,
         ElementRef
        
        } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

CurrencyPipe

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // <input  #fullName />

 // <p #p1 >

  // get the #template variables inside component/ts
  // ElementRef is a wrapper for DOM element
  @ViewChild('fullName')
  fullNameInput: ElementRef;

  @ViewChild('p1')
  p1Element: ElementRef;

  amount = 2345.4567864;
  precision = '.2';
  checkoutTime = new Date(); // current date/time
  productName = 'Moto G';

  counter = 0;

  address: Address = {
    city: 'BLR',
    state: 'KA',
    pincode: 560001
  };

  constructor() { }

  ngOnInit() {
    // nativeElement is a REAL DOM
    this.fullNameInput.nativeElement.focus();
    this.p1Element.nativeElement.textContent = 'Enter your name';
  }

  save() {
    console.log('Address is ', this.address);
  }

}
