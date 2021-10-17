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
  goToViewProduct(id : string) {
    this.router.navigateByUrl(`marketplace/view-product/${id}`);
  }

  listProducts = [
    {
      id: '1',
      title: 'Mario kart 8 deluxe',
      description:
        'Videojuego Mario kart 8 deluxe para consola nintendo switch',
      amount: 5,
      price: '40.000',
      categories: ['Videojuegos'],
      images: [
        {
          name: 'assets/images/marioKart8.jfif',
          description: 'Juego en caja mario kart 8 deluxe para nintendo switch',
        },
        {
          name: 'assets/images/mario-kart-2.jpg',
          description: 'Imagen referencial del videojuego',
        },
        {
          name: 'assets/images/mario-kart-3.jpg',
          description: 'Elección de personajes dentro del videojuego',
        },
      ],
      isActive: true,
    },
    {
      id: '2',
      title: 'Playstation 5, nueva',
      description: 'Se vende la nueva consola PS5, con un mando.',
      amount: 2,
      price: '600.000',
      categories: ['Videojuegos'],
      images: [
        {
          name: 'assets/images/ps5.jpg',
          description: 'Nueva consola PS5, con un mando.',
        },
      ],
      isActive: true,
    },
    {
      id: '3',
      title: 'Consola nintendo switch',
      description: 'Consola nintendo switch nueva',
      amount: 5,
      price: '250.000',
      categories: ['vehiculos'],
      images: [
        {
          name: 'assets/images/nintendoSwitch.jpg',
          description: 'Consola nintendo switch nueva',
        },
      ],
      isActive: true,
    },
    {
      id: '4',
      title: 'Ford Mustang color naranjo ',
      description:
        'Se vende automóvil Ford Mustang, de color naranjo.\nNuevo y en perfecto estado.',
      amount: 1,
      price: '20.000.000',
      categories: ['Vehiculos'],
      images: [
        {
          file: {},
          name: 'assets/images/fordMustang.jpg',
          description: 'Foto del auto en movimiento',
        },
      ],
      isActive: true,
    },
    {
      id: '5',
      title: 'Polera de nirvana',
      description:
        'Se vende polera la banda nirvana.\nse encuentra disponible talla S, M L. \ncualquiera consulta no duden en escribirme.',
      amount: 10,
      price: 15.000,
      categories: ['Vestuario'],
      images: [
        {
          name: 'assets/images/poleraNirvana.jpg',
          description:
            'Polera nirvana color negra, con el logo coplor amarillo',
        },
      ],
      isActive: true,
    },
    {
      id: '6',
      title: 'Televisor QLED marca LG',
      description:
        'El televisor LG OLED es un placer para la vista. Los píxeles autoiluminados permiten una calidad de imagen realmente espectacular y toda una serie de posibilidades de diseño, mientras que las últimas tecnologías de vanguardia ayudan a ofrecer niveles de maravilla sin precedentes. Esto es todo lo que te encanta de un televisor: superior en todos los sentidos.\n"Descripción proporcionada por la pagina de LG "',
      amount: 5,
      price: "400.000",
      categories: ['Electronica'],
      images: [
        {
          name: 'assets/images/televisorLg.jpg',
          description:
            'televisor LG mostrando una flor de cerca',
        },
      ],
      isActive: true,
    },
  ];
}
