import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../data/menu';
import { SubMenusTheTruth } from '../../../data/submenus';

@Component({
  selector: 'app-the-truth-submenu',
  templateUrl: './the-truth-submenu.component.html',
  styleUrls: ['./the-truth-submenu.component.css',
  '../../../submenu-area/submenu-area.component.css']
})
export class TheTruthSubmenuComponent implements OnInit {

  public submenus: Menu[] = SubMenusTheTruth;
  constructor() { }

  ngOnInit() {
  }

}
