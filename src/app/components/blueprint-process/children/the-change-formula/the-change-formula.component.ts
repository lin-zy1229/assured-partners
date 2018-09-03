import { Component, OnInit } from '@angular/core';
import { Animation_for_4_Shapes } from '../../../../data/globals';
import { Router } from '@angular/router';

@Component({
	selector: 'app-the-change-formula',
	templateUrl: './the-change-formula.component.html',
	styleUrls: ['./the-change-formula.component.css',
		'../../../../common/common_styles.css'],
	animations: Animation_for_4_Shapes,
})
export class TheChangeFormulaComponent implements OnInit {

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
