import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter = 0;
  isMouseOn = false;

  mainAddress = { city: 'BLR', state: 'KA' };
  branchAddress = undefined;

  constructor() { }

  ngOnInit() {
    setTimeout( () => {
      console.log('setting branch');
      this.branchAddress = {city: 'Mysore'};
    }, 5000);
  }

  increment() {
    this.counter++;
  }

}
