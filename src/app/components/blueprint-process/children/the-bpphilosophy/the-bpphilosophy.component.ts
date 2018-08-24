import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
	selector: 'app-the-bpphilosophy',
	templateUrl: './the-bpphilosophy.component.html',
	styleUrls: ['./the-bpphilosophy.component.css',
		'../../../../common/common_styles.css'],
	animations: [
		trigger(
			'enterAnimation-0', [
				state('void', style({ transform: 'translateX(-90%)' })),
				state('0', style({ transform: 'translateX(0)' })),
				state('1', style({ transform: 'translateX(-90%)' })),
				state('2', style({ transform: 'translateX(-150%)' })),
				transition('void <=> 0', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
				transition('1 <=> 0', animate('500ms ease-out')),
				transition('2 <=> 0', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-1', [
				state('void', style({ transform: 'translateX(0) rotate(-360deg)', opacity: 0 })),
				state('1', style({ transform: 'translateX(100%) rotate(45deg)' })),
				state('2', style({ transform: 'translateX(0) rotate(45deg)' })),
				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-2', [
				state('void', style({ transform: 'translateX(100%) rotate(-360deg)', opacity: 0 })),
				state('2', style({ transform: 'translateX(200%) rotate(45deg)' })),
				transition('2 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-arrow-1', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('1', style({ transform: 'translateX(0)' })),
				state('2', style({ transform: 'translateX(-150%)' })),
				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-arrow-2', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('2', style({ transform: 'translateX(150%)' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterSentenceAnimation', [
				transition(':enter', [
					style({ transform: 'translateX(20%)', background: '#8cddff', opacity: 0 }),
					animate('500ms ease-out', style({ transform: 'translateX(0)', background: '#00000000',opacity: 1 }))
				]),
				transition(':leave', [
					style({ transform: 'translateX(0)', opacity: 1 }),
					animate('500ms ease-out', style({ transform: 'translateX(20%)', background: '#8cddff', opacity: 0 }))
				])
			]
		),
	],
})
export class TheBPPhilosophyComponent implements OnInit {

	stage: number = 0;
	constructor() { }

	ngOnInit() {
	}
	onClick1() {
		this.stage = this.stage>0 ? 0 : 1;
	}
	onClick2() {
		this.stage = this.stage==1 ? 2 : 1;
	}
	onClick3() {
		this.stage = 0;
	}
}
