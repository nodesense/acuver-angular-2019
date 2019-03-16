import { AuthService } from './../../auth/services/auth.service';
import { CartService } from './../../cart/services/cart.service';
import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
    authenticated$:  Observable<boolean>;

    constructor(private cartService: CartService, 
                private authService: AuthService, 
                private router: Router
                ) {
        this.totalItems$ = this.cartService.totalItems$;
        this.authenticated$ = this.authService.authenticated$;
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

    logout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
