import { Component, OnInit } from '@angular/core';
import { GlobalsService, MainMenuEnum } from '../../services/globals.service';

@Component({
  selector: 'app-proactive-service',
  templateUrl: './proactive-service.component.html',
  styleUrls: ['./proactive-service.component.css', 
  '../../app.component.css']
})
export class ProactiveServiceComponent implements OnInit {

  constructor() { 
		GlobalsService.setSelectedMainMenu(MainMenuEnum.ProactiveService);

  }

  ngOnInit() {
  }

}
