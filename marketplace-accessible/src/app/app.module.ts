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
} from '@nebular/theme';
import { HeaderComponent } from './@theme/header/header.component';
import { FooterComponent } from './@theme/footer/footer.component';
import { MarketplaceModule } from './pages/marketplace/marketplace.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    ThemeModule,
    MarketplaceModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
