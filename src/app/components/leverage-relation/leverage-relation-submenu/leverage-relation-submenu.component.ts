import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../data/menu';
import { SubMenusLeverageRelation } from '../../../data/submenus';

@Component({
  selector: 'app-leverage-relation-submenu',
  templateUrl: './leverage-relation-submenu.component.html',
  styleUrls: ['./leverage-relation-submenu.component.css',
  '../../../submenu-area/submenu-area.component.css']
})
export class LeverageRelationSubmenuComponent implements OnInit {

  public submenus: Menu[] = SubMenusLeverageRelation;

  constructor() { }

  ngOnInit() {  }

}
