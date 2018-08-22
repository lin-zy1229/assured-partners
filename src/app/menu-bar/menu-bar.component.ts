import { Component, OnInit } from '@angular/core';

import { Menu } from '../data/menu';
import { MainMenus } from '../data/globals';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  mainmenus: Menu[] = MainMenus;

  constructor() { }

  ngOnInit() {
  }

}
