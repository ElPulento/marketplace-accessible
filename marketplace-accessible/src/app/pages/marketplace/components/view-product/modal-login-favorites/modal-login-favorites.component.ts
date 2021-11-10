import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef } from '@nebular/theme';
import { ScreenSizeService } from '../../../services/screen-size.service';

@Component({
  selector: 'modal-login-favorites',
  templateUrl: './modal-login-favorites.component.html',
  styleUrls: ['./modal-login-favorites.component.scss']
})
export class ModalLoginFavoritesComponent implements OnInit {
  loading = false;
  fontSize: number;
  constructor(
    private router: Router,
    protected windowRef: NbWindowRef,
    private toastrService: NbToastrService,
    private screenSizeService : ScreenSizeService,
  ) { }

  ngOnInit() {
      //---- font size
      this.fontSize = this.screenSizeService.fontSize
      this.screenSizeService.change.subscribe((fontSize) => {
       this.fontSize = fontSize;
     });
  }

  goToBack(){
    this.windowRef.close()

 }
  goToLogin(){
    this.loading = true;
    setTimeout(() => this.loading = false, 500);
    setTimeout(() =>  this.router.navigateByUrl(`auth/login`), 500);
    setTimeout(() => this.windowRef.close(), 500);
  }
}