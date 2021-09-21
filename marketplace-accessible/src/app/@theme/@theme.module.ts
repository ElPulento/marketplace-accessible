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
  NbToggleComponent,
  NbToggleModule,
  NbUserModule,
} from '@nebular/theme';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ColorsPageComponent } from './colors-page/colors-page.component';
import { HeaderNebularComponent } from './header-nebular/header-nebular.component';
import { ScreenSizeComponent } from './screen-size/screen-size.component';


@NgModule({
  declarations: [SidebarComponent, ColorsPageComponent,FooterComponent, ScreenSizeComponent],
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
    
  ],
  exports: [ColorsPageComponent,SidebarComponent, FooterComponent,ScreenSizeComponent]
})
export class ThemeModule {}
