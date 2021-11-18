import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService, NbWindowRef } from '@nebular/theme';
import { FavoritesService } from '../../../services/favorites.service';
import { QualificationService } from '../../../services/qualification.service';

@Component({
  selector: 'modal-qualification',
  templateUrl: './modal-qualification.component.html',
  styleUrls: ['./modal-qualification.component.scss']
})
export class ModalQualificationComponent implements OnInit {

  starValue: HTMLElement;
  i : number;
  loading = false;
  qualification: boolean;
  productId: string;
  isQualified : boolean;
  star2: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected windowRef: NbWindowRef,
    private toastrService: NbToastrService,
    private qualificationService : QualificationService,
    private favoritesService : FavoritesService,
  ) { }

  ngOnInit() {
    this.productId = this.favoritesService.id;
  
    //qualification
    this.isQualified = this.qualificationService.IsQualified(this.productId);

    this.qualification = this.qualificationService.IsQualified(this.productId)
    this.qualificationService.change.subscribe(qualification => {
      this.qualification = qualification
    })
    this.star2 = this.qualificationService.starValue;
  }

  goToBack(){
    this.loading = true;
    setTimeout(() => this.loading = false, 1000);
    setTimeout(() => this.qualificationService.addQualification(this.productId, this.i), 1000);
    setTimeout(() =>  this.qualification = this.qualificationService.qualification, 1000);
    setTimeout(() => this.windowRef.close(), 1000);
    setTimeout(() =>   this.toastrService.show('Se ha guardado la calificación correctamente',`Calificar atencion del vendedor`, {
      status: 'info',
      icon: 'checkmark-outline',
      preventDuplicates: true,
    }), 1000);
    
    
  }

  star(value){
    this.i = value;
    this.starValue = value;

    return this.starValue;

  }

}
