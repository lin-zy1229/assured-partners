import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../data/menu';
import { SubMenusMappingItOut } from '../../../data/submenus';


@Component({
  selector: 'app-mapping-it-out-submenu',
  templateUrl: './mapping-it-out-submenu.component.html',
  styleUrls: ['./mapping-it-out-submenu.component.css',
  '../../../submenu-area/submenu-area.component.css']
})
export class MappingItOutSubmenuComponent implements OnInit {

  public submenus: Menu[] = SubMenusMappingItOut;

  constructor() { }

  ngOnInit() {
  }

}
