import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_WINDOW, NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { HeaderService } from '../../pages/marketplace/services/header.service';

@Component({
  selector: 'header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent implements OnInit {

  login = true;
  constructor(private router: Router, private nbMenuService: NbMenuService, @Inject(NB_WINDOW) private window, private headerService: HeaderService) {}

  
  items = [{ title: 'Iniciar Sesión' }, { title: 'Registrarse' }];

  ngOnInit() {
    this.headerService.change.subscribe(login => {
      this.login = login
      console.log(login, 'login header')
    })


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
