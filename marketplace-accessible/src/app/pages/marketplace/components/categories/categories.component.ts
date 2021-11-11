import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories = [
		{
			name: 'Electrónica',
		
		},
    {
			name: 'Vehiculos',
			
		},
    {
			name: 'Vestuario',
			
		},
    {
			name: 'Videojuegos',
		
		},

  ]

  constructor(
    private router : Router,
    private productsService : ProductsService,
  ) { }

  ngOnInit() {
  }

  goToListProduct(category) {
    this.productsService.category = category;
    this.router.navigateByUrl(`marketplace/list-products`);
  }

}
