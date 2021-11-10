import { Component, ElementRef, Input, Output } from '@angular/core';
import { LoginComponent} from './auth/pages/login/login.component'
import { HeaderService } from './pages/marketplace/services/header.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marketplace-accessible';

 login = false;
  constructor(
    private headerService : HeaderService,
    ) {}
    ngOnInit() {
      //login
      this.headerService.change.subscribe(login => {
        this.login = login
        console.log(login, 'login header')
      })
    }
}
