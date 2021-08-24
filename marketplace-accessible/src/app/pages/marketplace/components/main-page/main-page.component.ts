import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToCreateProduct() {
    this.router.navigateByUrl(`marketplace/create-product`);
  }
  goToListProduct() {
    this.router.navigateByUrl(`marketplace/list-products`);
  }
  goToInformation() {
    this.router.navigateByUrl(`marketplace/create-product`);
  }

  change() {
    const xd = document.getElementById('myAppView');

    if (xd !== null) {
      console.log('ddddddddddddddddddddddd');
      xd.style.fontSize = '1000%';
    }
  }
}
