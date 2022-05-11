import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';
import { CreateNewProductComponent } from './components/create-new-product/create-new-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { BiciVolcanoComponent } from './components/bici-volcano/bici-volcano.component';
import { BiciClassicComponent } from './components/bici-classic/bici-classic.component';
import { BiciOceanComponent } from './components/bici-ocean/bici-ocean.component';
import { BiciSpiderComponent } from './components/bici-spider/bici-spider.component';
import { BiciSkyComponent } from './components/bici-sky/bici-sky.component';

const routes: Routes = [
  { path: 'create-product', component: CreateNewProductComponent },
  { path: 'view-product', component: ViewProductComponent },
  { path: 'list-products', component: ListProductsComponent },
  { path: 'volcano', component: BiciVolcanoComponent },
  { path: 'classic', component: BiciClassicComponent },
  { path: 'ocean', component: BiciOceanComponent },
  { path: 'spider', component: BiciSpiderComponent },
  { path: 'sky', component: BiciSkyComponent },
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketplaceRoutingModule {}
