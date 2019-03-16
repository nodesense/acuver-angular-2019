import { Address } from './../../shared/models/address';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  branchAddress: Address = {city: 'Mysore', state: 'KA'};
  headOfficeAddress: Address = {city: 'BLR', state: 'KA'};

  constructor() { }

  ngOnInit() {
  }

}
