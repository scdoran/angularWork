import { Component, OnInit } from '@angular/core';

import { NavLink } from '../navlink';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  navLinks = [
    new NavLink("Home", "/"),
    new NavLink("About", "/about"),
    new NavLink("Contact", "/contact")
  ];
  
  constructor() {}

  ngOnInit() {}
}
