import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<any>();

  indexStatus!: number;
  actualPage!: number;
  totalData!: number;
  page!: number;
  rows!: number;
  getProductSpinnerLoading!: boolean;


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeVariables();
  }
  

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeVariables() {
    this.indexStatus = 0;
    this.actualPage = 0;
    this.totalData = 0;
    this.page = 0;
    this.rows = 5;
    this.getProductSpinnerLoading = false;
  }

  public reloadMyOrganizationssList() {
    this.ngOnDestroy();
    this.ngOnInit();
  }

  dummy = [
    {
      title: 'Mario kart 8 deluxe',
      description:
        'Aquí debes colocar siendo concreto y preciso los detalles y caracteristicas del producto que estas ofreciendo, sin olvidar ningun detalle importante que pueda ayudar al posible comprador a elegir tu producto.',
      amount: 5,
      price: 50000,
      categories: ['Videojuegos', 'Electronica'],
      images: [
        { name: 'logo-software-testing.png', description: 'logo mario' },
      ],
      isActive: true,
    },
    {
      title: 'Mario kart 9 deluxe',
      description:
        'Aquí debes colocar siendo concreto y preciso los detalles y caracteristicas del producto que estas ofreciendo, sin olvidar ningun detalle importante que pueda ayudar al posible comprador a elegir tu producto.',
      amount: 5,
      price: 10000,
      categories: ['Videojuegos', 'Electronica'],
      images: [
        { name: 'logo-software-testing.png', description: 'logo mario' },
      ],
      isActive: true,
    },
    {
      title: 'Mario kart 7 deluxe',
      description:
        'Aquí debes colocar siendo concreto y preciso los detalles y caracteristicas del producto que estas ofreciendo, sin olvidar ningun detalle importante que pueda ayudar al posible comprador a elegir tu producto.',
      amount: 5,
      price: 500,
      categories: ['Videojuegos', 'Electronica'],
      images: [
        { name: 'logo-software-testing.png', description: 'logo mario' },
      ],
    },
    {
      title: 'Mario kart 64 ',
      description:
        'Aquí debes colocar siendo concreto y preciso los detalles y caracteristicas del producto que estas ofreciendo, sin olvidar ningun detalle importante que pueda ayudar al posible comprador a elegir tu producto.',
      amount: 5,
      price: 50,
      categories: ['Videojuegos', 'Electronica'],
      images: [
        { name: 'logo-software-testing.png', description: 'logo mario' },
      ],
      isActive: true,
    },
    {
      title: 'Mario kart 8 deluxe',
      description:
        'Aquí debes colocar siendo concreto y preciso los detalles y caracteristicas del producto que estas ofreciendo, sin olvidar ningun detalle importante que pueda ayudar al posible comprador a elegir tu producto.',
      amount: 5,
      price: 50,
      categories: ['Videojuegos', 'Electronica'],
      images: [
        { name: 'logo-software-testing.png', description: 'logo mario' },
      ],
      isActive: false,
    }
    
  ];
}
