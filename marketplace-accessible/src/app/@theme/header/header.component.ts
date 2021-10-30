import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_WINDOW, NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private nbMenuService: NbMenuService, @Inject(NB_WINDOW) private window) {}

  items = [{ title: 'Iniciar Sesión' }, { title: 'Registrarse' }];

  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if(title == "Iniciar Sesión") {
          this.router.navigateByUrl(`auth/login`);
        }
        if(title == "Registrarse") {
          this.router.navigateByUrl(`auth/register`);
        }
      });
  }
  

  goToListProduct() {
    this.router.navigateByUrl(`marketplace/list-products`);
  }

  showMenu() {
    document.getElementById("mode").classList.toggle("show");
  }
}
