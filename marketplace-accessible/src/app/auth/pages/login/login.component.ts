import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { HeaderService } from '../../../pages/marketplace/services/header.service';

@Component({
  selector: '<app-login>',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit, OnDestroy {

  
  private destroy$ = new Subject<any>();
  loginLoadingSpinner!: boolean;
  loginForm!: FormGroup;
  loginHeader: boolean;
 
 
  


  constructor(
    private fb: FormBuilder,
    private toastr: NbToastrService,
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
    this.loginLoadingSpinner = false;
  }

  private initializeForms() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(8)
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
  loading = false;
  login(){
    
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
    setTimeout(() => this.headerService.login(), 2000);
    setTimeout(() =>  this.router.navigateByUrl(``), 2000);
    
  }
  get form() {
    return this.loginForm.controls;
  }
  

  


}
