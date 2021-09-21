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
} from '@nebular/theme';
import { HeaderComponent } from './@theme/header/header.component';
import { FooterComponent } from './@theme/footer/footer.component';
import { MarketplaceModule } from './pages/marketplace/marketplace.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SharedModule } from './pages/shared/shared.module';
import { HeaderNebularComponent } from './@theme/header-nebular/header-nebular.component';


@NgModule({
  declarations: [AppComponent,HeaderComponent,HeaderNebularComponent],
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
			duration: 6000,
			preventDuplicates: true,
			destroyByClick: true,
			limit: 3,
		}),
    NbMenuModule.forRoot(),
   
  ],
  exports: [HeaderComponent, FooterComponent,HeaderNebularComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
