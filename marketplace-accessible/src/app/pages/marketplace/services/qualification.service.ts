import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  qualification = false;
  listQualification : string[] = [];
  starValue : number;
  
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() change2: EventEmitter<number> = new EventEmitter();
  constructor(
    
  ) {}

  IsQualified(id : string){
    for ( var i = 0 ; i < this.listQualification.length ; i++){
      if (this.listQualification[i] === id){
        this.qualification = true;
        this.change.emit(this.qualification);
        return this.qualification;
      }
    }
    this.qualification = false;
    this.change.emit(this.qualification);
    return this.qualification;
  }

  addQualification(id : string, star) {
    this.qualification = true;
    this.change.emit(this.qualification);
    this.listQualification.push(id)
    this.starValue = star;
    this.change2.emit(this.starValue);
  }
  deleteQualification(id : string) {
    this.qualification = false;
    this.change.emit(this.qualification);
    const i = this.listQualification.indexOf( id );
 
    if ( i !== -1 ) {
      this.listQualification.splice( i, 1 );
    }
  }
}