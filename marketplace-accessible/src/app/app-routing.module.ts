import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'marketplace',
    loadChildren: () =>
      import('./pages/marketplace/marketplace.module').then(
        (m) => m.MarketplaceModule
      ),
  },
  {
    path: '',
    redirectTo: 'marketplace/main-page',
    pathMatch: 'full',
  },
];
const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
