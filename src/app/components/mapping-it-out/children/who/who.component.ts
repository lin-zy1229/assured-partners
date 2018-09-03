import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation_for_Page, Animation_for_Shapes } from '../../../../data/globals';

@Component({
	selector: 'app-who',
	templateUrl: './who.component.html',
	styleUrls: ['./who.component.css',
		'../../../../common/common_styles.css'],
	animations: [
		Animation_for_Page,
		Animation_for_Shapes
	],
})
export class WhoComponent implements OnInit, AfterViewInit  {

	stage: number = 0;
	page: number = 0;

	constructor(public router: Router) { }

	ngOnInit() {
	}
	ngAfterViewInit() {
	 }
	onClickPage(_page) {
		this.page = _page;
	}

	onClickShape(_page, _stage) {
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
