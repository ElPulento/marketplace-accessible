import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { CreateNewProductComponent } from './components/create-new-product/create-new-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BiciVolcanoComponent } from './components/bici-volcano/bici-volcano.component';


@NgModule({
  declarations: [
    CreateNewProductComponent,
    ListProductsComponent,
    ViewProductComponent,
    MainPageComponent,
    BiciVolcanoComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule
  ]
})
export class MarketplaceModule { }
