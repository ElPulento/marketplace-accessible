import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewProductComponent } from './components/create-new-product/create-new-product.component';
import { InformationComponent } from './components/information/information.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ViewProductComponent } from './components/view-product/view-product.component';

const routes: Routes = [
  { path: 'create-product', component: CreateNewProductComponent },
  { path: 'view-product', component: ViewProductComponent },
  { path: 'list-products', component: ListProductsComponent },
  { path: 'information', component: InformationComponent },
  { path: '', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketplaceRoutingModule {}
