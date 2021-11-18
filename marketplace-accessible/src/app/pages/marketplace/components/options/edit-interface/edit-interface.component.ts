import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ScreenSizeService } from '../../../services/screen-size.service';

@Component({
  selector: 'edit-interface',
  templateUrl: './edit-interface.component.html',
  styleUrls: ['./edit-interface.component.scss']
})
export class EditInterfaceComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  currentTheme = 'default';
  fontSize : number;
  disableUp : boolean
  disableDown : boolean
  constructor(
    private themeService: NbThemeService,
    private screenSizeService : ScreenSizeService,
  ) { }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
     //---- theme 
     this.themeService
     .onThemeChange()
     .pipe(
       map(({ name }) => name),
       takeUntil(this.destroy$)
     )
     .subscribe((themeName) => (this.currentTheme = themeName));
     //---- font size
     this.disableUp = this.screenSizeService.disableUp
     this.disableDown = this.screenSizeService.disableDown
     this.fontSize = this.screenSizeService.fontSize
     this.screenSizeService.change.subscribe((fontSize) => {
      this.fontSize = fontSize;

    });

  }
  changeTheme(themeName: string) {
    setTimeout(() => this.themeService.changeTheme(themeName), 100);
    this.currentTheme = themeName;
  }

 
  changeFont(operator){
   if (operator === '+'){
     this.screenSizeService.increase()
     this.disableUp = this.screenSizeService.disableUp
     this.disableDown = this.screenSizeService.disableDown
   }
  else if (operator === '-'){
    this.screenSizeService.decrease()
    this.disableDown = this.screenSizeService.disableDown
    this.disableUp = this.screenSizeService.disableUp
  }
  else if (operator === ''){
    this.screenSizeService.reset()
    this.disableDown = this.screenSizeService.disableDown
    this.disableUp = this.screenSizeService.disableUp
  }
   
  }

 



}
