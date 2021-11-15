import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputSearchService {

  search = '';

  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() {}

  input(value  :string) {
    this.search = value;
    this.change.emit(this.search);
  }

}
