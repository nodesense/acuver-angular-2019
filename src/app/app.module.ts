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
    // HeaderComponent, FooterComponent, home, about, etc
  ],
  imports: [
    // other module dependencies
    // for ajax, HttpClientModule, FormsModule
    // ProductModule, CartModule
    BrowserModule,
    SharedModule,
    FormsModule
  
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
