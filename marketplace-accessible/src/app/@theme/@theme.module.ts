import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule,
  NbUserModule,
} from '@nebular/theme';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ColorsPageComponent } from './colors-page/colors-page.component';

@NgModule({
  declarations: [SidebarComponent, ColorsPageComponent],
  imports: [
    CommonModule,
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
    NbCardModule,
    NbButtonModule,
  ],
  exports: [ColorsPageComponent]
})
export class ThemeModule {}
