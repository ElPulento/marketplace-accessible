import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  
  productId : string
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log(this.productId)
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
          description: 'Juego mario kart 8 deluxe nuevo',
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
      price: 15000,
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
