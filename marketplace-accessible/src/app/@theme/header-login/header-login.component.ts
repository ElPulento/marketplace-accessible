import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_WINDOW, NbMenuService, NbToastrService, NbThemeService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { FavoritesService } from '../../pages/marketplace/services/favorites.service';
import { HeaderService } from '../../pages/marketplace/services/header.service';
import { InputSearchService } from '../../pages/marketplace/services/inputSearch.service';
import { ProductsService } from '../../pages/marketplace/services/products.service';
import { ProfileService } from '../../pages/marketplace/services/profile.service';

@Component({
  selector: 'header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss'],
})
export class HeaderLoginComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  login = true;
  currentTheme = 'default';
  checked: string;
  name: string;
  surname: string;
  search : string;
  constructor(
    private router: Router,
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window,
    private headerService: HeaderService,
    private toastrService: NbToastrService,
    private themeService: NbThemeService,
    private favoritesService : FavoritesService,
    private productsService : ProductsService,
    private profileService : ProfileService,
    private inputSearch : InputSearchService,
    
  ) {}

  loading = false;
  itemsLogin = [
    { title: 'Ver mi perfil' },
    { title: 'Ver mis productos'},
    { title: 'Favoritos' },
    { title: 'Información' },
    { title: 'Cerrar sesión' },
  ];
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
    this.search = this.inputSearch.search;
    this.currentTheme = this.themeService.currentTheme;
    this.headerService.change.subscribe((login) => {
      this.login = login;
      console.log(login, 'login header');
    });
     //----
     this.themeService
     .onThemeChange()
     .pipe(
       map(({ name }) => name),
       takeUntil(this.destroy$)
     )
     .subscribe((themeName) => (this.currentTheme = themeName));

    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title)
      )
      .subscribe((title) => {
        if (title == 'Información') {
          this.router.navigateByUrl(`marketplace/information`);
        }
        if (title == 'Ver mi perfil') {
          this.router.navigateByUrl(`marketplace/view-profile`);
        }
        if (title == 'Ver mis productos') {
          this.router.navigateByUrl(`marketplace/view-list-products`);
        }
        if (title == 'Favoritos') {
          this.router.navigateByUrl(`marketplace/favorites`);
        }
        if (title == 'Cerrar sesión') {
          this.loading = true;
          this.favoritesService.deleteAllFavorites()
          this.profileService.recentLogged = null;
          setTimeout(() => (this.loading = false), 2000);
          setTimeout(() => this.headerService.signOff(), 2000);
          setTimeout(() => this.router.navigateByUrl(``), 2000);
          setTimeout(
            () =>
              this.toastrService.show(
                'Se ha cerrado sesión correctamente',
                `Cerrar sesión`,
                {
                  status: 'info',
                  icon: 'checkmark-outline',
                  preventDuplicates: true,
                }
              ),
            2000
          );
        }
      });
      if ( this.profileService.IsLogged(this.profileService.recentLogged)){
          for ( let i =0 ; i<this.profileService.listLogged.length ; i++){
            if ( this.profileService.dataProfile[i].email === this.profileService.recentLogged ){
              this.name = this.profileService.dataProfile[i].name;
              this.surname = this.profileService.dataProfile[i].surname;
            }
          }
      }else {
        this.name = "Nombre";
        this.surname = "Usuario";
      }
      
      
  }
  changeTheme(themeName: string) {
    setTimeout(() => this.themeService.changeTheme(themeName), 100);
    this.checked = themeName;
  }

  goToListProduct() {
    this.inputSearch.search = this.search;
    this.inputSearch.input(this.search);
    this.productsService.allCategories()
    this.router.navigateByUrl(`marketplace/list-products`);
  }

  showMenu() {
    document.getElementById('mode').classList.toggle('show');
  }
}
