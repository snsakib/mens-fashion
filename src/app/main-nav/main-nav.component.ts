import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'mf-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  pages = [
    { routerLink: '/clothings', linkText: 'CLOTHINGS' },
    { routerLink: '/shoes', linkText: 'SHOES' },
    { routerLink: '/accessories', linkText: 'ACCESSORIES' },
    { routerLink: '/offers', linkText: 'BEST OFFERS' }
  ];
  // If the width of screen is equals or greather than 1024px, the value of the property becomes true.
  isTablet: boolean;

  // Checks the window width & sets the 'isTablet' property value
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth < 768) {
      this.isTablet = false;
    } else {
      this.isTablet = true;
    }
  }

  ngOnInit() {
    this.onResize();
  }

  constructor() {}
}
