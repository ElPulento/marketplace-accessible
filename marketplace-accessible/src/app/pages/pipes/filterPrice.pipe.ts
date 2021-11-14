import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrice'
})
export class FilterPricePipe implements PipeTransform {

  transform(value: any, searchValue) { 
    return value.filter((v) => v.price > searchValue)
  }

}