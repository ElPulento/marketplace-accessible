import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewProductComponent } from './components/create-new-product/create-new-product.component';
import { InformationComponent } from './components/information/information.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { CategoriesComponent } from './components/categories/categories.component'
import { EditInterfaceComponent } from './components/options/edit-interface/edit-interface.component';
import { FavoritesComponent } from './components/options/favorites/favorites.component';
import { ViewProfileComponent } from './components/options/view-profile/view-profile.component';
import { ViewProductsCreateComponent } from './components/options/view-products-create/view-products-create.component';
import { ListProductsCreateComponent } from './components/options/list-products-create/list-products-create.component';

const routes: Routes = [
  { path: 'create-product', component: CreateNewProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'list-products', component: ListProductsComponent },
  { path: 'information', component: InformationComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'edit-interface', component: EditInterfaceComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'view-list-products', component: ListProductsCreateComponent },
  { path: 'view-profile', component: ViewProfileComponent },
  { path: 'view-my-products', component: ViewProductsCreateComponent },
  { path: 'main', component: MainPageComponent },
  { path: '**', component: MainPageComponent },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketplaceRoutingModule {}
