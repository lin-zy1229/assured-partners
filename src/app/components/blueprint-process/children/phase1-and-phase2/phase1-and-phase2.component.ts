import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phase1-and-phase2',
  templateUrl: './phase1-and-phase2.component.html',
  styleUrls: ['./phase1-and-phase2.component.css',
  '../../../../common/common_styles.css']
})
export class Phase1AndPhase2Component implements OnInit {

  constructor(public router: Router) { }
  
  ngOnInit() {
  }

}
