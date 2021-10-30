import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  
  
  productId : string
  imagesCounter: number
  favorites: boolean;
  minimize: boolean;
  maximize: boolean;
  fullScreen: boolean;
  starValue: HTMLElement;
  constructor(
    private route: ActivatedRoute,
    private windowService: NbWindowService,
    private router : Router,
   ) {}

  ngOnInit(): void {
    this.initializableVariables()
   
  }
  @ViewChild('chat', { read: TemplateRef }) chatTemplate: TemplateRef<HTMLElement>;
  @ViewChild('profile', { read: TemplateRef }) profileTemplate: TemplateRef<HTMLElement>;
  @ViewChild('qualification', { read: TemplateRef }) qualificationTemplate: TemplateRef<HTMLElement>;
  
  initializableVariables(){
    this.productId = this.route.snapshot.paramMap.get('id');
    this.imagesCounter = 0;
    this.favorites = false;
    this.minimize = false;
    this.maximize = false;
    this.fullScreen = true;
    this.starValue = document.getElementById("radio1");;
    console.log(this.starValue, ' star')

  }
  openWindowChat() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: this.minimize,
      maximize: this.maximize,
      fullScreen: this.fullScreen,
    }
    this.windowService.open(
      this.chatTemplate,
      { title: 'Chat con vendedor', hasBackdrop: true, buttons: buttonsConfig },
    );
  }

  openWindowProfile() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: this.minimize,
      maximize: this.maximize,
      fullScreen: this.fullScreen,
    }
    this.windowService.open(
      this.profileTemplate,
      { title: 'Datos del vendedor', hasBackdrop: true, buttons: buttonsConfig },
    );
  }
  openWindowQualification(){
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: this.minimize,
      maximize: this.maximize,
      fullScreen: this.fullScreen,
    }
    this.windowService.open(
      this.qualificationTemplate,
      { title: 'Calificar vendedor', hasBackdrop: true, buttons: buttonsConfig },
    );
  }


  star(value){
    this.starValue = value;
    return this.starValue;

  }


  counterUp(){
    this.imagesCounter+=1;
  }
  counterDown(){
    this.imagesCounter-=1;
  }

  addFavorites(){
    this.favorites = true
  }

  deleteFavorites(){
    this.favorites = false;
  }
  messages: any[] = [
    {
      type: 'text',
      text: 'Hola! realiza tus consultas sobre el producto!',
      customMessageData: {
     
        text: 'Hola! consulta tus preguntas sobre el producto',
      },
      reply: false,
      date: new Date(),
      user: {
        name: 'Vendedor',
       
      },
    },
  ];

  sendMessage(event) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      files: files,
      type: files.length ? 'file' : 'text',
      reply: true,
      user: {
        name: 'Usuario comprador',
      },
    });
  }

goToListProduct() {
  this.router.navigateByUrl(`marketplace/list-products`);
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
