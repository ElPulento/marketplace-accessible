import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbThemeService } from '@nebular/theme';
@Component({
  selector: 'colors-page',
  templateUrl: './colors-page.component.html',
  styleUrls: ['./colors-page.component.scss']
})
export class ColorsPageComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
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

  currentTheme = 'default';
  constructor(private themeService: NbThemeService,) { }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }
  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

}
