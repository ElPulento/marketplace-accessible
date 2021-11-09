import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  DEFAULT_FONT_SIZE = 15;
  fontSize = 15;
  disableUp = false;
  disableDown = false;
  @Output() change: EventEmitter<number> = new EventEmitter();
  @Output() change2: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  //----------------------------

  decrease() {
    if (this.fontSize !== 10) {
      this.fontSize = this.fontSize - 1;
      this.change.emit(this.fontSize);
      console.log(this.fontSize, 'Tamaño de fuente');
      this.disableDown = false;
      this.disableUp = false;
      this.change2.emit(this.disableDown);
    } else {
      this.change2.emit(this.disableDown);

      this.disableDown = true;
    }
  }

  increase() {
    if (this.fontSize !== 25) {
      this.fontSize = this.fontSize + 1;
      this.change.emit(this.fontSize);
      this.disableUp = false;
      this.disableDown = false;
      this.change2.emit(this.disableUp);

      console.log(this.fontSize, 'Tamaño de fuente');
    } else {
      this.change2.emit(this.disableUp);

      this.disableUp = true;
    }
  }

  reset() {
    this.fontSize = this.DEFAULT_FONT_SIZE;
    this.change.emit(this.fontSize);
    this.disableDown = false;
    this.disableUp = false;
    this.change2.emit(this.disableDown);
    this.change2.emit(this.disableUp);
    console.log(this.fontSize, 'Tamaño de fuente');
  }
}
