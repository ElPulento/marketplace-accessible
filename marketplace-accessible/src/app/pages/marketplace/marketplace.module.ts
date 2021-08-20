import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { CreateNewProductComponent } from './components/create-new-product/create-new-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ThemeModule } from '../../@theme/@theme.module';
import {
  NbActionsModule,
  NbButtonModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule,
  NbUserModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    CreateNewProductComponent,
    ListProductsComponent,
    ViewProductComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    ThemeModule,
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbSelectModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
  ],
})
export class MarketplaceModule {}
