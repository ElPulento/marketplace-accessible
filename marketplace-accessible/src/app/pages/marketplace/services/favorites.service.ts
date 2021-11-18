import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites = false;
  listFavorites : string[] = [];
  id : string;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(
    
  ) {}

  IsFavorite(id : string){
    this.id = id;
    for ( var i = 0 ; i < this.listFavorites.length ; i++){
      if (this.listFavorites[i] === id){
        this.favorites = true;
        this.change.emit(this.favorites);
        return this.favorites;
      }
    }
    this.favorites = false;
    this.change.emit(this.favorites);
    return this.favorites;
  }

  addFavorites(id : string) {
    this.favorites = true;
    this.change.emit(this.favorites);
    this.listFavorites.push(id)
  }
  deleteFavorites(id : string) {
    this.favorites = false;
    this.change.emit(this.favorites);
    const i = this.listFavorites.indexOf( id );
    if ( i !== -1 ) {
      this.listFavorites.splice( i, 1 );
    }
  }

  deleteAllFavorites(){
    this.listFavorites = [];
  }


}
