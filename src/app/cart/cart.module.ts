 // cart.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';

import {Routes, RouterModule}  from '@angular/router';
const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // forChild for the child module
    RouterModule.forChild(routes)
  ],

  exports: [
    CartComponent
  ]
})
export class CartModule { }
