import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef } from '@nebular/theme';
import { ProfileService } from '../../../pages/marketplace/services/profile.service';
import { ScreenSizeService } from '../../../pages/marketplace/services/screen-size.service';

@Component({
  selector: 'modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent implements OnInit {
  loading = false;
  fontSize: number;
  constructor(
    private router: Router,
    protected windowRef: NbWindowRef,
    private toastrService: NbToastrService,
    private screenSizeService : ScreenSizeService,
    private profileService : ProfileService,
  ) { }

  ngOnInit() {
    //---- font size
    this.fontSize = this.screenSizeService.fontSize
    this.screenSizeService.change.subscribe((fontSize) => {
     this.fontSize = fontSize;
   });
  }

  goToLogin(){
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
    setTimeout(() =>  this.router.navigateByUrl(`auth/login`), 2000);
    setTimeout(() => this.windowRef.close(), 2000);
    setTimeout(
      () =>
        this.toastrService.show(
          'Se ha registrado correctamente, Bienvenido!',
          `Registro completado!`,
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
