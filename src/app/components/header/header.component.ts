import {Component, OnInit} from '@angular/core';

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

    // called after view is initialized in the browser
    ngOnInit() {
        console.log('Header ngOnInit');
    }
}
