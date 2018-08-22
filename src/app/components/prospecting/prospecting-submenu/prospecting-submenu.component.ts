import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../data/menu';
import { SubMenusProspecting } from '../../../data/submenus';

@Component({
  selector: 'app-prospecting-submenu',
  templateUrl: './prospecting-submenu.component.html',
  styleUrls: ['./prospecting-submenu.component.css',
  '../../../submenu-area/submenu-area.component.css']
})
export class ProspectingSubmenuComponent implements OnInit {

  public submenus: Menu[] = SubMenusProspecting;
  constructor() { }

  ngOnInit() {
  }

}
