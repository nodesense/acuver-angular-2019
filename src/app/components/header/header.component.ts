import { CartService } from './../../cart/services/cart.service';
import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

/// <app-header>

@Component({
    // html tag
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: [
        'header.component.css'
    ]
})
export class HeaderComponent implements OnInit {
    subTitle = 'shopping cart';

    amount: number;
    totalItems$: Observable<number>;

    constructor(private cartService: CartService) {
        this.totalItems$ = this.cartService.totalItems$;
    }

    // called after view is initialized in the browser
    ngOnInit() {
        console.log('Header ngOnInit');

        // nextAmount is the value passed in .next(10)
        this.cartService.amount$
                        .subscribe(nextAmount => {
                            console.log('at header ', nextAmount);
                            this.amount = nextAmount;
                        });
    }
}
