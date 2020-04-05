import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'plainStrings'})
export class PlainStrings implements PipeTransform {

  transform(value: string, ...args: any[]) {
    if (value) {
      return value.split('-').map(val => val[0].toUpperCase() + val.slice(1)).join(' ');
    } else {
      return '';
    }
  }

}
