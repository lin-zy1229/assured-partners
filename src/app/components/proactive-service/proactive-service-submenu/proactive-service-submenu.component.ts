import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../data/menu';
import {  SubMenusProactiveService } from '../../../data/submenus';

@Component({
  selector: 'app-proactive-service-submenu',
  templateUrl: './proactive-service-submenu.component.html',
  styleUrls: ['./proactive-service-submenu.component.css',
  '../../../submenu-area/submenu-area.component.css',
  '../../../submenu-area/submenu-area.component.css']
})
export class ProactiveServiceSubmenuComponent implements OnInit {

  public submenus: Menu[] = SubMenusProactiveService;
  constructor() { }

  ngOnInit() {
  }

}
