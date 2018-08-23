import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
	selector: 'app-setting-the-stage',
	templateUrl: './setting-the-stage.component.html',
	styleUrls: ['./setting-the-stage.component.css',
		'../../../../common/common_styles.css'],
	animations: [
		trigger(
			'enterAnimation', [
				transition(':enter', [
					style({ transform: 'translateX(100%)', opacity: 0 }),
					animate('300ms', style({ transform: 'translateX(0)', opacity: 1 }))
				]),
				transition(':leave', [
					style({ transform: 'translateX(0)', opacity: 1 }),
					animate('300ms', style({ transform: 'translateX(100%)', opacity: 0 }))
				])
			]
		)
	],
})
export class SettingTheStageComponent implements OnInit {

	stage: number = 0;
	constructor() { }

	ngOnInit() {
	}

	onClick1() {
		this.stage = 1;
	}

	onClick2() {
		this.stage = 2;
	}
	onBack() {
		this.stage = 0;
	}
}