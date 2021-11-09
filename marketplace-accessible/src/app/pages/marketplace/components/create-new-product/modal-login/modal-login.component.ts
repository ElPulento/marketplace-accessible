import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef } from '@nebular/theme';
import { ScreenSizeService } from '../../../services/screen-size.service';

@Component({
  selector: 'modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
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

  goToLogin(){
    this.loading = true;
    setTimeout(() => this.loading = false, 500);
    setTimeout(() =>  this.router.navigateByUrl(`auth/login`), 500);
    setTimeout(() => this.windowRef.close(), 500);

 }
  goToMain(){
    this.loading = true;
    setTimeout(() => this.loading = false, 500);
    setTimeout(() =>  this.router.navigateByUrl(``), 500);
    setTimeout(() => this.windowRef.close(), 500);
  }
}