import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
