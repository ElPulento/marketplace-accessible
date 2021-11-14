import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPriceMax'
})
export class FilterPriceMaxPipe implements PipeTransform {

  transform(value: any, searchValue) { 
    return value.filter((v) => v.price < searchValue)
  }

}
