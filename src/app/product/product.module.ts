import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'products/create',
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
