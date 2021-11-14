import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { ProfileService } from '../../../services/profile.service';
import { ScreenSizeService } from '../../../services/screen-size.service';
import { HeaderService } from '../../../services/header.service';
@Component({
  selector: 'view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
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
  profile : string;
  logged : boolean;
  name: string
  surname: string;
  description: string;
  fecha: string;
  direccion: string;
  ciudad: string;
  email: string;
  contraseña: string;
  numero: string;
  loading = false;


  constructor(
    private fb: FormBuilder,
    private windowService: NbWindowService,
    private router: Router,
    private screenSizeService : ScreenSizeService,
    private profileService : ProfileService,
    private toastrService: NbToastrService,
    private headerService : HeaderService,
  
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
   //profile
   if ( this.profileService.IsLogged(this.profileService.recentLogged)){
    for ( let i =0 ; i<this.profileService.listLogged.length ; i++){
      if ( this.profileService.dataProfile[i].email === this.profileService.recentLogged ){
        this.profile = this.profileService.dataProfile[i];
        this.name = this.profileService.dataProfile[i].name
        this.surname = this.profileService.dataProfile[i].surname ;
        this.description = this.profileService.dataProfile[i].description ;
        this.fecha = this.profileService.dataProfile[i].date ;
        this.direccion = this.profileService.dataProfile[i].address;
        this.ciudad = this.profileService.dataProfile[i].region ;
        this.email = this.profileService.dataProfile[i].email ;
        this.contraseña = this.profileService.dataProfile[i].password ;
        this.numero = this.profileService.dataProfile[i].contactNumber;
        this.logged = true;
      }
    }
}else {
  this.logged = false;
}

if ( this.profileService.IsLogged(this.profileService.recentLogged)){
  for ( let i =0 ; i<this.profileService.listLogged.length ; i++){
    if ( this.profileService.dataProfile[i].email === this.profileService.recentLogged ){
      this.name = this.profileService.dataProfile[i].name;
      this.surname = this.profileService.dataProfile[i].surname;
    }
  }
}else {
this.name = "Nombre";
this.surname = "Usuario";
}
  }

  private initializeForms() {
    this.productForm = this.fb.group({
      name: this.fb.control(this.name, [
        Validators.required,
        Validators.maxLength(this.nameMaxLength),
      ]),
      surname: this.fb.control(this.surname, [
        Validators.required,
        Validators.maxLength(this.surnameMaxLength),
      ]),
      description: this.fb.control(this.description, [
        Validators.maxLength(this.descriptionMaxLength),
      ]),
      address: this.fb.control(this.direccion, [
        Validators.required,
        Validators.maxLength(this.addressMaxLength),
      ]),
      region: this.fb.control(this.ciudad, [
        Validators.required,
        Validators.maxLength(this.addressMaxLength),
      ]),
      contactNumber: this.fb.control(this.numero, [
        Validators.required,
        Validators.maxLength(this.contactNumberMaxLength),
      ]),
      date: this.fb.control(this.fecha, Validators.required),
      email: this.fb.control(this.email, Validators.required ,),
      password: this.fb.control(this.contraseña, [
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
  updateInformation(){
    this.loading = true;
    setTimeout(() => this.profileService.updateProfile(this.productForm.get('email').value, this.productForm.value), 2000);
    setTimeout(() => (this.loading = false), 2000);
   // setTimeout(() => this.router.navigateByUrl(``), 2000);
   setTimeout(() => (this.headerService.signOff()), 2000);
   setTimeout(() => (this.headerService.login()), 2000);
   setTimeout(() => (this.loading = false), 2000);
    setTimeout(
      () =>
        this.toastrService.show(
          'Se ha actualizado la información correctamente',
          `Actualizar información`,
          {
            status: 'info',
            icon: 'checkmark-outline',
            preventDuplicates: true,
          }
        ),
      2000
    );
  }



}