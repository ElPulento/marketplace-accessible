import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { CreateNewProductComponent } from './components/create-new-product/create-new-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ThemeModule } from '../../@theme/@theme.module';
import {
  NbBadgeModule,
  NbDatepickerModule,
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbStepperModule,
  NbTabsetModule,
  NbToggleModule,
  NbTooltipModule,
  NbWindowModule,
  NbSpinnerModule,
  NbListModule,
  NbLayoutModule,
  NbActionsModule,
  NbDialogModule,
} from '@nebular/theme';
import { InformationComponent } from './components/information/information.component';

@NgModule({
  declarations: [
    CreateNewProductComponent,
    ListProductsComponent,
    ViewProductComponent,
    MainPageComponent,
    InformationComponent,
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    ThemeModule,
    NbLayoutModule,
    NbActionsModule,
    NbSelectModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbCardModule,
    NbIconModule,
    NbBadgeModule,
    NbDatepickerModule,
    NbFormFieldModule,
    NbInputModule,
    NbPopoverModule,
    NbStepperModule,
    NbTabsetModule,
    NbToggleModule,
    NbTooltipModule,
    NbWindowModule,
    NbSpinnerModule,
    NbListModule,
    NbDialogModule,
    NbActionsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MarketplaceModule {}
