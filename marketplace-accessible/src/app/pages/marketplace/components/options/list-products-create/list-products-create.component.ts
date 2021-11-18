import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { FavoritesService } from '../../../services/favorites.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'list-products-create',
  templateUrl: './list-products-create.component.html',
  styleUrls: ['./list-products-create.component.scss']
})
export class ListProductsCreateComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  getProductSpinnerLoading = false;
  listFavorites : string[] = [];
  loading : boolean;
  favorites : boolean;
  productId: string;
  listProducts: any[];
 
  constructor(
    private favoritesService : FavoritesService,
    private toastrService: NbToastrService,
    private router: Router,
    private productsService : ProductsService,
  ) { }

  ngOnInit() {
    this.listProducts = this.productsService.listProduct;

    this.loading = false;
    //favorites
    this.favorites = this.favoritesService.IsFavorite(this.productId)
    this.favoritesService.change.subscribe(favorites => {
      this.favorites = favorites
    })
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  
  deleteProduct(i){
    this.loading = true;
    setTimeout(() =>  this.loading = false, 1000);
    setTimeout(() => this.productsService.deleteProduct(i), 1000);
    setTimeout(() =>   this.toastrService.show('El producto se eliminó correctamente ',`Eliminar producto`, {
      status: 'danger',
      icon: 'close-outline',
      preventDuplicates: true,
    }), 1000);
    setTimeout(() =>  this.reload(), 1000);
  }
  goToCreateProduct() {
    this.loading = true;
    this.productsService.allCategories()
    setTimeout(() =>  this.router.navigateByUrl(`marketplace/create-product`), 1000);
    
  }
  goToViewProduct(id : string) {
    this.router.navigateByUrl(`marketplace/view-my-products/${id}`);
  }
  reload(){
    this.ngOnInit();
    this.ngOnDestroy();
  }

}

  
  


