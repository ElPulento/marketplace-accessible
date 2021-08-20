import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
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
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SidebarComponent],
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
    NbEvaIconsModule,
  ],
})
export class ThemeModule {}
