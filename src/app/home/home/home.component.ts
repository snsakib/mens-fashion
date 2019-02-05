import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links = [
    { linkText: 'About Us' },
    { linkText: 'Terms & Conditions' },
    { linkText: 'Contact' }
  ];
  constructor() {}

  ngOnInit() {}
}
