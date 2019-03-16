import { Address } from './../../shared/models/address';
import { Component, OnInit, 
         Input
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // Input pass data from parent component to child component

  // data is passed to child as property binding [], without []

  @Input()
  year: number;

  @Input()
  company: string;

  @Input()
  address: Address;

  constructor() { }

  ngOnInit() {
  }

}
