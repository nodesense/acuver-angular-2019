// import { ProductModule } from './product/product.module';
// import { CartModule } from './cart/cart.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HeaderComponent} 
  from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from './shared/shared.module';
import { CheckoutComponent } from './components/checkout/checkout.component';

import {FormsModule} from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {Routes, RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

// step 1: configure url to component mapping
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },

  {
    path: 'products',
    loadChildren: './product/product.module#ProductModule'
  },
  {
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule'
  },

  {
    path: '**',
    component: NotFoundComponent
  }
];

// collection of components, directives, pipe, services
// module can dependency on other modules

@NgModule({
  declarations: [
    // all directives, components, pipes
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CheckoutComponent,
    NotFoundComponent,
    // HeaderComponent, FooterComponent, home, about, etc
  ],
  imports: [
    // other module dependencies
    // for ajax, HttpClientModule, FormsModule
    // ProductModule, CartModule
    BrowserModule,
    SharedModule,
    FormsModule,
   // CartModule,
   // ProductModule,
    // step: apply the route configuration in angular
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    // business logic, api calls
    // dependency injection
  ],
  bootstrap: [
    // first component to be loaded
    AppComponent
  ]
})
export class AppModule { }
