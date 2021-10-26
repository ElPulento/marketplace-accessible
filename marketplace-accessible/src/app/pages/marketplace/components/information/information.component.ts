import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor() { }
  @ViewChild('item1') accordion;
  
  
  ngOnInit(): void {
  }

 

  toggle() {
    this.accordion.toggle();
  }

}
