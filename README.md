# Git

```

git clone https://github.com/nodesense/acuver-angular-2019

cd acuver-angular-2019

npm install


ng serve

check browser with localhost:4200


```

# Commands


ng g c components/home
ng g c components/header
ng g c components/footer
ng g c components/about

ng g module shared

ng g c shared/components/address

ng g interface shared/models/address

ng g directive shared/directives/highlight
ng g pipe shared/pipes/power
ng g pipe shared/pipes/sort


ng g m cart

ng g c cart/components/cart
ng g c cart/components/cart-item
ng g class cart/models/cart-item
ng g service cart/services/cart


ng g c components/not-found


ng g module product
ng g c product/components/product-list
ng g c product/components/product-edit
ng g class product/models/product
ng g class product/models/brand
ng g service product/services/product

ng g m auth
ng g c auth/components/login
ng g service auth/services/auth
ng g service auth/services/interceptor
ng g guard auth/guards/auth
  
# REST Server




https://github.com/nodesense/restful-server

Clone or Download button

  Download zip
  
  Extract the project fully
  
  double click on install.cmd
  double click on start.cmd



Events - RXJS
Forms
HTTP

(click)="addItem()"

click is an event, triggered/published

addItem is a subscription invoked


Publisher [1]
    Publish something? Observable
            amount is observable
                0 
                10 - publish 10
            totalItems is observable
                0
                1 - publish 1
                2 - publish 2
                0 - publish 0
            cartItems can be observable
    publish data
    when ? when data got changed, data arrived first time

Subscriber [1, 2,10, 100]

    Page 1 Cart
        susbcribe
        unsubscribe
    Page 2 Checkout
        susbcribe
        unsubscribe


