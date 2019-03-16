import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
  {
    //path: 'products',
    path: '', // lazy loading
    component: ProductListComponent
  },
  {
    //path: 'products/edit/:id', 
    path: 'edit/:id', // lazy loading
    component: ProductEditComponent
  },
  {
    //path: 'products/create',
    path: 'create', // lazy loading
    component: ProductEditComponent
  }
];


@NgModule({
  declarations: [
      ProductListComponent,
      ProductEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ProductModule { }
