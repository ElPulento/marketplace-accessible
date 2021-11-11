import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(
    private router : Router,
    private productsService : ProductsService,
    ) {}

  ngOnInit(): void {}
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
  goToListProduct(category) {
    this.productsService.category = category;
    this.router.navigateByUrl(`marketplace/list-products`);
  }

}
