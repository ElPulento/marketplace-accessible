import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  loginHeader = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  login() {
    this.loginHeader = true;
    this.change.emit(this.loginHeader);
  }
  signOff(){
    this.loginHeader = false;
    this.change.emit(this.loginHeader);
  }
}
