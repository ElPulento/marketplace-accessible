import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  category = '';
  listProduct = []; // title id
  @Output() change: EventEmitter<string> = new EventEmitter();
  @Output() change2: EventEmitter<string[]> = new EventEmitter();
  constructor() {}

  updateProduct( data : string , id ){
    for (let i = 0 ; i < this.listProduct.length ; i++ ){
      if (this.listProduct[i].title === id){
        this.listProduct[i] = [];
        this.listProduct[i] = data;
        this.change2.emit(this.listProduct);
      }
    }
  }

  addProduct( data : string) {
    this.listProduct.push(data)
    this.change2.emit(this.listProduct);
  }

  deleteProduct(id : string) {
    const i = this.listProduct.indexOf(id);
    if ( i !== -1 ) {
      this.listProduct.splice( i, 1 );
    }
    this.change2.emit(this.listProduct);
  }

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
