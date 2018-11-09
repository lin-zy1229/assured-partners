import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';
import { Animation_for_Sentence, Animation_for_3_Shapes, Animation_for_Arrows, Animation_for_Shapes } from '../../../../data/globals';

@Component({
	selector: 'app-areferral-or-an-introduction-subitem',
	templateUrl: './areferral-or-an-introduction-subitem.component.html',
	styleUrls: ['./areferral-or-an-introduction-subitem.component.scss'
		, '../../../../common/common_styles.css'],
	animations: [Animation_for_3_Shapes,
		Animation_for_Arrows,
		Animation_for_Shapes,
		Animation_for_Sentence
	]
})
export class AReferralOrAnIntroductionSubitemComponent implements OnInit, AfterViewInit {

	stage: number = 0;
	appSubitemName: string = "app-areferral-or-an-introduction-subitem";

	stageSub1_1: number = 1;


	constructor(public router: Router) {

	}

	ngOnInit() {
		this.moveStepper(2);
	}
	ngAfterViewInit() {
		let selectorQuery = `${this.appSubitemName} .mat-horizontal-stepper-header`;
		let getLastElemIndex = document.querySelectorAll(selectorQuery).length - 1;
		let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];
		element.style.display = "none";
	}

	@ViewChild('stepper') stepper: MatStepper;
	onClickShape(_stage) {
		this.stage = _stage;
		this.moveStepper(_stage - 1);
	}
	selectionChange(event) {
		this.stage = event.selectedIndex + 1;
	}
	selectionChangeSub1_1(event) {
		this.stageSub1_1 = event.selectedIndex + 1;
	}

	moveStepper(index) {
		this.stepper.selectedIndex = index;

		let selectorQuery = `app-leverage-relation ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
		let getLastElemIndex = 0;
		let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];

		element.style.display = "none";
		// if (index == 2) {
		//     element.style.display = "none";
		// } else {
		//     element.style.display = "flex";
		// }
	}

}
