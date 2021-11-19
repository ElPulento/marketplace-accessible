import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { FavoritesService } from '../../../services/favorites.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  getProductSpinnerLoading = false;
  listFavorites : string[] = [];
  loading : boolean;
  favorites : boolean;
  productId: string;
  constructor(
    private favoritesService : FavoritesService,
    private toastrService: NbToastrService,
    private router: Router,
    private productsService : ProductsService,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit() {
    this.productId = this.favoritesService.id;
    this.listFavorites = this.favoritesService.listFavorites
    this.listProducts
    this.loading = false;
    //favorites
    this.favorites = this.favoritesService.IsFavorite(this.productId)
    this.favoritesService.change.subscribe(favorites => {
      this.favorites = favorites
    })
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: '¿Quieres eliminar este producto de su listado de favoritos?' });
  }

  
  deleteFavorites(productId){
    this.loading = true;
    setTimeout(() =>  this.loading = false, 1000);
    setTimeout(() => this.favoritesService.deleteFavorites(productId), 1000);
    setTimeout(() =>  this.favorites = this.favoritesService.favorites, 1000);
    setTimeout(() =>   this.toastrService.show('El producto se eliminó de favoritos correctamente ',`Quitar de favoritos`, {
      status: 'danger',
      icon: 'close-outline',
      preventDuplicates: true,
    }), 1000);
    setTimeout(() =>  this.open, 1000);
  }
  goToListProduct() {
    this.loading = true;
    this.productsService.allCategories()
    setTimeout(() =>  this.router.navigateByUrl(`marketplace/list-products`), 1000);
    
  }
  

  
  listProducts = [
    {
      id: '1',
      title: 'Mario kart 8 deluxe',
      description: 'Compite con tus amigos en carreras o batallas en la versióndefinitiva de Mario Kart 8.\n¡Calienta motores en la versión definitiva de Mario Kart™ 8 y juega donde y cuando quieras! Compite con tus amigos en carreras o en el modo batalla, que incluye circuitos nuevos y otros ya conocidos. Juega en el modo local y en 1080p en partidas de hasta 4 jugadores en el modo televisor. Todos los circuitos de la versión de Wii U, incluyendo el contenido descargable, están disponibles.',
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
      price: '15.000',
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
