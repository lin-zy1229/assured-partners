import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../data/menu';
import { SubMenusBlueprint } from '../../../data/submenus';

@Component({
  selector: 'app-blueprint-process-submenu',
  templateUrl: './blueprint-process-submenu.component.html',
  styleUrls: ['./blueprint-process-submenu.component.css',
              '../../../submenu-area/submenu-area.component.css']
})

export class BlueprintProcessSubmenuComponent implements OnInit {

  submenus: Menu[] = SubMenusBlueprint;
  mainmenu_id: Number = 1;

  constructor() { }

  ngOnInit() {
  }

}
