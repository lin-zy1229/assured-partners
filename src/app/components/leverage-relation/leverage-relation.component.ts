import { Component, OnInit } from '@angular/core';
import { GlobalsService, MainMenuEnum } from '../../services/globals.service';

@Component({
  selector: 'app-leverage-relation',
  templateUrl: './leverage-relation.component.html',
  styleUrls: ['./leverage-relation.component.css',
    '../../app.component.css']
})
export class LeverageRelationComponent implements OnInit {

  constructor() {
    GlobalsService.setSelectedMainMenu(MainMenuEnum.LeverageRelation);
  }

  ngOnInit() {
  }

}
