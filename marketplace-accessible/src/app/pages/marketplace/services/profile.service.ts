import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  pass : boolean;;
  isLogged = false;
  listLogged : string[] = [];
  recentLogged : string;
  dataProfile  = [];
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() change2: EventEmitter<number> = new EventEmitter();
  @Output() change3: EventEmitter<string> = new EventEmitter();
  @Output() change4: EventEmitter<string[]> = new EventEmitter();
  
  constructor(
    
  ) {}

  IsLogged(id : string){
    for ( var i = 0 ; i < this.listLogged.length ; i++){
      if (this.listLogged[i] === id){
        this.isLogged = true;
        this.recentLogged = id;
        this.change3.emit(this.recentLogged);
        this.change.emit(this.isLogged);
        return this.isLogged;
      }
    }
    this.isLogged = false;
    this.change.emit(this.isLogged);
    return this.isLogged;
  }

  updateProfile(id : string , data : string ){
    for (let i = 0 ; i < this.listLogged.length ; i++ ){
      if (this.listLogged[i] === this.dataProfile[0].email){
        this.listLogged[i] = id;
        this.dataProfile = [];
        this.recentLogged = id;
        this.change3.emit(this.recentLogged);
        this.dataProfile.push(data)
        this.change4.emit(this.dataProfile);
      }
    }
  }

  passCorrect(id : string ,pass : string){
    for (let i = 0 ; i < this.listLogged.length ; i++ ){
      if (pass === this.dataProfile[0].password && id === this.dataProfile[0].email){
        this.pass = true;
        this.change.emit(this.pass);
        return true;
      }else{
        this.pass = false;
        this.change.emit(this.pass);
        return false;
      }
    }
  }

 


  addProfile(id : string , data : string) {
    this.isLogged = true;
    this.change.emit(this.isLogged);
    this.listLogged.push(id)
    this.recentLogged = id;
    this.change3.emit(this.recentLogged);
    this.dataProfile.push(data)
   
  
  }
  deleteProfile(id : string) {
    this.isLogged = false;
    this.change.emit(this.isLogged);
    const i = this.listLogged.indexOf( id );
 
    if ( i !== -1 ) {
      this.listLogged.splice( i, 1 );
    }
  }
}