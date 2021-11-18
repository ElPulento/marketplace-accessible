import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputSearchService } from '../../services/inputSearch.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(
    private router : Router,
    private productsService : ProductsService,
    private inputSearch : InputSearchService,
  ) { }

  ngOnInit() {
  }

  goToListProduct(category) {
   const search = this.inputSearch.search = '';
    this.inputSearch.input(search);
    this.productsService.category = category;
    this.router.navigateByUrl(`marketplace/list-products`);
  }

}
