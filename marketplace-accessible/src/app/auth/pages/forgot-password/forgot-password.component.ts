import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { HeaderService } from '../../../pages/marketplace/services/header.service';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  private destroy$ = new Subject<any>();
  passLoadingSpinner!: boolean;
  passForm!: FormGroup;
  passHeader: boolean;
 
  constructor(
    private fb: FormBuilder,
    private toastrService: NbToastrService,
    private router : Router,
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

  private initializeVariables() {
    this.passLoadingSpinner = false;
  }

  private initializeForms() {
    this.passForm = this.fb.group({
      email: this.fb.control('', [
        Validators.required,
        Validators.email,
      ]),
     
    });
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
  goToRegister(){
      this.router.navigateByUrl(`auth/register`);
  }
  goToLogin() {
    this.router.navigateByUrl(`auth/login`);
  }
  loading = false;
  login(){
    
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
    setTimeout(() =>  this.router.navigateByUrl(``), 2000);
    setTimeout(
      () =>
        this.toastrService.show(
          'Se ha recuperado la contraseña correctamente',
          `Recuperar contraseña`,
          {
            status: 'info',
            icon: 'checkmark-outline',
            preventDuplicates: true,
          }
        ),
      2000
    );
    
  }
  get form() {
    return this.passForm.controls;
  }

}
