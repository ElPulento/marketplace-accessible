import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThemeModule } from './@theme/@theme.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbButtonModule,
  NbCardModule,
  NbActionsModule,
  NbToastrModule,
  NbMenuModule,
  NbSearchModule,
  NbContextMenuModule,
  NbWindowModule,
  NbDatepickerModule,
  NbDialogModule,
  NbToggleModule,
  NbSpinnerModule,
  NbUserModule,
  NbTimepickerModule,
} from '@nebular/theme';
import { HeaderComponent } from './@theme/header/header.component';
import { HeaderLoginComponent } from './@theme/header-login/header-login.component'
import { FooterComponent } from './@theme/footer/footer.component';
import { MarketplaceModule } from './pages/marketplace/marketplace.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SharedModule } from './pages/shared/shared.module';
import { HeaderNebularComponent } from './@theme/header-nebular/header-nebular.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { eo, es } from 'date-fns/locale';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeaderNebularComponent, HeaderLoginComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    ThemeModule,
    MarketplaceModule,
    SharedModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbActionsModule,
    NbToastrModule.forRoot({
      hasIcon: true,
      duration: 4000,
      preventDuplicates: true,
      destroyByClick: true,
      limit: 3,
    }),
    NbMenuModule.forRoot(),
    NbSearchModule,
    NbContextMenuModule,
    MDBBootstrapModule.forRoot(),
    IvyCarouselModule,
    NbWindowModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDateFnsDateModule.forRoot({
      format : "dd-MM-yyyy",
      parseOptions: { locale: eo },
			formatOptions: { locale: eo },
    }),
    NbDialogModule.forRoot(),
    NbToggleModule,
    NbSpinnerModule,
    NbToastrModule.forRoot(),
    NbUserModule,
    NbTimepickerModule.forRoot(),
    FormsModule,
  ],
  exports: [HeaderComponent, FooterComponent, HeaderNebularComponent, HeaderLoginComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
