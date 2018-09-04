import { Component, OnInit } from '@angular/core';
import { GlobalsService, MainMenuEnum } from '../../services/globals.service';

@Component({
  selector: 'app-the-truth',
  templateUrl: './the-truth.component.html',
  styleUrls: ['./the-truth.component.css', 
  '../../app.component.css']
})
export class TheTruthComponent implements OnInit {

  constructor() {
		GlobalsService.setSelectedMainMenu(MainMenuEnum.TheTruth);
    
  }

  ngOnInit() {
    
  }

}
