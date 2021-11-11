import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  category = '';
  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() {}

  videojuegos() {
    this.category = 'Videojuegos';
    this.change.emit(this.category);
  }
  vehiculos() {
    this.category = 'Vehiculos';
    this.change.emit(this.category);
  }
  electronica() {
    this.category = 'Electronica';
    this.change.emit(this.category);
  }
  vestuario() {
    this.category = 'Vestuario';
    this.change.emit(this.category);
  }

  allCategories(){
    this.category = 'all';
    this.change.emit(this.category);
  }
  
}
