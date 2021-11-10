import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from '../../../services/screen-size.service';

@Component({
  selector: 'view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  fontSize: number;

  constructor(
    private screenSizeService : ScreenSizeService,
  ) { }

  ngOnInit() {
    //---- font size
    this.fontSize = this.screenSizeService.fontSize
    this.screenSizeService.change.subscribe((fontSize) => {
     this.fontSize = fontSize;
   });
  }

}
