import { Component, OnInit } from '@angular/core';
import { Menu } from '../data/menu';
import { SubMenusBlueprint } from '../data/submenus';

@Component({
  selector: 'app-submenu-area',
  templateUrl: './submenu-area.component.html',
  styleUrls: ['./submenu-area.component.css']
})
export class SubmenuAreaComponent implements OnInit {

  public submenus: Menu[] = SubMenusBlueprint;

  constructor() { }

  ngOnInit() {
  }

}
