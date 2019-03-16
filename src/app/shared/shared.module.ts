import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipes/power.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    // declarations are private to this modules
    AddressComponent,
    HighlightDirective,
    PowerPipe,
    SortPipe
  ],

  imports: [
    CommonModule
  ],

  // export public components for other modules to use
  exports: [
    // subset of declarations to be here which can be public
    AddressComponent,
    HighlightDirective,
    PowerPipe,
    SortPipe
  ]

})
export class SharedModule { }
