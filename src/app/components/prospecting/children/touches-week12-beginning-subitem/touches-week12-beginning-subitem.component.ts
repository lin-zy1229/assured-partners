import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';
import {  Animation_for_Sentence, Animation_for_3_Shapes, Animation_for_Arrows, Animation_for_Shapes } from '../../../../data/globals';

@Component({
	selector: 'app-touches-week12-beginning-subitem',
	templateUrl: './touches-week12-beginning-subitem.component.html',
	styleUrls: ['./touches-week12-beginning-subitem.component.scss'
		, '../../../../common/common_styles.css'],
	animations: [Animation_for_3_Shapes,
		Animation_for_Arrows,
		Animation_for_Shapes,
		Animation_for_Sentence
	]
})
export class TouchesWeek12BeginningSubitemComponent implements OnInit {

	page: number = 0;
	stage: number = 0;
	stage2: number = 0;

	appMainitemName: string = "app-prospecting";
	appSubitemName: string = "app-touches-week12-beginning-subitem";

	constructor(public router: Router) {
	}

	ngOnInit() {
		this.moveStepper(0);
	}

	ngAfterViewInit() {
		// let selectorQuery = `${this.appSubitemName} .mat-horizontal-stepper-header`;
		// let getLastElemIndex = document.querySelectorAll(selectorQuery).length - 1;
		// let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];
		// element.style.display = "none";
	}

	@ViewChild('stepper') stepper: MatStepper;
	onClickPage(_page) {
		this.page = _page;
		this.moveStepper(_page - 1);
	}

	onClickShape(_stage) {
		// this.stage = _stage;
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
		// this.stage = _stage;
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
	selectionChange(event) {
		this.page = event.selectedIndex + 1;
	}
	moveStepper(index) {
		this.page = index + 1;

		this.stepper.selectedIndex = index;

		let selectorQuery = `${this.appMainitemName} ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
		let element = <HTMLElement>document.querySelectorAll(selectorQuery)[0];


		// if (index == 2) {
		//     element.style.display = "none";
		// } else {
		//     element.style.display = "flex";
		// }
		element.style.display = "none";
	}

}
