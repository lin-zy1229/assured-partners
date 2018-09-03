import { Component, OnInit } from '@angular/core';
import { Animation_for_4_Shapes, Animation_for_Sentence, Animation_for_Arrows } from '../../../../data/globals';
import { Router } from '@angular/router';

@Component({
	selector: 'app-outcomes-learning-from-the-prospect',
	templateUrl: './outcomes-learning-from-the-prospect.component.html',
	styleUrls: ['./outcomes-learning-from-the-prospect.component.css',
		'../../../../common/common_styles.css'],
	animations: [Animation_for_4_Shapes, Animation_for_Sentence,Animation_for_Arrows],
})
export class OutcomesLearningFromTheProspectComponent implements OnInit {

	stage: number = 0;
	constructor(public router: Router) { }
	
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
}
