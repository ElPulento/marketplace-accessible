import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbToastrModule,
  NbToggleComponent,
  NbToggleModule,
  NbUserModule,
} from '@nebular/theme';
import { HeaderComponent } from './header/header.component';
import { ColorsPageComponent } from './colors-page/colors-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ColorsPageComponent,FooterComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbContextMenuModule,
    NbSelectModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbToggleModule,
    NbInputModule,
    NbSpinnerModule,
    NbToastrModule,
    FormsModule,
  
  ],
  exports: [ColorsPageComponent,FooterComponent]
})
export class ThemeModule {}
