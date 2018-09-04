import { Component, OnInit } from '@angular/core';
import { GlobalsService, MainMenuEnum } from '../../services/globals.service';


@Component({
  selector: 'app-blueprint-process',
  templateUrl: './blueprint-process.component.html',
  styleUrls: ['./blueprint-process.component.css', 
              '../../app.component.css']
})
export class BlueprintProcessComponent implements OnInit {

  
  constructor() { 
		GlobalsService.setSelectedMainMenu(MainMenuEnum.BlueprintProcess);

  }

  ngOnInit() {
    
  }

}
