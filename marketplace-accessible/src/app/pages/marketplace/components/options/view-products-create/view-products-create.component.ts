import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { NbBooleanInput } from '@nebular/theme/components/helpers';
import { Subject } from 'rxjs';
import * as restrictions from '../../../models/restrictions/new-product.restrictions';
import { HeaderService } from '../../../services/header.service';
import { ProductsService } from '../../../services/products.service';
import { ScreenSizeService } from '../../../services/screen-size.service';


@Component({
  selector: 'view-products-create',
  templateUrl: './view-products-create.component.html',
  styleUrls: ['./view-products-create.component.scss']
})
export class ViewProductsCreateComponent implements OnInit {
  private destroy$ = new Subject<any>();
  @ViewChild('delete', { read: TemplateRef }) deleteTemplate: TemplateRef<HTMLElement>;
	@Output() onChange: EventEmitter<File> = new EventEmitter<File>();
	@Input() isEnabled = true;



  titleMaxLength: number;
  titleIsRequired!: boolean;
  descriptionMaxLength!: number;
  descriptionIsRequired!: boolean;
  imageDescriptionMaxLength!: number;
  priceIsRequired!: boolean;
  imageMaxLength!: number;
  imageIsRequired!: boolean;
  amountIsRequired!: boolean;
  createLoadingSpinner!: boolean;
  productForm!: FormGroup;
  lastImagePicked!: FileList;
  actualImg: any;
  imagesCont: number;
  minimize: boolean;
  maximize: boolean;
  fullScreen: boolean;
  fontSize: number;
  login: boolean;
  title: string
  description: string;
  amount: string;
  price: string;
  categories2: string;
  images: string;
  isActive: boolean;
 

  constructor(
    private fb: FormBuilder,
    private toastrService: NbToastrService,
    private windowService: NbWindowService,
    private router: Router,
    private screenSizeService : ScreenSizeService,
    private loginService : HeaderService,
    private productService : ProductsService,
    ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.initializeVariables();
    this.initializeForms();
  }
  categories = [
    
      'Videojuegos',
     'Vestuario',
     'Electronica',
     'Vehiculos'
    
  ]


  private initializeVariables() {
    this.titleMaxLength = restrictions.titleMaxLength;
    this.titleIsRequired = restrictions.titleIsRequired;
    this.descriptionMaxLength = restrictions.descriptionMaxLength;
    this.descriptionIsRequired = restrictions.descriptionIsRequired;
    this.priceIsRequired = restrictions.priceIsRequired;
    this.imageMaxLength = restrictions.imageMaxLength;
    this.imageIsRequired = restrictions.imageIsRequired;
    this.amountIsRequired = restrictions.amountIsRequired;
    this.imageDescriptionMaxLength = restrictions.imageDescriptionLength;
    this.createLoadingSpinner = false;
    this.imagesCont = 0;
    this.fullScreen = false;
    this.minimize = false;
    this.maximize = false;
    //---- font size
    this.fontSize = this.screenSizeService.fontSize
    this.screenSizeService.change.subscribe((fontSize) => {
     this.fontSize = fontSize;
   });
   // login
   this.login = this.loginService.loginHeader;
   console.log(this.login,'esta logeado?')

   //profile
   for ( let i =0 ; i<this.productService.listProduct.length ; i++){
    if ( this.productService.productProfile[i].title === this.productService.listProduct[i].title ){
      this.title = this.productService.productProfile[i].title
      this.description = this.productService.productProfile[i].description
      this.amount = this.productService.productProfile[i].amount
      this.price = this.productService.productProfile[i].price
      this.categories2 = this.productService.productProfile[i].categories
      this.images = this.productService.productProfile[i].images
      this.isActive = this.productService.productProfile[i].isActive
    }
  }
  }

  private initializeForms() {
    this.productForm = this.fb.group({
      title: this.fb.control(this.title, [
        Validators.required,
        Validators.maxLength(this.titleMaxLength),
      ]),
      description: this.fb.control(this.description, [
        Validators.required,
        Validators.maxLength(this.descriptionMaxLength),
      ]),
      amount: this.fb.control(this.amount, Validators.required),
      price: this.fb.control(this.price, Validators.required),
      categories: this.fb.control(this.categories2, [Validators.required, Validators.minLength(1)]),
      images: this.fb.array([this.images]),
      isActive: this.fb.control(false, Validators.required),
    });
  }
  openWindowDelete() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: this.minimize,
      maximize: this.maximize,
      fullScreen: this.fullScreen,
    }
    this.windowService.open(
      this.deleteTemplate,
      { title: 'Eliminar imagen', hasBackdrop: true, buttons: buttonsConfig },
    );
  }

  imageChange(image) {
		this.actualImg = image;
	}
  get imagesArray(): FormArray {
		return this.productForm.get('images') as FormArray;
	}
  createImageItem(data: any): FormGroup {
		return this.fb.group(data);
	}
  detectFiles(event: any) {
		let images: FileList = event.target.files;
		this.lastImagePicked = images;

		if (images) {
			if (images.length > this.imageMaxLength) {
        console.log('No puede subir más de 5 imagenes')
			} else {
				for (let index = 0; index < images.length; index++) {
					const file = images[index];
					let reader = new FileReader();
					if (file.size < 5 * 1024 * 1024) {
						reader.onload = (e: any) => {
							this.imagesArray.push(
								this.createImageItem({
                  file,
									name: file.name,
                  description: this.fb.control('', Validators.required),
								}),
							);
						};
						reader.readAsDataURL(file);
					} else {
					//	this.toastr.showErrorToast();
					}
				}
			}
		}
	}
	removeFile(i: any) {
		this.imagesArray.removeAt(i);
   
	}
  get form() {
    return this.productForm.controls;
  }

  loading = false;
  goToList(){
    
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
    setTimeout(() =>  this.router.navigateByUrl(``), 2000);
    setTimeout(() =>   this.toastrService.show('Producto agregado correctamente',`Vender producto`, {
      status: 'info',
      icon: 'checkmark-outline',
      preventDuplicates: true,
    }), 2000);
    
  }

}