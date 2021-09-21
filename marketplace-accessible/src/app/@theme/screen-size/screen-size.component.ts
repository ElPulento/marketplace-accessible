import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'screen-size',
  templateUrl: './screen-size.component.html',
  styleUrls: ['./screen-size.component.scss']
})
export class ScreenSizeComponent implements OnInit {
  themes = [
    {
      value: 'up',
      name: 'Aumentar',
    },
    {
      value: 'down',
      name: 'Disminuir',
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }
  zoom = 100;
  onzoom(event: any) {
    if (this.zoom != null) console.log(event);
    this.zoom = event.target.value;
    document.body.style.zoom = this.zoom + '%';
  }
  zoomUp() {
    this.zoom += 10;
    if (this.zoom <= 200) {
      console.log('zoom es: ', this.zoom);
      document.body.style.zoom = this.zoom + '%';
    }
  }
  zoomDown() {
    this.zoom -= 10;
    if (this.zoom >= 50) {
      console.log('zoom es: ', this.zoom);
      document.body.style.zoom = this.zoom + '%';
    }
  }

}
