import { Component, OnInit } from '@angular/core';
import {  Animation_for_3_Shapes, Animation_for_Arrows } from '../../../../data/globals';
import { Router } from '@angular/router';

@Component({
	selector: 'app-some-analogies',
	templateUrl: './some-analogies.component.html',
	styleUrls: ['./some-analogies.component.css',
		'../../../../common/common_styles.css'],
	animations: [Animation_for_3_Shapes,
		Animation_for_Arrows
	]
})
export class SomeAnalogiesComponent implements OnInit {

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
