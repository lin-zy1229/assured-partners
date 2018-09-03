import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
	selector: 'app-who-key-question',
	templateUrl: './who-key-question.component.html',
	styleUrls: ['./who-key-question.component.css',
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
export class WhoKeyQuestionComponent implements OnInit {
	questions = [
		"Okay, what is Jerry's last name?",
		"How long has Jerry been your CFO?",
		"How did he get into the role, was he promoted, did he come from another company?",
		"Can you walk me through his typical day? How does he get his hands dirty?",
		"Would it be fair to call Jerry your right hand man?",
		"Why did you mention him? Would he be a person who would be getting updates on the status of the process?",
	];
	stage: number = 0;
	constructor(public router: Router) { }
	ngOnInit() {
	}

	onClick1() {
		this.stage = 1;
	}

	onClick2() {
		this.stage = 2;
	}
	onClick3() {
		this.stage = 3;
	}
	onBack() {
		this.stage = 0;
	}

}
