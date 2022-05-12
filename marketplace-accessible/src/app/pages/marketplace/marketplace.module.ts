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
import { BiciSkyComponent } from './components/bici-sky/bici-sky.component';
import { BiciRustyComponent } from './components/bici-rusty/bici-rusty.component';
import { CascoBlackComponent } from './components/casco-black/casco-black.component';
import { GuantesRaptorComponent } from './components/guantes-raptor/guantes-raptor.component';


@NgModule({
  declarations: [
    CreateNewProductComponent,
    ListProductsComponent,
    ViewProductComponent,
    MainPageComponent,
    BiciVolcanoComponent,
    BiciClassicComponent,
    BiciOceanComponent,
    BiciSpiderComponent,
    BiciSkyComponent,
    BiciRustyComponent,
    CascoBlackComponent,
    GuantesRaptorComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule
  ]
})
export class MarketplaceModule { }
