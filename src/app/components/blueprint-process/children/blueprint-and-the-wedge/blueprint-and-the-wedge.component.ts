import { Component, OnInit } from '@angular/core';
import { Animation_for_Sentence, Animation_for_4_Shapes } from '../../../../data/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blueprint-and-the-wedge',
  templateUrl: './blueprint-and-the-wedge.component.html',
  styleUrls: ['./blueprint-and-the-wedge.component.css',
  '../../../../common/common_styles.css'],
  animations: [Animation_for_4_Shapes, Animation_for_Sentence],
})
export class BlueprintAndTheWedgeComponent implements OnInit {

  stage: number = 0;
  stage2: number = 0;
	constructor(public router:Router) { }

	ngOnInit() {
	}

	onClickShape(_stage) {
		if (this.stage == _stage) {
			this.stage--;
		}
		else if (this.stage < _stage) {
			this.stage = _stage;
		}
		else {
			if (_stage == 0) {
				this.stage = 0;
			} else {
				this.stage = _stage - 1;
			}
		}
  }
  
	onClickShape2(_stage) {
		if (this.stage2 == _stage) {
			this.stage2--;
		}
		else if (this.stage2 < _stage) {
			this.stage2 = _stage;
		}
		else {
			if (_stage == 0) {
				this.stage2 = 0;
			} else {
				this.stage2 = _stage - 1;
			}
		}
	}

}
