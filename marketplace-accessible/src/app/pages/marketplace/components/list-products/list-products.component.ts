import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { ProductsService } from '../../services/products.service';
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
  category : string;
  search='';
  price='';
  cate='';
  priceMax;

  constructor(
    private router: Router,
    private productsService : ProductsService,
    ) {}

  ngOnInit(): void {
    this.initializeVariables();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loading = false;
  removeFilters(){
    this.loading = true;
    setTimeout(() => this.loading = false, 1000);
    setTimeout(() =>  this.search='' , 1000);
    setTimeout(() => this.price='', 1000);
    setTimeout(() => this.cate='', 1000);

  }

  private initializeVariables() {
    this.indexStatus = 0;
    this.actualPage = 0;
    this.totalData = 0;
    this.page = 0;
    this.rows = 5;
    this.getProductSpinnerLoading = false;
    this.category = this.productsService.category;
  }

  public reloadMyOrganizationssList() {
    this.ngOnDestroy();
    this.ngOnInit();
  }
  goToViewProduct(id : string) {
    this.router.navigateByUrl(`marketplace/view-product/${id}`);
  }
  goToListCategories(){
    this.router.navigateByUrl(`marketplace/categories`);
  }
 


  applyFilter(filterValue) {
    this.listProducts.filter((val) => {
       return val.title.toLowerCase().indexOf(filterValue) > -1;
    });
   }
   parseInt(e){
     console.log(e, 'antes')
    e = e.toString();
    console.log(e, 'despues')
    return e 
   }

  listProducts = [
    {
      id: '1',
      title: 'Mario kart 8 deluxe',
      description: 'Compite con tus amigos en carreras o batallas en la versióndefinitiva de Mario Kart 8.\n¡Calienta motores en la versión definitiva de Mario Kart™ 8 y juega donde y cuando quieras! Compite con tus amigos en carreras o en el modo batalla, que incluye circuitos nuevos y otros ya conocidos. Juega en el modo local y en 1080p en partidas de hasta 4 jugadores en el modo televisor. Todos los circuitos de la versión de Wii U, incluyendo el contenido descargable, están disponibles.',
      price: 40000,
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
      price: 600000,
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
      price: 250000,
      categories: ['Videojuegos'],
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
      price: 20000000,
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
      price: 15000,
      categories: ['Vestuario'],
      images: [
        {
          name: 'assets/images/poleraNirvana.jpg',
          description:
            'Polera nirvana color negra, con el logo color amarillo',
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
      price: 400000,
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
