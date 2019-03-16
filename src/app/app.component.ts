import { Address } from './shared/models/address';
import { Component } from '@angular/core';

// MVW - Whatever
// Model
// View
// Controller - No Controller
// C - Component

@Component({
  // html tag name, custom html tag
  selector: 'app-root',
  // View, HTML
  templateUrl: './app.component.html',
  // Scopped style. only local to AppComponent html
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Model, data, bind to view
  title = 'product-app';

  year = 2019;
  company = 'Acuver';
  address: Address = { city: 'BLR', state: 'KA', pincode: 560000 };
}
