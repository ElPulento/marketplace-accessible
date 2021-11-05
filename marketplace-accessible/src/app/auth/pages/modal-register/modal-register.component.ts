import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent implements OnInit {
  loading = false;
  constructor(
    private router: Router,
    protected windowRef: NbWindowRef
  ) { }

  ngOnInit() {
  }

  goToLogin(){
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
    setTimeout(() =>  this.router.navigateByUrl(`auth/login`), 2000);
    setTimeout(() => this.windowRef.close(), 2000);
    
    
  }

}
