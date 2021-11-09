import { Component, OnInit, ViewChild } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  fontSize: number;
  constructor(
    private screenSizeService : ScreenSizeService,
  ) { }
  @ViewChild('item1') accordion;
  
  
  ngOnInit(): void {
    //---- font size
    this.fontSize = this.screenSizeService.fontSize
    this.screenSizeService.change.subscribe((fontSize) => {
     this.fontSize = fontSize;
   });
  }

 

  toggle() {
    this.accordion.toggle();
  }

}
