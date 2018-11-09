import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';
import { Animation_for_Sentence } from '../../../../data/globals';

@Component({
	selector: 'app-using-sales-navigator-subitem',
	templateUrl: './using-sales-navigator-subitem.component.html',
	styleUrls: ['./using-sales-navigator-subitem.component.scss'
		, '../../../../common/common_styles.css'],
	animations: [
		Animation_for_Sentence]
})
export class UsingSalesNavigatorSubitemComponent implements OnInit {

	stage: number = 0;

	stageSub1: number = 0;
	stageSub2: number = 0;
	stageSub3: number = 0;

	stageSub1_1: number = 1;

	appMainitemName: string = "app-prospecting";
	appSubitemName: string = "app-using-sales-navigator-subitem";

	constructor(public router: Router) {
	}

	ngOnInit() {
		this.moveStepper(3);
		this.moveStepperSub1(2);
		this.moveStepperSub2(3);
		this.moveStepperSub3(2);
	}
	ngAfterViewInit() {
		let selectorQuery = `${this.appSubitemName} .mat-horizontal-stepper-header`;
		let getLastElemIndex = document.querySelectorAll(selectorQuery).length - 1;
		let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];
		element.style.display = "none";
	}

	@ViewChild('stepper') stepper: MatStepper;

	@ViewChild('stepperSub1') stepperSub1: MatStepper;
	@ViewChild('stepperSub2') stepperSub2: MatStepper;
	@ViewChild('stepperSub3') stepperSub3: MatStepper;

	onClickShape(_stage) {
		this.stage = _stage;
		this.moveStepper(_stage - 1);
	}

	onClickShapeSub1(_stage) {
		this.stageSub1 = _stage;
		this.moveStepperSub1(_stage - 1);
	}
	onClickShapeSub2(_stage) {
		this.stageSub2 = _stage;
		this.moveStepperSub2(_stage - 1);
	}
	onClickShapeSub3(_stage) {
		this.stageSub3 = _stage;
		this.moveStepperSub3(_stage - 1);
	}

	selectionChange(event) {
		this.stage = event.selectedIndex + 1;
	}

	selectionChangeSub1(event) {
		this.stageSub1 = event.selectedIndex + 1;
	}
	selectionChangeSub2(event) {
		this.stageSub2 = event.selectedIndex + 1;
	}
	selectionChangeSub3(event) {
		this.stageSub3 = event.selectedIndex + 1;
	}

	selectionChangeSub1_1(event) {
		this.stageSub1_1 = event.selectedIndex + 1;
	}


	moveStepper(index) {
		this.stepper.selectedIndex = index;

		let selectorQuery = `${this.appMainitemName} ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
		let getLastElemIndex = 0;
		let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];

		element.style.display = "none";
		// if (index == 2) {
		//     element.style.display = "none";
		// } else {
		//     element.style.display = "flex";
		// }
	}

	moveStepperSub1(index) {
		this.stepperSub1.selectedIndex = index;

		let selectorQuery = `${this.appMainitemName} ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
		let getLastElemIndex = 0;
		let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];

		element.style.display = "none";
		// if (index == 2) {
		//     element.style.display = "none";
		// } else {
		//     element.style.display = "flex";
		// }
	}

	moveStepperSub2(index) {
		this.stepperSub2.selectedIndex = index;

		let selectorQuery = `${this.appMainitemName} ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
		let getLastElemIndex = 0;
		let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];

		element.style.display = "none";
		// if (index == 2) {
		//     element.style.display = "none";
		// } else {
		//     element.style.display = "flex";
		// }
	}

	moveStepperSub3(index) {
		this.stepperSub3.selectedIndex = index;

		let selectorQuery = `${this.appMainitemName} ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
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
