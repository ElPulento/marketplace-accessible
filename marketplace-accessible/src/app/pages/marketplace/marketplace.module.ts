import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { CreateNewProductComponent } from './components/create-new-product/create-new-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BiciVolcanoComponent } from './components/bici-volcano/bici-volcano.component';
import { BiciClassicComponent } from './components/bici-classic/bici-classic.component';
import { BiciOceanComponent } from './components/bici-ocean/bici-ocean.component';
import { BiciSpiderComponent } from './components/bici-spider/bici-spider.component';


@NgModule({
  declarations: [
    CreateNewProductComponent,
    ListProductsComponent,
    ViewProductComponent,
    MainPageComponent,
    BiciVolcanoComponent,
    BiciClassicComponent,
    BiciOceanComponent,
    BiciSpiderComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule
  ]
})
export class MarketplaceModule { }
