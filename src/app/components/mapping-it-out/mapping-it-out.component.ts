import { Component, OnInit } from '@angular/core';
import { GlobalsService, MainMenuEnum } from '../../services/globals.service';

@Component({
  selector: 'app-mapping-it-out',
  templateUrl: './mapping-it-out.component.html',
  styleUrls: ['./mapping-it-out.component.css', 
  '../../app.component.css']
})
export class MappingItOutComponent implements OnInit {

  constructor() { 
    GlobalsService.setSelectedMainMenu(MainMenuEnum.MappingItOut);
  }

  ngOnInit() {
  }

}
