import { Brand } from './../../models/brand';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product(); // create product
  brands$: Observable<Brand[]>;


  constructor(private router: Router,
             private route: ActivatedRoute,
             private productService: ProductService) { }

  ngOnInit() {
    // read id from url /products/edit/1234 :id
    const id = this.route.snapshot.params['id'];
    console.log('id is ', id);

    if (id) { // edit the existing product
       this.productService
           .getProduct(id)
           .subscribe ( product => {
             this.product = product;
           });
    } else {
      // create new product
    }

    this.brands$ = this.productService.getBrands();
  }

  save() {
    this.productService
        .saveProduct(this.product)
        .subscribe ( savedProduct => {
           // this.router.navigate(['/', 'products']);
            // or
            this.router.navigateByUrl('/products');
        });
  }

}
