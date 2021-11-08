import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'modal-qualification',
  templateUrl: './modal-qualification.component.html',
  styleUrls: ['./modal-qualification.component.scss']
})
export class ModalQualificationComponent implements OnInit {

  starValue: HTMLElement;
  i : number;
  loading = false;
  constructor(
    private router: Router,
    protected windowRef: NbWindowRef,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit() {
  }

  goToBack(){
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
    setTimeout(() => this.windowRef.close(), 2000);
    setTimeout(() =>   this.toastrService.show('Se ha guardado la calificación correctamente',`Calificar atencion del vendedor`, {
      status: 'info',
      icon: 'checkmark-outline',
    }), 2000);
    
    
  }

  star(value){
    this.i = value;
    this.starValue = value;
    return this.starValue;

  }

}
