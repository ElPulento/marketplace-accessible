import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
