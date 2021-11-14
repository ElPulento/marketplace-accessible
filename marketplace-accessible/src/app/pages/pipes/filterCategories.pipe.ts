import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategories'
})
export class FilterCategoriesPipe implements PipeTransform {

  transform(value: any, searchValue): any {

    if (!searchValue) return value;
    return value.filter((v) => v.categories[0].toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

  }

}