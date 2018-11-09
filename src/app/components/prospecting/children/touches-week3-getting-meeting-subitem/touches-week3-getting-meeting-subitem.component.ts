import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';
import { Animation_for_Sentence, Animation_for_3_Shapes, Animation_for_Arrows, Animation_for_Shapes } from '../../../../data/globals';

@Component({
	selector: 'app-touches-week3-getting-meeting-subitem',
	templateUrl: './touches-week3-getting-meeting-subitem.component.html',
	styleUrls: ['./touches-week3-getting-meeting-subitem.component.scss'
		, '../../../../common/common_styles.css'],
	animations: [Animation_for_3_Shapes,
		Animation_for_Arrows,
		Animation_for_Shapes,
		Animation_for_Sentence
	]
})
export class TouchesWeek3GettingMeetingSubitemComponent implements OnInit {

	stage: number = 0;
	page: number = 0;
	appMainitemName: string = "app-prospecting";
	appSubitemName: string = "app-touches-week3-getting-meeting-subitem";
	sectionCount: number = 2;

	stageSub1_1: number = 1;

	stageSub1_2: number = 1;
	
	constructor(public router: Router) {
	}

	ngOnInit() {
		this.moveStepper(this.sectionCount);
	}
	ngAfterViewInit() {
		let selectorQuery = `${this.appSubitemName} .mat-horizontal-stepper-header`;
		let getLastElemIndex = document.querySelectorAll(selectorQuery).length - 1;
		let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];
		element.style.display = "none";
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
	selectionChange(event) {
		this.page = event.selectedIndex + 1;
	}

	selectionChangeSub1_1(event) {
		this.stageSub1_1 = event.selectedIndex + 1;
	}
	selectionChangeSub1_2(event) {
		this.stageSub1_2 = event.selectedIndex + 1;
	}


	moveStepper(index) {
		this.stepper.selectedIndex = index;

		let selectorQuery = `${this.appMainitemName} ${this.appSubitemName} mat-horizontal-stepper div.mat-horizontal-stepper-header-container`;
		let getLastElemIndex = 0;
		let element = <HTMLElement>document.querySelectorAll(selectorQuery)[getLastElemIndex];

		element.style.display = "none";
		// if (index == this.sectionCount) {
		//     element.style.display = "none";
		// } else {
		//     element.style.display = "flex";
		// }
	}

}
