import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';
import { CreateNewProductComponent } from './components/create-new-product/create-new-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { BiciVolcanoComponent } from './components/bici-volcano/bici-volcano.component';

const routes: Routes = [
  { path: 'create-product', component: CreateNewProductComponent },
  { path: 'view-product', component: ViewProductComponent },
  { path: 'list-products', component: ListProductsComponent },
  { path: 'volcano', component: BiciVolcanoComponent },
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketplaceRoutingModule {}
