import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_WINDOW, NbMenuService, NbToastrService, NbThemeService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { HeaderService } from '../../pages/marketplace/services/header.service';

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
  constructor(
    private router: Router,
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window,
    private headerService: HeaderService,
    private toastrService: NbToastrService,
    private themeService: NbThemeService,
    
  ) {}

  loading = false;
  itemsLogin = [
    { title: 'Editar interfaz' },
    { title: 'Ver mi perfil' },
    { title: 'Favoritos' },
    { title: 'Cerrar sesión' },
  ];

  ngOnInit() {
    this.checked = this.themeService.currentTheme;
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
        if (title == 'Editar interfaz') {
          this.router.navigateByUrl(`marketplace/edit-interface`);
        }
        if (title == 'Ver mi perfil') {
          this.router.navigateByUrl(`marketplace/view-profile`);
        }
        if (title == 'Favoritos') {
          this.router.navigateByUrl(`marketplace/favorites`);
        }
        if (title == 'Cerrar sesión') {
          this.loading = true;
          setTimeout(() => (this.loading = false), 2000);
          setTimeout(() => this.headerService.login(), 2000);
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
      
  }
  changeTheme(themeName: string) {
    setTimeout(() => this.themeService.changeTheme(themeName), 100);
    this.checked = themeName;
  }

  goToListProduct() {
    this.router.navigateByUrl(`marketplace/list-products`);
  }

  showMenu() {
    document.getElementById('mode').classList.toggle('show');
  }
}
