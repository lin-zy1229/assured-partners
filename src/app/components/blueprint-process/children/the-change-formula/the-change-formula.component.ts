import { Component, OnInit } from '@angular/core';
import { Animation_for_4_Shapes } from '../../../../data/globals';

@Component({
	selector: 'app-the-change-formula',
	templateUrl: './the-change-formula.component.html',
	styleUrls: ['./the-change-formula.component.css',
		'../../../../common/common_styles.css'],
	animations: Animation_for_4_Shapes,
})
export class TheChangeFormulaComponent implements OnInit {

	stage: number = 0;
	constructor() { }

	ngOnInit() {
	}
	onClick1() {
		this.stage = this.stage > 0 ? 0 : 1;
	}
	onClick2() {
		this.stage = this.stage == 1 ? 2 : 1;
	}
	onClick3() {
		this.stage = this.stage == 2 ? 3 : 2;
	}
	onClick4() {
		this.stage = 0;
	}

}
