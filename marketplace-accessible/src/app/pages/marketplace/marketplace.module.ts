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
  NbChatModule,
  NbAccordionModule,
 
} from '@nebular/theme';
import { InformationComponent } from './components/information/information.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule, MdbCardImageComponent } from 'angular-bootstrap-md';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ModalQualificationComponent } from './components/view-product/modal-qualification/modal-qualification.component';
import { OptionsComponent } from './components/options/options.component';

@NgModule({
  declarations: [
    CreateNewProductComponent,
    ListProductsComponent,
    ViewProductComponent,
    MainPageComponent,
    InformationComponent,
    ModalQualificationComponent,
    OptionsComponent,
   
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    SharedModule,
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
    NbSpinnerModule,
    NbListModule,
    NbActionsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialFileInputModule,
    IvyCarouselModule,
    NbChatModule,
    NbAccordionModule,
    NbWindowModule.forChild(),
    NbDialogModule.forChild(),


  ],
  
})
export class MarketplaceModule {}
