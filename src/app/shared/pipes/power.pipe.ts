import { Pipe, PipeTransform } from '@angular/core';

// html, name is used, case sensitive
// {{ m | power:n}}
// {{ 2 | power:3 }}   2 ^ 3
// {{ 2 | power }}   2 ^ 1 // default to 1

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exponent: number = 1): number {
    console.log('power pipe called ', value, exponent);
    return Math.pow(value, exponent);
  }

}
