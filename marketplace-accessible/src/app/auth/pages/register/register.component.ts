import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogService, NbToastrService, NbWindowControlButtonsConfig, NbWindowRef, NbWindowService } from '@nebular/theme';
import { NbBooleanInput } from '@nebular/theme/components/helpers';
import { Subject } from 'rxjs';
import { NbCalendarRange, NbDateService } from '@nebular/theme';
import { Router } from '@angular/router';
import { ModalRegisterComponent } from '../modal-register/modal-register.component';
import { ScreenSizeService } from '../../../pages/marketplace/services/screen-size.service';
import { ProfileService } from '../../../pages/marketplace/services/profile.service';
import { eo, es } from 'date-fns/locale';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private destroy$ = new Subject<any>();

  nameMaxLength: number;
  nameIsRequired!: boolean;
  surnameMaxLength: number;
  surnameIsRequired!: boolean;
  descriptionMaxLength!: number;
  descriptionIsRequired!: boolean;
  addressMaxLength: number;
  addressIsRequired!: boolean;
  regionMaxLength: number;
  regionIsRequired!: boolean;
  contactNumberMaxLength: number;
  contactNumberIsRequired!: boolean;
  dateIsRequired!: boolean;
  imageMaxLength!: number;
  imageIsRequired!: boolean;
  date = new Date();
  createLoadingSpinner!: boolean;
  productForm!: FormGroup;
  lastImagePicked!: FileList;
  minimize: boolean;
  maximize: boolean;
  fullScreen: boolean;
  fontSize: number;
  minDate: Date;

  constructor(
    private fb: FormBuilder,
    private toastr: NbToastrService,
    private windowService: NbWindowService,
    private router: Router,
    private screenSizeService : ScreenSizeService,
    private profileService : ProfileService,
  
    ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.initializeVariables();
    this.initializeForms();
  }
  @ViewChild('modal', { read: TemplateRef }) modalTemplate: TemplateRef<HTMLElement>;
  categories = [
    
      'Videojuegos',
     'Vestuario',
     'Electronica',
     'Vehiculos'
    
  ]


  private initializeVariables() {
    this.nameMaxLength = 100;
    this.nameIsRequired = true
    this.surnameMaxLength = 100
    this.surnameIsRequired = true
    this.descriptionMaxLength = 500
    this.descriptionIsRequired = false
    this.addressMaxLength = 100,
    this.addressIsRequired = true
    this.regionIsRequired = true,
    this.regionMaxLength = 100,
    this.contactNumberIsRequired = true
    this.contactNumberMaxLength = 9
    this.dateIsRequired = true
    this.imageMaxLength = 1
    this.imageIsRequired = false
    this.createLoadingSpinner = false
    this.minDate = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);
    //---- font size
    this.fontSize = this.screenSizeService.fontSize
    this.screenSizeService.change.subscribe((fontSize) => {
     this.fontSize = fontSize;
   });
  }

  private initializeForms() {
    this.productForm = this.fb.group({
      name: this.fb.control('', [
        Validators.required,
        Validators.maxLength(this.nameMaxLength),
      ]),
      surname: this.fb.control('', [
        Validators.required,
        Validators.maxLength(this.surnameMaxLength),
      ]),
      description: this.fb.control('', [
        Validators.required,
        Validators.maxLength(this.descriptionMaxLength),
      ]),
      address: this.fb.control('', [
        Validators.required,
        Validators.maxLength(this.addressMaxLength),
      ]),
      region: this.fb.control('', [
        Validators.required,
        Validators.maxLength(this.addressMaxLength),
      ]),
      contactNumber: this.fb.control('', [
        Validators.required,
        Validators.maxLength(this.contactNumberMaxLength),
      ]),
      date: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required ,),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      images: this.fb.array([]),
      isActive: this.fb.control(false, Validators.required),
    });
  }
  get imagesArray(): FormArray {
		return this.productForm.get('images') as FormArray;
	}
  showPassword = false;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  openWindowModal(){
    console.log(this.productForm.value,'aaaaa')
   this.profileService.addProfile(this.productForm.get('email').value, this.productForm.value)
    console.log( this.profileService.recentLogged, 'email ', this.productForm.value, 'form value')
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: this.minimize,
      maximize: this.maximize,
      fullScreen: this.fullScreen,
    }
   const windowRef = this.windowService.open(
      ModalRegisterComponent,
      { title: 'Registro completado', hasBackdrop: true, buttons: buttonsConfig },
    );
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
			//	this.toastr.showErrorToast();
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

 

 
}