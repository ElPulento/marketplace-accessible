import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'edit-interface',
  templateUrl: './edit-interface.component.html',
  styleUrls: ['./edit-interface.component.scss']
})
export class EditInterfaceComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  currentTheme = 'default';
  checked: string;
  themes = [
    {
      value: 'default',
      name: 'Modo claro',
    },
    {
      value: 'dark',
      name: 'Modo oscuro',
    },
    
  ];

  constructor(
    private themeService: NbThemeService,
  ) { }

  ngOnInit() {
    this.checked = this.themeService.currentTheme;
     //----
     this.themeService
     .onThemeChange()
     .pipe(
       map(({ name }) => name),
       takeUntil(this.destroy$)
     )
     .subscribe((themeName) => (this.currentTheme = themeName));

  }
  changeTheme(themeName: string) {
    setTimeout(() => this.themeService.changeTheme(themeName), 100);
    this.checked = themeName;
  }

  zoom = 100;
  onzoom(event: any) {
    if (this.zoom != null) console.log(event);
    this.zoom = event.target.value;
    document.body.style.zoom = this.zoom + '%';
  }
  zoomUp() {
    if (this.zoom <= 200) {
    this.zoom += 5;
    
      console.log('zoom es: ', this.zoom);
      document.body.style.zoom = this.zoom + '%';
    }
  }
  zoomDown() {
    if (this.zoom >= 100) {
    this.zoom -= 5;
    
      console.log('zoom es: ', this.zoom);
      document.body.style.zoom = this.zoom + '%';
    }
  }

}
