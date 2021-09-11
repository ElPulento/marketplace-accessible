import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import * as restrictions from '../../models/restrictions/new-product.restrictions';
@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.scss'],
})
export class CreateNewProductComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<any>();

  titleMaxLength!: number;
  titleIsRequired!: boolean;
  descriptionMaxLength!: number;
  descriptionIsRequired!: boolean;
  priceIsRequired!: boolean;
  imageMaxLength!: number;
  imageIsRequired!: boolean;
  amountIsRequired!: boolean;
  createLoadingSpinner!: boolean;
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.initializeVariables();
    this.initializeForms();
  }

  private initializeVariables() {
    this.titleMaxLength = restrictions.titleMaxLength;
    this.titleIsRequired = restrictions.titleIsRequired;
    this.descriptionMaxLength = restrictions.descriptionMaxLength;
    this.descriptionIsRequired = restrictions.descriptionIsRequired;
    this.priceIsRequired = restrictions.priceIsRequired;
    this.imageMaxLength = restrictions.imageMaxLength;
    this.imageIsRequired = restrictions.imageIsRequired;
    this.amountIsRequired = restrictions.amountIsRequired;
    this.createLoadingSpinner = false;
  }

  private initializeForms() {
    this.productForm = this.fb.group({
      title: this.fb.control('', [
        Validators.required,
        Validators.maxLength(this.titleMaxLength),
      ]),
      description: this.fb.control('', [
        Validators.required,
        Validators.maxLength(this.descriptionMaxLength),
      ]),
      amount: this.fb.control('', Validators.required),
      price: this.fb.control('', Validators.required),
      images: this.fb.control('', [Validators.required]),
    });
  }
  get form() {
    return this.productForm.controls;
  }
}
