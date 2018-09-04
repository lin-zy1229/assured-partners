import { Component, OnInit } from '@angular/core';
import { MainMenuEnum, GlobalsService } from '../../services/globals.service';

@Component({
  selector: 'app-prospecting',
  templateUrl: './prospecting.component.html',
  styleUrls: ['./prospecting.component.css', 
  '../../app.component.css']
})
export class ProspectingComponent implements OnInit {

  constructor() { 
		GlobalsService.setSelectedMainMenu(MainMenuEnum.Prospecting);

  }

  ngOnInit() {
  }

}
