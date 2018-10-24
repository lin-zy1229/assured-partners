import { Menu } from './menu';
import { trigger, transition, style, animate, state } from '@angular/animations';

export const MainMenus: Menu[] = [
	{ id: 5, title: 'Prospecting', sub_title: '' },
	{ id: 2, title: 'Leverage Relation', sub_title: '' },
	{ id: 4, title: 'Proactive Service', sub_title: '' },
	{ id: 3, title: 'Mapping It Out', sub_title: '' },
	{ id: 6, title: 'The Truth', sub_title: '' },
	{ id: 1, title: 'Blueprint Process', sub_title: '' },

];



export const Animation_for_Page = [
	trigger(
		'enterAnimation', [
			transition(':enter', [
				style({ transform: 'translateX(100%)', opacity: 0 }),
				animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
			]),
			transition(':leave', [
				style({ transform: 'translateX(0)', opacity: 1 }),
				animate('300ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
			])
		]
	),
]


export const Animation_for_Sentence = [
	trigger(
		'enterSentenceAnimation', [
			state('true', style({ transform: 'translateX(0)', opacity: 1, background: '#00000000' })),
			state('false', style({ transform: 'translateX(20%)', opacity: 0, background: '#8cddff' })),
			transition('true <=> false', animate('500ms ease-out')),
		]
	),
]

export const Animation_for_3_Shapes =
	[
		trigger(
			'enterAnimation-0', [
				state('void', style({ transform: 'translateX(-11em)' })),
				state('0', style({ transform: 'translateX(0)' })),
				state('1', style({ transform: 'translateX(-11em)' })),
				state('2', style({ transform: 'translateX(-18em)' })),
				transition('void <=> 0', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
				transition('0 <=> 1', animate('500ms ease-out')),
				transition('2 <=> 0', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-1', [
				state('void', style({ transform: 'translateX(0) rotate(-360deg)', opacity: 0 })),
				state('1', style({ transform: 'translateX(11em) rotate(-45deg)' })),
				state('2', style({ transform: 'translateX(0) rotate(-45deg)' })),
				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-2', [
				state('void', style({ transform: 'translateX(11em) rotate(-360deg)', opacity: 0 })),
				state('2', style({ transform: 'translateX(18em) rotate(-45deg)' })),
				transition('2 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-arrow-1', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('1', style({ transform: 'translateX(0)' })),
				state('2', style({ transform: 'translateX(-6.5em)' })),
				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-arrow-2', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('2', style({ transform: 'translateX(6.5em)' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
	]

export const Animation_for_4_Shapes =
	[
		trigger(
			'enterAnimation-0', [
				state('void', style({ transform: 'translateX(-11em)' })),
				state('0', style({ transform: 'translateX(0)' })),
				state('1', style({ transform: 'translateX(-11em)' })),
				state('2', style({ transform: 'translateX(-15em)' })),
				state('3', style({ transform: 'translateX(-22em)' })),
				transition('void <=> 0', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
				transition('1 <=> 0', animate('500ms ease-out')),
				transition('2 <=> 0', animate('500ms ease-out')),
				transition('0 <=> 3', animate('500ms ease-out')),
				transition('1 <=> 3', animate('500ms ease-out')),
				transition('2 <=> 3', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-1', [
				state('void', style({ transform: 'translateX(0) rotate(-360deg)', opacity: 0 })),
				state('1', style({ transform: 'translateX(11em) rotate(-45deg)' })),
				state('2', style({ transform: 'translateX(0) rotate(-45deg)' })),
				state('3', style({ transform: 'translateX(-7em) rotate(-45deg)' })),

				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
				transition('1 <=> 3', animate('500ms ease-out')),
				transition('2 <=> 3', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-2', [
				state('void', style({ transform: 'translateX(0) rotate(-360deg)', opacity: 0 })),
				state('2', style({ transform: 'translateX(15em) rotate(-45deg)' })),
				state('3', style({ transform: 'translateX(7em) rotate(-45deg)' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('2 <=> 3', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-3', [
				state('void', style({ transform: 'translateX(0%) rotate(-360deg)', opacity: 0 })),
				state('3', style({ transform: 'translateX(22em) rotate(-45deg)' })),
				transition('3 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-arrow-0', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('1', style({ transform: 'translateX(0)' })),
				state('2', style({ transform: 'translateX(-2.5em)' })),
				state('3', style({ transform: 'translateX(-4.8em)' })),
				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
				transition('1 <=> 3', animate('500ms ease-out')),
				transition('2 <=> 3', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-arrow-1', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('2', style({ transform: 'translateX(2.5em)' })),
				state('3', style({ transform: 'translateX(0)' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-arrow-2', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('3', style({ transform: 'translateX(+4.8em)' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),

		trigger(
			'enterAnimation-4-3-up', [
				state('void', style({ transform: 'translateX(+4.8em) rotate(-360deg)', opacity: 0 })),
				state('2', style({ transform: 'translateX(+4.8em) rotate(-360deg)', opacity: 0 })),
				state('3', style({ transform: 'translateX(22em)  translateY(-6em) rotate(-45deg)' })),
				transition('3 <=> void', animate('500ms ease-out')),
				transition('3 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-4-3-down', [
				state('void', style({ transform: 'translateX(+4.8em) rotate(-360deg)', opacity: 0 })),
				state('2', style({ transform: 'translateX(+4.8em) rotate(-360deg)', opacity: 0 })),
				state('3', style({ transform: 'translateX(22em) translateY(6em) rotate(-45deg)' })),
				transition('3 <=> void', animate('500ms ease-out')),
				transition('3 <=> 2', animate('500ms ease-out')),
			]
		),
	]
//Animation_for_Shapes
export const Animation_for_Shapes =
	[
		trigger(
			'shapeAni-3-0', [
				state('0', style({  })),
				state('1', style({  })),
				state('2', style({  })),
				transition('0 <=> 1', animate('500ms ease-out')),
				transition('0 <=> 2', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),




		trigger(
			'enterAnimation-1-0', [
				state('void', style({ transform: 'translateY(0) ', opacity: 0 })),
				state('0', style({ transform: 'translateY(0em) translateX(-15em)' })),
				transition('0 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-1-1', [
				state('void', style({ transform: 'translateY(0) translateX(0) ', opacity: 0 })),
				state('0', style({ transform: 'translateY(0em) translateX(15em)' })),
				transition('0 <=> void', animate('500ms ease-out')),
			]
		),

		// 
		// 2 steps down animation
		//
		trigger(
			'enterAnimation-down-2-0', [
				state('void', style({ transform: 'translateY(-5em)' })),
				state('0', style({ transform: 'translateY(0)' })),
				state('1', style({ transform: 'translateY(-5em)' })),
				transition('void <=> 0', animate('500ms ease-out')),
				transition('1 <=> 0', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-down-2-1', [
				state('void', style({ transform: 'translateY(0) ', opacity: 0 })),
				state('1', style({ transform: 'translateY(5em) ' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-down-2-1-0', [
				state('void', style({ transform: 'translateY(0) translateX(0) ', opacity: 0 })),
				state('1', style({ transform: 'translateY(5em) translateX(-15em)' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-down-2-1-1', [
				state('void', style({ transform: 'translateY(0) translateX(0)', opacity: 0 })),
				state('1', style({ transform: 'translateY(5em) translateX(15em)' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-down-2-1-0-0', [
				state('void', style({ transform: 'translateY(0) translateX(0) ', opacity: 0 })),
				state('1', style({ transform: 'translateY(16em) translateX(-15em)' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-down-2-1-1-1', [
				state('void', style({ transform: 'translateY(0) translateX(0)', opacity: 0 })),
				state('1', style({ transform: 'translateY(16em) translateX(15em)' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),
		// 3 objects for 2nd step
		trigger(
			'enterAnimation-down-2-1-3-0', [
				state('void', style({ transform: 'translateY(0) translateX(0) ', opacity: 0 })),
				state('1', style({ transform: 'translateY(5em) translateX(-20em)' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-down-2-1-3-1', [
				state('void', style({ transform: 'translateY(0) translateX(0)', opacity: 0 })),
				state('1', style({ transform: 'translateY(5em) translateX(0)' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-down-2-1-3-2', [
				state('void', style({ transform: 'translateY(0) translateX(0)', opacity: 0 })),
				state('1', style({ transform: 'translateY(5em) translateX(20em)' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),


		// arrows for 2 steps with 1,2 objects
		trigger(
			'enterAnimation-down-arrow-2-0-0', [
				state('void', style({ transform: 'translateY(0) translateX(15em) scale(0) ', opacity: 0 })),
				state('1', style({ transform: 'translateY(0em) translateX(15em) scale(1) ' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-down-arrow-2-0-1', [
				state('void', style({ transform: 'translateY(0) scale(0) ', opacity: 0 })),
				state('1', style({ transform: 'translateY(0em) scale(1) ' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),
		// arrows for 2 steps with 1,3 objects
		trigger(
			'enterAnimation-down-arrow-2-0-3-0', [
				state('void', style({ transform: 'translateY(0) translateX(20em) scale(0) ', opacity: 0 })),
				state('1', style({ transform: 'translateY(-1em) translateX(20em) scale(1) ' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-down-arrow-2-0-3-1', [
				state('void', style({ transform: 'translateY(0) scale(0) ', opacity: 0 })),
				state('1', style({ transform: 'translateY(1em) scale(1) ' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-down-arrow-2-0-3-2', [
				state('void', style({ transform: 'translateY(0) scale(0) ', opacity: 0 })),
				state('1', style({ transform: 'translateY(12em) scale(1) ' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-down-arrow-2-0-4-0', [
				state('void', style({ transform: 'translateY(0) translateX(15em) scale(0) ', opacity: 0 })),
				state('1', style({ transform: 'translateY(-1em) translateX(15em) scale(1) ' })),
				transition('1 <=> void', animate('500ms ease-out')),
			]
		),
		// 
		// 2 objects
		//
		trigger(
			'enterAnimation-Linear-2-0', [
				state('void', style({ transform: 'translateX(-11em)' })),
				state('0', style({ transform: 'translateX(0)' })),
				state('1', style({ transform: 'translateX(-11em)' })),
				state('2', style({ transform: 'translateX(-18em)' })),
				transition('void <=> 0', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
				transition('1 <=> 0', animate('500ms ease-out')),
				transition('2 <=> 0', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-Linear-2-1', [
				state('void', style({ transform: 'translateX(0) ', opacity: 0 })),
				state('1', style({ transform: 'translateX(11em) ' })),
				state('2', style({ transform: 'translateX(0) ' })),
				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),

		//
		// 3 objects
		//
		trigger(
			'enterAnimation-3-0', [
				state('void', style({ transform: 'translateX(-11em)' })),
				state('0', style({ transform: 'translateX(0)' })),
				state('1', style({ transform: 'translateX(-11em)' })),
				state('2', style({ transform: 'translateX(-22em)' })),
				transition('void <=> 0', animate('500ms ease-out')),
				transition('0 <=> 1', animate('500ms ease-out')),
				transition('0 <=> 2', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-3-1', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('1', style({ transform: 'translateX(11em)' })),
				state('2', style({ transform: 'translateX(0)' })),
				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-3-2', [
				state('void', style({ transform: 'translateX(11em) ', opacity: 0 })),
				state('2', style({ transform: 'translateX(22em) ' })),
				transition('2 <=> void', animate('500ms ease-out')),
			]
		),


		trigger(
			'enterAnimation-5-0', [
				state('void', style({ transform: 'translateX(-11em)' })),
				state('0', style({ transform: 'translateX(0)' })),
				state('1', style({ transform: 'translateX(-11em)' })),
				state('2', style({ transform: 'translateX(-15em)' })),
				state('3', style({ transform: 'translateX(-22em)' })),
				state('4', style({ transform: 'translateX(-29em)' })),
				transition('void <=> 0', animate('500ms ease-out')),
				transition('0 <=> 1', animate('500ms ease-out')),
				transition('0 <=> 2', animate('500ms ease-out')),
				transition('0 <=> 3', animate('500ms ease-out')),
				transition('0 <=> 4', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
				transition('1 <=> 3', animate('500ms ease-out')),
				transition('1 <=> 4', animate('500ms ease-out')),
				transition('2 <=> 3', animate('500ms ease-out')),
				transition('2 <=> 4', animate('500ms ease-out')),
				transition('3 <=> 4', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-5-1', [
				state('void', style({ transform: 'translateX(0) rotate(-360deg)', opacity: 0 })),
				state('1', style({ transform: 'translateX(11em) rotate(-45deg)' })),
				state('2', style({ transform: 'translateX(0) rotate(-45deg)' })),
				state('3', style({ transform: 'translateX(-7em) rotate(-45deg)' })),
				state('4', style({ transform: 'translateX(-15em) rotate(-45deg)' })),

				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
				transition('1 <=> 3', animate('500ms ease-out')),
				transition('1 <=> 4', animate('500ms ease-out')),
				transition('2 <=> 3', animate('500ms ease-out')),
				transition('2 <=> 4', animate('500ms ease-out')),
				transition('3 <=> 4', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-5-2', [
				state('void', style({ transform: 'translateX(0) rotate(-360deg)', opacity: 0 })),
				state('2', style({ transform: 'translateX(15em) rotate(-45deg)' })),
				state('3', style({ transform: 'translateX(7em) rotate(-45deg)' })),
				state('4', style({ transform: 'translateX(0) rotate(-45deg)' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('2 <=> 3', animate('500ms ease-out')),
				transition('2 <=> 4', animate('500ms ease-out')),
				transition('3 <=> 4', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-5-3', [
				state('void', style({ transform: 'translateX(0%) rotate(-360deg)', opacity: 0 })),
				state('3', style({ transform: 'translateX(22em) rotate(-45deg)' })),
				state('4', style({ transform: 'translateX(15em) rotate(-45deg)' })),
				transition('3 <=> void', animate('500ms ease-out')),
				transition('3 <=> 4', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-5-4', [
				state('void', style({ transform: 'translateX(0%) rotate(-360deg)', opacity: 0 })),
				state('4', style({ transform: 'translateX(29em) rotate(-45deg)' })),
				transition('4 <=> void', animate('500ms ease-out')),
			]
		),
	]

export const Animation_for_Arrows =
	[
		// For 3 Shapes arrow
		trigger(
			'enterAnimation-arrow-3-0', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('1', style({ transform: 'translateX(0)' })),
				state('2', style({ transform: 'translateX(-6.5em)' })),
				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-arrow-3-1', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('2', style({ transform: 'translateX(6.5em)' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),

		// For 3 Shapes formula
		trigger(
			'enterAnimation-formula-3-0', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('1', style({ transform: 'translateX(0)' })),
				state('2', style({ transform: 'translateX(-3em)' })),
				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-formula-3-1', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('2', style({ transform: 'translateX(3em)' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),

		// For 4 Shapes arrows
		trigger(
			'enterAnimation-arrow-4-0', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('1', style({ transform: 'translateX(0)' })),
				state('2', style({ transform: 'translateX(-5.4em)' })),
				state('3', style({ transform: 'translateX(-11.8em)', width: '2.5em' })),
				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
				transition('1 <=> 3', animate('500ms ease-out')),
				transition('2 <=> 3', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-arrow-4-1', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('2', style({ transform: 'translateX(5.4em)' })),
				state('3', style({ transform: 'translateX(0)', width: '2.5em' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-arrow-4-2', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('3', style({ transform: 'translateX(+11.8em)', width: '2.5em' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),

		// For 4 Shapes Formula
		trigger(
			'enterAnimation-formula-4-0', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('1', style({ transform: 'translateX(0)' })),
				state('2', style({ transform: 'translateX(-2.5em)' })),
				state('3', style({ transform: 'translateX(-4.8em)' })),
				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
				transition('1 <=> 3', animate('500ms ease-out')),
				transition('2 <=> 3', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-formula-4-1', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('2', style({ transform: 'translateX(2.5em)' })),
				state('3', style({ transform: 'translateX(0)' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-formula-4-2', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('3', style({ transform: 'translateX(+4.8em)' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		// For 5 Shapes arrows
		trigger(
			'enterAnimation-arrow-5-0', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('1', style({ transform: 'translateX(0)' })),
				state('2', style({ transform: 'translateX(-5.4em)' })),
				state('3', style({ transform: 'translateX(-11.8em)', width: '2.5em' })),
				state('4', style({ transform: 'translateX(-18.3em)', width: '2.5em' })),
				transition('1 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
				transition('1 <=> 3', animate('500ms ease-out')),
				transition('2 <=> 3', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-arrow-5-1', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('2', style({ transform: 'translateX(5.4em)' })),
				state('3', style({ transform: 'translateX(0)', width: '2.5em' })),
				state('4', style({ transform: 'translateX(-6.3em)', width: '2.5em' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-arrow-5-2', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('3', style({ transform: 'translateX(+11.8em)', width: '2.5em' })),
				state('4', style({ transform: 'translateX(+6.3em)', width: '2.5em' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),
		trigger(
			'enterAnimation-arrow-5-3', [
				state('void', style({ transform: 'translateX(0)', opacity: 0 })),
				state('4', style({ transform: 'translateX(18.3em)', width: '2.5em' })),
				transition('2 <=> void', animate('500ms ease-out')),
				transition('1 <=> 2', animate('500ms ease-out')),
			]
		),

	]