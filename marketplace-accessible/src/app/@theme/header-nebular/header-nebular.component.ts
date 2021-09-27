import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';


@Component({
  selector: 'header-nebular',
  templateUrl: './header-nebular.component.html',
  styleUrls: ['./header-nebular.component.scss']
})
export class HeaderNebularComponent implements OnInit {
  items = [{ title: 'Editar interfaz' }, { title: 'Información' }];
 
  constructor(

    ) { }

  ngOnInit(): void {
  }
  


}
